import queue
import time
from backtester.events import MarketEvent, SignalEvent, OrderEvent, FillEvent

from backtester.dataHandler import HistoricDataHandler
from backtester.strategy import BuyAndHoldStrategy
from backtester.portfolio import NaivePortfolio
from backtester.executionHandler import SimulatedExecutionHandler

# Declare the components with respective parameters
events = queue.Queue()
bars = HistoricDataHandler(events, ["AAPL"], start="2015", end="2020-07-12")
strategy = BuyAndHoldStrategy(bars, events)
port = NaivePortfolio(bars, events, "2015-01-01")
broker = SimulatedExecutionHandler(events)


while True:
    # Update the bars (specific backtest code, as opposed to live trading)
    if bars.continue_backtest == True:
        bars.update_bars()
    else:
        break

    # Handle the events
    while True:
        try:
            event = events.get(block=False)
        except queue.Empty:
            break
        else:
            if event is not None:
                if isinstance(event, MarketEvent):
                    strategy.calculate_signals(event)
                    port.update_timeindex(event)

                elif isinstance(event, SignalEvent):
                    port.update_signal(event)

                elif isinstance(event, OrderEvent):
                    broker.execute_order(event)
                    event.print_order()

                elif isinstance(event, FillEvent):
                    port.update_fill(event)
                    event.print_fill()
                    port.print_portfolio_status()

import datetime
import pandas as pd
from yahoo_fin.stock_info import *

from abc import ABCMeta, abstractmethod

from .events import MarketEvent

class DataHandler(metaclass=ABCMeta):
    """
    DataHandler is an abstract base class providing an interface for
    all subsequent (inherited) data handlers (both live and historic).

    The goal of a (derived) DataHandler object is to output a generated
    set of bars (OLHCVI) for each symbol requested.

    This will replicate how a live strategy would function as current
    market data would be sent "down the pipe". Thus a historic and live
    system will be treated identically by the rest of the backtesting suite.
    """

    @abstractmethod
    def get_latest_bars(self, symbol, N=1):
        """
        Returns the last N bars from the latest_symbol list,
        or fewer if less bars are available.
        """
        raise NotImplementedError("Should implement get_latest_bars()")

    @abstractmethod
    def update_bars(self):
        """
        Pushes the latest bar to the latest symbol structure
        for all symbols in the symbol list.
        """
        raise NotImplementedError("Should implement update_bars()")

class HistoricDataHandler(DataHandler):
    """
    HistoricDataHandler is designed to grab Yahoo finance
    data for each requested symbol  and provide an interface
    to obtain the "latest" bar in a manner identical to a live
    trading interface.
    """

    def __init__(self, events, symbol_list, start=None, end=None, interval='1d'):
        """
        Initialises the historic data handler by requesting
        a list of symbols and the start and end date of data
        and an interval between bars

        Parameters:
        events - The Event Queue.
        symbol_list - A list of symbol strings.
        start - The start date for the data
        end - The end date for the data
        interval - The interval between bars
        """
        self.events = events
        self.symbol_list = symbol_list

        self.symbol_data = {}
        self.latest_symbol_data = {sym.upper(): [] for sym in self.symbol_list}
        self.continue_backtest = True
        self.start_date = start
        self.end_date = end
        self.interval = interval

        self.get_data()

    def get_data(self):
        """
        Gets price data from Yahoo finance using the yahoo_fin package.
        The package is a web scraper
        """
        self.symbol_data = {sym.upper(): get_data(sym, start_date=self.start_date, end_date=self.end_date, interval=self.interval) for sym in
                     self.symbol_list}
        self.lengths = {sym.upper(): len(self.symbol_data[sym]) for sym in self.symbol_list}
        self.analysts_info = {sym.upper(): get_analysts_info(sym) for sym in self.symbol_list}
        self.balance_sheets = {sym.upper(): get_balance_sheet(sym) for sym in self.symbol_list}
        self.cash_flows = {sym.upper(): get_cash_flow(sym) for sym in self.symbol_list}
        self.income_statements = {sym.upper(): get_income_statement(sym) for sym in self.symbol_list}

        # turn symbol data into a generator
        for symbol in self.symbol_list:
            # iterrows() creates a generator
            self.symbol_data[symbol] = self.symbol_data[symbol].iterrows()


    def _get_new_bar(self, symbol):
        """
        Returns the latest bar from the data feed as a tuple of
        (symbol, datetime, open, low, high, close, volume).
        """
        for b in self.symbol_data[symbol]:
            yield tuple([symbol, b[0], b[1][0], b[1][1], b[1][2], b[1][3], b[1][4]])

    def get_latest_bars(self, symbol, N=1):
        """
        Returns the last N bars from the latest_symbol list,
        or N-k if less available.
        """
        try:
            bars_list = self.latest_symbol_data[symbol]
        except KeyError:
            print("That symbol is not available in the historical data set.")
        else:
            return bars_list[-N:]

    def update_bars(self):
        """
        Pushes the latest bar to the latest_symbol_data structure
        for all symbols in the symbol list.
        """
        for s in self.symbol_list:
            try:
                bar = self._get_new_bar(s).__next__()
            except StopIteration:
                self.continue_backtest = False
            else:
                if bar is not None and len(bar) > 0:
                    self.latest_symbol_data[s].append(bar)
        self.events.put(MarketEvent())
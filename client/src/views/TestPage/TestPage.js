import React, {useEffect, useState}from "react";


export default function TestPage() {
  const [assetData, setAssetData] = useState("");
  const [strategyData, setStrategyData] = useState("");
  const [returnsData, setReturnsData] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/all_strats').then(res => res.json()).then(data => {
          setAssetData(data[0].assets);
          setStrategyData(data[0].strategy);
          setReturnsData(data[0].returns);
        }
    )
  });
  return (
      <div>
        <div>
          {assetData}
        </div>
        <div>
          {strategyData}
        </div>
        <div>
          2010: {returnsData['2010']}
        </div>
        <div>
          2011: {returnsData['2011']}
        </div>
        <div>
          2012: {returnsData['2012']}
        </div>
        <div>
          2013: {returnsData['2013']}
        </div>
        <div>
          2014: {returnsData['2014']}
        </div>
        <div>
          2015: {returnsData['2015']}
        </div>
      </div>
  )

}
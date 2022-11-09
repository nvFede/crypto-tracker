import React from "react";

const Table = ({ latestPrices }) => {
  console.log(latestPrices);
  return (
    <>
      <h2>Latest Prices</h2>

      <div className="container">
        <div className="row text-uppercase font-weigth-bold border border-dark p-3 m-1">
          <p className="col-1">#ID</p>
          <p className="col-2 font-weight-bold">Name</p>
          <p className="col-2">Price</p>
          <p className="col-1"> % 7d</p>
          <p className="col-3">MarketCap</p>
          <p className="col-2">Market Share</p>
        </div>
        {latestPrices.map((value, index) => {
          return (
            <div
              key={value.id}
              className="row anima p-3  border border-dark m-1"
            >
              <p className="col-1 ">{index + 1}</p>
              <p className="col-2  ">
                {value.name}
                <small className="ml-5">
                  <span className=" font-italic">({value.symbol})</span>
                </small>
              </p>
              <p className="col-2  ">
                {value.quote.USD.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="col-1  ">
                {value.quote.USD.percent_change_7d.toLocaleString("en-US", {
                  style: "percent",
                })}
              </p>
              <p className="col-3  ">
                {value.quote.USD.market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="col-1 ">
                {(value.quote.USD.market_cap_dominance * 10).toLocaleString(
                  "en-US",
                  { style: "percent" }
                )}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Table;

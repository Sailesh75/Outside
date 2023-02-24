import React from "react";

const DataContainer = ({ text, value }) => {
  return (
    <>
      <div className="data_items">
        <p className="data_items_text">{text}</p>
        <p className="data_items_value">{value}</p>
      </div>
    </>
  );
};

const Overview = () => {
  return (
    <>
      <div className="data_cards">
        <DataContainer text={`Unresolved`} value={60} />
        <DataContainer text={`Overdue`} value={16} />
        <DataContainer text={`Open`} value={43} />
        <DataContainer text={`On Hold`} value={64} />
      </div>
    </>
  );
};

export default Overview;

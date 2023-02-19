import React, { useState } from "react";
import Header from "./header/header";
import Table from "./table/Table";

const Screen = () => {
  const [searchKey, setSearchKey] = useState("");
  const [filterKey, setFilterKey] = useState(null);

  return (
    <div className="dashboard-screen">
      <Header searchKey={searchKey} setSearchKey={setSearchKey} />
      <Table
        searchKey={searchKey}
        filterKey={filterKey}
        setFilterKey={setFilterKey}
      />
    </div>
  );
};

export default Screen;

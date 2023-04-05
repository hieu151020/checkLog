import React from "react";

import Routers from "../../../routers/route";

function Layout(props) {
  return (
    <div className={"wrapper"}>
      <div className={"container"}>
        <Routers />
      </div>
    </div>
  );
}

export default Layout;

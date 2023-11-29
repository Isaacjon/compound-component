import "./App.scss";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";

import { useApp } from "./hooks/App.hooks";
import { TableContainer } from "./components/table";
import ContainerComponent from "./components/containerComponent";

function App() {
  const { tableData } = useApp();

  return (
    <ContainerComponent>
      {/*container component pattern  */}
      <TableContainer tableData={tableData} />
      {/*container component pattern  */}
    </ContainerComponent>
  );
}

export default App;

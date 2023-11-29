import { useEffect, useState } from "react";
import { data } from "../../test-data";

export const useApp = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTableData(data);
    }, 1500);
  }, []);

  return {
    tableData,
  };
};

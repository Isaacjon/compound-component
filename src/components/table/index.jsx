import { CTable } from "../cTable";
import { TablePagination } from "../tablePagination";
import { useTable } from "../../hooks/table.hooks";

/* eslint-disable react/prop-types */
export const TableContainer = ({ tableData }) => {
  const {
    currentPage,
    records = [],
    numbers = [],
    prevPage = () => {},
    nextPage = () => {},
    changePage = () => {},
  } = useTable(tableData);

  return (
    <div>
      <CTable>
        <CTable.Thead>
          <CTable.Tr>
            <CTable.Th className="header">No</CTable.Th>
            <CTable.Th className="header">Name</CTable.Th>
            <CTable.Th className="header">Phone</CTable.Th>
            <CTable.Th className="header">Email</CTable.Th>
          </CTable.Tr>
        </CTable.Thead>
        <CTable.Tbody>
          {records.map((item, idx) => {
            return (
              <CTable.Tr key={idx}>
                <CTable.Td>{item.idx}</CTable.Td>
                <CTable.Td>{item.name}</CTable.Td>
                <CTable.Td>{item.phone}</CTable.Td>
                <CTable.Td>{item.email}</CTable.Td>
              </CTable.Tr>
            );
          })}
        </CTable.Tbody>
      </CTable>

      <TablePagination>
        <TablePagination.PrevButton onClick={prevPage} />
        <TablePagination.IndexButton
          label={currentPage}
          onClick={changePage}
          numbers={numbers}
          currentPage={currentPage}
        />
        <TablePagination.NextButton onClick={nextPage} label="NEXT" />
      </TablePagination>
    </div>
  );
};

import { CTable } from "../cTable";
import { TablePagination } from "../tablePagination";
import { useTable } from "../../hooks/table.hooks";

/* eslint-disable react/prop-types */
export const TableContainer = ({ tableData }) => {
  const {
    currentPage,
    records = [],
    numbers = [],

    getPrevButtonProps = () => {},
    getNextButtonProps = () => {},
    getIndexButtonProps = () => {},

    getThProps = () => {},
  } = useTable(tableData);

  return (
    <div>
      <CTable>
        <CTable.Thead>
          <CTable.Tr>
            <CTable.Th {...getThProps({ className: "header" })}>No</CTable.Th>
            <CTable.Th {...getThProps({ className: "header" })}>Name</CTable.Th>
            <CTable.Th {...getThProps({ className: "header" })}>
              Phone
            </CTable.Th>
            <CTable.Th {...getThProps({ className: "header" })}>
              Email
            </CTable.Th>
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
        <TablePagination.PrevButton
          {...getPrevButtonProps({
            label: "PPREV",
            className: currentPage === 1 ? "disabled" : "",
          })}
        />
        <TablePagination.IndexButton
          {...getIndexButtonProps({
            label: currentPage,
            currentPage,
            numbers,
            onClick: () => console.log("currentPage", currentPage),
          })}
        />
        <TablePagination.NextButton
          {...getNextButtonProps({
            label: "NNEXT",
            className: currentPage === numbers.length ? "disabled" : "",
          })}
        />
      </TablePagination>
    </div>
  );
};

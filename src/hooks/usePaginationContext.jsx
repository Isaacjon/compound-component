/* eslint-disable react/prop-types */
// const [currentPage, setCurrentPage] = useState(1);
// const recordsPerPage = 5;
// const lastIndex = currentPage * recordsPerPage;
// const firstIndex = lastIndex - recordsPerPage;
// const records = data?.slice(firstIndex, lastIndex);
// const numOfPages = Math.ceil(data.length / recordsPerPage);
// const numbers = [...Array(numOfPages + 1).keys()].slice(1);

import { createContext, useContext } from "react";

// const prevPage = () => {
//   if (currentPage !== 1) setCurrentPage(currentPage - 1);
// };

// const nextPage = () => {
//   if (currentPage !== numOfPages) setCurrentPage(currentPage + 1);
// };

// const changePage = (pageNum) => {
//   setCurrentPage(pageNum);
// };

const PaginationContext = createContext(undefined);

export function PaginationProvider({ children, value }) {
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
}

export default function usePaginationContext() {
  const context = useContext(PaginationContext);
  if (context === undefined) {
    throw new Error(
      "usePaginationContext must be used within a PaginationProvider"
    );
  }
  return context;
}

// export { PaginationProvider, usePaginationContext };

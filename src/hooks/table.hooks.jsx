import React, { useState } from "react";

//Function which concat all functions together
const callFnsInSequence =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

export const useTable = (data = []) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data?.slice(firstIndex, lastIndex);
  const numOfPages = Math.ceil(data?.length / recordsPerPage);
  const numbers = [...Array(numOfPages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== numOfPages) setCurrentPage(currentPage + 1);
  };

  const changePage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const getPrevButtonProps = ({ onClick, ...otherProps }) => ({
    onClick: callFnsInSequence(prevPage, onClick),
    ...otherProps,
  });

  const getNextButtonProps = ({ onClick, ...otherProps }) => ({
    onClick: callFnsInSequence(nextPage, onClick),
    ...otherProps,
  });

  const getIndexButtonProps = ({ onClick, ...otherProps }) => ({
    onClick: callFnsInSequence(changePage, onClick),
    ...otherProps,
  });

  const getThProps = ({ ...props }) => ({
    ...props,
  });

  return {
    currentPage,
    records,
    numbers,

    getNextButtonProps,
    getPrevButtonProps,
    getIndexButtonProps,

    getThProps,
  };
};

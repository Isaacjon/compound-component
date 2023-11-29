/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { PaginationProvider } from "../../hooks/usePaginationContext";

import { PrevButton } from "../prevButton";
import { NextButton } from "../nextButton";
import { IndexButton } from "../indexButton";

const TablePagination = ({ children }) => {
  if (!children) return null;

  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

TablePagination.PrevButton = PrevButton;
TablePagination.NextButton = NextButton;
TablePagination.IndexButton = IndexButton;

export { TablePagination };

/* eslint-disable react/prop-types */

import { Tbody } from "../tbody";
import { Td } from "../tdComponent";
import { Th } from "../thComponent";
import { Thead } from "../thead";
import { Tr } from "../trComponent";

const CTable = ({ children }) => {
  return <table className="custom-table">{children}</table>;
};

CTable.Thead = Thead;
CTable.Tbody = Tbody;
CTable.Tr = Tr;
CTable.Th = Th;
CTable.Td = Td;

export { CTable };

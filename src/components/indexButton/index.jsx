/* eslint-disable react/prop-types */

export const IndexButton = ({
  className,
  onClick = () => {},
  numbers,
  currentPage,
}) => {
  return numbers?.map((n) => (
    <li
      key={n}
      className={`page-item ${className} ${currentPage === n ? "active" : ""}`}
      onClick={() => onClick(n)}
    >
      <a href="#">{n}</a>
    </li>
  ));
};

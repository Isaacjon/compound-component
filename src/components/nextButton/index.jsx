/* eslint-disable react/prop-types */

export const NextButton = ({ onClick = () => {}, className }) => {
  return (
    <li className={`page-item ${className}`} onClick={onClick}>
      <a href="#">PREV</a>
    </li>
    // <li className={`page-item`} onClick={prevPage}>
    //   <a href="#">PREV</a>
    // </li>
  );
};

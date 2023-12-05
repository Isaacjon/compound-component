/* eslint-disable react/prop-types */

export const NextButton = ({ onClick = () => {}, className, label='NEXT' }) => {
  return (
    <li className={`page-item ${className}`} onClick={onClick}>
      <a href="#">{label}</a>
    </li>
    // <li className={`page-item`} onClick={prevPage}>
    //   <a href="#">PREV</a>
    // </li>
  );
};

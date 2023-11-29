export const PrevButton = ({ onClick = () => {}, className }) => {
  return (
    <li className={`page-item ${className}`} onClick={onClick}>
      <a href="#">PREV</a>
    </li>
    //  <li className={`page-item`} onClick={prevPage}>
    //   <a href="#">PREV</a>
    //  </li>
  );
};

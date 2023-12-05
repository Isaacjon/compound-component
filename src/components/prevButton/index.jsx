export const PrevButton = ({ onClick = () => {}, className, label="PREV" }) => {
  return (
    <li className={`page-item ${className}`} onClick={onClick}>
      <a href="#">{label}</a>
    </li>
    //  <li className={`page-item`} onClick={prevPage}>
    //   <a href="#">PREV</a>
    //  </li>
  );
};

import React from "react";
import { Pagination } from "semantic-ui-react";
import s from "./Paginator.module.css";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let numberPages = Math.ceil(portionSize * 0.2);

  let handleInputChange = (e, p) => {
    onPageChanged(p.activePage);
  };

  return (
    <div className={s.pagination}>
      <Pagination
        boundaryRange={0}
        defaultActivePage={currentPage}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={numberPages}
        totalPages={pagesCount}
        onPageChange={handleInputChange}
      />
    </div>
  );
};

export default Paginator;

import { useEffect, useState } from "react";
import { Case, Pagination } from "../types/cases";
import moment from "moment";
import ReactPaginate from "react-paginate";

import "../styles/Cases.scss";

export const AllCasesTable = ({ cases }: { cases: Case[] }) => {
  const [pagination, setPagination] = useState<Pagination>({
    data: cases,
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: [],
  });

  useEffect(() => {
    setPagination((prevState) => {
      return {
        ...prevState,
        pageCount: prevState.data.length / prevState.numberPerPage,
        currentData: prevState.data.slice(
          pagination.offset,
          pagination.offset + pagination.numberPerPage
        ),
      };
    });
  }, [pagination.numberPerPage, pagination.offset]);

  const handlePageClick = (event: any) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };

  return (
    <div>
      {pagination.currentData &&
        pagination.currentData.map((item, index) => (
          <div key={index} className="post">
            <p>Date: {moment(item.date).format("DD-MM-YYYY")}</p>
            <h3>Cases: {item.cases}</h3>
          </div>
        ))}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

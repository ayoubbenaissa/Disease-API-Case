export interface Case {
  cases: string;
  date: string;
}

export interface Pagination {
  data: Case[];
  offset: number;
  numberPerPage: number;
  pageCount: number;
  currentData: Case[];
}

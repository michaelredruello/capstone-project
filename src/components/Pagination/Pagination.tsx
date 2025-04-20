import "./index.css";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ page, setPage }: PaginationProps) => {
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        disabled={page === 0}
      >
        Prev
      </button>
      <span className="pagination-page">Page {page + 1}</span>
      <button
        className="pagination-btn"
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

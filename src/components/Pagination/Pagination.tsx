import "./index.css";

type PaginationProps = {
  page: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, onPageChange }: PaginationProps) => {
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(Math.max(page - 1, 0))}
        disabled={page === 0}
      >
        Prev
      </button>
      <span className="pagination-page">Page {page + 1}</span>
      <button className="pagination-btn" onClick={() => onPageChange(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

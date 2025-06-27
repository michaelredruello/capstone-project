import "./index.css";

type SortSelectorProps = {
  sortBy: string;
  setSortBy: (value: string) => void;
};

const SortSelector = ({ sortBy, setSortBy }: SortSelectorProps) => {
  return (
    <div className="sort-selector-container">
      <select
        className="sort-selector"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="savings">Sort by Discount</option>
        <option value="price">Sort by Price</option>
      </select>
    </div>
  );
};

export default SortSelector;

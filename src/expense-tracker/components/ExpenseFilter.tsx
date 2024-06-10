import { categories } from "../categories";

interface Props {
  selectCategory: (category: string) => void;
}

const ExpenseFilter = ({ selectCategory }: Props) => {
  return (
    <select
      onChange={(event) => selectCategory(event.target.value)}
      className="form-select"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;

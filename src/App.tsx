import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Rent", amount: 1600, category: "Utilities" },
    { id: 2, description: "Groceries", amount: 100, category: "Groceries" },
    { id: 3, description: "Gas", amount: 40, category: "Entertainment" },
  ]);

  const visibleEpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onAddExpense={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          selectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleEpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;

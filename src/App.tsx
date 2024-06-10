import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const expenses = [
    { id: 1, description: "Rent", amount: 1600, category: "Housing" },
    { id: 2, description: "Groceries", amount: 100, category: "Food" },
    { id: 3, description: "Utilities", amount: 150, category: "Utilities" },
  ];

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Delete: " + id)}
      ></ExpenseList>
    </div>
  );
}

export default App;

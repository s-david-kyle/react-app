import ExpenseList from "./components/expense-tracker/ExpenseList";

function App() {
  const expenses = [
    { id: 1, description: "aaa", amount: 100, category: "Utilities" },
    { id: 2, description: "qwea", amount: 100, category: "Utilities" },
    { id: 3, description: "aqwea", amount: 100, category: "Utilities" },
    { id: 4, description: "asdga", amount: 100, category: "Utilities" },
    { id: 5, description: "asdgsda", amount: 100, category: "Utilities" },
  ];

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}

export default App;

// import { useState } from "react";
// import ExpenseList from "../components/expense-tracker/components/ExpenseList";
// import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
// import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";

// function App() {
//   const [selectedCategory, setSelectedCategoy] = useState("");

//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "aaa", amount: 100, category: "Utilities" },
//     { id: 2, description: "qwea", amount: 100, category: "Utilities" },
//     { id: 3, description: "aqwea", amount: 100, category: "Utilities" },
//     { id: 4, description: "asdga", amount: 100, category: "Utilities" },
//     { id: 5, description: "asdgsda", amount: 100, category: "Utilities" },
//   ]);

//   const visibleExpenses = selectedCategory
//     ? expenses.filter((e) => e.category === selectedCategory)
//     : expenses;

//   return (
//     <div>
//       <div className="mb-5">
//         <ExpenseForm
//           onSubmit={(expense) =>
//             setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
//           }
//         />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategoy(category)}
//         />
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//       />
//     </div>
//   );
// }

// export default App;

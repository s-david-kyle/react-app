import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
  ];
  let heading = "Cities";

  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

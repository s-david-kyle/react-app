import ListGroup from "./components/ListGroup";
//import { ListGroupProps } from "./components/ListGroup";

function App() {
  //let prop = {

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
  //}
  return (
    <div>
      <ListGroup items={items} heading={heading} />
    </div>
  );
}

export default App;

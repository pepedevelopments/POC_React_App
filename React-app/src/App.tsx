//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  /* let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  ); */

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleClick = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && (
        <Alert
          type="alert alert-warning alert-dismissible fade show"
          onClose={handleClick}
        >
          Alert
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Text
      </Button>
    </div>
  );
}

export default App;

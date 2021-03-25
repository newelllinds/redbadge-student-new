import React, { useState } from "react";
import { Button, Container } from "reactstrap";

const FunctionalClickCounter = (props) => {
  const [countValue, setCountValue] = useState(props.initialValue);
  function handleClick() {
    setCountValue(countValue - 1);
  }
  return (
    <Container>
      <p>The total clicks left are {countValue}</p>
      <Button onClick={handleClick}> Click Me From Function</Button>
    </Container>
  );
};

export default FunctionalClickCounter;

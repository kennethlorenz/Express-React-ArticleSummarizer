import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ParametersForm = (props) => {
  const [state, setState] = useState({
    summarizeURL: "",
    numSentences: 0,
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: "/results",
      state,
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>What do you want to summarize?</h1>
      <Form className="register-form" onSubmit={handleOnSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Article Site</Form.Label>
          <Form.Control
            step="any"
            placeholder="Enter URL of Article "
            name="summarizeURL"
            onChange={handleInputChange}
          />
          <Form.Label>Number Sentences</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Number of Sentences "
            name="numSentences"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Summarize
        </Button>
      </Form>
    </div>
  );
};
export default ParametersForm;

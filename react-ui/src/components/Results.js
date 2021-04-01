import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Spinner, Jumbotron, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Results = (props) => {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const { summarizeURL, numSentences } =
    (props.location && props.location.state) || {};

  const apiUrl = "http://localhost:3000/api/run";
  const body = {
    summarizeURL: summarizeURL,
    numSentences: parseInt(numSentences),
  };
  //runs once after the first rendering of page
  useEffect(() => {
    console.log(summarizeURL);

    //you need to modify to mmake sure that you are passing parameters to request (could be query parameters or post data)
    const fetchData = async () => {
      axios
        //.get(apiUrl)
        .post(apiUrl, body)
        .then((result) => {
          console.log("result.data:", result.data);
          setData(result.data);
          setShowLoading(false);
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
    };
    fetchData();
  }, []);
  return (
    <Container>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <Jumbotron>
        <h2 className="text-center mb-3">Summarize Result</h2>
        <ListGroup>
          {data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </ListGroup>
        <div>
          <NavLink to="/" activeClassName="active">
            Go Back
          </NavLink>
        </div>
      </Jumbotron>
    </Container>
  );
};
export default Results;

import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  const topics = useLoaderData();
  // console.log(topics);

  return (
    <div className="box-container">
      {topics.data.map((topic) => (
        <div key={topic.id} topic={topic}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={topic.logo} style={{height:'120px'}}/>
            <Card.Body>
              <Card.Title>{topic.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go To Course Details</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Home;

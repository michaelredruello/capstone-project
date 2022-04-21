import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const baseEndPoint = "https://www.dnd5eapi.co/api";

  const getCategory = async () => {
    const response = await fetch(baseEndPoint);
    const data = await response.json();
    setCategory(data);
    console.log(category);
  };

  return (
    <Container>
      {Object.keys(category).map(function (categories) {
        <Row>{category[categories]}</Row>;
      })}
    </Container>
  );
};

export default HomePage;

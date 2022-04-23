import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
    // eslint-disable-next-line
  }, []);

  const baseEndPoint = "https://www.dnd5eapi.co/api";

  const getCategory = async () => {
    const response = await fetch(baseEndPoint);
    const data = await response.json();
    setCategory(data);
  };

  console.log(category);

  return (
    <Container>
      <Row>{category["ability-scores"]}</Row>
      <Row>{category["alignments"]}</Row>
      <Row>{category["backgrounds"]}</Row>
      <Row>{category["classes"]}</Row>
      <Row>{category["conditions"]}</Row>
      <Row>{category["damage-types"]}</Row>
      <Row>{category["equipment"]}</Row>
    </Container>
  );
};

export default HomePage;

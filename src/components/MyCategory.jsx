import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyCategory = () => {
  const [url, setUrl] = useState("https://www.dnd5eapi.co/api/spells");
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setSpells(data.results);
  };

  return (
    <Container>
      {spells.map((singleSpells) => (
        <Row>{singleSpells.name}</Row>
      ))}
    </Container>
  );
};

export default MyCategory;

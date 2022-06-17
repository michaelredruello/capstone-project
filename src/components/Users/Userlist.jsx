import { useState, useEffect } from "react";
import User from "./User";
import List from "@mui/material/List";
import Container from "@mui/material/Container";

const Userlist = ({ userID }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (response.ok) {
        const users = await response.json();
        setUsers(users);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container sx={{ width: 500, marginTop: 5, backgroundColor: "white" }}>
      <List>
        {users
          .filter((user) => {
            return user.id !== userID;
          })
          .map((user) => (
            <User key={user.id} {...user} />
          ))}
      </List>
    </Container>
  );
};

export default Userlist;

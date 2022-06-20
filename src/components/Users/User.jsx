import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState } from "react";

const User = (props) => {
  const [friends] = useState([]);

  const addFriend = async () => {
    await fetch(`http://localhost:3000/users/${props.userID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(friends),
    });
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            addFriend();
          }}
        >
          <PersonAddIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText
        sx={{ color: "black" }}
        primary={props.firstName + " " + props.lastName}
        secondary={props.email}
      />
    </ListItem>
  );
};

export default User;

import { Store } from "react-notifications-component";

export const addNotif = (title) => {
  Store.addNotification({
    title: `${title} is add to your favorite list`,
    message: " ",
    type: "info",
    insert: "top",
    container: "bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: false,
    },
  });
};

export const removedNotif = (title) => {
  Store.addNotification({
    title: `${title} is removed`,
    message: " ",
    type: "warning",
    insert: "top",
    container: "bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: false,
    },
  });
};

export const alreadyNotif = (title) => {
  Store.addNotification({
    title: `${title} is already in your favorite list`,
    message: " ",
    type: "danger",
    insert: "top",
    container: "bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: false,
    },
  });
};

export const notLogNotif = () => {
  Store.addNotification({
    title: "You need to login to add games to favorites",
    message: "  ",
    type: "danger",
    insert: "top",
    container: "bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: false,
    },
  });
};

import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USER = [
    {
      id: "u1",
      name: "Test",
      image:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      places: 2,
    },
  ];
  return <UsersList items={USER} />;
};

export default Users;

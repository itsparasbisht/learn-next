import React from "react";

function User({ user }) {
  return (
    <>
      <b>{user.name}</b>
      <p>{user.email}</p>
    </>
  );
}

export default User;

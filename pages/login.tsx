import React from "react";

function login() {
  return <div>login page</div>;
}

export default login;

export const getServerSideProps = async () => {
  return {
    props: {
      title: "Log in",
    },
  };
};

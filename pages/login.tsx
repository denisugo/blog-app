import React from "react";
import AppForm from "../components/AppForm/AppForm";

function login() {
  return <AppForm />;
}

export default login;

export const getServerSideProps = async () => {
  return {
    props: {
      title: "Log in",
    },
  };
};

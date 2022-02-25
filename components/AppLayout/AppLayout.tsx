import React from "react";
import AppHead from "../AppHead/AppHead";
import AppNav from "../AppNav/AppNav";

interface IProps {
  children: any;
  title: string;
}

function AppLayout({ children, ...pageProps }: IProps) {
  return (
    <>
      <AppHead title={pageProps.title} />
      <AppNav />
      <main>{children} </main>
    </>
  );
}

export default AppLayout;

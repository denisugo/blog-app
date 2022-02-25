import "../styles/reset.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import AppLayout from "../components/AppLayout/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout {...pageProps}>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;

//TODO: Check font

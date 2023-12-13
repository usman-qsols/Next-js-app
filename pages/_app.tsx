import MainLayout from "../src/components/layout/main-layout";
import "../styles/globals.css";
import "../styles/general.sass";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;

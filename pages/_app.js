import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout";
import styles from "../styles/App.module.css";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`container-fluid p-0 main-content-body`}>
        <Layout>
          <div className={`${styles.mainContent}`}>
            <Component {...pageProps} />
          </div>
        </Layout>
      </div>
    </>
  );
}

export default MyApp;

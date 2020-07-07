import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Router, { useRouter } from "next/router";
import { useState } from "react";

const Layout = props => {
  const { children, title } = props;
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  Router.events.on("routeChangeStart", url => {
    setLoading(true);
    console.log("route changed");
  });

  Router.onRouteChangeComplete = () => {
    console.log("rout completed");
  };

  Router.onRouteChangError = () => {
    console.log("Url complete");
  };

  return (
    <>
      <Head>
        <title> {title} </title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/minty/bootstrap.min.css"
          integrity="sha384-HqaYdAE26lgFCJsUF9TBdbZf7ygr9yPHtxtg37JshqVQi6CCAo6Qvwmgc5xclIiV"
          crossOrigin="anonymous"></link>
      </Head>
      <Nav />
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        children
      )}

      <Footer />
    </>
  );
};

export default Layout;

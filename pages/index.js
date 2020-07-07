import Layout from "../components/Layout";
import Router from "next/router";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="container">
        <main>
          <h1 className="text-center"> Welcome to my portfolio</h1>
        </main>

        <footer></footer>
      </div>
    </Layout>
  );
}

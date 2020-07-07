import Layout from "../components/Layout";
import Link from "next/link";

const ErrorPage = props => {
  return (
    <Layout>
      <div className="card mt-5 offset-md-3 col-md-6">
        <div className="card-header bg-secondary">
          <h3 className="text-white card-title"> Error !!!</h3>
        </div>

        <div className="card-body ">
          <h5 className="text-white"> Something is Wrong </h5>

          <Link href="/">
            <button className="btn btn-outline-info float-left">
              {"<<<---"} Back to Home page
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default ErrorPage;

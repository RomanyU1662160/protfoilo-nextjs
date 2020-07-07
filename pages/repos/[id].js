import { useRouter } from "next/router";

const RepoDetails = props => {
  const { repo } = props;

  console.log("repos :>> ", repo);
  const { query } = useRouter();

  return (
    <div className="row">
      <div className="col-md-3 border">
        <h3 className="text-info"> {params.id} </h3>
      </div>
      <div className="col-md-8 border">
        <h3 className="text-info"> repos </h3>
      </div>
    </div>
  );
};

export const getStaticPaths = async function () {
  const gitHubUsername = "RomanyU1662160";

  const res = await fetch(
    `https://api.github.com/users/${gitHubUsername}/repos`
  );
  const repos = await res.json();

  const paths = repos.map(repo => ({
    params: { id: repo.id }
  }));
  console.log("paths :>> ", paths);
  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const gitHubUsername = "RomanyU1662160";
  console.log("params :>> ", params);
  const res = await fetch(
    `https://api.github.com/repos/${gitHubUsername}/${params.id}`
  );

  const repo = await res.json();

  return {
    props: {
      repo: repo
    }
  };
}

export default RepoDetails;

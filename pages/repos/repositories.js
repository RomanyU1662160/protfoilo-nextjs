import React, { useState } from "react";

const { default: Layout } = require("../../components/Layout");
import Repo from "../../components/Repo.jsx";
import { AnimateGroup, Animate } from "react-simple-animate";

const Repositories = props => {
  const { repos } = props;
  let seq = -1;

  return (
    <Layout title="repos">
      <div>
        <h3 className="text-center"> My Repos </h3>
        <AnimateGroup play>
          {repos.map(repo => {
            seq = ++seq;
            return <Repo repo={repo} seq={seq} key={repo.id}></Repo>;
          })}
        </AnimateGroup>
      </div>
    </Layout>
  );
};
export default Repositories;

Repositories.getInitialProps = async function (ctx) {
  const gitHubUsername = "RomanyU1662160";

  const res = await fetch(
    `https://api.github.com/users/${gitHubUsername}/repos`
  );

  const repos = await res.json();

  return {
    repos: repos
  };
};

import React from "react";
import { AnimateGroup, Animate } from "react-simple-animate";
import Link from "next/link";

export default function Repo(props) {
  const { repo, seq } = props;
  return (
    <Animate
      duration={0.6}
      easeType="linear"
      start={{ opacity: 0 }}
      end={{ opacity: 1 }}
      sequenceIndex={seq}>
      <div>
        <div className="card mt-3">
          <div className="card-header bg-light">
            <p className="text-center card-title  ">
              <span className="float-left text-secondary font-weight-bolder">
                {repo.name}
              </span>
            </p>
          </div>
          <div className="card-body">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <th>Link : </th>
                  <td>
                    <a href={repo.html_url}> {repo.full_name} </a>
                  </td>
                </tr>
                <tr>
                  <th> Description : </th>
                  <td>{repo.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <Link as={`${repo.id}`} href="/repos/[id]">
              <a href="#" className="btn btn-info float-right">
                View Repo Details
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Animate>
  );
}

import Layout from "../components/Layout";
import { AnimateGroup, Animate } from "react-simple-animate";

const Skills = () => {
  const mySkills = [
    "PHP",
    "Laravel",
    "JavaScript",
    "React.js",
    "Redux",
    "Context-Api",
    "Vue.js",
    "SQL",
    "UML"
  ];

  return (
    <Layout title="skills">
      <h3 className="text-center">My Skills</h3>;
      <AnimateGroup play>
        {mySkills.map((key, index) => {
          return (
            <Animate
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
              sequenceIndex={index}>
              <div className="alert bg-info"> {key} </div>
            </Animate>
          );
        })}
      </AnimateGroup>
    </Layout>
  );
};

export default Skills;

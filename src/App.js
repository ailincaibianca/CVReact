import React, { useState } from "react";
import "./App.css";
import Item from "./components/item/Item.jsx";
import Skills from "./components/Skills/Skills.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faAddressBook,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const education = [
  {
    id: 1,
    startYear: "OCT 2020 -",
    endYear: "IUN 2022",
    title: "Data Mining | Faculty of Economics and Business Administration",
    institute: "Alexandru Ioan Cuza University",
    location: "Iasi, Romania",
  },
  {
    id: 2,
    startYear: "OCT 2017 - ",
    endYear: "IUN 2020",
    title: "Mathematics and Computer Science | Faculty of Mathematics",
    institute: "Alexandru Ioan Cuza University",
    location: "Iasi, Romania",
  },
];
const experience = [
  {
    id: 1,
    startYear: "JUL 2020 - ",
    endYear: "AUG 2020",
    title: "PentaStagiu | Front-End",
    institute: "Pentalog",
    location: "Iasi, Romania",
  },
  {
    id: 2,
    startYear: "FEB 2020 - ",
    endYear: "FEB 2020",
    title: "Internship | Front-End",
    institute: "Pentalog",
    location: "Iasi, Romania",
  },
];

const projects = [
  {
    id: 1,
    startYear: "AUG 2020 - ",
    endYear: "AUG 2020",
    title: "Curriculum Vitae | React",
    institute: "GitHub",
    location: "Iasi, Romania",
    nameGitProject: "CV - ",
    gitLink: "https://github.com/ailincaibianca/CVReact",
  },
  {
    id: 2,
    startYear: "AUG 2020 - ",
    endYear: "AUG 2020",
    title: "Web Application | React",
    institute: "PentaStagiu",
    location: "Iasi, Romania",
    nameGitProject: "WebAppReact - ",
    gitLink: "https://github.com/ailincaibianca/WebAppReact",
  },
  {
    id: 3,
    startYear: "AUG 2020 - ",
    endYear: "AUG 2020",
    title: "Web Application | JavaScript",
    institute: "PentaStagiu",
    location: "Iasi, Romania",
    nameGitProject: "WebAppJS - ",
    gitLink: "https://github.com/ailincaibianca/WebAppJS",
  },
  {
    id: 4,
    startYear: "JUL 2020 - ",
    endYear: "AUG 2020",
    title: "Responsive Web Application | JavaScript",
    institute: "PentaStagiu",
    location: "Iasi, Romania",
    nameGitProject: "ResponsiveWebAppJS - ",
    gitLink: "https://github.com/ailincaibianca/ResponsiveWebApp",
  },
  {
    id: 5,
    startYear: "FEB 2020 - ",
    endYear: "JUN 2020",
    title: "MongoDB",
    institute: "Alexandru Ioan Cuza University",
    location: "Iasi, Romania",
  },
  {
    id: 4,
    startYear: "FEB 2020 - ",
    endYear: "JUN 2020",
    title: "XML",
    institute: "Alexandru Ioan Cuza University",
    location: "Iasi, Romania",
    nameGitProject: "XML - ",
    gitLink: "https://github.com/ailincaibianca/XML",
  },
];

const skills = [
  {
    name: "HTML",
    procent: "90%",
  },
  {
    name: "CSS",
    procent: "80%",
  },
  {
    name: "JavaScript",
    procent: "60%",
  },
  {
    name: "React",
    procent: "40%",
  },
  {
    name: "Java",
    procent: "65%",
  },
  {
    name: "C++",
    procent: "60%",
  },
  {
    name: "C#",
    procent: "70%",
  },
  {
    name: "MongoDB",
    procent: "65%",
  },
  {
    name: "XML",
    procent: "60%",
  },
  {
    name: "PHP&MySQL",
    procent: "70%",
  },
];

function App(props) {
  const [state, setState] = useState({
    educ: education,
    exper: experience,
    sk: skills,
    proj: projects,
  });

  const renderEducation = () => {
    return state.educ.map((item) => (
      <Item
        key={item.id}
        itemId={item.id}
        startYear={item.startYear}
        endYear={item.endYear}
        title={item.title}
        institute={item.institute}
        location={item.location}
      />
    ));
  };

  const renderExperience = () => {
    return state.exper.map((item) => (
      <Item
        key={item.id}
        itemId={item.id}
        startYear={item.startYear}
        endYear={item.endYear}
        title={item.title}
        institute={item.institute}
        location={item.location}
        nameGitProject={item.nameGitProject}
        gitLink={item.gitLink}
      />
    ));
  };

  const renderProjects = () => {
    return state.proj.map((item) => (
      <Item
        key={item.id}
        itemId={item.id}
        startYear={item.startYear}
        endYear={item.endYear}
        title={item.title}
        institute={item.institute}
        location={item.location}
        nameGitProject={item.nameGitProject}
        gitLink={item.gitLink}
      />
    ));
  };

  const renderSkills = () => {
    return state.sk.map((item) => (
      <Skills
        key={item.id}
        itemId={item.id}
        name={item.name}
        procent={item.procent}
      />
    ));
  };

  return (
    <>
      <div className="header">
        <div>
          MARIA-BIANCA <br /> AILINCAI
        </div>
        <div>
          <div>
            <FontAwesomeIcon className="icon" icon={faPhone} /> +40 (758) 620
            127
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />{" "}
            ailincaibianca98@yahoo.com
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faLocationArrow} /> Str
            Vasile Lupu, Bl. 35, Ap. 102, <br />
            Iasi (Romania)
          </div>
        </div>
      </div>
      <hr />
      <div class="items">
        <div>E D U C A T I O N</div>
        <div>{renderEducation()}</div>
      </div>
      <hr />
      <div class="items">
        <div>E X P E R I E N C E</div>
        <div>{renderExperience()}</div>
      </div>
      <hr />
      <div class="items">
        <div>P R O J E C T S</div>
        <div>{renderProjects()}</div>
      </div>
      <hr />
      <div class="skills-container items">
        <div>S K I L L S</div>
        <div>{renderSkills()}</div>
      </div>
    </>
  );
}

export default App;

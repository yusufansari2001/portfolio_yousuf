import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import { 
  faJava,
  faReact,
  faGitAlt,
  faJenkins
} from '@fortawesome/free-brands-svg-icons';
import { SiSpring } from "react-icons/si";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["Y", "o", "u", "s", "u", "f"];
  const jobArray = [
    "C",
    "o",
    "m",
    "p",
    "u",
    "t",
    "e",
    "r",
    " ",
    "S",
    "c",
    "i",
    "e",
    "n",
    "c",
    "e",
    " ",
    "S",
    "t",
    "u",
    "d",
    "e",
    "n",
    "t",
    ".",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span> &nbsp;
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Web Developer / Proficient in React js, Node js and MongoDB</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
  <div className="face1">
    <FontAwesomeIcon icon={faJava} color="#5382A1" /> {/* Java */}
  </div>
  <div className="face2">
    <FontAwesomeIcon icon={faReact} color="#61DAFB" /> {/* React */}
  </div>
  <div className="face3">
    <FontAwesomeIcon icon={faGitAlt} color="#F05032" /> {/* Git */}
  </div>
  <div className="face4">
    <FontAwesomeIcon icon={faJenkins} color="#D24939" /> {/* Jenkins */}
  </div>
  <div className="face5">
    <FontAwesomeIcon icon={faDatabase} color="#4479A1" /> {/* MySQL */}
  </div>
  <div className="face6">
  <SiSpring color="#6DB33F" size="5em" /> {/* Spring's official green */}
</div>
</div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;

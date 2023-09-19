import "./Skills.css";
import Progress from '../../reusableComponents/Progress/Progress';
import { Fragment } from "react";


const skillsList = [
  {
    id: "0",
    text: "HTML",
    width:"95%"
  },
  {
  id: "1",
  text: "CSS",
  width:"45%"
},
  {
    id: "2",
    text: "Bootstrap",
    width:"85%"
  },
  {
    id: "3",
    text: "JS",
    width:"75%"
  },
  {    id: "4",
  text: "Jquery",
  width:"75%"
  },
  {    id: "5",
  text: "React",
  width:"35%"
  },
  {    id: "6",
  text: "XD",
  width:"85%"
  },
  {
    id: "7",
    text: "Dart",
    width:"90%"
  },
];
const Skills = (props) => {
  return (
      <div className="bg-dark pt-5 pb-5">
          <div className="container d-flex justify-content-center flex-column gap-3" id="skills_container">
              <h2 className="h1">Skills</h2>
              <p>Doctor Stephen Vincent Strange is a highly intelligent Marvel superhero. Formerly, he was a neurosurgeon, and an extremely egotistical, narrow-minded and arrogant man. He suffered nerve damage after a car crash, which changed him into a broken man. However, he became determined to heal himself. He discovered the existence of the supernatural and sought out the Ancient One, hoping to cure his disability. Dr. Strange was taught to use the magic.
              </p>
        <div id="" className="d-flex justify-content-around">
          <div className="pt-5 " id="left_div">
            
                <ul className="list-group ">
                <li class="list-group-item-group-item-dar border-bottom">MY FOCUS</li>
                <li class="list-group-item-group-item-dark">UI/UX Desing</li>
                <li class="list-group-item-group-item-dark">Responsive Design</li>
                <li class="list-group-item-group-item-dark">Web Design</li>
                <li class="list-group-item-group-item-dark">Mobile App Design</li>
                </ul>
       
          </div>

          <div className="pt-5 pe-5 d-flex flex-wrap flex-column gap-3" id="right_div">
              
          {skillsList.map((skill) => (
        <Fragment key={skill.id}>
          <Progress  text= {skill.text} width={skill.width}></Progress>
        </Fragment>
      ))}

            
          </div>
    </div>
            </div>
      </div>
  );
};

export default Skills;
import "./Skills.css";
import Progress from '../../reusableComponents/Progress/Progress';

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
              
            <Progress  text='HTML' width="95%"></Progress>
             <Progress text='CSS' width="40%"></Progress>
             <Progress text='Bootstrap' width="70%"></Progress>
             <Progress text='JS' width="60%"></Progress>
             <Progress text='Jquery' width="60%"></Progress>
             <Progress text='React' width="20%"></Progress>
             <Progress text='XD' width="60%"></Progress>
             <Progress text='Dart' width="80%"></Progress>
            
          </div>
    </div>
            </div>
      </div>
  );
};

export default Skills;
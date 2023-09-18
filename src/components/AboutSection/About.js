import Button from "../../reusableComponents/Button/Button";
import "./About.css";

const About = (props) => {
  return (
      <div id="about_container" className="d-flex">
          <div className="pt-5 w-100" id="left_div">
              <h1 className=" ">About me</h1>
          </div>

          <div className="pt-5 pe-5 d-flex flex-wrap" id="right_div">
              <p className=" ">Doctor Stephen Vincent Strange is a highly intelligent Marvel superhero. Formerly, he was a neurosurgeon, and an extremely egotistical, narrow-minded and arrogant man. He suffered nerve damage after a car crash, which changed him into a broken man. However, he became determined to heal himself. He discovered the existence of the supernatural and sought out the Ancient One, hoping to cure his disability. Dr. Strange was taught to use the magic from the Ancient One and became the Sorcerer Supreme of Earth. These events changed him into a selfless, honest, and honorable man. When he is not busy protecting his friends, he might even appear in Disney parks!</p>
              <br></br>
              <Button className="mt-5" content='Download Resume' type='submit'/>
          </div>
    </div>
  );
};

export default About;
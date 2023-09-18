import Button from "../../reusableComponents/Button/Button";
import "./Hero.css";

const Hero = (props) => {
  return (
      <div id="container" className="d-flex justify-content-start align-self-center ">
          <div className="align-self-center " id="divContent">
              <h2 className=" h1 strange">Doctor Strange</h2>
              <h2 className="text-white-50">sorcerer supreme</h2>
              <br></br>
              <br></br>
              <Button className="mt-5" content='CONTACT ME' type='submit'/>
          </div>
    </div>
  );
};

export default Hero;
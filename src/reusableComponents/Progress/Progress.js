import "./Progress.css";

const Progress = (props) => {
  return (
      <div className="progress_container d-inline-flex ">
        <span className="bg-secondary" id="skill_name">{props.text}</span>
        <div className="progressbar">
        <span className="progress" style={{width:`${props.width}`}}></span>
          </div>
   </div>

//       <div class="progress ">
//   <div class="progress-bar" role="progressbar" style={{width:"50%"}}   aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
// </div>
  );
};

export default Progress;

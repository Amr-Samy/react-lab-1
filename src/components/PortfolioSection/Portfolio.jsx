import "./Portfolio.css";
import Card from '../../reusableComponents/Card/Card';


const portfolioList = [
  {
    id: "0",
    text: "WEB DESIGN",
    b_border:"border-bottom"
  },
  {
  id: "1",
  text: "MOBILE DESIGN",
  b_border:"border-bottom"
},
  {
    id: "2",
    text: "LOGO DESIGN",
    b_border:"border-bottom"
  },
  {
    id: "3",
    text: "WEB APPLICATION DEVELOPMENT",
    b_border:""
  },
  {    id: "4",
  text: "MOBILE APPLICATION DEVELOPMENT",
  b_border:""
  },
  {    id: "5",
  text: "PWA DEVELOPMENT",
  b_border:""
  },
];
const Portfolio = (props) => {
  return (
      <div className=" pt-5 pb-5 container container-fluid">
          <div className="container d-flex justify-content-center flex-column gap-3" id="Portfolio_container">
              <h1>Portfolio</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          
        {
            portfolioList.map((item, index) => (
              
              <Card b_border={item.b_border}
              color= {index%2 !==0 ? "bg-dark": "bg-secondary"}
              text={item.text}></Card>
        ))
      }
              </div>
            </div>
      </div>
  );
};

export default Portfolio;
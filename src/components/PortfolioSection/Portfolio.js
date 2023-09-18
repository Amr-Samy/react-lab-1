import "./Portfolio.css";
import Card from './../../reusableComponents/Card/Card';

const Portfolio = (props) => {
  return (
      <div className=" pt-5 pb-5 container container-fluid">
          <div className="container d-flex justify-content-center flex-column gap-3" id="Portfolio_container">
              <h1>Portfolio</h1>
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <Card b_border="border-bottom" color="bg-secondary" text="WEB DESIGN"></Card>
                <Card b_border="border-bottom" color="bg-dark" text="MOBILE DESIGN"></Card>
                <Card b_border="border-bottom" color="bg-secondary" text="LOGO DESIGN"></Card>
                <Card color="bg-dark" text="WEB APPLICATION DEVELOPMENT"></Card>
                <Card color="bg-secondary" text="MOBILE APPLICATION DEVELOPMENT"></Card>
                <Card color="bg-dark" text="PWA DEVELOPMENT"></Card>
              </div>
            </div>
      </div>
  );
};

export default Portfolio;
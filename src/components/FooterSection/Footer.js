import Button from "../../reusableComponents/Button/Button";
import "./Footer.css";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faSquareFacebook,faSquareXTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {
  return (
      <footer className="d-flex justify-content-between align-items-center bg-black" id="footer">
          <div className="ps-5 d-flex flex-column align-items-start" >
              <h6 className="text-light mb-3">GET IN TOUCH</h6>
              <div d-inline-flex >
              <FontAwesomeIcon className='iconsStyle ' icon={faEnvelope} />
              <span className="sInfo ">
              amrsamy25211@gmail.com
              </span>
              </div>

              <div >
              <FontAwesomeIcon className='iconsStyle' icon={faAddressCard} />
              <span class="sInfo">
              +20 1117101543
              </span>
              </div>
          </div>

          <div className=" pe-5 ">
              
              <Button className="" content='CONTACT ME' type='submit'/>
          </div>

          <div className=" pe-5 d-flex flex-column align-items-end gap-3">
          <div>
                  <FontAwesomeIcon className='iconsStyle' icon={faLinkedin} />
                  <FontAwesomeIcon className='iconsStyle' icon={faSquareFacebook} />
                  <FontAwesomeIcon className='iconsStyle' icon={faSquareXTwitter} />
          </div>
              <h6 className="text-white-50">Copyright 2023 AS</h6>
          </div>
    </footer>
  );
};

export default Footer;
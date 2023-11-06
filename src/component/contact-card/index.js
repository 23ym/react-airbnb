/* eslint-disable no-restricted-globals */
import "./index.css";

import Heading from "../heading";

import image from "./contact-avatar.svg";

export default function ContactCard({
  title,
  phone,
  time,
  rate,
  info,
}) {
  return (
    <div className="contact">
      <div className="contact__card">
        <div><img src={image} alt="Avatar" height={80} width={80} /></div>
                    
<div className="contact__block">
<Heading className="contact__text">Господар {title}</Heading>
       
        <div className="contact__sub-block">
            <span className="contact__sub-value">{phone} </span>

            <span className="contact__sub-value">{time} </span>


        
            <span className="contact__sub-value">{rate} % швидкість відгуку </span>
        </div>
      </div>
      </div>
        <div><span className="contact__sub-value">{info} </span></div>
    </div>
);
}
  
  
  
  
  // return (
   //   <div className="contact_info">
   //     <img src={image} alt="Avatar" height={80} width={80} />
   //  </div>
     
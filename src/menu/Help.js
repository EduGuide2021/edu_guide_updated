import React, { useRef } from "react";
import emailjs from 'emailjs-com'


export default function Contact() {
  const form = useRef();
 let sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('gmail', 'template_75o4ize', form.current, 'user_k2uyNdRwq3XhF0ItCc5pZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return(
     
      <div>
        <h1>Help</h1>
        {/* <div align="center">
          <a href="https://www.messenger.com/t/110839054741107">
          <img src="./icons/Messenger.png" className="social-icons"></img>
          </a>

          <a href="mailto:eduguide.acmt@gmail.com/?subject=Questions and Concerns">
          <img src="./icons/GMail.png" className="social-icons"></img>
          </a>
        </div> */}
        <center>
       
        
        <img src="./icons/Line.png" class="line"></img>
        </center>

        <div>
          <form align="center">
            <label className="feed-back-label">
              <br></br>
            Click this button to download instructions
              <br></br>
              <br></br>
              
              {/* <input type="email" className="contact-field" name="email_here" /> */}
            </label>
            <center>
              
            <br></br>
            <input className="sub-btn" type="button" value="Download" align="left"/>
              
              <br></br>
              <p className="bottom_p">
        <b>Make the right decision.</b>
      </p>
              </center>
            
          </form>
        </div>
      </div>
  );
}

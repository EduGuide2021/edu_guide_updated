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
        <h1>Connect with us</h1>
        {/* <div align="center">
          <a href="https://www.messenger.com/t/110839054741107">
          <img src="./icons/Messenger.png" className="social-icons"></img>
          </a>

          <a href="mailto:eduguide.acmt@gmail.com/?subject=Questions and Concerns">
          <img src="./icons/GMail.png" className="social-icons"></img>
          </a>
        </div> */}
        <center>
        <div className="contact-us-box" align="left">
        <a href="mailto:eduguide.acmt@gmail.com/?subject=Questions and Concerns">
          <img src="./icons/GMail.png" className="social-icons"></img><text>eduguide.acmt@gmail.com</text>
          </a>
          <br/>
         <a href="https://www.messenger.com/t/110839054741107">
          <img src="./icons/Messenger.png" className="social-icons"></img><text>https://m.me/eduguidecmt</text>
          </a>
          <br/>
         
         <a href="https://www.facebook.com/eduguideacmr/">
          <img src="./icons/facebook-icon.png" className="social-icons"></img><text>https://www.facebook.com/eduguideacmr/</text>
          
          </a>
          
          
        </div>
        <br/>
        <br/>
        <img src="./icons/Line.png" class="line"></img>
        </center>

        <div>
          <form align="center" ref={form} onSubmit={sendEmail}>
            <label className="feed-back-label">
              <br></br>
             Or send your feedback here. We'd love to hear from you to improve EduGuide
              <br></br>
              <br></br>
              
              {/* <input type="email" className="contact-field" name="email_here" /> */}
            </label>
            <center>
              <div className="contact-form" align="right">
              <strong>Name:  </strong><input type="text" className="contact-field" name="name" /><br/><br/>
              <strong>Message:  </strong><input type="text" className="contact-field-area" name="message" />
              <br></br>
            <br></br>
            <input className="sub-btn" type="submit" value="Submit" align="left"/>
              </div>
              </center>
            
          </form>
        </div>
      </div>
  );
}

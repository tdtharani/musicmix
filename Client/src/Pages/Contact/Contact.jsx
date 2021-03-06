import "./Contact.scss"
import emailjs from 'emailjs-com';

const Contact = () => {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_r5pb4vq', 'template_2bw3yvl', e.target, 'user_qDbWZQrO9wfeyP0NcgjgF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  
  
  return (
    <>
      <div className="contact">
        <h1 className="heading">Contact Us!</h1>
        <p className="para">We would love to hear from you!</p>
        <p className="para">Send us your thoughts and comments on our service.</p>
        
        <form onSubmit = {sendEmail}>
          <textarea 
          type="text" 
          className="message"
          name = "message"
          placeholder="Enter your message here..."/>
          <input className="sbtn" type="submit" value = "Send"/>
        </form>
        
        

        <h1 className="heading social">Find us on Social Media</h1>
        <div className="icons">
        <a href="https://www.google.com/">  
          <svg xmlns="http://www.w3.org/2000/svg" width="133.42" height="132.61" viewBox="0 0 133.42 132.61">
            <path id="iconfinder_5305154_fb_facebook_facebook_logo_icon" data-name="iconfinder_5305154_fb_facebook_facebook logo_icon" d="M133.42,68.265a66.71,66.71,0,1,0-77.133,65.9V87.548H39.348V68.265H56.287v-14.7c0-16.719,9.959-25.954,25.2-25.954a102.584,102.584,0,0,1,14.933,1.3V45.333H88c-8.287,0-10.871,5.142-10.871,10.418V68.265h18.5L92.677,87.548H77.133v46.616A66.726,66.726,0,0,0,133.42,68.265Z" transform="translate(0 -1.555)" fill="#fff"/>
          </svg>
        </a>

        <a href="https://www.google.com/">
          <svg xmlns="http://www.w3.org/2000/svg" width="133.42" height="133.42" viewBox="0 0 133.42 133.42">
            <path id="iconfinder_104461_twitter_icon" d="M70.436,5.157A66.71,66.71,0,1,0,137.143,71.87,66.716,66.716,0,0,0,70.436,5.157Zm33.6,53.262c.035.721.049,1.444.049,2.175,0,22.218-16.91,47.833-47.833,47.833a47.6,47.6,0,0,1-25.772-7.55,34.382,34.382,0,0,0,4.01.233,33.729,33.729,0,0,0,20.879-7.2,16.836,16.836,0,0,1-15.7-11.679,16.419,16.419,0,0,0,3.162.3,16.708,16.708,0,0,0,4.429-.588A16.825,16.825,0,0,1,33.773,65.465c0-.073,0-.144,0-.217a16.755,16.755,0,0,0,7.615,2.105,16.834,16.834,0,0,1-5.2-22.448A47.73,47.73,0,0,0,70.842,62.469,16.822,16.822,0,0,1,99.489,47.135a33.58,33.58,0,0,0,10.677-4.08,16.86,16.86,0,0,1-7.4,9.3,33.612,33.612,0,0,0,9.658-2.647A33.966,33.966,0,0,1,104.04,58.419Z" transform="translate(-3.723 -5.157)" fill="#fff"/>
          </svg>
        </a>
        <a href="https://www.google.com/">
          <svg xmlns="http://www.w3.org/2000/svg" width="133.418" height="133.418" viewBox="0 0 133.418 133.418">
            <path id="iconfinder_5279112_camera_instagram_social_media_instagram_logo_icon" data-name="iconfinder_5279112_camera_instagram_social media_instagram logo_icon" d="M66.709,0A66.709,66.709,0,1,1,0,66.709,66.741,66.741,0,0,1,66.709,0Zm0,25.016c-11.323,0-12.743.048-17.19.251A30.606,30.606,0,0,0,39.4,27.2,21.321,21.321,0,0,0,27.2,39.4a30.609,30.609,0,0,0-1.938,10.12c-.2,4.447-.251,5.867-.251,17.19s.048,12.743.251,17.19A30.61,30.61,0,0,0,27.2,94.02,21.32,21.32,0,0,0,39.4,106.214a30.613,30.613,0,0,0,10.121,1.938c4.447.2,5.867.251,17.19.251s12.743-.048,17.19-.251a30.61,30.61,0,0,0,10.121-1.938A21.32,21.32,0,0,0,106.214,94.02,30.61,30.61,0,0,0,108.151,83.9c.2-4.447.251-5.867.251-17.19s-.048-12.743-.251-17.19a30.61,30.61,0,0,0-1.938-10.12A21.32,21.32,0,0,0,94.02,27.2,30.6,30.6,0,0,0,83.9,25.267C79.452,25.064,78.032,25.016,66.709,25.016Zm0,7.512c11.133,0,12.451.042,16.848.243A23.071,23.071,0,0,1,91.3,34.207a13.808,13.808,0,0,1,7.913,7.913,23.063,23.063,0,0,1,1.436,7.742c.2,4.4.243,5.715.243,16.848s-.042,12.451-.243,16.848A23.063,23.063,0,0,1,99.211,91.3,13.808,13.808,0,0,1,91.3,99.211a23.063,23.063,0,0,1-7.742,1.436c-4.4.2-5.714.243-16.848.243s-12.452-.042-16.848-.243a23.063,23.063,0,0,1-7.742-1.436A13.806,13.806,0,0,1,34.207,91.3a23.069,23.069,0,0,1-1.436-7.742c-.2-4.4-.243-5.715-.243-16.848s.042-12.451.243-16.848a23.069,23.069,0,0,1,1.436-7.742,13.806,13.806,0,0,1,7.913-7.913,23.07,23.07,0,0,1,7.742-1.436C54.258,32.571,55.577,32.528,66.709,32.528Zm0,12.771a21.41,21.41,0,1,0,21.41,21.41A21.41,21.41,0,0,0,66.709,45.3Zm0,35.308a13.9,13.9,0,1,1,13.9-13.9A13.9,13.9,0,0,1,66.709,80.607ZM93.968,44.453a5,5,0,1,1-5-5A5,5,0,0,1,93.968,44.453Z" fill="#fff" fillRule="evenodd"/>
          </svg>
        </a>

          
        </div>
      </div>
    </>
  )
}

export default Contact

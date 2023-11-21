import React from 'react'
import Front from '../pages/front'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import "./link.css"
export default function HomePage() {
  return (
    <div id="homee">
      <Front />
      <div id="he">
      <marquee width="100%" direction="right" scrollamount="17">
            <h3 id="slogan" style={{marginTop:"60px",fontSize:"40px"}} >Digital Dreams, Real Results: Your Success, Our Strategy!</h3></marquee>

        </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div id="cli" >
            <div class="c" style={{marginLeft:"20px"}}>
                <h2 class="con">5k+  <br></br> Statified Clients</h2>
            </div>
            <div class="c">
                <h2 class="con">350+ <br></br>Running Projects</h2>
                </div>
              <div class="c">
                <h2 class="con">900+ <br></br> Project Completed</h2>
                </div>
        </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="w">
              <div id="q">
                  <h2 style={{marginTop:"80px",marginLeft:"10px",fontWeight: "900"}}>Digital Marketing?</h2>
              </div>
              <div id="def">
                <h3>Digital marketing is a comprehensive approach to promoting products, services, or brands through online channels and technologies. It encompasses various strategies, such as search engine optimization, social media marketing, content creation, email campaigns, and more, with the goal of reaching and engaging a target audience in the digital space. By leveraging the internet and electronic devices, businesses can enhance visibility, build brand awareness, and drive customer engagement. Digital marketing enables precise targeting, real-time analytics, and the flexibility to adapt strategies swiftly, making it a dynamic and essential aspect of contemporary marketing efforts</h3>
              </div>
        </div>
        <img class="s1"src="https://www.reliablesoft.net/wp-content/uploads/2023/03/digital-marketing-definition-new.png"></img>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <div>
            <h2 class="t">Search Engine Optimization (SEO)</h2>
            <h3 class="p">Optimizing online content to improve its visibility in search engine results, thereby increasing organic (non-paid) traffic.</h3><br></br>
            <h2 class="t">Search Engine Marketing (SEM) </h2>
            <h3 class="p">Using paid advertising to appear in search engine results pages. This often involves pay-per-click (PPC) campaigns.</h3><br></br>
            <h2 class="t">Social Media Marketing (SMM) </h2>
            <h3 class="p">Utilizing social media platforms (such as Facebook, Twitter, Instagram, and LinkedIn) to connect with the audience, build brand awareness, and drive traffic and engagement.</h3>
        </div>


        <footer id="hft">
      <div>
        <div >
          <h2 style={{color:"black",fontWeight:"900"}}>About Us</h2>
          <p style={{margin:"20px"}}>
          Fueling digital dreams with a sprinkle of creativity and a dash of strategy, DigitalDreams is not your average marketing team—we're the storytellers, trendsetters, and magic-makers in the digital realm
          </p>
        </div>

       
        <div >
          <h2 style={{color:"black",fontWeight:"900",margin:"10px"}}>Contact Us</h2>
          <p>
            Email: info@example.com
            <br />
            Phone: +1 123 456 7890
          </p>
        </div>

        <div >
          <h2  style={{color:"black",fontWeight:"900",margin:"10px"}}>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" >
              <FaFacebook  className='ic'/>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <FaTwitter  className='ic'/>
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedin className='ic'/>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram className='ic'/>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* <p>&copy; 2023 Your Digital Marketing. All rights reserved.</p> */}
      </div>
        </footer>

    </div>
  )
}




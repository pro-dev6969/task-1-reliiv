import React from 'react';
import './index.css'
import phone from'../../assets/phone.png'
import pin from '../../assets/map-pin.png'
import relogo from '../../assets/r.png'
import reliv from '../../assets/Reliiv..png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <span> <img src={relogo} /> <img src={reliv} /> </span>
                        <br></br>
                        <p>“Your Convenience, Our Commitment, One Demand Service."</p>
                        <br></br>
                        <span> <img src={twitter} /> <img src={instagram} /> <img src={youtube} /> </span>
                    </div>
                    <div className='sb__footer-links-second'>
                    <div className="sb__footer-links_div-second">
                        <h4>Navigation</h4>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Our Service</p>
                        <p>Our Team</p>
                    </div>
                    <div className="sb__footer-links_div-second">
                        <h4>Services</h4>
                        <p>Kitchen Cleaning</p>
                        <p>Office Cleaning</p>
                        <p>Carpet Cleaning</p>
                        <p>House Cleaning</p>
                    </div>
                    </div>
                    
                    <div className="sb__footer-links_div">
                        <h4>Contact Us</h4>
                        <p>Our Support and Sales team is available 24/7 to answer your queries</p>
                        <p> <img src={pin}/> 123 Main St , Suite 500 , New York , NY 10001</p>
                        <p> <img src={phone} /> +1(333)000-0000</p>
                    </div>
                </div>
                
                <div className="parent-break">
                <div className='break'></div>
                </div>
                
                <div className='parent-below'>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            COPYRIGHT @ 2023 BERESIN <span className='slash'></span> DESIGN BY TOKOTEMA
                        </p> 
                    </div>
                    <div className="sb__footer-below-links">
                        <p>
                            TERM OF USE <span className='slash'></span> PRIVACY POLICY
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

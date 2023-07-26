
import logo from './mslogo.png';
import './App.css';
// get our fontawesome imports
import * as ReactIcons from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";
import { IconContext } from 'react-icons';
import App from './App';

import { useNavigate } from 'react-router-dom';

function LandingPage(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/app');
    };

    return(
        <footer>
            <div className='landingPage'>
                <div className='curtain'></div>
                <div className='centerLand' id='centerLand'>
                    
                    <img src={logo} className="App-logo-lp" alt="logo" />
                    {/* <text className='userName'>Manandhar Sudip</text> */}
                    <br/>
                    <text className='userPost'>Computer Engineer</text>
                    <div className='LPaboutme'>
                        <p>
                            Passionate about Development,
                            Automation, Linux, Network...
                        </p>
                    </div>
                    {/* <div className='test'>
                        <div className='LP-Center-content'> */}
                            <div className='oneLiner'>
                                <text>I would love to assist you.</text>
                            </div>
                            <div className='connect-with-me'>
                                <IconContext.Provider value={{ className: 'top-react-icons' }}>
                                    <a href="https://www.linkedin.com/in/sudip-manandhar-901521165/" target="_blank" rel="noopener noreferrer">
                                        <ReactIcons.SiLinkedin />
                                    </a>
                                    <a href="https://github.com/ManandharSudip4" target="_blank" rel="noopener noreferrer">
                                        <ReactIcons.SiGithub />
                                    </a>
                                    <a href="https://twitter.com/manandharsudip8/" target="_blank" rel="noopener noreferrer">
                                        <ReactIcons.SiTwitter />
                                    </a>
                                    <a href="https://www.instagram.com/manandharsudip8/" target="_blank" rel="noopener noreferrer">
                                        <ReactIcons.SiInstagram />
                                    </a>
                                    <a href="https://hashnode.com/@ms10" target="_blank" rel="noopener noreferrer">
                                        <ReactIcons.SiHashnode />
                                    </a>
                                </IconContext.Provider>
                            </div>
                            <div className='footer-navbar'>
                                
                                <a href='javascript;'>Home</a> | <a href='javascript;'>Contact</a> | <a href='javascript;'> Subscribe</a> | <a href='javascript;'> Buy me a coffee </a> 

                            </div>
                            <div className='details-page'>
                                {/* <a href='/app'> */}
                                <button type='button' className='details-btn' onClick={handleClick} >
                                    < FaArrowUp className='arrowIcon'/>
                                </button>
                                {/* </a> */}
                            </div>
                            
                        {/* </div>
                    </div> */}
                </div>
            </div>        
        </footer>
    );
};


export default LandingPage;
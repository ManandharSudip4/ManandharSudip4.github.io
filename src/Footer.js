import logo from './mslogo.png';
import './App.css';
// get our fontawesome imports
import * as ReactIcons from "react-icons/si";
import { IconContext } from 'react-icons';


function Footer(){
    return(
        <footer>
            <div className='footer'>
                <div className='centerFoot'>
                    
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <text className='userName'>Manandhar Sudip</text> */}
                    <br/>
                    <text className='userPost'>Computer Engineer</text>
                    {/* <br/> */}
                    <div className='connect-with-me'>
                        <IconContext.Provider value={{ className: 'top-react-icons' }}>
                            {/* <ReactIcons.SiLinkedin href='javascript;'/>
                            <ReactIcons.SiGithub />
                            <ReactIcons.SiTwitter />
                            <ReactIcons.SiInstagram />
                            <ReactIcons.SiHashnode /> */}
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
                </div>
            </div>        
        </footer>
    );
};


export default Footer;
import logo from './mslogo.png';
import './App.css';
import * as GRIcons from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='intro-header'>
          <div className='intro-header-left'>
            <img src={logo} className="App-logo" alt="logo" />
            <text className='mainUsername'>
              {/* Manandhar Sudip */}
            </text>
            <br/>
            <text className='subHead'>
              Computer Engineer
            </text>
          </div>
          <div className='intro-header-right'>
            <button className='download-btn'>
              <text>Download my CV</text>
              <GRIcons.GrDocumentDownload/></button> 
          </div>
        </div> 
        <div className='intro-body'>
          <text className="aboutMe">
            About Me
          </text>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
   
        <div className='overview'>
          <div className='overview-1'>
            <h4>Up to now...</h4>
            <ul>
              <li>Birth: 1999, Dec 13</li>
              <li>Finished Schooling: 2018</li>
              <li>Travelling new places so i am testing this what will happen if i write the longest</li>
              <li>Started Computer Engineering, 2018</li>
              <li>Got Bachelors Degree, 2023</li>
              <li>Joined Astral Computers, 2023</li>
            </ul>
          </div>
          <div className='overview-2'>
            <h4>Passionate About...</h4>
            <ul>
              <li>Coding</li>
              <li>Problem solving</li>
              <li>Developing</li>
              <li>Designing</li>
              <li>Playing Football, Chess</li>
              <li>Travelling new places so i am testing this what will happen if i write the longest</li>
              <li>Exploring</li>
            </ul>
          </div>
          <div className='overview-3'>
            <h4>Interested In</h4>
            <ul>
              <li>New Techs</li>
              <li>AI</li>
              <li>Travelling new places so i am testing this what will happen if i write the longest</li>
            </ul>
          </div>
        </div>

        {/* <div className="Projects">
         <div className="Project">
            <img src={logo} className="App-logo" alt="logo" />
          </div> 
         <div className="Project">
            <img src={logo} className="App-logo" alt="logo" />
          </div> 
         <div className="Project">
            <img src={logo} className="App-logo" alt="logo" />
          </div> 
         <div className="Project">
            <img src={logo} className="App-logo" alt="logo" />
          </div> 
         <div className="Project">
            <img src={logo} className="App-logo" alt="logo" />
          </div> 
         <div className="Project">
            <img src={logo} className="App-logo" alt="logo" />
          </div> 
        </div> */}


        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br></br>
          Learning React for Fun.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
      </header>
    </div>
  );
}

export default App;

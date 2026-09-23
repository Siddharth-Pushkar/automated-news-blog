import Navbar from './Navbar';
import Home from './Home';

function App() {
  const links = "https://siddharthpushportfolio.netlify.app"; // This is a string that contains a link to a website


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />


        <a href={links} target="_blank" rel="noopener noreferrer">
          Visit My Portfolio
        </a>


      </div>
    </div>
  );
}

export default App;

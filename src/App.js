// import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import Navbar from './Navbar';
import Mainbody from './mainbody';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Navbar />
      {/* </header> */}
      <br/>
      <Mainbody />
      <Footer />
    </div>
  );
}

export default App;

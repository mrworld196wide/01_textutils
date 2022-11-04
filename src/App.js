import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="Aishwar" aboutText="About Aishwar" />
      <div className="container my-3">
      {/* <Textform heading="enter the required text below" /> */}
      <About/>
      </div>
    </>
  );
}
export default App;

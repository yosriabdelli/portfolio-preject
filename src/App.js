import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
      params={{
        particles:{
          Number:{
            value :30,
            desity :{
              enable : true,
              value_area : 900
            }
          },
          "size":{
            value:2
          },
          shape:{
            type:"circle",
            stroke: {
              width:5,
              color:"#f9ab00"
            }
          }
        }
        
      }}
      />
      <Navbar/>
      <Header/>
    </>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';

import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';


function App() {
  return (
    <>
      <ScrollingProvider>
        <Section id="home">
          <Navbar/>
          <Header/>
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
        </Section>
        <Section id="about" className="box">ABOUT ME</Section>
        <Section id="services" className="box">Services</Section>
        <Section id="projets" className="box">Projets</Section>
        <Section id="contacts"className="box">Contacts</Section>
      </ScrollingProvider>
    </>
  );
}

export default App;

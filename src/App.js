import React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title'; 
import About from './components/About';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';

export default class App extends React.Component{
    render(){
        return(
            <>
               <Navbar />
               <Title name="All Of You!" leadTest="I am a cartoon character" />
               <About />
               <ProjectSection />
               <Footer />
            </>
        );
    }
}
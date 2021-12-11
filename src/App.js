import React from 'react';
import './App.css';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './pages/Services/Services'
import Masters from './pages/Masters/Masters'
import Price from './pages/Price/Price'
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/Home/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/masters' component={Masters}/>
          <Route path='/price' component={Price}/>
          <Route path='/about-us' component={AboutUs}/>
        </Switch>
    </div>
     
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
 
                
function App() {
  return (
    <div className="app">
        <Header />
        <div className='nav-main'>
        <Navigation />
        <Main>
          <div className='subContents'>
             <SubContents />
             <SubContents />
             <SubContents />
          </div>
            <Advertisement />
        </Main>
</div>
    </div>
  );
}
                
export default App;


import React from 'react';
import Router from './components/Router';
import Sidebar from './components/Sidebar/Sidebar';
import './css/plugins/bootstrap.min.css';
import './css/plugins/fancybox.min.css';
import './css/plugins/font-awesome.min.css';
import './css/plugins/swiper.min.css';
import './css/style.css';

function App() {
  return (
    <div className="art-app art-app-onepage">
      <div class="art-mobile-top-bar"></div>
      <div className='art-app-wrapper'>
        <div className='art-app-container'>
          <Sidebar />
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
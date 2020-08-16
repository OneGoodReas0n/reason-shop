import React from 'react';
import './app.scss';
import HomeContainer from '../containers/home';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
   render() {
      return (
         <div>
            <BrowserRouter>
               <HomeContainer />
            </BrowserRouter>
         </div>
      );
   }
}

export default App;

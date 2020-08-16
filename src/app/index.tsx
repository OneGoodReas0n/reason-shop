import React from 'react';
import './app.scss';
import HomeContainer from '../containers/home';

class App extends React.Component {
   render() {
      return (
         <div>
            <HomeContainer />
         </div>
      );
   }
}

export default App;

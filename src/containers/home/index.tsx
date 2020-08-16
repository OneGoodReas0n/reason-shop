import React from 'react';
import Header from '../../wrappers/header';
import Footer from '../../wrappers/footer';
import Products from '../../wrappers/apparel';
import { Switch, Route } from 'react-router';
import routes from '../../routes';

class HomeContainer extends React.Component {
   render() {
      const routeElements = routes.map((el) => {
         return <Route key={el.url} path={el.url} exact={el.exact} component={el.component} />;
      });
      return (
         <div>
            <Header />
            <Switch>{routeElements}</Switch>
            <Footer />
         </div>
      );
   }
}

export default HomeContainer;

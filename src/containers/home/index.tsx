import React from 'react';
import Header from '../../wrappers/header';
import Footer from '../../wrappers/footer';
import Products from '../../wrappers/products';

class HomeContainer extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Products />
            <Footer />
         </div>
      );
   }
}

export default HomeContainer;

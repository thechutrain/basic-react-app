import React from 'react';
import Header from './Header';
import Inventory from './Inventory';

class Main extends React.Component{
  render(){
    return(
      <div>
          <Header name="Alan"/>
          <Inventory/>

      </div>
    );
  }
}


export default Main;


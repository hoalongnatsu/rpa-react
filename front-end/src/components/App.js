import React, { Component } from 'react';
import {  
   Container
} from 'reactstrap';

import Menu from './Menu';
import Header from './Header';
import ImageList from './ImageList';
import ImageShow from './ImageShow';

export class App extends Component {
  render() {
    return (
      <div>
         <Menu></Menu>
         <Container>
            <Header></Header>
            <ImageList></ImageList>
            <ImageShow></ImageShow>
         </Container>
      </div>
    )
  }
}

export default App;

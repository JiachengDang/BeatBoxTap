import React, { Component } from 'react';
import Aux from '../hoc/Auks'
import Pages from '../components/Pages/Pages'



class Layout extends Component {
    state = {

      }


    render() { 
        return (
            <Aux>
                
                <Pages></Pages>
            </Aux>
          );
    }
}
 
export default Layout;
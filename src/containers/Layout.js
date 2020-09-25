import React, { Component } from 'react';
import Aux from '../hoc/Auks'
import Page from '../components/Pages/Page1'
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
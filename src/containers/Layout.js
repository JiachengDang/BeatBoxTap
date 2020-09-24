import React, { Component } from 'react';
import Aux from '../hoc/Auks'
import Page from '../components/Page/Page'


class Layout extends Component {
    state = {

      }


    render() { 
        return (
            <Aux>
                
                <Page></Page>
            </Aux>
          );
    }
}
 
export default Layout;
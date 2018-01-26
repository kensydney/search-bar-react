import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';


class App extends React.Component {
  render () {
    return (
      <div>               
        <Header 
        />
        {this.props.children}
        <Footer />                
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


export default App;
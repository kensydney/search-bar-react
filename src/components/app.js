import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';


class App extends React.Component {
    render () {
        return (
            <div>               
                <Header 
                  loading={this.props.loading}
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
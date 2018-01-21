import React from 'react';
import debounce from 'lodash.debounce';
import SearchImage from '../../images/searchImage.png';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/searchActions';
import {connect} from 'react-redux';


class SearchBar extends React.PureComponent{

  doSearch = debounce(() => {
    this.props.actions.setSearchTerm(this.state.searchTerm);
  }, 300)

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  }
  
  render() {
    return(
      <div className="inner-container search-box">
        <input        
            type="search"
            placeholder="Search Publishers"
            value={this.props.searchTerm}
            onChange={this.handleSearch}
        />
        <img className="search-image" src={SearchImage} />  
      </div>
      
    );
  }
}

function mapStateToProps(state, ownProps){   
    return {
        searchTerm: state.searchTerm
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(searchActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

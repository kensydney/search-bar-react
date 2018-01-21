import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './searchbar';
import {connect} from 'react-redux';
import SiteList from './siteList';
import * as siteActions from '../actions/siteActions';
import {bindActionCreators} from 'redux';


class SearchPage extends React.Component {

    constructor(props)
    {
        super(props); 
        this.state = {
            isHidden: true
        };
    }

    componentWillReceiveProps(nextProps){
        if (this.props.searchTerm != nextProps.searchTerm) {
            this.props.actions.getSearchList(nextProps.searchTerm);
        }
        this.setState({isHidden: false});
    }
    
    render () {
        const {sites, searchTerm} = this.props;
        return (
            <div className="outer-container">               
                <SearchBar />
                {
                    sites != null && sites.length > 0 ? <SiteList sites = {sites} /> 
                       : this.state.isHidden ? null 
                       : <div className="result-container search-return-text">We currently don't have any results for your search, try another.</div>
                }    
            </div>
        );
    }
}

SearchPage.propTypes = {
    sites: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        sites: state.sites,
        searchTerm: state.search
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(siteActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../assets/search.png';

class SearchBarComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchTxtEnter = this.handleSearchTxtEnter.bind(this);
    }

    handleChange(ev) {
        this.setState({ searchString: ev.target.value });
    }

    handleSearchTxtEnter(ev) {
        const { search } = this.props;
        ev.preventDefault();
        ev.stopPropagation();
        search(this.state.searchString);
    }

    render() {
        return (
            <div className="center search-bar">
                <input type="search" onChange={this.handleChange} autoFocus autoComplete />
                <span>
                    <img className="srchImg" src={icon} alt="search" width="35px" onClick={this.handleSearchTxtEnter}></img>
                </span>
            </div>
        );
    }
}

SearchBarComponent.propTypes = {
    search: PropTypes.func.isRequired,
    searchText: PropTypes.string,
};

export default SearchBarComponent;

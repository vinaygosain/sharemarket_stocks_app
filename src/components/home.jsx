import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import TileComponent from '../components/tile';
import SearchBarComponent from '../components/searchbar';

class HomeComponent extends React.PureComponent {

    componentDidMount() {
        const { tiles, tilesInit } = this.props;
        if (!(tiles && tiles.length > 0)) {
            tilesInit();
        }
    }

    render() {
        const { onSearch, tiles, history } = this.props;
        return (

            <div>
                <SearchBarComponent search={onSearch} />
                {(tiles && tiles.length > 0) ? (
                    <div className="tileContainer">
                        {
                            _.map(tiles, (tile) => <TileComponent key={tile.id} {...tile} history={history} />)
                        }
                    </div>
                ) :
                    (
                        <div>No result found</div>
                    )
                }
            </div>
        );
    }
}

HomeComponent.propTypes = {
    tiles: PropTypes.array,
    searchText: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
    tilesInit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default HomeComponent;

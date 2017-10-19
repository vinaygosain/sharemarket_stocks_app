import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Api from '../api';
import ModalComponent from '../components/modal';

class DetailsComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSaveTile = this.handleSaveTile.bind(this);
        this.setTilesState = this.setTilesState.bind(this);
        this.state = {
            tile: null,
            openModal: false,
        };
    }

    componentDidMount() {
        const { tiles, match } = this.props;
        if (tiles && tiles.length > 0) {
            const tile = _.find(tiles, { 'id': Number(match.params.id) });
            this.setTilesState(tile);
        } else {
            Api.loadTileFromServer(match.params.id).then((responseTile) => {
                this.setTilesState(responseTile);
            });
        }
    }

    setTilesState(tile) {
        this.setState({
            tile,
        });
    }

    handleOpenModal() {
        this.setState({
            openModal: true,
        });
    }

    handleCancel() {
        this.setState({
            openModal: false,
        });
    }

    handleSaveTile(id, tile) {
        this.handleCancel();
        this.props.handleEditTile(id, tile);
    }

    render() {

        const { tile, openModal } = this.state;
        if (tile) {
            const { name, description, price } = tile;

            return (
                <div className="main-div">
                    <table>
                        <tbody>
                            <tr>
                                <td className="info-title">
                                    <label>Company Name:</label>
                                </td>
                                <td className="info-desc">
                                    <label>{name}</label>
                                </td>
                            </tr>
                            <tr>
                                <td className="info-title">
                                    <label>Description:</label>
                                </td>
                                <td className="info-desc">
                                    <label>{description}</label>
                                </td>
                            </tr>
                            <tr>
                                <td className="info-title">
                                    <label>Price:</label>
                                </td>
                                <td className="info-desc">
                                    <label>{price}</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={this.handleOpenModal}>Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {openModal &&
                        <ModalComponent {...tile}
                            onHandleCancel={this.handleCancel}
                            onHandleEditTile={this.handleSaveTile}
                        />}
                </div>
            );
        }
        return <div className="center"> No such record found. </div>;
    }
}

DetailsComponent.propTypes = {
    tiles: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,

    handleEditTile: PropTypes.func.isRequired,
};

export default DetailsComponent;

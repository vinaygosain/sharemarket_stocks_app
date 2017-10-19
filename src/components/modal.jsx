import React from 'react';
import PropTypes from 'prop-types';

class ModalComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        const { id, imgSrc, description, name, shareTrend, price } = this.props;
        this.state = { id, imgSrc, description, name, shareTrend, price };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(ev) {
        const key = ev.target.id;
        this.setState({ [key]: ev.target.value });
    }

    handleSave(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.props.onHandleEditTile(this.state.id, this.state);
    }

    render() {
        const { name, description, price } = this.state;
        return (
            <div className="modal-window">
                <div className="modal-box">
                    <button className="close-btn" onClick={this.props.onHandleCancel}>X</button>
                    <form onSubmit={this.handleSave}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="info-title">
                                        <label>Company Name:</label>
                                    </td>
                                    <td>
                                        <input type="text" id="name" defaultValue={name} onChange={this.handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info-title">
                                        <label>Description:</label>
                                    </td>
                                    <td>
                                        <textarea type="text" id="description" defaultValue={description} onChange={this.handleChange}>
                                        </textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info-title">
                                        <label>Price:</label>
                                    </td>
                                    <td>
                                        <input type="number" id="price" step="any" defaultValue={price} onChange={this.handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button className="save-btn" type="submit">Save</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}

ModalComponent.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    shareTrend: PropTypes.bool.isRequired,
    onHandleEditTile: PropTypes.func.isRequired,
    onHandleCancel: PropTypes.func.isRequired,
};

export default ModalComponent;

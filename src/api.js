import axios from 'axios';

const sendDataToServer = (tile) =>

    new Promise((resolve, reject) => {

        const funcSuccess = (response) => {
            resolve(response);
        };

        const funcError = (err) => {
            reject(err);
        };

        axios.put('/items/' + tile.id, tile)
            .then(funcSuccess, funcError);
    });

const loadDataFromServer = () =>

    new Promise((resolve, reject) => {

        const funcSuccess = (response) => {
            resolve(response);
        };

        const funcError = (err) => {
            reject(err);
        };

        axios.get('/items')
            .then(funcSuccess, funcError);

    });

const loadTileFromServer = (id) =>

    new Promise((resolve, reject) => {

        const funcSuccess = (response) => {
            resolve(response.data);
        };

        const funcError = (err) => {
            reject(err);
        };

        axios.get('/items/' + id)
            .then(funcSuccess, funcError);

    });

const Api = {
    sendDataToServer,
    loadDataFromServer,
    loadTileFromServer,
};

export default Api;

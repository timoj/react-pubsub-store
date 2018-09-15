import React from 'react';
import RPSStore from './RPSStore';

class RPSComponent extends React.Component {

    constructor(props) {
        super(props);
        this.stores = [];
        this._instanciatedStores = [];
    }

    setStores(stores) {
        this.stores = stores;
    }

    componentWillMount() {
        for (let i in this.stores) {
            let storeInstance = new this.stores[i]();
            if (storeInstance instanceof RPSStore) {
                storeInstance.setClientListener((stateKey, data) => {
                    let state = {};
                    state[stateKey] = data;
                    this.setState(state);
                });
                this._instanciatedStores.push(storeInstance);
            }
        }
    }

    componentWillUnmount() {
        for (let storeInstance in this._instanciatedStores) {
            this._instanciatedStores[storeInstance].remove();
        }
    }
}

export default RPSComponent;
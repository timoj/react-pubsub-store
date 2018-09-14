import React from 'react';
import RPSStore from './RPSStore';

class RPSComponent extends React.Component {

    constructor(props) {
        super(props);
        this.stores = [];
        this._instanciatedStores = [];
    }

    componentWillMount() {
        for (let store in this.stores) {
            if (this.stores[store] instanceof RPSStore) {
                let storeInstance = this.stores[store]();
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
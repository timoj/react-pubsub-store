import React from 'react';
import RPSStore from './RPSStore';

class RPSComponent extends React.Component {

    constructor(props) {
        super(props);
        this._stores = [];
        this._instanciatedStores = [];
        this.storeCount = 0;
        this.storeInitializedCount = 0;
    }

    setStores(stores) {
        this._stores = stores;
    }

    set
    
    setInitialLoadingContent(content) {
        this._initialLoadingContent = content;
        this._showInitialLoadingContent = true;
    }

    componentWillMount() {
        this.storeCount = this._stores.length;
        this.storeInitializedCount = 0;
        for (let i in this._stores) {
            let storeInstance;
            if (Array.isArray(this._stores[i])) { // parameter of path
                storeInstance = new this._stores[i][0](this._stores[i][1]);
            } else {
                storeInstance = new this._stores[i]();
            }
            if (storeInstance instanceof RPSStore) {
                storeInstance.setClientListener((stateKey, data) => {
                    let state = {};
                    state[stateKey] = data;
                    this.setState(state);
                    this.storeInitializedCount++;
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
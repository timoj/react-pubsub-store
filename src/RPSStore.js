import ReactPubSubStore from './ReactPubSubStore';

class RPSStore {

    constructor(path, stateKey) {
        this.data = null;
        this.path = path;
        this.doUpdate = false;
        this.stateKey = stateKey;
        this.clientListener = () => {};
        this.subscription = null;
    }

    setClientListener(listener) {
        this.clientListener = listener;
    }

    _subscribe() {
        this.subscription = ReactPubSubStore.subscribe(this.path, (response) => {
            this.data = response;
            this._updateClients();
        }, this.doUpdate);
    }

    _updateClients() {
        this.clientListener(this.stateKey, this.data);
    }

    remove() {
        if (this.subscription !== null) {
            this.subscription.remove();
        }
    }

}

export default RPSStore;
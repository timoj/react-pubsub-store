import ReactPubSubStore from 'ReactPubSubStore';

class RPSStore {

    constructor() {
        this.data = null;
        this.path = "";
        this.doUpdate = false;
        this.stateKey = "";
        this.clientListener = () => {};
        this.subscription = null;
        this._subscribe();
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
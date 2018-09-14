import ReactPubSubStore from 'ReactPubSubStore';

class RPSStore {

    data = null;
    path = "";
    doUpdate = false;
    stateKey = "";
    clientListener = () => {};
    subscription = null;

    constructor() {
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
const Rx = require('rxjs');
const axios = require('axios');

class DataFetch {
    constructor(actionType, url, params = {}) {
        this.url = url;
        this.actionType = actionType;
        this.init();
    }

    init() {
        switch (this.actionType) {
            case 'GET':
                this.getItems()
                    .subscribe((res) => {
                        res.data.forEach((item) => {
                            console.log(item.title);
                        });
                    });
                break;

            default:
                break;
        }
    }

    getItems() {
        return Rx.Observable.fromPromise(axios.get(this.url));
    }
}

module.exports = DataFetch;

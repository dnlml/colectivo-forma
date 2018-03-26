const Rx = require('rxjs');
const axios = require('axios');

class DataFetch {
    constructor() {
        axios.defaults.baseURL = 'http://qiita.com/api/v1';
        this.init();
    }

    init() {
        this.getQiitaItems()
            .subscribe((res) => {
                res.data.forEach((item) => {
                console.log(item.title);
            });
        });
    }

    getQiitaItems() {
        return Rx.Observable.fromPromise(axios.get('/items?per_page=10'));
    }
}

module.exports = DataFetch;

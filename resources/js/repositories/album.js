import Repository from "./Repository";

const resource = "/album";

export default {
    getPaginated(payload, page) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/list?page=${page}`, payload)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    create(payload) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/create`, payload)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },

    update(id, payload) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/update/${id}`, payload)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },

    delete(id) {
        return new Promise((resolve, reject) => {
            Repository.get(`${resource}/delete/${id}`)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    }
}
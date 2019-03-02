import 'isomorphic-fetch';

export function post(url, data) {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, options)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

export function get(url) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(jsonObj => {
            console.log('Success:', JSON.stringify(jsonObj));
            return jsonObj;
        })
        .catch(error => console.error('Error:', error));
}

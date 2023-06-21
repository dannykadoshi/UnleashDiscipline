fetch('/api/data')
    .then(response => {
        if (response.ok) {
            // HTTP status code 200-299
            return response.json(); // Parse the response body as JSON
        } else {
            throw new Error('Request failed with status ' + response.status);
        }
    })
    .then(data => {
        // Process the received data
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
    });

fetch('/api/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' }) // Convert data to JSON format
})
    .then(response => {
        if (response.ok) {
            // HTTP status code 200-299
            return response.json(); // Parse the response body as JSON
        } else {
            throw new Error('Request failed with status ' + response.status);
        }
    })
    .then(data => {
        // Process the received data
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
    });  
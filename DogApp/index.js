function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => ('Something went wrong, please try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

function logResponse() {
    watchForm();
}

$(logResponse);
function updateBackgroundColor(response) {
    const responseElement = document.getElementById('responseText');

    if (response === 'failed') {
        responseElement.style.backgroundColor = 'red';
    } else if (response === 'successful') {
        responseElement.style.backgroundColor = 'green';
    } else {
        responseElement.style.backgroundColor = ''; // Reset to default if unknown response
    }
}

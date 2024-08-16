// Function to fetch comments from JSON Placeholder and display them
async function fetchComments() {
    try {
        // URL for the comments endpoint
        const url = 'https://jsonplaceholder.typicode.com/comments';
        
        // Fetch the data from the API
        const response = await fetch(url);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const comments = await 

response.json();
        
        // Get the element where comments will be displayed
        const commentsContainer = document.getElementById('comments');
        
        // Clear the loading message
        commentsContainer.innerHTML = '';
        
        // Create HTML content for each comment and append to the container
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <h3>${comment.name}</h3>
                <p><strong>Email:</strong> $

{comment.email}</p>
                <p>${comment.body}</p>
            `;
            commentsContainer.appendChild(commentElement);
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
        const commentsContainer = document.getElementById('comments');
        commentsContainer.innerHTML = 'Failed to load comments.';
    }
}

// Call the function to fetch and display comments when the page loads
fetchComments();

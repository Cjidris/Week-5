document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const myList = document.getElementById('myList');

    // Function to add a new item to the list
    function addItem() {
        const newItemText = itemInput.value.trim();

        if (newItemText) {
            const listItem = document.createElement('li');
            listItem.textContent = newItemText;

            // Append the new item to the list
            myList.appendChild(listItem);

            // Clear the input field
            itemInput.value = '';
        } else {
            alert('Please enter an item.');
        }
    }

    // Add event listener to the button
    addButton.addEventListener('click', addItem);
});

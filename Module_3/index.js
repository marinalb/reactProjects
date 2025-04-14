const form = document.getElementById('form');
const responseTable = document.getElementById('responseTable');
const submitButton = document.getElementById('submitButton');

function simulateLoading(callback) {
    submitButton.innerText = 'Loading...';
    submitButton.disabled = true;

    setTimeout(() => {
        callback(); 
        submitButton.innerText = 'Submit';
        submitButton.disabled = false;
    }, 1000);
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const handleFormSubmission = () => {

        const text = document.getElementById('textInput').value;
        const select = document.getElementById('selectInput').value;
        const radio = document.querySelector('input[name="radioInput"]:checked')?.value || 'None';
        const checkbox = document.getElementById('checkboxInput').checked ? 'Yes' : 'No';


        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${text}</td>
            <td>${select}</td>
            <td>${radio}</td>
            <td>${checkbox}</td>
        `;
        responseTable.appendChild(newRow);

        form.reset();
    };
    simulateLoading(handleFormSubmission);
});
// Function to handle login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Save data to localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Login data saved!');
}
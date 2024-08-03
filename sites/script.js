document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const status = document.getElementById('status');

    // Replace this with your actual password
    const correctPassword = '@ETHIOPIANhackers12345'; 

    if (password === correctPassword) {
        status.innerText = 'Access Granted';
        status.style.color = '#00ff00';
        // Redirect to protected page or show content
        window.location.href = 'message.html'; // Change to the URL of the page you want to protect
    } else {
        status.innerText = 'Access Denied. Incorrect Password';
        status.style.color = '#ff0000';
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const status = document.getElementById('status');

    // Replace this with your actual password
    const correctPassword = 'yougotthepassword'; 

    if (password === correctPassword) {
        status.innerText = 'Access Granted';
        status.style.color = '#00ff00';
        // Redirect to protected page or show content
        window.location.href = 'message.html'; // Change to the URL of the page you want to protect
    } else {
        status.innerText = 'Access Denied. Incorrect Password';
        status.style.color = '#ff0000';
    }
});

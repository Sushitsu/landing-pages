document.getElementById('loginForm').addEventListener('submit', function(event) {
    var username = document.getElementById('login_field').value;
    var password = document.getElementById('password').value;

    if (!username || !password) {
        event.preventDefault();

        var customAlert = document.createElement('div');
        customAlert.id = 'customAlert';
        customAlert.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        customAlert.style.zIndex = '9999';

        var alertContent = document.createElement('div');
        alertContent.style.backgroundColor = '#fff';
        alertContent.style.color = '#000';

        var alertMessage = document.createElement('p');
        alertMessage.textContent = 'Please fill in both fields.';
        alertContent.appendChild(alertMessage);

        var alertButton = document.createElement('button');
        alertButton.textContent = 'OK';
        alertButton.onclick = function() {
            document.body.removeChild(customAlert);
        };
        alertContent.appendChild(alertButton);

        customAlert.appendChild(alertContent);
        document.body.appendChild(customAlert);
    }
});

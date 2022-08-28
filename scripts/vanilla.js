const oURL = {
    loginAPI : "http://localhost:8000/",
    productAPI : "http://localhost:8001/"
}

function notificationSuccess(msg) {
    $('#notification').html(msg);
    $('#notification').css('color', 'red');

    $('#notification').show();
}

function notificationError(msg) {
    $('#notification').html(msg);
    $('#notification').css('background-color','red');
    $('#notification').show();
}

function closeNotification() {
    $('#notification').hide();
    $('#notification').html("");
}
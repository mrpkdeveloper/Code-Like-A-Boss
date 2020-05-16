function fetchusers(done) {
    $.get('/signup', function (data) {
        done(data)
    })
}

function adduser(firstname, lastname, username, password, address, done) {
    $.post('/signup', {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        address: address
    }, function (data) {
        done(data)
    })
}

function retriveuser(username, password, done) {
    $.post('/login', {
        username: username,
        password: password
    }, function (data) {
        done(data)
    })
}
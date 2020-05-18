$(function () {

    let username = $('#Username')
    let password = $('#Password')
    let login_bttn = $('#login_bttn')

    login_bttn.click(function () {
        retriveuser(username.val(), password.val(),
            function (user) {
                if (user.firstname == undefined) {
                    window.alert("enter correct username or password")
                } else {
                    window.alert(" Welcome " + user.firstname + " " + user.lastname + " to our site ")
                }
            })
    })
}
)
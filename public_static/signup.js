$(function () {

    let firstname = $('#Firstname')
    let lastname = $('#Lastname')
    let username = $('#Username')
    let password = $('#Password')
    let address = $('#Address')
    let sign_bttn = $('#Sign_bttn')

    sign_bttn.click(function () {
        adduser(firstname.val(), lastname.val(), username.val(), password.val(), address.val(),
            function (addeduser) {
                window.alert("added" + addeduser.firstname + "to the database")
            })
    })
}
)
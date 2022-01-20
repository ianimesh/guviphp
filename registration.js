$(function() {
    $('#register').click(function(e) {

        var valid = this.form.checkValidity();

        if (valid) {


            var firstname = $('#firstname').val();
            var lastname = $('#lastname').val();
            var email = $('#email').val();
            var phonenumber = $('#phonenumber').val();
            var password = $('#password').val();
            var age = $('#age').val();
            var dob = $('#dob').val();
            
            e.preventDefault();

            $.ajax({
                type: 'POST',
                url: 'process.php',
                data: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    phonenumber: phonenumber,
                    password: password,
                    age: age,
                    dob: dob
                },
                success: function(data) {
                    Swal.fire({
                        'title': 'Successful',
                        'text': data,
                        'type': 'success'
                    })
                setTimeout(' window.location.href = "login.html"', 1000);

                },
                error: function(data) {
                    Swal.fire({
                        'title': 'Errors',
                        'text': 'There were errors while saving the data.',
                        'type': 'error'
                    })
                }
            });


        } else {

        }





    });


});
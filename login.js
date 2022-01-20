$(function(){
    $('#login').click(function(e){

        var valid = this.form.checkValidity();

        if(valid){
            var email = $('#email').val();
            var password = $('#password').val();
        }

        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'jslogin.php',
            data:  {email: email, password: password},
            success: function(data){

                if($.trim(data) === "1"){
                    setTimeout(' window.location.href = "user.html"', 1000);
                }
                else{
                    alert(data);
                    
                }
            },
            error: function(data){
                alert('there were errors while doing the operation.');
            }
        });

    });
});
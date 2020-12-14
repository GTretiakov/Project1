function sendMail(contactForm) {
    emailjs.send("mailru", "glib", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log('FAILED...', error);
        });
return false;

}
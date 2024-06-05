function checkIt() {
    if (document.forms.mailer.Name.value === "") {
        alert("\nОбласть \"Ім'я\" у формі. \n\Будь ласка, введіть своє ім'я.");
        document.forms.mailer.Name.focus();
        return false;
    }
    if (document.forms.mailer.Subject.value === "")  {
        alert("\nОбласть \"Тема\" в формі. \n\Будь ласка, введіть тему.");
        document.forms.mailer.Subject.focus();
        return false;
    }
    if (document.forms.mailer.Message.value != "") {
        msg();
        return true;
    } else {
        alert("\nОбласть \"Повідомлення\" в формі. \n\nБудь ласка, напишіть повідомлення.");
        document.forms.mailer.Message.focus();
        return false;
    }
}

function msg() {
    document.mailer.action = "mailto:ylia.sed.2005@gmail.com?Subject=" + document.mailer.Subject.value + "&Body=" + document.mailer.Message.value;
}
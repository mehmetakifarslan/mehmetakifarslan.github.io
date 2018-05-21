function valid(){


    var txt = /^[A-Za-z]+$/;
    var isim      = document.getElementById('name').value;
    var soyisim   = document.getElementById('surname').value;
    var dtarihi = document.getElementById('date').value;
    var email     = document.getElementById('email').value;
    var sifre  = document.getElementById('password').value;

    if(isim.trim() == "")
        alert("You have to fill Name area!");
    else if(soyisim.trim() == "")
        alert("Please fill out the Surname section. ");
    else if(dtarihi.trim() == "")
        alert("Please fill out the Birth of Date section.");
    else if(email.trim() == "")
        alert("Please fill out the E-mail section.");
    else if(sifre.trim() == "")
        alert("Please fill out the Password section.");
    else if(!isim.match(txt))
        alert("Please enter only letters to the name field.");
    else if(!soyisim.match(txt))
        alert("Please enter only letters to the surname field.");
    else if(!validPassword(sifre))
        alert("Password is invalid. Your password has to contain 6 to 15 characters including at least one uppercase letter, numeric digit and special character.");
    else if(!validEmail(email))
        alert("Please enter a valid E-mail address.");
    else if(!validDate(dtarihi))
        alert("Invalid date.");
    else return true;

    return false;

}

function validEmail(email) {
                 if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
                     return false;
                return true;
            }
            
function validPassword(password) {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]/.test(password))
        return true;
        return false;
            }
            
function leapYear(year)
            {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
            }
            
function validDate(date) {

    var year = date.substring(6, 10);
    var month = date.substring(3, 5);
    var intMonth = parseInt(month);
    var day = date.substring(0, 2);

    var dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;

    if((year < 1900 && year > 2018) || day > 31)
        return false;
    else if(!date.match(dateRegex))
        return false;
    else if(intMonth < 1 || intMonth > 12)
        return false;
    else if(!leapYear(parseInt(year)) && parseInt(month) == 2 && parseInt(day) > 28)
        return false;
    else if(!(intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) &&
        day > 30)
        return false;

    return true;


            }
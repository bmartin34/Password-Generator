var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
character = ["!", "@", "#", "$", "%", "^", "&", "*", "'", "(", ")", "-", "+", "=", "[", "]", "<", ">", "?", "~"];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = []

var choices;
var toUpper = function (x) {
    return x.toUpperCase();
};

letter2 = letter.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

var generateBtn = document.querySelector("#generate");

function writePassword() {
enter = parseInt(prompt("How many characters would your password to be? Please choose between 8 and 128"));
if (!enter) {
    alert("Please enter a number between 8 and 128");
} else if (enter < 8 || enter > 128) {
    
    enter = parseInt(prompt("You must choose between 8 and 128"));

} else {

    confirmNumber = confirm("Would you like to add numbers?");
    confirmCharacter = confirm("Would you like to add Special Characters?");
    confirmUppercase = confirm("Would you like to add Uppercase Characters?");
    confirmLowercase = confirm("Would you like to add Lowercase Characters?");
};

if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must select at least one catagory");

}

else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, letter, letter2);
}
else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, letter2);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, letter);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(letter, letter2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(letter, letter2);
}

else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(letter);

} else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(letter2);
}
else if (confirmLowercase && confirmNumber) {
    choices = letter.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = letter.concat(letter2);

} else if (confirmNumber && confirmUppercase) {
    choices = number.concat(letter2);
}

else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = letter;
}
else if (confirmUppercase) {
    choices = space.concat(letter2);
};

var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

generateBtn.addEventListener("click", writePassword);

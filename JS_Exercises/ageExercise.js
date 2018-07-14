var age = prompt('How old are you?');

if (age < 0) {
    alert('Your age is not valid!');
} else if (age == 21) {
    alert('Happy birthday!!\nHere\'s a free shot for you');    
} else if (age % 2 !== 0) {
    alert('Your age is odd');
} else if (Math.sqrt(age) % 1 == 0) {
    alert('Perfect square!!!');
}
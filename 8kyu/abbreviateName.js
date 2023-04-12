// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
};

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

};
// Given a string str, reverse it and omit all non-alphabetic characters.
reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');
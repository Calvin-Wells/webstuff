var hello = "hello"
console.log(hello)


var me = {
  first: "Calvin",
  last: "Wells",
  age: 27,
  specialties: [ "swag", "vim" ]
};

console.log(`My name is ${ me.first }.`);

const info = document.getElementById("info")
info.innerHTML = `<p>My name is ${ me.first } ${ me.last }, age ${ me.age }</p>`

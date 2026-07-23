const moveDuration = 1000;
const runner = document.getElementById("runner");

var me = {
  first: "Calvin",
  last: "Wells",
  age: 27,
  specialties: [ "swag", "vim" ]
};

console.log(`My name is ${ me.first }.`);

const info = document.getElementById("info");
info.innerHTML = `<p>My name is ${ me.first } ${ me.last }, age ${ me.age }</p>`;

document.body.onpointermove = event => {
  const { clientX, clientY } = event;

  runner.animate({
    left: `${clientX}px`,
    top: `${clientY}px`

  }, {duration: moveDuration, fill: "forwards"})
}


// 1. "Listen" for when the user `click`s the `#signin` button,
//    `display` the `#modal` window

var modalElement = document.getElementById('modal');

document.getElementById('signin').addEventListener('click', function() {
  // First, GET the element (the modal)
  // Then, change the styles on display to the value of block
  modalElement.style.display = "block";
  modalElement.style.opacity = 1;
})

// 2. "Listen" for when the user `click`s the `#close` button,
//    `display` (or fade out) out the `#modal` window

// First, GET the element (id of 'close')
// Then, attach an event listener of 'click'
// In the function once the close is clicked,
  // GET the modal (id of modal)
  // Then, change the display value to none
document.getElementById('close').addEventListener('click', function() {
  // modalElement.style.display = 'none';

  var fadeOutInterval = setInterval(function() {
    // IF the modal's opacity is greater than 0, subtract by 0.1
    if (modalElement.style.opacity > 0) {
      modalElement.style.opacity -= 0.1;
    }
    else {
      modalElement.style.display = 'none';
      clearInterval(fadeOutInterval);
    }

    console.log("i'm still aliveeeeee");
    // ELSE clear the setInterval from running (call the clearInterval function)
  }, 60);
});


// 3. "Listen" for when the user `click`s the `#submit` button,
//     add an `.error` class to both `<input>` elements
//    - First apply the class to each elementById
//    - Then try applying to all `input` using a traversal loop
//      of some kind
document.getElementById('submit').addEventListener('click', function() {
  document.getElementById('user').classList.add('error');
  document.getElementById('pass').classList.add('error');
});

document.getElementById('submit').addEventListener('click', function() {
  // FOR LOOP EXAMPLE
  // var fields = document.getElementsByClassName('field');
  // for(var counter = 0; counter < fields.length; counter++) {
  //   fields[0].classList.add('error');
  // }

  // FOREACH function example
  document.querySelectorAll('.field').forEach(function(input) {
    input.classList.add('error');
  });
});


// 4. Remove the `.error` class from any individual `<input>` when
//    the cursor give it `focus`
//  - First try writing one event listener/handler per input element
//  - Then do this by writing only ONE event listener/handler for
//    all input elements and applying it using a traversal loop
document.getElementById('user').addEventListener('focus', function() {
  document.getElementById('user').classList.remove('error');
});

document.getElementById('pass').addEventListener('focus', function() {
  document.getElementById('pass').classList.remove('error');
});

document.querySelectorAll('.field').forEach(function(input) {
  input.addEventListener('focus', function() {
    input.classList.remove('error');
  })
});



// 1. where the loop should start (initial state)
// 2. condition in which the loop should keep running
// 3. how to increment your counter
for(var counter = 0; counter < 100; counter++) {
  console.log(counter);
}

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
    .then(function () {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function (error) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() => modal.className = "hidden", 3000);
    });
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}



/// MORE ADVANCED SOLUTION ///

// const glyphStates = {
//   "♡": "♥",
//   "♥": "♡"
// };

// const colorStates = {
//   "red" : "",
//   "": "red"
// };

// const articleHearts = document.querySelectorAll(".like-glyph");

// function likeCallback(e) {
//   const heart = e.target;
//   mimicServerCall("bogusUrl", {forceFailure: true})
//     .then(function(){
//        heart.innerText = glyphStates[heart.innerText];
//        heart.style.color = colorStates[heart.style.color];
//     })
//     .catch(function(error) {
//       const modal = document.getElementById("modal");
//       modal.className = "";
//       modal.innerText = error;
//       setTimeout(() =>  modal.className = "hidden", 3000);
//     });
// }

// for (const glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
} const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
    .then(function () {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function (error) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() => modal.className = "hidden", 3000);
    });
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}



/// MORE ADVANCED SOLUTION ///

// const glyphStates = {
//   "♡": "♥",
//   "♥": "♡"
// };

// const colorStates = {
//   "red" : "",
//   "": "red"
// };

// const articleHearts = document.querySelectorAll(".like-glyph");

// function likeCallback(e) {
//   const heart = e.target;
//   mimicServerCall("bogusUrl", {forceFailure: true})
//     .then(function(){
//        heart.innerText = glyphStates[heart.innerText];
//        heart.style.color = colorStates[heart.style.color];
//     })
//     .catch(function(error) {
//       const modal = document.getElementById("modal");
//       modal.className = "";
//       modal.innerText = error;
//       setTimeout(() =>  modal.className = "hidden", 3000);
//     });
// }

// for (const glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
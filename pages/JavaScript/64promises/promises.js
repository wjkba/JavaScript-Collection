// I promise to return something in the futture

const promise = new Promise((resolve, reject) => {
  let fileLoaded = false;
  if (fileLoaded) {
    resolve("File loaded");
  } else {
    reject("File NOT loaded");
  }
}); // if this asynchronous process is successful invoke resolve, if not reject

promise
  .then((value) => console.log(value)) //if promise is resolved then
  .catch((error) => console.log(error)); // if promise is rejected then

//2
const promise2 = new Promise((resolve) => {
  let x = false;
  if (x) {
    resolve("TRUE");
  }
});

promise2.then((value) => console.log(value));

//3

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

wait(3000).then(() => console.log("Thanks for waiting"));

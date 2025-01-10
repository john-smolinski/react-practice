const doSomething = new Promise((resolve, rejected) => {
  setTimeout(() => {
    // randomly resolve or reject promise
    let rand = Math.floor(Math.random() * 3);
    if (rand % 2 === 0) {
      /* resolve example */
      resolve("operation successful");
    } else {
      /* rejected example */
      rejected("opperation failed");
    }
  }, 1000);
});

doSomething
  .then((result) => {
    // this gets executed when the promise gets resolved
    console.log(result);
  })
  .catch((error) => {
    // this gets executed when the promise fails
    console.error(error);
  });

/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => result.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error(error);
  });
*/

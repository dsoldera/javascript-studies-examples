// Code Example
// https://www.javascripttutorial.net/javascript-dom/javascript-mutationobserver/

(function () {
  // selecting the list
  let list = document.querySelector('#language');
  let food = document.querySelector('#food');

  // selecting the buttons
  let btnAdd = document.querySelector('#btnAdd');
  let btnRemove = document.querySelector('#btnRemove');
  let btnStart = document.querySelector('#btnStart');

  // disable the stop button
  let btnStop = document.querySelector('#btnStop');
  btnStop.disabled = true;

  //MUTATION
  function log(mutations) {
    for (let mutation of mutations) {
      if (mutation.type === 'childList') {
        console.log('log1', mutation);
      }
    }
  }

  // const log2 = (ms) => {
  //   console.log('ms', ms);
  //   for (let m of ms) {
  //     if (m.type === 'childList') {
  //       console.log('log2', m);
  //     }
  //   }
  // };

  // function log2(mutations2) {
  //   for (let mutation2 of mutations2) {
  //     if (mutation2.type === 'childList') {
  //       console.log('log2', mutation2);
  //     }
  //   }
  // }

  let observer = new MutationObserver(log);

  let observer2 = new MutationObserver((a) => {
    log2(a);
  });

  const starObserver = () => {
    console.log('start listening');
    observer.observe(list, {
      childList: true,
    });
  };

  //Events
  btnStart.addEventListener('click', function () {
    // observer2.observe(food, {
    //   childList: true,
    // });

    btnStart.disabled = true;
    btnStop.disabled = false;
  });

  btnStop.addEventListener('click', function () {
    observer.disconnect();
    observer2.disconnect();
    // Set the button state
    btnStart.disabled = false;
    btnStop.disabled = true;
  });

  let counter = 1;
  btnAdd.addEventListener('click', function () {
    // create a new item element
    let item = document.createElement('li');
    item.textContent = `Item ${counter++}`;

    let item2 = document.createElement('li');
    item2.textContent = `Item ${counter++}`;

    // append it to the child nodes of list
    list.appendChild(item);
    food.appendChild(item2);
  });

  btnRemove.addEventListener('click', function () {
    list.lastElementChild
      ? list.removeChild(list.lastElementChild)
      : console.log('No more child node to remove');
  });

  starObserver();
})();

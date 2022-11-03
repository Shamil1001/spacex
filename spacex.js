const api_url = "https://api.spacexdata.com/v5/launches/";
// Code is messy. Consider group functions or related things etc...

//Consider using let and const!
var launches = [];

async function fetchData(url) {
  // There isn't error handling with try catch
  try {
    const response = await fetch(url);
    var data = await response.json();
    launches.push(data);
    showData(launches);
  } catch (error) {
    console.log(error);
  }
  //Remove log if not using them
}

fetchData(api_url);

function showData(data) {
  // var tab = `<h4>${data[0].date_precision}</h4>`;
  var menu = [
    [20, 2],
    [21, 2],
    [22, 0],
    [24, 1],
    [25, 1],
    [26, 0],
    [27, 8],
    [28, 3],
    [29, 7],
    [30, 4],
  ];

  const launch = document.querySelector(".l");
  const paginationElement = document.querySelector(".pagination");
  const list = document.querySelectorAll(".pagination ul li");

  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
      console.log("Shamil");
    });
  }

  let currentPage = 1;
  let numberOfElements = 5;

  function displayList(items, wrapper, rowsperpage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rowsperpage * page;
    let end = start + rowsperpage;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];
      console.log(i);
      console.log(item);
      let la = `
      <h1>${item.name}</h1>
      `;
      {
        // <img src='${item.links.flickr.original[menu[i][1]]}'/>
        /* <button class='btn' id='bt${i}' onClick="reply(this.id)">Learn more</button> */
      }
      console.log(la);
      let itemElement = document.createElement("div");
      itemElement.classList.add("item");
      itemElement.innerHTML = la;
      console.log(itemElement);
      // launch.innerHTML = la;
      wrapper.appendChild(itemElement);
    }
  }

  function SetupPagination() {
    wrapper.innerHTML = "";
  }

  displayList(data[0], launch, numberOfElements, currentPage);

  for (let j = 1; j <= 10; j++) {
    // launch.innerHTML = `<img src='${
    //   data[0][menu[j - 1][0]].links.flickr.original[menu[j - 1][1]]
    // }'/>
    // <h1>${data[0][menu[j - 1][0]].name}</h1>
    // <button class='btn' id='bt${j}' onClick="reply(this.id)">Learn more</button>`;
  }
  modal();
  count();
}

function modal() {
  var modal = document.getElementById("my-modal");
  var span = document.getElementsByClassName("close")[0];

  for (let i = 1; i <= 10; i++) {
    // console.log(document.querySelector(`#bt${i}`));
    // document.querySelector(`#bt${i}`).onclick = reply;
  }

  function reply() {
    //unused variable 'clicked'
    console.log(this.id);
    modal.style.display = "block";
    contents(this.id);
  }
  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function contents(content) {
  // Don't repeat yourself!!!
  if (content === "bt1") {
    var b1 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][20].links.youtube_id}' autoplay=1&mute=1">
    </iframe>
    <h1>${launches[0][20].name}</h1>
    <p>${launches[0][20].details}</p>
    `;
    document.querySelector(".inner").innerHTML = b1;
  }
  if (content === "bt2") {
    var b2 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][21].links.youtube_id}' autoplay=1&mute=1">
    </iframe>
    <h1>${launches[0][20].name}</h1>
    <p>${launches[0][21].details}</p>
    `;
    document.querySelector(".inner").innerHTML = b2;
  }
  if (content === "bt3") {
    console.log(launches[0][22].details);
    var b3 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][22].links.youtube_id}' autoplay=1&mute=1">
    </iframe>
    <h1>${launches[0][20].name}</h1>
    <p>${launches[0][22].details}</p>
    `;
    document.querySelector(".inner").innerHTML = b3;
  }
  if (content === "bt4") {
    var b4 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][24].links.youtube_id}' autoplay=1&mute=1">
    </iframe>
    <h1>${launches[0][20].name}</h1>
    <p>${launches[0][24].details}</p>
    `;
    document.querySelector(".inner").innerHTML = b4;
  }
  if (content === "bt5") {
    var b5 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][25].links.youtube_id}' autoplay=1&mute=1">
    </iframe>
    <h1>${launches[0][20].name}</h1>
    <p>${launches[0][25].details}</p>
    `;
    document.querySelector(".inner").innerHTML = b5;
  }
  if (content === "bt6") {
    var b6 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][26].links.youtube_id}' autoplay=1&mute=1">
    </iframe>
    <p>${launches[0][26].details}</p>
    `;
    document.querySelector(".inner").innerHTML = b6;
  }
  if (content === "bt7") {
    var b7 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][27].links.youtube_id}' autoplay=1&mute=1">
    </iframe>
    <h1>${launches[0][20].name}</h1>
    <p>${launches[0][27].details}</p>
    `;
    document.querySelector(".inner").innerHTML = b7;
  }
  if (content === "bt8") {
    var b8 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][28].links.youtube_id}' autoplay=1&mute=1">
    </iframe>
    <h1>${launches[0][20].name}</h1>
    <p>${launches[0][28].details}</p>
    `;
    document.querySelector(".inner").innerHTML = b8;
  }
  if (content === "bt9") {
    var b9 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][29].links.youtube_id}' autoplay=1&mute=1">
    </iframe>
    <h1>${launches[0][20].name}</h1>
    <p>${launches[0][29].details}</p>
    `;
    document.querySelector(".inner").innerHTML = b9;
  }
  if (content === "bt10") {
    var b10 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][30].links.youtube_id}' autoplay=1&mute=1">
    </iframe>
    <h1>${launches[0][20].name}</h1>
    <p>${launches[0][30].details}</p>
    `;
    document.querySelector(".modal-content").innerHTML = b10;
  }
}

// Consider using prettier
function count() {
  var speed = 2000;

  var valueDisplays = document.querySelectorAll(".num");
  valueDisplays.forEach((element) => {
    var startvalue = 0;
    var endValue = parseInt(element.getAttribute("data-val"));
    let duration = Math.floor(speed / endValue);
    let counter = setInterval(function () {
      startvalue += 1;
      element.textContent = startvalue;
      if (startvalue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}
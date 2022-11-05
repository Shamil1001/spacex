const api_url = "https://api.spacexdata.com/v5/launches/";
// Code is messy. Consider group functions or related things etc...

var launches = [];

async function fetchData(url) {
  try {
    const response = await fetch(url);
    var data = await response.json();
    launches.push(data);
    showData(launches);
  } catch (error) {
    console.log(error);
  }
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
  const pageButton = document.querySelector(".pagination ul");
  let currentPage = 1;
  let numberOfElements = 10;

  function displayList(items, wrapper, rowsperpage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rowsperpage * page;
    let end = start + rowsperpage;
    var paginatedItems = items.slice(start, end);
    // console.log("shamil: ", paginatedItems);
    // console.log(items.links.flickr.original);
    for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];

      // console.log("i: ", i);
      // console.log(item.links.flickr.original);
      if (item.links.flickr.original.length !== 0) {
        var la = `
        <img src='${item.links.flickr.original[menu[i][1]]}'/>
        <h1>${item.name}</h1>
        <button class='btn' id='${i}' onClick="reply(this.id)">Learn more</button>
        `;
      }
      if (item.links.flickr.original.length === 0) {
        var la = `
        <img src='./x.jpg'/>
        <h1>${item.name}</h1>
        <button class='btn' id='${i}' onClick="reply(this.id)">Learn more</button>
        `;
      }
      console.log(la);
      let itemElement = document.createElement("div");
      itemElement.classList.add("item");
      if (la !== undefined) {
        itemElement.innerHTML = la;
      }
      console.log(itemElement);
      // launch.innerHTML = la;
      wrapper.appendChild(itemElement);
    }
  }

  function setupPagination(items, wrapper, numberOfElements) {
    wrapper.innerHTML = "";
    let pageCount = Math.ceil(items.length / numberOfElements);
    for (let i = 1; i <= pageCount; i++) {
      let btn = PaginationButton(i, items);
      wrapper.appendChild(btn);
      console.log(btn);
    }
  }

  function PaginationButton(page, item) {
    // wrapper.innerHTML = "";
    let btn = document.createElement("li");
    btn.classList.add("page-item");
    btn.classList.add("current-page");
    btn.innerText = page;
    if (currentPage == page) {
      btn.classList.add("active");
      console.log("button: ", page);
    }

    btn.addEventListener("click", function () {
      currentPage = page;
      displayList(data[0], launch, numberOfElements, currentPage);

      let currentBtn = document.querySelector(".pagination li.active");
      currentBtn.classList.remove("active");

      btn.classList.add("active");
    });

    return btn;
  }

  setupPagination(data[0], pageButton, numberOfElements);

  function paginate(item) {
    item = data[0];
    console.log();

    currentPage = page;
    displayList(item, launch, numberOfElements, currentPage);

    // if (this.id === "prev") {
    //   list[1].classList.add("active");
    // }
    // if (this.id === "2") {
    //   list[2].classList.add("active");
    // }
  }
  displayList(data[0], launch, numberOfElements, currentPage);

  modal(data);
  count();
}

function modal(data) {
  var modal = document.getElementById("my-modal");
  var span = document.getElementsByClassName("close")[0];

  for (let i = 1; i <= data[0].length; i++) {
    console.log("data: ", data[0]);
    // console.log(document.querySelector(`#bt${i}`));
    document.querySelector(`.btn`).onclick = reply;
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
  if (content === "0") {
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

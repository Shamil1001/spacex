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
  var currentPage = 1;
  let numberOfElements = 10;

  function displayList(items, wrapper, rowsperpage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rowsperpage * page;
    let end = start + rowsperpage;
    var paginatedItems = items.slice(start, end);
    for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];

      console.log("i: ", i);
      if (item.links.flickr.original.length !== 0) {
        var la = `
        <img src='${item.links.flickr.original[menu[i][1]]}'/>
        <h1>${item.name}</h1>
        <button class='btn' id='${i}'">Learn more</button>
        `;
      }
      if (item.links.flickr.original.length === 0) {
        var la = `
        <img src='./x.jpg'/>
        <h1>${item.name}</h1>
        <button class='btn' id='${i}'">Learn more</button>
        `;
      }
      // console.log(la);
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
    }

    btn.addEventListener("click", function () {
      currentPage = page;
      displayList(data[0], launch, numberOfElements, currentPage);

      let currentBtn = document.querySelector(".pagination li.active");
      currentBtn.classList.remove("active");
      // console.log("page: ", currentPage);
      btn.classList.add("active");
    });

    return btn;
  }

  setupPagination(data[0], pageButton, numberOfElements);

  displayList(data[0], launch, numberOfElements, currentPage);

  modal(data, currentPage);
  count();
}

function modal(data, activeButton) {
  var modal = document.getElementById("my-modal");
  var span = document.getElementsByClassName("close")[0];

  for (let i = 0; i < 10; i++) {
    // console.log(document.querySelector(`#bt${i}`));
    document.getElementById(`${i}`).onclick = reply;
  }

  function reply() {
    console.log(this.id);
    modal.style.display = "block";
    contents(this.id, activeButton);
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

function contents(content, p) {
  console.log("pagess ", p);
  for (let i = 0; i <= 10; i++) {
    if (content === `${i}`) {
      var b1 = `<iframe width="70%" height='400vh' src='https://www.youtube.com/embed/${launches[0][i].links.youtube_id}' autoplay=1&mute=1">
      </iframe>
      <h1>${launches[0][i].name}</h1>
      <p>${launches[0][i].details}</p>
      `;
      document.querySelector(".inner").innerHTML = b1;
    }
  }
}

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

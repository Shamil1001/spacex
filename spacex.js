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
    // Alert. Display error
    console.log(error);
  }
}

fetchData(api_url);
//redundant code
function showData(data) {
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
  // use semantic classes
  const launch = document.querySelector(".l");
  const pageButton = document.querySelector(".pagination ul");
  var currentPage = 1;
  let numberOfElements = 10;
  // if a function takes params more than 3 is not a good function
  function displayList(items, wrapper, rowsperpage, page) {
    wrapper.innerHTML = "";
    page--;

    var start = rowsperpage * page;
    let end = start + rowsperpage;
    var paginatedItems = items.slice(start, end);
    for (let i = 0; i < paginatedItems.length; i++) {
      var item = paginatedItems[i];
      //remove console.log
      console.log("i: ", start);
      if (item.links.flickr.original.length !== 0) {
        var la = `
        <img src='${item.links.flickr.original[menu[i][1]]}'/>
        <h1>${item.name}</h1>
        <button class='btn' id='${i + start}'">Learn more</button>
        `;
      }
      if (item.links.flickr.original.length === 0) {
        var la = `
        <img src='./x.jpg'/>
        <h1>${item.name}</h1>
        <button class='btn' id='${i + start}'">Learn more</button>
        `;
      }
      let itemElement = document.createElement("div");
      itemElement.classList.add("item");
      if (la !== undefined) {
        itemElement.innerHTML = la;
      }
      //remove console.log
      console.log(itemElement);
      wrapper.appendChild(itemElement);
    }
  }

  function setupPagination(items, wrapper, numberOfElements, page) {
    wrapper.innerHTML = "";
    let pageCount = Math.ceil(items.length / numberOfElements);
    let prev = document.createElement("li");
    prev.classList.add("page-item");
    prev.classList.add("prev-page");
    prev.innerText = "Prev";
    let next = document.createElement("li");
    next.classList.add("page-item");
    next.classList.add("next-page");
    next.innerText = "Next";
    let end = document.createElement("li");
    end.classList.add("page-item");
    end.classList.add("end-page");
    end.innerText = "End";
    let start = document.createElement("li");
    start.classList.add("page-item");
    start.classList.add("start-page");
    start.innerText = "Start";
    wrapper.appendChild(start);
    wrapper.appendChild(prev);

    const pageNumbers = (total, max, current) => {
      const half = Math.round(max / 2);
      let to = max;

      if (current + half >= total) {
        to = total;
      } else if (current > half) {
        to = current + half;
      }

      let from = to - max;

      let arr = Array.from({ length: max }, (_, i) => i + 1 + from);
      arr.map((p) => {
        let btn = PaginationButton(p);
        wrapper.appendChild(btn);
      });
      const disabled = {
        start: () => arr[0] === 1,
        prev: () => current === 1,
        end: () => arr.slice(-1)[0] === total,
        next: () => current === total,
      };
    };

    pageNumbers(pageCount, 6, page);

    // for (let i = 1; i <= pageCount; i++) {
    //   let btn = PaginationButton(i);
    //   wrapper.appendChild(btn);
    // }
    wrapper.appendChild(next);
    wrapper.appendChild(end);
  }

  function PaginationButton(page) {
    //unused function param 'item'

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
      btn.classList.add("active");
    });

    return btn;
  }

  setupPagination(data[0], pageButton, numberOfElements, currentPage);
  displayList(data[0], launch, numberOfElements, currentPage);
  modal(data[0], currentPage);
  count();
}

function modal(data, activeButton) {
  //unused function param
  var modal = document.getElementById("my-modal");
  var span = document.getElementsByClassName("close")[0];
  for (let i = 0; i < 10; i++) {
    document.getElementById(`${i}`).onclick = reply;
  }

  function reply() {
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
  for (let i = 0; i <= 204; i++) {
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

const toggleButton = document.getElementsByClassName("toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
console.log(toggleButton);

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("act");
  console.log("shamil");
});

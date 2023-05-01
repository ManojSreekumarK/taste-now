document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide2", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  }).mount();
});
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  }
});
// Get the element to be faded
const element = document.querySelector(".fade-in-out-left");

// Check if the element is visible
function isVisible(element) {
  const elementPosition = element.getBoundingClientRect();
  return (
    elementPosition.top < window.innerHeight && elementPosition.bottom >= 0
  );
}

// Add an event listener to the scroll event
window.addEventListener("scroll", () => {
  if (isVisible(element)) {
    element.classList.add("visible-left");
  } else {
    element.classList.remove("visible-left");
  }
});

const elements = document.querySelector(".fade-in-out-right");

// Check if the element is visible
function isVisible(elements) {
  const elementPosition = elements.getBoundingClientRect();
  return (
    elementPosition.top < window.innerHeight && elementPosition.bottom >= 0
  );
}

// Add an event listener to the scroll event
window.addEventListener("scroll", () => {
  if (isVisible(elements)) {
    elements.classList.add("visible-right");
  } else {
    elements.classList.remove("visible-right");
  }
});

let categories = [
  {
    item: "pizza",
    content: [
      {
        name: "Margherita Pizza",
        restaurant: "Foodie's Delight",
        price: "Rs.250",
        link: "https://i.ibb.co/TKdy9Ff/pexels-engin-akyurt-1552635.jpg",
      },
      {
        name: "Pepperoni Pizza",
        restaurant: "Chez Maison",
        price: "Rs.350",
        link: "https://i.ibb.co/h7NVMSf/pexels-edward-eyer-1049620.jpg",
      },
      {
        name: "Hawaiian Pizza",
        restaurant: "Foodie's Delight",
        price: "Rs.300",
        link: "https://i.ibb.co/FH4p2tW/pexels-edward-eyer-1049626.jpg",
      },
      {
        name: "Meat Lover's Pizza",
        restaurant: "Harbor Bistro",
        price: "Rs. 400",
        link: "https://i.ibb.co/3TGckKV/pexels-borbely-arpad-10790638.jpg",
      },
      {
        name: "BBQ Chicken Pizza",
        restaurant: "Chez Maison",
        price: "Rs.375",
        link: "https://i.ibb.co/Qn7L99n/pexels-victor-miyata-3682837.jpg",
      },
      {
        name: "Buffalo Chicken Pizza",
        restaurant: "Chez Maison",
        price: "Rs. 420",
        link: "https://i.ibb.co/qB0chvp/pexels-ikeen-james-2274787.jpg",
      },
      {
        name: "Four Cheese Pizza",
        restaurant: "Harbor Bistro",
        price: "Rs.350",
        link: "https://i.ibb.co/xCZD8rP/pexels-rehan-verma-3053082.jpg",
      },
      {
        name: "Supreme Pizza",
        restaurant: "Foodie's Delight",
        price: "Rs. 200",
        link: "https://i.ibb.co/Pt1k5nt/pexels-tejas-prajapati-578009.jpg",
      },
    ],
  },
  {
    item: "burger",
    content: [
      {
        name: "Classic Burger",
        restaurant: "Burger Joint",
        price: "Rs. 200",
        link: "https://i.ibb.co/d7dspnN/pexels-dana-tentis-552056.jpg",
      },
      {
        name: "Cheeseburger",
        restaurant: "Burger House",
        price: "Rs. 250",
        link: "https://i.ibb.co/6PLSHMR/pexels-eduardo-krajan-15476360.jpg",
      },
      {
        name: "Bacon Burger",
        restaurant: "Burger Joint",
        price: "Rs. 300",
        link: "https://i.ibb.co/sVvDj3F/pexels-engin-akyurt-2271099.jpg",
      },
      {
        name: "Mushroom Swiss Burger",
        restaurant: "Burger House",
        price: "Rs. 350",
        link: "https://i.ibb.co/CHfxxQc/pexels-horizon-content-3727243.jpg",
      },
      {
        name: "Veggie Burger",
        restaurant: "Green Eats",
        price: "Rs. 220",
        link: "https://i.ibb.co/jVXPzMw/pexels-horizon-content-3738730.jpg",
      },
      {
        name: "Double Cheeseburger",
        restaurant: "Burger Joint",
        price: "Rs. 400",
        link: "https://i.ibb.co/X4v5qFb/pexels-jeshootscom-8996.jpg",
      },
      {
        name: "Spicy Burger",
        restaurant: "Burger House",
        price: "Rs. 320",
        link: "https://i.ibb.co/fv6j4BH/pexels-jonathan-borba-2983098.jpg",
      },
      {
        name: "BBQ Burger",
        restaurant: "Burger Joint",
        price: "Rs. 375",
        link: "https://i.ibb.co/6m2VLGS/pexels-valeria-boltneva-1251198.jpg",
      },
    ],
  },
  {
    item: "salad",
    content: [
      {
        name: "Caesar Salad",
        restaurant: "Green Eats",
        price: "Rs. 220",
        link: "https://i.ibb.co/cb9cjJK/pexels-bulbfish-1143754.jpg",
      },
      {
        name: "Greek Salad",
        restaurant: "Salad Garden",
        price: "Rs. 280",
        link: "https://i.ibb.co/9pQ8bq9/pexels-dana-tentis-1213710.jpg",
      },
      {
        name: "Cobb Salad",
        restaurant: "Crispy Greens",
        price: "Rs. 310",
        link: "https://i.ibb.co/LNKDT85/pexels-essen-service-1013518.jpg",
      },
      {
        name: "Caprese Salad",
        restaurant: "Green Eats",
        price: "Rs. 250",
        link: "https://i.ibb.co/t2ysRMb/pexels-mustafa-t-rkeri-707251.jpg",
      },
      {
        name: "Spinach Salad",
        restaurant: "Healthy Bites",
        price: "Rs. 190",
        link: "https://i.ibb.co/hB9wzPC/pexels-rodnae-productions-8963467.jpg",
      },
      {
        name: "Waldorf Salad",
        restaurant: "Crispy Greens",
        price: "Rs. 270",
        link: "https://i.ibb.co/HdB7YRL/pexels-valeria-boltneva-724664.jpg",
      },
      {
        name: "Nicoise Salad",
        restaurant: "Salad Garden",
        price: "Rs. 320",
        link: "https://i.ibb.co/1nk0924/pexels-valeria-boltneva-1833333.jpg",
      },
      {
        name: "Kale Salad",
        restaurant: "Healthy Bites",
        price: "Rs. 210",
        link: "https://i.ibb.co/drw98m6/pexels-vjapratama-1406336.jpg",
      },
    ],
  },
  {
    item: "combos",
    content: [
      {
        name: "Pizza  Combo",
        restaurant: "Foodie's Delight",
        price: "Rs.550",
        link: "https://i.ibb.co/HXcSg8M/pexels-narda-yescas-1566837.jpg",
      },
      {
        name: " Pancakes Combo",
        restaurant: "Chez Maison",
        price: "Rs.400",
        link: "https://i.ibb.co/xf2bZHS/pexels-marta-dzedyshko-2067405.jpg",
      },
      {
        name: " Burger Combo",
        restaurant: "Harbor Bistro",
        price: "Rs.600",
        link: "https://i.ibb.co/CbQkQB9/pexels-engin-akyurt-2725744.jpg",
      },
      {
        name: "Sanwich Combo",
        restaurant: "Foodie's Delight",
        price: "Rs.350",
        link: "https://i.ibb.co/f10r69w/pexels-rajesh-tp-1600711.jpg",
      },
      {
        name: " Burger Combo",
        restaurant: "Chez Maison",
        price: "Rs.800",
        link: "https://i.ibb.co/JFbpwdS/pexels-roman-odintsov-4552047.jpg",
      },
      {
        name: "Donut Combo",
        restaurant: "Harbor Bistro",
        price: "Rs.1000",
        link: "https://i.ibb.co/QQB7Cwb/pexels-jonathan-borba-14048839.jpg",
      },
      {
        name: "French Combo",
        restaurant: "Chez Maison",
        price: "Rs.800",
        link: "https://i.ibb.co/sQNmg1k/pexels-julian-jagtenberg-103124.jpg",
      },
      {
        name: "Chicken Combo",
        restaurant: "Harbor Bistro",
        price: "Rs.1000",
        link: "https://i.ibb.co/7GPbzJK/pexels-engin-akyurt-2673353.jpg",
      },
    ],
  },
];
const btns = document.querySelectorAll(".btn");
const list = document.querySelector(".splide__list");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    btn.classList.add("selected");
    list.innerHTML = "";
    for (i = 0; i < categories.length; i++) {
      let sos = categories[i];
      if (sos.item === btn.value) {
        for (j = 0; j < sos.content.length; j++) {
          let coc = sos.content[j];
          list.innerHTML += `<li class="splide__slide">
          <div class="card">
            <img src="${coc.link}" alt="${coc.name}">
            <h5>${coc.name}</h5>
            <h6>${coc.restaurant}</h6>
            <h6>${coc.price}</h6>
            <button>Add to cart </button></div>
        </li>`;
        }
      }
      new Splide(".splide1", {
        type: "loop",
        perPage: 4,
        perMove: 1,
        gap: "1rem",
        autoplay: true,
        pauseOnHover: false,
        breakpoints: {
          768: {
            perPage: 1,
          },
        },
      }).mount();
    }
  });
});
// Get the pop-up screen and close button
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

// Show the pop-up screen when user reaches bottom of page
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    popup.style.display = "block";
  }
});

// Hide the pop-up screen when user clicks close button
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

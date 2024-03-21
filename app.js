//import "./styles.css";

// Step 1: Select and cache the <main> element
const mainEl = document.querySelector("main");

// Step 2: Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)";

// Step 3: Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Step 4: Add a class of flex-ctr to mainEl
mainEl.classList.add("flex-ctr");

//-----------------------------Part2 ---------------//
// Step 1: Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById("top-menu");

// Step 2: Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%";

// Step 3: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Step 4: Add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around");

//-----------------------------Part3 ---------------//
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Iterate over the entire menuLinks array
menuLinks.forEach((link) => {
  // Create an <a> element
  const linkElement = document.createElement("a");

  // Set the href attribute
  linkElement.setAttribute("href", link.href);

  // Set the content
  linkElement.textContent = link.text;

  // Append the new element to topMenuEl
  topMenuEl.appendChild(linkElement);
});

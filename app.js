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



// PART II -- DOM Manipulation (Part Two)//

//-----------------------------Part2 ---------------//

// Select and cache the <nav id="sub-menu"> element
const subMenuEl = document.getElementById('sub-menu');

// Set the height of subMenuEl element to be "100%"
subMenuEl.style.height = '100%';

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Add the class of flex-around to the subMenuEl element
subMenuEl.classList.add('flex-around');

//-----------------------------Part3 ---------------//

// Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = 'absolute';

// Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = '0';

//-----------------------------Part4 ---------------//

// Update the menuLinks array
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Select and cache all <a> elements inside topMenuEl
const topMenuLinks = topMenuEl.querySelectorAll('a');

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
  // Prevent default action of anchor elements
  event.preventDefault();

  // Return if the clicked element was not an <a> element
  if (!event.target.matches('a')) return;

  // Log the content of the clicked <a> element
  console.log(event.target.textContent.toLowerCase());

  // Add and remove the 'active' class based on the clicked element
  topMenuLinks.forEach(link => {
    if (link === event.target) {
      link.classList.toggle('active');
    } else {
      link.classList.remove('active');
    }
  });
});

//-----------------------------Part5 ---------------//

// Define a helper function to build the submenu
function buildSubmenu(subLinks) {
  // Clear the current contents of subMenuEl
  subMenuEl.innerHTML = '';

  // Iterate over the subLinks array and build submenu links
  subLinks.forEach(link => {
    // Create an <a> element
    const linkElement = document.createElement('a');

    // Add an href attribute to the <a>
    linkElement.setAttribute('href', link.href);

    // Set the element's content to the value of the text property
    linkElement.textContent = link.text;

    // Append the new element to subMenuEl
    subMenuEl.appendChild(linkElement);
  });
}

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
  // Prevent default action of anchor elements
  event.preventDefault();

  // Return if the clicked element was not an <a> element
  if (!event.target.matches('a')) return;

  // Toggle the 'active' class based on the clicked element
  topMenuLinks.forEach(link => {
    if (link === event.target) {
      link.classList.toggle('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Check if the clicked <a> element does not have a class of "active"
  if (!event.target.classList.contains('active')) {
    // Get the corresponding link object from menuLinks array
    const linkObject = menuLinks.find(link => link.text === event.target.textContent.toLowerCase());

    // Check if the link object has a subLinks property
    if (linkObject && linkObject.subLinks) {
      // Set the CSS top property of subMenuEl to 100%
      subMenuEl.style.top = '100%';

      // Build the submenu based on the subLinks array
      buildSubmenu(linkObject.subLinks);
    } else {
      // Otherwise, set the CSS top property of subMenuEl to 0
      subMenuEl.style.top = '0';
    }
  }
});

//-----------------------------add interactions ---------------//

// Attach a delegated 'click' event listener to subMenuEl
// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
  // Prevent default action of anchor elements
  event.preventDefault();

  // Return immediately if the clicked element was not an <a> element
  if (!event.target.matches('a')) return;

  // Log the content of the clicked <a> element
  console.log(event.target.textContent);

  // Remove the 'active' class from each <a> element in topMenuLinks
  topMenuLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Toggle the 'active' class on the clicked <a> element
  event.target.classList.toggle('active');

  // Update the contents of mainEl based on the clicked <a> element
  const linkText = event.target.textContent.trim().toLowerCase();
  if (linkText === 'about') {
    mainEl.innerHTML = '<h1>About</h1>';
  } else {
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  }
});

// Attach a delegated 'click' event listener to subMenuEl
subMenuEl.addEventListener('click', function(event) {
  // Prevent default action of anchor elements
  event.preventDefault();

  // Return immediately if the clicked element was not an <a> element
  if (!event.target.matches('a')) return;

  // Log the content of the clicked <a> element
  console.log(event.target.textContent);

  // Set the CSS top property of subMenuEl to 0
  subMenuEl.style.top = '0';

  // Remove the 'active' class from each <a> element in topMenuLinks
  topMenuLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Update the contents of mainEl with an <h1> containing the text of the clicked <a> element
  const linkText = event.target.textContent.trim().toLowerCase();
  if (linkText === 'about') {
    mainEl.innerHTML = '<h1>About</h1>';
  } else {
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  }
});






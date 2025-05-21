const ROUTE_HEADER_URL = "templates/header.html";
const ROUTE_ABOUT_URL = "templates/about.html";
const ROUTE_SERVICE_URL = "templates/service.html";
const ROUTE_ITEMS_URL = "templates/items.html";
const ROUTE_CONTACT_URL = "templates/contact.html";
const ROUTE_FOOTER_URL = "templates/footer.html";
const ROUTE_BEST_SELLER_URL = "templates/best-seller.html";



fetch(ROUTE_HEADER_URL)
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });

fetch(ROUTE_ABOUT_URL)
      .then(response => response.text())
      .then(data => {
        document.getElementById('about-section').innerHTML = data;
      });

fetch(ROUTE_SERVICE_URL)
      .then(response => response.text())
      .then(data => {
        document.getElementById('service-section').innerHTML = data;
      });



fetch(ROUTE_CONTACT_URL)
      .then(response => response.text())
      .then(data => {
        document.getElementById('contact-section').innerHTML = data;
      });

fetch(ROUTE_FOOTER_URL)
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });

    
fetch(ROUTE_BEST_SELLER_URL)
      .then(response => response.text())
      .then(data => {
        document.getElementById('best-seller-section').innerHTML = data;
      });

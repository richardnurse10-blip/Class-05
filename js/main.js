const yearEl = document.getElementById("year");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");

const phoneLink = document.getElementById("phoneLink");

const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");
const nav = document.getElementById("nav");

const siteHeader = document.querySelector(".site-header");

const navLinks = [
    {label: "Home", href: "#hero"},
    {label: "Services", href: "#features"},
    {label: "Book", href: "#cta"},
    {label: "Contact", href: "#footer"}
];


const services = [
    {
        title: "Classic Haircut",
        text: "Timeless Cuts with Modern Percision, Tailored to Your Style.",
        img: "assets/images/classichaircut.jpg",
    }, {
        title: "Beard Trim",
        text: "Shape and Line-up Your Beard for a Clean, Sharp Finish.",
        img: "assets/images/classichaircut.jpg",
    }, {
        title: "Straight Razor Shave",
        text: "Hot Towel Teartment with a Smooth Traditional Shave.",
        img: "assets/images/classichaircut.jpg",
    }, {
        title: "Spary-on Hairlines",
        text: "Making miracles Happen by Bringing Back That Line.",
        img: "assets/images/classichaircut.jpg",
    }
];

function renderNavigation(){
    if(nav){
        const navHTML = navLinks.map((link) => {
            return `
            <a href="${link.href}" class="nav-link">
            ${link.label}
            </a>
            `
        }).join("");
        nav.innerHTML = navHTML;
    }

    if(mobileMenu){
        const mobileHTML = navLinks.map((link) => {
            return `
            <a href="${link.href}" class="mobile-link">
            ${link.label}
            </a>
            `;
        }).join("");
        mobileMenu.innerHTML = mobileHTML;
    }
}
renderNavigation()

function renderFeatures(){
    if(!featureGrid) return;

    services.forEach(function(service){

        const card = document.createElement("article");
        card.classList.add("feature-card");

        card.innerHTML = `
        <image src="${service.img}" alt="${service.title}" class="feature-img">
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.text}</p>
        `

        featureGrid.appendChild(card)
    })
}
renderFeatures();

function setCurrentYear() {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
}

function updateHeadingText(newText) {
    heading.textContent = newText;
}

let isMenuOpen = false;

function toggleMobileMenu() {

    if (isMenuOpen === false) {

        mobileMenu.classList.add("is-open");
        isMenuOpen = true;

    } else {

        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;

    }
}

function closeMobileMenu() {
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
}

setCurrentYear();

ctaBtn.addEventListener("click", function() {
        updateHeadingText(
            "Booking Coming Next - Great Choice!"
        );
        
});

callBtn.addEventListener("click", function() {
    if (phoneLink) {
        updateHeadingText("Call us at" + phoneLink.textContent);
    } else {
        updateHeadingText("Call Feature Coming Next!");
    }
});

menuBtn.addEventListener("click", function(){
    toggleMobileMenu();
});

mobileMenu.addEventListener("click", function(event) {

    if (event.target.tagName === "A") {
        closeMobileMenu();
    }

});
renderFeatures();

function handleHeaderOnScroll(){
    if(!siteHeader) return;

    if(window.scrollY > 10){
        siteHeader.classList.add("is-scrolled");
    }else{
        siteHeader.classList.remove("is-scrolled");
    }
}

window.addEventListener("scroll", handleHeaderOnScroll());
handleHeaderOnScroll();


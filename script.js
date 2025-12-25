/* =========================
   GADWATA PROJECT JS
   ========================= */

/* ===== Smooth Scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

/* ===== Navbar Active Link Highlight ===== */
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

/* ===== Card Fade-in on Scroll ===== */
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    card.classList.add('fade');
    observer.observe(card);
});

/* ===== Scroll to Top Button ===== */
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ===== Fort Search (for forts.html) ===== */
function searchFort() {
    let input = document.getElementById("searchInput").value.toUpperCase();
    let fortCards = document.querySelectorAll(".fort-card");

    fortCards.forEach(card => {
        let title = card.querySelector("h5").innerText.toUpperCase();
        card.style.display = title.includes(input) ? "block" : "none";
    });
}

/* ===== Year Auto Update ===== */
const year = document.querySelector(".year");
if (year) {
    year.textContent = new Date().getFullYear();
}

const images = document.querySelectorAll(".gallery img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");
const searchInput = document.getElementById("searchInput");
const darkModeBtn = document.getElementById("darkModeBtn");

// Popup Image
images.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    });
});

closeBtn.onclick = () => popup.style.display = "none";

// Filter Images
function filterImages(category) {
    images.forEach(img => {
        if (category === "all" || img.dataset.category === category) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

// Search Images
searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase();
    images.forEach(img => {
        let category = img.dataset.category;
        img.style.display = category.includes(value) ? "block" : "none";
    });
});

// Dark Mode
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
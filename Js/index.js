// Select all activity cards
const cards = document.querySelectorAll(".Protfolio .card");

// Loop through cards
cards.forEach((card) => {
    card.addEventListener("click", () => {
        const title = card.querySelector("h3").innerText;
        const desc = card.querySelector("p").innerText;
        const img = card.querySelector("img").getAttribute("src");

        // Save data in localStorage
        localStorage.setItem("activityTitle", title);
        localStorage.setItem("activityDesc", desc);
        localStorage.setItem("activityImg", img);

        // Open details page in same tab
        window.location.href = "activity-details.html";
    });
});

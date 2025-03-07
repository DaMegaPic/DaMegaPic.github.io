document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
    console.log("Toggle Button Clicked")
}

if (window.location.pathname.includes("reviews.html")) {
    const fetchReviews = async () => {
        try {
            const response = await fetch("/jsons/reviews.json");
            const data = await response.json();
            populateReviews(data.reviews);
        }
        catch (error) {
            console.error("Error fetching reviews",error);
        }
    };

    function populateReviews(reviews) {
        const reviewsContainer = document.getElementById("reviews");
        reviewsContainer.innerHTML = "";

        reviews.forEach(review => {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review");

            reviewElement.innerHTML = `
                <div class="review-header">
                    <div class="review-header-text">
                        <h5>${review.title}</h5>
                        <h5>${"★".repeat(review.rating)}</h5>
                    </div>
                    <img src="${review.image}" alt="Review Image">
                </div>
                <p>${review.content}</p>
                <div class="review-details">
                    <p class="review-date">${review.date}</p>
                    <p class="reviewer-name">${review.reviewer}</p>
                </div>
            `;
        })
    }
}
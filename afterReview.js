// Function to calculate the average rating from an array of reviews
function calculateAverageRating(reviews) {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return total / reviews.length;
}

// Function to add a new review
function addReview(reviews, newReview) {
    reviews.push(newReview);
    return reviews;
}

// Example usage
const reviews = [
    { rating: 5, comment: "Excellent!" },
    { rating: 4, comment: "Very good" },
    { rating: 3, comment: "Average" }
];

const newReview = { rating: 4, comment: "Good" };
const updatedReviews = addReview(reviews, newReview);
const averageRating = calculateAverageRating(updatedReviews);

console.log("Updated Reviews:", updatedReviews);
console.log("Average Rating:", averageRating.toFixed(2));
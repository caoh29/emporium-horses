// This callback function runs every time the DOM is Loaded
document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.getElementById('feedbackForm');
  const reviewsContainer = document.getElementById('reviewsContainer');

  // Default reviews
  const reviewsData = [
    { name: 'Customer 1', feedback: 'Great experience with Emporium Horses!'},
    { name: 'Customer 2', feedback: 'Highly recommend their services.'},
    { name: 'Customer 3', feedback: 'Exceptional horses and excellent customer support.'}
  ];

  // Arrow function to render reviews
  const renderReviews = (reviews) => {
     // Clear existing reviews
    reviewsContainer.innerHTML = '';

    reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');
      reviewElement.innerHTML = `
      <h3>${review.name}:</h3>
      <p>${review.feedback}</p>
      <hr>
      `;
      reviewsContainer.appendChild(reviewElement);
    });
  }

  // Initial rendering of default reviews
  renderReviews(reviewsData);

  // Event listener for form submission
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get user-submitted data
    const userName = document.getElementById('name').value;
    const userFeedback = document.getElementById('message').value;

    // Add the new review to the array
    const newUserReview = { name: userName, feedback: userFeedback };
    reviewsData.unshift(newUserReview);

    // Render the updated reviews
    renderReviews(reviewsData);

    // Clear the form
    feedbackForm.reset();
  });
});

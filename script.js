var stars = document.querySelectorAll('#starRating button');
var rating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    rating = parseInt(star.getAttribute('data-value'));
    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add('active');
    }
  });
});
// reference: https://www.geeksforgeeks.org/star-rating-using-html-css-and-javascript/
document.getElementById('ratingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let message;
  switch (rating) {
    case 5:
      message = "Thank you! We're glad you loved it!";
      break;
    case 4:
      message = "Thanks! We appreciate the positive feedback.";
      break;
    case 3:
      message = "Thanks for the feedback! We'll work even harder next time.";
      break;
    case 2:
      message = "We appreciate your honesty. We'll do better.";
      break;
    case 1:
      message = "We're sorry it didn't meet your expectations. Thank you for the feedback.";
      break;
    default:
      message = "Please select a rating.";
  }

  alert(message);
});


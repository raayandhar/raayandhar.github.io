// List of image URLs
const imageUrls = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
    // Add more image URLs as needed
];

// Get the profile image element
const profileImg = document.getElementById("profile-img");

// Function to get a random image URL
function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

// Set a random image on page load
profileImg.src = getRandomImageUrl();

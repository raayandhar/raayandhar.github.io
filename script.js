// List of image URLs
const imageFilenames = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
    "image12.jpg",
    "image13.jpg",
    "image14.jpg",
    "image15.jpg",
    "image16.jpg",
    "image17.jpg",
    "image18.jpg",
    "image19.jpg"
];

const profileImg = document.getElementById("profile-img");
const newImageLink = document.getElementById("new-image-link");
const preloadedImagesContainer = document.getElementById("preloaded-images");

function preloadImages() {
    imageFilenames.forEach(filename => {
        const img = new Image();
        img.src = "profile-images/" + filename;
        preloadedImagesContainer.appendChild(img);
    });
}

function getRandomImageFilename() {
    if (imageFilenames.length === 0) {
        return "default.jpg"; // Use default image if no other images available
    }
    const randomIndex = Math.floor(Math.random() * imageFilenames.length);
    return imageFilenames[randomIndex];
}

function changeProfileImage() {
    const newImageFilename = getRandomImageFilename();
    profileImg.src = "profile-images/" + newImageFilename;
}

preloadImages(); // Preload images on page load

newImageLink.addEventListener("click", function (event) {
    event.preventDefault();
    changeProfileImage();
});

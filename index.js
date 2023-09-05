const button = document.getElementById("button");
const textContainer = document.getElementById("textContainer");
const changingText = document.getElementById("changingText");
const textArray = [
  "Loving",
  "Caring",
  "Inspiring",
  "Supportive",
  "Beutifull",
  "Generous",
  "Artistic!!!",
  "Uplifting",
  "Motivating",
  "Positive",
  "Thoughtful",
  "Kindhearted",
  "Encouraging",
  "Amazing",
];
let currentIndex = 0;
let textIndex = 0;
let typingInterval;

button.addEventListener("click", () => {
  // Hide the button
  button.style.display = "none";

  // Show the text container
  textContainer.style.display = "block";

  // Function to type out the text
  function typeText() {
    if (textIndex < textArray[currentIndex].length) {
      changingText.textContent += textArray[currentIndex][textIndex];
      textIndex++;
    } else {
      // Finished typing this word, reset and move to the next word
      clearInterval(typingInterval);
      setTimeout(() => {
        changingText.textContent = "";
        currentIndex = (currentIndex + 1) % textArray.length;
        textIndex = 0;
        typingInterval = setInterval(typeText, 100);
      }, 1000); // Delay before moving to the next word
    }
  }

  // Start typing the first word
  typingInterval = setInterval(typeText, 100);
});
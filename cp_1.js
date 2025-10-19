const form = document.getElementById("feedback-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const comments = document.getElementById("comments");
const feedbackDisplay = document.getElementById("feedback-display"); 

comments.addEventListener("input", () => {
  const charCount = comments.value.length;
  comments.setAttribute("title", `${charCount} characters`);
}); 
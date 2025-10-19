const form = document.getElementById("feedback-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const comments = document.getElementById("comments");
const feedbackDisplay = document.getElementById("feedback-display"); 

comments.addEventListener("input", () => {
  const charCount = comments.value.length;
  comments.setAttribute("title", `${charCount} characters`);
}); 

const showTooltip = (event) => {
  event.target.setAttribute("title", `Please enter your ${event.target.name}`);
};

const hideTooltip = (event) => {
  event.target.removeAttribute("title");
};

[username, email, comments].forEach((input) => {
  input.addEventListener("mouseover", showTooltip);
  input.addEventListener("mouseout", hideTooltip);
});


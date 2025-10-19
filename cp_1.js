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

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

 if (!username.value.trim() || !email.value.trim() || !comments.value.trim()) {
    alert("Please fill in all fields before submitting!");
    return;
  }

  const entry = document.createElement("div");
  entry.className = "feedback-entry";
  entry.innerHTML = `
    <strong>${username.value}</strong> (${email.value})<br>
    ${comments.value}
  `;
  feedbackDisplay.appendChild(entry);

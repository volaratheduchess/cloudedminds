window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Lock scroll
  document.body.classList.add("loading");

  // Start fade
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 1000);

  // Force finish (DO NOT rely on transitionend)
  setTimeout(() => {
    loader.style.display = "none";

    document.body.classList.remove("loading");

    content.style.display = "block";
    content.classList.add("show");

  }, 2200); // must be longer than fade duration
});

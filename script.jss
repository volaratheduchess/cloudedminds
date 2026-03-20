
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Lock scroll while loading
  document.body.classList.add("loading");

  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 1500);

  loader.addEventListener("transitionend", () => {
    loader.style.display = "none";

    // Unlock scroll AFTER loader is gone
    document.body.classList.remove("loading");

    // Show content
    content.style.display = "block";
  });
});

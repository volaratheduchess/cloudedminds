window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  document.body.classList.add("loading");

  setTimeout(() => {
    loader.classList.add("fade-out");

    // ⏳ Match this to your CSS transition (1.2s)
    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.remove("loading");
      content.style.display = "block";
    }, 1200);

  }, 1500);
});

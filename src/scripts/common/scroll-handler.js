let isTransitioning = false;

function setupGlobalScrollHandler() {
  const scrollUpBtn = document.getElementById("scroll-up-btn");
  // const postArticle = document.getElementById("article"); // Element specific to PostDetails
  // let progressBar = null; // Initialize progress bar variable
  // let progressContainer = null;

  // Function to create the progress bar (only if needed)
  // function createProgressBar() {
  //   const existingContainer = document.getElementById(
  //     "scroll-progress-container"
  //   );
  //   if (existingContainer) {
  //     progressContainer = existingContainer;
  //     progressBar = existingContainer.querySelector(".scroll-progress-bar");
  //     return;
  //   }

  //   const container = document.createElement("div");
  //   container.id = "scroll-progress-container";
  //   container.className = "scroll-progress-container"; // Use existing classes

  //   const bar = document.createElement("div");
  //   // bar.id = "myBar";
  //   bar.className = "scroll-progress-bar"; // Use existing classes

  //   container.appendChild(bar);
  //   document.body.appendChild(container);
  //   progressBar = bar; // Store reference
  //   progressContainer = container;
  // }

  // Single scroll event listener
  window.addEventListener("scroll", () => {
    if (isTransitioning) return; // Don't run during transitions

    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Scroll-to-top button logic
    if (scrollUpBtn) {
      if (scrollY > 100) {
        scrollUpBtn.style.display = "flex";
      } else {
        scrollUpBtn.style.display = "none";
      }
    }

    // Progress bar logic (only if on PostDetails page)
    // if (postArticle) {
    //   // Create progress bar elements if they don't exist yet
    //   if (!progressContainer) {
    //     createProgressBar();
    //   }

    //   // Update progress bar width
    //   if (progressBar && progressContainer) {
    //     const height =
    //       document.documentElement.scrollHeight -
    //       document.documentElement.clientHeight;
    //     const scrolled = height > 0 ? (scrollY / height) * 100 : 0;
    //     progressBar.style.width = scrolled + "%";

    //     if (scrollY > 10) {
    //       progressContainer.classList.add("is-visible");
    //     } else {
    //       progressContainer.classList.remove("is-visible");
    //     }
    //   }
    // }
  });

  // Scroll-to-top click listener
  if (scrollUpBtn) {
    scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // document.documentElement.scrollTo({ // window.scrollTo is generally preferred
      //   top: 0,
      //   behavior: "smooth",
      // });
      // document.body.scrollTo({ // Not needed if using window/documentElement
      //   top: 0,
      //   behavior: "smooth",
      // });
    });
  }
}

// Run the setup function
// Use DOMContentLoaded to ensure elements are available, though script is likely deferred in footer
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupGlobalScrollHandler);
} else {
  setupGlobalScrollHandler();
}

document.addEventListener("astro:before-preparation", () => {
  isTransitioning = true;

  // Proactively hide and reset the progress bar to prevent flashing
  const progressContainer = document.getElementById("scroll-progress-container");

  if (progressContainer) {
    progressContainer.classList.remove("is-visible");
    const progressBar = progressContainer.querySelector(".scroll-progress-bar");
    if (progressBar) {
      progressBar.style.width = "0%";
    }
  }
});

document.addEventListener("astro:after-swap", () => {
  window.scrollTo({ left: 0, top: 0, behavior: "instant" });
  setTimeout(() => {
    isTransitioning = false;
    setupGlobalScrollHandler();
  }, 600);
});

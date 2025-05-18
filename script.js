function handleReaction(img, postId) {
  if (localStorage.getItem(postId)) return; // Prevent multiple clicks

  fetch(`https://api.countapi.xyz/hit/pulsebomb/${postId}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById(`count-${postId}`).innerText = data.value;
      img.src = img.dataset.active;
      localStorage.setItem(postId, true);
    })
    .catch(() => {
      alert("Failed to update like, please try again.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reaction").forEach(div => {
    const postId = div.dataset.id;
    const countSpan = document.getElementById(`count-${postId}`);
    const img = div.querySelector("img");

    fetch(`https://api.countapi.xyz/get/pulsebomb/${postId}`)
      .then(response => response.json())
      .then(data => {
        countSpan.innerText = data.value || 0;
        if (localStorage.getItem(postId)) {
          img.src = img.dataset.active;
        }
      })
      .catch(() => {
        countSpan.innerText = 0;
      });
  });
});

function handleReaction(img, postId) {
  if (localStorage.getItem(postId)) return; // مش عايز يضغط مرتين

  // استخدم countapi عشان تزيد العداد
  fetch(`https://api.countapi.xyz/hit/pulsebomb/${postId}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById(`count-${postId}`).innerText = data.value;
      img.src = img.dataset.active; // غير الصورة للحمراء
      localStorage.setItem(postId, true); // سجل إن الضغط تم
    });
}

// لما الصفحة تحمل، نجيب عدد الإعجابات لكل منشور
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reaction").forEach(div => {
    const postId = div.dataset.id;
    const countSpan = document.getElementById(`count-${postId}`);
    const img = div.querySelector("img");

    // جيب عدد الاعجابات
    fetch(`https://api.countapi.xyz/get/pulsebomb/${postId}`)
      .then(response => response.json())
      .then(data => {
        countSpan.innerText = data.value || 0;

        // لو الزائر ضغط قبل كده غير الصورة
        if (localStorage.getItem(postId)) {
          img.src = img.dataset.active;
        }
      });
  });
});

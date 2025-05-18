function handleReaction(imgElement, postId) {
  const pageKey = window.location.pathname;
  const fullId = `${pageKey}-${postId}`;
  const countSpan = document.getElementById(`count-${postId}`);

  let count = parseInt(localStorage.getItem(fullId)) || 100;

  const defaultSrc = imgElement.getAttribute('data-default');
  const activeSrc = imgElement.getAttribute('data-active');

  if (imgElement.src.endsWith(defaultSrc.split('/').pop())) {
    imgElement.src = activeSrc;
    count++;
  } else {
    imgElement.src = defaultSrc;
    count = Math.max(count - 1, 100);
  }

  countSpan.textContent = count;
  localStorage.setItem(fullId, count);
}

window.onload = () => {
  const pageKey = window.location.pathname;
  const reactions = document.querySelectorAll('.reaction img');
  reactions.forEach(imgElement => {
    const postId = imgElement.parentElement.getAttribute('data-id');
    const fullId = `${pageKey}-${postId}`;
    const count = parseInt(localStorage.getItem(fullId)) || 100;
    const defaultSrc = imgElement.getAttribute('data-default');
    const activeSrc = imgElement.getAttribute('data-active');

    document.getElementById(`count-${postId}`).textContent = count;

    if (count > 100) {
      imgElement.src = activeSrc;
    } else {
      imgElement.src = defaultSrc;
    }
  });
};

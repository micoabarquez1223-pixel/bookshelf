function openCabinet() {
  document.getElementById("cabinet").classList.add("open");
}

function openBook(title, message) {

  const note = document.getElementById("note");
  const bookTitle = document.getElementById("bookTitle");
  const bookMessage = document.getElementById("bookMessage");

  bookTitle.innerText = title;
  bookMessage.innerText = message;

  note.classList.add("show");

  note.style.transform = "scale(0.95)";

  setTimeout(() => {
    note.style.transform = "scale(1)";
  }, 120);
}
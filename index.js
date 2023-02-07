/* hiển thị và đóng thanh bên danh mục */

var categoryModal = document.querySelector(".category__sidebar");
var categoryElement = document.querySelector(".category__wrap");
function showCategory() {
  categoryModal.classList.add("show");
  document.addEventListener("mousedown", (e) => {
    if (!categoryElement.contains(e.target)) {
      categoryModal.classList.remove("show");
    }
  });
}

function closeCategory() {
  categoryModal.classList.toggle("show");
}
if (categoryElement.classList.contains("hide")) {
  document.removeEventListener("mousedown", (e) => {
    if (!categoryElement.contains(e.target)) {
      console.log("doi");
      console.log(categoryElement.classList.contains("hide"));
      categoryModal.classList.remove("show");
    }
  });
}

/* hiển thị và đóng thanh bên danh mục */
var spMenuElment = document.querySelector(".sp__menu__sidebar");
function showSpMenu() {
  spMenuElment.classList.toggle("left");
  document.addEventListener("mousedown", (e) => {
    if (!spMenuElment.contains(e.target)) {
      spMenuElment.classList.remove("left");
    }
  });
}
function closeMenuSidebar() {
  spMenuElment.classList.remove("left");
}
if (!spMenuElment.classList.contains("left")) {
  document.removeEventListener("mousedown", (e) => {
    if (!spMenuElment.contains(e.target)) {
      spMenuElment.classList.remove("left");
    }
  });
}

/* hiển thị và đóng tìm kiếm search__modal */
function showCloseModal() {
  var modalElement = document.querySelector(".search__modal");
  modalElement.classList.toggle("display");
}
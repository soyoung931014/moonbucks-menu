// 1. input에  text를 채우고 엔터를 하면, 목록이 나온다.
// 2. 목록에는 옆에 품질, 수정, 삭제 버튼이 나온다.
// 3. 총 갯수가 나온다.

const menuBtn = document.querySelector("#espresso-menu-form");
const menuText = document.querySelector("#espresso-menu-name");

const menuBox = document.querySelector("#espresso-menu-list");

let items = [];

function createMenuBox(menu) {
  const list_box = document.createElement("div");
  list_box.classList.add("menu-list-box");
  const menu_name = document.createElement("div");
  menu_name.classList.add("menu-name");
  menu_name.textContent = menu;

  list_box.appendChild(menu_name);

  const menu_btn_box = document.createElement("div");
  menu_btn_box.classList.add("menu-btn-box");

  const btn_sold_out = document.createElement("button");
  btn_sold_out.className = "bg-gray-50 text-gray-500 text-sm mr-1 sold_out";
  btn_sold_out.textContent = "품절";

  const btn_edit = document.createElement("button");
  btn_edit.className = "bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button";
  btn_edit.textContent = "수정";

  const btn_del = document.createElement("button");
  btn_del.className = "bg-gray-50 text-gray-500 text-sm menu-remove-button";
  btn_del.textContent = "삭제";

  btn_del.onclick = del;

  menu_btn_box.append(btn_sold_out, btn_edit, btn_del);
  list_box.appendChild(menu_btn_box);
  menuBox.appendChild(list_box);
  let item = { id: Math.random(), name: menu, soldOut: false };
  items.push(item);
  localStorage.setItem("expresso", JSON.stringify(items));
}

menuBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  if (menuText.value === "") return;
  createMenuBox(menuText.value);
  menuText.value = "";
  menuCount();
});

function menuCount() {
  const all_menu_list_box_len =
    document.querySelectorAll(".menu-list-box").length;
  const menu_count = document.querySelector(".menu-count");
  if (all_menu_list_box_len)
    menu_count.textContent = `총 ${all_menu_list_box_len}개`;
}

function del() {
  console.log("삭제");
  window.confirm("정말 삭제하시겠습니까?");
}
// 확인 버튼을 누른다.
// 로컬스토리지에 들어간다.
// 기본적으로 페칭은 로컬스토리지에서 데이터를 가져온다.

const category = document.querySelectorAll(".cafe-category-name");
for (let i = 0; i < category.length; i++) {
  let categoryName = category[i].dataset.categoryName;
  let categoryNameKor = category[i].textContent;
  category[i].onclick = () => coffeeCategory(categoryName, categoryNameKor);
}

function coffeeCategory(categoryName, korName) {
  console.log(categoryName);

  const categoryText = document.querySelector(".mt-1");
  categoryText.textContent = `${korName} 메뉴 관리`;
  console.log(localStorage.getItem(categoryName));
  // const menu_count = document.querySelector(".menu-count");
  // menu_count.textContent = `총 ${
  //   localStorage.getItem("categoryName").length
  // }개`;

  //여기에서 로컬스토리지에서 가져와 getItem
}

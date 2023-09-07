const character = document.querySelectorAll(".character");
const textarea = document.querySelector("#comment-text");
const comments_box = document.querySelector(".comments");
const DEFAULT_HEIGHT = 10;
let character_num = 0;

character.forEach((e) => {
  e.addEventListener("click", () => {
    character_info(e);
  });
});

const character_info = (e) => {
  const text_box = document.querySelector("#character_Description");
  const text_name = document.querySelector("#character_name");
  let chr_name = character_name(e.value);
  let chr_text = character_description(e.value);
  text_name.innerHTML = chr_name;
  text_box.innerHTML = chr_text;
  ghost_cursor(e.value);
  background_selector(e.value);
};

const character_description = (e) => {
  const text = {
    ghost_cursor: `<p>동실동실 떠다녀서 동동이야!</p>
    <p>
      너를 놀래주기 위해 <br />
      쫓아다니고 있어!
    </p>`,
    skull_cursor: `<p>골골 거려서 골골이야!</p><p>너를 놀래주기 위해 <br />쫓아다니고 있어!</p>`,
    3: "3번 캐릭터 텍스트",
  };
  return text[e];
};

const character_name = (e) => {
  const name = {
    ghost_cursor: `<h2>안녕? <br />반가워 나는 동동이</h2>`,
    skull_cursor: `<h2>안녕? <br />반가워 나는 골골이</h2>`,
    3: "3번 이름",
  };
  return name[e];
};

textarea.oninput = (event) => {
  const $target = event.target;
  $target.style.height = 0;
  $target.style.height = DEFAULT_HEIGHT + $target.scrollHeight + "px";
};

document.body.addEventListener("mousemove", function (e) {
  let X_line = e.pageX + 65;
  let Y_line = e.pageY + 100;
  document.querySelector(".ghost").style.left = X_line + "px";
  document.querySelector(".ghost").style.top = Y_line + "px";
});

document.body.addEventListener("mousemove", function (e) {
  let X_line = e.pageX + 65;
  let Y_line = e.pageY + 100;
  document.querySelector(".skull").style.left = X_line + "px";
  document.querySelector(".skull").style.top = Y_line + "px";
});

const ghost_cursor = (select_cursor) => {
  let cursors = document.querySelectorAll(".cursor_list");
  let select = document.querySelector(`.${select_cursor}`);
  cursors.forEach((e) => {
    e.style.display = "none";
  });
  if (select.style.display == "none") {
    select.style.display = "block";
  }
};

const background_selector = (value) => {
  console.log(value);
  if (value == "ghost_cursor") {
    document.body.style.backgroundImage = `url("../img/background1.jpg")`;
    console.log("ghost");
  } else if (value == "skull_cursor") {
    document.body.style.backgroundImage = `url("../img/background2.jpg")`;
    console.log("skull");
  } else if (value == 2) {
    document.body.style.backgroundImage = `url("../img/background2.jpg")`;
  }
};

comments_box.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let id = document.querySelector("#comment-id");
    const text = document.querySelector("#comment-text");
    console.log(id.innerHTML);
    id.value = "닉네임";
    text.value = "";
  }
});

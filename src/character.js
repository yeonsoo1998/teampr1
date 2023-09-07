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
    pumpkin_cursor:
      "<p>나는 오싹오싹 호박이야!</p><p>너를 놀래주기 위해 <br />숨어 있어!</p>",
  };
  return text[e];
};

const character_name = (e) => {
  const name = {
    ghost_cursor: `<h2>안녕? <br />반가워 나는 동동이</h2>`,
    skull_cursor: `<h2>안녕? <br />반가워 나는 골골이</h2>`,
    pumpkin_cursor: "<h2>안녕?<br />반가워 나는 호박이</h2>",
  };
  return name[e];
};

textarea.oninput = (event) => {
  const target = event.target;
  target.style.height = 0;
  target.style.height = DEFAULT_HEIGHT + target.scrollHeight + "px";
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

document.body.addEventListener("mousemove", function (e) {
  let X_line = e.pageX + 25;
  let Y_line = e.pageY + 60;
  document.querySelector(".pumpkin_cursor").style.left = X_line + "px";
  document.querySelector(".pumpkin_cursor").style.top = Y_line + "px";
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

const background_selector = async (value) => {
  if (value == "ghost_cursor") {
    let url = 'url("../img/background1.jpg")';
    document.body.style.backgroundImage = url;
  } else if (value == "skull_cursor") {
    let url = 'url("../img/background2.jpg")';
    document.body.style.backgroundImage = url;
  } else if (value == "pumpkin_cursor") {
    let url = 'url("../img/background3.jpg")';
    document.body.style.backgroundImage = url;
  }
};

comments_box.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let id = document.querySelector("#comment-id");
    const text = document.querySelector("#comment-text");
    comment_to_ghost(id.value, text.value);
    id.value = "닉네임";
    text.value = "";
  }
});

const comment_to_ghost = (id, text) => {
  let comment_user = document.querySelectorAll("#user_name");
  let comment_user_msg = document.querySelectorAll("#user_text");
  comment_user.forEach((e) => {
    e.innerText = id;
    clear_ghost_comment(e);
  });
  comment_user_msg.forEach((e) => {
    e.innerText = text;
    clear_ghost_comment(e);
  });
};

const clear_ghost_comment = (e) => {
  setTimeout(() => {
    e.innerText = "";
  }, 3000);
};

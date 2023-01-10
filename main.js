const formEl = document.querySelector(".form-area");
const inputEl = document.querySelector(".msg");
const txtEl = document.querySelector(".txt");

formEl.addEventListener("submit", (e) => {
  const msgValue = inputEl.value.trim();
  e.preventDefault();
  console.log(msgValue);
  if (urlCheck(msgValue)) {
    const res = urlSlice(msgValue);
    txtEl.textContent = res;
    window.navigator.clipboard.writeText(res).then(() => {
      alert("클립보드에 복사 되었습니다.");
    });
  } else {
    alert("정상적인 google drive img 주소가 아닙니다.");
  }
});

const front = "https://drive.google.com/file/d/";
const back = "/view?usp=share_link";
const changeFront = "https://drive.google.com/uc?id=";
function urlCheck(url) {
  if (url.startsWith(front) && url.endsWith(back)) {
    return true;
  }
  return false;
}

function urlSlice(url) {
  const fSlice = url.indexOf("/d/");
  const bSlice = url.indexOf(back);

  const res = url.slice(fSlice + 3, bSlice);
  return changeFront + res;
}

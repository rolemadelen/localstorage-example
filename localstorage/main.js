const body = document.querySelector('body');
const modeButton = document.querySelector("button[name='appearance']");

function setLightOrDarkMode(isDarkMode) {
  if (isDarkMode) {
    body.classList.remove('light');
    body.classList.add('dark');
  } else {
    body.classList.add('light');
    body.classList.remove('dark');
  }
}

modeButton.addEventListener('click', () => {
  let isDarkMode = localStorage.getItem('darkmode') || false;
  isDarkMode = isDarkMode === 'true' ? false : true;
  setLightOrDarkMode(isDarkMode);
  localStorage.setItem('darkmode', isDarkMode);
});

const languageButtons = document.querySelectorAll(
  'div.languageSelection button'
);

languageButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    localStorage.setItem('language', btn.dataset.lang);
    setPageText(btn.dataset.lang);
  });
});

function setPageText(language) {
  if (language === 'ko') {
    title.innerText = '안녕하세요!';
    subtitle.innerText =
      'localStorage 읽기 전용 속성을 사용하면 Document 출처의 Storage 객체에 접근할 수 있습니다. 저장한 데이터는 브라우저 세션 간에 공유됩니다';
  } else if (language === 'ja') {
    title.innerText = 'こんにちは！';
    subtitle.innerText =
      'localStorage は window プロパティの読み取り専用プロパティで、この Document の origin における Storage オブジェクトにアクセスできます。格納されたデータは、ブラウザーのセッションを跨いで保存されます。';
  } else {
    title.innerText = 'Hello!';
    subtitle.innerText =
      "The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.";
  }
}

const title = document.querySelector('h1');
const subtitle = document.querySelector('h3');

window.addEventListener('load', () => {
  const isDarkMode = localStorage.getItem('darkmode') || false;
  setLightOrDarkMode(isDarkMode === 'true');

  const language = localStorage.getItem('language') || 'en';
  setPageText(language);
});

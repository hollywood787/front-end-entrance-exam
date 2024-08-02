import html2pdf from 'html2pdf.js';

const container = document.querySelector('.languagesContainer');

window.addEventListener('load', function () {
  const languageBoxes = document.querySelectorAll('.languagesBox');

  languageBoxes.forEach((box) => {
    const key = box.getAttribute('data-value');
    const storedValue = globalThis?.sessionStorage.getItem(key);

    if (storedValue !== null) {
      box.textContent = storedValue;
    }
  });
});

const allContent = document.querySelector('button');

allContent.addEventListener('click', function () {
  generatePDF();
});

const element = document.querySelector('section');
function generatePDF() {
  const options = {
    margin: 0,
    filename: 'cv',
    html2canvas: {
      scale: 5,
      logging: true,
      letterRendering: true,
      useCORS: true,
    },
    jsPDF: {
      unit: 'in',
      format: 'A4',
      orientation: 'landscape',
    },
  };

  html2pdf().set(options).from(element).toPdf().save();
}

container.addEventListener(
  'blur',
  function (event) {
    if (event.target.classList.contains('languagesBox')) {
      const dynamicValue = event.target.getAttribute('data-value'); // Получаем значение из атрибута data-value

      globalThis?.sessionStorage.setItem(
        dynamicValue,
        event.target.textContent,
      ); // Используем динамическое значение
    }
  },
  true,
);

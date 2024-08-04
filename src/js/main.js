import {
  UIElements,
  generatePDF,
  getLocalKey,
  setItemLocalStorage,
} from '../utils/index';

UIElements.GENERATEPDFBUTTON.addEventListener('click', function () {
  generatePDF();
});

window.addEventListener('load', function () {
  const editableElements = document.querySelectorAll('[contenteditable]');

  editableElements.forEach((element, index) => {
    element.setAttribute('data-value', index);
  });

  editableElements.forEach((box) => {
    const key = box.getAttribute('data-value');
    const storedValue = getLocalKey(key);

    if (storedValue !== null) {
      box.innerHTML = storedValue;
    }
  });
});

UIElements.BODY.addEventListener(
  'blur',
  function (event) {
    if (event.target.hasAttribute('contenteditable')) {
      const dynamicValue = event.target.getAttribute('data-value');

      setItemLocalStorage(dynamicValue, event.target.innerHTML);
    }
  },
  true,
);

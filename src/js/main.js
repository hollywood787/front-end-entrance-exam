const container = document.querySelector('body');

window.addEventListener('load', function () {
  const editableElements = document.querySelectorAll('[contenteditable]');

  editableElements.forEach((element, index) => {
    element.setAttribute('data-value', index);
  });

  editableElements.forEach((box) => {
    const key = box.getAttribute('data-value');
    const storedValue = globalThis?.localStorage.getItem(key);

    if (storedValue !== null) {
      box.textContent = storedValue;
    }
  });
});

container.addEventListener(
  'blur',
  function (event) {
    if (event.target.hasAttribute('contenteditable')) {
      const dynamicValue = event.target.getAttribute('data-value');

      globalThis?.localStorage.setItem(dynamicValue, event.target.textContent);
    }
  },
  true,
);

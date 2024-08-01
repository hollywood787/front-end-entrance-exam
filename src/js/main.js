const container = document.querySelector('.languagesContainer');

window.addEventListener('load', function() {
  const languageBoxes = document.querySelectorAll('.languagesBox');
  
  languageBoxes.forEach(box => {
    const key = box.getAttribute('data-value'); 
    const storedValue = globalThis?.sessionStorage.getItem(key); 

    if (storedValue !== null) {
      box.textContent = storedValue; 
    }
  });
});


container.addEventListener('blur', function(event) {
  if (event.target.classList.contains('languagesBox')) {
    
    const dynamicValue = event.target.getAttribute('data-value'); // Получаем значение из атрибута data-value
    
    globalThis?.sessionStorage.setItem(dynamicValue, event.target.textContent); // Используем динамическое значение
  }
}, true);
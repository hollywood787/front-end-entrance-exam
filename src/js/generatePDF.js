import html2pdf from 'html2pdf.js';

document.addEventListener('DOMContentLoaded', () => {
  const generatePDFButton = document.querySelector('button');

  generatePDFButton.addEventListener('click', function () {
    generatePDF();
  });

  const element = document.querySelector('body');
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
});

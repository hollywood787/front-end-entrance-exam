import { UIElements } from './constants';

export function generatePDF() {
  const options = {
    margin: 0.5,
    filename: 'cv',
    html2canvas: {
      scale: 2,
      logging: true,
      letterRendering: true,
      useCORS: true,
    },
    jsPDF: {
      unit: 'in',
      format: 'letter',
      orientation: 'landscape',
    },
  };

  html2pdf().set(options).from(UIElements.PDFCONTENT).toPdf().save();
}

import jsPDF from 'jspdf';

export const createPDF = async (firstName: string, lastName: string) => {
  const doc = new jsPDF();

  const image = new Image();
  image.src = '/ThankYouImage.png';

  await new Promise((resolve) => {
    image.onload = resolve;
  });
  
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  
  const imageWidth = pageWidth;
  const imageHeight = (image.height * imageWidth) / image.width;

  doc.addImage(image, 'PNG', 0, 0, imageWidth, imageHeight);

  const message = `Thank you for supporting us, ${firstName}!`;

  doc.text(message, pageWidth / 2, pageHeight / 2, { align: 'center' });

  doc.save(`thank-you-from-anima.pdf`);
};
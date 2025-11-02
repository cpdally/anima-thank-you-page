import jsPDF from 'jspdf';

export const createPDF = async (firstName: string, lastName: string) => {
  const doc = new jsPDF();

  const image = new Image();
  image.src = '/ThankYouImage.png';

  await new Promise((resolve) => {
    image.onload = resolve;
  });

  const imageWidth = doc.internal.pageSize.getWidth();
  const imageHeight = (image.height * imageWidth) / image.width;

  doc.addImage(image, 'PNG', 0, 0, imageWidth, imageHeight);

  const message = `Thank you for supporting us, ${firstName}!`;

  doc.text(message, 0, imageHeight + 40);

  doc.save(`thank-you-from-anima.pdf`);
};
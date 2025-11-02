import jsPDF from 'jspdf';

export const createPDF = async (firstName: string, lastName: string) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const image = new Image();
  image.src = '/ThankYouImage.png';

  await new Promise((resolve) => {
    image.onload = resolve;
  });

  const imageWidth = pageWidth;
  const imageHeight = (image.height * imageWidth) / image.width;

  doc.addImage(image, 'PNG', 0, 0, imageWidth, imageHeight);

  const message = `Thank you for supporting us, ${firstName} ${lastName}!`;
  
  doc.setFontSize(30);
  doc.setFont('Poppins', 'bold');

  doc.text(message, pageWidth / 2, pageHeight / 2, { align: 'center' });

  const logo = new Image();
  logo.src = '/AnimaLogo.png';

  await new Promise((resolve) => {
    logo.onload = resolve;
  });

  const logoWidth = 60;
  const logoHeight = (logo.height * logoWidth) / logo.width;
  const logoX = (pageWidth - logoWidth) / 2;
  const logoY = pageHeight - logoHeight - 10;

  doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);

  doc.save(`thank-you-from-anima.pdf`);
};
import pdfMake from "pdfmake";

pdfMake.fonts = {
  source: {
    normal:
      "https://unpkg.com/exportPDF@1.0.1/src/font/SourceHanSansCN-Regular.ttf",
    bold:
      "https://unpkg.com/exportPDF@1.0.1/src/font/SourceHanSansCN-Medium.ttf",
    italics:
      "https://unpkg.com/exportPDF@1.0.1/src/font/SourceHanSansCN-Regular.ttf",
    bolditalics:
      "https://unpkg.com/exportPDF@1.0.1/src/font/SourceHanSansCN-Medium.ttf"
  }
};

export const to_pdf = async (options = {}) => {
  const docDefinition = options.data || {};
  const name = options.name || "demo.pdf";
  await pdfMake.createPdf(docDefinition).download(name);
};

export default { to_pdf };

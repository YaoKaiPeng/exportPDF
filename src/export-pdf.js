import pdfMake from "pdfmake";

pdfMake.fonts = {
  source: {
    normal:
      "https://unpkg.com/export-pdf@1.1.0/src/font/SourceHanSansCN-Regular.ttf",
    bold:
      "https://unpkg.com/export-pdf@1.1.0/src/font/SourceHanSansCN-Medium.ttf",
    italics:
      "https://unpkg.com/export-pdf@1.1.0/src/font/SourceHanSansCN-Regular.ttf",
    bolditalics:
      "https://unpkg.com/export-pdf@1.1.0/src/font/SourceHanSansCN-Medium.ttf"
  }
};

export const to_pdf = async (options = {}) => {
  const docDefinition = options.data || {};
  const name = options.name || "demo.pdf";
  return new Promise((resolve, reject) => {
    pdfMake.createPdf(docDefinition).download(name, () => {
      resolve();
    });
  });
};

export default { to_pdf };

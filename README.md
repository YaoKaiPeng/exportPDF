# exportPDF

前端导出PDF文件,支持简繁字体

#### 使用方法
```
import {to_pdf} from 'exportPDF';

var data = {
  content: [
    { text: 'First 天氣不錯', style: 'header'},
    'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
  ],
  defaultStyle: {
    font: 'source',
  },
  styles: {
    header: {
      bold: false,
    },
  },
}

to_pdf({data})
```

#### 参考资料
[PDFMAKE](https://pdfmake.github.io/docs/)
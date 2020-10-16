import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { OrderReviewPdf } from './OrderReviewPdf'

export const RenderPDF = () => (
  <PDFViewer width='100%' height='500'>
    <OrderReviewPdf/>
  </PDFViewer>
);

ReactDOM.render(<RenderPDF />, document.getElementById('root'));
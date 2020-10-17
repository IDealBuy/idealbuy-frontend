import React from 'react'
import ReactPDF, {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 45,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    // fontFamily: 'Roboto',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
    // fontFamily: 'Roboto',
  },
  subtitle: {
    fontSize: 16,
    margin: 12,
    // fontFamily: 'Roboto',
  },
  text: {
    margin: 12,
    fontSize: 12,
    // fontFamily: 'Roboto',
    textAlign: 'justify',
  },
  image: {
    height: 60,
    width: 110,
    marginBottom: 30,
    marginHorizontal: 0,
  },
  imageThumbnail: {
    height: 60,
    width: 110,
    
  },
  header: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 15,
    textAlign: 'center',
    // fontFamily: 'Roboto',
  },
  footer: {
    position: 'absolute',
    fontSize: 12,
    bottom: 25,
    left: 35,
    right: 0,
    textAlign: 'center',
    color: 'grey',
    // fontFamily: 'Roboto',
  },
});

// Font.register({
//   family: 'Roboto',
//   src: `${__dirname}/fonts/Roboto-Regular.ttf`,
// });

const Subtitle = ({ children, ...props }) => (
  <Text style={styles.subtitle} {...props}>
    {children}
  </Text>
);

let order = JSON.parse( localStorage.getItem('cart') )

// Create Document Component
export const OrderReviewPdf = () => (
    <Document>
      <Page style={styles.body} wrap>
      <Image
        style={styles.image}
        src="https://idealbuy.vercel.app/static/media/logotipo.9c167de3.png"
      />
      


      {/* <Text style={styles.title}></Text> */}
      <Text style={styles.author}>Tus productos favoritos con los precios más bajos, sin importar donde se encuentren.</Text>
      
      {
        order.map((item, idx)=>{
          return(
            <>
              <Text key={item.id}>
                {idx+1} - {item.productName} -> ... $
              </Text>
            </>
          )
        })
      }
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
    </Document>
  );

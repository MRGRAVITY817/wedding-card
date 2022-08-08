import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class AppDocument extends Document {
  static getInitialProps = async (context: DocumentContext) => {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  };
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link href="/static/favicon.ico" rel="shortcut icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&family=Outfit:wght@100;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="dark:bg-gray-800 dark:text-white text-gray-800 bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;

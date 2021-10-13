/* Copyright 2005-present Instant Domain Search, Inc. */

import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // If ctx.req is undefined, then this page is pre-rendered
    // https://nextjs.org/docs/advanced-features/automatic-static-optimization#caveats
    if (ctx.req) {
      // Subsequent imports are fast
      // The root Document.getInitialProps calls renderPage
      const initialProps = await Document.getInitialProps(ctx);
      return initialProps;
    }
    return await Document.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html id="html-root">
        <Head>
          <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
          <link href="/favicon.png" rel="icon" type="image/png" />
        </Head>
        <body className="dark:bg-coolGray-800 bg-blueGray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

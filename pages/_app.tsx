import type { AppProps } from 'next/app';
import { FC } from 'react';
import 'inter-ui/inter.css';
import 'tailwindcss/tailwind.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;

import { generateMetaTags, structuredData } from '@/lib/seo';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://quantfund-ai.com'),
  ...generateMetaTags(),
  openGraph: {
    title: 'QuantFund AI',
    description: 'Institutional-grade research, simulation, and live execution stack',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantFund AI',
    description: 'Institutional-grade trading platform',
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}

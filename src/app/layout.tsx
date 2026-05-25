import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sebatik Barat | Portal Resmi Kecamatan',
  description: 'Gerbang kedaulatan di wilayah perbatasan Indonesia dengan integritas pelayanan prima.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var o=new MutationObserver(function(m){m.forEach(function(n){if(n.type==='attributes'&&n.attributeName==='fdprocessedid')n.target.removeAttribute('fdprocessedid')})});o.observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:['fdprocessedid']})})()`,
        }} />
        <ThemeProvider>
          <ScrollToTop />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

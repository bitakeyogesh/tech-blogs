import Head from 'next/head';
import NavBar from './navbar';
import Footer from './footer';
const name = 'Yogesh Bitake';
export const siteTitle = 'Yogesh Bitake Blogs';

export default function Layout({ children, categories, displayFooter = true }) {
  return (
    <div className="text-gray-800 dark:bg-black dark:text-gray-400">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar categories={categories} />
      <main>{children}</main>
      {displayFooter ? <Footer></Footer> : null}
    </div>
  );
}
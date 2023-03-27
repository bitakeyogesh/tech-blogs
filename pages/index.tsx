import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import BlogLists from '../components/blog-lists';
import utilStyles from '../styles/utils.module.css';
import { getSortedBlogsData } from '../lib/blogs';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export default function Home({ blogs, categories }) {
  return (
    <Layout categories={categories}>
      <div className="flex flex-col max-w-5xl px-8 pb-16 mx-auto pt-14 sm:px-10 lg:px-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Discovering Technology
          </h1>
          <h2 className="px-10 mt-6 text-xl font-medium text-gray-500">
            Stay up-to-date with the latest tech news
          </h2>
        </div>
      </div>
      <BlogLists blogs={blogs}></BlogLists>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { blogs, categories } = getSortedBlogsData();

  return {
    props: {
      blogs,
      categories
    },
  };
}
import Layout from '../components/layout';
import { getSortedBlogsData } from '../lib/blogs';
import { GetStaticProps } from 'next';

export default function Custom404({ categories }) {
    return <Layout categories={categories} displayFooter={false}>
        <div className="flex flex-col max-w-5xl px-8 pb-16 mx-auto pt-14 sm:px-10 lg:px-16 my-28 h-2/3">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white uppercase">
                    404
                </h1>
                <h2 className="mt-3 font-bold text-gray-500">
                    Sorry, We couldn't find this page.
                </h2>
                <h2 className="mt-3 text-gray-500">
                    But dont worry, you can find plenty of other things on homepage
                </h2>
                <div className="flex justify-center mt-7 mb-7 mb-0">
                    <a className="px-5 py-2 text-md text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 " href="/">
                        ← Go to HomePage
                    </a>
                </div>
            </div>
        </div>
    </Layout>
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { categories } = getSortedBlogsData();
    return {
        props: {
            categories
        }
    };
}
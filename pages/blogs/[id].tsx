import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import Head from 'next/head';
import { getSortedBlogsData } from '../../lib/blogs';
import { getAllBlogIds, getBlogData } from '../../lib/blogs';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths } from 'next';
import Container from '../../components/container';
import Image from 'next/image';

export default function Blog({ blogData, categories }) {
    return (
        <Layout categories={categories}>
            <Container>
                <Head>
                    <title>{blogData.title}</title>
                </Head>
                <div className='container mx-auto max-w-screen-lg px-8 xl:px-5 -mt-8'>
                    <div className='max-w-screen-md mx-auto'>
                        <h1 className='mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white'>
                            {blogData.title}
                        </h1>
                        <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
                            <div className="flex items-center gap-3">
                                <div className="relative flex-shrink-0 w-10 h-10">
                                    <Image
                                        src={blogData?.author?.avatar}
                                        // blurDataURL={blurDataURL}
                                        // placeholder="blur"
                                        objectFit="cover"
                                        layout="fill"
                                        alt={blogData?.author?.name}
                                        sizes="30px"
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-800 dark:text-gray-400">
                                    <a href="/author/erika-oliver">
                                        <span className="text-sm">{blogData.author?.name}</span>
                                    </a>
                                </p>
                                <div className="flex items-center space-x-2 text-sm">
                                    <Date dateString={blogData.date} />
                                    <span className="text-xs text-gray-300 dark:text-gray-600">
                                        &bull;
                                    </span>
                                    <span>{blogData.readTime || 15} min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto max-w-screen-lg px-8 xl:px-5'>
                    <article className="prose prose-img:rounded-xl prose-img:mx-auto max-w-screen-lg prose-lg dark:prose-invert prose-a:text-blue-500 prose-code:bg-neutral-100 prose-code:font-light prose-code:p-1 prose-code:rounded prose-code:italic">
                        <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
                    </article>
                </div>
                <div className="flex justify-center mt-7 mb-7 mb-0">
                    <a className="px-5 py-2 text-md text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 " href="/">
                        ← View All Blogs
                    </a>
                </div>
            </Container>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllBlogIds();
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const blogData = await getBlogData(params.id);
    const { categories } = getSortedBlogsData();
    return {
        props: {
            blogData,
            categories
        },
    };
}
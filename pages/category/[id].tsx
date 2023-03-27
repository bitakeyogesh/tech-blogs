import Layout from '../../components/layout';
import BlogLists from '../../components/blog-lists';
import { getSortedBlogsData, getAllBlogCategories } from '../../lib/blogs';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function Category({ blogs, categories, category }) {
    return (
        <Layout categories={categories}>
            <div className="flex flex-col max-w-5xl px-8 pb-16 mx-auto pt-14 sm:px-10 lg:px-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white uppercase">
                        {category}
                    </h1>
                    <h2 className="mt-3 text-gray-500">
                        {blogs.length} Blogs
                    </h2>
                </div>
            </div>
            <BlogLists blogs={blogs}></BlogLists>
        </Layout>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllBlogCategories();
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const category = params.id;
    const { blogs, categories } = getSortedBlogsData();
    const filteredBlogs = blogs.filter(blog => blog.categories.includes(category));
    return {
        props: {
            blogs: filteredBlogs,
            categories,
            category
        },
    };
}
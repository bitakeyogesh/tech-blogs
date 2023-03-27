import Container from './container';
import Image from 'next/image';
import Link from 'next/link';
import Date from './date';

const BlogImage = ({ blog, direction }) => {
    const aspect = direction === 'horizontal' ? 'aspect-video' : 'aspect-square';
    return (
        <div className={`relative ${aspect} overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105`}>
            <Link href={`/blogs/${blog.id}`}>
                <Image
                    src={blog.blogImage}
                    sizes="80vw"
                    alt="Thumbnail"
                    layout="fill"
                    // objectFit="cover"
                    objectFit="fill"
                />
            </Link>
        </div>
    )
}

const Categories = ({ categories = [] }) => {
    return (
        <>
            {categories.map(category => {
                return (
                    <a href={`/category/${category}`}>
                        <span className="inline-block text-xs font-medium tracking-wider uppercase text-blue-600">{category}</span>
                    </a>)
            })
            }
        </>
    );
}

const BlogTitle = ({ className = 'text-lg', title = '', id = '' }) => {
    return (
        <a href={`/blogs/${id}`}>
            <h2 className={`${className} font-semibold leading-snug tracking-tight mt-2 dark:text-white`}>
                {title}
            </h2>
        </a>
    );
}

export const AuthorDetails = ({ blog }) => {
    return (
        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0 w-5 h-5">
                    {blog?.author?.avatar && (
                        <Image
                            src={blog.author.avatar}
                            // blurDataURL={blurDataURL}
                            // placeholder="blur"
                            objectFit="cover"
                            layout="fill"
                            alt={blog?.author?.name}
                            sizes="30px"
                            className="rounded-full"
                        />
                    )}
                </div>
                <span className="text-sm">{blog.author.name}</span>
            </div>
            <span className="text-xs text-gray-300 dark:text-gray-600">
                &bull;
            </span>
            <span className="text-sm">
                <Date dateString={blog.date} />
            </span>
        </div>
    )
}

export default function BlogsList(props) {
    let [firstBlog, ...restBlogs] = props.blogs;
    return (
        <Container>
            <div className="grid ">
                <div className="group grid gap-10 md:grid-cols-2">
                    <BlogImage blog={firstBlog} direction="horizontal"></BlogImage>
                    <div className='flex items-center'>
                        <div>
                            <div className='flex gap-3'>
                                <Categories categories={firstBlog.categories}></Categories>
                            </div>
                            <BlogTitle className='text-3xl' id={firstBlog.id} title={firstBlog.title} />
                            <AuthorDetails blog={firstBlog}></AuthorDetails>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid gap-10 mt-20 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 '>
                {restBlogs.map(blog => {
                    return (
                        <div className='group'>
                            <BlogImage blog={blog} direction="vertical"></BlogImage>
                            <div className='pt-2'>
                                <div className='flex gap-3'>
                                    <Categories categories={blog.categories}></Categories>
                                </div>
                                <BlogTitle className='text-lg' id={blog.id} title={blog.title} />
                                <AuthorDetails blog={blog}></AuthorDetails>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}
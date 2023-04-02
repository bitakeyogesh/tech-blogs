import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'blogs');

export function getSortedBlogsData() {
    // Get file names under /blogs
    const fileNames = fs.readdirSync(blogsDirectory);
    const allBlogsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the blog metadata section
        const { data: frontMatterData } = matter(fileContents);

        //exclude draft blogs
        if (frontMatterData.draft === true) {
            return null;
        }
        // Combine the data with the id
        return {
            id,
            ...frontMatterData,
        };
    }).filter(blog => blog);
    // Sort blogs by date
    const sortedBlogsData = allBlogsData.sort((blog1: any, blog2: any) => {
        if (blog1.date < blog2.date) {
            return 1;
        } else {
            return -1;
        }
    });

    // // convert json data into string
    // const jsonString = JSON.stringify(sortedBlogsData)
    // // write a search.json file
    // fs.writeFileSync( blogsDirectory +'/search.json', jsonString, err => {
    //     if (err) {
    //         console.log('Error writing search json file', err)
    //     } else {
    //         console.log('Successfully wrote search.jso file')
    //     }
    // })

    return {
        blogs: sortedBlogsData,
        categories: getUniqueCategories(sortedBlogsData)
    }
}

export function getAllBlogIds() {
    const fileNames = fs.readdirSync(blogsDirectory);

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export function getAllBlogCategories() {
    const { categories } = getSortedBlogsData();

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'tech'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'lifestyle'
    //     }
    //   }
    // ]
    return categories.map((category) => {
        return {
            params: {
                id: category
            },
        };
    });
}

export async function getBlogData(id) {
    const fullPath = path.join(blogsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the blog metadata section
    const matterResult = matter(fileContents);
    const content = `${matterResult.content}`;
    // Combine the data with the id and content
    return {
        id,
        content,
        ...matterResult.data,
    };
}

function getUniqueCategories(blogs) {
    const uniqueCategories = [];
    blogs.forEach(blog => {
        const blogCategories = blog?.categories || [];
        blogCategories.forEach(category => {
            if (!uniqueCategories.includes(category)) {
                uniqueCategories.push(category);
            }
        });
    });
    return uniqueCategories;
}
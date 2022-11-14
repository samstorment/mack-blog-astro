import { useSanityClient } from "astro-sanity";
import type { Post } from "../types/blog";
import { urlForImage } from "../util/sanity";


export async function getAllPosts(): Promise<Post[]> {
    const query2 = `*[_type == 'post' && isPublished] | order(_createdAt desc ) {
        title,
        excerpt,
        "slug": slug.current,
        thumbnail,
        "createdAt": _createdAt,
        "updatedAt": _updatedAt,
        "author": author->{ name, "slug": slug.current, image },
        "tags": tags[]->{ name, "slug": slug.current }
    }`;
    
    const allPosts = await useSanityClient().fetch(query2) as Post[];

    console.log("ALL POSTS", allPosts);
    
    return allPosts.map(p => {
        return {
            ...p,
            thumbnail: urlForImage(p.thumbnail).width(500).url()
        }
    })
}


export async function getPostBySlug(slug: string): Promise<Post> {
    const query2 = `*[_type == 'post' && isPublished == true && slug.current == '${slug}'] | order(_createdAt desc ) {
        title,
        excerpt,
        "slug": slug.current,
        thumbnail,
        "createdAt": _createdAt,
        "updatedAt": _updatedAt,
        "author": author->{ name, "slug": slug.current, image },
        "tags": tags[]->{ name, "slug": slug.current },
        "headings": body[length(style) == 2 && string::startsWith(style, "h")],
        body
    }`;
    
    const allPosts = await useSanityClient().fetch(query2) as Post[];

    console.log("ALL POSTS for slug", slug, allPosts);
    
    const post = allPosts.map(p => {
        return {
            ...p,
            thumbnail: urlForImage(p.thumbnail).width(500).url()
        }
    })[0];

    return post;
}


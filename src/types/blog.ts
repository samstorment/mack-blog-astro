export type Heading = {
    depth: number;
    slug: string;
    text: string;
}

export type Tag = {
    name: string,
    slug: string
}

export type Author = {
    image: any,
    name: string,
    slug: string
}

export type Post = {
    author: Author,
    excerpt: string,
    title: string,
    createdAt: string,
    updatedAt: string,
    thumbnail: any,
    slug: string,
    tags: Tag[],
    body: any,
    headings: any[]
}
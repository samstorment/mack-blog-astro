import { portableTextToHtml } from "astro-sanity";
import { useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';
import type { Heading } from "../types/blog";

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source: any) {
    return imageBuilder.image(source);
}

const customComponents = {
    types: {
        image: ({ value: image }: any) => {
            return `<img src="${urlForImage(image).url()}" />`;
        }
    },
    marks: {
        highlight: (props: any) => {
            return `<span class="highlight">${props.children}</span>`
        }
    }
}

export function sanityPortableText(portabletext: any) {
    return portableTextToHtml(portabletext, customComponents);
}

type SanityHeading = {
    style: string;
    children: [{
        text: string,
    }]
}

export function generateHeadingSlug(headingText: string) {
    return headingText.toLowerCase().replaceAll(' ', '-');
}

export function getSanityHeadings(headings: SanityHeading[]): Heading[] {
    return headings.map(h => {
        return {
            depth: parseInt(h.style[1]),
            slug: generateHeadingSlug(h.children[0].text),
            text: h.children[0].text
        }
    });
}
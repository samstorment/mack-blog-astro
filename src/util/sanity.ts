import { portableTextToHtml } from "astro-sanity";
import { useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source: any) {
    return imageBuilder.image(source);
}

const customComponents = {
   
}

export function sanityPortableText(portabletext: any) {
    return portableTextToHtml(portabletext, customComponents);
}
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'q9myey6k',
    dataset:'production',
    apiVersion:'2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const bulider = imageUrlBuilder(client);

export const urlFor = (source) => bulider.image(source);
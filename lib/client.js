import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client= createClient({
  projectId: 'kcnba8ic', // replace with your Sanity project ID
  dataset: 'production', // replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2025-01-27', // use the current date for the most up-to-date API version
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);


export const urlFor =(source)=> builder.image(source);

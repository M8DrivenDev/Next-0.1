import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == 'startup' && defined(slug.current)] | order(_createdAt desc) {
  _id,
  slug,
  category,
  author -> {
    _id, name, image, bio
  },
  description,
  image,
  title,
  _createdAt,
  views,
}`
);

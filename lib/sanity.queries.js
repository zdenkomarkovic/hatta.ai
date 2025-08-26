export const blogQueries = {
  // Dohvati sve blog postove
  getAllPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "featuredImage": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt,
    author->{
      name,
      "avatar": avatar.asset->url
    }
  }`,
  
  // Dohvati blog post po slug-u
  getPostBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    publishedAt,
    "featuredImage": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt,
    author->{
      name,
      "avatar": avatar.asset->url,
      bio
    }
  }`,
  
  // Dohvati blog postove za search
  searchPosts: `*[_type == "post" && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*" ||
    body[0].children[0].text match $searchTerm + "*"
  )] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "featuredImage": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt,
    author->{
      name,
      "avatar": avatar.asset->url
    }
  }`,
  
  // Dohvati broj svih postova
  getPostCount: `count(*[_type == "post"])`
}; 
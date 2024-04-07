const getAllTags = (posts) => {
  return [...new Set(posts.map((post) => post.frontmatter.tags).flat())];
};

export default getAllTags;

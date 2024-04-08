const getFeaturedPosts = (posts) => {
  return posts.filter((post) => post?.frontmatter?.featured);
};

export default getFeaturedPosts;

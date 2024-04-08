const getPostsByTag = (tags, posts) => {
  return tags.map((tag) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.tags.includes(tag)
    );

    return {
      params: { tag },
      props: { posts: filteredPosts },
    };
  });
};

export default getPostsByTag;

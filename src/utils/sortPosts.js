const sortPosts = (posts) => {
  return posts.sort(
    (a, b) =>
      Math.floor(new Date(b.frontmatter.pubDate).getTime() / 1000) -
      Math.floor(new Date(a.frontmatter.pubDate).getTime() / 1000)
  );
};

export default sortPosts;

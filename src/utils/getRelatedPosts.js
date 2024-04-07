import sortPosts from './sortPosts';

const getRecentPosts = (posts, currentPost) => {
  const postsLength = posts.length;
  if (postsLength < 3) {
    return [];
  }

  const currentPostIndex = posts.findIndex(
    (post) => post.url === currentPost.url
  );

  if (currentPostIndex === 0) {
    return [posts[1], posts[2]];
  }

  if (currentPostIndex === postsLength - 1) {
    return [posts[currentPostIndex - 2], posts[currentPostIndex - 1]];
  }

  return [posts[currentPostIndex - 1], posts[currentPostIndex + 1]];
};

const getRelatedPosts = (posts, currentPost) => {
  // 1. Get posts list has the same tag with current post (currentTagPosts)
  const currentTagPosts = posts.filter(
    (post) => post.frontmatter.tags[0] === currentPost.tags[0]
  );

  // 2.1. If currentTagPosts length > 2 => sort currentTagPosts => get recent posts
  // 2.2. If currentTagPosts length <= 2 => sort posts => get recent posts
  const sortedPosts = sortPosts(
    currentTagPosts.length > 2 ? currentTagPosts : posts
  );
  return getRecentPosts(sortedPosts, currentPost);
};

export default getRelatedPosts;

import BlogPost from '@components/BlogPost';

const BlogPostList = ({ posts }) => {
  return (
    <ul className="flex flex-col gap-3">
      {posts.map((post) => (
        <BlogPost
          key={post.url}
          url={post.url}
          title={post.frontmatter.title}
          desc={post.frontmatter.description}
          pubDate={post.frontmatter.pubDate}
        />
      ))}
    </ul>
  );
};

export default BlogPostList;

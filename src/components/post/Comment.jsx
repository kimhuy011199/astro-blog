import { useEffect } from 'react';

const repo = import.meta.env.PUBLIC_REPO;
const repoId = import.meta.env.PUBLIC_REPO_ID;
const categoryId = import.meta.env.PUBLIC_CATEGORY_ID;

const Comment = () => {
  const initGiscus = () => {
    const currentTheme = document
      .querySelector('html')
      .getAttribute('data-theme');

    const giscusAttributes = {
      src: 'https://giscus.app/client.js',
      'data-repo': repo,
      'data-repo-id': repoId,
      'data-category': 'BlogComment',
      'data-category-id': categoryId,
      'data-mapping': 'pathname',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-theme': currentTheme,
      'data-lang': 'en',
      crossorigin: 'anonymous',
      async: '',
    };

    const giscusScript = document.createElement('script');
    Object.entries(giscusAttributes).forEach(([key, value]) =>
      giscusScript.setAttribute(key, value)
    );
    document.body.appendChild(giscusScript);
  };

  useEffect(() => {
    initGiscus();
  }, []);

  return <div className="giscus mx-auto lg:w-4/5 relative pt-4 md:pt-8"></div>;
};

export default Comment;

import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Blog huynk.tech',
    description:
      'Explore the world of web development, JavaScript, and more with insightful articles and tutorials.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.mdx')),
    customData: `<language>en-us</language>`,
  });
}

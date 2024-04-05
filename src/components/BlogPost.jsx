import formatDate from '@utils/formatDate';
import slugify from '@utils/slugify';

const BlogPost = ({ title, url, desc, pubDate }) => {
  const { datetime, displayDate } = formatDate(pubDate);

  return (
    <li>
      <a
        href={url}
        className="flex flex-col gap-2.5 rounded-xl p-6 sm:px-5 transition bg-zinc-200/20 dark:bg-zinc-800/40 hover:scale-100 sm:hover:scale-[1.02]"
      >
        <h2
          style={{ viewTransitionName: slugify(title) }}
          className="text-green-500 font-medium text-xl"
        >
          {title}
        </h2>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            ></path>
          </svg>
          <time
            className="text-zinc-600 dark:text-zinc-400 font-light"
            dateTime={datetime}
          >
            {displayDate}
          </time>
        </div>
        <p className="text-zinc-700 dark:text-zinc-300">{desc}</p>
      </a>
    </li>
  );
};

export default BlogPost;

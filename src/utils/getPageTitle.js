import { APP_NAME } from '@config/constant';

const getPageTitle = (title) => {
  return `${title} | ${APP_NAME}`;
};

export default getPageTitle;

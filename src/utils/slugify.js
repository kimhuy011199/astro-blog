import { slug as slugger } from 'github-slugger';

const slugify = (str) => {
  return slugger(str);
};

export default slugify;

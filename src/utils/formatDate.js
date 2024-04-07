const formatDate = (pubDate) => {
  const datetime = new Date(pubDate).toISOString();

  const dateObj = new Date(datetime);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const displayDate = dateObj.toLocaleDateString('en-US', options);

  return { datetime, displayDate };
};

export default formatDate;

const generateToc = (headings) => {
  const toc = [];
  const parentHeadings = new Map();

  headings.forEach((h) => {
    const heading = { ...h, subheadings: [] };
    parentHeadings.set(heading.depth, heading);

    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      parentHeadings.get(heading.depth - 1).subheadings.push(heading);
    }
  });

  return toc;
};

export default generateToc;

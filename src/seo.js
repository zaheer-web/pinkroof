export const updateSEO = ({
  title,
  description,
  keywords,
}) => {

  document.title = title;

  const descTag = document.querySelector(
    'meta[name="description"]'
  );

  if (descTag) {
    descTag.setAttribute("content", description);
  }

  const keywordTag = document.querySelector(
    'meta[name="keywords"]'
  );

  if (keywordTag) {
    keywordTag.setAttribute("content", keywords);
  }
};
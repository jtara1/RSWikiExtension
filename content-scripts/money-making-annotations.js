const matchingPathEnds = [
  'Money_making_guide',
  'Money_making_guide/Collecting',
  'Money_making_guide/Combat',
  'Money_making_guide/Processing',
  'Money_making_guide/Skilling',
  'Money_making_guide/Recurring'
];

if (matchingPathEnds.some(path => pageUrl.pathname.endsWith(path))) annotate();

function annotate() {
  const imageTags = document.querySelectorAll('img');

  for (const imageTag of imageTags) {
    const imageAltText = imageTag.getAttribute('alt');

    if (imageAltText) {
      if (imageTag.parentElement.parentElement) {
        imageTag.parentElement.parentElement.innerHTML += ` (${imageAltText})`;
      }
    }
  }
}

const dataStr =
  'data:text/json;charset=utf-8,' +
  encodeURIComponent(JSON.stringify(revisionHistory));

const downloadAnchorNode = document.createElement('a');
if (downloadAnchorNode) {
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', 'data' + '.json');
  // required for firefox
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

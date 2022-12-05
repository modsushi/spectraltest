
const formatAsTree = (input) => {
  const idMap = {};
  const tree = [];
  input.forEach((asset) => {
    asset.show = true;
    idMap[asset.id] = asset;
    if (asset.parentId === null) {
      tree.push(asset);
    }
  });

  input.forEach((asset) => {
    if (asset.parentId !== null) {
      idMap[asset.parentId].children = idMap[asset.parentId].children || [];
      idMap[asset.parentId].children.push(asset);
    }
  });

  return tree;
}

const searchInTree = (node, assetId) => {
  if (node.id == assetId)
    return node;

  if (node.children) {
    let found = null;
    for (let i = 0; found === null && i < node.children.length; i++) {
      found = searchInTree(node.children[i], assetId)
    }
    return found;
  }
  else {
    return null;
  }
}

const getChildIds = (node,output=[]) => {
  if (node.id)
    output.push(node.id)
  if (node.children)
    node.children.forEach( (child) => {
      getChildIds(child, output)
    })
  return output
}

export { formatAsTree, searchInTree, getChildIds };
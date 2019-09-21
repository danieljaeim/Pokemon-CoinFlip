function choice(items) {
  let randomIdx = Math.floor(Math.random() * items.length)
  return [items[randomIdx], randomIdx];
}

function remove(items, item) {
  if (items.indexOf(item) > -1) {
    return items.splice(items.indexOf(item), 1);
  }
  return undefined;
}

export { choice, remove };
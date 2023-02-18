function isEmpty(obj) {
  for (const item in obj) {
    return false;
  }
  return true;
}

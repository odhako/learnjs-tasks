async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return await response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson('no-such-user.json')
  .then(console.log)
  .catch(console.log);

loadJson('https://dummyjson.com/test')
.then(console.log)
.catch(console.log);

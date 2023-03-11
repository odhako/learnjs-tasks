class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  }
  throw new HttpError(response);
}

async function demoGithubUser() {
  try {
    const name = prompt("Введите логин?", "iliakan");
    const userJSON = await loadJson(`https://api.github.com/users/${name}`);
    const userName = userJSON.name;
    await alert(`Полное имя: ${userName}.`);
    return userName;
  } catch (e) {
    if (e instanceof HttpError && e.response.status == 404) {
      alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      return demoGithubUser();
    } else {
      throw e;
    }
  }

}

demoGithubUser();

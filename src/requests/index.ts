export function searchUser(user: string){
  return fetch(`https://api.github.com/users/${user}`);
}

export function searchRepos(user: string){
  return fetch(`https://api.github.com/users/${user}/repos?sort=crated&per_page=5`);
}
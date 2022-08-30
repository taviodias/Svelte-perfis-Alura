import type IUsuario from '../interfaces/IUsuario';
import type IRepos from '../interfaces/IRepos';

export function mountUser(dataUser: any, dataRepos: any): IUsuario{

  const last_repos = dataRepos.map((repo) => {
    return {
      name: repo.name,
      url: repo.html_url
    } as IRepos;
  });

  return {
    login: dataUser.login,
    name: dataUser.name,
    avatar_url: dataUser.avatar_url,
    html_url: dataUser.html_url,
    followers: dataUser.followers,
    public_repos: dataUser.public_repos,
    last_repos: last_repos
  }
}
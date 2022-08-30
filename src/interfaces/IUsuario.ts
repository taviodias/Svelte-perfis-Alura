import type IRepos from './IRepos';

export default interface IUsuario {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  public_repos: number;
  last_repos: IRepos[];
}

interface IEnv {
  production: boolean;
  apiUrl: string;
}

export const environment: IEnv = {
  production: true,
  apiUrl: 'https://api.chucknorris.io/jokes'
};

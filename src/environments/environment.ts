interface IEnv {
  production: boolean;
  apiUrl: string;
}

export const environment: IEnv = {
  production: false,
  apiUrl: 'https://api.chucknorris.io/jokes'
};

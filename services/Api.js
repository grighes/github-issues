import axios from 'axios';

let baseDomainType = 'https://api.github.com/';

export default () => {
  return axios.create({
    baseURL: baseDomainType
  });
};

import Api from '../services/Api';

const fetchData = param => Api().get(`search/repositories?q=${param}`);
const fetchIssues = full_name => Api().get(`repos/${full_name}/issues`);

export { fetchData, fetchIssues };

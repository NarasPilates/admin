import axios from 'axios';

export default axios.create({
  baseURL: `http://naraspilates.ddns.net/api/`
});
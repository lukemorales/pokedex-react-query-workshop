import axios from 'axios';

import { POKEAPI_URL } from '../constants';

export default axios.create({
  baseURL: POKEAPI_URL.split('?')[0],
});

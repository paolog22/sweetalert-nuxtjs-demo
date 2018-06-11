/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import axios from 'axios';

export default function ( { app, redirect }, inject ) {
  axios.defaults.baseURL = process.env.API_LOCATION;
  axios.defaults.headers.common.Accept = 'application/json';
  axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if(!error.response) {
        console.log('Network Error', Promise);
      }else {
        if (error.response.status === 401) {
          redirect('/');
        }
      }

      return Promise.reject(error);
    });

  inject('http', axios);
}

/**
 * @module instabug-websdk/xhr
 */

import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*/*';

/**
 * executeXHR - execute the XHR request
 *
 * @param  {object} options request options
 */
const executeXHR = async body => {
  const data = await axios.post(
    `https://react-board-api-dev.herokuapp.com/api/v1/reports`, {
      params: {
        title: 'テストタイトル from sdk'
      }
    }
  )
  return data
}

export default {
  executeXHR
};

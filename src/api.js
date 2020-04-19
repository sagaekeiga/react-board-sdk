import axios from 'axios'

/**
 * 報告リクエストを送る
 *
 * @param  {object} body 報告用オブジェクト
 */
const createReport = async params => {
  const data = await axios.post(
    `https://react-board-api-dev.herokuapp.com/api/v1/reports`, {
      params: params.body
    }
  )
  return data
}

export default {
  createReport
};

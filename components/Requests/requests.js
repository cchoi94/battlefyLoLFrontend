import axios from './axiosInstance'

export const getSummonerMatchList = (summonerName) => {
  return axios.get(`/summoner/${summonerName}`).then(response => {
    return response.data
  }, error => {
    throw error
  })
}

export const getChampionInfo = (championId) => {
  return axios.get(`/champion/${championId}`).then(response => {
    return response.data
  }, error => {
    throw error
  })
}
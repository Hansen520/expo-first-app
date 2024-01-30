/*
 * @Date: 2023-11-27 16:28:57
 * @Description: description
 */
import val from './json';

const key1 = '6d7ee8d88bd4fb137f5d20ce7066a700'; // 新闻的
const weatherKey = '105fd0f356134f7088167120c94b5955'; // 天气
export const getNewsList = ({ type }: { type: string }) => {
return fetch(`https://v.juhe.cn/toutiao/index?key=${key1}&type=${type}`)
    .then((response) => response.json())
    .then((data) => data.result.data).catch(() => []);
};

export const getCityInfo = async (coords: any) => {
  const url = `https://geoapi.qweather.com/v2/city/lookup?location=${coords.longitude},${coords.latitude}&key=${weatherKey}`
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.location[0];
    }).catch(() => []);
}

export const getThreeDays = async (coords: any) => { 

  const url = `https://devapi.qweather.com/v7/weather/7d?location=${coords.longitude},${coords.latitude}&key=${weatherKey}`
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.daily).catch(() => []);
}
// 生活指数
export const getDices = async (coords: any) => {

  const url = `https://devapi.qweather.com/v7/indices/1d?type=0&location=${coords.longitude},${coords.latitude}&key=${weatherKey}`
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.daily
    }).catch(() => []);
}
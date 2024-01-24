/*
 * @Date: 2023-11-27 16:28:57
 * @Description: description
 */
const key = '6d7ee8d88bd4fb137f5d20ce7066a700';
const key1 = '6d7ee8d88bd4fb137f5d20ce7066a701'; // 假的
export const getNewsList = ({ type }: { type: string }) => {
  return fetch(`https://v.juhe.cn//toutiao/index?key=${key1}&type=${type}`)
    .then((response) => response.json())
    .then((data) => data.result.data).catch(() => []);
};

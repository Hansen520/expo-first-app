/*
 * @Date: 2023-11-27 16:28:57
 * @Description: description
 */
export const getNewsList = ({ type }: { type: string }) => {
  return fetch("http://v.juhe.cn//toutiao/index?key=6d7ee8d88bd4fb137f5d20ce7066a700&type=" + type)
    .then((response) => response.json())
    .then((data) => data.result.data);
};

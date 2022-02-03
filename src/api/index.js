import axios from 'axios';

const url = 'https://sparkling-moment.herokuapp.com/posts';

// export const fetchPosts = ()=> axios.get(url);
export const fetchPosts = () => axios({
  method: 'get',
  url: url,
  responseType: 'stream'
})

export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
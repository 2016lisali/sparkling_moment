import { combineReducers } from 'redux';
import posts from './posts'
import auth from './auth'

export default combineReducers({ posts, auth })
// * in an object, if the key and the value are same, can only keep one.
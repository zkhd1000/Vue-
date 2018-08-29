import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS
} from './mutation-types';

import { 
    reqAddress,
    reqCategorys,
    reqShops
 } from "../Api";

 export default {
    async getAddress ({commit,state}){
         const {latitude, longitude} = state
         const geohash =`${latitude},${longitude}`
         const result = await reqAddress(geohash)
         console.log(result);
         
         const address= result.data
         commit(RECEIVE_ADDRESS,{address})
     },
     async getCategorys({commit}){
         const result = await reqCategorys()
         const categorys =result.data
         commit(RECEIVE_CATEGORYS,{categorys})
     },
     async getShops ({commit,state}){
         const {latitude, longitude} = state
         const result = await reqShops(latitude, longitude)
         const shops =result.data
         commit(RECEIVE_SHOPS,{shops})
     }
 }
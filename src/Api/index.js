import ajax from './ajax';

const BASE='/api'


export const reqAddress= (geohash) =>ajax(`${BASE}/position/${geohash}`)

export const reqCategorys = () =>ajax(BASE+'/index_category')

export const reqShops = (longitude, latitude) => ajax(BASE+'/shops',{longitude, latitude})
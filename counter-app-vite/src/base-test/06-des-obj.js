/* eslint-disable no-unused-vars */
const usContext = ({password, name ,age, rank = 'Captain'}) =>{
    return {
        codeName: password,
        age: age,
        latLng:{
            lat: 14.233,
            lon: 12.567
        }
    }
}
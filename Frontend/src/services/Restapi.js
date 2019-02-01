import Vue from 'vue'
export default {
  
  PricesData (callback) {
   // return new Promise((resolve, reject) => {
      Vue.axios({
        method: 'GET',
        url: 'http://localhost:3000/api/prices',
        headers: {
          'Content-Type': 'application/json'
        }
      })

        .then(function (response) {
         console.log(response)
          callback (response)
        })
        .catch((error) => {
          console.log(error)
          // reject(error)
        })
    //})
  },
  
}

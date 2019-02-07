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
        })
  },
  RebarData(){
    return new Promise((resolve, reject) => {
    Vue.axios({
    method: 'POST',
    url: 'http://137.116.113.220:7002',
    headers: {
      'Content-Type': 'application/json'
    },
    data:{
      'query': 'rebar'
      }
    })
    .then(function (response) {
    console.log(response)
    resolve(response)
    })
    .catch((error) => {
    console.log(error)
    reject(error)
    })
    }) 
    },

    commonData(){
      return new Promise((resolve, reject) => {
      Vue.axios({
      method: 'POST',
      url: 'http://137.116.113.220:7002',
      headers: {
        'Content-Type': 'application/json'
      },
      data:{
        'query': 'common carbon round steel'
        }
      })
      .then(function (response) {
      console.log(response)
      resolve(response)
      })
      .catch((error) => {
      console.log(error)
      reject(error)
      })
      }) 
      },

      carbonData(){
        return new Promise((resolve, reject) => {
        Vue.axios({
        method: 'POST',
        url: 'http://137.116.113.220:7002',
        headers: {
          'Content-Type': 'application/json'
        },
        data:{
          'query': 'carbon structural steel'
          }
        })
        .then(function (response) {
        console.log(response)
        resolve(response)
        })
        .catch((error) => {
        console.log(error)
        reject(error)
        })
        }) 
        },

        wireData(){
          return new Promise((resolve, reject) => {
          Vue.axios({
          method: 'POST',
          url: 'http://137.116.113.220:7002',
          headers: {
            'Content-Type': 'application/json'
          },
          data:{
            'query': 'wire rod'
            }
          })
          .then(function (response) {
          console.log(response)
          resolve(response)
          })
          .catch((error) => {
          console.log(error)
          reject(error)
          })
          }) 
          },

          RoundData(){
            return new Promise((resolve, reject) => {
            Vue.axios({
            method: 'POST',
            url: 'http://137.116.113.220:7002',
            headers: {
              'Content-Type': 'application/json'
            },
            data:{
              'query': 'round bearing steel'
              }
            })
            .then(function (response) {
            console.log(response)
            resolve(response)
            })
            .catch((error) => {
            console.log(error)
            reject(error)
            })
            }) 
            },

              coldData(){
              return new Promise((resolve, reject) => {
              Vue.axios({
              method: 'POST',
              url: 'http://137.116.113.220:7002',
              headers: {
                'Content-Type': 'application/json'
              },
              data:{
                'query': 'cold steel'
                }
              })
              .then(function (response) {
              console.log(response)
              resolve(response)
              })
              .catch((error) => {
              console.log(error)
              reject(error)
              })
              }) 
              },

              colorData(){
                return new Promise((resolve, reject) => {
                Vue.axios({
                method: 'POST',
                url: 'http://137.116.113.220:7002',
                headers: {
                  'Content-Type': 'application/json'
                },
                data:{
                  'query': 'color-coated steel'
                  }
                })
                .then(function (response) {
                console.log(response)
                resolve(response)
                })
                .catch((error) => {
                console.log(error)
                reject(error)
                })
                }) 
                },

                galvanishedData(){
                  return new Promise((resolve, reject) => {
                  Vue.axios({
                  method: 'POST',
                  url: 'http://137.116.113.220:7002',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  data:{
                    'query': 'galvanished'
                    }
                  })
                  .then(function (response) {
                  console.log(response)
                  resolve(response)
                  })
                  .catch((error) => {
                  console.log(error)
                  reject(error)
                  })
                  }) 
                  },

                  HRCData(){
                    return new Promise((resolve, reject) => {
                    Vue.axios({
                    method: 'POST',
                    url: 'http://137.116.113.220:7002',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    data:{
                      'query': 'HRC'
                      }
                    })
                    .then(function (response) {
                    console.log(response)
                    resolve(response)
                    })
                    .catch((error) => {
                    console.log(error)
                    reject(error)
                    })
                    }) 
                    },
}



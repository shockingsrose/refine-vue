function getInfoList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{
        name: 'zhao',
        age: 16
      }, {
        name: 'qian',
        age: 15
      }, {
        name: 'sun',
        age: 25
      }, {
        name: 'li',
        age: 18
      }, {
        name: 'zhou',
        age: 11
      }])
    }, 2000);
  })
}

function getPicList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{
        picUrl: 'www.baidu.com',
      }, {
        picUrl: 'www.baidu.com',
      }, {
        picUrl: 'www.baidu.com',
      }, {
        picUrl: 'www.baidu.com',
      }, {
        picUrl: 'www.baidu.com',
      }, {
        picUrl: 'www.baidu.com',
      }, ])
    }, 100);
  })
}

function getUrl(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`www.storm.com?url=${query}`)
    }, Math.random() * 1500);
  })
}


export default {
  getInfoList,
  getPicList,
  getUrl
}

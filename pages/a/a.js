// pages/a/a.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [      
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    nav:[
      {
        imgs:'img',
        imgUrls: '../../images/pocky饼干.png',
        navList: 'cookie'
      },
      {
        imgs: 'img img2',
        imgUrls: '../../images/牛奶.png',
        navList: 'milk'
      },
      {
        imgs: 'img img3',
        imgUrls: '../../images/饼干.png',
        navList: 'cookieTwo'
      },
      {
        imgs: 'img img4',
        imgUrls: '../../images/牛奶_1.png',
        navList: 'milkTwo'
      }
    ],
    msgItem:{
      img: '../../images/cs.png',
    },
    msgItem2: {
      img: '../../images/cs.png',
    }
  },

  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },

  showDialog() {
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})
// 核心导航数据
let list = [
  {
    "index": 0,
    "title": "编程开发",
    "icon": "",
    "desc": "",
    "selectSubIndex": 2,
    "list": [
      {
        "index": 0,
        "title": "综合网站",
        "icon": "",
        "desc": "综合类型编程学习网站",
        "list": [
          {
            "title": "MDN 官网",
            "icon": "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
            "url": "https://developer.mozilla.org/zh-CN/",
            "desc": "前端标准学习网站"
          },
          {
            "title": "W3School",
            "icon": "https://www.w3school.com.cn/ui2019/logo-180.png",
            "url": "https://www.w3school.com.cn/",
            "desc": "W3School 是因特网上最大的 WEB 开发者资源，其中包括全面的教程、完善的参考手册以及庞大的代码库"
          },
          {
            "title": "菜鸟教程",
            "icon": "https://img2.baidu.com/it/u=641446360,3821858044&fm=253",
            "url": "https://www.runoob.com/",
            "desc": "菜鸟教程提供了全平台、全语言的基础编程技术教程"
          },
          {
            "title": "廖雪峰官网",
            "icon": "https://img1.baidu.com/it/u=3083471091,3280805397&fm=253&fmt=auto&app=138&f=JPEG?w=20&h=20",
            "url": "https://www.liaoxuefeng.com/",
            "desc": "菜鸟教程提供了全平台、全语言的基础编程技术教程"
          },
          {
            "title": "小呆导航",
            "icon": "https://webjike.com/favicon.png",
            "url": "https://webjike.com/web.html/",
            "desc": "前端学习网站导航"
          }
        ]
      },
      {
        "index": 1,
        "title": "博客论坛",
        "icon": "",
        "desc": "知名编程开发的博客论坛",
        "list": [
          {
            "title": "掘金",
            "icon": "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png",
            "url": "https://juejin.cn/",
            "desc": "掘金是面向全球中文开发者的技术内容分享与交流平台"
          },
          {
            "title": "博客园",
            "icon": "https://img2.baidu.com/it/u=468013898,4135718053&fm=253&fmt=auto",
            "url": "https://www.cnblogs.com/",
            "desc": "客园是一个面向开发者的知识分享社区"
          }
        ]
      },
      {
        "index": 2,
        "title": "大前端",
        "icon": "",
        "desc": "大前端技术栈，包含iOS、Android、HarmonyOS（鸿蒙）、前端、小程序、Electron、Flutter、Uni-app等技术栈",
        "list": [
          {
            "title": "HarmonyOS 鸿蒙",
            "icon": "https://developer.huawei.com/dev_index/favicon.ico",
            "url": "https://developer.huawei.com/consumer/cn/app/",
            "desc": "HarmonyOS（鸿蒙）开发者官网"
          },
          {
            "title": "",
            "icon": "",
            "url": "",
            "desc": ""
          },
          {
            "title": "",
            "icon": "",
            "url": "",
            "desc": ""
          },
          {
            "title": "",
            "icon": "",
            "url": "",
            "desc": ""
          },
          {
            "title": "",
            "icon": "",
            "url": "",
            "desc": ""
          },
          {
            "title": "Vue 官网",
            "icon": "https://cn.vuejs.org/logo.svg",
            "url": "https://cn.vuejs.org/",
            "desc": "Vue 中文官方网站"
          },
          {
            "title": "Vue Router 官网",
            "icon": "https://cn.vuejs.org/logo.svg",
            "url": "https://router.vuejs.org/zh/",
            "desc": "Vue 官方路由工具"
          },
          {
            "title": "Pinia 官网",
            "icon": "https://pinia.vuejs.org/logo.svg",
            "url": "https://pinia.vuejs.org/zh/",
            "desc": "Pinia 是 Vue 官方在 Vue3.x 版本下的状态管理工具"
          },
          {
            "title": "Vite 官网",
            "icon": "https://cn.vitejs.dev/logo.svg",
            "url": "https://cn.vitejs.dev/",
            "desc": "Vue 官方前端工具链，可用于工具化构建打包，对标 Webpack"
          },
          {
            "title": "Vue CLI 官网",
            "icon": "https://cn.vuejs.org/logo.svg",
            "url": "https://cli.vuejs.org/zh/",
            "desc": "Vue CLI 是 Vue 官方封装使用 Webpack 的构建打包工具"
          },
          {
            "title": "React 官网",
            "icon": "https://zh-hans.react.dev/favicon-32x32.png",
            "url": "https://zh-hans.react.dev/",
            "desc": "React 是用于构建 Web 和原生交互界面的库"
          },
          {
            "title": "Webpack 官网",
            "icon": "https://webpack.js.org/icon-square-small.9e8aff7a67a5dd20.svg",
            "url": "https://webpack.js.org/",
            "desc": "Webpack 是前端快速工具化构建打包工具"
          },
          {
            "title": "Element Plus 官网",
            "icon": "https://element-plus.org/images/element-plus-logo-small.svg",
            "url": "https://element-plus.org/zh-CN/",
            "desc": "Element Plus 是一个 Vue 3 UI 框架"
          },
          {
            "title": "Element UI 官网",
            "icon": "https://element.eleme.io/favicon.ico",
            "url": "https://element.eleme.io/#/zh-CN",
            "desc": "Element UI 一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库"
          },
          {
            "title": "Vant 官网",
            "icon": "https://img.yzcdn.cn/zanui/vant/vant-2017-12-18.ico",
            "url": "http://mui.ucmed.cn/",
            "desc": "Vant 是轻量、可靠的移动端 Vue 组件库"
          },
          {
            "title": "Electron 官网",
            "icon": "https://www.electronjs.org/assets/img/logo.svg",
            "url": "https://www.electronjs.org/",
            "desc": "Electron 是当下最流行的跨平台开发技术，支持 Windows、Mac、Linux 平台"
          },
          {
            "title": "Electron-Vite 官网",
            "icon": "https://electron-vite.org/favicon.svg",
            "url": "https://electron-vite.org/",
            "desc": "Electron-Vite 是通过 Electron + Vite 的开发方式进行跨平台开发"
          },
          {
            "title": "Flutter 官网",
            "icon": "https://storage.googleapis.com/cms-storage-bucket/4fd0db61df0567c0f352.png",
            "url": "https://flutter.dev/",
            "desc": "Flutter 是当下十分流行的跨平台开发，支持iOS、Android、Windows、Mac、Linux、嵌入式，当下 HarmonyOS（鸿蒙）也在接入之中"
          },
          {
            "title": "Flutter 中文官网",
            "icon": "https://docs.flutter.cn/assets/images/cn/flutter-icon.png",
            "url": "https://flutter.cn/",
            "desc": "Flutter 官方推荐的中文官网，Flutter 是当下十分流行的跨平台开发，支持iOS、Android、Windows、Mac、Linux、嵌入式，当下 HarmonyOS（鸿蒙）也在接入之中"
          },
          {
            "title": "Tauri 官网",
            "icon": "https://tauri.app/meta/favicon-32x32.png",
            "url": "https://tauri.app/",
            "desc": "Tauri 是一个可用于为所有主要桌面平台构建微小的、极速的二进制文件的框架，开发人员使用任何可编译为前端代码的框架来构建他们的用户界面。"
          },
          {
            "title": "QT 官网",
            "icon": "https://www.qt.io/hubfs/QtGroup_Favicon_32.ico",
            "url": "https://www.qt.io/zh-cn/",
            "desc": "强大的 C++ 跨平台开发框架"
          },
          {
            "title": "React Native 中文网",
            "icon": "https://reactnative.cn/img/logo-og.png",
            "url": "https://reactnative.cn/",
            "desc": "React Native 是使用 React 来编写 iOS 和 Android 原生应用端的框架"
          },
          {
            "title": "微信开发官网文档",
            "icon": "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
            "url": "https://developers.weixin.qq.com/doc/",
            "desc": "微信开发官方文档，包含小程序、公众号、开放平台、微信支付、小游戏等开发文档"
          },
          {
            "title": "Uni-app 官网",
            "icon": "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png",
            "url": "https://www.dcloud.io/",
            "desc": "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台"
          },
          {
            "title": "Taro 官网",
            "icon": "https://storage.360buyimg.com/pubfree-bucket/taro-docs/f1fdc1a4a18/img/logo-taro.png",
            "url": "https://taro.zone/",
            "desc": "Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用"
          }
        ]
      }
    ]
  },
  {
    "index": 1,
    "title": "编程工具",
    "icon": "",
    "desc": "",
    "selectSubIndex": 1,
    "list": [
      {
        "index": 0,
        "title": "综合工具导航",
        "icon": "",
        "desc": "程序猿日常开发中最常用的快捷工具聚合类导航",
        "list": [
          {
            "title": "菜鸟工具",
            "icon": "https://img1.baidu.com/it/u=3083471091,3280805397&fm=253&fmt=auto&app=138&f=JPEG?w=20&h=20",
            "url": "https://www.jyshare.com/",
            "desc": "菜鸟教程官方下的程序员工具"
          },
          {
            "title": "子级导航2",
            "icon": "https://img1.baidu.com/it/u=3083471091,3280805397&fm=253&fmt=auto&app=138&f=JPEG?w=20&h=20",
            "url": "https://www.baidu.com/",
            "desc": "百度一下"
          }
        ]
      },
      {
        "index": 1,
        "title": "常用工具",
        "icon": "",
        "desc": "程序猿日常开发中最常用的快捷工具",
        "list": [
          {
            "title": "Json.cn",
            "icon": "https://static.json.cn/r/img/favicon/favicon.ico",
            "url": "https://www.json.cn/",
            "desc": "常用的 JSON 格式化、序列化、反序列化、压缩等功能"
          },
          {
            "title": "子级导航2",
            "icon": "https://www.baidu.com/favicon.ico",
            "url": "https://www.baidu.com/",
            "desc": "百度一下"
          }
        ]
      }
    ]
  },
  {
    "index": 2,
    "title": "生活办公",
    "icon": "",
    "desc": "",
    "selectSubIndex": 1,
    "list": [
      {
        "index": 0,
        "title": "查询工具",
        "icon": "",
        "desc": "日常生活中使用到的在线查询工具",
        "list": [
          {
            "title": "我就差查询",
            "icon": "http://wjccx.com/favicon.ico",
            "url": "http://wjccx.com/",
            "desc": "我就查查询提供实用工具在线查询，免费在线工具包括生活服务、金融理财、教育学习、数学计算和站长查询等实用工具，是较受欢迎的在线实用查询工具网站。"
          }
        ]
      },
      {
        "index": 1,
        "title": "日常办公",
        "icon": "",
        "desc": "日常办公使用到的在线快捷工具",
        "list": [
          {
            "title": "七七工具箱",
            "icon": "https://www.tool77.com/media/image/favicon.ico",
            "url": "https://www.tool77.com/",
            "desc": "七七工具箱是聚合类在线办公快捷工具合集，支持文件转换、图片转换"
          },
          {
            "title": "改图鸭",
            "icon": "https://www.gaituya.com/favicon.ico",
            "url": "https://www.gaituya.com/",
            "desc": "改图鸭支持在线图片压缩、图片编辑、图片格式转换的工具"
          },
          {
            "title": "Smallpdf",
            "icon": "https://smallpdf.com/favicon.png",
            "url": "https://smallpdf.com/cn/",
            "desc": "轻松转换和编辑所有 PDF 文件的平台"
          }
        ]
      }
    ]
  },
  {
    "index": 3,
    "title": "苜蓿导航4",
    "icon": "",
    "desc": "",
    "selectSubIndex": 0,
    "list": [
      {
        "index": 0,
        "title": "导航1",
        "icon": "https://www.baidu.com/favicon.ico",
        "desc": "百度一下",
        "list": [
          {
            "title": "子级导航1",
            "icon": "https://www.baidu.com/favicon.ico",
            "url": "https://www.baidu.com/",
            "desc": "百度一下"
          },
          {
            "title": "子级导航2",
            "icon": "https://www.baidu.com/favicon.ico",
            "url": "https://www.baidu.com/",
            "desc": "百度一下"
          }
        ]
      },
      {
        "index": 1,
        "title": "导航2",
        "icon": "https://www.baidu.com/favicon.ico",
        "desc": "百度一下",
        "list": [
          {
            "title": "子级导航1",
            "icon": "https://www.baidu.com/favicon.ico",
            "url": "https://www.baidu.com/",
            "desc": "百度一下"
          },
          {
            "title": "子级导航2",
            "icon": "https://www.baidu.com/favicon.ico",
            "url": "https://www.baidu.com/",
            "desc": "百度一下"
          }
        ]
      }
    ]
  }
]
let selectIndex = 0


// // 通过接口获取导航数据
// fetch('./navigation.json')
//   .then(res => res.json())
//   .then(data => {
//     console.log('获取导航数据成功 --- ', data)
//     this.list = data
//     this.createHTMLElementUI()
//   })
//   .catch(err => {
//     console.log('获取导航数据失败 --- ', err)
//   })
createHTMLElementUI()

// 创建标签
function createHTMLElementUI() {
  $.each(list, (index, item) => {
    // 左侧导航
    let $leftItem = $(`<div class="left-navi-item hover-bg${selectIndex === index ? ' active' : ''}">${item.title}</div>`)
    $leftItem.on('click', (event) => {
      event.preventDefault()
      clickLeftNaviItem(index, true)
    })
    $('.left-navi').append($leftItem)

    // 右侧导航单个大类内容
    let $rightContentItem = $(`<div id="left_navi_${index}" class="right-content-item${selectIndex === index ? ' active': ''}"></div>`)
    // 右侧导航单个大类顶部导航
    let $subNaviWrapper = $(`<div class="subNavi-wrapper"></div>`)
    // 右侧导航单个大类底部链接区域
    let $linksWrapper = $(`<div class="links-wrapper"></div>`)

    $.each(item.list, (subIndex, subItem) => {
      let $subNaviItem = $(`<span class="subNavi-item hover-bg${item.selectSubIndex === subIndex ? ' active' : ''}" title="${subItem.desc}">${subItem.title}</span>`)
      $subNaviItem.on('click', (event) => {
        event.preventDefault()
        clickSubNaviItem(index, subIndex)
      })
      $subNaviWrapper.append($subNaviItem)

      let $linksContentWrapper = $(`<div class="links-content-wrapper${item.selectSubIndex === subIndex ? ' show' : ''}"></div>`)
      // 创建右侧导航单个大类底部链接区域
      $.each(subItem.list, (linkIndex, link) => {
        let $linkItem = $(`<a class="link-item hover-bg${!link.url.length ? ' hide' : ''}" href="${link.url}" title="${link.url}\n\n${link.desc}" target="_blank"></a>`)
        let $linkItemIcon = $(`<img class="link-item-icon" src="${link.icon}" />`)
        let $linkItemTitle = $(`<span class="link-item-title">${link.title}</span>`)
        $linkItem.append($linkItemIcon)
        $linkItem.append($linkItemTitle)
        $linksContentWrapper.append($linkItem)
        $linksWrapper.append($linksContentWrapper)
      })
    })

    $rightContentItem.append($subNaviWrapper)
    $rightContentItem.append($linksWrapper)
    $('.right-content').append($rightContentItem)
  })
}

// 滚动到顶部
function clickGoTop() {
  $("body,html").animate({
    scrollTop: 0
  }, 300)
}

// 滚动到指定位置
function clickLeftNaviItem(index, isScroll) {
  if (selectIndex === index) return
  // 更换选中对象
  selectIndex = index
  let $navItems = $('.left-navi-item')
  $navItems.filter('.active').removeClass('active')
  $navItems.eq(index).addClass('active')
  // 更改右侧单个分类的选中状态
  let $rightContentItem = $('.right-content-item')
  $rightContentItem.filter('.active').removeClass('active')
  $rightContentItem.eq(index).addClass('active')
  // 开始滚动
  if (isScroll) {
    // 滚动到指定位置
    $('html, body').animate({
      scrollTop: $(`#left_navi_${index}`).offset().top
    }, 300)
  }
}

// 点击右侧每个分类的子级导航
function clickSubNaviItem(index, subIndex) {
  if (selectIndex === index && list[index].selectSubIndex === subIndex) return
  clickLeftNaviItem(index, false)
  list[index].selectSubIndex = subIndex
  // 右侧子级容器
  let $rightContentItem = $('.right-content-item').eq(index)
  // 更新子级导航选中
  let $subNaviItems = $rightContentItem.find('.subNavi-item')
  $subNaviItems.filter('.active').removeClass('active')
  $subNaviItems.eq(subIndex).addClass('active')
  // 更新链接页面
  let $linksContentWrapper = $rightContentItem.find('.links-content-wrapper')
  $linksContentWrapper.filter('.show').removeClass('show')
  $linksContentWrapper.eq(subIndex).addClass('show')
}

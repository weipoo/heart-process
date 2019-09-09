# 微信小程序心形进度条实现

### 1. 目录结构
```
project-name
├── images
│   ├── index               // 图片资源目录
├── pages
│   ├── index               // demo演示页面
├── app.js                  
├── app.json
├── app.wxss   
└── project.config.json     // 小程序配置文件 


```

### 2. 设计思路：

1. 进度条完成进度的数值确定（1～100）；
2. 进度条页面和样式布局；
3. 处理通用函数，通过调用function并且传递具体百分比数值参数即可实现进度条渲染。

### 3.核心代码示例：
wxml：

``` 
<view class="progress">
    <view class="progress__bg"></view>
     <view class="progress__line" style="width: {{lineValue}}px;"></view>
    <view class="block__bg" style="left:{{blockValue}}px;">
    <image class="block__img" src='{{blockSrc}}'></image>
</view>
</view>
```
js:

```
setProcessWith(data) {
    let sliderValue = parseInt(data);
    wx.createSelectorQuery().select(`.progress__bg`).boundingClientRect(res => {
      console.log(res);
      this.setData({
        lineValue: res ? res.width * (sliderValue / 100) : 0,
        // 减9px == 减去心形图片一半像素
        blockValue: res ? res.width * (sliderValue / 100) - 9 : 0 
      });
    }).exec();
  },
```

### 4. 效果图：
![](https://github.com/weipoo/heart-process/blob/master/process_2019_09_09.png)
### 5. gitHub仓库地址：
[心形进度条实现](https://github.com/weipoo/add-tips)
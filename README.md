# [dispose aliyun oss url](https://help.aliyun.com/document_detail/183902.html?spm=a2c4g.11174283.6.731.2e5a7da2XS98Z9)

1. install

```shell
yarn add oss-src
// or
npm install oss-src
```

2. use

```js
import OssSrc from 'oss-src';
// change image type
const newUrl = new OssSrc('https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg').format('webp').getUrl();
```

![to-webp](https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/format,webp)

```js
// add watermark
const newUrl = new OssSrc('https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg')
.watermarkLocation(100, 'center', 1, 1, 1)
.watermarkText('我们')
.getUrl(),
```

![to-webp](https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/watermark,t_100,g_center,x_1,y_1,voffset_1,text_5oiR5Lus,type_d3F5LXplbmhlaQ)

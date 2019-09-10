# 搜狗
搜狗的反爬非常严格，请求间隔要设置久一点，`建议不低于 5 秒`。抓取到的链接均为搜狗的中转链接，并非实际链接，若被反爬程序识别，大几率会重定向到验证页。

## 搜文章
```json
{"_id":"sogou_weixin_article_search","startUrl":["https://weixin.sogou.com/weixin?type=2&ie=utf8&query=sogou"],"selectors":[{"id":"item","type":"SelectorElement","parentSelectors":["_root","pagination"],"selector":".news-list li","multiple":true,"delay":0},{"id":"title","type":"SelectorLink","parentSelectors":["item"],"selector":"h3>a","multiple":false,"delay":0},{"id":"summary","type":"SelectorText","parentSelectors":["item"],"selector":"p","multiple":false,"regex":"","delay":0},{"id":"account","type":"SelectorLink","parentSelectors":["item"],"selector":"a.account","multiple":false,"delay":0},{"id":"pagination","type":"SelectorLink","parentSelectors":["_root","pagination"],"selector":".p-fy a","multiple":true,"delay":0}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
    - 支持默认搜索和高级搜索，高级搜索支持限定时间范围、限定为图集或包含视频、限定公众号 3 种条件，可叠加。
- 示例页面
    - [默认搜索](https://weixin.sogou.com/weixin?type=2&ie=utf8&query=sogou)
:::

|字段|说明|
|:-:|:-|
|title|文章标题|
|title-href|文章链接|
|summary|文章概要|
|account|账号|
|account-href|账号链接|

## 搜公众号
```json
{"_id":"sogou_weixin_account_search","startUrl":["https://weixin.sogou.com/weixin?query=sogou&_sug_type_=&s_from=input&_sug_=y&type=1&page=1&ie=utf8"],"selectors":[{"id":"item","type":"SelectorElement","parentSelectors":["_root","pagination"],"selector":".news-list2 li","multiple":true,"delay":0},{"id":"pagination","type":"SelectorLink","parentSelectors":["_root","pagination"],"selector":".p-fy a","multiple":true,"delay":0},{"id":"name","type":"SelectorText","parentSelectors":["item"],"selector":".tit","multiple":false,"regex":"","delay":0},{"id":"wx_id","type":"SelectorText","parentSelectors":["item"],"selector":"label","multiple":false,"regex":"","delay":0},{"id":"intro","type":"SelectorText","parentSelectors":["item"],"selector":"dt:contains('功能介绍：') + dd","multiple":false,"regex":"","delay":0},{"id":"verified","type":"SelectorText","parentSelectors":["item"],"selector":"dt:contains('\ndocument.write(authname(\\'2\\'))微信认证：') + dd","multiple":false,"regex":"","delay":0},{"id":"latest_article_title","type":"SelectorText","parentSelectors":["item"],"selector":"dd a","multiple":false,"regex":"","delay":0},{"id":"latest_article_link","type":"SelectorElementAttribute","parentSelectors":["item"],"selector":"dd a","multiple":false,"extractAttribute":"href","delay":0},{"id":"latest_article_publish_time","type":"SelectorText","parentSelectors":["item"],"selector":"dd span","multiple":false,"regex":"","delay":0}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 示例页面
    - [默认搜索](https://weixin.sogou.com/weixin?query=sogou&_sug_type_=&s_from=input&_sug_=y&type=1&page=1&ie=utf8)
:::

|字段|说明|
|:-:|:-|
|name|公众号名称|
|wx_id|公众号 id|
|intro|功能介绍|
|verified|微信认证|
|latest_article_title|最近文章标题|
|latest_article_link|最近文章链接（需自行补充前缀 *https://weixin.sogou.com*）|
|latest_article_publish_time|最近文章发布时间|
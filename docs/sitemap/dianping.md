# 大众点评
## 商户评论
```json
{"_id":"dianping_shop_review","startUrl":["http://www.dianping.com/shop/G5D5zTeSlgDNIanR/review_all/p[1-5]?queryType=sortType&&queryVal=latest"],"selectors":[{"id":"review","parentSelectors":["_root"],"type":"SelectorElementScroll","selector":"div.main-review","multiple":true,"delay":2000},{"id":"user_name","parentSelectors":["review"],"type":"SelectorText","selector":"a.name","multiple":false,"delay":0,"regex":""},{"id":"score","parentSelectors":["review"],"type":"SelectorElementAttribute","selector":"span.sml-rank-stars","multiple":false,"delay":0,"extractAttribute":"class"},{"id":"publish_time","parentSelectors":["review"],"type":"SelectorText","selector":"span.time","multiple":false,"delay":0,"regex":"\\d{4}-\\d{2}-\\d{2}"},{"id":"like_count","parentSelectors":["review"],"type":"SelectorText","selector":"em:nth-of-type(1)","multiple":false,"delay":0,"regex":"\\d+"},{"id":"reply_count","parentSelectors":["review"],"type":"SelectorText","selector":"em:nth-of-type(2)","multiple":false,"delay":0,"regex":"\\d+"},{"id":"reply_link","parentSelectors":["review"],"type":"SelectorElementAttribute","selector":"a.reply","multiple":false,"delay":0,"extractAttribute":"href"}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
    - 不抓取正文，因为部分文字被抽出来用 svg 显示的
    - 点击翻页无效，因此要手动在链接里设置页数范围
- 示例页面
    - [所有评价-按时间](http://www.dianping.com/shop/G5D5zTeSlgDNIanR/review_all?queryType=sortType&&queryVal=latest)
:::

|字段|说明|
|:-:|:-|
|user_name|用户名称|
|score|评分（是一个 class，str50 表示 5 星，依此类推）|
|publish_time|发布时间|
|like_count|点赞数|
|reply_count|回复数|
|reply_link|回复详情链接|
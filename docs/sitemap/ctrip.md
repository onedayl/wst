# 携程
## 景点评论
```json
{"_id":"ctrip_sight_comment","startUrl":["https://you.ctrip.com/sight/guangzhou152/107540.html"],"selectors":[{"clickElementSelector":"li.ant-pagination-item","clickElementUniquenessType":"uniqueText","clickType":"clickOnce","delay":2000,"discardInitialElements":"do-not-discard","id":"comment","multiple":true,"parentSelectors":["_root"],"selector":"div.commentItem","type":"SelectorElementClick"},{"delay":0,"id":"user_name","multiple":false,"parentSelectors":["comment"],"regex":"","selector":"div.userName","type":"SelectorText"},{"delay":0,"id":"score","multiple":false,"parentSelectors":["comment"],"regex":"\\d","selector":"span.averageScore","type":"SelectorText"},{"delay":0,"id":"content","multiple":false,"parentSelectors":["comment"],"regex":"","selector":"div.commentDetail","type":"SelectorText"},{"delay":0,"id":"publish_time","multiple":false,"parentSelectors":["comment"],"regex":"","selector":"div.commentTime","type":"SelectorText"},{"delay":0,"id":"like_count","multiple":false,"parentSelectors":["comment"],"regex":"\\d","selector":"span:nth-of-type(2)","type":"SelectorText"}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 示例页面
    - [所有评论](https://you.ctrip.com/sight/guangzhou152/107540.html)
:::

|字段|说明|
|:-:|:-|
|user_name|用户名称|
|score|评分|
|content|评论内容|
|publish_time|发布时间|
|like_count|点赞数|
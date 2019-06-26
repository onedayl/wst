# 微博
## 综合搜索
```json
{"_id":"weibo_general_search","startUrl":["https://s.weibo.com/weibo/keyword?topnav=1&wvr=6&b=1"],"selectors":[{"id":"mblog","type":"SelectorElement","parentSelectors":["_root","next_page"],"selector":".m-con-l .card-wrap[action-type=feed_list_item][mid] .card","multiple":true,"delay":""},{"id":"user_name","type":"SelectorText","parentSelectors":["mblog"],"selector":"a.name","multiple":false,"regex":"","delay":0},{"id":"user_link","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":"a.name","multiple":false,"extractAttribute":"href","delay":0},{"id":"user_verified","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":".info a[title]","multiple":false,"extractAttribute":"title","delay":0},{"id":"content","type":"SelectorText","parentSelectors":["mblog"],"selector":".content>p:nth-of-type(1)[node-type=feed_list_content]","multiple":false,"regex":"","delay":0},{"id":"content_full","type":"SelectorText","parentSelectors":["mblog"],"selector":".content>p:nth-of-type(2)[node-type=feed_list_content_full]","multiple":false,"regex":"","delay":0},{"id":"image","type":"SelectorGroup","parentSelectors":["mblog"],"selector":"li img","delay":0,"extractAttribute":"src"},{"id":"video","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":"video","multiple":false,"extractAttribute":"src","delay":0},{"id":"article","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":".content>.media-article-a>.thumbnail>a,.content>.media-item-a>.pic>a","multiple":false,"extractAttribute":"href","delay":0},{"id":"publish_time","type":"SelectorText","parentSelectors":["mblog"],"selector":"p.from a:nth-of-type(1)","multiple":false,"regex":"","delay":0},{"id":"mblog_link","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":".content>p.from a:nth-of-type(1)","multiple":false,"extractAttribute":"href","delay":0},{"id":"from","type":"SelectorText","parentSelectors":["mblog"],"selector":"p.from a:nth-of-type(2)","multiple":false,"regex":"","delay":0},{"id":"act","type":"SelectorElement","parentSelectors":["mblog"],"selector":".card-act ul","multiple":false,"delay":0},{"id":"forward_count","type":"SelectorText","parentSelectors":["act"],"selector":"li:nth-of-type(2)","multiple":false,"regex":"\\d+","delay":0},{"id":"comment_count","type":"SelectorText","parentSelectors":["act"],"selector":"li:nth-of-type(3)","multiple":false,"regex":"\\d+","delay":0},{"id":"like_count","type":"SelectorText","parentSelectors":["act"],"selector":"li:nth-of-type(4)","multiple":false,"regex":"\\d+","delay":0},{"id":"ref","type":"SelectorElement","parentSelectors":["mblog"],"selector":".con","multiple":false,"delay":0},{"id":"ref_user_name","type":"SelectorText","parentSelectors":["ref"],"selector":"a.name","multiple":false,"regex":"","delay":0},{"id":"ref_user_verified","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":"a[target][title]","multiple":false,"extractAttribute":"title","delay":0},{"id":"ref_content","type":"SelectorText","parentSelectors":["ref"],"selector":"p[node-type='feed_list_content']","multiple":false,"regex":"","delay":0},{"id":"ref_content_full","type":"SelectorText","parentSelectors":["ref"],"selector":"p[node-type='feed_list_content_full']","multiple":false,"regex":"","delay":0},{"id":"ref_publish_time","type":"SelectorText","parentSelectors":["ref"],"selector":".from a[target]","multiple":false,"regex":"","delay":0},{"id":"ref_link","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":"p.from a:nth-of-type(1)","multiple":false,"extractAttribute":"href","delay":0},{"id":"ref_from","type":"SelectorText","parentSelectors":["ref"],"selector":".from a:nth-of-type(2)","multiple":false,"regex":"","delay":0},{"id":"ref_act","type":"SelectorElement","parentSelectors":["ref"],"selector":"ul.act","multiple":false,"delay":0},{"id":"ref_forward_count","type":"SelectorText","parentSelectors":["ref_act"],"selector":"li:nth-of-type(1)","multiple":false,"regex":"\\d+","delay":0},{"id":"ref_comment_count","type":"SelectorText","parentSelectors":["ref_act"],"selector":"li:nth-of-type(2)","multiple":false,"regex":"\\d+","delay":0},{"id":"ref_like_count","type":"SelectorText","parentSelectors":["ref_act"],"selector":"li:nth-of-type(3)","multiple":false,"regex":"\\d+","delay":0},{"id":"next_page","type":"SelectorLink","parentSelectors":["_root","next_page"],"selector":"ul.s-scroll>li.cur~li a","multiple":false,"delay":0}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
    - 此为综合搜索，如果只需要搜索用户（即 `找人`）、文章、视频、图片或文章，请使用相应的抓取配置
    - 支持默认搜索和高级搜索，例如微博只允许查询前 50 页结果，可以利用高级搜索限定时间段分批采集
- 链接示例
    - [默认搜索](https://s.weibo.com/weibo/keyword?topnav=1&wvr=6&b=1)
    - [高级搜索](https://s.weibo.com/weibo/keyword?q=keyword&scope=ori&haspic=1&timescope=custom:2019-06-15:2019-06-25&Refer=g)
:::

|字段|说明|
|:-:|:-|
|user_name|用户昵称|
|user_link|用户主页链接|
|user_verified|用户认证信息|
|content|正文|
|content_full|正文全文|
|image|内嵌图片，数量为 1- 9，组合为 json 格式|
|video|内嵌视频|
|article|内嵌文章|
|publish_time|发布时间|
|mblog_link|本帖链接|
|from|发布来源|
|forward_count|转发数|
|comment_count|评论数|
|like_count|点赞数|
|ref_user_name|原帖用户昵称（原帖即本帖所转发的微博，下同）|
|ref_user_link|原帖用户主页链接|
|ref_user_verified|原帖用户认证信息|
|ref_content|原帖正文|
|ref_content_full|原帖正文全文|
|ref_publish_time|原帖发布时间|
|ref_link|原帖链接|
|ref_from|原帖发布来源|
|ref_forward_count|原帖转发数|
|ref_comment_count|原帖评论数|
|ref_like_count|原帖点赞数|
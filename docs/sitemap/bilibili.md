# bilibili
## 视频搜索
```json
{"_id":"bilibili_video_search","startUrl":["https://search.bilibili.com/video?keyword=bilibili&page=1"],"selectors":[{"id":"item","type":"SelectorElement","parentSelectors":["_root"],"selector":"li.video-item","multiple":true,"delay":"5000"},{"id":"title","type":"SelectorLink","parentSelectors":["item"],"selector":"a.title","multiple":false,"delay":0},{"id":"duration","type":"SelectorText","parentSelectors":["item"],"selector":".so-imgTag_rb","multiple":false,"regex":"","delay":0},{"id":"desc","type":"SelectorText","parentSelectors":["item"],"selector":".des","multiple":false,"regex":"","delay":0},{"id":"play_count","type":"SelectorText","parentSelectors":["item"],"selector":"span[title='观看']","multiple":false,"regex":"","delay":0},{"id":"danmuku_count","type":"SelectorText","parentSelectors":["item"],"selector":"span[title='弹幕']","multiple":false,"regex":"","delay":0},{"id":"publish_time","type":"SelectorText","parentSelectors":["item"],"selector":"span.time","multiple":false,"regex":"","delay":0},{"id":"account","type":"SelectorLink","parentSelectors":["item"],"selector":"a.up-name","multiple":false,"delay":0}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
    - 支持默认搜索以及限定排序、时长和分区的高级搜索，可以叠加。
    - 无法自动翻页，需自行修改 *page* 参数，请参考[带范围定义的启动链接](/tutorial/#带范围定义的启动链接)。
- 示例页面
    - [默认搜索](https://search.bilibili.com/video?keyword=bilibili&page=1)
    - [高级搜索](https://search.bilibili.com/video?keyword=bilibili&order=totalrank&duration=2&tids_1=0&page=1)
:::

|字段|说明|
|:-:|:-|
|title|视频标题|
|title-href|视频链接|
|duration|视频时长|
|desc|视频描述|
|play_count|播放数|
|danmuku_count|弹幕数|
|publish_time|发布时间|
|account|up主昵称|
|account-href|up主主页链接|

## 专栏搜索
专栏其实就是文章嘛…… ┑(￣Д ￣)┍

```json
{"_id":"bilibili_video_search","startUrl":["https://search.bilibili.com/video?keyword=bilibili&page=1"],"selectors":[{"id":"item","type":"SelectorElement","parentSelectors":["_root"],"selector":"li.video-item","multiple":true,"delay":"5000"},{"id":"title","type":"SelectorLink","parentSelectors":["item"],"selector":"a.title","multiple":false,"delay":0},{"id":"duration","type":"SelectorText","parentSelectors":["item"],"selector":".so-imgTag_rb","multiple":false,"regex":"","delay":0},{"id":"desc","type":"SelectorText","parentSelectors":["item"],"selector":".des","multiple":false,"regex":"","delay":0},{"id":"play_count","type":"SelectorText","parentSelectors":["item"],"selector":"span[title='观看']","multiple":false,"regex":"","delay":0},{"id":"danmuku_count","type":"SelectorText","parentSelectors":["item"],"selector":"span[title='弹幕']","multiple":false,"regex":"","delay":0},{"id":"publish_time","type":"SelectorText","parentSelectors":["item"],"selector":"span.time","multiple":false,"regex":"","delay":0},{"id":"account","type":"SelectorLink","parentSelectors":["item"],"selector":"a.up-name","multiple":false,"delay":0}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
    - 支持默认搜索以及限定排序和分区的高级搜索，可以叠加。
    - 无法自动翻页，需自行修改 *page* 参数，请参考[带范围定义的启动链接](/tutorial/#带范围定义的启动链接)。
- 示例页面
    - [默认搜索](https://search.bilibili.com/article?keyword=bilibili&page=1)
    - [高级搜索](https://search.bilibili.com/article?keyword=bilibili&order=pubdate&category_id=28&page=1)
:::

|字段|说明|
|:-:|:-|
|title|文章标题|
|title-href|文章链接|
|desc|文章描述|
|account|up主昵称|
|account-href|up主主页链接|
|category|分区|
|read_count|阅读数|
|like_count|点赞数|
|comment_count|评论数|

## 用户搜索

```json
{"_id":"bilibili_user_search","startUrl":["https://search.bilibili.com/upuser?keyword=bilibili&page=1"],"selectors":[{"id":"item","type":"SelectorElement","parentSelectors":["_root"],"selector":"li.user-item","multiple":true,"delay":0},{"id":"name","type":"SelectorLink","parentSelectors":["item"],"selector":"a.title","multiple":false,"delay":0},{"id":"level","type":"SelectorHTML","parentSelectors":["item"],"selector":".headline","multiple":false,"regex":"lv\\d+","delay":0},{"id":"desc","type":"SelectorText","parentSelectors":["item"],"selector":"div.desc","multiple":false,"regex":"","delay":0},{"id":"work_count","type":"SelectorText","parentSelectors":["item"],"selector":".up-info span:nth-of-type(1)","multiple":false,"regex":"\\d+","delay":0},{"id":"follower_count","type":"SelectorText","parentSelectors":["item"],"selector":"span:nth-of-type(2)","multiple":false,"regex":"[\\d|\\.]+万?","delay":0},{"id":"recent_work","type":"SelectorGroup","parentSelectors":["item"],"selector":"a.video-desc","delay":0,"extractAttribute":"href"}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
    - 支持默认搜索以及限定排序和用户分类的高级搜索，可以叠加。
    - 无法自动翻页，需自行修改 *page* 参数，请参考[带范围定义的启动链接](/tutorial/#带范围定义的启动链接)。
- 示例页面
    - [默认搜索](https://search.bilibili.com/upuser?keyword=bilibili&page=1)
    - [高级搜索](https://search.bilibili.com/upuser?keyword=bilibili&page=1&order=fans&order_sort=0&user_type=3)
:::

|字段|说明|
|:-:|:-|
|name|昵称|
|name-href|主页链接|
|level|用户等级|
|desc|个人签名|
|work_count|投稿数|
|follower_count|粉丝数|
|recent_work|最近作品|
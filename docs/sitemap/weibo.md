# 微博
## 综合搜索
```json
{"_id":"weibo_general_search","startUrl":["https://s.weibo.com/weibo/keyword?topnav=1&wvr=6&b=1"],"selectors":[{"id":"mblog","type":"SelectorElement","parentSelectors":["_root","next_page"],"selector":".m-con-l .card-wrap[action-type=feed_list_item][mid] .card","multiple":true,"delay":""},{"id":"user_name","type":"SelectorText","parentSelectors":["mblog"],"selector":"a.name","multiple":false,"regex":"","delay":0},{"id":"user_link","type":"SelectorHTML","parentSelectors":["mblog"],"selector":".content>.info>div:last-of-type","multiple":false,"regex":"weibo\\.com\\/\\w+","delay":0},{"id":"user_verified","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":".info a[title]","multiple":false,"extractAttribute":"title","delay":0},{"id":"content","type":"SelectorText","parentSelectors":["mblog"],"selector":".content>p:nth-of-type(1)[node-type=feed_list_content]","multiple":false,"regex":"","delay":0},{"id":"content_full","type":"SelectorText","parentSelectors":["mblog"],"selector":".content>p:nth-of-type(2)[node-type=feed_list_content_full]","multiple":false,"regex":"","delay":0},{"id":"image","type":"SelectorGroup","parentSelectors":["mblog"],"selector":"li img","delay":0,"extractAttribute":"src"},{"id":"video","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":"video","multiple":false,"extractAttribute":"src","delay":0},{"id":"article","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":".content>.media-article-a>.thumbnail>a,.content>.media-item-a>.pic>a","multiple":false,"extractAttribute":"href","delay":0},{"id":"publish_time","type":"SelectorText","parentSelectors":["mblog"],"selector":"p.from a:nth-of-type(1)","multiple":false,"regex":"","delay":0},{"id":"link","type":"SelectorHTML","parentSelectors":["mblog"],"selector":".content>p.from","multiple":false,"regex":"weibo\\.com\\/\\d+\\/\\w+","delay":0},{"id":"from","type":"SelectorText","parentSelectors":["mblog"],"selector":"p.from a:nth-of-type(2)","multiple":false,"regex":"","delay":0},{"id":"act","type":"SelectorElement","parentSelectors":["mblog"],"selector":".card-act ul","multiple":false,"delay":0},{"id":"forward_count","type":"SelectorText","parentSelectors":["act"],"selector":"li:nth-of-type(2)","multiple":false,"regex":"\\d+","delay":0},{"id":"comment_count","type":"SelectorText","parentSelectors":["act"],"selector":"li:nth-of-type(3)","multiple":false,"regex":"\\d+","delay":0},{"id":"like_count","type":"SelectorText","parentSelectors":["act"],"selector":"li:nth-of-type(4)","multiple":false,"regex":"\\d+","delay":0},{"id":"ref","type":"SelectorElement","parentSelectors":["mblog"],"selector":".con","multiple":false,"delay":0},{"id":"ref_user_name","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":"a.name","multiple":false,"extractAttribute":"nick-name","delay":0},{"id":"ref_user_verified","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":"a[target][title]","multiple":false,"extractAttribute":"title","delay":0},{"id":"ref_content","type":"SelectorText","parentSelectors":["ref"],"selector":"p[node-type='feed_list_content']","multiple":false,"regex":"","delay":0},{"id":"ref_content_full","type":"SelectorText","parentSelectors":["ref"],"selector":"p[node-type='feed_list_content_full']","multiple":false,"regex":"","delay":0},{"id":"ref_image","type":"SelectorGroup","parentSelectors":["ref"],"selector":"li img","delay":0,"extractAttribute":"src"},{"id":"ref_video","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":"video","multiple":false,"extractAttribute":"src","delay":0},{"id":"ref_article","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":".media-article-a .thumbnail a","multiple":false,"extractAttribute":"href","delay":0},{"id":"ref_publish_time","type":"SelectorText","parentSelectors":["ref"],"selector":".from a[target]","multiple":false,"regex":"","delay":0},{"id":"ref_link","type":"SelectorHTML","parentSelectors":["ref"],"selector":"p.from","multiple":false,"regex":"weibo\\.com\\/\\d+\\/\\w+","delay":0},{"id":"ref_from","type":"SelectorText","parentSelectors":["ref"],"selector":".from a:nth-of-type(2)","multiple":false,"regex":"","delay":0},{"id":"ref_act","type":"SelectorElement","parentSelectors":["ref"],"selector":"ul.act","multiple":false,"delay":0},{"id":"ref_forward_count","type":"SelectorText","parentSelectors":["ref_act"],"selector":"li:nth-of-type(1)","multiple":false,"regex":"\\d+","delay":0},{"id":"ref_comment_count","type":"SelectorText","parentSelectors":["ref_act"],"selector":"li:nth-of-type(2)","multiple":false,"regex":"\\d+","delay":0},{"id":"ref_like_count","type":"SelectorText","parentSelectors":["ref_act"],"selector":"li:nth-of-type(3)","multiple":false,"regex":"\\d+","delay":0},{"id":"next_page","type":"SelectorLink","parentSelectors":["_root","next_page"],"selector":"ul.s-scroll>li.cur~li a","multiple":false,"delay":0}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
    - 此为综合搜索，如果只需要搜索用户（即 `找人`）、文章、视频、图片或文章，请使用相应的抓取配置。
    - 支持默认搜索和高级搜索，例如微博只允许查询前 50 页结果，可以利用高级搜索限定时间段分批采集。
- 示例页面
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
|image|内嵌图片，数量 1-9，组合为 json 格式|
|video|内嵌视频|
|article|内嵌文章|
|publish_time|发布时间|
|link|本帖链接|
|from|发布来源|
|forward_count|转发数|
|comment_count|评论数|
|like_count|点赞数|
|ref_user_name|原帖用户昵称（原帖即本帖所转发的微博，下同）|
|ref_user_link|原帖用户主页链接|
|ref_user_verified|原帖用户认证信息|
|ref_content|原帖正文|
|ref_content_full|原帖正文全文|
|ref_image|原帖内嵌图片，数量 1-9，组合为 json 格式|
|ref_video|原帖内嵌视频|
|ref_article|原帖内嵌文章|
|ref_publish_time|原帖发布时间|
|ref_link|原帖链接|
|ref_from|原帖发布来源|
|ref_forward_count|原帖转发数|
|ref_comment_count|原帖评论数|
|ref_like_count|原帖点赞数|

## 用户搜索
```json
{"_id":"weibo_user_search","startUrl":["https://s.weibo.com/user/keyword?topnav=1&wvr=6&b=1"],"selectors":[{"id":"user","type":"SelectorElement","parentSelectors":["_root","next_page"],"selector":".m-con-l .card-wrap[id=pl_user_feedList] .card","multiple":true,"delay":""},{"id":"next_page","type":"SelectorLink","parentSelectors":["_root","next_page"],"selector":"ul.s-scroll>li.cur~li a","multiple":false,"delay":0},{"id":"name","type":"SelectorText","parentSelectors":["user"],"selector":"a.name","multiple":false,"regex":"","delay":0},{"id":"verified","type":"SelectorElementAttribute","parentSelectors":["user"],"selector":".info>div a:nth-of-type(2)","multiple":false,"extractAttribute":"title","delay":0},{"id":"gender","type":"SelectorHTML","parentSelectors":["user"],"selector":"p:nth-of-type(1)","multiple":false,"regex":"female|male","delay":0},{"id":"region","type":"SelectorText","parentSelectors":["user"],"selector":"p:nth-of-type(1)","multiple":false,"regex":"[^个人主页]+","delay":0},{"id":"link","type":"SelectorElementAttribute","parentSelectors":["user"],"selector":"a.wb_url","multiple":false,"extractAttribute":"href","delay":0},{"id":"following_count","type":"SelectorText","parentSelectors":["user"],"selector":".info>p>span:nth-of-type(1)","multiple":false,"regex":"\\d+","delay":0},{"id":"follower_count","type":"SelectorText","parentSelectors":["user"],"selector":".info>p>span:nth-of-type(2)","multiple":false,"regex":"\\d+","delay":0},{"id":"mblog_count","type":"SelectorText","parentSelectors":["user"],"selector":".info>p>span:nth-of-type(3) a","multiple":false,"regex":"","delay":0}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
    - 支持默认搜索和更多条件搜索，例如地区、用户性质、性别、年龄等。
    - 微博只允许查询前 50 页结果，可以增加条件分批采集。
    - 简介、标签等字段没有抓取，因为它们不是必然存在，也没有明确的样式可以让选择器定位，如果需要抓取用户完整信息，可搭配使用[用户详情](/sitemap/weibo.html#用户详情)配置。
- 示例页面
    - [默认搜索](https://s.weibo.com/user/keyword?topnav=1&wvr=6&topsug=1)
    - [更多条件搜索](https://s.weibo.com/user/keyword?q=&nickname=keyword&gender=women&Refer=g)
:::

|字段|说明|
|:-:|:-|
|name|昵称|
|verified|认证信息|
|gender|性别|
|region|地区信息|
|link|主页链接|
|following_count|关注数|
|follower_count|粉丝数|
|mblog_count|微博数|

## 用户详情
```json
{"_id":"weibo_user_detail","startUrl":["https://weibo.com/p/1005051111681197/home"],"selectors":[{"id":"avatar","type":"SelectorImage","parentSelectors":["_root"],"selector":"img.photo","multiple":false,"delay":0},{"id":"name","type":"SelectorText","parentSelectors":["_root"],"selector":"h1","multiple":false,"regex":"","delay":0},{"id":"gender","type":"SelectorHTML","parentSelectors":["_root"],"selector":".pf_username .icon_bed a","multiple":false,"regex":"female|male","delay":0},{"id":"level","type":"SelectorHTML","parentSelectors":["_root"],"selector":".pf_username a[title]","multiple":false,"regex":"\\d+","delay":0},{"id":"intro","type":"SelectorText","parentSelectors":["_root"],"selector":"div.pf_intro","multiple":false,"regex":"","delay":0},{"id":"following_count","type":"SelectorText","parentSelectors":["_root"],"selector":"td:nth-of-type(1) strong","multiple":false,"regex":"","delay":0},{"id":"follower_count","type":"SelectorText","parentSelectors":["_root"],"selector":"td:nth-of-type(2) strong","multiple":false,"regex":"","delay":0},{"id":"mblog_count","type":"SelectorText","parentSelectors":["_root"],"selector":"td:nth-of-type(3) strong","multiple":false,"regex":"","delay":0},{"id":"verified","type":"SelectorText","parentSelectors":["_root"],"selector":".info span","multiple":false,"regex":"","delay":0},{"id":"random_info","type":"SelectorGroup","parentSelectors":["_root"],"selector":"span.item_text","delay":0,"extractAttribute":""},{"id":"more_info","type":"SelectorLink","parentSelectors":["_root"],"selector":"a.WB_cardmore","multiple":false,"delay":0},{"id":"birthday","type":"SelectorHTML","parentSelectors":["more_info"],"selector":"div.WB_cardwrap:nth-of-type(1) div.PCD_text_b","multiple":false,"regex":"\\d+年\\d+月\\d+日","delay":0},{"id":"custom_link","type":"SelectorHTML","parentSelectors":["more_info"],"selector":"div.WB_cardwrap:nth-of-type(1) div.PCD_text_b","multiple":false,"regex":"(https|http)?:\\/\\/[\\w|\\.|\\/]+","delay":0},{"id":"register_time","type":"SelectorText","parentSelectors":["more_info"],"selector":"div.WB_cardwrap:nth-of-type(1) div.PCD_text_b","multiple":false,"regex":"\\d{4}\\-\\d{2}\\-\\d{2}","delay":0},{"id":"label","type":"SelectorGroup","parentSelectors":["more_info"],"selector":"a.W_btn_b","delay":0,"extractAttribute":""},{"id":"review_time","type":"SelectorHTML","parentSelectors":["more_info"],"selector":"div.PCD_person_info","multiple":false,"regex":"\\d{4}\\-\\d{2}\\-\\d{2}","delay":0},{"id":"industry_category","type":"SelectorText","parentSelectors":["more_info"],"selector":".ul_detail li:last-of-type","multiple":false,"regex":"[^\\s]+\\-[^\\s]+","delay":0}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
    - 支持默认的数字域名主页和自定义域名主页。
    - 只抓取用户信息，如需抓取用户所发的微博，请使用[用户微博列表](/sitemap/weibo.html#用户微博列表)配置。
- 示例页面
    - [默认域名主页](https://weibo.com/p/1005051111681197)
    - [个性域名主页](https://weibo.com/xiaopapi)
:::

|字段|说明|
|:-:|:-|
|avatar|头像|
|name|昵称|
|gender|性别|
|level|会员等级|
|intro|介绍|
|following_count|关注数|
|follower_count|粉丝数|
|mblog_count|微博数|
|verified|认证信息|
|random_info|位于认证信息下的列表信息，会出现的信息不固定（地区、生日、简介等），只能统一抓取，后续提取请自行处理|
|birthday|生日（个人账号才有）|
|custom_link|个性域名（个人账号才有）|
|register_time|注册时间（个人账号才有）|
|label|标签（个人账号才有）|
|review_time|审核时间（机构账号才有）|
|industry_category|行业类别（机构账号才有）|


## 用户微博列表
```json
{"_id":"weibo_user_mblog_list","startUrl":["https://weibo.com/wflanker?profile_ftype=1&is_all=1&page=[1-3]#_0"],"selectors":[{"id":"mblog","type":"SelectorElementScroll","parentSelectors":["_root"],"selector":"div[action-type=feed_list_item]","multiple":true,"delay":"2000"},{"id":"user_name","type":"SelectorText","parentSelectors":["mblog"],"selector":"a.W_f14","multiple":false,"regex":"","delay":0},{"id":"user_link","type":"SelectorHTML","parentSelectors":["mblog"],"selector":".WB_detail>.WB_info","multiple":false,"regex":"weibo\\.com\\/[\\w|\\/]+","delay":0},{"id":"user_verified","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":".WB_info a:nth-of-type(2) i","multiple":false,"extractAttribute":"title","delay":0},{"id":"publish_time","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":"a[node-type=feed_list_item_date]","multiple":false,"extractAttribute":"title","delay":0},{"id":"link","type":"SelectorHTML","parentSelectors":["mblog"],"selector":".WB_from","multiple":false,"regex":"\\/\\d+\\/\\w+","delay":0},{"id":"from","type":"SelectorText","parentSelectors":["mblog"],"selector":"a.S_txt2:nth-of-type(2)","multiple":false,"regex":"","delay":0},{"id":"content","type":"SelectorText","parentSelectors":["mblog"],"selector":".WB_detail>div[node-type=feed_list_content]","multiple":false,"regex":"","delay":0},{"id":"content_full","type":"SelectorText","parentSelectors":["mblog"],"selector":".WB_detail>div[node-type=feed_list_content_full]","multiple":false,"regex":"","delay":0},{"id":"image","type":"SelectorGroup","parentSelectors":["mblog"],"selector":".WB_detail>.WB_media_wrap li.WB_pic img","delay":0,"extractAttribute":"src"},{"id":"video","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":"video","multiple":false,"extractAttribute":"src","delay":0},{"id":"article","type":"SelectorElementAttribute","parentSelectors":["mblog"],"selector":".WB_detail>.WB_media_wrap>.media_box>div[action-type=widget_articleLayer]","multiple":false,"extractAttribute":"action-data","delay":0},{"id":"act","type":"SelectorElement","parentSelectors":["mblog"],"selector":"ul.WB_row_line","multiple":false,"delay":0},{"id":"forward_count","type":"SelectorText","parentSelectors":["act"],"selector":"[node-type='forward_btn_text'] em:nth-of-type(2)","multiple":false,"regex":"","delay":0},{"id":"comment_count","type":"SelectorText","parentSelectors":["act"],"selector":"[node-type='comment_btn_text'] em:nth-of-type(2)","multiple":false,"regex":"","delay":0},{"id":"like_count","type":"SelectorText","parentSelectors":["act"],"selector":".line [node-type] em:nth-of-type(2)","multiple":false,"regex":"","delay":0},{"id":"ref","type":"SelectorElement","parentSelectors":["mblog"],"selector":"div.WB_expand","multiple":false,"delay":0},{"id":"ref_user_name","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":".WB_info>a[nick-name]","multiple":false,"extractAttribute":"nick-name","delay":0},{"id":"ref_user_link","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":".WB_info>a[nick-name]","multiple":false,"extractAttribute":"href","delay":0},{"id":"ref_user_verified","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":"i.W_icon","multiple":false,"extractAttribute":"title","delay":0},{"id":"ref_content","type":"SelectorText","parentSelectors":["ref"],"selector":"div.WB_text[node-type=feed_list_reason]","multiple":false,"regex":"","delay":0},{"id":"ref_content_full","type":"SelectorText","parentSelectors":["ref"],"selector":"div.WB_text[node-type=feed_list_reason_full]","multiple":false,"regex":"","delay":0},{"id":"ref_image","type":"SelectorGroup","parentSelectors":["ref"],"selector":"li.WB_pic img","delay":0,"extractAttribute":"src"},{"id":"ref_video","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":"video","multiple":false,"extractAttribute":"src","delay":0},{"id":"ref_article","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":"div[action-type=widget_articleLayer]","multiple":false,"extractAttribute":"action-data","delay":0},{"id":"ref_publish_time","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":".WB_from a[node-type=feed_list_item_date]","multiple":false,"extractAttribute":"title","delay":0},{"id":"ref_link","type":"SelectorElementAttribute","parentSelectors":["ref"],"selector":".WB_from a[node-type=feed_list_item_date]","multiple":false,"extractAttribute":"href","delay":0},{"id":"ref_from","type":"SelectorText","parentSelectors":["ref"],"selector":".WB_from a[action-type=app_source]","multiple":false,"regex":"","delay":0},{"id":"ref_forward_count","type":"SelectorText","parentSelectors":["ref"],"selector":"[action-history] em:nth-of-type(2)","multiple":false,"regex":"","delay":0},{"id":"ref_comment_count","type":"SelectorText","parentSelectors":["ref"],"selector":"li:nth-of-type(2) span span em:last-of-type","multiple":false,"regex":"","delay":0},{"id":"ref_like_count","type":"SelectorText","parentSelectors":["ref"],"selector":"li:nth-of-type(3) span span em:last-of-type","multiple":false,"regex":"","delay":0}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
    - 支持抓取用户的全部、热门、特定标签以符合筛选条件的微博
    - 由于用户微博列表页面结构同时包含滚动加载和分页，并且分页链接是页面滚动到底后才触发生成的，因此现有的选择器无法完成页面自动导航，需自行确认总页数，然后手动配置[带范围定义的启动链接](/tutorial/#带范围定义的启动链接)。
    - **元素滚动选择器 `_root -> mblog` 的延迟时间默认为 2000 毫秒，请根据自己的网络状况适当调整，否则有丢失数据的可能**。
- 示例页面
    - [所有微博](https://weibo.com/p/1005051111681197/home?profile_ftype=1&is_all=1#_0)
    - [热门微博](https://weibo.com/p/1005051111681197/home?profile_ftype=1&is_hot=1#_0)
    - [标签微博（原创）](https://weibo.com/p/1005051111681197/home?profile_ftype=1&is_ori=1#_0)
    - [筛选微博（关键词包含“财报”的原创微博）](https://weibo.com/p/1005051111681197/home?is_ori=1&is_text=1&is_pic=1&is_video=1&is_music=1&is_article=1&key_word=财报&start_time=&end_time=2019-07-03&is_search=1&is_searchadv=1#_0)
:::

|字段|说明|
|:-:|:-|
|user_name|用户昵称|
|user_link|用户主页链接|
|user_verified|用户认证信息|
|publish_time|发布时间|
|link|本帖链接|
|from|发布来源|
|content|正文|
|content_full|正文全文|
|image|内嵌图片，数量 1-9，组合为 json 格式|
|video|内嵌视频|
|article|内嵌文章|
|forward_count|转发数|
|comment_count|评论数|
|like_count|点赞数|
|ref_user_name|原帖用户昵称（原帖即本帖所转发的微博，下同）|
|ref_user_link|原帖用户主页链接|
|ref_user_verified|原帖用户认证信息|
|ref_content|原帖正文|
|ref_content_full|原帖正文全文|
|ref_image|原帖内嵌图片，数量 1-9，组合为 json 格式|
|ref_video|原帖内嵌视频|
|ref_article|原帖内嵌文章|
|ref_publish_time|原帖发布时间|
|ref_link|原帖链接|
|ref_from|原帖发布来源|
|ref_forward_count|原帖转发数|
|ref_comment_count|原帖评论数|
|ref_like_count|原帖点赞数|
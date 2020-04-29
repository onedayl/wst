# 国家统计局
## 区划代码和城乡划分代码
```json
{"_id":"cn_region_2019","startUrl":["http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2019/index.html"],"selectors":[{"id":"province_name","type":"SelectorLink","parentSelectors":["_root"],"selector":"tr:nth-of-type(n+4) a","multiple":true,"delay":0},{"id":"city","type":"SelectorElement","parentSelectors":["province"],"selector":"tr.citytr:nth-of-type(n+2)","multiple":true,"delay":0},{"id":"city_id","type":"SelectorText","parentSelectors":["city"],"selector":"td:nth-of-type(1)","multiple":false,"regex":"","delay":0},{"id":"city_name","type":"SelectorLink","parentSelectors":["city"],"selector":"td:nth-of-type(2) a","multiple":false,"delay":0},{"id":"district","type":"SelectorElement","parentSelectors":["city_name"],"selector":"tr.countytr:nth-of-type(n+2)","multiple":true,"delay":0},{"id":"district_id","type":"SelectorText","parentSelectors":["district"],"selector":"td:nth-of-type(1)","multiple":false,"regex":"","delay":0},{"id":"district_name","type":"SelectorLink","parentSelectors":["district"],"selector":"td:nth-of-type(2) a","multiple":false,"delay":0},{"id":"street","type":"SelectorElement","parentSelectors":["district_name"],"selector":"tr.towntr:nth-of-type(n+2)","multiple":true,"delay":0},{"id":"street_id","type":"SelectorText","parentSelectors":["street"],"selector":"td:nth-of-type(1)","multiple":false,"regex":"","delay":0},{"id":"street_name","type":"SelectorLink","parentSelectors":["street"],"selector":"td:nth-of-type(2) a","multiple":false,"delay":0},{"id":"community","type":"SelectorElement","parentSelectors":["street_name"],"selector":"tr.villagetr:nth-of-type(n+2)","multiple":true,"delay":0},{"id":"community_id","type":"SelectorText","parentSelectors":["community"],"selector":"td:nth-of-type(1)","multiple":false,"regex":"","delay":0},{"id":"community_cat_id","type":"SelectorText","parentSelectors":["community"],"selector":"td:nth-of-type(2)","multiple":false,"regex":"","delay":0},{"id":"community_name","type":"SelectorText","parentSelectors":["community"],"selector":"td:nth-of-type(3)","multiple":false,"regex":"","delay":0}]}
```

::: tip
- 贡献者
    - [onedayl](https://github.com/onedayl)
- 备注
  - 支持按省、市、区、街道、社区五级自动跳转抓取。
  - 实测发现大概请求 10 个页面后就会出现 20 秒的间隔等待，并且大概抓取一个市级所有记录（3000 条左右）就出现验证码。
  - 建议拆分后逐级采集，即先采集省，然后到市，依次类推，最后再合并，请自行从上面的配置里提取各级抓取的选择器。
- 示例页面
  - [总页面](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2019/index.html)
:::

|字段|说明|
|:-:|:-|
|province_name|省级区划名称|
|city_id|市级区划代码|
|city_name|市级区划名称|
|district_id|区级区划代码|
|district_name|区级区划名称|
|street_id|街道级区划代码|
|street_name|街道级区划名称|
|community_id|社区级区划代码|
|community_cat_id|社区级区划城乡分类代码|
|community_name|社区级区划名称|
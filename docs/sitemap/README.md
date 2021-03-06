# 抓取配置

如果你没有看过[快速上手](/guide/)里提供的视频教程，在直接使用抓取配置之前，还是需要了解一些基本概念和操作，请阅读完整教程里的[界面](/tutorial/#界面)章节，这个学习成本是省不掉的 ~(￣▽￣)~*

## 配置说明
后面的章节按照网站对抓取配置进行了汇总，以[微博-综合搜索](/sitemap/weibo.html#综合搜索)为例，每个配置包含这几项内容：

### JSON 配置
黑色背景里的一长串文本，鼠标指向时右下角会有一个复制按钮，点击后可以一键复制。

### 配置信息
- 贡献者 —— 包括原始作者和进行修补完善的人
- 备注 —— 使用该配置时的一些注意事项和技巧
- 示例页面 —— 可以用该配置进行抓取的例子

### 导出字段
最后导出结果（也就是导出的 CSV 文件）里的字段名称以及字段所相应的内容。

## 使用流程
仍以[微博-综合搜索](/sitemap/weibo.html#综合搜索)为例，总共有 6 步操作：
1. 复制抓取配置。
2. 点击 `Create new sitemap` 选项卡，然后点击 `Import Sitemap`。
3. 将抓取配置粘贴到 `Sitemap JSON` 输入框里，可以根据自己需要在 `Rename Sitemap` 输入框里对配置进行重命名，然后点击 `Import Sitemap` 按钮。
4. 导入成功后会自动切换到 `Sitemap` 选项卡，点击下拉菜单里的 `Edit metadata` 选项，**将启动链接 `Start URL` 修改为你要抓取的链接**，然后点击 `Save Sitemap` 按钮。
5. 点击下拉菜单里的 `Scrape` 选项，根据实际情况设置 `Request interval（请求间隔）` 和 `Page load delay（页面加载延迟）`，单位是毫秒（1秒 = 1000 毫秒），默认都是 2000 且不得小于 2000（对于反爬比较严格的网站，可以适当增加请求间隔的时间，而响应比较慢的网站，则适当增加页面加载延迟时间，防止数据丢失），点击 `Start scraping` 开始抓取。
6. 有一个新窗口弹出并不断访问页面并抓取数据，完成后会自动关闭，这时点击下拉菜单里的 `Export data as CSV` 选项，看到 `Download now!` 出现后就可以点击下载抓取结果的 CSV 文件了。

以上就是目前为止需要了解的内容，如果你发现使用过程中有一些不好解决的问题，可以查看[完整教程](/tutorial/)或者试试[辅助工具](/tool/)，没准有惊喜 ( •̀ ω •́ )✧

# CSS 选择器
Web Scraper 使用 CSS 选择器来查找网页中的 HTML 元素并从中提取数据，当你点击某个元素时 Web Scraper 会尝试找到它认为最合适的 CSS 选择器，但你也可以自己动手写然后使用元素预览功能来确认是否正确。可使用的 CSS 选择器包括 CSS 1-3 版本的所有选择器以及 jQuery 的伪类选择器，如果不是很了解的话可以点击下方链接去学习一下：

- [CSS 选择器](http://www.w3school.com.cn/cssref/css_selectors.asp)
- [jQuery CSS 选择器](http://www.w3school.com.cn/jquery/jquery_selectors.asp)

## Web Scraper 特殊选择器
父选择器（Parent selector）是目前仅有的一个特殊选择器，后续有可能继续添加。父选择器的写法为 `_parent_`，通过它可以允许子选择器选中它的父元素，当你需要提取一个被元素选择器选中的父元素的属性，例如商品列表里每个商品的唯一 id 隐藏在商品包裹元素的某个 `data-xx` 属性里时，就可以在包裹元素下添加一个[元素属性选择器](/tutorial/element-attribute-selector.html)，然后选中作为父元素的包裹元素，提取它的 `data-xx` 属性值。
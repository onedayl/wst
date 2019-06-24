# 元素滚动选择器
元素滚动选择器与[元素选择器](/tutorial/element-selector.html)相似，区别是它会滚动页面多次以触发更多元素的加载，直到没有新元素出现为止。

::: danger
注意！如果页面是无限滚动的，那选择器也会陷入无限循环。
:::

## 配置选项
- 多选（multiple）—— 通常都应该勾选，不然就必要用这个选择器了。
- 延迟（delay）—— 开始选择元素以及两次滚动之间的等待时间，通常都需要设置，因为数据不可能在页面滚动之后立刻就从服务器返回并加载，如果不希望丢失数据的话最好设置成 2000 毫秒以上。
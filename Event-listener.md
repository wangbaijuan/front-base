# 知识点
1. 通用事件绑定
```javascript
    //封装一个通用的事件绑定函数
    function bindEvent(elem, type, selector, fn) {
        if (!fn) {
            fn = selector;
            selector = null;
        }
        elem.addEventListener(type, function (e) {
            if (selector) {
                //如果元素被指定的选择器字符串选择，Element.matches()  方法返回true; 否则返回false。
                var target = e.target || e.srcElement;
                if (target.matches(selector)) {
                    //target表示为当前的事件操作的dom，但是不是真正操作dom，
                    //当然，这个是有兼容性的，标准浏览器用e.target，IE浏览器用e.srcElement
                    fn.call(target, e); //把this赋值给e.target
                }
            }
            else {fn(e)}
        });
    }
```
* 关于IE低版本的兼容性 
2. 事件冒泡

3. 代理

# 面试题
1. 编写一个通用的事件监听函数

2. 描述事件冒泡流程

3. 对于一个无限下拉加载图片的页面，如何给每个图片绑定事件
```javascript
    var obj = {
        x: 100,
        y: 200,
        z: 300
    };
    var key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key,"---", obj[key]);
        }       
    }
    /*
    x --- 100
    y --- 200
    z --- 300
    */
```
### 面试题
1. 获取 2018-06-27 格式的日期
```javascript
    function formatDate(dt) {
        if (!dt) {
            dt = new Date()
        }
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        month < 10 && (month = '0' + month);
        var date = dt.getDate();
        date < 10 && (date = '0' + date);
        //强制类型转换
        return year + '-' + month + '-' + date;
    }
    var dt = new Date();
    var formatDate = formateDate();
    console.log(formatDate);
```
2. 获取随机数，要求是长度一致的字符串格式
```javascript
    var random = Math.random() + '0000000000';
    random = random.slice(0, 10);
    console.log(random);
```
3. 写一个能遍历对象和数组的通用 forEach 函数
```javascript
    function forEach(obj, fn) {
        if (obj instanceof Array) {
            obj.forEach( (item, index)=> {
                fn(index, item);
            });
        }
        else {
            for (let key in obj) {
                fn(key, obj[key])
            }
        }
    }

    var arr = [6,3,7];
    forEach(arr, (index, item)=> {
        console.log(index, item);
    })
    var obj = {x: 111, y: 222};
    forEach(obj, (key, value)=> {
        console.log(key, value);
    })
```

```javascript
```
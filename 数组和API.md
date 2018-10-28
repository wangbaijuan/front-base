1. forEach:  遍历所有元素
```javascript
    var arr = [2018,5,20];
    arr.forEach(function (item, index) {
        console.log(item, index);
    });
    //2018 0
    //5    1
    //20   2
```
2. every： 判断所有元素是否都符合条件
```javascript
    var res = arr.every(function (item, index) {
        if (item < 2019) {
            return true;
        }
    });
    console.log(res); //true 
```
3. some： 判断是否至少有一个元素符合条件 
```javascript
    var res = arr.some(function (item, index) {
        if (item < 20) {
            return true;
        }
    });
    res; //true
```
4. sort：排序
```javascript
    var arr2 = arr.sort( (a,b)=>{
        return b-a
    } );
    arr2 //[2018, 20, 5]
```
5. map： 对元素重新组装，生成新数组
```javascript
    var arr3 = arr.map(function (item, index) {
            return '<b>' + item + '</b>';
    });
    console.log(arr3)
    //["<b>2018</b>", "<b>20</b>", "<b>5</b>"]
```
6. filter： 过滤符合条件的元素
```javascript
    var arr4 = arr.filter(function (item, index) {
        if (item > 20) {
            return true;
        }
    });
    arr4; //[2018]
```
1. JS中使用typeof能得到哪些类型：
number, string, undefined, boolean, object, function

**强制类型转换的场景**
- 字符串拼接；
- == 运算符；
- if语句
    * if条件判断中：0，NaN, '', null, undefined都会被强制转换为false
- 逻辑运算：
    && 、|| 、！
* 判断一个变量会被当做true还是false
```javascript
var a = 100;
console.log(!!a);
```

2. 何时使用 === ，何时使用 ==：
除了一下场景用双等，其他时候都用全等，因为要严谨
```javascript
var obj = {};
if(obj.a == null){
    /*相当于：obj.a === null || obj.a === undefined */
    .....
    /*Jquery源码中推荐的写法*/
}
```

3. JS中有哪些内置函数：--- 数据封装类对象
    - Number
    - String
    - Date
    - Boolean
    - Function
    - Object
    - Array
    - Error
    - RegExp
Math是js的内置对象

4. js变量按照存储方式分为  值类型  和  引用类型(数组，函数，对象)：
特点： 值类型相互赋值后，再修改值不会相互影响；
引用类型是好几个变量公用一个内存空间，节省内存空间，但是进行修改值时，会相互影响；

5. 如何理解JSON
    * JSON是一个js对象；
    * 只有两个api；
    * 同时也是一个数据格式；
    * 通常也用这两个API复制对象；
        - 应用场景：vue中table，modal框修改数据时会使用
```javascript
/*把对象变成字符串*/
JSON.stringify( {a:10, b: 20} );

/*把字符串变成对象*/
JSON.parse( '{"a":10, "b": 20}' );
```


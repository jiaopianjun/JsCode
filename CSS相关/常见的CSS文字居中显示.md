![gg.gif](http://blogimg.lieme.cn/FsaWonzTLc3IJVZgYDrjHdVEj3HR)

[demo预览地址](https://web.lieme.cn/cssDemo/cssCenter.html)

## 1、利用line-height和vertical-align
**html**

```
<div class="box">
    <span>测试文字</span>
</div>
```

**css**

```
.box{
    width: 200px;
    height: 200px;
    overflow: hidden;
    background: #ccc;
    text-align: center;
}
.box span{
    vertical-align: middle;
    line-height: 200px;
}
```


## 2、利用display:table-cell实现水平垂直居中显示
**html**

```
<div class="table">
    <span class="cell">测试文字测试文字测试文字测试文字</span>
</div>
```
**css**

```
.table{
	display: table;
}
.cell{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
```
## 3、利用定位方式position+transform实现水平垂直居中显示
**html**

```
<div class="box">
    <span>测试文字测试文字测试文字测试文字</span>
</div>
```
**css**

```
.box{
    position: relative;
}
.box span{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```
## 4、利用display：flex
**html**

```
<div class="flex">
    <span>测试文字测试文字测试文字测试文字</span>
</div>
```
**css**
```
display:flex;
flex-direction: row;
justify-content: space-around; 
align-items: center;
```

## 5、利用display：box
**html**

```
<div class="box">
    <span>测试文字测试文字测试文字测试文字</span>
</div>
```
**css**
```
display: -webkit-box;
-webkit-box-orient: horizontal;
-webkit-box-pack: center;
-webkit-box-align: center;
```

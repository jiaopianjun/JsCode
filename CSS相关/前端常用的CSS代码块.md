![gg.gif](http://blogimg.lieme.cn/FsaWonzTLc3IJVZgYDrjHdVEj3HR)

[demo预览地址](https://web.lieme.cn/cssDemo/cssdemo.html)

## 1、垂直居中对齐

```
.vc {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}
.vc {
   position:absolute;
   top: 50%;
   left: 50%;
   width: 100px;
   height: 100px;
   margin:-50px 0 -50px;
}
```

## 2、全屏显示
```
html, 
body {
    position: fixed;
    width: 100%;
    height: 100%;
}
div {
    height: 100%;
}
```
## 3、不同a标签链接使用不同样式

```
// link

a[href^="http://"]{
    background: url(link.gif) no-repeat center right;
}
// emails
a[href^="mailto:"]{
    background: url(email.png) no-repeat center right;
}

// pdfs

a[href$=".pdf"]{
    background: url(pdf.png) no-repeat center right;
}
```
## 4、图像灰度

```
img {
    filter: gray; 
    -webkit-filter: grayscale(1);
}
```
## 5、背景渐变动画

```
bg {
    background-image: linear-gradient(#5187c4, #1c2f45);
    background-size: auto 200%;
    background-position: 0 100%;
    transition: background-position 0.5s;
}    
bg:hover {
    background-position: 0 0;
}
```
## 6、长文本自动换行

```
pre {
    white-space: pre-line;
    word-wrap: break-word;
}
```
## 7、模糊文本
```
.text {
   filter: blur(1px);
}
```
## 8、用CSS动画实现省略号动画
```
.point:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ellipsis 2s infinite;
    content: "\2026";
}
@keyframes ellipsis {
    from {
        width: 2px;
    }
    to {
        width: 15px;
    }
}
```
## 9、样式重置
```
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html { height: 101%; }
body { font-size: 62.5%; line-height: 1; font-family: Arial, Tahoma, sans-serif; }
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }
ol, ul { list-style: none; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
strong { font-weight: bold; } 
table { border-collapse: collapse; border-spacing: 0; }
img { border: 0; max-width: 100%; }
p { font-size: 1.2em; line-height: 1.0em; color: #333; }
```

## 10、清除浮动
```
.clearfix:before, .container:after { content: ""; display: table; }
.clearfix:after { clear: both; }
.clearfix { zoom: 1; }
```
## 11、css元素透明
```
.transparent {
    filter: alpha(opacity=50); 
    -khtml-opacity: 0.5; 
    -moz-opacity: 0.5;   
    opacity: 0.5;     
}
```
## 12、CSS引用样式
```
blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: .5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: .1em;
    margin-right: .25em;
    vertical-align: -.4em;
}
blockquote p {
    display: inline;
}
```
## 13、个性圆角
```
.borderRadius {
    border-radius: 4px 3px 6px 10px;
}
.borderRadius {
    border-top-left-radius: 4px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 10px;
}
```

## 14、通用媒体查询
```

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* Styles */
}
@media only screen and (min-width : 321px) {
  /* Styles */
}
@media only screen and (max-width : 320px) {
  /* Styles */
}
/* iPad */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  /* Styles */
}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  /* Styles */
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
  /* Styles */
}
/* 桌面 */
@media only screen and (min-width : 1224px) {
  /* Styles */
}

@media only screen and (min-width : 1824px) {
  /* Styles */
}

@media only screen and (-webkit-min-device-pixel-ratio:1.5), only screen and (min-device-pixel-ratio:1.5) {
  /* Styles */
}
```
## 15、自定义文本选择
```
::selection { background: #e2eae2; }
```

## 16、图片边框偏光
```
img.polaroid {
    background:#000; 
    border:solid #fff;
    border-width:6px 6px 20px 6px;
    box-shadow:1px 1px 5px #333; 
    -webkit-box-shadow:1px 1px 5px #333;
    -moz-box-shadow:1px 1px 5px #333;
    height:200px; 
    width:200px;  
}
```
## 17、锚链接伪类
```
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: yellow; }
```

## 18、全屏背景图
```
html { 
    background: url('bg.jpg') no-repeat center center fixed; 
    background-size: cover;
}
```
## 19、内容垂直居中
```
.center {
    min-height: 6.5em;
    display: table-cell;
    vertical-align: middle;
}
```
## 20、强制出现垂直滚动条

```
html { height: 101% }
```

## 21、CSS3渐变模板
```
.bg {
    background: #629721;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#83b842), to(#629721));
    background-image: linear-gradient(top, #83b842, #629721);
}
```
## 22、@font-face引用

```
@font-face {
    font-family: 'MyWebFont';
    src: url('webfont.eot'); 
    src: url('webfont.eot?#iefix') 
    url('webfont.woff') format('woff'), 
    url('webfont.ttf')  format('truetype'),
    url('webfont.svg#svgFontName') format('svg');
}
body {
    font-family: 'MyWebFont', Arial, sans-serif;
}
```

## 23、连接CSS3元素
```
p {
    position:relative;
    z-index:1;
    padding: 10px;
    margin: 10px;
    font-size: 21px;
    line-height: 1.3em;
    color: #fff;
    background: #ff0030;
    box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10,10,0,.5);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
p:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 3px;
    bottom: 3px;
    left :3px;
    right: 3px;
    border: 2px dashed #fff;
}
p a {
    color: #fff;
    text-decoration:none;
}
p a:hover, p a:focus, p a:active {
    text-decoration:underline;
}
```
## 24、CSS斑马线
```
tbody tr:nth-child(odd) {
    background-color: #ccc;
}
```
## 25、 css&符号
```
.amp {
    font-family: Baskerville, 'Goudy Old Style', Palatino, 'Book Antiqua', serif;
    font-style: italic;
    font-weight: normal;
}
```
## 26、内盒阴影
```
.div { 
    box-shadow: inset 2px 0 4px #000;
}
```
## 27、外盒阴影
```
.div { 
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.52);
}
```
## 28、三角形列表项目符号
```
ul {
    margin: 0.75em 0;
    padding: 0 1em;
    list-style: none;
}
li:before { 
    content: "";
    border-color: transparent #111;
    border-style: solid;
    border-width: 0.35em 0 0.35em 0.45em;
    display: block;
    height: 0;
    width: 0;
    left: -1em;
    top: 0.9em;
    position: relative;
}
```
## 29、固定宽度的居中布局
```
.div {
    width: 800px;
    margin: 0 auto;
}
```
## 30、CSS3列文本
```
.columnsText {
    text-align: justify;
    -webkit-column-count: 3;
    -webkit-column-gap: 12px;
    -webkit-column-rule: 1px solid #c4c8cc;
}
```
## 31、CSS固定页脚
```
footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 30px;
    width: 100%;
    background: #444;
}
```
## 32、设置浏览器最小高度
```
.div{
    min-height: 550px;
    height: auto !important;
    height: 550px;
}
```
## 33、CSS3输入效果
```
input[type=text] {
    transition: all 0.30s ease-in-out;
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #ddd;
}
input[type=text]:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
}
```
## 34、强制换行
```
pre {
    white-space: pre-wrap;        
    word-wrap: break-word;  
}
```

## 35、在可点击的项目上强制手型
```
.pointer {
    cursor: pointer;
}
```
## 36、网页顶部盒阴影
```
body:before {
    content: "";
    position: fixed;
    top: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.8);
    z-index: 100;
}
```
## 37、CSS3对话气泡
```
.line {
    background-color: #ededed;
    border: 2px solid #666;
    font-size: 35px;
    line-height: 1.3em;
    margin: 10px auto;
    padding: 10px;
    position: relative;
    text-align: center;
    width: 300px;
    border-radius: 20px;
    box-shadow: 0 0 5px #888;
}
.chat-bubble-arrow-border {
    border-color: #666 transparent transparent transparent;
    border-style: solid;
    border-width: 20px;
    height: 0;
    width: 0;
    position: absolute;
    bottom: -42px;
    left: 30px;
}
.chat-bubble-arrow {
    border-color: #ededed transparent transparent transparent;
    border-style: solid;
    border-width: 20px;
    height: 0;
    width: 0;
    position: absolute;
    bottom: -39px;
    left: 30px;
}
```


## 38、持久的列表排序
```
ol.chapters {
    list-style: none;
    margin-left: 0;
}
ol.chapters > li:before {
    content: counter(chapter) ". ";
    counter-increment: chapter;
    font-weight: bold;
    float: left;
    width: 40px;
}
ol.chapters li {
    clear: left;
}
ol.start {
    counter-reset: chapter;
}
ol.continue {
    counter-reset: chapter 11;
}
```
## 39、CSS悬浮提示文本
```
a { 
    border-bottom:1px solid #bbb;
    color:#666;
    display:inline-block;
    position:relative;
    text-decoration:none;
}
a:hover,
a:focus {
    color:#36c;
}
a:active {
    top:1px; 
}

a[data-tooltip]:after {
    border-top: 8px solid #222;
    border-top: 8px solid hsla(0,0%,0%,.85);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    content: "";
    display: none;
    height: 0;
    width: 0;
    left: 25%;
    position: absolute;
}
a[data-tooltip]:before {
    background: #222;
    background: hsla(0,0%,0%,.85);
    color: #f6f6f6;
    content: attr(data-tooltip);
    display: none;
    font-family: sans-serif;
    font-size: 14px;
    height: 32px;
    left: 0;
    line-height: 32px;
    padding: 0 15px;
    position: absolute;
    text-shadow: 0 1px 1px hsla(0,0%,0%,1);
    white-space: nowrap;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
}
a[data-tooltip]:hover:after {
    display: block;
    top: -9px;
}
a[data-tooltip]:hover:before {
    display: block;
    top: -41px;
}
a[data-tooltip]:active:after {
    top: -10px;
}
a[data-tooltip]:active:before {
    top: -42px;
}
```
## 40、深灰色的圆形按钮
```
.graybtn {
    box-shadow:inset 0px 1px 0px 0px #ffffff;
    background:gradient( linear, left top, left bottom, color-stop(0.05, #ffffff), color-stop(1, #d1d1d1) );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#d1d1d1');
    background-color:#ffffff;
    border-radius:6px;
    border:1px solid #dcdcdc;
    display:inline-block;
    color:#777777;
    font-family:arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:1px 1px 0px #ffffff;
}
.graybtn:hover {
    background:gradient( linear, left top, left bottom, color-stop(0.05, #d1d1d1), color-stop(1, #ffffff) );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#d1d1d1', endColorstr='#ffffff');
    background-color:#d1d1d1;
}
.graybtn:active {
    position:relative;
    top:1px;
}
```
## 41、显示a链接得URLs
```
@media print   {  
  a:after {  
    content: " [" attr(href) "] ";  
  }  
}
```
## 42、禁用移动Webkit的选择高亮
```
body {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```
## 43、CSS3 圆点图案
```
body {
    background: radial-gradient(circle, white 10%, transparent 10%),
    radial-gradient(circle, white 10%, black 10%) 50px 50px;
    background-size: 100px 100px;
}
```
## 44、CSS3 方格图案
```
body {
    background-color: white;
    background-image: linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), 
    linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
    background-size: 100px 100px;
    background-position: 0 0, 50px 50px;
}
```

## 45、CSS font属性缩写
```
p {
  font: italic small-caps bold 1.2em/1.0em Arial, Tahoma, Helvetica;
}
```
## 46、论文页面的卷曲效果
```
ul.box {
    position: relative;
    z-index: 1;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0; 
}
ul.box li {
    position: relative;
    float: left;
    width: 250px;
    height: 150px;
    padding: 0;
    border: 1px solid #efefef;
    margin: 0 30px 30px 0;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset; 
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset; 
}
ul.box li:before,
ul.box li:after {
    content: '';
    z-index: -1;
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 70%;
    max-width: 300px; /* avoid rotation causing ugly appearance at large container widths */
    max-height: 100px;
    height: 55%;
    -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    -webkit-transform: skew(-15deg) rotate(-6deg);
    -moz-transform: skew(-15deg) rotate(-6deg);
    -ms-transform: skew(-15deg) rotate(-6deg);
    -o-transform: skew(-15deg) rotate(-6deg);
    transform: skew(-15deg) rotate(-6deg); 
}
ul.box li:after {
    left: auto;
    right: 10px;
    -webkit-transform: skew(15deg) rotate(6deg);
    -moz-transform: skew(15deg) rotate(6deg);
    -ms-transform: skew(15deg) rotate(6deg);
    -o-transform: skew(15deg) rotate(6deg);
    transform: skew(15deg) rotate(6deg); 
}
```
## 47、鲜艳的锚链接
```
a {
    color: #00e;
}
a:visited {
    color: #551a8b;
}
a:hover {
    color: #06e;
}
a:focus {
    outline: thin dotted;
}
a:hover, a:active {
    outline: 0;
}
a, a:visited, a:active {
    text-decoration: none;
    color: #fff;
    transition: all .3s ease-in-out;
}
a:hover, .glow {
    color: #ff0;
    text-shadow: 0 0 10px #ff0;
}
```
## 48、带CSS3特色的横幅显示
```
.featureBanner {
    position: relative;
    margin: 20px
}
.featureBanner:before {
    content: "Featured";
    position: absolute;
    top: 5px;
    left: -8px;
    padding-right: 10px;
    color: #232323;
    font-weight: bold;
    height: 0px;
    border: 15px solid #ffa200;
    border-right-color: transparent;
    line-height: 0px;
    box-shadow: -0px 5px 5px -5px #000;
    z-index: 1;
}
.featureBanner:after {
    content: "";
    position: absolute;
    top: 35px;
    left: -8px;
    border: 4px solid #89540c;
    border-left-color: transparent;
    border-bottom-color: transparent;
}
```

## 49、限制单行文本超出显示省略号
```
div{
    width: 65px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
}

```

## 50、限制多行文本超出省略号

```
div{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
```
## 51、css三角形绘制
```
.sj {
    width: 0; 
    height: 0;
    border-width: 100px;
    border-style: solid;
}

.sj-left {
    border-color: transparent pink transparent transparent;
}

.sj-right {
    border-color: transparent transparent transparent pink;
}

.sj-top {
    border-color: transparent transparent pink transparent;
}

.sj-bottom {
    border-color: pink transparent transparent transparent;
}
```
## 52、自适应文本框自动换行，限宽不限高
```
div{
    display: inline-block;
    min-height: 15px;
    max-width: 78%;
    padding: 12px 10px;
    text-align: left;
    font-family: Microsoft YaHei;
    word-wrap: break-word;
}
```

## 53、  ~选择器：查找某一个元素后面的所有兄弟元素 
    
```
例如     .test~.name{background:red}
```

## 54、 +选择器：查找某一个元素后面紧邻的兄弟元素

```
例如     .test+.name{background:red}
```

## 55、 用 font-size ：0 来清除边距    
  
## 56、  利用padding实现等比例缩放的盒子

```
最外层容器{
    display:flex;
    display:flex-box;
    flex-wrap:warp;
}
最外层容器 > 子元素{
    flex-basis:25%;
}
最外层容器 > 子元素 > 父元素{
    width:100%;
    padding-top:75%;
    position:relative;
}
最外层容器 > 子元素 > 父元素 > 子元素{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
}
```

     
## 57、利用pointer-events禁用事件光标变成default阻止hover和hover以及JavaScript 点击事件的触发
       
```
pointer-events:none;
```

## 58、利用 max-width  防止图片撑破容器

```
img{
    max-width：100%；
    display：inline-block;
}
```
          
## 59、伪类和伪元素的用法
          
           
```

// 伪类是用 : 来表示，伪元素是用 :: 来表示

    常见的伪类有：
    :hover
    :active
    :focus
    :visited
    :link
    :lang
    :first-child
    :last-child
    :not
    :nth-child
           
// 伪元素就是不存在DOM文档树中的虚拟元素，它们和HTML元素一样，但是你又无法使用javascript去获取

常见伪元素
    ::before
    ::after
    ::first-letter
    ::first-line 
           
           
用 :valid  和 :invalid 来做表单验证

    html5 提供了类似required Email tel 等表单属性
    :required // 指定具有required属性的表单元素
    :valid // 指定一个通过匹配正确的所要求的表单元素
    :invalid // 指定一个不匹配指定要求的表单元素

<input type="text" required />   
    input:vaild{    如果输入文字则变成绿色
        border:1px solid green;
        box-shadow:inset 10px 0 0 green;
    }
    input:invaild{   如果没有输入则是红色
        border:1px solid red;
        box-shadow:inset 10px 0 0 red;
    }
            
            
用:target来实现折叠面板


用:not来排除其他选择器
  :not([readonly]):not([.disabled]):not([text])  等
  
用:nth-child 来实现各行变色
  :nth-child(2n+1){background:red;}
  :nth-child(2n){backgorund:blue;}
  

用::selection 来美化选中文本
    p::selection{
        background:red;
        color:green;
    }

用::placeholder 美化输入框占位符样式
    ::placeholder{
        color:Red;
    }
   
用::first-letter 来实现段落首字下沉
    p::first-letter{
        font-size:30px;
        color:Red;
        padding:20px;
    }

用::first-line 来标记段落的第一行
    p::first-line{
        color:red;
    }
```
## 60、footer永远在页面底部


```
<style>
body {
  position:absolute;
  width:100%;
  min-height:100%; 
}
#app {
  padding-bottom: 200px;
  height: 100%; 
  font-family: "Microsoft Yahei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  min-width: 1190px;
}
</style>
footer {
  clear: both;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background: #000;
  color: #fff;
  min-width: 1200px;
  height: 200px;
}
```
## 61、两个子元素 一个有内容自动撑开，另一个为空如何跟随高度。


```
.f{
    display: flex;
    align-items: stretch;
}
```
## 62、消除transition闪屏

```
.css {
    transform: translate3d(0,0,0);
}
```

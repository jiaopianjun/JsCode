### 1. 身份证校验


```
const reg =/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
console.log(reg.test(320874199709084732))
```
### 2. 根据身份证获取出生年月日


```
function getBirthdayFromIdCard(idCard) {  
  var birthday = "";  
  if(idCard != null && idCard != ""){  
    if(idCard.length == 15){  
      birthday = "19"+idCard.substr(6,6);  
    } else if(idCard.length == 18){  
      birthday = idCard.substr(6,8);  
    }  
    birthday = birthday.replace(/(.{4})(.{2})/,"$1-$2-");  
  }  
  return birthday;  
}
```

### 3. 手机规则校验
```
const reg = /^1[3456789]\d{9}$/;
console.log(reg.test(13879763331))

```
### 4. 用户名正则
```
//用户名正则，4到16位（字母，数字，下划线，减号）
const reg = /^[a-zA-Z0-9_-]{4,16}$/;
//输出 true
console.log(ref.test("小夭同学"));
```

### 5. 密码强度正则

```
//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
const reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
//输出 true
console.log("=="+reg.test("infopush#"));
```
### 6. 整数正则

```
//正整数正则
const posReg = /^\d+$/;
//负整数正则
const negReg = /^-\d+$/;
//整数正则
const numReg = /^-?\d+$/;
//输出 true
console.log(posReg.test("42"));
//输出 true
console.log(negReg.test("-42"));
//输出 true
console.log(numReg.test("-42"));
```
### 7. 数字正则

```
//正数正则
const posReg = /^\d*\.?\d+$/;
//负数正则
const negReg = /^-\d*\.?\d+$/;
//数字正则
const numReg = /^-?\d*\.?\d+$/;
console.log(posReg.test("42.2"));
console.log(negReg.test("-42.2"));
console.log(numReg.test("-42.2"));
```

### 8. Email正则

```
//Email正则
const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//输出 true
console.log(reg.test(" 222299154507@qq.com"));
```


### 9. URL正则

```
//URL正则
const reg= /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
//输出 true
console.log(reg.test("http://lieme.cn"));
```

### 10. IPv4地址正则

```
//ipv4地址正则
const reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//输出 true
console.log(reg.test("115.28.47.26"));
```

### 11. 日期正则

```
//日期正则，简单判定,未做月份及日期的判定
const reg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;
//输出 true
console.log(reg.test("2017-05-11"));
//输出 true
console.log(reg.test("2017-15-11"));
//日期正则，复杂判定
const reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
//输出 true
console.log(reg.test("2017-02-11"));
//输出 false
console.log(reg.test("2017-15-11"));
//输出 false
console.log(reg.test("2017-02-29"));
```

### 12. QQ号码正则

```
//QQ号正则，5至11位
const reg = /^[1-9][0-9]{4,10}$/;
//输出 true
console.log(reg.test("11111"));
```


### 13. 微信号正则

```
//微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
const reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
//输出 true
console.log(reg.test("infopush"));
```

### 14. 车牌号正则  

```
//车牌号正则
const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
//输出 true
console.log(reg.test("苏B39006"));
```

### 15. 包含中文正则

```
//包含中文正则
const reg = /[\u4E00-\u9FA5]/;
//输出 true
console.log(reg.test("小夭同学"));
```

### 16. 匹配中文字符


```
const reg = /[\u4e00-\u9fa5]/gm
console.log(reg.test('小夭同学')
```

### 17. 匹配双字节字符


```
const reg = /[^\x00-\xff]/igm
console.log(reg.test('1212')
```


18. 匹配首位空白


```
const reg = /(^\s*)|(\s*$)/
console.log(reg.test(' d ')
```

### 19. 只能为数字

```
const reg = /^\d+$/
console.log(reg.test(112))
```

### 20. 只能输入n个数字


```
const reg = /^\d{n}$/
console.log(reg.test(11111))
```


### 21. 至少输入n个数字


```
const reg = /^\d{n,}$/
console.log(reg.test(2222))
```

### 22. 只能输入 m 到 n 个数字


```
const reg = /^\d{m,n}$/
console.log(reg.test(1212))
```
### 23. 只能由字母组成


```
const reg = /^[a-z]+$/i
console.log(reg.rest('ddd'))
```
### 23. 只能由大写 或 小字母组成


```
const reg = /^[A-Z]+$/
console.log(reg.test(SSS))

const reg = /^[a-z]+$/
console.log(reg.test(sss))
```
### 24. 只能由英文和数字组成

```
const reg = /^[a-z0-9]+$/i
console.log(reg.test(333ffF))
```

### 25. 只能英文、数字、下划线组成


```
const reg = /^\w+$/
console.log(reg.test(dd33_))
```

### 26. 带两位小数点的正数或负数


```
const reg =^(\-)?\d+(\.\d{1,2})?$
console.log(reg.test(11.11))
```

### 27. 带+、-的整数

```
const reg = /^[+-]?[0-9]+$/
console.log(reg.test(-11.11))
```
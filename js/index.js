var v = new Vue({
  el: ".index",
  data: {
    onlist: [],
    moreList: [],
    weatherUrl:'http://api.jiaopianjun.cc/jsonp.php',
    serchInput:false,
    msg:false,
    city:'',
    errts: false,
    errtsText:'丢不概括地讲',
    loading:true,
    pushText:'',
    name:'city',
    os:'',
    phone:''
  },
  computed: {
  },
  methods:{
    cAddress:function(){
      this.serchInput = true
    },
    go:function(){
      if($('.WserchInput').val() != ''){
        this.weather($('.WserchInput').val())
      }else{
        this.errtsText = '请输入要查询的城市'
        this.errts = true
      }
    },
    weather:function(cityName){
     var _this = this
     getJsonp(_this.weatherUrl,{"city":cityName}).done(function(res){
        if(res.status == 200){
          _this.moreList = res.data.forecast
          _this.onlist = res.data
          _this.city = cityName
          _this.msg =_this.errts = false
          _this.push();
        }else if(res.message == "Check the parameters."){
          _this.errtsText = '对不起没有找到您要搜索的结果'
          _this.errts = true
        }else if(res.status == 304){
          _this.errtsText = '对不起您太快了~~请慢一点~~'
          _this.errts = true
        }
        setTimeout(function(){
          _this.loading = false
        },200)
      });
    },
    textScroll:function(){
      var num = 0;
      function goLeft() {
          if (num == -395) {
              num = 0;
          }
          num -= 1;
          $(".Rnotice p").css({
              left: num
          })
      }
      var timer = setInterval(goLeft, 20);
    },
    location:function(){
      var _this = this
      $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(_result) {  
        if(remote_ip_info.ret == '1') {  
          cityName = remote_ip_info['city'];  
          if (cityName != '') {
            _this.city = cityName
            if(_this.name == ''){
              _this.weather(cityName);
            } else{
              _this.weather(_this.name);
            }
          }else{
            _this.loading = false
            _this.msg = true
            _this.city = '请手动选择'
          }
        }  
      });  
    },
    Jq:function(){
      $(".WserchInput").focus(function(){
        this.errts = false
      })
      $(".WserchInput").keydown(function (event) {//上下键获取焦点   
        var key = event.keyCode;  
        if (key == 13) $('.WserchBtn').trigger('click'); /*回车搜索*/  
      });
    },
    getNowFormatDate:function() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    getParam: function(name){
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == name){
          return pair[1];
        }
      }
      return '';
    },
    push:function(){
      this.pushText = '#'+_this.moreList[0].type+'\n\nHigh： '+this.moreList[0].high+'\n\nLow ： '+this.moreList[0].low+'\n\n日 出： '+this.moreList[0].sunrise+'\n\n日 落： '+this.moreList[0].sunset+'\n\n风 向： '+this.moreList[0].fx+this.moreList[0].fl+'\n\nAqi：'+this.moreList[0].aqi+'\n\n湿度：'+this.onlist.shidu+'\n\n空气质量：'+this.onlist.quality+'\n\n来自坐标：'+this.city+'系统为'+this.os+'的'+this.phone+'手机'
      console.log(this.pushText)
      var data = {
                  "sendkey": "2711-8ba650b3fa92ae0c41a9492f7fb65e30",
                  "text": this.city+"天气("+this.getNowFormatDate()+")",
                  "desp": this.pushText
                }
      getJsonp2('http://api.jiaopianjun.cc/push.php',{"data":data}).done(function(res){
      })
    },
    getMobileType:function(){
      Array.prototype.contains = function(needle) {  
          for (i in this) {  
              if (this[i].indexOf(needle) > 0)  
                  return i;  
          }  
          return -1;  
      }  
      var device_type = navigator.userAgent;//获取userAgent信息  
      var md = new MobileDetect(device_type);//初始化mobile-detect  
      var os = md.os();//获取系统  
      var model = "";  
      if (os == "iOS") {//ios系统的处理  
          os = md.os() + md.version("iPhone");  
          model = md.mobile();  
      } else if (os == "AndroidOS") {//Android系统的处理  
          os = md.os() + md.version("Android");  
          var sss = device_type.split(";");  
          var i = sss.contains("Build/");  
          if (i > -1) {  
              model = sss[i].substring(0, sss[i].indexOf("Build/"));  
          }  
      }
      this.phone = model
      this.os = os 
    }
  },
  mounted:function (){
    var _this  = this;
    _this.name = decodeURIComponent(_this.getParam(_this.name));
    console.log(_this.name)
    _this.location();
    _this.textScroll();
    _this.Jq();
    _this.getMobileType();
  }
})
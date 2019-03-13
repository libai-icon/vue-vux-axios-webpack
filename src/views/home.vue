<template>

    <div style="font-size:14px;background-color: #cccccc;">
        <div>
            <div class="home">
            <flexbox :gutter="0" >
                <flexbox-item :span="1/7"><img src="static/images/home/Driverxxhdpi.png" alt=""  style="width:80%;"></flexbox-item>
                <flexbox-item :span="1/5">
                    <div>张三</div>
                    <div>沪EC7909</div>
                </flexbox-item>
                <flexbox-item :span="1/2">
                    <div>KPI:90</div>
                    <div><rater v-model="rater" disabled></rater></div>
                </flexbox-item>
                <flexbox-item :span="1/7">
                    <!-- <qrcode value="static/images/home/cli.png" type="img"></qrcode> -->
                    <img src="static/images/home/cli.png"  style="width:100%" alt="" v-on:click="map">
                </flexbox-item>
            </flexbox>
            <flexbox :gutter="0" style="text-align:center">
                <flexbox-item :span="1/4">
                    <div class="list">
                        <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                        <div>扫描装车</div>
                    </div>
                </flexbox-item>
                <flexbox-item :span="1/4">
                    <div class="list">
                        <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                        <div>扫描装车</div>
                    </div>
                </flexbox-item>
                <flexbox-item :span="1/4">
                    <div class="list">
                        <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                        <div>扫描装车</div>
                    </div>
                </flexbox-item>
                <flexbox-item :span="1/4">
                    <div class="list">
                        <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                        <div>扫描装车</div>
                    </div>
                </flexbox-item>
            </flexbox> 
            </div>
            <div class="home1">
                <flexbox :gutter="0" style="text-align:center">
                    <flexbox-item :span="1/4">
                        <div class="list">
                            <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                            <div>扫描装车</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="list">
                            <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                            <div>扫描装车</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="list">
                            <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                            <div>扫描装车</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="list">
                            <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                            <div>扫描装车</div>
                        </div>
                    </flexbox-item>
                </flexbox> 
                <flexbox :gutter="0" style="text-align:center">
                    <flexbox-item :span="1/4">
                        <div class="list">
                            <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                            <div>扫描装车</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="list">
                            <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                            <div>扫描装车</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="list">
                            <img src="static/images/home/entruckinghdpi.png" class="imgWidth" alt="">
                            <div>扫描装车</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                    
                    </flexbox-item>
                </flexbox> 
            </div>
        </div>
        <div style="margin-top:10px;background-color: #ffffff;padding-top:10px">
            <div style="position: relative;" id="view">
                <myScroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
                    <div>
                    <div  v-for="item in lists" v-on:click="submit(item)">
                            <flexbox :gutter="0" wrap="wrap" class="listBorder" >
                                <flexbox-item :span="11/12"><div class="flex-demo">
                                <div class="listScroll">
                                    <img src="static/images/home/overhdpi.png" class="listScrollImg" alt="">
                                    <div>
                                        <div class="flag">
                                            <img class="flagImg" src="static/images/home/Label-yellhdpi.png" alt="">
                                            <div class="falgtitle">市</div>
                                        </div>
                                        <div  class="flag"> 
                                            <img src="static/images/home/Label-yellhdpi.png" class="flagImg"  alt=""> 
                                            <span class="falgtitle">市</span> 
                                        </div>
                                    </div>
                                    <div  class="content">
                                        <div>运单号：<span style="color:rgb(128, 136, 137)">{{item.code}}</span></div>
                                        <div>摘要：<span style="color:rgb(128, 136, 137)">{{item.content}}</span></div>
                                    </div>
                                
                                </div>
                                </div></flexbox-item>
                                <flexbox-item :span="1/12"><div class="flex-demo"><x-icon type="ios-arrow-forward" size="30"></x-icon></div></flexbox-item>
                            </flexbox>
                    </div>
                    </div>
                 </myScroll>
                </div>
        </div>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem,Icon,Group,Cell,Rater,Qrcode,InlineLoading} from 'vux'
import { setTimeout } from 'timers';
import myScroll from '../components/myScroll/myScroll.vue';
// import Scroll from '../components/myScroll/myScroll.vue';
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Icon,Group,Cell,Rater,Qrcode,InlineLoading,myScroll
  },
   data () {
      return {
        refreashType:false,
        lists:[],
        rater:4,
        counter: 1, //当前页
        num: 10, // 一页显示多少条
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 下拉更新数据存放数组
        downdata: [], // 上拉更多的数据存放数组
        scrollData:{
            noFlag: false //暂无更多数据显示
        }
      }
    },
    mounted () {
        
        this.getNewsList();
    },
    updated(){
        let windowHeight=window.innerHeight;
        let divHeight=document.getElementById('view').offsetTop;
        document.getElementById('view').style.height = windowHeight-divHeight-8+'px'
        console.log(windowHeight)
        console.log(divHeight)
    },
    methods: {
        hideRef:function(value){
            var _this = this;
            setTimeout(function(){
                    _this.refreashType = false;
                },value)
        },
        getList:function(params){
            return this.$axios.post('https://www.easy-mock.com/mock/5bda66a4cd0e9e45c2074509/example/getList',params);
        },
        getListCallback:function(params){
            this.getList(params).then(res => {
                this.showloading = false;
                this.hideRef(100)
                
                this.lists = res.data.data.list;
            });
        },
        //第一次加载的时候容易为空true
        getNewsList () {
            this.showloading = true
    　　　　 this.getListCallback({pageSize:this.PageSize,pageNum:this.PageIndex});
        
        }, 
        onRefresh(done) {
            done(); // call done
        },
        onInfinite(done) {
            this.counter++;
            let end = this.pageEnd = this.num * this.counter;
            let i = this.pageStart = this.pageEnd - this.num;
            let more = this.$el.querySelector('.load-more')
            for(i; i < end; i++) {
                if(i >= 30) {
                    more.style.display = 'none'; //隐藏加载条
                    //走完数据调用方法
                    this.scrollData.noFlag = true;
                    break;
                } else {
                    this.downdata.push({
                        name: i + "==="
                    })
                    more.style.display = 'none'; //隐藏加载条
                }
            }
            done();
        },
        submit:function(item){
            
            this.$router.push({ name: 'showCli', params: { userId: 123 }});
        },
        map:function(){
            this.$router.push({ name: 'map', params: { userId: 123 }});
        }
    },
    
  }
</script>


<style>
    /* import url('static/css/common.css'); */
    *{margin: 0; padding: 0;border: 0}
    .home{
        padding: 10px 10px 0 10px;
        background-color: #0099FF;
        color: #ffffff;
    }
    .list{
        padding: 10px;
    }
    .imgWidth{
        width: 50%;
    }
    .home1{
        padding: 0px 10px 0 10px;
        background-color: #ffffff;
    }
   .flagImg{
       width: 20px;
       
   }
   .flag{
       display: inline-block;
       position: relative; 
       width: 20px;
   }
    .falgtitle{
       color: #fff;
        position: absolute;
        top: 10%;
        left: 15%;
        font-size: 12px;
    }
    .listScroll{
        position: relative;
       
        padding: 0 10px;
    }
    .listScrollImg{
        position: absolute;
        right: 10%;
    }
    .content{
            margin-bottom: 10px;
    }
    .listBorder{
         border-top: 1px #ddd solid;
        border-bottom: 1px #ddd solid;
        margin-bottom: 5px;
    }
</style>
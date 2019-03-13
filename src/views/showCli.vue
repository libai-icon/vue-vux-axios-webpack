<template>
    <div >
        <div style="font-size:14px;background-color: #cccccc;">
            <!-- <div style="font-size:14px;background-color: #fff;">
                <div class="title">运单号：201812111325216564</div>
                <div class="title">发布日期：2018-12-11</div>
                <div class="title">商品车数量：9</div>
                <div class="title">摘要：上海市-市(2/+9)上海市-市(1/-1)杭州市(3/-4)常州市(1/-1)长沙市(1/-2)怀化市(1/-1)</div>
            </div> -->
            <div style="font-size:14px;background-color: #fff;">
                <div style="margin:8px;">
                    <flexbox :gutter="0" style="text-align:center">
                        <flexbox-item :span="5/7" style="text-align:left;">
                            <div class="title">运单号：<span style="color:rgb(128, 136, 137)">201812111325216564</span></div>
                            <div class="title">发布日期：<span style="color:rgb(128, 136, 137)">2018-12-11</span></div>
                            <div class="title">商品车数量：<span style="color:rgb(128, 136, 137)">9</span></div>
                        </flexbox-item>
                        <flexbox-item :span="2/7" style="text-align: right;">
                        <div>
                            <div class="flag">
                                <img class="flagImg" src="static/images/home/Label-yellhdpi.png" alt="">
                                <div class="falgtitle">市</div>
                            </div>
                                <div class="flag">
                                <img class="flagImg" src="static/images/home/Label-yellhdpi.png" alt="">
                                <div class="falgtitle">市</div>
                            </div>
                                <div class="flag">
                                <img class="flagImg" src="static/images/home/Label-yellhdpi.png" alt="">
                                <div class="falgtitle">市</div>
                            </div>
                        </div>
                        <div>
                            <div class="flag">
                                <img class="flagImg" src="static/images/home/Label-yellhdpi.png" alt="">
                                <div class="falgtitle">市</div>
                            </div>
                                <div class="flag">
                                <img class="flagImg" src="static/images/home/Label-yellhdpi.png" alt="">
                                <div class="falgtitle">市</div>
                            </div>
                                <div class="flag">
                                <img class="flagImg" src="static/images/home/Label-yellhdpi.png" alt="">
                                <div class="falgtitle">市</div>
                            </div>
                        </div>
                        </flexbox-item>
                    
                    </flexbox> 
                    <div>
                        摘要：<span style="color:rgb(128, 136, 137)">上海市-市(2/+9)上海市-市(1/-1)杭州市(3/-4)常州市(1/-1)长沙市(1/-2)怀化市(1/-1) </span>
                    </div>
                    <flexbox :gutter="0" style="text-align:center">
                        <flexbox-item :span="5/7" style="text-align:left;" >
                            <div class="title" style="color:red;">指定装车时间：<span style="color:rgb(128, 136, 137)">2018-12-11 14:00</span></div>
                        </flexbox-item>
                    
                        <flexbox-item :span="2/7">
                            <div style="color:red;">
                            未接单
                            </div>
                        </flexbox-item>
                    
                    </flexbox> 
                    <div class="submitButton1">
                        <x-button mini type="primary"  class="submitButton">确认接单</x-button>
                    </div>
                </div>
                 <tab bar-active-color="#0099FF" active-color="#0099FF">
                    <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
                    <tab-item @on-item-click="onItemClick">未发货</tab-item>
                    <tab-item @on-item-click="onItemClick">全部订单</tab-item>
                </tab>
                <div style="position: relative;" id="view">
                    <myScroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
                        <div>
                            <div style="border: 1px #ddd solid; padding: 0 5px;margin-bottom:5px;"  v-for="item in lists"> 
                                <div style="line-height: 3;border-bottom: 1px #ddd solid;">
                                    车架号：YZAAAAAAAAAA01895 <span style="color:rgb(128, 136, 137)"></span>
                                </div>
                                <div style="font-size:13px;color:#808889">
                                    <div style="line-height:2;">
                                        品牌：保时捷
                                    </div>
                                    <div style="line-height:2;">
                                        车型：The New Cayenne	
                                    </div>
                                    <div style="line-height:2;">
                                        起运地：外六海通
                                    </div>
                                    <div style="line-height:2;">
                                        目的地：上海浦东保时捷中心
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </myScroll>
                </div>
                
                <!-- <div style="padding-top:5px;" v-swipeup="swipeup">
                   
                   
                    <transition name="router-slid">
                        <div style="text-align:center;" v-show="loadingType"> <inline-loading>加载中...</inline-loading></div>
                    </transition>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem,Icon,Group,Cell,Rater,Qrcode,XButton, Tab, TabItem,FormPreview,InlineLoading} from 'vux'
import { setTimeout } from 'timers';
import myScroll from '../components/myScroll/myScroll.vue';
export default {
  components: {
    Flexbox,FlexboxItem,Icon,Group,Cell,Rater,Qrcode,XButton, Tab, TabItem,FormPreview,InlineLoading,myScroll
  },
   data () {
      return {
        loadingType:false,
        lists:[],
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
        let a =  this.$route.params.userId
         this.getListCallback({});
    },
    updated(){
        let windowHeight=window.innerHeight;
        let divHeight=document.getElementById('view').offsetTop;
        document.getElementById('view').style.height = windowHeight-divHeight-8+'px'
        console.log(windowHeight)
        console.log(divHeight)
    },
    methods: {
         showRef:function(value){
            var _this = this;
            setTimeout(function(){
                    _this.loadingType = true;
                },value)
        },
        onItemClick:function(){
            
        },
        swipeup:function(){
            this.showRef(100)
            this.getListCallback({});
        },
        getList:function(params){
            return this.$axios.post('https://www.easy-mock.com/mock/5bda66a4cd0e9e45c2074509/example/getList',params);
        },
        getListCallback:function(params){
            this.getList(params).then(res => {
                this.loadingType = false;
                this.lists = res.data.data.list;
            });
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
        }
    },
    
  }
</script>


<style>
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
    .submitButton{
        background-color: #0099FF !important;  
    }
   .submitButton1{
        text-align: right;
    }
    .title{
        line-height: 2;
    }
</style>
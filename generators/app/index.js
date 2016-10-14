<
!DOCTYPE
html > < html
lang = "en" > < head > < meta
charset = "UTF-8" > < meta
name = "viewport"
content = "width=device-width,initial-scale=1" > < meta
http - equiv = "X-UA-Compatible"
content = "ie=edge" > < title > < / title > < / head > < body > < !--vendor
style
start-- > < link
rel = "stylesheet"
href = "./bower_components/webkit-scss-material/dist/style.css" > < link
rel = "stylesheet"
href = "./bower_components/flex-grid/dist/style.css" > < link
rel = "stylesheet"
href = "./bower_components/swiper/dist/css/swiper.min.css" > < link
rel = "stylesheet"
href = "./bower_components/animate.css/animate.min.css" > < link
rel = "stylesheet"
href = "./styles/components.css" > < style > [v - cloak]
{
  display: none;
}
</
style > < float - tip > < / float - tip > < is - loading > < / is - loading > < toastr > < / toastr > < !--vendor
style
end-- > < float - tip > < / float - tip > < div
class
= "topic-detail" > < div
v -
if= "isSuccess" class
= "f14 py10 topic-success bg-f" > < header > < member - item
:
vm = "detail"
:
seal = "detail.identifyResult" > < / member - item > < / header > < div
class
= "blank-10" > < / div > < section
class
= "media" > < div
class
= "dc-img"
v -
for= "item in detail.attachments | toArray" v -
if= "detail.attachmentType=='IMAGE'" > < a v - on
:
click = "showPhotoSwipe($index,detail.attachments)" > < img
v - cloak
class
= "wp-10"
:
src = "item | toQiNiuImg" > < div
class
= "blank-10" > < / div > < / a > < / div > < div
class
= "dc-img"
v -
if= "detail.attachmentType=='VIDEO'" > < video v - cloak
class
= "dc-video"
preload = "auto"
controls = "controls"
:
poster = "detail.coverPage | toQiNiuImg" > < source
:
src = "detail.attachments | toQiNiuImg"
type = "video/mp4" > < / video > < / div > < / section > < a
class
= "row row-no-padding link-share row-center"
v -
if= "detail.linkFileName" > < div class
= "left" > < img
v - cloak
:
src = "detail.linkFileName | toQiNiuImg" > < / div > < div
class
= "col right" > < span
v - cloak > {
{
  detail.linkTitle
}
}</
span > < / div > < / a > < div
class
= "px10" > < div
v - cloak
class
= "mb10 c-8 f14 dc-content" > {
{
  {
    detail.content | nl2br
  }
}
}</
div > < div
v - cloak
class
= "mb10 c-8 timeago" > {
{
  detail.createTime
}
}</
div > < !--upvoted - list
start-- > < div
class
= "mb10 upvoted-list"
v -
if= "upvoted_list.length>0" > < div class
= "row" > < div
class
= "col-u-10 dib_ mr5_ dc-list row" > < div
class
= "dc-item"
v -
for= "item in upvoted_list" v -
if= "$index<6" > < img class
= "circle"
height = "32"
width = "32"
:
src = "item | toQiNiuImg" > < / div > < / div > < div
v - cloak
class
= "col-u-2 c-8 rel tr" > < span > {
{
  upvoted_list.length
}
}</
span > < / div > < / div > < / div > < !--upvoted - list
end-- > < div
v - cloak
class
= "c-8 hlh32"
v -
if= "reply_list.length>0" > 共{
  {
    reply_list.length
  }
}
条评论 < / div > < !--comments - list
start-- > < div
class
= "mb10 dc-list comments-list" > < comments - item
:
vm = "reply_list" > < / comments - item > < div
class
= "blank-50" > < / div > < / div > < !--comments - list
end-- > < / div > < / div > < div
hidden
class
= "topic-faild" > < div
class
= "faild-wh" > < figure
class
= "faild" > < img
src = "images/mdf_waring1_normal@3x.png"
class
= "faild-img" > < figcaption
class
= "faild-caption f14 c-8" > 该话题已经失效 < / figcaption > < / figure > < / div > < div
class
= "blank-20" > < / div > < div
class
= "faild-wh" > < article
class
= "sticky px10" > < div
class
= "f14 c-8 sticky-title" > 精华话题推荐 < / div > < div
v -
for= "item in sticky_list" > < a href = "topic-detail.html?post_id={{item.id}}" > < div
v - cloak
class
= "wp-10 lfix_ mt10 sticky-name f14 c-6" > < img
class
= "sticky-img"
:
src = "item.coverPage | toQiNiuImg" > {
{
  item.summary
}
}</
div > < / a > < / div > < / article > < / div > < / div > < / div > < !--Vendor
scripts
start-- > < script
src = "./bower_components/zepto/zepto.min.js" > < / script > < script
src = "./bower_components/vue/dist/vue.min.js" > < / script > < script
src = "./bower_components/photoswipe/dist/photoswipe.min.js" > < / script > < script
src = "./bower_components/photoswipe/dist/photoswipe-ui-default.js" > < / script > < script
src = "./bower_components/swiper/dist/js/swiper.min.js" > < / script > < script
src = "./bower_components/moment/moment.js" > < / script > < !--Vendor
scripts
end-- > < !--config
scripts
start-- > < script
src = "./services/app.resolution.js" > < / script > < script
src = "./services/app.config.js" > < / script > < script
src = "./services/api.service.js" > < / script > < script
src = "./services/app.service.js" > < / script > < script
src = "./services/app.filter.js" > < / script > < script
src = "./services/app.utils.js" > < / script > < !--config
scripts
end-- > < !--template
float - tip
start-- > < template
id = "float-tip-template" > < div
class
= "dc-tip" > < div
class
= "row dc-float-tip"
v -
if= "childVisible" > < div class
= "dc-flex-center-center col-u-2"
v - on
:
click = "childDownload()" > < img
src = "images/dc-logo@2x.png"
class
= "dc-logo" > < / div > < div
class
= "dc-flex-left-center col-u-6"
v - on
:
click = "childDownload()" > < div
class
= "dc-block" > < div
class
= "wp-10 f14 hlh20" > 龘藏 < / div > < div
class
= "wp-10 f12 lh14" > 指引方向
，
带你成长
，
一心做负责的拍卖平台 < / div > < / div > < / div > < div
class
= "dc-flex-center-center col-u-3"
v - on
:
click = "childDownload()" > < button
class
= "dc-download" > 立即下载 < / button > < / div > < div
class
= "dc-flex-center-center col-u-1"
v - on
:
click.stop.prevent = "childClose()" > < button
class
= "dc-close" > < / button > < / div > < / div > < div
class
= "dc-float-tip-popup"
v - on
:
click = "childCloseSafariTip()"
v -
if= "childPopupVisible" > < img class
= "full-image"
src = "images/live_weixin.png" > < / div > < / div > < / template > < !--template
float - tip
end-- > < script
src = "./includes/components/float-tip/index.js" > < / script > < !--template
member - item
start-- > < template
id = "member-item-template" > < div
class
= "member-item" > < div
class
= "member-item-msg row" > < div
class
= "col-u-2 dc-flex-center-center" > < img
v - cloak
class
= "circle member-icon"
:
src = "vm.memberIcon | toQiNiuImg" > < / div > < div
class
= "col-u-10 dc-flex-left-center" > < div
class
= "dc-block" > < div
v - cloak
class
= "wp-10 c-3 f14 dc-flex-left-top" > < div
class
= "dc-overflow-ellipsis"
:class
= "seal?'wp-8':'wp-10'" > {
{
  vm.memberNickname
}
}</
div > < / div > < div
class
= "wp-10 dc-flex-left-top" > < img
v - cloak
class
= "member-item-level"
width = "106"
:
src = "vm.memberLevel | toUserLevels" > < / div > < / div > < / div > < / div > < div
class
= "member-item-seal"
v -
if= "seal" > < img v - cloak
class
= "seal"
:
src = "seal | toJudgeImg"
v -
if= "seal" > < / div > < / div > < / template > < !--template member - item
end-- > < script
src = "./includes/components/member-item/index.js" > < / script > < !--template
comments - item
start-- > < template
id = "comments-item-template" > < div
class
= "comments-item"
v -
for= "item in vm" > < div class
= "member-item" > < div
class
= "member-item-msg row" > < div
class
= "col-u-2 dc-flex-center-center" > < img
v - cloak
class
= "circle member-icon"
:
src = "item.memberIcon | toQiNiuImg" > < / div > < div
class
= "col-u-10 dc-flex-left-center" > < div
class
= "dc-block" > < div
v - cloak
class
= "wp-10 c-3 f14 dc-flex-left-top" > < div
class
= "dc-overflow-ellipsis"
v - cloak
:class
= "item.masterReply?'c-8457':'c-3'" > {
{
  item.memberNickname
}
} <
img
class
= "replay-img"
src = "images/mdf_evaluate1@3x.png"
v -
if= "item.masterReply" > < / div > < / div > < div class
= "wp-10 dc-flex-left-top" > < img
v - cloak
class
= "member-item-level"
width = "106"
:
src = "item.memberLevel | toUserLevels" > < / div > < / div > < / div > < / div > < / div > < div
class
= "row" > < div
class
= "col-u-2" > < / div > < div
class
= "col-u-10 f14 c-8" > {
{
  item.content
}
}<
div
class
= "reply-list pr10" > < div
class
= "reply-jt" > < / div > < div
class
= "reply-div c-8 f12"
v -
for= "v in item.replyVoList" v - cloak > < span
v - cloak
:class
= "v.masterReply?'c-8457':'c-3'" > {
{
  v.memberNickname
}
}</
span > < img
class
= "replay-img"
src = "images/mdf_evaluate1@3x.png"
v -
if= "v.masterReply" > 回复 < span v - cloak
class
= "mr5"
:class
= "item.masterReply?'c-8457':'c-3'" > {
{
  v.parentReplyMemberNickname
}
}</
span > < img
class
= "replay-img"
src = "images/mdf_evaluate1@3x.png"
v -
if= "v.replyMaster" > < span class
= "reply-mh" >
:</
span > {
{
  v.content
}
}</
div > < / div > < / div > < / div > < / div > < / template > < !--template
comments - item
end-- > < script
src = "./includes/components/comments-item/index.js" > < / script > < !--
.
photo - swipe
Start-- > < link
rel = "stylesheet"
href = "./bower_components/photoswipe/dist/photoswipe.css" > < link
rel = "stylesheet"
href = "./bower_components/photoswipe/dist/default-skin/default-skin.css" > < !--Root
element
of
PhotoSwipe.Must
have
class pswp
.
-- > < div
class
= "pswp photo-swipe"
tabindex = "-1"
role = "dialog"
aria - hidden = "true" > < !--Background
of
PhotoSwipe.It
's a separate element as animating opacity is faster than rgba(). --><div class="pswp__bg"></div><!-- Slides wrapper with overflow:hidden. --><div class="pswp__scroll-wrap"><!-- Container that holds slides.
PhotoSwipe
keeps
only
3
of
them in the
DOM
to
save
memory.Don
't modify these 3 pswp__item elements, data is added later on. --><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. --><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><!--  Controls are self-explanatory. Order can be changed. --><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR --><!-- element will get class pswp__preloader--active when preloader is running --><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div><!-- .photo-swipe   End--> <a href="javascript:;" class="backToTop" title="返回顶部"></a><script src="./includes/components/back-top/index.js"></script><!-- App scripts start --><!--template is-loading start--><template id="is-loading-template"><div v-show="loadState" class="dc-loading-bg dc-flex-center-center" :class="noBg?'
':'
no - bg
'"><div class="dc-loading dc-flex-center-center"><img class="dc-loading-img" src="./images/dc-loading.gif"></div></div></template><!--template is-loading end--><script src="./includes/components/is-loading/index.js"></script><!--template toastr start--><template id="toastr-template"><div v-show="props.loadState" class="dc-toastr-bg dc-flex-center-center animated fadeInDown"><div class="dc-toastr"><div class="wp-10 dc-flex-center-center c-0 f14 dc-title">{{detail.title}}</div><div class="wp-10 dc-flex-center-top c-0 f12 dc-desc px10 pb10">{{detail.desc}}</div><div class="row wp-10" v-if="props.loadType=='
info
'"><div class="col-u-12 dc-flex-center-center f12 dc-confirm c-blue" v-on:click="dcSuccess()">好的</div></div><div class="row wp-10" v-if="props.loadType=='
confirm
'"><div class="col-u-6 dc-flex-center-center f12 dc-cancel c-blue" v-on:click="dcCancel()">取消</div><div class="col-u-6 dc-flex-center-center f12 dc-confirm c-blue" v-on:click="dcConfirm()">确认</div></div></div></div></template><!--template toastr end--><script src="./includes/components/toastr/index.js"></script><script src="scripts/topic-detail.js"></script><link rel="stylesheet" href="styles/topic-detail.css"><!-- App scripts end --></body></html>

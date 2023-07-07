var posts=["2023/07/07/Ubuntu22.04安装docker/","2023/07/07/hello-world/","2023/05/07/凡人/","2023/05/07/凡人赋/","2023/05/20/后台发布文章测试/","2023/05/07/文章创建模板/","2023/05/19/文章测试/","2023/05/07/文章页面参数详解/","2023/05/19/更新主题时魔改部分/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"摸鱼星球","hundredSuffix":"!w12e","link":"https://moyustar.cn/","avatar":"https://moyustar.cn/icon.png","descr":"斯人若彩虹，遇见方知有","siteshot":"https://moyustar.cn/fengmian.png"},{"name":"天一尚客","link":"https://tianyishangke.cn/","avatar":"https://tianyishangke-1315109146.cos.ap-beijing.myqcloud.com/tianyishangke/2023/04/20230414225452549.png","descr":"优质的技术资源综合类分享教程博客平台","siteshot":"https://moyustar-1315109146.cos.ap-beijing.myqcloud.com/moyustar/20230606204432.png"},{"name":"安知鱼`Blog","link":"https://blog.anheyu.com/","avatar":"https://img01.anheyu.com/useruploads/90/2023/04/23/6444e85234e51.jpg","descr":"生活明朗，万物可爱"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://blog.kouseki.cn/imgs/siteshot.webp"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/646cdb372913c.webp!avatar","descr":"分享网络安全与科技生活","siteshot":"https://avatar.qjqq.cn/1/647571edf20a9.webp!avatar"},{"name":"rencai","link":"https://btrencai.top","avatar":"https://img01.anheyu.com/useruploads/122/2023/04/09/64323d86807fb.jpg","descr":"今天你学了么","siteshot":"https://img01.anheyu.com/useruploads/122/2023/04/25/644754d072ba1.png"},{"name":"清空","link":"https://qk.it-02.cf/","avatar":"https://thirdqq.qlogo.cn/g?b=oidb&k=PymSMckVIj6fSN6P8UXKAQ&s=100&t=1660392840","descr":"天天打工，何时是个头啊～","siteshot":"http://pic.netbian.com/uploads/allimg/230605/235004-1685980204f695.jpg"},{"name":"Ganzhe","link":"https://ganzhe2028.github.io/","avatar":"https://img01.anheyu.com/useruploads/151/2023/05/12/645dac23c60a2.jpg","descr":"顺其自然，持之以恒"},{"name":"小植の小破站","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","siteshot":"https://img.xiaoztx.top/img/202305052357287.png","descr":"生生不息，好运不止"},{"name":"米粒个人博客","link":"https://luomengguo.top/","avatar":"https://img01.anheyu.com/useruploads/128/2023/06/03/647b2d3308108.webp","descr":"追梦少年,敢干敢搏"},{"name":"天启资源网","link":"https://tq946.com/","avatar":"https://tq946.com/favicon.ico","descr":"资源教学网,网路技术,项目技术教程"},{"name":"六思逸","link":"https://www.6s1.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=712107091&s=100","descr":"不忘初心，砥砺前行。","siteshot":"https://i.imgloc.com/2023/06/10/V2EHdb.md.png"},{"name":"萌傀儡","link":"https://blhorizon.github.io/","avatar":"https://cdn1.tianli0.top/npm/blogimages/link/avatar.webp","descr":"珍惜现在，趁早摸鱼","siteshot":"https://cdn1.tianli0.top/npm/blogimages/pictures/khdslb.webp"},{"name":"木鱼资源网","link":"https://www.myzyw.top","avatar":"https://www.myzyw.top/t.png"},{"name":"慕斯","link":"https://blog.dd.ac.cn/","avatar":"https://img02.dd.ac.cn//article/zll.png","descr":"风在迷茫中吹来夏天，少年借微光成长","siteshot":"https://img02.dd.ac.cn//article/siteshot.png"},{"name":"别亦难","link":"https://lazyingman.com","avatar":"https://bu.dusays.com/2023/06/23/64959cf745a4d.png","descr":"准时不定期更新","siteshot":"https://bu.dusays.com/2023/06/28/649c105e00a4f.png"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
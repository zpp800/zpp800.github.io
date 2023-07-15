// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: '#49b1f5',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片（精选）"><a href="#图片（精选）" class="headerlink" title="图片（精选）"></a>精选</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/99118291_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/99118291_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/104805298_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/104805298_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/94753933_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/94753933_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/102039193_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/102039193_p0.webp)')"></a>
    </div>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/104858108_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/104858108_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/104794003_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/104794003_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/Fjy3RDqaMAAYj-j.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/Fjy3RDqaMAAYj-j.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/105246861_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/105246861_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/107065329_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/107065329_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/100917024_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/100917024_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/97246723_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/97246723_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/101057052_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/101057052_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/102891840_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/102891840_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/FovcuKBacAIuzGh.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/FovcuKBacAIuzGh.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/FoHgA2caEAUwc1J.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/FoHgA2caEAUwc1J.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/101592855_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/101592855_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/104854285_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/104854285_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/104124365_p0.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/104124365_p0.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/7f3b224bly1h87zi4xgm4j21hc0u0kds.webp)" class="imgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/7f3b224bly1h87zi4xgm4j21hc0u0kds.webp)')"></a>

    </div>
    
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/92388678_p0.webp)" class="pimgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/92388678_p0.webp)')"></a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/101199282_p0_502358.webp)" class="pimgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/101199282_p0_502358.webp)')"></a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/94944536_p0_1878082.webp)" class="pimgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/94944536_p0_1878082.webp)')"></a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/1830fe25730a9e816cbea5c5980e9a10.webp)" class="pimgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/1830fe25730a9e816cbea5c5980e9a10.webp)')"></a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/100848188_p0_3810321.webp)" class="pimgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/100848188_p0_3810321.webp)')"></a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/96558903_p0_2947130.webp)" class="pimgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/96558903_p0_2947130.webp)')"></a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/272ab044d85d2c0e55b528d0a387554d.webp)" class="pimgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/272ab044d85d2c0e55b528d0a387554d.webp)')"></a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/94288367_p2_2179695.webp)" class="pimgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/94288367_p2_2179695.webp)')"></a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/100613394_p0_1122006.webp)" class="pimgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/100613394_p0_1122006.webp)')"></a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/94200795_p0.webp)" class="pimgbox" onclick="changeBg('url(https\://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/mp/94200795_p0.webp)')"></a>

    </div>
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #B7D31E, #42CE1E)" onclick="changeBg('linear-gradient(to right, #B7D31E, #42CE1E)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #06DE86, #06A5DE)" onclick="changeBg('linear-gradient(to right, #06DE86, #06A5DE)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #189BC4, #183DC4)" onclick="changeBg('linear-gradient(to right, #189BC4, #183DC4)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #C018C4, #C41818)" onclick="changeBg('linear-gradient(to right, #C018C4, #C41818)')"></a>
    </div>

    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #fff" onclick="changeBg('#fff')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #49A6E9" onclick="changeBg('#49A6E9')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F7CEFF" onclick="changeBg('#F7CEFF')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #FFFFCE" onclick="changeBg('#FFFFCE')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #CFFFCE" onclick="changeBg('#CFFFCE')"></a>
    </div>
`;
}

// 适应窗口大小
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10更新
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}
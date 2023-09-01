const e=["first","second","third","fourth","fifth"].map(e=>(function(e){let o=Math.round(2e3*Math.random()+1e3);return new Promise((t,n)=>{setTimeout(()=>{t(`${e} - ${o}ms`)},o)})})(e));Promise.all(e).then(e=>console.log(e)),Promise.race(e).then(e=>console.log(e));
//# sourceMappingURL=hw_12.b1f82ac5.js.map

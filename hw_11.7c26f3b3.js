const o=o=>new Promise((e,n)=>{setTimeout(()=>{Number(o)?e(`Вирішено після ${o}ms`):n("Помилка")},o)});o(2e3).then(o=>console.log(o)).catch(o=>console.log(o)),o(1e3).then(o=>console.log(o)).catch(o=>console.log(o)),o(1500).then(o=>console.log(o)).catch(o=>console.log(o)),o("a").then(o=>console.log(o)).catch(o=>console.log(o));const e=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}];console.log(e);const n=(o,e)=>new Promise(n=>{let c=o.map(o=>o.name===e?{...o,active:!o.active}:o);n(c)}),c=o=>console.table(o);n(e,"Mango").then(c),n(e,"Lux").then(c);const l=(o,e)=>Math.floor(Math.random()*(e-o+1)+o),t=o=>{let e=l(200,500);return new Promise((n,c)=>{setTimeout(()=>{Math.random()>.3?n(`Транзакція ${o.id} оброблена за ${e}ms`):c(`Помилка обробки транзакції ${o.id}. Спробуйте пізніше.`)},e)})};t({id:70,summary:150}).then(o=>console.log(o)).catch(o=>console.log(o)),t({id:71,summary:230}).then(o=>console.log(o)).catch(o=>console.log(o)),t({id:72,summary:75}).then(o=>console.log(o)).catch(o=>console.log(o)),t({id:73,summary:100}).then(o=>console.log(o)).catch(o=>console.log(o));
//# sourceMappingURL=hw_11.7c26f3b3.js.map

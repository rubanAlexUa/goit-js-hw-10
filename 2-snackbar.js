import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{i as s}from"./assets/vendor-A92OCY9B.js";const r=document.querySelector(".form");r.addEventListener("submit",m);function m(e){e.preventDefault();const{delay:i,state:o}=e.currentTarget.elements;n(i.value,o.value).then(t=>s.success({position:"topRight",message:`✅ Fulfilled promise in ${t}ms`})).catch(t=>s.error({position:"topRight",message:`❌ Rejected promise in ${t}ms`})),r.reset()}function n(e,i){return new Promise((o,t)=>{setTimeout(()=>{i==="fulfilled"?o(e):t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map

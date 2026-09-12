
const btn=document.querySelector('.mobile');
const menu=document.querySelector('.menu');
if(btn&&menu){btn.addEventListener('click',()=>{menu.style.display=menu.style.display==='flex'?'none':'flex';menu.style.position='absolute';menu.style.top='78px';menu.style.right='4%';menu.style.left='4%';menu.style.padding='18px';menu.style.background='#0e1014';menu.style.border='1px solid #272b32';menu.style.borderRadius='16px';menu.style.flexDirection='column'})}
document.querySelectorAll('.reveal').forEach(el=>new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12}).observe(el));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());

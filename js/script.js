document.addEventListener('DOMContentLoaded',()=>{
  document.addEventListener('click',(e)=>{
    const toggle=e.target.closest('.menu-toggle');
    const links=document.querySelector('.nav-links');
    if(toggle&&links){
      links.classList.toggle('open');
      return;
    }
    const navLink=e.target.closest('.nav-links a');
    if(navLink&&links){
      links.classList.remove('open');
    }
  });
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
    const val=btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card=>card.style.display=(val==='all'||card.dataset.category===val)?'':'none');
  }));
  document.querySelectorAll('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const msg=form.querySelector('.form-success');if(msg){msg.hidden=false;msg.textContent='Pendaftaran berhasil dikirim. Tim BEST KIDS akan menghubungi Anda.'}else alert('Pendaftaran berhasil dikirim.');form.reset();}));
});
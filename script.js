const typingText=["Salesforce Developer","Python Enthusiast","Full-Stack Developer","Tech Explorer"];
const typingElement=document.getElementById("typing");
let i=0,j=0,del=false;
function typeLoop(){
 let cur=typingText[i];
 typingElement.textContent=cur.substring(0,j);
 if(!del&&j<cur.length){j++;setTimeout(typeLoop,100);}
 else if(del&&j>0){j--;setTimeout(typeLoop,50);}
 else{
  del=!del;
  if(!del)i=(i+1)%typingText.length;
  setTimeout(typeLoop,del?1000:300);
 }}
typeLoop();

const themeToggle=document.getElementById("themeToggle");
const body=document.body;
const photo=document.getElementById("profilePhoto");
themeToggle.addEventListener("click",()=>{
 body.classList.toggle("light-mode");
 const isLight=body.classList.contains("light-mode");
 themeToggle.textContent=isLight?"☀️":"🌙";
 photo.src=isLight?"AshutoshPhoto.jpg":"AshutoshPhotoBlack.jpg";
});

const emojis=["🐍","☁️","⚡","💻","🧠"];
const bg=document.getElementById("tech-bg");
for(let k=0;k<20;k++){
 const s=document.createElement("span");
 s.textContent=emojis[Math.floor(Math.random()*emojis.length)];
 s.style.left=Math.random()*100+"%";
 s.style.animationDuration=8+Math.random()*8+"s";
 s.style.fontSize=16+Math.random()*24+"px";
 bg.appendChild(s);
}

const sections=document.querySelectorAll("section");
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
},{threshold:0.2});
sections.forEach(sec=>observer.observe(sec));

window.addEventListener("scroll",()=>{
 const bar=document.getElementById("progress-bar");
 const height=document.documentElement.scrollHeight-window.innerHeight;
 const scrolled=(window.scrollY/height)*100;
 bar.style.width=scrolled+"%";
});

document.addEventListener("mousemove",e=>{
 const t=document.createElement("div");
 t.className="trail";
 t.style.left=e.clientX+"px";
 t.style.top=e.clientY+"px";
 document.body.appendChild(t);
 setTimeout(()=>t.remove(),600);
});

const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("active"));

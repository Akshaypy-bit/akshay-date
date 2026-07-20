const msg="I wanted to ask you something in a way you'll remember.";
const el=document.getElementById("type");
let i=0;
(function type(){if(i<msg.length){el.textContent+=msg[i++];setTimeout(type,40);}})();
document.getElementById("next").onclick=()=>{
document.getElementById("scene").innerHTML=`
<h2>🌊 A bottle is floating towards the shore...</h2>
<p>In the next milestone you'll be able to tap it to open a handwritten letter.</p>
<p><strong>This is Milestone 1.</strong></p>`};
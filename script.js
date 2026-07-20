const c=document.getElementById('content');
welcome();

function welcome(){
c.innerHTML=`<h2>Hello, Kanmani ❤️</h2>
<p>Some moments deserve more than a text message.</p>
<p>I made something just for you.</p>
<button class="primary" onclick="verify()">Open Invitation</button>`;
}

function verify(){
c.innerHTML=`<h2>Identity Check</h2>
<p>Who is the cutest person Akshay knows?</p>
<button class="primary" onclick="loading()">Me 😌</button>
<button class="primary" onclick="loading()">Obviously Me ❤️</button>`;
}

function loading(){
c.innerHTML=`<h2>Preparing your surprise...</h2><p id='p'>0%</p>`;
let i=0;
const t=setInterval(()=>{
i+=5;
document.getElementById('p').innerText=i+"%";
if(i>=100){clearInterval(t);reveal();}
},60);
}

function reveal(){
c.innerHTML=`<h2>Dear Kanmani,</h2>
<p>Would you let me steal one beautiful evening with you? ❤️</p>
<div id='play'>
<button class='primary' onclick='plan()'>YES ❤️</button>
<button class='secondary' id='no'>No</button>
</div>`;
const no=document.getElementById('no');
let tries=0;
const msgs=["Really?","Think again 😄","Almost!","Nope 😂"];
function mv(){
tries++;
if(tries<5){
no.innerText=msgs[Math.min(tries-1,msgs.length-1)];
no.style.left=(Math.random()*200)+"px";
no.style.top=(Math.random()*55)+"px";
}else no.style.display='none';
}
no.onmouseenter=mv;
no.ontouchstart=(e)=>{e.preventDefault();mv();};
}

function plan(){
c.innerHTML=`<h2>Plan Our Evening ❤️</h2>
<input id='d' type='date'>
<select id='t'>
<option>Breakfast</option><option>Coffee</option><option>Sunset</option><option>Dinner</option>
</select>
<select id='f'>
<option>Italian</option><option>Pizza</option><option>Cafe</option><option>South Indian</option><option>Desserts</option>
</select>
<textarea id='m' placeholder="I'm looking forward to..."></textarea>
<button class='primary' onclick='done()'>Confirm</button>`;
}

function done(){
c.innerHTML=`<h2>❤️ It's Official ❤️</h2>
<p>See you soon, Kanmani.</p>
<p>This is just Version 2. More surprises are waiting. — Akshay</p>`;
}

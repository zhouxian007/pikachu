// import string from './css.js'
const string = `.skin {
  position: relative;
  background-color: #ffe600;
  height: 55vh;
}
.nose {
  border: 10px solid red;
  border-color: black transparent wheat transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: relative;
  left: 50%;
  top: 145px;
  margin-left: -10px;
}

.eye::before {
  animation: big 1s infinite;
}
.nose {
  animation: wave 1s infinite;
}
.yuan {
  position: absolute;
  border-radius: 10px 10px 0 0;
  border-color: black;
  background-color: black;
  border: 1px black solid;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
}
.eye {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background-color: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: "";
  border: 1px #fff solid;
  display: block;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  left: 8px;
  top: 4px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  66% {
    transform: rotate(10deg);
  }
  33% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes big {
  0% {
    transform: skew(0deg, 0deg);
  }
  50% {
    transform: skew(20deg, 10deg);
  }
  100% {
    transform: scale(1);
  }
}
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 180px;
  margin-left: -100px;
  overflow: hidden;
}
.mouth .up .lip {
  z-index: 1;
  width: 140px;
  overflow: hidden;
  height: 180px;
}
.mouth .up .lip.left {
  border: 3px #000 solid;
  height: 30px;
  width: 80px;
  border-radius: 0 0 50px;
  border-top: #ffe600;
  border-left: #ffe600;
  position: relative;
  left: 100px;
  top: -10px;
  transform: rotate(10deg);
  -webkit-transform: rotate(25deg);
  -moz-transform: rotate(10deg);
  background-color: #ffe600;
}
.mouth .up .lip.right {
  border: 3px #000 solid;
  height: 30px;
  width: 80px;
  border-radius: 0 50px 0 50px;
  border-top: #ffe600;
  border-right: #ffe600;
  position: relative;
  top: -40px;
  left: 16px;
  transform: rotate(10deg);
  -webkit-transform: rotate(-25deg);
  -moz-transform: rotate(10deg);
  background-color: #ffe600;
}
.mouth .down {
  height: 180px;

  overflow: hidden;
}
.mouth .down .yuan2 {
  width: 140px;
  height: 1000px;
  position: relative;
  position: absolute;
  margin-left: 30px;
  border-radius: 100px/200px;
  top: 850px;
  background-color: rgb(255, 67, 67);
  left: 50%;
  margin-left: -50%;
}

.mouth .down .yuan1 {
  border: 3px #000 solid;
  width: 140px;
  height: 1000px;
  position: absolute;
  margin-left: 30px;
  border-radius: 75px/300px;
  bottom: 0;
  background-color: rgb(212, 7, 0);
  overflow: hidden;
}
.face.left {
  border: 3px #000 solid;
  width: 100px;
  height: 100px;
  border-radius: 56%;
  position: relative;
  left: 50%;
  top: 100px;
  background-color: red;
  transform: translateX(-200px);
}
.face.right {
  border: 3px #000 solid;
  width: 100px;
  height: 100px;
  border-radius: 56%;
  position: relative;
  left: 50%;
  top: 200px;
  background-color: red;
  transform: translateX(100px);
}

`
let n =1 
demo2.innerHTML= string.substring(from=0,n)
demo1.innerText= string.substring(from=0,n)
let time = 100
const run =()=>{
n+=1
    if(n>string.length){
        pause()
        return
    }
    demo2.innerHTML= string.substring(from=0,n)
    demo1.innerText= string.substring(from=0,n)
    demo1.scrollTop=demo1.scrollHeight
}

const pause =() =>{
  window.clearInterval(id)
}
const paly =()=>{
return  setInterval(run,Timeout=time)
  
}

let id = paly()

const Fast = ()=>{
  pause()
  time= 1
  id=setInterval(run,Timeout=time)
}
const Slow = ()=>{
  pause()
  time= 50
  id=setInterval(run,Timeout=time)
}
const Stop = ()=>{
  pause()
}
const Action = ()=>{
  id=setInterval(run,Timeout=time)
}

btnStop.onclick=Stop//暂停

btnAction.onclick=Action//开始

btnFast.onclick=Fast//快速

btnSlow.onclick=Slow//匀速
"use strict";let dwarfCapacity=1;let dwarfSpeed=10;let speedFortress=0.9;let speedForest=0.59;let speedTreasure=0.9;let dwarfAle=!1;let dwarfPortal=!1;const cacheDwarfs={};class Dwarf{constructor(){this.pos=0;this.prevPos=0;this.gold=0;this.purpose=0;this.turnBack=!1;this.height=70;this.drunkSpeed=0.1-Math.random()*0.05}
_render(palette,canvas){for(let y=0;y<B_DWARF.length;++y){for(let x=0;x<8;++x){const n=B_DWARF[y]>>2*(7-x)&0b11;if(n!=0b10){canvas.fillStyle='#'+palette[n];canvas.fillRect(3*x,3*y,3,3)}}}}
buf(palette){return cacheDwarfs[palette[0]]||(cacheDwarfs[palette[0]]=renderBuf(3*8,3*11,this._render.bind(this,palette)))}
advance(){this.prevPos=this.pos;const speed=dwarfSpeed*(this.pos<230?speedFortress:(this.pos>690?speedTreasure:speedForest));switch(this.purpose){case 1:this.turnBack=!1;this.pos+=speed;if(this.pos>=2*SCREEN_WIDTH){this.pos=2*SCREEN_WIDTH;this.gold=dwarfCapacity;this.purpose=2}
break;case 2:this.turnBack=!0;this.pos-=speed;if(this.pos<=0){this.pos=0;updateGold(this.gold);this.gold=0;this.purpose=0;this.turnBack=!1}
break;case 3:if(Math.random()<0.004)
this.turnBack=!this.turnBack;this.pos+=this.drunkSpeed*(this.turnBack?-speed:speed);if(this.pos<250){this.pos=250;this.turnBack=!1}
else if(this.pos>670){this.pos=670;this.turnBack=!0}
break}}
haveFun(setPos){if(setPos){this.pos=(0|Math.random()*420)+250;this.prevPos=this.pos;this.turnBack=Math.random()<0.5}
this.gold=0;this.purpose=3;this.height=(0|Math.random()*35)+50}}
const dwarfs=[];let dwarfsWaiting=[];function dwarfsFoundAle(){dwarfAle=!0;dwarfs.forEach(dwarf=>dwarf.haveFun(!0))}
function dwarfsNoAle(){dwarfAle=!1;const survivors=dwarfs.filter(dwarf=>dwarf.pos<230||dwarf.pos>690).length;dwarfs.splice(0,dwarfs.length);for(let n=0;n<Math.max(survivors,3);++n)
dwarfs.push(new Dwarf);draftCost=3;draftCostPrev=2;$setContent('dwarf-count',dwarfs.length);$setContent('dwarf-cost',draftCost)}

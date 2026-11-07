const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./scene-BQVfSCjZ.js","./process-4qZ9l0-u.js","./controller-BoK9qQU3.js","./scene-eeeEf7HE.js","./process-CxUEz70t.js","./controller-B9H7PfEF.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const fd="modulepreload",pd=function(i,e){return new URL(i,e).href},pl={},hn=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=pd(c,n),c in pl)return;pl[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const v=a[g];if(v.href===c&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":fd,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,v)=>{p.addEventListener("load",g),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="160",Li={ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},md=0,ml=1,gd=2,bu=1,wu=2,Nn=3,si=0,Yt=1,tn=2,ti=0,os=1,Ds=2,gl=3,_l=4,_d=5,mi=100,vd=101,xd=102,vl=103,xl=104,Md=200,yd=201,Sd=202,Ed=203,Ma=204,ya=205,bd=206,wd=207,Td=208,Ad=209,Rd=210,Cd=211,Pd=212,Ld=213,Id=214,Dd=0,Ud=1,Nd=2,Zr=3,Od=4,Fd=5,Bd=6,zd=7,Tu=0,Gd=1,Hd=2,ni=0,kd=1,Vd=2,Wd=3,Au=4,Xd=5,Yd=6,Ru=300,hs=301,ds=302,Sa=303,Ea=304,lo=306,ba=1e3,vn=1001,wa=1002,Xt=1003,Ml=1004,wo=1005,on=1006,qd=1007,Xs=1008,ii=1009,jd=1010,Zd=1011,Ya=1012,Cu=1013,$n=1014,Jn=1015,Ys=1016,Pu=1017,Lu=1018,xi=1020,Kd=1021,xn=1023,$d=1024,Jd=1025,Mi=1026,fs=1027,Qd=1028,Iu=1029,ef=1030,Du=1031,Uu=1033,To=33776,Ao=33777,Ro=33778,Co=33779,yl=35840,Sl=35841,El=35842,bl=35843,Nu=36196,wl=37492,Tl=37496,Al=37808,Rl=37809,Cl=37810,Pl=37811,Ll=37812,Il=37813,Dl=37814,Ul=37815,Nl=37816,Ol=37817,Fl=37818,Bl=37819,zl=37820,Gl=37821,Po=36492,Hl=36494,kl=36495,tf=36283,Vl=36284,Wl=36285,Xl=36286,Ou=3e3,yi=3001,nf=3200,sf=3201,Fu=0,rf=1,ln="",Ft="srgb",Hn="srgb-linear",qa="display-p3",co="display-p3-linear",Kr="linear",dt="srgb",$r="rec709",Jr="p3",Di=7680,Yl=519,of=512,af=513,lf=514,Bu=515,cf=516,uf=517,hf=518,df=519,ql=35044,bx=35048,jl="300 es",Ta=1035,Bn=2e3,Qr=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zl=1234567;const as=Math.PI/180,qs=180/Math.PI;function Ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function ja(i,e){return(i%e+e)%e}function ff(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function pf(i,e,t){return i!==e?(t-i)/(e-i):0}function Us(i,e,t){return(1-t)*i+t*e}function mf(i,e,t,n){return Us(i,e,1-Math.exp(-t*n))}function gf(i,e=1){return e-Math.abs(ja(i,e*2)-e)}function _f(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mf(i,e){return i+Math.random()*(e-i)}function yf(i){return i*(.5-Math.random())}function Sf(i){i!==void 0&&(Zl=i);let e=Zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ef(i){return i*as}function bf(i){return i*qs}function Aa(i){return(i&i-1)===0&&i!==0}function wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function eo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tf(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qn={DEG2RAD:as,RAD2DEG:qs,generateUUID:Ci,clamp:Tt,euclideanModulo:ja,mapLinear:ff,inverseLerp:pf,lerp:Us,damp:mf,pingpong:gf,smoothstep:_f,smootherstep:vf,randInt:xf,randFloat:Mf,randFloatSpread:yf,seededRandom:Sf,degToRad:Ef,radToDeg:bf,isPowerOfTwo:Aa,ceilPowerOfTwo:wf,floorPowerOfTwo:eo,setQuaternionFromProperEuler:Tf,normalize:Vt,denormalize:Ji};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,s,r,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],w=s[1],x=s[4],_=s[7],R=s[2],E=s[5],C=s[8];return r[0]=a*v+o*w+l*R,r[3]=a*m+o*x+l*E,r[6]=a*f+o*_+l*C,r[1]=c*v+u*w+h*R,r[4]=c*m+u*x+h*E,r[7]=c*f+u*_+h*C,r[2]=d*v+p*w+g*R,r[5]=d*m+p*x+g*E,r[8]=d*f+p*_+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Ke;function zu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){const i=to("canvas");return i.style.display="block",i}const Kl={};function Ns(i){i in Kl||(Kl[i]=!0,console.warn(i))}const $l=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jl=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[Hn]:{transfer:Kr,primaries:$r,toReference:i=>i,fromReference:i=>i},[Ft]:{transfer:dt,primaries:$r,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[co]:{transfer:Kr,primaries:Jr,toReference:i=>i.applyMatrix3(Jl),fromReference:i=>i.applyMatrix3($l)},[qa]:{transfer:dt,primaries:Jr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Jl),fromReference:i=>i.applyMatrix3($l).convertLinearToSRGB()}},Rf=new Set([Hn,co]),nt={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Rf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ir[e].toReference,s=ir[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ir[i].primaries},getTransfer:function(i){return i===ln?Kr:ir[i].transfer}};function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class Gu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=to("canvas")),Ui.width=e.width,Ui.height=e.height;const n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cf=0;class Hu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Do(s[a].image)):r.push(Do(s[a]))}else r=Do(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class jt extends Ri{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=vn,s=vn,r=on,a=Xs,o=xn,l=ii,c=jt.DEFAULT_ANISOTROPY,u=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ci(),this.name="",this.source=new Hu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===yi?Ft:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?yi:Ou}set encoding(e){Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yi?Ft:ln}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Ru;jt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(p+1)/2,R=(f+1)/2,E=(u+d)/4,C=(h+v)/4,N=(g+m)/4;return x>_&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=C/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=N/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=N/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===yi?Ft:ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Lf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ku extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class If extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*v,w=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const R=Math.sqrt(x),E=Math.atan2(R,f*w);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}const _=o*w;if(l=l*m+d*_,c=c*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uo.copy(this).projectOnVector(e),this.sub(Uo)}reflect(e){return this.sub(Uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new P,Ql=new wi;class Pi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),rr.subVectors(this.max,Ss),Ni.subVectors(e.a,Ss),Oi.subVectors(e.b,Ss),Fi.subVectors(e.c,Ss),kn.subVectors(Oi,Ni),Vn.subVectors(Fi,Oi),ai.subVectors(Ni,Fi);let t=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-ai.z,ai.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,ai.z,0,-ai.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-ai.y,ai.x,0];return!No(t,Ni,Oi,Fi,rr)||(t=[1,0,0,0,1,0,0,0,1],!No(t,Ni,Oi,Fi,rr))?!1:(or.crossVectors(kn,Vn),t=[or.x,or.y,or.z],No(t,Ni,Oi,Fi,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new P,new P,new P,new P,new P,new P,new P,new P],fn=new P,sr=new Pi,Ni=new P,Oi=new P,Fi=new P,kn=new P,Vn=new P,ai=new P,Ss=new P,rr=new P,or=new P,li=new P;function No(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);const o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),u=n.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Df=new Pi,Es=new P,Oo=new P;class vs{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(Oo)),this.expandByPoint(Es.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new P,Fo=new P,ar=new P,Wn=new P,Bo=new P,lr=new P,zo=new P;class uo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fo.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Fo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ar),o=Wn.dot(this.direction),l=-Wn.dot(ar),c=Wn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fo).addScaledVector(ar,d),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,s,r){Bo.subVectors(t,e),lr.subVectors(n,e),zo.crossVectors(Bo,lr);let a=this.direction.dot(zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(lr.crossVectors(Wn,lr));if(l<0)return null;const c=o*this.direction.dot(Bo.cross(Wn));if(c<0||l+c>a)return null;const u=-o*Wn.dot(zo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,s,r,a,o,l,c,u,h,d,p,g,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,p,g,v,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uf,e,Nf)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Xn.crossVectors(n,Kt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Xn.crossVectors(n,Kt)),Xn.normalize(),cr.crossVectors(Kt,Xn),s[0]=Xn.x,s[4]=cr.x,s[8]=Kt.x,s[1]=Xn.y,s[5]=cr.y,s[9]=Kt.y,s[2]=Xn.z,s[6]=cr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],w=n[3],x=n[7],_=n[11],R=n[15],E=s[0],C=s[4],N=s[8],y=s[12],T=s[1],U=s[5],H=s[9],J=s[13],I=s[2],F=s[6],k=s[10],ee=s[14],$=s[3],X=s[7],j=s[11],Z=s[15];return r[0]=a*E+o*T+l*I+c*$,r[4]=a*C+o*U+l*F+c*X,r[8]=a*N+o*H+l*k+c*j,r[12]=a*y+o*J+l*ee+c*Z,r[1]=u*E+h*T+d*I+p*$,r[5]=u*C+h*U+d*F+p*X,r[9]=u*N+h*H+d*k+p*j,r[13]=u*y+h*J+d*ee+p*Z,r[2]=g*E+v*T+m*I+f*$,r[6]=g*C+v*U+m*F+f*X,r[10]=g*N+v*H+m*k+f*j,r[14]=g*y+v*J+m*ee+f*Z,r[3]=w*E+x*T+_*I+R*$,r[7]=w*C+x*U+_*F+R*X,r[11]=w*N+x*H+_*k+R*j,r[15]=w*y+x*J+_*ee+R*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*p-n*l*p)+v*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+f*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],w=h*m*c-v*d*c+v*l*p-o*m*p-h*l*f+o*d*f,x=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,_=u*v*c-g*h*c+g*o*p-a*v*p-u*o*f+a*h*f,R=g*h*l-u*v*l-g*o*d+a*v*d+u*o*m-a*h*m,E=t*w+n*x+s*_+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=w*C,e[1]=(v*d*r-h*m*r-v*s*p+n*m*p+h*s*f-n*d*f)*C,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*f+n*l*f)*C,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*p-n*l*p)*C,e[4]=x*C,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*C,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*C,e[8]=_*C,e[9]=(g*h*r-u*v*r-g*n*p+t*v*p+u*n*f-t*h*f)*C,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*f+t*o*f)*C,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*C,e[12]=R*C,e[13]=(u*v*s-g*h*s+g*n*d-t*v*d-u*n*m+t*h*m)*C,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*C,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,v=a*u,m=a*h,f=o*h,w=l*c,x=l*u,_=l*h,R=n.x,E=n.y,C=n.z;return s[0]=(1-(v+f))*R,s[1]=(p+_)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(d+f))*E,s[6]=(m+w)*E,s[7]=0,s[8]=(g+x)*C,s[9]=(m-w)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const a=Bi.set(s[4],s[5],s[6]).length(),o=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);const c=1/r,u=1/a,h=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Bn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(o===Bn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Qr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Bn){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,p=(n+s)*u;let g,v;if(o===Bn)g=(a+r)*h,v=-2*h;else if(o===Qr)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new P,pn=new pt,Uf=new P(0,0,0),Nf=new P(1,1,1),Xn=new P,cr=new P,Kt=new P,ec=new pt,tc=new wi;class ho{constructor(e=0,t=0,n=0,s=ho.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ho.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Of=0;const nc=new P,zi=new wi,In=new pt,ur=new P,bs=new P,Ff=new P,Bf=new wi,ic=new P(1,0,0),sc=new P(0,1,0),rc=new P(0,0,1),zf={type:"added"},Gf={type:"removed"};class At extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new P,t=new ho,n=new wi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ke}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(bs,ur,this.up):In.lookAt(ur,bs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(In),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new P(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new P,Dn=new P,Go=new P,Un=new P,Gi=new P,Hi=new P,oc=new P,Ho=new P,ko=new P,Vo=new P;let hr=!1;class an{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Dn.subVectors(n,t),Go.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(Dn),l=mn.dot(Go),c=Dn.dot(Dn),u=Dn.dot(Go),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,n,s,r,a,o,l){return hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Dn.subVectors(e,t),mn.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),mn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hr=!0),an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Gi.subVectors(s,n),Hi.subVectors(r,n),Ho.subVectors(e,n);const l=Gi.dot(Ho),c=Hi.dot(Ho);if(l<=0&&c<=0)return t.copy(n);ko.subVectors(e,s);const u=Gi.dot(ko),h=Hi.dot(ko);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Gi,a);Vo.subVectors(e,r);const p=Gi.dot(Vo),g=Hi.dot(Vo);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Hi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return oc.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(oc,o);const f=1/(m+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(Gi,a).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=ja(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wo(a,r,e+1/3),this.g=Wo(a,r,e),this.b=Wo(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=Vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return nt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Tt(Gt.r*255,0,255))*65536+Math.round(Tt(Gt.g*255,0,255))*256+Math.round(Tt(Gt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Ft){nt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,s=Gt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(dr);const n=Us(Yn.h,dr.h,t),s=Us(Yn.s,dr.s,t),r=Us(Yn.l,dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new qe;qe.NAMES=Vu;let Hf=0;class xs extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=os,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ya,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mn extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new P,fr=new he;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),e}}class Wu extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xu extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Je extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kf=0;const sn=new pt,Xo=new At,ki=new P,$t=new Pi,ws=new Pi,It=new P;class Ot extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?Xu:Wu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors($t.min,ws.min),$t.expandByPoint(It),It.addVectors($t.max,ws.max),$t.expandByPoint(It)):($t.expandByPoint(ws.min),$t.expandByPoint(ws.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),It.add(ki)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new P,u[T]=new P;const h=new P,d=new P,p=new P,g=new he,v=new he,m=new he,f=new P,w=new P;function x(T,U,H){h.fromArray(s,T*3),d.fromArray(s,U*3),p.fromArray(s,H*3),g.fromArray(a,T*2),v.fromArray(a,U*2),m.fromArray(a,H*2),d.sub(h),p.sub(h),v.sub(g),m.sub(g);const J=1/(v.x*m.y-m.x*v.y);isFinite(J)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(J),w.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(J),c[T].add(f),c[U].add(f),c[H].add(f),u[T].add(w),u[U].add(w),u[H].add(w))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let T=0,U=_.length;T<U;++T){const H=_[T],J=H.start,I=H.count;for(let F=J,k=J+I;F<k;F+=3)x(n[F+0],n[F+1],n[F+2])}const R=new P,E=new P,C=new P,N=new P;function y(T){C.fromArray(r,T*3),N.copy(C);const U=c[T];R.copy(U),R.sub(C.multiplyScalar(C.dot(U))).normalize(),E.crossVectors(N,U);const J=E.dot(u[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=J}for(let T=0,U=_.length;T<U;++T){const H=_[T],J=H.start,I=H.count;for(let F=J,k=J+I;F<k;F+=3)y(n[F+0]),y(n[F+1]),y(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new cn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new pt,ci=new uo,pr=new vs,lc=new P,Vi=new P,Wi=new P,Xi=new P,Yo=new P,mr=new P,gr=new he,_r=new he,vr=new he,cc=new P,uc=new P,hc=new P,xr=new P,Mr=new P;class Ce extends At{constructor(e=new Ot,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Yo.fromBufferAttribute(h,e),a?mr.addScaledVector(Yo,u):mr.addScaledVector(Yo.sub(t),u))}t.add(mr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(pr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(pr,lc)===null||ci.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(ac.copy(r).invert(),ci.copy(e.ray).applyMatrix4(ac),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,R=x;_<R;_+=3){const E=o.getX(_),C=o.getX(_+1),N=o.getX(_+2);s=yr(this,f,e,n,c,u,h,E,C,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const w=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);s=yr(this,a,e,n,c,u,h,w,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,R=x;_<R;_+=3){const E=_,C=_+1,N=_+2;s=yr(this,f,e,n,c,u,h,E,C,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const w=m,x=m+1,_=m+2;s=yr(this,a,e,n,c,u,h,w,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Vf(i,e,t,n,s,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===si,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Mr);return c<t.near||c>t.far?null:{distance:c,point:Mr.clone(),object:i}}function yr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Vi),i.getVertexPosition(l,Wi),i.getVertexPosition(c,Xi);const u=Vf(i,e,t,n,Vi,Wi,Xi,xr);if(u){s&&(gr.fromBufferAttribute(s,o),_r.fromBufferAttribute(s,l),vr.fromBufferAttribute(s,c),u.uv=an.getInterpolation(xr,Vi,Wi,Xi,gr,_r,vr,new he)),r&&(gr.fromBufferAttribute(r,o),_r.fromBufferAttribute(r,l),vr.fromBufferAttribute(r,c),u.uv1=an.getInterpolation(xr,Vi,Wi,Xi,gr,_r,vr,new he),u.uv2=u.uv1),a&&(cc.fromBufferAttribute(a,o),uc.fromBufferAttribute(a,l),hc.fromBufferAttribute(a,c),u.normal=an.getInterpolation(xr,Vi,Wi,Xi,cc,uc,hc,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};an.getNormal(Vi,Wi,Xi,h.normal),u.face=h}return u}class yn extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function g(v,m,f,w,x,_,R,E,C,N,y){const T=_/C,U=R/N,H=_/2,J=R/2,I=E/2,F=C+1,k=N+1;let ee=0,$=0;const X=new P;for(let j=0;j<k;j++){const Z=j*U-J;for(let ue=0;ue<F;ue++){const G=ue*T-H;X[v]=G*w,X[m]=Z*x,X[f]=I,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[f]=E>0?1:-1,u.push(X.x,X.y,X.z),h.push(ue/C),h.push(1-j/N),ee+=1}}for(let j=0;j<N;j++)for(let Z=0;Z<C;Z++){const ue=d+Z+F*j,G=d+Z+F*(j+1),ie=d+(Z+1)+F*(j+1),de=d+(Z+1)+F*j;l.push(ue,G,de),l.push(G,ie,de),$+=6}o.addGroup(p,$,y),p+=$,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=ps(i[t]);for(const s in n)e[s]=n[s]}return e}function Wf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yu(i){return i.getRenderTarget()===null?i.outputColorSpace:nt.workingColorSpace}const Xf={clone:ps,merge:Wt};var Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends qu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,qi=1;class jf extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(Yi,qi,e,t);s.layers=this.layers,this.add(s);const r=new Qt(Yi,qi,e,t);r.layers=this.layers,this.add(r);const a=new Qt(Yi,qi,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Yi,qi,e,t);o.layers=this.layers,this.add(o);const l=new Qt(Yi,qi,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Yi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ju extends jt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:hs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zf extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yi?Ft:ln),this.texture=new ju(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yn(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ti});r.uniforms.tEquirect.value=t;const a=new Ce(s,r),o=t.minFilter;return t.minFilter===Xs&&(t.minFilter=on),new jf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const qo=new P,Kf=new P,$f=new Ke;class _n{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=qo.subVectors(n,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$f.getNormalMatrix(e),s=this.coplanarPoint(qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new vs,Sr=new P;class Ka{constructor(e=new _n,t=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],w=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-p,_-f).normalize(),n[1].setComponents(l+r,d+c,m+p,_+f).normalize(),n[2].setComponents(l+a,d+u,m+g,_+w).normalize(),n[3].setComponents(l-a,d-u,m-g,_-w).normalize(),n[4].setComponents(l-o,d-h,m-v,_-x).normalize(),t===Bn)n[5].setComponents(l+o,d+h,m+v,_+x).normalize();else if(t===Qr)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Sr.x=s.normal.x>0?e.max.x:e.min.x,Sr.y=s.normal.y>0?e.max.y:e.min.y,Sr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jf(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,d=c.usage,p=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,h){const d=u.array,p=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),p.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){const f=g[v];t?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class fo extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const w=f*d-a;for(let x=0;x<c;x++){const _=x*h-r;g.push(_,-w,0),v.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const x=w+c*f,_=w+c*(f+1),R=w+1+c*(f+1),E=w+1+c*f;p.push(x,_,E),p.push(_,R,E)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,o0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Qf,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:op,batching_pars_vertex:ap,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:up,bsdfs:hp,iridescence_fragment:dp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:_p,color_fragment:vp,color_pars_fragment:xp,color_pars_vertex:Mp,color_vertex:yp,common:Sp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:bp,displacementmap_pars_vertex:wp,displacementmap_vertex:Tp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Rp,colorspace_fragment:Cp,colorspace_pars_fragment:Pp,envmap_fragment:Lp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Dp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Yp,envmap_vertex:Np,fog_vertex:Op,fog_pars_vertex:Fp,fog_fragment:Bp,fog_pars_fragment:zp,gradientmap_pars_fragment:Gp,lightmap_fragment:Hp,lightmap_pars_fragment:kp,lights_lambert_fragment:Vp,lights_lambert_pars_fragment:Wp,lights_pars_begin:Xp,lights_toon_fragment:qp,lights_toon_pars_fragment:jp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Kp,lights_physical_fragment:$p,lights_physical_pars_fragment:Jp,lights_fragment_begin:Qp,lights_fragment_maps:em,lights_fragment_end:tm,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:rm,map_fragment:om,map_pars_fragment:am,map_particle_fragment:lm,map_particle_pars_fragment:cm,metalnessmap_fragment:um,metalnessmap_pars_fragment:hm,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:_m,normal_pars_fragment:vm,normal_pars_vertex:xm,normal_vertex:Mm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:bm,iridescence_pars_fragment:wm,opaque_fragment:Tm,packing:Am,premultiplied_alpha_fragment:Rm,project_vertex:Cm,dithering_fragment:Pm,dithering_pars_fragment:Lm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Om,shadowmask_pars_fragment:Fm,skinbase_vertex:Bm,skinning_pars_vertex:zm,skinning_vertex:Gm,skinnormal_vertex:Hm,specularmap_fragment:km,specularmap_pars_fragment:Vm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:Ym,transmission_pars_fragment:qm,uv_pars_fragment:jm,uv_pars_vertex:Zm,uv_vertex:Km,worldpos_vertex:$m,background_vert:Jm,background_frag:Qm,backgroundCube_vert:e0,backgroundCube_frag:t0,cube_vert:n0,cube_frag:i0,depth_vert:s0,depth_frag:r0,distanceRGBA_vert:o0,distanceRGBA_frag:a0,equirect_vert:l0,equirect_frag:c0,linedashed_vert:u0,linedashed_frag:h0,meshbasic_vert:d0,meshbasic_frag:f0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:_0,meshnormal_vert:v0,meshnormal_frag:x0,meshphong_vert:M0,meshphong_frag:y0,meshphysical_vert:S0,meshphysical_frag:E0,meshtoon_vert:b0,meshtoon_frag:w0,points_vert:T0,points_frag:A0,shadow_vert:R0,shadow_frag:C0,sprite_vert:P0,sprite_frag:L0},xe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},bn={basic:{uniforms:Wt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Wt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Wt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Wt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Wt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Wt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Wt([xe.points,xe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Wt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Wt([xe.common,xe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Wt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Wt([xe.sprite,xe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Wt([xe.common,xe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Wt([xe.lights,xe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};bn.physical={uniforms:Wt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Er={r:0,b:0,g:0};function I0(i,e,t,n,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let w=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),w=!0);const _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===lo)?(u===void 0&&(u=new Ce(new yn(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ps(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=nt.getTransfer(x.colorSpace)!==dt,(h!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ce(new fo(2,2),new Ti({name:"BackgroundMaterial",uniforms:ps(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=nt.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Er,Yu(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function D0(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(I,F,k,ee,$){let X=!1;if(a){const j=v(ee,k,F);c!==j&&(c=j,p(c.object)),X=f(I,ee,k,$),X&&w(I,ee,k,$)}else{const j=F.wireframe===!0;(c.geometry!==ee.id||c.program!==k.id||c.wireframe!==j)&&(c.geometry=ee.id,c.program=k.id,c.wireframe=j,X=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,N(I,F,k,ee),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function v(I,F,k){const ee=k.wireframe===!0;let $=o[I.id];$===void 0&&($={},o[I.id]=$);let X=$[F.id];X===void 0&&(X={},$[F.id]=X);let j=X[ee];return j===void 0&&(j=m(d()),X[ee]=j),j}function m(I){const F=[],k=[],ee=[];for(let $=0;$<s;$++)F[$]=0,k[$]=0,ee[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:ee,object:I,attributes:{},index:null}}function f(I,F,k,ee){const $=c.attributes,X=F.attributes;let j=0;const Z=k.getAttributes();for(const ue in Z)if(Z[ue].location>=0){const ie=$[ue];let de=X[ue];if(de===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(de=I.instanceColor)),ie===void 0||ie.attribute!==de||de&&ie.data!==de.data)return!0;j++}return c.attributesNum!==j||c.index!==ee}function w(I,F,k,ee){const $={},X=F.attributes;let j=0;const Z=k.getAttributes();for(const ue in Z)if(Z[ue].location>=0){let ie=X[ue];ie===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor));const de={};de.attribute=ie,ie&&ie.data&&(de.data=ie.data),$[ue]=de,j++}c.attributes=$,c.attributesNum=j,c.index=ee}function x(){const I=c.newAttributes;for(let F=0,k=I.length;F<k;F++)I[F]=0}function _(I){R(I,0)}function R(I,F){const k=c.newAttributes,ee=c.enabledAttributes,$=c.attributeDivisors;k[I]=1,ee[I]===0&&(i.enableVertexAttribArray(I),ee[I]=1),$[I]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),$[I]=F)}function E(){const I=c.newAttributes,F=c.enabledAttributes;for(let k=0,ee=F.length;k<ee;k++)F[k]!==I[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function C(I,F,k,ee,$,X,j){j===!0?i.vertexAttribIPointer(I,F,k,$,X):i.vertexAttribPointer(I,F,k,ee,$,X)}function N(I,F,k,ee){if(n.isWebGL2===!1&&(I.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const $=ee.attributes,X=k.getAttributes(),j=F.defaultAttributeValues;for(const Z in X){const ue=X[Z];if(ue.location>=0){let G=$[Z];if(G===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){const ie=G.normalized,de=G.itemSize,Se=t.get(G);if(Se===void 0)continue;const Me=Se.buffer,be=Se.type,Ne=Se.bytesPerElement,we=n.isWebGL2===!0&&(be===i.INT||be===i.UNSIGNED_INT||G.gpuType===Cu);if(G.isInterleavedBufferAttribute){const Ue=G.data,L=Ue.stride,fe=G.offset;if(Ue.isInstancedInterleavedBuffer){for(let K=0;K<ue.locationSize;K++)R(ue.location+K,Ue.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let K=0;K<ue.locationSize;K++)_(ue.location+K);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let K=0;K<ue.locationSize;K++)C(ue.location+K,de/ue.locationSize,be,ie,L*Ne,(fe+de/ue.locationSize*K)*Ne,we)}else{if(G.isInstancedBufferAttribute){for(let Ue=0;Ue<ue.locationSize;Ue++)R(ue.location+Ue,G.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ue=0;Ue<ue.locationSize;Ue++)_(ue.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ue=0;Ue<ue.locationSize;Ue++)C(ue.location+Ue,de/ue.locationSize,be,ie,de*Ne,de/ue.locationSize*Ue*Ne,we)}}else if(j!==void 0){const ie=j[Z];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(ue.location,ie);break;case 3:i.vertexAttrib3fv(ue.location,ie);break;case 4:i.vertexAttrib4fv(ue.location,ie);break;default:i.vertexAttrib1fv(ue.location,ie)}}}}E()}function y(){H();for(const I in o){const F=o[I];for(const k in F){const ee=F[k];for(const $ in ee)g(ee[$].object),delete ee[$];delete F[k]}delete o[I]}}function T(I){if(o[I.id]===void 0)return;const F=o[I.id];for(const k in F){const ee=F[k];for(const $ in ee)g(ee[$].object),delete ee[$];delete F[k]}delete o[I.id]}function U(I){for(const F in o){const k=o[F];if(k[I.id]===void 0)continue;const ee=k[I.id];for(const $ in ee)g(ee[$].object),delete ee[$];delete k[I.id]}}function H(){J(),u=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:J,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:_,disableUnusedAttributes:E}}function U0(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function N0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,_=a||e.has("OES_texture_float"),R=x&&_,E=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:R,maxSamples:E}}function O0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new _n,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,x=w*4;let _=f.clippingState||null;l.value=_,_=u(g,d,x,p);for(let R=0;R!==x;++R)_[R]=t[R];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,_=p;x!==v;++x,_+=4)a.copy(h[x]).applyMatrix4(w,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function F0(i){let e=new WeakMap;function t(a,o){return o===Sa?a.mapping=hs:o===Ea&&(a.mapping=ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===Ea)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zf(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ku extends qu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ns=4,dc=[.125,.215,.35,.446,.526,.582],gi=20,jo=new Ku,fc=new qe;let Zo=null,Ko=0,$o=0;const di=(1+Math.sqrt(5))/2,ji=1/di,pc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,di,ji),new P(0,di,-ji),new P(ji,0,di),new P(-ji,0,di),new P(di,ji,0),new P(-di,ji,0)];class Ra{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,Ko,$o),e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ys,format:xn,colorSpace:Hn,depthBuffer:!1},s=mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B0(r)),this._blurMaterial=z0(r,e,t)}return s}_compileMaterial(e){const t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,n,s){const o=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(fc),u.toneMapping=ni,u.autoClear=!1;const p=new Mn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new Ce(new yn,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(fc),v=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):w===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;br(s,w*x,f>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hs||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,jo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pc[(s-1)%pc.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ce(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const f=[];let w=0;for(let C=0;C<gi;++C){const N=C/v,y=Math.exp(-N*N/2);f.push(y),C===0?w+=y:C<m&&(w+=2*y)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const _=this._sizeLods[s],R=3*_*(s>x-ns?s-x+ns:0),E=4*(this._cubeSize-_);br(t,R,E,3*_,2*_),l.setRenderTarget(t),l.render(h,jo)}}function B0(i){const e=[],t=[],n=[];let s=i;const r=i-ns+1+dc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ns?l=dc[a-i+ns-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,w=new Float32Array(v*g*p),x=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,N=E>2?0:-1,y=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];w.set(y,v*g*E),x.set(d,m*g*E);const T=[E,E,E,E,E,E];_.set(T,f*g*E)}const R=new Ot;R.setAttribute("position",new cn(w,v)),R.setAttribute("uv",new cn(x,m)),R.setAttribute("faceIndex",new cn(_,f)),e.push(R),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mc(i,e,t){const n=new bi(i,e,t);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function z0(i,e,t){const n=new Float32Array(gi),s=new P(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function gc(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function _c(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function G0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sa||l===Ea,u=l===hs||l===ds;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Ra(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Ra(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function H0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function k0(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let x=0,_=w.length;x<_;x+=3){const R=w[x+0],E=w[x+1],C=w[x+2];d.push(R,E,E,C,C,R)}}else if(g!==void 0){const w=g.array;v=g.version;for(let x=0,_=w.length/3-1;x<_;x+=3){const R=x+0,E=x+1,C=x+2;d.push(R,E,E,C,C,R)}}else return;const m=new(zu(d)?Xu:Wu)(d,1);m.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function V0(i,e,t,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,g){i.drawElements(r,g,o,p*l),t.update(g,r,1)}function h(p,g,v){if(v===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,v),t.update(g,r,v)}function d(p,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,v);let f=0;for(let w=0;w<v;w++)f+=g[w];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function W0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function X0(i,e){return i[0]-e[0]}function Y0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function q0(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let I=function(){H.dispose(),r.delete(u),u.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();const w=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let N=0;w===!0&&(N=1),x===!0&&(N=2),_===!0&&(N=3);let y=u.attributes.position.count*N,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const U=new Float32Array(y*T*4*g),H=new ku(U,y,T,g);H.type=Jn,H.needsUpdate=!0;const J=N*4;for(let F=0;F<g;F++){const k=R[F],ee=E[F],$=C[F],X=y*T*4*F;for(let j=0;j<k.count;j++){const Z=j*J;w===!0&&(a.fromBufferAttribute(k,j),U[X+Z+0]=a.x,U[X+Z+1]=a.y,U[X+Z+2]=a.z,U[X+Z+3]=0),x===!0&&(a.fromBufferAttribute(ee,j),U[X+Z+4]=a.x,U[X+Z+5]=a.y,U[X+Z+6]=a.z,U[X+Z+7]=0),_===!0&&(a.fromBufferAttribute($,j),U[X+Z+8]=a.x,U[X+Z+9]=a.y,U[X+Z+10]=a.z,U[X+Z+11]=$.itemSize===4?a.w:1)}}v={count:g,texture:H,size:new he(y,T)},r.set(u,v),u.addEventListener("dispose",I)}let m=0;for(let w=0;w<d.length;w++)m+=d[w];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",f),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const p=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<p;x++){const _=g[x];_[0]=x,_[1]=d[x]}g.sort(Y0);for(let x=0;x<8;x++)x<p&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(X0);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const _=o[x],R=_[0],E=_[1];R!==Number.MAX_SAFE_INTEGER&&E?(v&&u.getAttribute("morphTarget"+x)!==v[R]&&u.setAttribute("morphTarget"+x,v[R]),m&&u.getAttribute("morphNormal"+x)!==m[R]&&u.setAttribute("morphNormal"+x,m[R]),s[x]=E,f+=E):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}const w=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function j0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class $u extends jt{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:Mi,u!==Mi&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mi&&(n=$n),n===void 0&&u===fs&&(n=xi),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ju=new jt,Qu=new $u(1,1);Qu.compareFunction=Bu;const eh=new ku,th=new If,nh=new ju,vc=[],xc=[],Mc=new Float32Array(16),yc=new Float32Array(9),Sc=new Float32Array(4);function Ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=vc[s];if(r===void 0&&(r=new Float32Array(s),vc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function po(i,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Sc.set(n),i.uniformMatrix2fv(this.addr,!1,Sc),Ct(t,n)}}function eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),Ct(t,n)}}function tg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Mc.set(n),i.uniformMatrix4fv(this.addr,!1,Mc),Ct(t,n)}}function ng(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function og(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function ug(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Qu:Ju;t.setTexture2D(e||r,s)}function hg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||th,s)}function dg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nh,s)}function fg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||eh,s)}function pg(i){switch(i){case 5126:return Z0;case 35664:return K0;case 35665:return $0;case 35666:return J0;case 35674:return Q0;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(i,e){i.uniform1fv(this.addr,e)}function gg(i,e){const t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function _g(i,e){const t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function vg(i,e){const t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function xg(i,e){const t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mg(i,e){const t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yg(i,e){const t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sg(i,e){i.uniform1iv(this.addr,e)}function Eg(i,e){i.uniform2iv(this.addr,e)}function bg(i,e){i.uniform3iv(this.addr,e)}function wg(i,e){i.uniform4iv(this.addr,e)}function Tg(i,e){i.uniform1uiv(this.addr,e)}function Ag(i,e){i.uniform2uiv(this.addr,e)}function Rg(i,e){i.uniform3uiv(this.addr,e)}function Cg(i,e){i.uniform4uiv(this.addr,e)}function Pg(i,e,t){const n=this.cache,s=e.length,r=po(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ju,r[a])}function Lg(i,e,t){const n=this.cache,s=e.length,r=po(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||th,r[a])}function Ig(i,e,t){const n=this.cache,s=e.length,r=po(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||nh,r[a])}function Dg(i,e,t){const n=this.cache,s=e.length,r=po(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||eh,r[a])}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return xg;case 35675:return Mg;case 35676:return yg;case 5124:case 35670:return Sg;case 35667:case 35671:return Eg;case 35668:case 35672:return bg;case 35669:case 35673:return wg;case 5125:return Tg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pg(t.type)}}class Og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ug(t.type)}}class Fg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function Ec(i,e){i.seq.push(e),i.map[e.id]=e}function Bg(i,e,t){const n=i.name,s=n.length;for(Jo.lastIndex=0;;){const r=Jo.exec(n),a=Jo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ec(t,c===void 0?new Ng(o,i,e):new Og(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Fg(o),Ec(t,h)),t=h}}}class Xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Bg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function bc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zg=37297;let Gg=0;function Hg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function kg(i){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(i);let n;switch(e===t?n="":e===Jr&&t===$r?n="LinearDisplayP3ToLinearSRGB":e===$r&&t===Jr&&(n="LinearSRGBToLinearDisplayP3"),i){case Hn:case co:return[n,"LinearTransferOETF"];case Ft:case qa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Hg(i.getShaderSource(e),a)}else return s}function Vg(i,e){const t=kg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Wg(i,e){let t;switch(e){case kd:t="Linear";break;case Vd:t="Reinhard";break;case Wd:t="OptimizedCineon";break;case Au:t="ACESFilmic";break;case Yd:t="AgX";break;case Xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(is).join(`
`)}function qg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function is(i){return i!==""}function Tc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(i){return i.replace(Zg,$g)}const Kg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $g(i,e){let t=Ye[e];if(t===void 0){const n=Kg.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ca(t)}const Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(i){return i.replace(Jg,Qg)}function Qg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function t_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case ds:e="ENVMAP_TYPE_CUBE";break;case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function i_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tu:e="ENVMAP_BLENDING_MULTIPLY";break;case Gd:e="ENVMAP_BLENDING_MIX";break;case Hd:e="ENVMAP_BLENDING_ADD";break}return e}function s_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function r_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=e_(t),c=t_(t),u=n_(t),h=i_(t),d=s_(t),p=t.isWebGL2?"":Xg(t),g=Yg(t),v=qg(r),m=s.createProgram();let f,w,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(is).join(`
`),f.length>0&&(f+=`
`),w=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(is).join(`
`),w.length>0&&(w+=`
`)):(f=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),w=[p,Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ni?Wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Vg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),a=Ca(a),a=Tc(a,t),a=Ac(a,t),o=Ca(o),o=Tc(o,t),o=Ac(o,t),a=Rc(a),o=Rc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const _=x+f+a,R=x+w+o,E=bc(s,s.VERTEX_SHADER,_),C=bc(s,s.FRAGMENT_SHADER,R);s.attachShader(m,E),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(H){if(i.debug.checkShaderErrors){const J=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(E).trim(),F=s.getShaderInfoLog(C).trim();let k=!0,ee=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,C);else{const $=wc(s,E,"vertex"),X=wc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+$+`
`+X)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(I===""||F==="")&&(ee=!1);ee&&(H.diagnostics={runnable:k,programLog:J,vertexShader:{log:I,prefix:f},fragmentShader:{log:F,prefix:w}})}s.deleteShader(E),s.deleteShader(C),y=new Xr(s,m),T=jg(s,m)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,zg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=C,this}let o_=0;class a_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new l_(e),t.set(e,n)),n}}class l_{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}}function c_(i,e,t,n,s,r,a){const o=new Za,l=new a_,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function m(y,T,U,H,J){const I=H.fog,F=J.geometry,k=y.isMeshStandardMaterial?H.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),$=ee&&ee.mapping===lo?ee.image.height:null,X=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Z=j!==void 0?j.length:0;let ue=0;F.morphAttributes.position!==void 0&&(ue=1),F.morphAttributes.normal!==void 0&&(ue=2),F.morphAttributes.color!==void 0&&(ue=3);let G,ie,de,Se;if(X){const Ht=bn[X];G=Ht.vertexShader,ie=Ht.fragmentShader}else G=y.vertexShader,ie=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),Se=l.getFragmentShaderID(y);const Me=i.getRenderTarget(),be=J.isInstancedMesh===!0,Ne=J.isBatchedMesh===!0,we=!!y.map,Ue=!!y.matcap,L=!!ee,fe=!!y.aoMap,K=!!y.lightMap,le=!!y.bumpMap,Q=!!y.normalMap,Re=!!y.displacementMap,ve=!!y.emissiveMap,b=!!y.metalnessMap,M=!!y.roughnessMap,B=y.anisotropy>0,ae=y.clearcoat>0,se=y.iridescence>0,re=y.sheen>0,Te=y.transmission>0,ge=B&&!!y.anisotropyMap,ye=ae&&!!y.clearcoatMap,Pe=ae&&!!y.clearcoatNormalMap,ze=ae&&!!y.clearcoatRoughnessMap,oe=se&&!!y.iridescenceMap,q=se&&!!y.iridescenceThicknessMap,S=re&&!!y.sheenColorMap,O=re&&!!y.sheenRoughnessMap,te=!!y.specularMap,ne=!!y.specularColorMap,Ee=!!y.specularIntensityMap,Oe=Te&&!!y.transmissionMap,ke=Te&&!!y.thicknessMap,Le=!!y.gradientMap,ce=!!y.alphaMap,D=y.alphaTest>0,me=!!y.alphaHash,pe=!!y.extensions,Fe=!!F.attributes.uv1,Ie=!!F.attributes.uv2,$e=!!F.attributes.uv3;let Qe=ni;return y.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Qe=i.toneMapping),{isWebGL2:u,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:ie,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ne,instancing:be,instancingColor:be&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Hn,map:we,matcap:Ue,envMap:L,envMapMode:L&&ee.mapping,envMapCubeUVHeight:$,aoMap:fe,lightMap:K,bumpMap:le,normalMap:Q,displacementMap:d&&Re,emissiveMap:ve,normalMapObjectSpace:Q&&y.normalMapType===rf,normalMapTangentSpace:Q&&y.normalMapType===Fu,metalnessMap:b,roughnessMap:M,anisotropy:B,anisotropyMap:ge,clearcoat:ae,clearcoatMap:ye,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ze,iridescence:se,iridescenceMap:oe,iridescenceThicknessMap:q,sheen:re,sheenColorMap:S,sheenRoughnessMap:O,specularMap:te,specularColorMap:ne,specularIntensityMap:Ee,transmission:Te,transmissionMap:Oe,thicknessMap:ke,gradientMap:Le,opaque:y.transparent===!1&&y.blending===os,alphaMap:ce,alphaTest:D,alphaHash:me,combine:y.combine,mapUv:we&&v(y.map.channel),aoMapUv:fe&&v(y.aoMap.channel),lightMapUv:K&&v(y.lightMap.channel),bumpMapUv:le&&v(y.bumpMap.channel),normalMapUv:Q&&v(y.normalMap.channel),displacementMapUv:Re&&v(y.displacementMap.channel),emissiveMapUv:ve&&v(y.emissiveMap.channel),metalnessMapUv:b&&v(y.metalnessMap.channel),roughnessMapUv:M&&v(y.roughnessMap.channel),anisotropyMapUv:ge&&v(y.anisotropyMap.channel),clearcoatMapUv:ye&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:q&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:S&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:O&&v(y.sheenRoughnessMap.channel),specularMapUv:te&&v(y.specularMap.channel),specularColorMapUv:ne&&v(y.specularColorMap.channel),specularIntensityMapUv:Ee&&v(y.specularIntensityMap.channel),transmissionMapUv:Oe&&v(y.transmissionMap.channel),thicknessMapUv:ke&&v(y.thicknessMap.channel),alphaMapUv:ce&&v(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Q||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Ie,vertexUv3s:$e,pointsUvs:J.isPoints===!0&&!!F.attributes.uv&&(we||ce),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tn,flipSided:y.side===Yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:pe&&y.extensions.derivatives===!0,extensionFragDepth:pe&&y.extensions.fragDepth===!0,extensionDrawBuffers:pe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(w(T,y),x(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function w(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function _(y){const T=g[y.type];let U;if(T){const H=bn[T];U=Xf.clone(H.uniforms)}else U=y.uniforms;return U}function R(y,T){let U;for(let H=0,J=c.length;H<J;H++){const I=c[H];if(I.cacheKey===T){U=I,++U.usedTimes;break}}return U===void 0&&(U=new r_(i,T,y,r),c.push(U)),U}function E(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:R,releaseProgram:E,releaseShaderCache:C,programs:c,dispose:N}}function u_(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function h_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,g,v,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||h_),n.length>1&&n.sort(d||Pc),s.length>1&&s.sort(d||Pc)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function d_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Lc,i.set(n,[a])):s>=r.length?(a=new Lc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function f_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new qe};break;case"SpotLight":t={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function p_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let m_=0;function g_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function __(i,e){const t=new f_,n=p_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new P);const r=new P,a=new pt,o=new pt;function l(u,h){let d=0,p=0,g=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let v=0,m=0,f=0,w=0,x=0,_=0,R=0,E=0,C=0,N=0,y=0;u.sort(g_);const T=h===!0?Math.PI:1;for(let H=0,J=u.length;H<J;H++){const I=u[H],F=I.color,k=I.intensity,ee=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*k*T,p+=F.g*k*T,g+=F.b*k*T;else if(I.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(I.sh.coefficients[X],k);y++}else if(I.isDirectionalLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const j=I.shadow,Z=n.get(I);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,s.directionalShadow[v]=Z,s.directionalShadowMap[v]=$,s.directionalShadowMatrix[v]=I.shadow.matrix,_++}s.directional[v]=X,v++}else if(I.isSpotLight){const X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(F).multiplyScalar(k*T),X.distance=ee,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,s.spot[f]=X;const j=I.shadow;if(I.map&&(s.spotLightMap[C]=I.map,C++,j.updateMatrices(I),I.castShadow&&N++),s.spotLightMatrix[f]=j.matrix,I.castShadow){const Z=n.get(I);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,s.spotShadow[f]=Z,s.spotShadowMap[f]=$,E++}f++}else if(I.isRectAreaLight){const X=t.get(I);X.color.copy(F).multiplyScalar(k),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),s.rectArea[w]=X,w++}else if(I.isPointLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*T),X.distance=I.distance,X.decay=I.decay,I.castShadow){const j=I.shadow,Z=n.get(I);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,s.pointShadow[m]=Z,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=I.shadow.matrix,R++}s.point[m]=X,m++}else if(I.isHemisphereLight){const X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(k*T),X.groundColor.copy(I.groundColor).multiplyScalar(k*T),s.hemi[x]=X,x++}}w>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const U=s.hash;(U.directionalLength!==v||U.pointLength!==m||U.spotLength!==f||U.rectAreaLength!==w||U.hemiLength!==x||U.numDirectionalShadows!==_||U.numPointShadows!==R||U.numSpotShadows!==E||U.numSpotMaps!==C||U.numLightProbes!==y)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=w,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=_,s.directionalShadowMap.length=_,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=_,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+C-N,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=y,U.directionalLength=v,U.pointLength=m,U.spotLength=f,U.rectAreaLength=w,U.hemiLength=x,U.numDirectionalShadows=_,U.numPointShadows=R,U.numSpotShadows=E,U.numSpotMaps=C,U.numLightProbes=y,s.version=m_++)}function c(u,h){let d=0,p=0,g=0,v=0,m=0;const f=h.matrixWorldInverse;for(let w=0,x=u.length;w<x;w++){const _=u[w];if(_.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(_.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(_.isRectAreaLight){const R=s.rectArea[v];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(_.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(_.width*.5,0,0),R.halfHeight.set(0,_.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const R=s.point[p];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Ic(i,e){const t=new __(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function v_(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Ic(i,e),t.set(r,[l])):a>=o.length?(l=new Ic(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class x_ extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M_ extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E_(i,e,t){let n=new Ka;const s=new he,r=new he,a=new mt,o=new x_({depthPacking:sf}),l=new M_,c={},u=t.maxTextureSize,h={[si]:Yt,[Yt]:si,[tn]:tn},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:y_,fragmentShader:S_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let f=this.type;this.render=function(E,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),T=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ti),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const J=f!==Nn&&this.type===Nn,I=f===Nn&&this.type!==Nn;for(let F=0,k=E.length;F<k;F++){const ee=E[F],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const X=$.getFrameExtents();if(s.multiply(X),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,$.mapSize.y=r.y)),$.map===null||J===!0||I===!0){const Z=this.type!==Nn?{minFilter:Xt,magFilter:Xt}:{};$.map!==null&&$.map.dispose(),$.map=new bi(s.x,s.y,Z),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const j=$.getViewportCount();for(let Z=0;Z<j;Z++){const ue=$.getViewport(Z);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),H.viewport(a),$.updateMatrices(ee,Z),n=$.getFrustum(),_(C,N,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===Nn&&w($,N),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,T,U)};function w(E,C){const N=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new bi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,N,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,N,p,v,null)}function x(E,C,N,y){let T=null;const U=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)T=U;else if(T=N.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=T.uuid,J=C.uuid;let I=c[H];I===void 0&&(I={},c[H]=I);let F=I[J];F===void 0&&(F=T.clone(),I[J]=F,C.addEventListener("dispose",R)),T=F}if(T.visible=C.visible,T.wireframe=C.wireframe,y===Nn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=i.properties.get(T);H.light=N}return T}function _(E,C,N,y,T){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Nn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);const J=e.update(E),I=E.material;if(Array.isArray(I)){const F=J.groups;for(let k=0,ee=F.length;k<ee;k++){const $=F[k],X=I[$.materialIndex];if(X&&X.visible){const j=x(E,X,y,T);E.onBeforeShadow(i,E,C,N,J,j,$),i.renderBufferDirect(N,null,J,j,E,$),E.onAfterShadow(i,E,C,N,J,j,$)}}}else if(I.visible){const F=x(E,I,y,T);E.onBeforeShadow(i,E,C,N,J,F,null),i.renderBufferDirect(N,null,J,F,E,null),E.onAfterShadow(i,E,C,N,J,F,null)}}const H=E.children;for(let J=0,I=H.length;J<I;J++)_(H[J],C,N,y,T)}function R(E){E.target.removeEventListener("dispose",R);for(const N in c){const y=c[N],T=E.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function b_(i,e,t){const n=t.isWebGL2;function s(){let D=!1;const me=new mt;let pe=null;const Fe=new mt(0,0,0,0);return{setMask:function(Ie){pe!==Ie&&!D&&(i.colorMask(Ie,Ie,Ie,Ie),pe=Ie)},setLocked:function(Ie){D=Ie},setClear:function(Ie,$e,Qe,Pt,Ht){Ht===!0&&(Ie*=Pt,$e*=Pt,Qe*=Pt),me.set(Ie,$e,Qe,Pt),Fe.equals(me)===!1&&(i.clearColor(Ie,$e,Qe,Pt),Fe.copy(me))},reset:function(){D=!1,pe=null,Fe.set(-1,0,0,0)}}}function r(){let D=!1,me=null,pe=null,Fe=null;return{setTest:function(Ie){Ie?Ne(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Ie){me!==Ie&&!D&&(i.depthMask(Ie),me=Ie)},setFunc:function(Ie){if(pe!==Ie){switch(Ie){case Dd:i.depthFunc(i.NEVER);break;case Ud:i.depthFunc(i.ALWAYS);break;case Nd:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case Od:i.depthFunc(i.EQUAL);break;case Fd:i.depthFunc(i.GEQUAL);break;case Bd:i.depthFunc(i.GREATER);break;case zd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Ie}},setLocked:function(Ie){D=Ie},setClear:function(Ie){Fe!==Ie&&(i.clearDepth(Ie),Fe=Ie)},reset:function(){D=!1,me=null,pe=null,Fe=null}}}function a(){let D=!1,me=null,pe=null,Fe=null,Ie=null,$e=null,Qe=null,Pt=null,Ht=null;return{setTest:function(at){D||(at?Ne(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(at){me!==at&&!D&&(i.stencilMask(at),me=at)},setFunc:function(at,kt,Sn){(pe!==at||Fe!==kt||Ie!==Sn)&&(i.stencilFunc(at,kt,Sn),pe=at,Fe=kt,Ie=Sn)},setOp:function(at,kt,Sn){($e!==at||Qe!==kt||Pt!==Sn)&&(i.stencilOp(at,kt,Sn),$e=at,Qe=kt,Pt=Sn)},setLocked:function(at){D=at},setClear:function(at){Ht!==at&&(i.clearStencil(at),Ht=at)},reset:function(){D=!1,me=null,pe=null,Fe=null,Ie=null,$e=null,Qe=null,Pt=null,Ht=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,v=[],m=null,f=!1,w=null,x=null,_=null,R=null,E=null,C=null,N=null,y=new qe(0,0,0),T=0,U=!1,H=null,J=null,I=null,F=null,k=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=X>=2);let Z=null,ue={};const G=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),de=new mt().fromArray(G),Se=new mt().fromArray(ie);function Me(D,me,pe,Fe){const Ie=new Uint8Array(4),$e=i.createTexture();i.bindTexture(D,$e),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<pe;Qe++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(me,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(me+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return $e}const be={};be[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(i.DEPTH_TEST),l.setFunc(Zr),ve(!1),b(ml),Ne(i.CULL_FACE),Q(ti);function Ne(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function we(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ue(D,me){return p[D]!==me?(i.bindFramebuffer(D,me),p[D]=me,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=me),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=me)),!0):!1}function L(D,me){let pe=v,Fe=!1;if(D)if(pe=g.get(me),pe===void 0&&(pe=[],g.set(me,pe)),D.isWebGLMultipleRenderTargets){const Ie=D.texture;if(pe.length!==Ie.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,Qe=Ie.length;$e<Qe;$e++)pe[$e]=i.COLOR_ATTACHMENT0+$e;pe.length=Ie.length,Fe=!0}}else pe[0]!==i.COLOR_ATTACHMENT0&&(pe[0]=i.COLOR_ATTACHMENT0,Fe=!0);else pe[0]!==i.BACK&&(pe[0]=i.BACK,Fe=!0);Fe&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function fe(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const K={[mi]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};if(n)K[vl]=i.MIN,K[xl]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(K[vl]=D.MIN_EXT,K[xl]=D.MAX_EXT)}const le={[Md]:i.ZERO,[yd]:i.ONE,[Sd]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[Rd]:i.SRC_ALPHA_SATURATE,[Td]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[ya]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Cd]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Id]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(D,me,pe,Fe,Ie,$e,Qe,Pt,Ht,at){if(D===ti){f===!0&&(we(i.BLEND),f=!1);return}if(f===!1&&(Ne(i.BLEND),f=!0),D!==_d){if(D!==w||at!==U){if((x!==mi||E!==mi)&&(i.blendEquation(i.FUNC_ADD),x=mi,E=mi),at)switch(D){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,R=null,C=null,N=null,y.set(0,0,0),T=0,w=D,U=at}return}Ie=Ie||me,$e=$e||pe,Qe=Qe||Fe,(me!==x||Ie!==E)&&(i.blendEquationSeparate(K[me],K[Ie]),x=me,E=Ie),(pe!==_||Fe!==R||$e!==C||Qe!==N)&&(i.blendFuncSeparate(le[pe],le[Fe],le[$e],le[Qe]),_=pe,R=Fe,C=$e,N=Qe),(Pt.equals(y)===!1||Ht!==T)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Ht),y.copy(Pt),T=Ht),w=D,U=!1}function Re(D,me){D.side===tn?we(i.CULL_FACE):Ne(i.CULL_FACE);let pe=D.side===Yt;me&&(pe=!pe),ve(pe),D.blending===os&&D.transparent===!1?Q(ti):Q(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Fe=D.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(D){H!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),H=D)}function b(D){D!==md?(Ne(i.CULL_FACE),D!==J&&(D===ml?i.cullFace(i.BACK):D===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),J=D}function M(D){D!==I&&($&&i.lineWidth(D),I=D)}function B(D,me,pe){D?(Ne(i.POLYGON_OFFSET_FILL),(F!==me||k!==pe)&&(i.polygonOffset(me,pe),F=me,k=pe)):we(i.POLYGON_OFFSET_FILL)}function ae(D){D?Ne(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function se(D){D===void 0&&(D=i.TEXTURE0+ee-1),Z!==D&&(i.activeTexture(D),Z=D)}function re(D,me,pe){pe===void 0&&(Z===null?pe=i.TEXTURE0+ee-1:pe=Z);let Fe=ue[pe];Fe===void 0&&(Fe={type:void 0,texture:void 0},ue[pe]=Fe),(Fe.type!==D||Fe.texture!==me)&&(Z!==pe&&(i.activeTexture(pe),Z=pe),i.bindTexture(D,me||be[D]),Fe.type=D,Fe.texture=me)}function Te(){const D=ue[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function S(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(D){de.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function Oe(D){Se.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Se.copy(D))}function ke(D,me){let pe=h.get(me);pe===void 0&&(pe=new WeakMap,h.set(me,pe));let Fe=pe.get(D);Fe===void 0&&(Fe=i.getUniformBlockIndex(me,D.name),pe.set(D,Fe))}function Le(D,me){const Fe=h.get(me).get(D);u.get(me)!==Fe&&(i.uniformBlockBinding(me,Fe,D.__bindingPointIndex),u.set(me,Fe))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,ue={},p={},g=new WeakMap,v=[],m=null,f=!1,w=null,x=null,_=null,R=null,E=null,C=null,N=null,y=new qe(0,0,0),T=0,U=!1,H=null,J=null,I=null,F=null,k=null,de.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:we,bindFramebuffer:Ue,drawBuffers:L,useProgram:fe,setBlending:Q,setMaterial:Re,setFlipSided:ve,setCullFace:b,setLineWidth:M,setPolygonOffset:B,setScissorTest:ae,activeTexture:se,bindTexture:re,unbindTexture:Te,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:te,texImage3D:ne,updateUBOMapping:ke,uniformBlockBinding:Le,texStorage2D:S,texStorage3D:O,texSubImage2D:Pe,texSubImage3D:ze,compressedTexSubImage2D:oe,compressedTexSubImage3D:q,scissor:Ee,viewport:Oe,reset:ce}}function w_(i,e,t,n,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):to("canvas")}function v(b,M,B,ae){let se=1;if((b.width>ae||b.height>ae)&&(se=ae/Math.max(b.width,b.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=M?eo:Math.floor,Te=re(se*b.width),ge=re(se*b.height);h===void 0&&(h=g(Te,ge));const ye=B?g(Te,ge):h;return ye.width=Te,ye.height=ge,ye.getContext("2d").drawImage(b,0,0,Te,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Te+"x"+ge+")."),ye}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Aa(b.width)&&Aa(b.height)}function f(b){return o?!1:b.wrapS!==vn||b.wrapT!==vn||b.minFilter!==Xt&&b.minFilter!==on}function w(b,M){return b.generateMipmaps&&M&&b.minFilter!==Xt&&b.minFilter!==on}function x(b){i.generateMipmap(b)}function _(b,M,B,ae,se=!1){if(o===!1)return M;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=M;if(M===i.RED&&(B===i.FLOAT&&(re=i.R32F),B===i.HALF_FLOAT&&(re=i.R16F),B===i.UNSIGNED_BYTE&&(re=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(re=i.R8UI),B===i.UNSIGNED_SHORT&&(re=i.R16UI),B===i.UNSIGNED_INT&&(re=i.R32UI),B===i.BYTE&&(re=i.R8I),B===i.SHORT&&(re=i.R16I),B===i.INT&&(re=i.R32I)),M===i.RG&&(B===i.FLOAT&&(re=i.RG32F),B===i.HALF_FLOAT&&(re=i.RG16F),B===i.UNSIGNED_BYTE&&(re=i.RG8)),M===i.RGBA){const Te=se?Kr:nt.getTransfer(ae);B===i.FLOAT&&(re=i.RGBA32F),B===i.HALF_FLOAT&&(re=i.RGBA16F),B===i.UNSIGNED_BYTE&&(re=Te===dt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(b,M,B){return w(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==Xt&&b.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function E(b){return b===Xt||b===Ml||b===wo?i.NEAREST:i.LINEAR}function C(b){const M=b.target;M.removeEventListener("dispose",C),y(M),M.isVideoTexture&&u.delete(M)}function N(b){const M=b.target;M.removeEventListener("dispose",N),U(M)}function y(b){const M=n.get(b);if(M.__webglInit===void 0)return;const B=b.source,ae=d.get(B);if(ae){const se=ae[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(b),Object.keys(ae).length===0&&d.delete(B)}n.remove(b)}function T(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const B=b.source,ae=d.get(B);delete ae[M.__cacheKey],a.memory.textures--}function U(b){const M=b.texture,B=n.get(b),ae=n.get(M);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(B.__webglFramebuffer[se]))for(let re=0;re<B.__webglFramebuffer[se].length;re++)i.deleteFramebuffer(B.__webglFramebuffer[se][re]);else i.deleteFramebuffer(B.__webglFramebuffer[se]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[se])}else{if(Array.isArray(B.__webglFramebuffer))for(let se=0;se<B.__webglFramebuffer.length;se++)i.deleteFramebuffer(B.__webglFramebuffer[se]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let se=0;se<B.__webglColorRenderbuffer.length;se++)B.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[se]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let se=0,re=M.length;se<re;se++){const Te=n.get(M[se]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(M[se])}n.remove(M),n.remove(b)}let H=0;function J(){H=0}function I(){const b=H;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),H+=1,b}function F(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function k(b,M){const B=n.get(b);if(b.isVideoTexture&&Re(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(B,b,M);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function ee(b,M){const B=n.get(b);if(b.version>0&&B.__version!==b.version){de(B,b,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function $(b,M){const B=n.get(b);if(b.version>0&&B.__version!==b.version){de(B,b,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function X(b,M){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Se(B,b,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const j={[ba]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},Z={[Xt]:i.NEAREST,[Ml]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[qd]:i.LINEAR_MIPMAP_NEAREST,[Xs]:i.LINEAR_MIPMAP_LINEAR},ue={[of]:i.NEVER,[df]:i.ALWAYS,[af]:i.LESS,[Bu]:i.LEQUAL,[lf]:i.EQUAL,[hf]:i.GEQUAL,[cf]:i.GREATER,[uf]:i.NOTEQUAL};function G(b,M,B){if(B?(i.texParameteri(b,i.TEXTURE_WRAP_S,j[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,j[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,j[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Z[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Z[M.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==vn||M.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,E(M.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==Xt&&M.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Xt||M.minFilter!==wo&&M.minFilter!==Xs||M.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ys&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(b,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ie(b,M){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",C));const ae=M.source;let se=d.get(ae);se===void 0&&(se={},d.set(ae,se));const re=F(M);if(re!==b.__cacheKey){se[re]===void 0&&(se[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),se[re].usedTimes++;const Te=se[b.__cacheKey];Te!==void 0&&(se[b.__cacheKey].usedTimes--,Te.usedTimes===0&&T(M)),b.__cacheKey=re,b.__webglTexture=se[re].texture}return B}function de(b,M,B){let ae=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=i.TEXTURE_3D);const se=ie(b,M),re=M.source;t.bindTexture(ae,b.__webglTexture,i.TEXTURE0+B);const Te=n.get(re);if(re.version!==Te.__version||se===!0){t.activeTexture(i.TEXTURE0+B);const ge=nt.getPrimaries(nt.workingColorSpace),ye=M.colorSpace===ln?null:nt.getPrimaries(M.colorSpace),Pe=M.colorSpace===ln||ge===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ze=f(M)&&m(M.image)===!1;let oe=v(M.image,ze,!1,s.maxTextureSize);oe=ve(M,oe);const q=m(oe)||o,S=r.convert(M.format,M.colorSpace);let O=r.convert(M.type),te=_(M.internalFormat,S,O,M.colorSpace,M.isVideoTexture);G(ae,M,q);let ne;const Ee=M.mipmaps,Oe=o&&M.isVideoTexture!==!0&&te!==Nu,ke=Te.__version===void 0||se===!0,Le=R(M,oe,q);if(M.isDepthTexture)te=i.DEPTH_COMPONENT,o?M.type===Jn?te=i.DEPTH_COMPONENT32F:M.type===$n?te=i.DEPTH_COMPONENT24:M.type===xi?te=i.DEPTH24_STENCIL8:te=i.DEPTH_COMPONENT16:M.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Mi&&te===i.DEPTH_COMPONENT&&M.type!==Ya&&M.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$n,O=r.convert(M.type)),M.format===fs&&te===i.DEPTH_COMPONENT&&(te=i.DEPTH_STENCIL,M.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=xi,O=r.convert(M.type))),ke&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,te,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,te,oe.width,oe.height,0,S,O,null));else if(M.isDataTexture)if(Ee.length>0&&q){Oe&&ke&&t.texStorage2D(i.TEXTURE_2D,Le,te,Ee[0].width,Ee[0].height);for(let ce=0,D=Ee.length;ce<D;ce++)ne=Ee[ce],Oe?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ne.width,ne.height,S,O,ne.data):t.texImage2D(i.TEXTURE_2D,ce,te,ne.width,ne.height,0,S,O,ne.data);M.generateMipmaps=!1}else Oe?(ke&&t.texStorage2D(i.TEXTURE_2D,Le,te,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,S,O,oe.data)):t.texImage2D(i.TEXTURE_2D,0,te,oe.width,oe.height,0,S,O,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,te,Ee[0].width,Ee[0].height,oe.depth);for(let ce=0,D=Ee.length;ce<D;ce++)ne=Ee[ce],M.format!==xn?S!==null?Oe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ne.width,ne.height,oe.depth,S,ne.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,te,ne.width,ne.height,oe.depth,0,ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ne.width,ne.height,oe.depth,S,O,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,te,ne.width,ne.height,oe.depth,0,S,O,ne.data)}else{Oe&&ke&&t.texStorage2D(i.TEXTURE_2D,Le,te,Ee[0].width,Ee[0].height);for(let ce=0,D=Ee.length;ce<D;ce++)ne=Ee[ce],M.format!==xn?S!==null?Oe?t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,ne.width,ne.height,S,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,te,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ne.width,ne.height,S,O,ne.data):t.texImage2D(i.TEXTURE_2D,ce,te,ne.width,ne.height,0,S,O,ne.data)}else if(M.isDataArrayTexture)Oe?(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,te,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,S,O,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,te,oe.width,oe.height,oe.depth,0,S,O,oe.data);else if(M.isData3DTexture)Oe?(ke&&t.texStorage3D(i.TEXTURE_3D,Le,te,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,S,O,oe.data)):t.texImage3D(i.TEXTURE_3D,0,te,oe.width,oe.height,oe.depth,0,S,O,oe.data);else if(M.isFramebufferTexture){if(ke)if(Oe)t.texStorage2D(i.TEXTURE_2D,Le,te,oe.width,oe.height);else{let ce=oe.width,D=oe.height;for(let me=0;me<Le;me++)t.texImage2D(i.TEXTURE_2D,me,te,ce,D,0,S,O,null),ce>>=1,D>>=1}}else if(Ee.length>0&&q){Oe&&ke&&t.texStorage2D(i.TEXTURE_2D,Le,te,Ee[0].width,Ee[0].height);for(let ce=0,D=Ee.length;ce<D;ce++)ne=Ee[ce],Oe?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,S,O,ne):t.texImage2D(i.TEXTURE_2D,ce,te,S,O,ne);M.generateMipmaps=!1}else Oe?(ke&&t.texStorage2D(i.TEXTURE_2D,Le,te,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,S,O,oe)):t.texImage2D(i.TEXTURE_2D,0,te,S,O,oe);w(M,q)&&x(ae),Te.__version=re.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Se(b,M,B){if(M.image.length!==6)return;const ae=ie(b,M),se=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const re=n.get(se);if(se.version!==re.__version||ae===!0){t.activeTexture(i.TEXTURE0+B);const Te=nt.getPrimaries(nt.workingColorSpace),ge=M.colorSpace===ln?null:nt.getPrimaries(M.colorSpace),ye=M.colorSpace===ln||Te===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Pe=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let ce=0;ce<6;ce++)!Pe&&!ze?oe[ce]=v(M.image[ce],!1,!0,s.maxCubemapSize):oe[ce]=ze?M.image[ce].image:M.image[ce],oe[ce]=ve(M,oe[ce]);const q=oe[0],S=m(q)||o,O=r.convert(M.format,M.colorSpace),te=r.convert(M.type),ne=_(M.internalFormat,O,te,M.colorSpace),Ee=o&&M.isVideoTexture!==!0,Oe=re.__version===void 0||ae===!0;let ke=R(M,q,S);G(i.TEXTURE_CUBE_MAP,M,S);let Le;if(Pe){Ee&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ne,q.width,q.height);for(let ce=0;ce<6;ce++){Le=oe[ce].mipmaps;for(let D=0;D<Le.length;D++){const me=Le[D];M.format!==xn?O!==null?Ee?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,0,0,me.width,me.height,O,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,ne,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,0,0,me.width,me.height,O,te,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,ne,me.width,me.height,0,O,te,me.data)}}}else{Le=M.mipmaps,Ee&&Oe&&(Le.length>0&&ke++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ne,oe[0].width,oe[0].height));for(let ce=0;ce<6;ce++)if(ze){Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,oe[ce].width,oe[ce].height,O,te,oe[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ne,oe[ce].width,oe[ce].height,0,O,te,oe[ce].data);for(let D=0;D<Le.length;D++){const pe=Le[D].image[ce].image;Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,0,0,pe.width,pe.height,O,te,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,ne,pe.width,pe.height,0,O,te,pe.data)}}else{Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,O,te,oe[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ne,O,te,oe[ce]);for(let D=0;D<Le.length;D++){const me=Le[D];Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,0,0,O,te,me.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,ne,O,te,me.image[ce])}}}w(M,S)&&x(i.TEXTURE_CUBE_MAP),re.__version=se.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Me(b,M,B,ae,se,re){const Te=r.convert(B.format,B.colorSpace),ge=r.convert(B.type),ye=_(B.internalFormat,Te,ge,B.colorSpace);if(!n.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>re),oe=Math.max(1,M.height>>re);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,re,ye,ze,oe,M.depth,0,Te,ge,null):t.texImage2D(se,re,ye,ze,oe,0,Te,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Q(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,se,n.get(B).__webglTexture,0,le(M)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,se,n.get(B).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(b,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let ae=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||Q(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===Jn?ae=i.DEPTH_COMPONENT32F:se.type===$n&&(ae=i.DEPTH_COMPONENT24));const re=le(M);Q(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ae,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ae,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const ae=le(M);B&&Q(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,M.width,M.height):Q(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<ae.length;se++){const re=ae[se],Te=r.convert(re.format,re.colorSpace),ge=r.convert(re.type),ye=_(re.internalFormat,Te,ge,re.colorSpace),Pe=le(M);B&&Q(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ye,M.width,M.height):Q(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ye,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ye,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const ae=n.get(M.depthTexture).__webglTexture,se=le(M);if(M.depthTexture.format===Mi)Q(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(M.depthTexture.format===fs)Q(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function we(b){const M=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,b)}else if(B){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=i.createRenderbuffer(),be(M.__webglDepthbuffer[ae],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),be(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(b,M,B){const ae=n.get(b);M!==void 0&&Me(ae.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&we(b)}function L(b){const M=b.texture,B=n.get(b),ae=n.get(M);b.addEventListener("dispose",N),b.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=M.version,a.memory.textures++);const se=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,Te=m(b)||o;if(se){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let ye=0;ye<M.mipmaps.length;ye++)B.__webglFramebuffer[ge][ye]=i.createFramebuffer()}else B.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)B.__webglFramebuffer[ge]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(re)if(s.drawBuffers){const ge=b.texture;for(let ye=0,Pe=ge.length;ye<Pe;ye++){const ze=n.get(ge[ye]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Q(b)===!1){const ge=re?M:[M];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ye=0;ye<ge.length;ye++){const Pe=ge[ye];B.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ye]);const ze=r.convert(Pe.format,Pe.colorSpace),oe=r.convert(Pe.type),q=_(Pe.internalFormat,ze,oe,Pe.colorSpace,b.isXRRenderTarget===!0),S=le(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,S,q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,B.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),be(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),G(i.TEXTURE_CUBE_MAP,M,Te);for(let ge=0;ge<6;ge++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)Me(B.__webglFramebuffer[ge][ye],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else Me(B.__webglFramebuffer[ge],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);w(M,Te)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const ge=b.texture;for(let ye=0,Pe=ge.length;ye<Pe;ye++){const ze=ge[ye],oe=n.get(ze);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),G(i.TEXTURE_2D,ze,Te),Me(B.__webglFramebuffer,b,ze,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),w(ze,Te)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ge=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ae.__webglTexture),G(ge,M,Te),o&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)Me(B.__webglFramebuffer[ye],b,M,i.COLOR_ATTACHMENT0,ge,ye);else Me(B.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,ge,0);w(M,Te)&&x(ge),t.unbindTexture()}b.depthBuffer&&we(b)}function fe(b){const M=m(b)||o,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0,se=B.length;ae<se;ae++){const re=B[ae];if(w(re,M)){const Te=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ge=n.get(re).__webglTexture;t.bindTexture(Te,ge),x(Te),t.unbindTexture()}}}function K(b){if(o&&b.samples>0&&Q(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,ae=b.height;let se=i.COLOR_BUFFER_BIT;const re=[],Te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(b),ye=b.isWebGLMultipleRenderTargets===!0;if(ye)for(let Pe=0;Pe<M.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Pe=0;Pe<M.length;Pe++){re.push(i.COLOR_ATTACHMENT0+Pe),b.depthBuffer&&re.push(Te);const ze=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(ze===!1&&(b.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Pe]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Te]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Te])),ye){const oe=n.get(M[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,B,ae,0,0,B,ae,se,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Pe=0;Pe<M.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Pe]);const ze=n.get(M[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function le(b){return Math.min(s.maxSamples,b.samples)}function Q(b){const M=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(b){const M=a.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function ve(b,M){const B=b.colorSpace,ae=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ta||B!==Hn&&B!==ln&&(nt.getTransfer(B)===dt?o===!1?e.has("EXT_sRGB")===!0&&ae===xn?(b.format=Ta,b.minFilter=on,b.generateMipmaps=!1):M=Gu.sRGBToLinear(M):(ae!==xn||se!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=I,this.resetTextureUnits=J,this.setTexture2D=k,this.setTexture2DArray=ee,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=Ue,this.setupRenderTarget=L,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Q}function T_(i,e,t){const n=t.isWebGL2;function s(r,a=ln){let o;const l=nt.getTransfer(a);if(r===ii)return i.UNSIGNED_BYTE;if(r===Pu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Lu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===jd)return i.BYTE;if(r===Zd)return i.SHORT;if(r===Ya)return i.UNSIGNED_SHORT;if(r===Cu)return i.INT;if(r===$n)return i.UNSIGNED_INT;if(r===Jn)return i.FLOAT;if(r===Ys)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Kd)return i.ALPHA;if(r===xn)return i.RGBA;if(r===$d)return i.LUMINANCE;if(r===Jd)return i.LUMINANCE_ALPHA;if(r===Mi)return i.DEPTH_COMPONENT;if(r===fs)return i.DEPTH_STENCIL;if(r===Ta)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Qd)return i.RED;if(r===Iu)return i.RED_INTEGER;if(r===ef)return i.RG;if(r===Du)return i.RG_INTEGER;if(r===Uu)return i.RGBA_INTEGER;if(r===To||r===Ao||r===Ro||r===Co)if(l===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===To)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===To)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ao)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Co)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yl||r===Sl||r===El||r===bl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===yl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===El)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wl||r===Tl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===wl)return l===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Tl)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Al||r===Rl||r===Cl||r===Pl||r===Ll||r===Il||r===Dl||r===Ul||r===Nl||r===Ol||r===Fl||r===Bl||r===zl||r===Gl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Al)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rl)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cl)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pl)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ll)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Il)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dl)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ul)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nl)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ol)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fl)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bl)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zl)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gl)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Po||r===Hl||r===kl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Po)return l===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tf||r===Vl||r===Wl||r===Xl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Po)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class A_ extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ft extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R_={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class C_ extends Ri{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=t.getContextAttributes();let m=null,f=null;const w=[],x=[],_=new he;let R=null;const E=new Qt;E.layers.enable(1),E.viewport=new mt;const C=new Qt;C.layers.enable(2),C.viewport=new mt;const N=[E,C],y=new A_;y.layers.enable(1),y.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ie=w[G];return ie===void 0&&(ie=new Qo,w[G]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(G){let ie=w[G];return ie===void 0&&(ie=new Qo,w[G]=ie),ie.getGripSpace()},this.getHand=function(G){let ie=w[G];return ie===void 0&&(ie=new Qo,w[G]=ie),ie.getHandSpace()};function H(G){const ie=x.indexOf(G.inputSource);if(ie===-1)return;const de=w[ie];de!==void 0&&(de.update(G.inputSource,G.frame,c||a),de.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",I);for(let G=0;G<w.length;G++){const ie=x[G];ie!==null&&(x[G]=null,w[G].disconnect(ie))}T=null,U=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",J),s.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(_),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new bi(p.framebufferWidth,p.framebufferHeight,{format:xn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ie=null,de=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?fs:Mi,de=v.stencil?xi:$n);const Me={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new bi(d.textureWidth,d.textureHeight,{format:xn,type:ii,depthTexture:new $u(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const be=e.properties.get(f);be.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ue.setContext(s),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(G){for(let ie=0;ie<G.removed.length;ie++){const de=G.removed[ie],Se=x.indexOf(de);Se>=0&&(x[Se]=null,w[Se].disconnect(de))}for(let ie=0;ie<G.added.length;ie++){const de=G.added[ie];let Se=x.indexOf(de);if(Se===-1){for(let be=0;be<w.length;be++)if(be>=x.length){x.push(de),Se=be;break}else if(x[be]===null){x[be]=de,Se=be;break}if(Se===-1)break}const Me=w[Se];Me&&Me.connect(de)}}const F=new P,k=new P;function ee(G,ie,de){F.setFromMatrixPosition(ie.matrixWorld),k.setFromMatrixPosition(de.matrixWorld);const Se=F.distanceTo(k),Me=ie.projectionMatrix.elements,be=de.projectionMatrix.elements,Ne=Me[14]/(Me[10]-1),we=Me[14]/(Me[10]+1),Ue=(Me[9]+1)/Me[5],L=(Me[9]-1)/Me[5],fe=(Me[8]-1)/Me[0],K=(be[8]+1)/be[0],le=Ne*fe,Q=Ne*K,Re=Se/(-fe+K),ve=Re*-fe;ie.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ve),G.translateZ(Re),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const b=Ne+Re,M=we+Re,B=le-ve,ae=Q+(Se-ve),se=Ue*we/M*b,re=L*we/M*b;G.projectionMatrix.makePerspective(B,ae,se,re,b,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function $(G,ie){ie===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ie.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;y.near=C.near=E.near=G.near,y.far=C.far=E.far=G.far,(T!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,U=y.far);const ie=G.parent,de=y.cameras;$(y,ie);for(let Se=0;Se<de.length;Se++)$(de[Se],ie);de.length===2?ee(y,E,C):y.projectionMatrix.copy(E.projectionMatrix),X(G,y,ie)};function X(G,ie,de){de===null?G.matrix.copy(ie.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(ie.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ie.projectionMatrix),G.projectionMatrixInverse.copy(ie.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=qs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let j=null;function Z(G,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Se=!1;de.length!==y.cameras.length&&(y.cameras.length=0,Se=!0);for(let Me=0;Me<de.length;Me++){const be=de[Me];let Ne=null;if(p!==null)Ne=p.getViewport(be);else{const Ue=h.getViewSubImage(d,be);Ne=Ue.viewport,Me===0&&(e.setRenderTargetTextures(f,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(f))}let we=N[Me];we===void 0&&(we=new Qt,we.layers.enable(Me),we.viewport=new mt,N[Me]=we),we.matrix.fromArray(be.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(be.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Me===0&&(y.matrix.copy(we.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Se===!0&&y.cameras.push(we)}}for(let de=0;de<w.length;de++){const Se=x[de],Me=w[de];Se!==null&&Me!==void 0&&Me.update(Se,ie,c||a)}j&&j(G,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const ue=new Zu;ue.setAnimationLoop(Z),this.setAnimationLoop=function(G){j=G},this.dispose=function(){}}}function P_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Yu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,x,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Yt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Yt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L_(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,x){const _=x.program;n.uniformBlockBinding(w,_)}function c(w,x){let _=s[w.id];_===void 0&&(g(w),_=u(w),s[w.id]=_,w.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(w,R);const E=e.render.frame;r[w.id]!==E&&(d(w),r[w.id]=E)}function u(w){const x=h();w.__bindingPointIndex=x;const _=i.createBuffer(),R=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=s[w.id],_=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,C=_.length;E<C;E++){const N=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,T=N.length;y<T;y++){const U=N[y];if(p(U,E,y,R)===!0){const H=U.__offset,J=Array.isArray(U.value)?U.value:[U.value];let I=0;for(let F=0;F<J.length;F++){const k=J[F],ee=v(k);typeof k=="number"||typeof k=="boolean"?(U.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,H+I,U.__data)):k.isMatrix3?(U.__data[0]=k.elements[0],U.__data[1]=k.elements[1],U.__data[2]=k.elements[2],U.__data[3]=0,U.__data[4]=k.elements[3],U.__data[5]=k.elements[4],U.__data[6]=k.elements[5],U.__data[7]=0,U.__data[8]=k.elements[6],U.__data[9]=k.elements[7],U.__data[10]=k.elements[8],U.__data[11]=0):(k.toArray(U.__data,I),I+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,x,_,R){const E=w.value,C=x+"_"+_;if(R[C]===void 0)return typeof E=="number"||typeof E=="boolean"?R[C]=E:R[C]=E.clone(),!0;{const N=R[C];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return R[C]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function g(w){const x=w.uniforms;let _=0;const R=16;for(let C=0,N=x.length;C<N;C++){const y=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,U=y.length;T<U;T++){const H=y[T],J=Array.isArray(H.value)?H.value:[H.value];for(let I=0,F=J.length;I<F;I++){const k=J[I],ee=v(k),$=_%R;$!==0&&R-$<ee.boundary&&(_+=R-$),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=ee.storage}}}const E=_%R;return E>0&&(_+=R-E),w.__size=_,w.__cache={},this}function v(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class ih{constructor(e={}){const{canvas:t=Af(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const x=this;let _=!1,R=0,E=0,C=null,N=-1,y=null;const T=new mt,U=new mt;let H=null;const J=new qe(0);let I=0,F=t.width,k=t.height,ee=1,$=null,X=null;const j=new mt(0,0,F,k),Z=new mt(0,0,F,k);let ue=!1;const G=new Ka;let ie=!1,de=!1,Se=null;const Me=new pt,be=new he,Ne=new P,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return C===null?ee:1}let L=n;function fe(A,z){for(let W=0;W<A.length;W++){const Y=A[W],V=t.getContext(Y,z);if(V!==null)return V}return null}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xa}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",me,!1),L===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),L=fe(z,A),L===null)throw fe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,le,Q,Re,ve,b,M,B,ae,se,re,Te,ge,ye,Pe,ze,oe,q,S,O,te,ne,Ee,Oe;function ke(){K=new H0(L),le=new N0(L,K,e),K.init(le),ne=new T_(L,K,le),Q=new b_(L,K,le),Re=new W0(L),ve=new u_,b=new w_(L,K,Q,ve,le,ne,Re),M=new F0(x),B=new G0(x),ae=new Jf(L,le),Ee=new D0(L,K,ae,le),se=new k0(L,ae,Re,Ee),re=new j0(L,se,ae,Re),S=new q0(L,le,b),ze=new O0(ve),Te=new c_(x,M,B,K,le,Ee,ze),ge=new P_(x,ve),ye=new d_,Pe=new v_(K,le),q=new I0(x,M,B,Q,re,d,l),oe=new E_(x,re,le),Oe=new L_(L,Re,le,Q),O=new U0(L,K,Re,le),te=new V0(L,K,Re,le),Re.programs=Te.programs,x.capabilities=le,x.extensions=K,x.properties=ve,x.renderLists=ye,x.shadowMap=oe,x.state=Q,x.info=Re}ke();const Le=new C_(x,L);this.xr=Le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(F,k,!1))},this.getSize=function(A){return A.set(F,k)},this.setSize=function(A,z,W=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,k=z,t.width=Math.floor(A*ee),t.height=Math.floor(z*ee),W===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(F*ee,k*ee).floor()},this.setDrawingBufferSize=function(A,z,W){F=A,k=z,ee=W,t.width=Math.floor(A*W),t.height=Math.floor(z*W),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,z,W,Y){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,z,W,Y),Q.viewport(T.copy(j).multiplyScalar(ee).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,z,W,Y){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,z,W,Y),Q.scissor(U.copy(Z).multiplyScalar(ee).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(A){Q.setScissorTest(ue=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(A=!0,z=!0,W=!0){let Y=0;if(A){let V=!1;if(C!==null){const Ae=C.texture.format;V=Ae===Uu||Ae===Du||Ae===Iu}if(V){const Ae=C.texture.type,De=Ae===ii||Ae===$n||Ae===Ya||Ae===xi||Ae===Pu||Ae===Lu,Ge=q.getClearColor(),Ve=q.getClearAlpha(),je=Ge.r,We=Ge.g,Xe=Ge.b;De?(p[0]=je,p[1]=We,p[2]=Xe,p[3]=Ve,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=je,g[1]=We,g[2]=Xe,g[3]=Ve,L.clearBufferiv(L.COLOR,0,g))}else Y|=L.COLOR_BUFFER_BIT}z&&(Y|=L.DEPTH_BUFFER_BIT),W&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),Pe.dispose(),ve.dispose(),M.dispose(),B.dispose(),re.dispose(),Ee.dispose(),Oe.dispose(),Te.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Ht),Le.removeEventListener("sessionend",at),Se&&(Se.dispose(),Se=null),kt.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const A=Re.autoReset,z=oe.enabled,W=oe.autoUpdate,Y=oe.needsUpdate,V=oe.type;ke(),Re.autoReset=A,oe.enabled=z,oe.autoUpdate=W,oe.needsUpdate=Y,oe.type=V}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){const z=A.target;z.removeEventListener("dispose",pe),Fe(z)}function Fe(A){Ie(A),ve.remove(A)}function Ie(A){const z=ve.get(A).programs;z!==void 0&&(z.forEach(function(W){Te.releaseProgram(W)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,W,Y,V,Ae){z===null&&(z=we);const De=V.isMesh&&V.matrixWorld.determinant()<0,Ge=cd(A,z,W,Y,V);Q.setMaterial(Y,De);let Ve=W.index,je=1;if(Y.wireframe===!0){if(Ve=se.getWireframeAttribute(W),Ve===void 0)return;je=2}const We=W.drawRange,Xe=W.attributes.position;let yt=We.start*je,Zt=(We.start+We.count)*je;Ae!==null&&(yt=Math.max(yt,Ae.start*je),Zt=Math.min(Zt,(Ae.start+Ae.count)*je)),Ve!==null?(yt=Math.max(yt,0),Zt=Math.min(Zt,Ve.count)):Xe!=null&&(yt=Math.max(yt,0),Zt=Math.min(Zt,Xe.count));const Lt=Zt-yt;if(Lt<0||Lt===1/0)return;Ee.setup(V,Y,Ge,W,Ve);let Cn,gt=O;if(Ve!==null&&(Cn=ae.get(Ve),gt=te,gt.setIndex(Cn)),V.isMesh)Y.wireframe===!0?(Q.setLineWidth(Y.wireframeLinewidth*Ue()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(V.isLine){let Ze=Y.linewidth;Ze===void 0&&(Ze=1),Q.setLineWidth(Ze*Ue()),V.isLineSegments?gt.setMode(L.LINES):V.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else V.isPoints?gt.setMode(L.POINTS):V.isSprite&&gt.setMode(L.TRIANGLES);if(V.isBatchedMesh)gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)gt.renderInstances(yt,Lt,V.count);else if(W.isInstancedBufferGeometry){const Ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,yo=Math.min(W.instanceCount,Ze);gt.renderInstances(yt,Lt,yo)}else gt.render(yt,Lt)};function $e(A,z,W){A.transparent===!0&&A.side===tn&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,nr(A,z,W),A.side=si,A.needsUpdate=!0,nr(A,z,W),A.side=tn):nr(A,z,W)}this.compile=function(A,z,W=null){W===null&&(W=A),m=Pe.get(W),m.init(),w.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==W&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const Y=new Set;return A.traverse(function(V){const Ae=V.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const Ge=Ae[De];$e(Ge,W,V),Y.add(Ge)}else $e(Ae,W,V),Y.add(Ae)}),w.pop(),m=null,Y},this.compileAsync=function(A,z,W=null){const Y=this.compile(A,z,W);return new Promise(V=>{function Ae(){if(Y.forEach(function(De){ve.get(De).currentProgram.isReady()&&Y.delete(De)}),Y.size===0){V(A);return}setTimeout(Ae,10)}K.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Qe=null;function Pt(A){Qe&&Qe(A)}function Ht(){kt.stop()}function at(){kt.start()}const kt=new Zu;kt.setAnimationLoop(Pt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(A){Qe=A,Le.setAnimationLoop(A),A===null?kt.stop():kt.start()},Le.addEventListener("sessionstart",Ht),Le.addEventListener("sessionend",at),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(z),z=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,C),m=Pe.get(A,w.length),m.init(),w.push(m),Me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G.setFromProjectionMatrix(Me),de=this.localClippingEnabled,ie=ze.init(this.clippingPlanes,de),v=ye.get(A,f.length),v.init(),f.push(v),Sn(A,z,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort($,X),this.info.render.frame++,ie===!0&&ze.beginShadows();const W=m.state.shadowsArray;if(oe.render(W,A,z),ie===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(v,A),m.setupLights(x._useLegacyLights),z.isArrayCamera){const Y=z.cameras;for(let V=0,Ae=Y.length;V<Ae;V++){const De=Y[V];ll(v,A,De,De.viewport)}}else ll(v,A,z);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,z),Ee.resetDefaultState(),N=-1,y=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Sn(A,z,W,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){Y&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const De=re.update(A),Ge=A.material;Ge.visible&&v.push(A,De,Ge,W,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||G.intersectsObject(A))){const De=re.update(A),Ge=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ne.copy(De.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Ge)){const Ve=De.groups;for(let je=0,We=Ve.length;je<We;je++){const Xe=Ve[je],yt=Ge[Xe.materialIndex];yt&&yt.visible&&v.push(A,De,yt,W,Ne.z,Xe)}}else Ge.visible&&v.push(A,De,Ge,W,Ne.z,null)}}const Ae=A.children;for(let De=0,Ge=Ae.length;De<Ge;De++)Sn(Ae[De],z,W,Y)}function ll(A,z,W,Y){const V=A.opaque,Ae=A.transmissive,De=A.transparent;m.setupLightsView(W),ie===!0&&ze.setGlobalState(x.clippingPlanes,W),Ae.length>0&&ld(V,Ae,z,W),Y&&Q.viewport(T.copy(Y)),V.length>0&&tr(V,z,W),Ae.length>0&&tr(Ae,z,W),De.length>0&&tr(De,z,W),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ld(A,z,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const Ae=le.isWebGL2;Se===null&&(Se=new bi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?Ys:ii,minFilter:Xs,samples:Ae?4:0})),x.getDrawingBufferSize(be),Ae?Se.setSize(be.x,be.y):Se.setSize(eo(be.x),eo(be.y));const De=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(J),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Ge=x.toneMapping;x.toneMapping=ni,tr(A,W,Y),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se);let Ve=!1;for(let je=0,We=z.length;je<We;je++){const Xe=z[je],yt=Xe.object,Zt=Xe.geometry,Lt=Xe.material,Cn=Xe.group;if(Lt.side===tn&&yt.layers.test(Y.layers)){const gt=Lt.side;Lt.side=Yt,Lt.needsUpdate=!0,cl(yt,W,Y,Zt,Lt,Cn),Lt.side=gt,Lt.needsUpdate=!0,Ve=!0}}Ve===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se)),x.setRenderTarget(De),x.setClearColor(J,I),x.toneMapping=Ge}function tr(A,z,W){const Y=z.isScene===!0?z.overrideMaterial:null;for(let V=0,Ae=A.length;V<Ae;V++){const De=A[V],Ge=De.object,Ve=De.geometry,je=Y===null?De.material:Y,We=De.group;Ge.layers.test(W.layers)&&cl(Ge,z,W,Ve,je,We)}}function cl(A,z,W,Y,V,Ae){A.onBeforeRender(x,z,W,Y,V,Ae),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,z,W,Y,A,Ae),V.transparent===!0&&V.side===tn&&V.forceSinglePass===!1?(V.side=Yt,V.needsUpdate=!0,x.renderBufferDirect(W,z,Y,V,A,Ae),V.side=si,V.needsUpdate=!0,x.renderBufferDirect(W,z,Y,V,A,Ae),V.side=tn):x.renderBufferDirect(W,z,Y,V,A,Ae),A.onAfterRender(x,z,W,Y,V,Ae)}function nr(A,z,W){z.isScene!==!0&&(z=we);const Y=ve.get(A),V=m.state.lights,Ae=m.state.shadowsArray,De=V.state.version,Ge=Te.getParameters(A,V.state,Ae,z,W),Ve=Te.getProgramCacheKey(Ge);let je=Y.programs;Y.environment=A.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(A.isMeshStandardMaterial?B:M).get(A.envMap||Y.environment),je===void 0&&(A.addEventListener("dispose",pe),je=new Map,Y.programs=je);let We=je.get(Ve);if(We!==void 0){if(Y.currentProgram===We&&Y.lightsStateVersion===De)return hl(A,Ge),We}else Ge.uniforms=Te.getUniforms(A),A.onBuild(W,Ge,x),A.onBeforeCompile(Ge,x),We=Te.acquireProgram(Ge,Ve),je.set(Ve,We),Y.uniforms=Ge.uniforms;const Xe=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=ze.uniform),hl(A,Ge),Y.needsLights=hd(A),Y.lightsStateVersion=De,Y.needsLights&&(Xe.ambientLightColor.value=V.state.ambient,Xe.lightProbe.value=V.state.probe,Xe.directionalLights.value=V.state.directional,Xe.directionalLightShadows.value=V.state.directionalShadow,Xe.spotLights.value=V.state.spot,Xe.spotLightShadows.value=V.state.spotShadow,Xe.rectAreaLights.value=V.state.rectArea,Xe.ltc_1.value=V.state.rectAreaLTC1,Xe.ltc_2.value=V.state.rectAreaLTC2,Xe.pointLights.value=V.state.point,Xe.pointLightShadows.value=V.state.pointShadow,Xe.hemisphereLights.value=V.state.hemi,Xe.directionalShadowMap.value=V.state.directionalShadowMap,Xe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Xe.spotShadowMap.value=V.state.spotShadowMap,Xe.spotLightMatrix.value=V.state.spotLightMatrix,Xe.spotLightMap.value=V.state.spotLightMap,Xe.pointShadowMap.value=V.state.pointShadowMap,Xe.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=We,Y.uniformsList=null,We}function ul(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Xr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function hl(A,z){const W=ve.get(A);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function cd(A,z,W,Y,V){z.isScene!==!0&&(z=we),b.resetTextureUnits();const Ae=z.fog,De=Y.isMeshStandardMaterial?z.environment:null,Ge=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Hn,Ve=(Y.isMeshStandardMaterial?B:M).get(Y.envMap||De),je=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Xe=!!W.morphAttributes.position,yt=!!W.morphAttributes.normal,Zt=!!W.morphAttributes.color;let Lt=ni;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const Cn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=Cn!==void 0?Cn.length:0,Ze=ve.get(Y),yo=m.state.lights;if(ie===!0&&(de===!0||A!==y)){const nn=A===y&&Y.id===N;ze.setState(Y,A,nn)}let Mt=!1;Y.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==yo.state.version||Ze.outputColorSpace!==Ge||V.isBatchedMesh&&Ze.batching===!1||!V.isBatchedMesh&&Ze.batching===!0||V.isInstancedMesh&&Ze.instancing===!1||!V.isInstancedMesh&&Ze.instancing===!0||V.isSkinnedMesh&&Ze.skinning===!1||!V.isSkinnedMesh&&Ze.skinning===!0||V.isInstancedMesh&&Ze.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ze.instancingColor===!1&&V.instanceColor!==null||Ze.envMap!==Ve||Y.fog===!0&&Ze.fog!==Ae||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ze.numPlanes||Ze.numIntersection!==ze.numIntersection)||Ze.vertexAlphas!==je||Ze.vertexTangents!==We||Ze.morphTargets!==Xe||Ze.morphNormals!==yt||Ze.morphColors!==Zt||Ze.toneMapping!==Lt||le.isWebGL2===!0&&Ze.morphTargetsCount!==gt)&&(Mt=!0):(Mt=!0,Ze.__version=Y.version);let ri=Ze.currentProgram;Mt===!0&&(ri=nr(Y,z,V));let dl=!1,ys=!1,So=!1;const Bt=ri.getUniforms(),oi=Ze.uniforms;if(Q.useProgram(ri.program)&&(dl=!0,ys=!0,So=!0),Y.id!==N&&(N=Y.id,ys=!0),dl||y!==A){Bt.setValue(L,"projectionMatrix",A.projectionMatrix),Bt.setValue(L,"viewMatrix",A.matrixWorldInverse);const nn=Bt.map.cameraPosition;nn!==void 0&&nn.setValue(L,Ne.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&Bt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Bt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,ys=!0,So=!0)}if(V.isSkinnedMesh){Bt.setOptional(L,V,"bindMatrix"),Bt.setOptional(L,V,"bindMatrixInverse");const nn=V.skeleton;nn&&(le.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Bt.setValue(L,"boneTexture",nn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Bt.setOptional(L,V,"batchingTexture"),Bt.setValue(L,"batchingTexture",V._matricesTexture,b));const Eo=W.morphAttributes;if((Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0&&le.isWebGL2===!0)&&S.update(V,W,ri),(ys||Ze.receiveShadow!==V.receiveShadow)&&(Ze.receiveShadow=V.receiveShadow,Bt.setValue(L,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(oi.envMap.value=Ve,oi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ys&&(Bt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&ud(oi,So),Ae&&Y.fog===!0&&ge.refreshFogUniforms(oi,Ae),ge.refreshMaterialUniforms(oi,Y,ee,k,Se),Xr.upload(L,ul(Ze),oi,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Xr.upload(L,ul(Ze),oi,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Bt.setValue(L,"center",V.center),Bt.setValue(L,"modelViewMatrix",V.modelViewMatrix),Bt.setValue(L,"normalMatrix",V.normalMatrix),Bt.setValue(L,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const nn=Y.uniformsGroups;for(let bo=0,dd=nn.length;bo<dd;bo++)if(le.isWebGL2){const fl=nn[bo];Oe.update(fl,ri),Oe.bind(fl,ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ri}function ud(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function hd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,W){ve.get(A.texture).__webglTexture=z,ve.get(A.depthTexture).__webglTexture=W;const Y=ve.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const W=ve.get(A);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,W=0){C=A,R=z,E=W;let Y=!0,V=null,Ae=!1,De=!1;if(A){const Ve=ve.get(A);Ve.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1):Ve.__webglFramebuffer===void 0?b.setupRenderTarget(A):Ve.__hasExternalTextures&&b.rebindTextures(A,ve.get(A.texture).__webglTexture,ve.get(A.depthTexture).__webglTexture);const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);const We=ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[z])?V=We[z][W]:V=We[z],Ae=!0):le.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?V=ve.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?V=We[W]:V=We,T.copy(A.viewport),U.copy(A.scissor),H=A.scissorTest}else T.copy(j).multiplyScalar(ee).floor(),U.copy(Z).multiplyScalar(ee).floor(),H=ue;if(Q.bindFramebuffer(L.FRAMEBUFFER,V)&&le.drawBuffers&&Y&&Q.drawBuffers(A,V),Q.viewport(T),Q.scissor(U),Q.setScissorTest(H),Ae){const Ve=ve.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ve.__webglTexture,W)}else if(De){const Ve=ve.get(A.texture),je=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,W||0,je)}N=-1},this.readRenderTargetPixels=function(A,z,W,Y,V,Ae,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ge=Ge[De]),Ge){Q.bindFramebuffer(L.FRAMEBUFFER,Ge);try{const Ve=A.texture,je=Ve.format,We=Ve.type;if(je!==xn&&ne.convert(je)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=We===Ys&&(K.has("EXT_color_buffer_half_float")||le.isWebGL2&&K.has("EXT_color_buffer_float"));if(We!==ii&&ne.convert(We)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===Jn&&(le.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&W>=0&&W<=A.height-V&&L.readPixels(z,W,Y,V,ne.convert(je),ne.convert(We),Ae)}finally{const Ve=C!==null?ve.get(C).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(A,z,W=0){const Y=Math.pow(2,-W),V=Math.floor(z.image.width*Y),Ae=Math.floor(z.image.height*Y);b.setTexture2D(z,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,A.x,A.y,V,Ae),Q.unbindTexture()},this.copyTextureToTexture=function(A,z,W,Y=0){const V=z.image.width,Ae=z.image.height,De=ne.convert(W.format),Ge=ne.convert(W.type);b.setTexture2D(W,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment),z.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Y,A.x,A.y,V,Ae,De,Ge,z.image.data):z.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Y,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,De,z.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,Y,A.x,A.y,De,Ge,z.image),Y===0&&W.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(A,z,W,Y,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=A.max.x-A.min.x+1,De=A.max.y-A.min.y+1,Ge=A.max.z-A.min.z+1,Ve=ne.convert(Y.format),je=ne.convert(Y.type);let We;if(Y.isData3DTexture)b.setTexture3D(Y,0),We=L.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)b.setTexture2DArray(Y,0),We=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Y.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Y.unpackAlignment);const Xe=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zt=L.getParameter(L.UNPACK_SKIP_PIXELS),Lt=L.getParameter(L.UNPACK_SKIP_ROWS),Cn=L.getParameter(L.UNPACK_SKIP_IMAGES),gt=W.isCompressedTexture?W.mipmaps[V]:W.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,A.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,A.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?L.texSubImage3D(We,V,z.x,z.y,z.z,Ae,De,Ge,Ve,je,gt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(We,V,z.x,z.y,z.z,Ae,De,Ge,Ve,gt.data)):L.texSubImage3D(We,V,z.x,z.y,z.z,Ae,De,Ge,Ve,je,gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Xe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Cn),V===0&&Y.generateMipmaps&&L.generateMipmap(We),Q.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){R=0,E=0,C=null,Q.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qa?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===co?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?yi:Ou}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yi?Ft:Hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class I_ extends ih{}I_.prototype.isWebGL1Renderer=!0;class Ja{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new Ja(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sh extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Dc extends cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zi=new pt,Uc=new pt,wr=[],Nc=new Pi,D_=new pt,Ts=new Ce,As=new vs;class U_ extends Ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,D_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),Nc.copy(e.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Nc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),As.copy(e.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),e.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),Uc.multiplyMatrices(n,Zi),Ts.matrixWorld=Uc,Ts.raycast(e,wr);for(let a=0,o=wr.length;a<o;a++){const l=wr[a];l.instanceId=r,l.object=this,t.push(l)}wr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Qa extends xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oc=new P,Fc=new P,Bc=new pt,ea=new uo,Tr=new vs;class N_ extends At{constructor(e=new Ot,t=new Qa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Oc.fromBufferAttribute(t,s-1),Fc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Oc.distanceTo(Fc);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,e.ray.intersectsSphere(Tr)===!1)return;Bc.copy(s).invert(),ea.copy(e.ray).applyMatrix4(Bc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,u=new P,h=new P,d=new P,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let x=f,_=w-1;x<_;x+=p){const R=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,R),u.fromBufferAttribute(m,E),ea.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),w=Math.min(m.count,a.start+a.count);for(let x=f,_=w-1;x<_;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),ea.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const zc=new P,Gc=new P;class rh extends N_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zc.fromBufferAttribute(t,s),Gc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zc.distanceTo(Gc);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wx extends jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,s=[],r=[],a=[],o=new P,l=new pt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Tt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Tt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class el extends dn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new he,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class O_ extends el{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function tl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ar=new P,ta=new tl,na=new tl,ia=new tl;class Pa extends dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ar.subVectors(s[0],s[1]).add(s[0]),c=Ar);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ta.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,m),na.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,m),ia.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ta.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),na.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ia.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ta.calc(l),na.calc(l),ia.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hc(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function F_(i,e){const t=1-i;return t*t*e}function B_(i,e){return 2*(1-i)*i*e}function z_(i,e){return i*i*e}function Os(i,e,t,n){return F_(i,e)+B_(i,t)+z_(i,n)}function G_(i,e){const t=1-i;return t*t*t*e}function H_(i,e){const t=1-i;return 3*t*t*i*e}function k_(i,e){return 3*(1-i)*i*i*e}function V_(i,e){return i*i*i*e}function Fs(i,e,t,n,s){return G_(i,e)+H_(i,t)+k_(i,n)+V_(i,s)}class oh extends dn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fs(e,s.x,r.x,a.x,o.x),Fs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ah extends dn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fs(e,s.x,r.x,a.x,o.x),Fs(e,s.y,r.y,a.y,o.y),Fs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lh extends dn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class W_ extends dn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ch extends dn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Os(e,s.x,r.x,a.x),Os(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uh extends dn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Os(e,s.x,r.x,a.x),Os(e,s.y,r.y,a.y),Os(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hh extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Hc(o,l.x,c.x,u.x,h.x),Hc(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var no=Object.freeze({__proto__:null,ArcCurve:O_,CatmullRomCurve3:Pa,CubicBezierCurve:oh,CubicBezierCurve3:ah,EllipseCurve:el,LineCurve:lh,LineCurve3:W_,QuadraticBezierCurve:ch,QuadraticBezierCurve3:uh,SplineCurve:hh});class X_ extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new no[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new no[s.type]().fromJSON(s))}return this}}class La extends X_{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new lh(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new ch(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new oh(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new hh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new el(e,t,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class mo extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,u=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class un extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;w(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function w(){const _=new P,R=new P;let E=0;const C=(t-e)/n;for(let N=0;N<=r;N++){const y=[],T=N/r,U=T*(t-e)+e;for(let H=0;H<=s;H++){const J=H/s,I=J*l+o,F=Math.sin(I),k=Math.cos(I);R.x=U*F,R.y=-T*n+m,R.z=U*k,h.push(R.x,R.y,R.z),_.set(F,C,k).normalize(),d.push(_.x,_.y,_.z),p.push(J,1-T),y.push(g++)}v.push(y)}for(let N=0;N<s;N++)for(let y=0;y<r;y++){const T=v[y][N],U=v[y+1][N],H=v[y+1][N+1],J=v[y][N+1];u.push(T,U,J),u.push(U,H,J),E+=6}c.addGroup(f,E,0),f+=E}function x(_){const R=g,E=new he,C=new P;let N=0;const y=_===!0?e:t,T=_===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),g++;const U=g;for(let H=0;H<=s;H++){const I=H/s*l+o,F=Math.cos(I),k=Math.sin(I);C.x=y*k,C.y=m*T,C.z=y*F,h.push(C.x,C.y,C.z),d.push(0,T,0),E.x=F*.5+.5,E.y=k*.5*T+.5,p.push(E.x,E.y),g++}for(let H=0;H<s;H++){const J=R+H,I=U+H;_===!0?u.push(I,I+1,J):u.push(I+1,I,J),N+=3}c.addGroup(f,N,_===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Rr=new P,Cr=new P,sa=new P,Pr=new an;class Y_ extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(as*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=Pr;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Pr.getNormal(sa),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const x=(w+1)%3,_=h[w],R=h[x],E=Pr[u[w]],C=Pr[u[x]],N=`${_}_${R}`,y=`${R}_${_}`;y in d&&d[y]?(sa.dot(d[y].normal)<=r&&(p.push(E.x,E.y,E.z),p.push(C.x,C.y,C.z)),d[y]=null):N in d||(d[N]={index0:c[w],index1:c[x],normal:sa.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];Rr.fromBufferAttribute(o,v),Cr.fromBufferAttribute(o,m),p.push(Rr.x,Rr.y,Rr.z),p.push(Cr.x,Cr.y,Cr.z)}this.setAttribute("position",new Je(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class dh extends La{constructor(e){super(e),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new La().fromJSON(s))}return this}}const q_={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=fh(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,p;if(n&&(r=J_(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return js(r,a,t,o,l,p,0),a}};function fh(i,e,t,n,s){let r,a;if(s===cv(i,e,t,n)>0)for(r=e;r<t;r+=n)a=kc(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=kc(r,i[r],i[r+1],a);return a&&go(a,a.next)&&(Ks(a),a=a.next),a}function Ai(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(go(t,t.next)||xt(t.prev,t,t.next)===0)){if(Ks(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function js(i,e,t,n,s,r,a){if(!i)return;!a&&r&&iv(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Z_(i,n,s,r):j_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ks(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=K_(Ai(i),e,t),js(i,e,t,n,s,r,2)):a===2&&$_(i,e,t,n,s,r):js(Ai(i),e,t,n,s,r,1);break}}}function j_(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&ss(s,o,r,l,a,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Z_(i,e,t,n){const s=i.prev,r=i,a=i.next;if(xt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,v=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Ia(p,g,e,t,n),w=Ia(v,m,e,t,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=f&&_&&_.z<=w;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ss(o,u,l,h,c,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ss(o,u,l,h,c,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ss(o,u,l,h,c,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=w;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ss(o,u,l,h,c,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function K_(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!go(s,r)&&ph(s,n,n.next,r)&&Zs(s,r)&&Zs(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ks(n),Ks(n.next),n=i=r),n=n.next}while(n!==i);return Ai(n)}function $_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ov(a,o)){let l=mh(a,o);a=Ai(a,a.next),l=Ai(l,l.next),js(a,e,t,n,s,r,0),js(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function J_(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=fh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(rv(c));for(s.sort(Q_),r=0;r<s.length;r++)t=ev(s[r],t);return t}function Q_(i,e){return i.x-e.x}function ev(i,e){const t=tv(i,e);if(!t)return e;const n=mh(t,i);return Ai(n,n.next),Ai(t,t.next)}function tv(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ss(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),Zs(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&nv(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function nv(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function iv(i,e,t,n){let s=i;do s.z===0&&(s.z=Ia(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sv(s)}function sv(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Ia(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function rv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ss(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ov(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!av(i,e)&&(Zs(i,e)&&Zs(e,i)&&lv(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||go(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function go(i,e){return i.x===e.x&&i.y===e.y}function ph(i,e,t,n){const s=Ir(xt(i,e,t)),r=Ir(xt(i,e,n)),a=Ir(xt(t,n,i)),o=Ir(xt(t,n,e));return!!(s!==r&&a!==o||s===0&&Lr(i,t,e)||r===0&&Lr(i,n,e)||a===0&&Lr(t,i,n)||o===0&&Lr(t,e,n))}function Lr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ir(i){return i>0?1:i<0?-1:0}function av(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ph(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zs(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function lv(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function mh(i,e){const t=new Da(i.i,i.x,i.y),n=new Da(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kc(i,e,t,n){const s=new Da(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Da(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cv(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Bs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Bs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Vc(e),Wc(n,e);let a=e.length;t.forEach(Vc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Wc(n,t[l]);const o=q_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Vc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class nl extends Ot{constructor(e=new dh([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:uv;let x,_=!1,R,E,C,N;f&&(x=f.getSpacedPoints(u),_=!0,d=!1,R=f.computeFrenetFrames(u,!1),E=new P,C=new P,N=new P),d||(m=0,p=0,g=0,v=0);const y=o.extractPoints(c);let T=y.shape;const U=y.holes;if(!Bs.isClockWise(T)){T=T.reverse();for(let L=0,fe=U.length;L<fe;L++){const K=U[L];Bs.isClockWise(K)&&(U[L]=K.reverse())}}const J=Bs.triangulateShape(T,U),I=T;for(let L=0,fe=U.length;L<fe;L++){const K=U[L];T=T.concat(K)}function F(L,fe,K){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(fe,K)}const k=T.length,ee=J.length;function $(L,fe,K){let le,Q,Re;const ve=L.x-fe.x,b=L.y-fe.y,M=K.x-L.x,B=K.y-L.y,ae=ve*ve+b*b,se=ve*B-b*M;if(Math.abs(se)>Number.EPSILON){const re=Math.sqrt(ae),Te=Math.sqrt(M*M+B*B),ge=fe.x-b/re,ye=fe.y+ve/re,Pe=K.x-B/Te,ze=K.y+M/Te,oe=((Pe-ge)*B-(ze-ye)*M)/(ve*B-b*M);le=ge+ve*oe-L.x,Q=ye+b*oe-L.y;const q=le*le+Q*Q;if(q<=2)return new he(le,Q);Re=Math.sqrt(q/2)}else{let re=!1;ve>Number.EPSILON?M>Number.EPSILON&&(re=!0):ve<-Number.EPSILON?M<-Number.EPSILON&&(re=!0):Math.sign(b)===Math.sign(B)&&(re=!0),re?(le=-b,Q=ve,Re=Math.sqrt(ae)):(le=ve,Q=b,Re=Math.sqrt(ae/2))}return new he(le/Re,Q/Re)}const X=[];for(let L=0,fe=I.length,K=fe-1,le=L+1;L<fe;L++,K++,le++)K===fe&&(K=0),le===fe&&(le=0),X[L]=$(I[L],I[K],I[le]);const j=[];let Z,ue=X.concat();for(let L=0,fe=U.length;L<fe;L++){const K=U[L];Z=[];for(let le=0,Q=K.length,Re=Q-1,ve=le+1;le<Q;le++,Re++,ve++)Re===Q&&(Re=0),ve===Q&&(ve=0),Z[le]=$(K[le],K[Re],K[ve]);j.push(Z),ue=ue.concat(Z)}for(let L=0;L<m;L++){const fe=L/m,K=p*Math.cos(fe*Math.PI/2),le=g*Math.sin(fe*Math.PI/2)+v;for(let Q=0,Re=I.length;Q<Re;Q++){const ve=F(I[Q],X[Q],le);Me(ve.x,ve.y,-K)}for(let Q=0,Re=U.length;Q<Re;Q++){const ve=U[Q];Z=j[Q];for(let b=0,M=ve.length;b<M;b++){const B=F(ve[b],Z[b],le);Me(B.x,B.y,-K)}}}const G=g+v;for(let L=0;L<k;L++){const fe=d?F(T[L],ue[L],G):T[L];_?(C.copy(R.normals[0]).multiplyScalar(fe.x),E.copy(R.binormals[0]).multiplyScalar(fe.y),N.copy(x[0]).add(C).add(E),Me(N.x,N.y,N.z)):Me(fe.x,fe.y,0)}for(let L=1;L<=u;L++)for(let fe=0;fe<k;fe++){const K=d?F(T[fe],ue[fe],G):T[fe];_?(C.copy(R.normals[L]).multiplyScalar(K.x),E.copy(R.binormals[L]).multiplyScalar(K.y),N.copy(x[L]).add(C).add(E),Me(N.x,N.y,N.z)):Me(K.x,K.y,h/u*L)}for(let L=m-1;L>=0;L--){const fe=L/m,K=p*Math.cos(fe*Math.PI/2),le=g*Math.sin(fe*Math.PI/2)+v;for(let Q=0,Re=I.length;Q<Re;Q++){const ve=F(I[Q],X[Q],le);Me(ve.x,ve.y,h+K)}for(let Q=0,Re=U.length;Q<Re;Q++){const ve=U[Q];Z=j[Q];for(let b=0,M=ve.length;b<M;b++){const B=F(ve[b],Z[b],le);_?Me(B.x,B.y+x[u-1].y,x[u-1].x+K):Me(B.x,B.y,h+K)}}}ie(),de();function ie(){const L=s.length/3;if(d){let fe=0,K=k*fe;for(let le=0;le<ee;le++){const Q=J[le];be(Q[2]+K,Q[1]+K,Q[0]+K)}fe=u+m*2,K=k*fe;for(let le=0;le<ee;le++){const Q=J[le];be(Q[0]+K,Q[1]+K,Q[2]+K)}}else{for(let fe=0;fe<ee;fe++){const K=J[fe];be(K[2],K[1],K[0])}for(let fe=0;fe<ee;fe++){const K=J[fe];be(K[0]+k*u,K[1]+k*u,K[2]+k*u)}}n.addGroup(L,s.length/3-L,0)}function de(){const L=s.length/3;let fe=0;Se(I,fe),fe+=I.length;for(let K=0,le=U.length;K<le;K++){const Q=U[K];Se(Q,fe),fe+=Q.length}n.addGroup(L,s.length/3-L,1)}function Se(L,fe){let K=L.length;for(;--K>=0;){const le=K;let Q=K-1;Q<0&&(Q=L.length-1);for(let Re=0,ve=u+m*2;Re<ve;Re++){const b=k*Re,M=k*(Re+1),B=fe+le+b,ae=fe+Q+b,se=fe+Q+M,re=fe+le+M;Ne(B,ae,se,re)}}}function Me(L,fe,K){l.push(L),l.push(fe),l.push(K)}function be(L,fe,K){we(L),we(fe),we(K);const le=s.length/3,Q=w.generateTopUV(n,s,le-3,le-2,le-1);Ue(Q[0]),Ue(Q[1]),Ue(Q[2])}function Ne(L,fe,K,le){we(L),we(fe),we(le),we(fe),we(K),we(le);const Q=s.length/3,Re=w.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);Ue(Re[0]),Ue(Re[1]),Ue(Re[3]),Ue(Re[1]),Ue(Re[2]),Ue(Re[3])}function we(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function Ue(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return hv(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new no[s.type]().fromJSON(s)),new nl(n,e.options)}}const uv={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-h),new he(d,1-g),new he(v,1-f)]:[new he(o,1-l),new he(u,1-h),new he(p,1-g),new he(m,1-f)]}};function hv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class _o extends Ot{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,p=new P,g=new he;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let f=0;f<n;f++){const w=f+m,x=w,_=w+n+1,R=w+n+2,E=w+1;o.push(x,_,E),o.push(_,R,E)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ms extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,d=new P,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const w=[],x=f/n;let _=0;f===0&&a===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){const E=R/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(E+_,1-x),w.push(c++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const x=u[f][w+1],_=u[f][w],R=u[f+1][w],E=u[f+1][w+1];(f!==0||a>0)&&p.push(x,_,E),(f!==n-1||l<Math.PI)&&p.push(_,R,E)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class en extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new P,h=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,w=(s+1)*p+g;a.push(v,m,w),a.push(m,f,w)}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class $s extends Ot{constructor(e=new uh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new he;let u=new P;const h=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function v(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),w(),f()}function m(x){u=e.getPointAt(x/t,u);const _=a.normals[x],R=a.binormals[x];for(let E=0;E<=s;E++){const C=E/s*Math.PI*2,N=Math.sin(C),y=-Math.cos(C);l.x=y*_.x+N*R.x,l.y=y*_.y+N*R.y,l.z=y*_.z+N*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function f(){for(let x=1;x<=t;x++)for(let _=1;_<=s;_++){const R=(s+1)*(x-1)+(_-1),E=(s+1)*x+(_-1),C=(s+1)*x+_,N=(s+1)*(x-1)+_;g.push(R,E,N),g.push(E,C,N)}}function w(){for(let x=0;x<=t;x++)for(let _=0;_<=s;_++)c.x=x/t,c.y=_/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new $s(new no[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class He extends xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ra extends He{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vo extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class dv extends vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const oa=new pt,Xc=new P,Yc=new P;class gh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qc=new pt,Rs=new P,aa=new P;class fv extends gh{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rs),aa.copy(n.position),aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(aa),n.updateMatrixWorld(),s.makeTranslation(-Rs.x,-Rs.y,-Rs.z),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc)}}class Si extends vo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pv extends gh{constructor(){super(new Ku(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jc extends vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new pv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mv extends vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zc(){return(typeof performance>"u"?Date:performance).now()}class _v{constructor(e,t,n=0,s=1/0){this.ray=new uo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ua(e,this,n,t),n.sort(Kc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ua(e[s],this,n,t);return n.sort(Kc),n}}function Kc(i,e){return i.distance-e.distance}function Ua(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Ua(s[r],e,t,!0)}}class $c{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vv extends rh{constructor(e=10,t=10,n=4473924,s=8947848){n=new qe(n),s=new qe(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=d===r?n:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new Ot;u.setAttribute("position",new Je(l,3)),u.setAttribute("color",new Je(c,3));const h=new Qa({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);const Jc={type:"change"},la={type:"start"},Qc={type:"end"},Dr=new uo,eu=new _n,xv=Math.cos(70*Qn.DEG2RAD);class Mv extends Ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",re),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Jc),n.update(),r=s.NONE},this.update=function(){const S=new P,O=new wi().setFromUnitVectors(e.up,new P(0,1,0)),te=O.clone().invert(),ne=new P,Ee=new wi,Oe=new P,ke=2*Math.PI;return function(ce=null){const D=n.object.position;S.copy(D).sub(n.target),S.applyQuaternion(O),o.setFromVector3(S),n.autoRotate&&r===s.NONE&&U(y(ce)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let me=n.minAzimuthAngle,pe=n.maxAzimuthAngle;isFinite(me)&&isFinite(pe)&&(me<-Math.PI?me+=ke:me>Math.PI&&(me-=ke),pe<-Math.PI?pe+=ke:pe>Math.PI&&(pe-=ke),me<=pe?o.theta=Math.max(me,Math.min(pe,o.theta)):o.theta=o.theta>(me+pe)/2?Math.max(me,o.theta):Math.min(pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=X(o.radius):o.radius=X(o.radius*c),S.setFromSpherical(o),S.applyQuaternion(te),D.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Fe=!1;if(n.zoomToCursor&&E){let Ie=null;if(n.object.isPerspectiveCamera){const $e=S.length();Ie=X($e*c);const Qe=$e-Ie;n.object.position.addScaledVector(_,Qe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $e=new P(R.x,R.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Fe=!0;const Qe=new P(R.x,R.y,0);Qe.unproject(n.object),n.object.position.sub(Qe).add($e),n.object.updateMatrixWorld(),Ie=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ie!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ie).add(n.object.position):(Dr.origin.copy(n.object.position),Dr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Dr.direction))<xv?e.lookAt(n.target):(eu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Dr.intersectPlane(eu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Fe=!0);return c=1,E=!1,Fe||ne.distanceToSquared(n.object.position)>a||8*(1-Ee.dot(n.object.quaternion))>a||Oe.distanceToSquared(n.target)>0?(n.dispatchEvent(Jc),ne.copy(n.object.position),Ee.copy(n.object.quaternion),Oe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ye),n.domElement.removeEventListener("pointerdown",ve),n.domElement.removeEventListener("pointercancel",M),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",M),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",re),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new $c,l=new $c;let c=1;const u=new P,h=new he,d=new he,p=new he,g=new he,v=new he,m=new he,f=new he,w=new he,x=new he,_=new P,R=new he;let E=!1;const C=[],N={};function y(S){return S!==null?2*Math.PI/60*n.autoRotateSpeed*S:2*Math.PI/60/60*n.autoRotateSpeed}function T(S){const O=Math.abs(S)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*O)}function U(S){l.theta-=S}function H(S){l.phi-=S}const J=function(){const S=new P;return function(te,ne){S.setFromMatrixColumn(ne,0),S.multiplyScalar(-te),u.add(S)}}(),I=function(){const S=new P;return function(te,ne){n.screenSpacePanning===!0?S.setFromMatrixColumn(ne,1):(S.setFromMatrixColumn(ne,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(te),u.add(S)}}(),F=function(){const S=new P;return function(te,ne){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;S.copy(Oe).sub(n.target);let ke=S.length();ke*=Math.tan(n.object.fov/2*Math.PI/180),J(2*te*ke/Ee.clientHeight,n.object.matrix),I(2*ne*ke/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(J(te*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),I(ne*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(S,O){if(!n.zoomToCursor)return;E=!0;const te=n.domElement.getBoundingClientRect(),ne=S-te.left,Ee=O-te.top,Oe=te.width,ke=te.height;R.x=ne/Oe*2-1,R.y=-(Ee/ke)*2+1,_.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(S){return Math.max(n.minDistance,Math.min(n.maxDistance,S))}function j(S){h.set(S.clientX,S.clientY)}function Z(S){$(S.clientX,S.clientX),f.set(S.clientX,S.clientY)}function ue(S){g.set(S.clientX,S.clientY)}function G(S){d.set(S.clientX,S.clientY),p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;U(2*Math.PI*p.x/O.clientHeight),H(2*Math.PI*p.y/O.clientHeight),h.copy(d),n.update()}function ie(S){w.set(S.clientX,S.clientY),x.subVectors(w,f),x.y>0?k(T(x.y)):x.y<0&&ee(T(x.y)),f.copy(w),n.update()}function de(S){v.set(S.clientX,S.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(v),n.update()}function Se(S){$(S.clientX,S.clientY),S.deltaY<0?ee(T(S.deltaY)):S.deltaY>0&&k(T(S.deltaY)),n.update()}function Me(S){let O=!1;switch(S.code){case n.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),O=!0;break}O&&(S.preventDefault(),n.update())}function be(S){if(C.length===1)h.set(S.pageX,S.pageY);else{const O=q(S),te=.5*(S.pageX+O.x),ne=.5*(S.pageY+O.y);h.set(te,ne)}}function Ne(S){if(C.length===1)g.set(S.pageX,S.pageY);else{const O=q(S),te=.5*(S.pageX+O.x),ne=.5*(S.pageY+O.y);g.set(te,ne)}}function we(S){const O=q(S),te=S.pageX-O.x,ne=S.pageY-O.y,Ee=Math.sqrt(te*te+ne*ne);f.set(0,Ee)}function Ue(S){n.enableZoom&&we(S),n.enablePan&&Ne(S)}function L(S){n.enableZoom&&we(S),n.enableRotate&&be(S)}function fe(S){if(C.length==1)d.set(S.pageX,S.pageY);else{const te=q(S),ne=.5*(S.pageX+te.x),Ee=.5*(S.pageY+te.y);d.set(ne,Ee)}p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;U(2*Math.PI*p.x/O.clientHeight),H(2*Math.PI*p.y/O.clientHeight),h.copy(d)}function K(S){if(C.length===1)v.set(S.pageX,S.pageY);else{const O=q(S),te=.5*(S.pageX+O.x),ne=.5*(S.pageY+O.y);v.set(te,ne)}m.subVectors(v,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(v)}function le(S){const O=q(S),te=S.pageX-O.x,ne=S.pageY-O.y,Ee=Math.sqrt(te*te+ne*ne);w.set(0,Ee),x.set(0,Math.pow(w.y/f.y,n.zoomSpeed)),k(x.y),f.copy(w);const Oe=(S.pageX+O.x)*.5,ke=(S.pageY+O.y)*.5;$(Oe,ke)}function Q(S){n.enableZoom&&le(S),n.enablePan&&K(S)}function Re(S){n.enableZoom&&le(S),n.enableRotate&&fe(S)}function ve(S){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",M)),Pe(S),S.pointerType==="touch"?Te(S):B(S))}function b(S){n.enabled!==!1&&(S.pointerType==="touch"?ge(S):ae(S))}function M(S){ze(S),C.length===0&&(n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",M)),n.dispatchEvent(Qc),r=s.NONE}function B(S){let O;switch(S.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Li.DOLLY:if(n.enableZoom===!1)return;Z(S),r=s.DOLLY;break;case Li.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;ue(S),r=s.PAN}else{if(n.enableRotate===!1)return;j(S),r=s.ROTATE}break;case Li.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;j(S),r=s.ROTATE}else{if(n.enablePan===!1)return;ue(S),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(la)}function ae(S){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;G(S);break;case s.DOLLY:if(n.enableZoom===!1)return;ie(S);break;case s.PAN:if(n.enablePan===!1)return;de(S);break}}function se(S){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(S.preventDefault(),n.dispatchEvent(la),Se(S),n.dispatchEvent(Qc))}function re(S){n.enabled===!1||n.enablePan===!1||Me(S)}function Te(S){switch(oe(S),C.length){case 1:switch(n.touches.ONE){case Ii.ROTATE:if(n.enableRotate===!1)return;be(S),r=s.TOUCH_ROTATE;break;case Ii.PAN:if(n.enablePan===!1)return;Ne(S),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ii.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ue(S),r=s.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(S),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(la)}function ge(S){switch(oe(S),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;fe(S),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;K(S),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Q(S),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Re(S),n.update();break;default:r=s.NONE}}function ye(S){n.enabled!==!1&&S.preventDefault()}function Pe(S){C.push(S.pointerId)}function ze(S){delete N[S.pointerId];for(let O=0;O<C.length;O++)if(C[O]==S.pointerId){C.splice(O,1);return}}function oe(S){let O=N[S.pointerId];O===void 0&&(O=new he,N[S.pointerId]=O),O.set(S.pageX,S.pageY)}function q(S){const O=S.pointerId===C[0]?C[1]:C[0];return N[O]}n.domElement.addEventListener("contextmenu",ye),n.domElement.addEventListener("pointerdown",ve),n.domElement.addEventListener("pointercancel",M),n.domElement.addEventListener("wheel",se,{passive:!1}),this.update()}}class yv extends sh{constructor(e=null){super();const t=new yn;t.deleteAttribute("uv");const n=new He({side:Yt}),s=new He;let r=5;e!==null&&e._useLegacyLights===!1&&(r=900);const a=new Si(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new Ce(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const l=new Ce(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new Ce(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new Ce(t,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const h=new Ce(t,s);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const d=new Ce(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const p=new Ce(t,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const g=new Ce(t,Ki(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);const v=new Ce(t,Ki(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);const m=new Ce(t,Ki(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const f=new Ce(t,Ki(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const w=new Ce(t,Ki(20));w.position.set(3.235,11.486,-12.541),w.scale.set(2.5,2,.1),this.add(w);const x=new Ce(t,Ki(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ki(i){const e=new Mn;return e.color.setScalar(i),e}function Sv(){const i=window.innerWidth<900||window.matchMedia&&window.matchMedia("(pointer:coarse)").matches,e=new ih({antialias:!i,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,i?1:1.25)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!i,e.shadowMap.autoUpdate=!1,e.shadowMap.type=wu,e.toneMapping=Au,e.toneMappingExposure=1.23,e.localClippingEnabled=!0,document.body.appendChild(e.domElement);const t=new sh;t.background=new qe(395018),t.fog=new Ja(395018,40,110);const n=new Qt(40,window.innerWidth/window.innerHeight,.1,300);n.position.set(7.5,11,22);const s=new Mv(n,e.domElement);s.target.set(7.5,3,0),s.enableDamping=!0,s.dampingFactor=.06,s.minDistance=6,s.maxDistance=85,s.maxPolarAngle=Math.PI*.495;const r=new Ra(e);t.environment=r.fromScene(new yv,.04).texture,r.dispose();const a=new _n(new P(0,0,-1),0),o=new _n(new P(0,0,-1),0),l={clippingPlanes:[a],clipShadows:!0},c={clippingPlanes:[o],clipShadows:!0};t.add(new mv(16777215,.36)),t.add(new dv(12704756,2107702,.78));const u=new jc(16773856,2.3);u.position.set(9,18,14),u.castShadow=!0,u.shadow.mapSize.set(i?512:1024,i?512:1024);const h=u.shadow.camera;h.left=-13,h.right=13,h.top=13,h.bottom=-13,h.near=1,h.far=80,u.shadow.bias=-5e-4,u.shadow.normalBias=.025,t.add(u),t.add(u.target);const d=new jc(11784168,1.35);d.position.set(-12,9,-8),t.add(d),t.add(d.target);const p=new Si(16744512,40,34,2);p.position.set(-11,5,-8),t.add(p);const g=new Si(7321855,35,30,2);g.position.set(20,6,-6),t.add(g);const v={shell:new He({color:7107452,metalness:.8,roughness:.58,envMapIntensity:.9,...l}),insul:new He({color:14998728,metalness:.02,roughness:.98,...l}),former:new He({color:13815493,metalness:.04,roughness:.92,...l}),coil:new He({color:3810583,metalness:.92,roughness:.42,emissive:16734736,emissiveIntensity:2.3,...l}),ceramic:new He({color:14078666,metalness:.04,roughness:.85,...l}),tcSheath:new He({color:9079429,metalness:.9,roughness:.4}),terminal:new He({color:12105904,metalness:.95,roughness:.35}),steel:new He({color:12831957,metalness:1,roughness:.24,envMapIntensity:1.5}),steel2:new He({color:9674152,metalness:1,roughness:.38,envMapIntensity:1.3}),steel3:new He({color:5989229,metalness:1,roughness:.52,envMapIntensity:1.1}),dark:new He({color:1316378,metalness:.55,roughness:.62}),copper:new He({color:12088115,metalness:1,roughness:.3,envMapIntensity:1.7}),rubber:new He({color:790033,metalness:.1,roughness:.94}),hoseBlue:new He({color:1396896,metalness:.1,roughness:.72}),hoseRed:new He({color:9053208,metalness:.1,roughness:.72}),glass:new ra({color:14677247,metalness:0,roughness:.03,transparent:!0,opacity:.11,depthWrite:!1,envMapIntensity:2.6,clearcoat:1,clearcoatRoughness:.02,side:tn}),graphite:new He({color:3356476,metalness:.45,roughness:.72}),graphiteDark:new He({color:2106151,metalness:.4,roughness:.8}),substrate:new He({color:7190760,metalness:.75,roughness:.2,emissive:666180,emissiveIntensity:1}),ledG:new He({color:6661,emissive:3604344,emissiveIntensity:3.5}),ledA:new He({color:1707264,emissive:16752682,emissiveIntensity:3.5}),ledR:new He({color:1705221,emissive:16722474,emissiveIntensity:3}),bubblerGlass:new ra({color:13625855,metalness:0,roughness:.04,transparent:!0,opacity:.18,clearcoat:1,clearcoatRoughness:.02}),oil:new He({color:2785238,metalness:.2,roughness:.15,emissive:670314,emissiveIntensity:.9}),bubble:new ra({color:14677247,metalness:0,roughness:.05,transparent:!0,opacity:.55,clearcoat:1}),pd:new He({color:12568528,metalness:1,roughness:.22,envMapIntensity:1.6}),hotPd:new He({color:3349e3,emissive:16734741,emissiveIntensity:1.8,roughness:.5}),gaugeFace:new He({color:15789538,metalness:.05,roughness:.85}),alum:new He({color:13161180,metalness:.85,roughness:.4,envMapIntensity:1.2,...c}),resist:new He({color:13649968,metalness:.1,roughness:.7,emissive:4198408,emissiveIntensity:.5}),beam:new Mn({color:9429247,transparent:!0,opacity:0,depthWrite:!1}),plasma:new Mn({color:11591935,transparent:!0,opacity:0,depthWrite:!1,blending:Ds}),plasmaCore:new Mn({color:14742783,transparent:!0,opacity:0,depthWrite:!1,blending:Ds}),vpGlow:new Mn({color:8373503,transparent:!0,opacity:0,depthWrite:!1,blending:Ds}),sput:new Mn({color:13689072,transparent:!0,opacity:.8})};return{renderer:e,scene:t,camera:n,controls:s,clipPlane:a,clipPlaneIMM:o,MAT:v,keyLight:u,fill:d,rimLPE:p,rimIMM:g,lowPower:i}}function Ev(i){const e=(l,c,u,h,d=32,p=!1)=>new Ce(new un(l,c,u,d,1,p),h),t=(l,c,u,h)=>new Ce(new yn(l,c,u),h),n=new un(.026,.026,.055,6);function s(l,c,u=i.steel3,h="x"){const d=new U_(n,u,c),p=new At;for(let g=0;g<c;g++){const v=g/c*Math.PI*2;p.position.set(0,0,0),p.rotation.set(0,0,0),h==="x"?(p.rotation.z=Math.PI/2,p.position.set(0,Math.cos(v)*l,Math.sin(v)*l)):p.position.set(Math.cos(v)*l,0,Math.sin(v)*l),p.updateMatrix(),d.setMatrixAt(g,p.matrix)}return d.instanceMatrix.needsUpdate=!0,d}function r(l,c,u,h=32,d=8){const p=new Pa(l.map(g=>new P(...g)));return new Ce(new $s(p,h,c,d,!1),u)}function a(l,c,u,h,d,p){const g=[],v=Math.round(h*12);for(let f=0;f<=v;f++){const w=f/v,x=w*h*Math.PI*2;g.push(new P(c+w*(u-c),Math.cos(x)*l,Math.sin(x)*l))}const m=new Pa(g);return new Ce(new $s(m,v*2,d,5,!1),p)}function o(l,c,u,h,d=32){const p=new dh;p.absarc(0,0,c,0,Math.PI*2,!1);const g=new La;g.absarc(0,0,l,0,Math.PI*2,!0),p.holes.push(g);const v=new nl(p,{depth:u,bevelEnabled:!1,curveSegments:d});return v.translate(0,0,-u/2),v.rotateY(Math.PI/2),new Ce(v,h)}return{cyl:e,box:t,boltRing:s,tubeAlong:r,makeCoil:a,annularTube:o}}const zs=.42,Na=12.6,Gs=6.3,bv=.55,ca=.8,tu=.82,nu=1.6,Jt=1.65,Hs=[-.88,-.44,0,.44,.88],Ur=1.13,ei=1.3,io=-1.3,wv=.22,Tv=.22,$i=.1,Av=.22,Yr=-.3,ks=Yr+.001,iu=.02,Nr=.18,Qi=-.272,su=.06,ru=.05,Rv=.06,zn=[{mat:"Ga melt",color:12633288,glow:.35,thickness:null},{mat:"GaAs (buffer)",color:14213352,glow:.8,thickness:1},{mat:"Al₀.₃Ga₀.₇As",color:13154472,glow:.9,thickness:.5},{mat:"GaAs (active)",color:14542318,glow:.85,thickness:.1},{mat:"Al₀.₃Ga₀.₇As",color:13154472,glow:.9,thickness:.5}],wn=[{x:-3.525,len:2.3,role:"end"},{x:-1.175,len:2.3,role:"main"},{x:1.175,len:2.3,role:"main"},{x:3.525,len:2.3,role:"end"}];function Cv({scene:i,MAT:e,clipPlane:t,cyl:n,box:s,boltRing:r,tubeAlong:a,makeCoil:o,annularTube:l}){const c=zn.map(q=>new He({color:q.color,metalness:.95,roughness:.1,emissive:3348480,emissiveIntensity:.45+q.glow*.3})),u=zn.map(q=>.45+q.glow*.3),h=new ft;h.position.y=2.65,i.add(h);const d=new ft;h.add(d);const p=-1.36,g=-2.65,v=p-g;for(const q of[-4.55,4.55]){for(const O of[-.7,.7]){const te=s(.13,v,.13,e.steel3);te.position.set(q,(p+g)/2,O),d.add(te);const ne=n(.17,.2,.06,e.dark,14);ne.position.set(q,g+.03,O),d.add(ne)}const S=s(.11,.11,1.55,e.steel3);S.position.set(q,p,0),d.add(S)}for(const q of[-.7,.7]){const S=s(9.25,.14,.14,e.steel3);S.position.set(0,-1.29,q),d.add(S)}const m=[],f=[];wn.forEach((q,S)=>{const O=q.x,te=q.len,ne=l(nu,Jt,te,e.shell,40);ne.position.x=O,h.add(ne);const Ee=l(tu+.02,nu,te-.02,e.insul,32);Ee.position.x=O,h.add(Ee);const Oe=l(bv,ca,te-.04,e.former,32);Oe.position.x=O,h.add(Oe);const ke=e.coil.clone();ke.clippingPlanes=[t],ke.clipShadows=!0;const Le=o(tu,O-te/2+.1,O+te/2-.1,15,.024,ke);h.add(Le),m.push(Le);const ce=n(.045,.045,.12,e.ceramic,10);ce.position.set(O,-Jt-.02,0),h.add(ce);const D=n(.018,.018,Jt-ca+.1,e.tcSheath,10);D.position.set(O,-2.45/2,0),h.add(D);const me=n(.024,.024,.03,e.copper,8);me.position.set(O,-ca-.02,0),h.add(me);const pe=new Si(16738858,9,5.4,2);pe.position.set(O,-.05,-.6),h.add(pe),f.push(pe)});for(const q of[-1,1]){const S=q*(wn[3].x+wn[3].len/2),O=l(zs+.02,Jt,.06,e.steel2,32);O.position.x=S,h.add(O);const te=r(Jt-.08,12,e.steel3);te.position.x=S+q*.04,h.add(te)}for(const q of[-3.5,3.5]){const S=new Ce(new en(Jt+.04,.055,6,24,Math.PI*.8),e.steel2);S.rotation.y=Math.PI/2,S.rotation.z=-Math.PI*.9,S.position.set(q,0,0),d.add(S)}const w=n(zs,zs,Na,e.glass,40,!0);w.rotation.z=Math.PI/2,w.renderOrder=10,w.castShadow=!1,w.receiveShadow=!1,h.add(w);function x(q,S){const O=new ft;O.position.x=q;const te=n(.62,.62,.1,e.steel2,32);te.rotation.z=Math.PI/2,O.add(te);const ne=new Ce(new en(.5,.045,6,24),e.rubber);ne.rotation.y=Math.PI/2,ne.position.x=-S*.06,O.add(ne);const Ee=n(.5,.46,.16,e.steel2,32);Ee.rotation.z=Math.PI/2,Ee.position.x=S*.13,O.add(Ee);const Oe=r(.55,16);Oe.position.x=S*.055,O.add(Oe);const ke=new Ce(new en(.56,.024,6,24),e.copper);ke.rotation.y=Math.PI/2,ke.position.x=S*.02,O.add(ke);const Le=-.55,ce=.3;return O.add(a([[S*.02,Le,ce],[S*.08,Le-.3,ce+.05],[S*.15,Le-.7,ce+.1],[S*.22,Le-1.1,ce+.18],[S*.28,Le-1.55,ce+.28],[S*.32,Le-2.1,ce+.35]],.032,e.hoseBlue,32)),O.add(a([[S*.02,Le,-ce],[S*.08,Le-.3,-ce-.05],[S*.15,Le-.7,-ce-.1],[S*.22,Le-1.1,-ce-.18],[S*.28,Le-1.55,-ce-.28],[S*.32,Le-2.1,-ce-.35]],.032,e.hoseRed,32)),h.add(O),O}const _=x(-Gs,-1),R=x(Gs,1),E=new ft;h.add(E);const C=s(5.6,.08,.55,e.graphiteDark);C.position.set(0,Yr-.04,0),E.add(C);for(const[q,S,O,te]of[[0,.12,.27,.03],[0,-.12,.27,.03],[.12,0,.03,.27],[-.12,0,.03,.27]]){const ne=s(O,.008,te,e.graphite);ne.position.set(q,Yr+.004,S),E.add(ne)}const N=s(Nr,iu,Nr,e.substrate);N.position.set(0,ks-iu/2,0),E.add(N);const y=new Ce(new _o(.13,.15,24),new Mn({color:8373503,transparent:!0,opacity:.3,side:tn}));y.rotation.x=-Math.PI/2,y.position.set(0,Yr+8e-4,0),E.add(y);const T=new ft;E.add(T);const U=[],H=ks+8e-4;let J=0;const I=.002,F=.006;zn.forEach((q,S)=>{if(q.thickness===null){U[S]=null;return}const O=I+q.thickness*F,te=new He({color:q.color,metalness:.85,roughness:.15,emissive:q.color,emissiveIntensity:.12}),ne=new Ce(new yn(Nr*.86,1,Nr*.86),te);ne.scale.y=1e-4,ne.position.y=H+J,ne.visible=!1,T.add(ne),U[S]={mesh:ne,material:te,height:O,baseY:H+J,deposited:!1,active:!1},J+=O});const k=new Ce(new un(ru,ru,1,16),new He({color:12633288,metalness:.95,roughness:.1,emissive:3348480,emissiveIntensity:.9}));k.visible=!1,E.add(k);const ee=new Ce(new un(.1,.1,.003,24,1,!0),new Mn({color:8378111,transparent:!0,opacity:0,side:tn}));E.add(ee);const $=new Si(8378111,0,1.4,2);$.position.set(0,ks+.15,0),E.add($);const X=new ft;X.position.x=ei,E.add(X);for(const q of[-1,1]){const S=s(.14,$i,.44,e.graphite);S.position.set(q*(Ur-.07),Qi+$i/2,0),X.add(S)}for(let q=0;q<4;q++){const S=(Hs[q]+Hs[q+1])/2,O=s(Av,$i,.44,e.graphite);O.position.set(S,Qi+$i/2,0),X.add(O)}const j=[];zn.forEach((q,S)=>{const O=s(wv-.005,su,Tv-.005,c[S]);O.position.set(Hs[S],Qi+su/2,0),X.add(O),j.push({mesh:O,baseY:O.position.y})});const Z=new Si(16747066,3.2,2.6,2);Z.position.set(0,Qi+$i*.6,0),X.add(Z);const ue=Qi+$i/2,G=7,ie=n(.03,.03,G,e.graphiteDark,12);ie.rotation.z=Math.PI/2,ie.position.set(Ur+G/2,ue,0),X.add(ie);const de=n(.085,.085,.22,e.steel2,14);de.rotation.z=Math.PI/2,de.position.set(Ur+G+.11,ue,0),X.add(de);const Se=n(.12,.12,.06,e.copper,14);Se.rotation.z=Math.PI/2,Se.position.set(Ur+G+.25,ue,0),X.add(Se);const Me=new ft;Me.position.set(Gs+.12,ue,0),h.add(Me);for(let q=0;q<9;q++){const S=new Ce(new en(.135,.026,6,16),e.steel3);S.rotation.y=Math.PI/2,S.position.x=q*.052,Me.add(S)}const be=new ft;h.add(be),_.add(a([[0,0,0],[-.4,0,.05],[-.4,-.75,.2],[-.4,-1.3,.2]],.055,e.steel3,32));const Ne=n(.11,.11,.2,e.copper,14);Ne.position.set(-.4,-.85,.2),Ne.rotation.x=Math.PI/2,_.add(Ne);const we=new Ce(new en(.1,.022,6,16),e.copper);we.position.set(-.4,-.85,.2),we.rotation.x=Math.PI/2,_.add(we);const Ue=new ft;Ue.position.set(-7.6,-.65,.15),be.add(Ue);const L=n(.075,.075,1.1,e.pd,16);L.rotation.z=Math.PI/2,Ue.add(L);const fe=n(.1,.1,.55,e.hotPd,16);fe.rotation.z=Math.PI/2,Ue.add(fe);const K=new ft;K.position.set(-6.6,.1,.2),K.rotation.y=-.25,be.add(K);const le=new Ce(new mo(.105,20),e.gaugeFace);le.position.z=.001,K.add(le);const Q=new Ce(new en(.11,.011,6,20),e.steel2);K.add(Q);const Re=new ft;Re.position.set(-6.05,-.55,.2),be.add(Re);for(let q=0;q<2;q++){const S=s(.34,.22,.24,e.dark);S.position.set(q*.44,0,0),Re.add(S)}be.add(a([[-7.6,-.65,.15],[-7.1,-.65,.18],[-6.8,-.55,.2],[-6.6,-.3,.2],[-6.6,0,.2]],.03,e.steel3,32)),be.add(a([[-6.6,.1,.2],[-6.45,.05,.2],[-6.25,-.2,.2],[-6.05,-.3,.2],[-6.05,-.4,.2]],.03,e.steel3,32)),be.add(a([[-6.05,-.66,.2],[-6.05,-.85,.2],[-5.83,-.85,.2],[-5.61,-.85,.2],[-5.61,-.66,.2]],.03,e.steel3,32)),be.add(a([[-5.83,-.85,.2],[-5.83,-1.2,.22],[-6,-1.5,.22],[-6.4,-1.5,.22],[-6.6,-1.4,.2],[-6.7,-1.3,.2]],.03,e.steel3,48));const ve=new ft;ve.position.set(7.05,-1.55,.2),h.add(ve),R.add(a([[0,.3,0],[.35,.1,.1],[.6,-.4,.15],[.75,-.9,.18],[.75,-1.33,.2]],.045,e.steel3,32));const b=n(.13,.13,.4,e.bubblerGlass,16);ve.add(b);const M=n(.115,.115,.18,e.oil,16);M.position.y=-.1,ve.add(M);const B=[];for(let q=0;q<14;q++){const S=.01+Math.random()*.008,O=new Ce(new ms(S,5,4),e.bubble);O.userData={phase:Math.random(),speed:.55+Math.random()*.55,baseX:(Math.random()-.5)*.11},O.position.set(O.userData.baseX,-.19,(Math.random()-.5)*.11),ve.add(O),B.push(O)}const ae=s(2.8,.72,.04,e.steel3);ae.position.set(-2.3,-.95,.8),h.add(ae);const se=new ft;se.position.set(-2.5,-.88,.86),h.add(se);const re=s(.9,.42,.16,e.dark);se.add(re);const Te=[];for(let q=0;q<4;q++){const S=-.315+q*.21,O=s(.14,.028,.003,new He({color:6661,emissive:16734736,emissiveIntensity:2}));O.position.set(S,.09,.083),se.add(O);const te=s(.14,.024,.003,new He({color:6661,emissive:3604344,emissiveIntensity:1.8}));te.position.set(S,.045,.083),se.add(te),Te.push({pvStrip:O,svStrip:te})}const ge=new ft;ge.position.set(-1.55,-.88,.86),h.add(ge);const ye=s(.55,.34,.2,e.dark);ge.add(ye);const Pe=new ft;Pe.position.set(-3.35,-.88,.86),h.add(Pe);const ze=s(.28,.24,.14,e.dark);Pe.add(ze);const oe=new Ce(new ms(.018,6,4),e.ledR);return oe.position.set(.08,.04,.071),Pe.add(oe),{machine:h,zoneCoils:m,zoneLights:f,growthLayers:U,growthLayersGroup:T,contactRing:ee,meltBridge:k,melts:j,sliderGroup:X,subRing:y,substrate:N,growthLight:$,sliderGlow:Z,bubbles:B,pidScreens:Te,otcLed:oe,inletWheel:we,meltMats:c,baseMeltEmissive:u}}function Pv({scene:i,MAT:e,cyl:t,box:n,annularTube:s,tubeAlong:r}){const a=new ft;a.position.set(16,0,0),i.add(a);const o=1.8,l=3.4,c=3.4,u=c-l/2,h=e.steel3;for(const q of[-2.2,2.2])for(const S of[-2.2,2.2]){const O=n(.16,u-.06,.16,h);O.position.set(q,(u-.06)/2+.06,S),a.add(O);const te=t(.19,.22,.06,e.dark,12);te.position.set(q,.03,S),a.add(te)}for(const q of[-2.2,2.2]){const S=n(.3,.18,4.9,e.dark);S.position.set(q,.09,0),a.add(S);const O=n(.12,.12,4.4,h);O.position.set(q,1.05,0),a.add(O)}for(const q of[-2.2,2.2]){const S=n(4.6,.12,.12,h);S.position.set(0,.2,q),a.add(S);const O=n(4.52,.11,.11,h);O.position.set(0,1.4,q),a.add(O)}const d=new Ce(new en(o+.1,.09,8,40),e.steel2);d.rotation.x=Math.PI/2,d.position.y=u-.015,a.add(d);for(const[q,S]of[[-2.2,-2.2],[-2.2,2.2],[2.2,-2.2],[2.2,2.2]]){const O=Math.hypot(q,S),te=new P(q*.78/O*2.45,u-.015,S*.78/O*2.45),ne=new P(q,u-.015,S),Ee=ne.clone().sub(te),Oe=n(Ee.length(),.1,.1,h);Oe.position.copy(te).add(ne).multiplyScalar(.5),Oe.quaternion.setFromUnitVectors(new P(1,0,0),Ee.normalize()),a.add(Oe)}const p=n(1.3,.56,1.36,e.dark);p.position.set(0,.28,0),a.add(p);for(const q of[-.53,.53]){const S=n(.06,.5,1.4,e.steel2);S.position.set(q,.3,0),a.add(S)}const g=s(o-.08,o,l,e.alum,36);g.rotation.z=Math.PI/2,g.position.y=c,a.add(g);const v=t(o+.1,o+.1,.08,e.steel2,36);v.position.y=c+l/2,a.add(v);const m=t(o+.1,o+.1,.08,e.steel2,36);m.position.y=c-l/2,a.add(m);const f=c+l/2+1,w=t(.75,.75,.6,e.steel2,20);w.position.y=f,a.add(w);const x=t(.85,.85,.1,e.steel3,20);x.position.y=f+.35,a.add(x);for(let q=0;q<3;q++){const S=new Ce(new en(.55,.02,5,16),e.steel);S.rotation.x=Math.PI/2,S.position.y=f-.32-q*.03,a.add(S)}a.add(r([[0,f+.4,0],[0,f+1.2,0],[.6,f+1.6,.3],[1.5,f+1.7,.5]],.06,e.rubber,16));const _=t(.25,.25,1.2,e.steel2,14);_.position.set(2.6,2.2,.4),a.add(_);const R=t(.1,.1,.1,e.copper,8);R.position.set(2.6,2.85,.4),a.add(R),a.add(r([[.7,f,0],[1.2,f,0],[1.6,f-.2,0],[2.1,f-.9,.15],[2.4,2.5,.3],[2.6,2.8,.4]],.05,e.steel3,24));const E=c-.3,C=t(.75,.75,.1,e.steel2,20),N=new ft;N.position.y=E,a.add(N),C.position.y=0,N.add(C);const y=t(.1,.1,1.5,e.steel3,10);y.position.y=E-.75,a.add(y);const T=t(.3,.3,.35,e.dark,12);T.position.y=c-l/2-.4,a.add(T);const U=t(.35,.35,.3,e.steel2,14);U.rotation.x=Math.PI/2,U.position.set(0,c+.3,o+.15),a.add(U);const H=t(.28,.28,.02,e.glass,14);H.rotation.x=Math.PI/2,H.position.set(0,c+.3,o+.31),a.add(H);const J=new Ce(new mo(.24,20),e.vpGlow);J.position.set(0,c+.3,o+.32),a.add(J);const I=n(.14,1.55,.14,h);I.position.set(o+.64,2.24,0),a.add(I);const F=n(1.2,.1,.12,h);F.position.set(o+.16,1.65,0),a.add(F);const k=n(.2,.86,.86,e.steel3);k.position.set(o+.12,c,0),a.add(k);const ee=t(.4,.4,.6,e.steel2,14);ee.rotation.z=Math.PI/2,ee.position.set(o+.4,c,0),a.add(ee);for(const q of[o+.12,o+.72]){const S=t(.48,.48,.075,e.flange??e.steel2,18);S.rotation.z=Math.PI/2,S.position.set(q,c,0),a.add(S)}const $=t(.12,.12,.15,e.copper,8);$.position.set(o+.8,c,0),a.add($);const X=t(.45,.45,.5,e.steel2,16);X.position.y=c-l/2-.7,a.add(X);for(let q=0;q<4;q++){const S=new Ce(new en(.47,.02,4,14),e.steel3);S.rotation.x=Math.PI/2,S.position.y=c-l/2-.5-q*.1,a.add(S)}const j=t(.35,.3,.25,e.dark,12);j.position.y=c-l/2-1.1,a.add(j);const Z=new ft;Z.position.set(0,.06,0),Z.userData.mountedOnStage=!0,N.add(Z);const ue=n(1,.08,.8,e.substrate);Z.add(ue);let G=.04;const ie=.04,de=.1,Se=.18,Me=(.9-Se)/2,be=Se/2+Me/2,Ne=[];zn.forEach((q,S)=>{if(q.thickness===null){Ne[S]=null;return}const O=ie+q.thickness*de,te=()=>new He({color:q.color,metalness:.8,roughness:.2,emissive:q.color,emissiveIntensity:.1}),ne=.04+G+O/2,Ee=new Ce(new yn(Se,O,.7),te());Ee.position.set(0,ne,0),Z.add(Ee);const Oe=[-be,be].map(ke=>{const Le=new Ce(new yn(Me,O,.7),te());return Le.position.set(ke,ne,0),Z.add(Le),Le});Ne[S]={meshes:Oe,baseY:.04+G,h:O,t:q.thickness},G+=O});const we=.04+G,Ue=.27,L=n(Se,Ue,.7,e.resist);L.position.set(0,we+Ue/2,0),Z.add(L);for(const[q,S]of[[-.5,-.4],[.5,-.4],[-.5,.4],[.5,.4]]){const O=n(.1,.03,.1,e.steel3);O.position.set(q,.015,S),Z.add(O)}const fe=new Ce(new un(.7,.7,.66,24,1,!0),e.glass);fe.position.y=c+l/2+.47,a.add(fe);const K=new He({color:3349e3,emissive:16742944,emissiveIntensity:0}),le=new Ce(new en(.12,.012,6,16),K);le.rotation.x=Math.PI/2,le.position.set(.68,c+l/2-.38,0),a.add(le);const Q=E+1.05,Re=new He({color:10135476,metalness:.9,roughness:.35,emissive:16738848,emissiveIntensity:0}),ve=q=>{const S=new ft;S.position.set(q*.78,Q,0);const O=n(.78,.03,1.6,Re);return O.position.x=-q*.39,S.add(O),a.add(S),S},b=ve(-1),M=ve(1),B=n(1.1,.5,.6,e.dark);B.position.set(-3,.25,0),a.add(B),a.add(r([[0,.45,0],[0,.4,0],[-1.5,.4,0],[-2.4,.4,0]],.07,e.steel3,16));const ae=t(.13,.13,.5,e.steel2,14);ae.rotation.z=Math.PI/2,ae.position.set(-2.05,c-.9,0),a.add(ae);const se=t(.05,.05,2,e.steel3,10);se.rotation.z=Math.PI/2,se.position.set(0,E-.09,0),a.add(se);for(const q of[-1,1]){const S=n(.12,.3,.2,e.steel3);S.position.set(q,E-.2,0),a.add(S)}const re=f-.4,Te=E+.8,ge=new Ce(new un(.55,.68,re-Te,20,1,!0),e.beam);ge.position.y=(re+Te)/2,a.add(ge);const ye=new Ce(new ms(.55,14,10),e.plasma);ye.position.y=f-.35,a.add(ye);const Pe=new Ce(new ms(.3,12,8),e.plasmaCore);Pe.position.y=f-.35,a.add(Pe);const ze=[];for(let q=0;q<24;q++){const S=new un(.002,.01,.1,3),O=new Ce(S,e.sput.clone());O.visible=!1,a.add(O),ze.push({mesh:O,age:1,vx:0,vy:0,vz:0})}a.userData.ionMillAssembly={supportedAtFloor:!0,chamberBottomY:u,supportTopY:u,preloadedWafer:!0,loadLockBracket:!0,pumpPedestal:!0};const oe=new Si(7321855,0,6,2);return oe.position.set(0,c,0),a.add(oe),{IMM:a,etchL:Ne,wafer:Z,resist:L,MASK_TOP:we,RES_H:Ue,tiltG:N,beamCone:ge,plasma:ye,plasmaCore:Pe,sputters:ze,chamberLight:oe,neutMat:K,leafL:b,leafR:M,shutterMat:Re,shutterY:Q,BT:re,BB:Te,stg:C,RW:Se,FW:Me,vpGlow:J}}function Lv(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ot;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=ou(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let v=0;v<a[u].length;++v)p.push(a[u][v][d]);const g=ou(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function ou(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}const a=new e(r);let o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;const l=new cn(a,t,n);return s!==void 0&&(l.gpuType=s),l}function il(i,{exclude:e=new Set}={}){var c;if(!(i!=null&&i.isGroup))throw new TypeError("Expected a THREE.Group");const t=i.children.filter(u=>u.isMesh||u.isInstancedMesh).length;if(typeof window<"u"&&window.__foundryDisableBatching)return Object.freeze({before:t,after:t,mergedGroups:0,mergedMeshes:0,savedDrawCalls:0,verifiedTriangleIndices:0});const n=new Map;for(const u of[...i.children]){if(!u.isMesh||u.isInstancedMesh||u.isSkinnedMesh||e.has(u)||u.userData.noStaticMerge||Array.isArray(u.material)||u.material.transparent||u.material.isMeshBasicMaterial||u.geometry.morphAttributes&&Object.values(u.geometry.morphAttributes).some(g=>g==null?void 0:g.length))continue;const h=Object.entries(u.geometry.attributes).sort(([g],[v])=>g.localeCompare(v));if(!h.length)continue;const d=h.map(([g,v])=>g+":"+v.itemSize+":"+v.normalized+":"+v.array.constructor.name).join("|"),p=u.material.uuid+";"+(u.geometry.index?"indexed":"nonindexed")+";"+d;n.has(p)||n.set(p,[]),n.get(p).push(u)}let s=0,r=0,a=0,o=0;for(const u of n.values()){if(u.length<2)continue;const h=[];try{for(const m of u){m.updateMatrix();const f=m.geometry.clone();f.applyMatrix4(m.matrix),h.push(f)}const d=Lv(h,!1);if(!d)continue;const p=h.reduce((m,f)=>{var w;return m+(((w=f.index)==null?void 0:w.count)??f.attributes.position.count)},0),g=((c=d.index)==null?void 0:c.count)??d.attributes.position.count;if(p!==g)throw new Error("Static batch changed triangle topology");o+=p;const v=new Ce(d,u[0].material);v.name="Static detail batch ("+u.length+" identical-material meshes)",v.castShadow=u.some(m=>m.castShadow),v.receiveShadow=u.some(m=>m.receiveShadow),i.add(v);for(const m of u)i.remove(m);r++,a+=u.length,s+=u.length-1}finally{for(const d of h)d.dispose()}}const l=i.children.filter(u=>u.isMesh||u.isInstancedMesh).length;return Object.freeze({before:t,after:l,mergedGroups:r,mergedMeshes:a,savedDrawCalls:s,verifiedTriangleIndices:o})}const sl=110,ua=2;function Iv(i){const e=Object.entries(i);if(!e.length)throw new RangeError("At least one equipment bay is required");const t=e.map(([h,d])=>{const p=d.width??(h==="lpe"?13:8);if(!Number.isFinite(d.x)||!Number.isFinite(p)||p<=0)throw new RangeError("Invalid equipment bay dimensions: "+h);return{key:h,x:d.x,width:p,min:d.x-p/2,max:d.x+p/2}}),n=Math.min(...t.map(h=>h.min)),s=Math.max(...t.map(h=>h.max)),r=(n+s)/2,a=s-n,o=n-16,l=s+16,c=l-o,u=Math.ceil(Math.max(400,a*4+200)/(2*ua))*(2*ua);return Object.freeze({minX:n,maxX:s,centerX:r,span:a,wallMinX:o,wallMaxX:l,wallWidth:c,floorSize:u,gridSize:u,gridDivisions:u/ua,footprint:t})}function _h(i,e,t){if(e<=0||t<=0)throw new RangeError("Invalid viewport");const n=e/t,s=n<.85?72:n<1.1?56:40,r=Math.atan(Math.tan(s*Math.PI/360)*n),a=Math.max(64,(i.span/2+8)/Math.tan(r)),o=Math.max(18.75,a*.245),l=Math.max(sl,Math.ceil(a*1.5));return Object.freeze({centerX:i.centerX,targetY:3.25,fov:s,distance:a,height:o,fogFar:l,maxDistance:Math.max(85,a*1.22)})}const rn=Object.freeze({lpe:{x:0,name:"Liquid phase epitaxy"},imm:{x:16,name:"Ion beam mill"},mbe:{x:30,name:"Molecular beam epitaxy"},cmp:{x:46,name:"Chemical mechanical planarization"},litho:{x:62,name:"ArF immersion photolithography"},spin:{x:78,name:"Photoresist spin coater",width:8},implant:{x:94,name:"Ion implanter",width:11},mocvd:{x:110,name:"MOCVD reactor",width:10}});function Dv(i,{batchProxies:e=!0}={}){const t=new ft;t.name="Foundry room",i.add(t);const n=new He({color:1516593,metalness:.65,roughness:.62}),s=new He({color:5859962,metalness:.75,roughness:.42}),r=new He({color:9149611,metalness:.7,roughness:.46}),a=new He({color:7107452,metalness:.8,roughness:.58}),o=new He({color:11908010,metalness:.05,roughness:.85}),l=new He({color:8742220,metalness:.66,roughness:.48}),c=(_,R,E,C,N,y,T,U,H)=>{const J=new Ce(new yn(E,C,N),y);return J.name=R,J.position.set(T,U,H),_.add(J),J},u=(_,R,E,C,N,y,T,U,H,J=14,I="y")=>{const F=new Ce(new un(E,C,N,J),y);return F.name=R,F.position.set(T,U,H),I==="x"&&(F.rotation.z=Math.PI/2),I==="z"&&(F.rotation.x=Math.PI/2),_.add(F),F},h=(_,R,E,C,N,y,T,U,H="y")=>{const J=new Ce(new en(E,C,5,18),N);return J.name=R,J.position.set(y,T,U),H==="x"?J.rotation.y=Math.PI/2:H==="y"&&(J.rotation.x=Math.PI/2),_.add(J),J},d=Iv(rn),p=new Ce(new fo(d.floorSize,d.floorSize),new He({color:1186340,roughness:.72,metalness:.35}));p.name="room-ground-plane",p.rotation.x=-Math.PI/2,p.position.x=d.centerX,p.receiveShadow=!0,t.add(p);const g=new vv(d.gridSize,d.gridDivisions,2638943,1516853);g.name="room-continuous-grid",g.position.set(d.centerX,.003,0),g.material.transparent=!0,g.material.opacity=.48,t.add(g);const v=c(t,"room-rear-wall",d.wallWidth,11,.18,n,(d.wallMinX+d.wallMaxX)/2,5.5,-9.8);v.material=new Mn({color:1384750,fog:!0,side:tn});for(let _=d.wallMinX+12;_<d.wallMaxX-3;_+=15)c(t,"room-wall-support",.15,10.5,.22,s,_,5.25,-9.4);const m={},f={},w={},x={};for(const[_,R]of Object.entries(rn)){const E=R.width??(_==="lpe"?13:8),C=c(t,_+"-bay-floor",E,.07,8,n,R.x,.035,0);x[_]=C;const N=new rh(new Y_(C.geometry),new Qa({color:3233397,transparent:!0,opacity:.8}));N.position.copy(C.position),N.name=_+"-bay-outline",N.userData.bayKey=_,w[_]=N,t.add(N);const y=new ft;y.name=R.name+" (room silhouette)",y.position.x=R.x,t.add(y),m[_]=y}{const _=m.lpe,R=2.65;for(let E=0;E<wn.length;E++){const C=wn[E];u(_,"lpe-zone-"+E,Jt,Jt,C.len,a,C.x,R,0,18,"x"),E<wn.length-1&&h(_,"lpe-zone-joint",Jt+.015,.045,s,C.x+C.len/2+.025,R,0,"x")}for(const E of[-1,1]){const C=E*(wn.at(-1).x+wn.at(-1).len/2);u(_,"lpe-insulation-flange",Jt+.05,Jt+.05,.11,r,C,R,0,18,"x")}u(_,"lpe-quartz-process-tube",zs,zs,Na,o,0,R,0,12,"x");for(const E of[-1,1])u(_,"lpe-end-vacuum-fitting",.6,.6,.22,r,E*Gs,R,0,14,"x"),u(_,"lpe-end-cap",.46,.46,.15,s,E*(Gs+.16),R,0,12,"x");for(const E of[-4.55,4.55]){for(const C of[-.7,.7])c(_,"lpe-frame-leg",.13,1.29,.13,s,E,.645,C),u(_,"lpe-frame-foot",.18,.2,.06,n,E,.03,C,8);c(_,"lpe-frame-crossmember",.12,.12,1.55,s,E,1.29,0)}for(const E of[-.7,.7])c(_,"lpe-frame-longitudinal-rail",9.25,.14,.14,s,0,1.36,E);for(const E of[-3.5,3.5])c(_,"lpe-furnace-cradle",.2,.28,2.6,r,E,1.29,0),h(_,"lpe-saddle-outline",Jt+.03,.055,r,E,R,0,"x");_.userData.silhouette={source:"lpe.js",shellRadius:Jt,centerY:R,zoneCount:wn.length,frameLegCount:4,frameGroundY:0,detailedFrameTopY:1.36,processTubeLength:Na}}{const _=m.imm,R=3.4,E=1.7;u(_,"imm-chamber",1.8,1.8,3.4,r,0,R,0,18);for(const C of[1.7,5.1])u(_,"imm-chamber-flange",1.9,1.9,.12,s,0,C,0,18);h(_,"imm-support-collar",1.9,.09,s,0,E-.01,0);for(const C of[-2.2,2.2]){for(const N of[-2.2,2.2])c(_,"imm-frame-leg",.16,1.64,.16,s,C,.88,N),u(_,"imm-floor-foot",.19,.22,.06,n,C,.03,N,8);c(_,"imm-floor-skid",.26,.16,4.65,n,C,.08,0),c(_,"imm-longitudinal-tie",.11,.11,4.4,s,C,1.4,0)}for(const C of[-2.2,2.2])c(_,"imm-cross-frame",4.5,.11,.11,s,0,1.4,C);for(const C of[-2.2,2.2])for(const N of[-2.2,2.2]){const y=new P(C,0,N),T=y.length(),U=new P(C*1.9/T,1.7,N*1.9/T),H=new P(C,1.7,N),J=H.clone().sub(U);c(_,"imm-collar-frame-bracket",J.length(),.12,.12,s,(U.x+H.x)/2,1.7,(U.z+H.z)/2).quaternion.setFromUnitVectors(new P(1,0,0),J.normalize())}u(_,"imm-source-neck",.7,.7,.92,s,0,5.48,0,14),u(_,"imm-ion-source",.75,.75,.6,n,0,6.1,0,16),u(_,"imm-source-cap",.85,.85,.12,s,0,6.45,0,16),u(_,"imm-load-lock",.4,.4,.6,s,2.2,R,0,12,"x"),u(_,"imm-load-lock-flange",.47,.47,.1,r,1.94,R,0,12,"x"),c(_,"imm-load-lock-post",.14,1.5,.14,s,2.45,2.27,0),c(_,"imm-load-lock-brace",1.14,.12,.12,s,2.15,1.63,0),c(_,"imm-pump-pedestal",1.3,.55,1.34,n,0,.275,0),u(_,"imm-turbo-base",.35,.3,.23,n,0,.665,0,12),u(_,"imm-turbo-pump",.45,.45,.55,s,0,1.05,0,12),u(_,"imm-pump-neck",.37,.37,.4,r,0,1.52,0,10),u(_,"imm-viewport",.32,.32,.22,s,0,3.7,1.83,12,"z"),_.userData.silhouette={source:"ion-mill.js",chamberRadius:1.8,chamberBottomY:E,frameLegCount:4,frameGroundY:.06,loadLockSupported:!0,turboSupported:!0,sourceConnected:!0}}{const _=m.mbe;u(_,"mbe-uhv-chamber",1.5,1.5,3.3,r,0,3.65,0,18),u(_,"mbe-tapered-top",.75,1.5,.6,s,0,5.6,0,18),u(_,"mbe-top-flange",.85,.85,.12,r,0,5.93,0,16),u(_,"mbe-rotary-shaft",.1,.1,.9,s,0,6.43,0,10),u(_,"mbe-manipulator-motor",.34,.34,.4,n,0,7.05,0,12),u(_,"mbe-motor-cap",.26,.33,.1,r,0,7.32,0,12),u(_,"mbe-lower-flange",1.65,1.65,.1,s,0,2,0,18),h(_,"mbe-support-collar",1.65,.08,r,0,1.94,0);for(const R of[-2,2]){for(const E of[-1.9,1.9])c(_,"mbe-frame-leg",.14,1.92,.14,s,R,.96,E),u(_,"mbe-floor-foot",.19,.22,.06,n,R,.03,E,8);c(_,"mbe-frame-end-tie",.11,.1,3.8,s,R,1.45,0)}for(const R of[-1.9,1.9])c(_,"mbe-frame-side-rail",4.14,.1,.11,s,0,1.45,R);for(const R of[-2,2])for(const E of[-1.9,1.9]){const C=new P(R,0,E),N=C.length(),y=new P(R*1.65/N,1.94,E*1.65/N),T=new P(R,1.94,E),U=T.clone().sub(y);c(_,"mbe-collar-frame-bracket",U.length(),.1,.1,s,(y.x+T.x)/2,1.94,(y.z+T.z)/2).quaternion.setFromUnitVectors(new P(1,0,0),U.normalize())}u(_,"mbe-side-flange",.29,.29,.33,s,1.6,3,0,12,"x"),u(_,"mbe-side-flange",.29,.29,.33,s,-1.6,3,0,12,"x"),u(_,"mbe-front-view-port",.34,.34,.25,l,0,4.45,1.55,12,"z"),_.userData.silhouette={source:"mbe/scene.js",chamberRadius:1.5,chamberBottomY:2,taperedTop:!0,frameLegCount:4,frameGroundY:0,supportCollarY:1.94,topManipulator:!0}}{const _=m.cmp;c(_,"cmp-table-top",6.5,.12,6.5,s,0,1.04,0);for(const R of[-2.85,2.85])for(const E of[-2.85,2.85])c(_,"cmp-table-leg",.19,.99,.19,n,R,.495,E);c(_,"cmp-lower-shelf",6.2,.1,6.2,n,0,.35,0),u(_,"cmp-catch-tray",2.85,2.85,.18,r,0,1.22,0,20),u(_,"cmp-platen-and-pad",2.02,2.02,.24,n,0,1.57,0,20),u(_,"cmp-offset-carrier",.6,.6,.36,r,1,2.38,0,16),u(_,"cmp-carrier-shaft",.13,.13,1.35,s,1,3.22,0,12),u(_,"cmp-carrier-motor",.3,.3,.4,n,1,4.05,0,12);for(const R of[-2.7,2.7])c(_,"cmp-overhead-post",.2,3.78,.2,s,R,2.97,-2.45);c(_,"cmp-overhead-beam",5.6,.2,.24,s,0,4.87,-2.45),c(_,"cmp-head-support",.23,.16,2.55,r,1,4.87,-1.2),c(_,"cmp-slurry-support",.15,1.8,.15,r,2.45,2,1.4),c(_,"cmp-slurry-arm",2,.12,.15,r,1.55,2.87,1.4),c(_,"cmp-conditioner-support",.15,1.8,.15,r,-2.45,2,.8),c(_,"cmp-conditioner-arm",2,.12,.15,r,-1.6,2.87,.8),_.userData.silhouette={source:"cmp/scene.js",tableTopY:1.1,tableWidth:6.5,floorLegCount:4,overheadAnchored:!0,platenRadius:2.02,carrierOffset:1}}{const _=m.litho;c(_,"litho-floor-skid",5.1,.22,4.9,n,0,.13,0);for(const R of[-2.1,2.1])for(const E of[-2,2])c(_,"litho-floor-leg",.22,1.2,.22,s,R,.72,E),c(_,"litho-foot",.4,.06,.4,n,R,.03,E);c(_,"litho-granite",3.4,.3,3.35,n,0,1.12,0),c(_,"litho-stage",2.75,.09,2.8,r,0,1.32,0),u(_,"litho-wafer",.31,.31,.035,l,0,1.55,0,16);for(const R of[-2.25,2.25])for(const E of[-2.1,2.1])c(_,"litho-upper-post",.15,3.65,.15,s,R,1.93,E);for(const R of[-2.1,2.1])c(_,"litho-upper-beam",4.65,.15,.16,s,0,3.72,R);c(_,"litho-top-bridge",.15,.15,4.3,s,0,3.72,0),c(_,"litho-top-control",.35,.25,.42,n,0,3.89,0),u(_,"litho-optics",.3,.3,1.26,r,0,2.16,0,14),u(_,"litho-illuminator",.27,.27,.43,n,0,3.39,0,14),c(_,"litho-reticle-rail",1.35,.12,.16,r,0,3.25,-.34),c(_,"litho-reticle",.6,.04,.55,l,0,3.02,0),c(_,"litho-laser",.85,.48,.75,n,-1.44,1.82,0),c(_,"litho-laser-pedestal",.45,.54,.55,s,-1.44,1.36,0),c(_,"litho-beam-duct",1.46,.12,.12,s,-.73,3.35,0),_.userData.silhouette={source:"litho/scene.js",grounded:!0,framePosts:4,carrierHeight:3.72,waferRadius:.31}}{const _=m.spin;u(_,"spin-base",1.1,1.1,.84,n,0,.42,0,20),u(_,"spin-bowl",1.12,1.08,.68,s,0,1.18,0,22),h(_,"spin-bowl-lip",1.1,.028,r,0,1.52,0),u(_,"spin-vacuum-chuck",.86,.86,.16,n,0,1.18,0,20),u(_,"spin-wafer",.78,.78,.02,r,0,1.29,0,20),c(_,"spin-dispense-post",.11,1.83,.11,r,-1.65,.93,0),c(_,"spin-dispense-arm",1.55,.07,.07,r,-.875,1.85,0),u(_,"spin-nozzle",.04,.04,.29,l,-.1,1.65,0,10),c(_,"spin-hot-plate-base",.74,.17,.74,n,1.85,.09,.55),u(_,"spin-hot-plate",.3,.3,.035,r,1.85,.19,.55,18),_.userData.silhouette={source:"spin/scene.js",waferRadius:.78,grounded:!0}}{const _=m.implant,R=1.2,E=new He({color:4346730,metalness:.78,roughness:.4}),C=new He({color:11102777,metalness:.67,roughness:.48}),N=new He({color:10070715,metalness:.85,roughness:.32}),y=(j,Z,ue,G,ie)=>{const de=new P(...Z),Se=new P(...ue),Me=Se.clone().sub(de),be=new Ce(new un(G,G,Me.length(),12),ie);return be.position.copy(de).add(Se).multiplyScalar(.5),be.quaternion.setFromUnitVectors(new P(0,1,0),Me.normalize()),be.userData.centerline={from:de.toArray(),to:Se.toArray()},be.name=j,_.add(be),be},T=(j,Z,ue,G,ie=12)=>{const de=new Ce(new $s(Z,ie,ue,7,!1),G);return de.name=j,_.add(de),de};c(_,"implant-deck",6.4,.14,2.2,s,.5,.17,-.1);for(const j of[-2.3,-.95,.75,2.7])for(const Z of[-.84,.84])c(_,"implant-frame-post",.12,.34,.12,n,j,.17,Z);c(_,"implant-source-deck",1.3,.12,1.34,n,-1.32,.62,-2.53);for(const j of[-1.83,-.81])for(const Z of[-2.96,-2.1])c(_,"implant-source-support",.09,.53,.09,s,j,.32,Z);c(_,"implant-source",.77,.63,.65,n,-1.32,R,-2.53);const U=new P(.5,R,-.6),H=.6,J=new P(U.x-H,R,U.z),I=new P(U.x,R,U.z+H),F=new P(-1.04,R,-2.26),k=new ah(F,new P(-.7,R,-1.96),new P(J.x,R,-1.35),J),ee=new dn;ee.getPoint=(j,Z=new P)=>{const ue=Math.PI-j*Math.PI/2;return Z.set(U.x+H*Math.cos(ue),R,U.z+H*Math.sin(ue))};const $=new Ce(new un(.24,.24,.09,12),N);$.name="implant-extraction-flange",$.position.copy(F),$.quaternion.setFromUnitVectors(new P(0,1,0),k.getTangent(0).normalize()),_.add($),T("implant-incoming-beamline",k,.15,r,11),T("implant-analyzer-vacuum-bend",ee,.15,N,14);const X=new _o(.39,.83,18,1,Math.PI,Math.PI/2);X.rotateX(-Math.PI/2);for(const j of[R-.25,R+.25]){const Z=new Ce(X,E);Z.position.set(U.x,j,U.z),Z.name="implant-analyzer-yoke",_.add(Z);const ue=new dn;ue.getPoint=(G,ie=new P)=>{const de=Math.PI-G*Math.PI/2;return ie.set(U.x+.92*Math.cos(de),j+(j>R?.06:-.06),U.z+.92*Math.sin(de))},T("implant-analyzer-coil",ue,.065,C,14)}y("implant-analyzer-exit",I.toArray(),[.95,R,0],.18,r),y("implant-accelerator",[.88,R,0],[1.63,R,0],.19,N);for(const j of[1.05,1.32,1.6])u(_,"implant-accelerator-flange",.26,.26,.06,s,j,R,0,14,"x");y("implant-scanner-bellows",[1.65,R,0],[2.14,R,0],.23,n);for(const j of[1.73,1.83,1.93,2.03])u(_,"implant-bellows-rib",.27,.27,.04,r,j,R,0,12,"x");u(_,"implant-end-station",.77,.77,1.12,s,2.65,R,0,20,"x"),u(_,"implant-end-flange",.87,.87,.08,N,3.22,R,0,20,"x"),u(_,"implant-chamber-viewport",.21,.21,.09,n,2.65,R+.7,.28,16),u(_,"implant-load-lock",.28,.28,.66,s,2.72,R,.92,16,"z"),u(_,"implant-load-lock-flange",.34,.34,.07,N,2.72,R,1.28,14,"z"),u(_,"implant-turbo-neck",.25,.25,.18,n,2.55,.48,0,14),u(_,"implant-turbo-pump",.24,.18,.39,r,2.55,.25,0,14);for(const j of[-.53,.53])c(_,"implant-chamber-support",.16,.47,.16,n,2.65,.31,j);c(_,"implant-control-rack",.92,1.65,.79,n,4.18,.83,.35),c(_,"implant-rack-face",.04,1.37,.62,r,4.67,.86,.35);for(const j of[.5,.83,1.18])c(_,"implant-rack-module",.06,.13,.5,E,4.72,j,.35);_.userData.silhouette={source:"implant/scene.js",analyzerAngle:90,grounded:!0,sourceToAnalyzer:!0,continuousBeamline:!0,magnetYokes:2,loadLock:!0,turboPump:!0,bendRadius:H,analyzerEntry:J.toArray(),analyzerExit:I.toArray()}}{const _=m.mocvd;u(_,"mocvd-chamber",.95,.95,1.65,s,0,1.375,0,18),u(_,"mocvd-dome",.42,.95,.3,r,0,2.35,0,18);for(const R of[.5,2.25])u(_,"mocvd-flange",1.09,1.09,.1,r,0,R,0,18);u(_,"mocvd-top-manifold",.3,.3,.19,n,0,2.66,0,12);for(const R of[-.7,.7])for(const E of[-.7,.7])c(_,"mocvd-stand",.15,.55,.15,n,R,.275,E);c(_,"mocvd-frame",2.7,.13,1.75,n,0,.07,0),u(_,"mocvd-load-lock",.42,.42,1.05,s,-1.65,1.62,0,14,"x"),u(_,"mocvd-lock-flange",.47,.47,.07,r,-1.14,1.62,0,14,"x"),c(_,"mocvd-gas-cabinet",1,1.72,.7,s,1.9,.86,-1),c(_,"mocvd-cabinet-face",.05,1.33,.57,n,1.38,.91,-1);for(const R of[-1.2,-1,-.8])c(_,"mocvd-mfc-panel",.05,.15,.12,r,1.34,1.42,R);u(_,"mocvd-exhaust-port",.18,.18,.46,n,.42,.28,.05,12),u(_,"mocvd-trap",.17,.17,.29,l,1.1,.35,.05,12),c(_,"mocvd-dry-pump",.6,.42,.4,s,1.85,.37,.05),c(_,"mocvd-scrubber",.59,1.12,.59,s,3.1,1.26,-1.55),u(_,"mocvd-scrubber-stack",.08,.08,.38,n,3.1,2.02,-1.55,10),_.userData.silhouette={source:"mocvd/scene.js",wafers:6,waferDiameterMm:100,grounded:!0,hybridHeating:!0}}for(const[_,R]of Object.entries(m))R.traverse(E=>{E.isMesh&&(E.castShadow=!1,E.receiveShadow=!1)}),f[_]=e?il(R):null;return{room:t,proxies:m,proxyStats:f,outlines:w,slabs:x,layout:d,setFocus(_){for(const[R,E]of Object.entries(m))E.visible=R!==_}}}function Uv(){const i=document.getElementById("tProfileContent");function e(s){const w=E=>{const C=Math.abs(E);if(C<4.575)return s;const N=Math.min(1,(C-4.675+.1)/1),y=N*N*(3-2*N);return s-y*(s-25)};let x="";for(let E=0;E<=80;E++){const C=E/80,N=-5.5+C*(5.5- -5.5),y=w(N),T=6+C*244,U=4+(1-(y-0)/820)*30;x+=(E===0?"M":"L")+T.toFixed(1)+","+U.toFixed(1)+" "}const _=x+"L 250,34 L 6,34 Z";let R="";wn.forEach(E=>{const y=6+(E.x-E.len/2- -5.5)/(5.5- -5.5)*244;y>7&&y<249&&(R+=`<line x1="${y.toFixed(1)}" y1="4" x2="${y.toFixed(1)}" y2="34" stroke="#3d7fd6" stroke-width="0.4" opacity="0.30" stroke-dasharray="1.5,1.5"/>`)}),i.innerHTML=`
    <path d="${_}" fill="url(#tGrad)"/>
    <path d="${x}" fill="none" stroke="#3d7fd6" stroke-width="1.3" stroke-linejoin="round"/>
    ${R}
    <text x="6" y="41" font-size="4.5" fill="#5f7d9e" letter-spacing="0.6">COLD</text>
    <text x="${256/2-12}" y="41" font-size="4.5" fill="#7ee6a0" letter-spacing="0.6">BOAT</text>
    <text x="236" y="41" font-size="4.5" fill="#5f7d9e" letter-spacing="0.6">COLD</text>
  `}e(25);let t=25;function n(s){Math.abs(s-t)<1.5||(t=s,e(s))}return{maybeUpdateProfile:n}}function Nv(i){const e=(()=>{const t=document.getElementById("xsec"),n="http://www.w3.org/2000/svg",s=20,r=80,a=g=>r-g*s,o=(g,v)=>{const m=document.createElementNS(n,g);for(const f in v)m.setAttribute(f,v[f]);return t.appendChild(m),m};o("rect",{x:0,y:r,width:256,height:12,fill:"#3a5a78"});const l=[];let c=0,u=0;zn.forEach((g,v)=>{if(g.thickness===null)return;const m="#"+g.color.toString(16).padStart(6,"0"),f={b0:c,b1:c+g.thickness,fl:[o("rect",{fill:m,x:4,width:116}),o("rect",{fill:m,x:136,width:116})],rd:o("rect",{fill:m,x:120,width:16})};f.rd.setAttribute("y",a(f.b1)),f.rd.setAttribute("height",g.thickness*s),l.push(f),c+=g.thickness,v===3&&(u=c)});const h=c,d=o("rect",{fill:"#d04830",x:120,width:16});o("line",{x1:0,x2:256,y1:a(u),y2:a(u),stroke:"#ffd060","stroke-width":.6,"stroke-dasharray":"3 2"}),o("text",{x:6,y:a(u)-2,fill:"#ffd060","font-size":7}).textContent="active layer top";const p=o("text",{x:142,y:10,"font-size":8,fill:"#a6c4e0"});return{update(g,v){const m=h-g;l.forEach(x=>{const _=Math.max(x.b0,Math.min(x.b1,m));x.fl.forEach(R=>{R.setAttribute("y",a(_)),R.setAttribute("height",Math.max(0,(_-x.b0)*s))})});const f=i.resistT*v;d.setAttribute("y",a(h+f)),d.setAttribute("height",f*s);const w=m-u;p.textContent=g<=0?"unetched":w>0?`etch floor ${w.toFixed(2)} µm above active`:"FLOOR BELOW ACTIVE TOP",p.setAttribute("fill",g>0&&w<.05?"#ff6a5a":"#a6c4e0")}}})();return e.update(0,1),e}function Ov(){const i={process:{panel:document.getElementById("leftPanel"),minimize:document.getElementById("minimizeProcess"),restore:document.getElementById("restoreProcess")},equipment:{panel:document.getElementById("rightPanel"),minimize:document.getElementById("minimizeEquipment"),restore:document.getElementById("restoreEquipment")}},e=document.getElementById("focusToggle"),t=window.matchMedia("(max-width:760px), (max-width:900px) and (max-height:520px)"),n=document.getElementById("mobileEquipment"),s=document.getElementById("mobileProcess"),r={process:t.matches,equipment:!1};function a(u){t.matches&&(r.process=u!=="process",r.equipment=u!=="equipment",o())}n.addEventListener("click",()=>a("equipment")),s.addEventListener("click",()=>a("process")),t.addEventListener("change",u=>{r.process=u.matches,r.equipment=!1,o()});function o(){for(const[h,{panel:d,minimize:p,restore:g}]of Object.entries(i))d.hidden=r[h],g.hidden=!r[h],p.setAttribute("aria-expanded",String(!r[h])),g.setAttribute("aria-expanded",String(!r[h]));const u=r.process&&r.equipment;n.setAttribute("aria-pressed",String(!r.equipment)),s.setAttribute("aria-pressed",String(!r.process)),document.body.classList.toggle("focus-view",u),e.setAttribute("aria-pressed",String(u)),e.textContent=u?"Show panels":"Focus view",e.title=u?"Show both panels (H)":"Hide both panels (H)"}function l(u,h,{focus:d=!1}={}){r[u]=h,!h&&t.matches&&(r[u==="process"?"equipment":"process"]=!0),o(),d&&(h?i[u].restore:i[u].minimize).focus()}function c(){const u=!(r.process&&r.equipment);r.process=u,r.equipment=u,!u&&t.matches&&(r.process=!0),o()}for(const u of Object.keys(i))i[u].minimize.addEventListener("click",()=>l(u,!0,{focus:!0})),i[u].restore.addEventListener("click",()=>l(u,!1,{focus:!0}));return e.addEventListener("click",c),document.addEventListener("keydown",u=>{if(u.defaultPrevented||u.altKey||u.ctrlKey||u.metaKey)return;const h=u.target;if(u.key.toLowerCase()==="h"){if(h instanceof HTMLElement&&(h.isContentEditable||h.closest("input,textarea,select,[contenteditable]")))return;u.preventDefault(),c()}else u.key==="Escape"&&(r.process||r.equipment)&&(u.preventDefault(),r.process=t.matches,r.equipment=!1,o(),e.focus())}),o(),{state:()=>({...r}),showBoth:()=>{r.process=t.matches,r.equipment=!1,o()}}}function au(i){const e=Math.max(0,Math.min(1,i));return e*e*(3-2*e)}function vh(i,e=!1){if(!Number.isFinite(i)||i<0)throw new RangeError("Invalid camera distance");const t=Math.max(680,Math.min(1150,680+i*3.6));return Math.round(e?t*.8:t)}const ha=.88,da=.44,fa=0,pa=-.44,ma=-.88,En=[{name:"Heat-up",realMin:60,animSec:14,temp:[25,800],slider:ei,narr:"HEATING · H₂ flowing",color:"#7fc4ff",detail:"60 min ramp 25 → 800 °C under flowing H₂. Kanthal elements ramp; mullite former evens out axial gradients."},{name:"Homogenise",realMin:40,animSec:10,temp:[800,800],slider:ei,narr:"HOMOGENISING · 800 °C",color:"#7fc4ff",detail:"40 min at 800 °C, ±0.1 °C PID. Charged As/Al dissolves; all melts undersaturated here."},{name:"Cool to 780",realMin:20,animSec:6,temp:[800,780],slider:ei,narr:"COOLING · 800 → 780 °C",color:"#7fc4ff",detail:"20 min cool at 1 °C/min. Melts stay undersaturated until each reaches its liquidus."},{name:"Slide → well 0",realMin:.5,animSec:1.2,from:ei,to:ha,temp:[780,780],narr:"SLIDING · well 0",color:"#ffaa66",detail:"Push rod through bellows moves slider. Slightly undersaturated Ga–As (well 0) aligns with wafer."},{name:"Melt-back",realMin:2,animSec:3,temp:[780,780],slider:ha,meltback:!0,narr:"MELT-BACK · in-situ etch",color:"#ff7050",detail:"Undersaturated melt dissolves a few µm of damaged/oxidised surface. Pure Ga would strip tens of µm."},{name:"Slide → well 1",realMin:.5,animSec:1.2,from:ha,to:da,temp:[780,780],narr:"SLIDING · well 1",color:"#ffaa66",detail:"Graphite wall (wider than wafer) wipes melt off. Well 1 (GaAs, liquidus 780.0 °C) slides in."},{name:"Grow GaAs buffer",realMin:15,animSec:8,temp:[780,777.75],slider:da,deposit:1,growthExp:1.5,narr:"GROWTH · GaAs buffer",color:"#7ee6a0",detail:"Cooling 0.15 °C/min over 15 min (ΔT 2.25 °C). Solute (As) transport limits growth; growth ∝ t^1.5. Target 1.0 µm."},{name:"Slide → well 2",realMin:.5,animSec:1.2,from:da,to:fa,temp:[777.75,777.75],narr:"SLIDING · well 2",color:"#ffaa66",detail:"Wall wipes melt. Well 2 (AlGaAs, liquidus 777.75 °C) aligning."},{name:"Grow AlGaAs lower",realMin:12,animSec:6,temp:[777.75,775.75],slider:fa,deposit:2,growthExp:1.5,narr:"GROWTH · Al₀.₃Ga₀.₇As lower",color:"#7ee6a0",detail:"Cooling 0.17 °C/min over 12 min (ΔT 2.0 °C). Al partitions strongly into solid. Target 0.5 µm."},{name:"Slide → well 3",realMin:.5,animSec:1.2,from:fa,to:pa,temp:[775.75,775.75],narr:"SLIDING · well 3",color:"#ffaa66",detail:"Wall wipes melt. Well 3 (GaAs, liquidus 775.75 °C) aligning."},{name:"Grow GaAs active",realMin:1,animSec:3,temp:[775.75,775.4],slider:pa,deposit:3,growthExp:1.5,narr:"GROWTH · GaAs active layer",color:"#7ee6a0",detail:"Short, small ΔT: 0.35 °C/min for 1 min. 0.1 µm GaAs active layer between claddings."},{name:"Slide → well 4",realMin:.5,animSec:1.2,from:pa,to:ma,temp:[775.4,775.4],narr:"SLIDING · well 4",color:"#ffaa66",detail:"Wall wipes melt. Well 4 (AlGaAs) aligning."},{name:"Grow AlGaAs upper",realMin:8,animSec:5,temp:[775.4,773.9],slider:ma,deposit:4,growthExp:1.5,narr:"GROWTH · Al₀.₃Ga₀.₇As upper",color:"#7ee6a0",detail:"Cooling 0.19 °C/min over 8 min (ΔT 1.5 °C). Completes DH structure. Target 0.5 µm."},{name:"Slide to unload",realMin:.5,animSec:1.2,from:ma,to:io,temp:[773.9,773.9],narr:"SLIDING TO UNLOAD",color:"#ffaa66",detail:"Slider continues past last bin. Wafer never re-contacts a melt."},{name:"Cool-down",realMin:180,animSec:10,temp:[773.9,100],slider:io,narr:"COOLING DOWN · furnace off",color:"#5f7d9e",detail:"Furnace off, natural cool under flowing H₂ to <100 °C. Do not open hot."}],Ls=En.reduce((i,e)=>i+e.animSec,0),Oa=En.reduce((i,e)=>i+e.realMin,0);function cs(i){if(i>=60){const e=Math.floor(i/60),t=Math.round(i-e*60);return`${e} h ${String(t).padStart(2,"0")} min`}return i>=1?`${Math.round(i)} min`:`${Math.round(i*60)} s`}const rt={J:5e-4,Y0:1.8,n:442e20,f:2,thOpt:70,resistT:1.5,sel:1.5,tilt:30,depth:.4,UPPER:.5};function rl(i){const e=i*Math.PI/180,t=Math.cos(e),n=Math.cos(rt.thOpt*Math.PI/180),s=Math.pow(t,-2)*Math.exp(rt.f*n*(1-1/t));return rt.Y0*s*t*rt.J/1602e-22/rt.n*1e7*60}const xh=()=>rt.depth*1e3/rl(rt.tilt),es=5e-6,qn=2e-4,Vs=5e-5,St=[{dur:2,real:1,narr:"READY · wafer already clamped",color:"#7fc4ff",cP:[Vs,Vs],tB:0,tS:25,detail:"The chip has already been transferred through the load lock and clamped to the water-cooled stage. The transfer mechanism is outside this cutaway."},{dur:3,real:5,narr:"PUMPING · chamber stabilizes",color:"#7fc4ff",cP:[Vs,es],tB:0,tS:25,detail:"The closed chamber stabilizes from 5×10⁻⁵ to 5×10⁻⁶ Torr. The wafer stays mechanically seated on its stage."},{dur:2,real:1,narr:"ARGON · source gas admitted",color:"#7fc4ff",cP:[es,qn],tB:0,tS:25,detail:"Argon is admitted. The example working pressure is 2×10⁻⁴ Torr; the ion beam remains blocked by its shutter."},{dur:3,real:5,narr:"ION SOURCE · shutter closed",color:"#ffaa66",cP:[qn,qn],tB:.5,tS:25,hot:!0,detail:"The Kaufman source and neutralizer start. A nominal 500 eV Ar⁺ beam is stabilized behind the closed shutter."},{dur:2,real:3,narr:"STAGE TILTS · preset 30°",color:"#ffaa66",cP:[qn,qn],tB:.5,tS:25,hot:!0,tilt:!0,detail:"The water-cooled wafer stage tilts to its preset 30° incidence angle while the source shutter remains closed."},{dur:10,real:0,narr:"MILLING · 500 eV Ar⁺",color:"#7ee6a0",etch:!0,cP:[qn,qn],tB:.5,tS:40,hot:!0,open:!0,tilt:!0,detail:()=>`The shutter opens; Ar⁺ removes exposed GaAs/AlGaAs by sputtering while the masked ridge remains. Rate ≈ ${rl(rt.tilt).toFixed(0)} nm/min; preset depth ${rt.depth.toFixed(2)} µm in ≈ ${xh().toFixed(1)} min. The stage rotates at 14 rpm.`},{dur:2,real:1,narr:"SHUTTER CLOSES · source off",color:"#7fc4ff",cP:[qn,es],tB:0,tS:30,tiltOut:!0,detail:"Shutter closes before the source is switched off. Argon flow stops and the stage returns to level."},{dur:2,real:2,narr:"COMPLETE · wafer remains mounted",color:"#7ee6a0",cP:[es,es],tB:0,tS:25,detail:()=>`Etched ${rt.depth.toFixed(2)} µm. ${(rt.UPPER-rt.depth).toFixed(2)} µm of upper cladding remains above the active layer. The wafer stays clamped for inspection; actual unload occurs through the load lock offscreen.`}],Or=St.reduce((i,e)=>i+e.dur,0),Fv=St.findIndex(i=>i.etch);function Bv(i){return i>1?`${Math.round(i)} Torr`:i>.001?`${(i*1e3).toFixed(1)} mTorr`:`${i.toExponential(1)} Torr`}const ga=i=>St[i].etch?xh():St[i].real;function zv(i,e,t){if(i<=0||e<=0)return i+(e-i)*t;const n=Math.log10(i),s=Math.log10(e);return Math.pow(10,n+(s-n)*t)}const{renderer:it,scene:Nt,camera:et,controls:qt,clipPlane:Mh,clipPlaneIMM:Gv,MAT:vi,keyLight:Tn,fill:Ws,rimLPE:Hv,rimIMM:kv,lowPower:Vv}=Sv();let _i=Vv;const{cyl:yh,box:Sh,boltRing:Wv,tubeAlong:Eh,makeCoil:Xv,annularTube:bh}=Ev(vi),{machine:xo,zoneCoils:wh,zoneLights:Th,growthLayers:Mo,growthLayersGroup:Yv,contactRing:ts,meltBridge:jn,melts:Fa,sliderGroup:Ei,subRing:Ah,substrate:qv,growthLight:Is,sliderGlow:Rh,bubbles:Ch,pidScreens:Ph,otcLed:jv,inletWheel:Lh,meltMats:lu,baseMeltEmissive:Zv}=Cv({scene:Nt,MAT:vi,clipPlane:Mh,cyl:yh,box:Sh,boltRing:Wv,tubeAlong:Eh,makeCoil:Xv,annularTube:bh}),{IMM:gs,etchL:rs,wafer:Zn,resist:Js,MASK_TOP:Ih,RES_H:Dh,tiltG:qr,beamCone:Ba,plasma:Uh,plasmaCore:Nh,sputters:Oh,chamberLight:Fh,neutMat:cu,leafL:Bh,leafR:zh,shutterMat:Kv,shutterY:$v,BT:_a,BB:uu,stg:Gh,RW:Jv,FW:Qv,vpGlow:Hh}=Pv({scene:Nt,MAT:vi,cyl:yh,box:Sh,annularTube:bh,tubeAlong:Eh}),_t=Dv(Nt);let st=_h(_t.layout,window.innerWidth,window.innerHeight),tt=null,Fr=null,ot=null,Br=null,ct=null,zr=null,ut=null,Gr=null,ht=null,Hr=null;const ex=Ov();var Eu;const us=(Eu=window.matchMedia)==null?void 0:Eu.call(window,"(prefers-reduced-motion: reduce)");let vt=null,kr=null,bt=null,fi=0;const kh=Nv(rt),{maybeUpdateProfile:za}=Uv(),Vh=[["lpe","LPE · FURNACE",0,6.5,0],["imm","ION BEAM ETCH · HIGH VACUUM",rn.imm.x,7.5,0],["mbe","MBE · UHV CHAMBER",rn.mbe.x,8.2,0],["cmp","CMP · OXIDE POLISH",rn.cmp.x,5.3,0],["litho","LITHO · ArF SCANNER",rn.litho.x,5,0],["spin","SPIN COATER · PHOTORESIST",rn.spin.x,2.9,0],["implant","ION IMPLANTER · DOPANT",rn.implant.x,3.9,0],["mocvd","MOCVD · III-V EPITAXY",rn.mocvd.x,4.2,0]],er={};for(const[i,e]of Vh){const t=document.createElement("div");t.className="label3d",t.textContent=e,t.dataset.bay=i,t.setAttribute("role","button"),t.tabIndex=0,t.setAttribute("aria-label","Explore "+rn[i].name),t.title="Explore "+rn[i].name,document.body.appendChild(t),er[i]=t}const Wh=Object.values(er),hi=new P;function tx(){if(Be!=="overview"||document.body.classList.contains("focus-view"))return;const i=window.innerWidth,e=window.innerHeight,t=i<=760;Vh.forEach(([n,,s,r,a],o)=>{const l=er[n];hi.set(s,r,a).project(et);const c=(hi.x*.5+.5)*i,u=(-hi.y*.5+.5)*e,h=hi.z>=-1&&hi.z<=1&&Math.abs(hi.x)<=1.04&&Math.abs(hi.y)<=1.04;l.style.opacity=h?"1":"0",l.style.pointerEvents=h&&!t?"auto":"none",l.style.transform=`translate(-50%, -100%) translate(${c.toFixed(1)}px, ${(u-(o%2?43:0)).toFixed(1)}px)`})}for(const i of[xo,gs]){let e=0;i.traverse(t=>{var s,r;if(!t.isMesh)return;const n=!((s=t.material)!=null&&s.transparent)&&!((r=t.material)!=null&&r.isMeshBasicMaterial);t.castShadow=n&&e++<12,t.receiveShadow=!1})}Hh.castShadow=!1;const nx=il(xo,{exclude:new Set([...wh,...Th,...Mo.map(i=>i==null?void 0:i.mesh).filter(Boolean),Yv,ts,jn,...Fa.map(i=>i.mesh),Ei,Ah,qv,Is,Rh,...Ch,...Ph.flatMap(i=>Object.values(i)),jv,Lh])}),ix=il(gs,{exclude:new Set([...rs.flatMap(i=>(i==null?void 0:i.meshes)||[]),Zn,Js,qr,Ba,Uh,Nh,...Oh.map(i=>i.mesh),Fh,Bh,zh,Gh,Hh])}),Xh=document.getElementById("cut"),Yh=document.getElementById("cutIMM");function qh(){Mh.constant=1.9-Xh.value/100*3}function jh(){Gv.constant=2.5-Yh.value/100*4}Xh.addEventListener("input",qh);Yh.addEventListener("input",jh);qh();jh();let pi=0,An=!1,jr=!1,Ga=-1,Dt=null,so=0,ro=0,gn=25,Vr=ei,hu=-1,va=0;const _e={immT:0,immOn:!1,immDone:!1,immIdx:-1,immLocal:0,press:Vs,tiltNow:0,beam:0,stage:25,etch:0},Ut=document.getElementById("narrStatus"),Rn=document.getElementById("narrDetail"),Gn=document.getElementById("narrTime"),sx=document.getElementById("progBar"),Zh=document.getElementById("stack"),On=document.getElementById("playBtn"),Fn=document.getElementById("immBtn"),Kh=document.getElementById("ionProgBar");document.getElementById("tabLPE");document.getElementById("tabIMM");const rx=document.getElementById("lpeControls"),ox=document.getElementById("immControls");function $h(){if(!bt)return 0;const i=Dt&&Dt.growthExp||1;return Math.max(.001,Math.pow(so,i))}function Ha(i){const e=Math.round(i);document.getElementById("t1").textContent=e+" °C",document.getElementById("t2").textContent=e+" °C",document.getElementById("t3").textContent=e+" °C",document.getElementById("t4").textContent=e+" °C"}function ol(){gn=25,Ut.textContent="IDLE",Ut.style.color="#5f7d9e",Rn.textContent="One virtual lab with eight independent fabrication tools. Select a station to inspect its equipment and illustrative process.",Gn.textContent=`LPE · ${cs(Oa)} simulated · ~${Math.round(Ls)} s demo`,Ha(25),za(25)}function ax(){Zh.innerHTML='<div class="layer sub"><span class="mat">GaAs (100) substrate</span><span class="thick">350 µm</span></div>',ro=0}function lx(){Mo.forEach(i=>{i&&(i.deposited=!1,i.active=!1,i.mesh.visible=!1,i.mesh.scale.y=1e-4,i.material.emissiveIntensity=.12)}),bt=null}function cx(i){if(i<=ro)return;ro=i;const e=zn[i],t=document.createElement("div");t.className="layer new",t.innerHTML=`<span class="mat">${e.mat}</span><span class="thick">${e.thickness.toFixed(1)} µm</span>`,Zh.appendChild(t)}let Be="overview";const Kn={overview:{pos:new P(st.centerX,st.targetY+st.height,st.distance),tgt:new P(st.centerX,st.targetY,0)},lpe:{pos:new P(7.5,11,22),tgt:new P(0,2.6,0)},imm:{pos:new P(23,10,12),tgt:new P(16,3.2,0)},mbe:{pos:new P(36.8,3.8,12.5),tgt:new P(30,4.4,0)},cmp:{pos:new P(52,7.6,13),tgt:new P(46,2.2,0)},litho:{pos:new P(68.4,5,8),tgt:new P(62,1.95,0)},spin:{pos:new P(82.5,4.5,8.4),tgt:new P(78,.98,0)},implant:{pos:new P(99,6.4,12),tgt:new P(94.8,1.3,0)},mocvd:{pos:new P(116,6.5,12),tgt:new P(110.5,1.8,0)}};let lt=null,wt=null,Jh=0;const du=new _v,fu=new he,ux=[...Object.values(_t.proxies),...Object.values(_t.slabs)];let oo=null,ao=null,pu=-1/0;function _s(i){if(i!==oo){oo=i;for(const[e,t]of Object.entries(_t.outlines))t.material.color.setHex(e===i?8702975:3233397),t.material.opacity=e===i?1:.8;for(const[e,t]of Object.entries(er))t.classList.toggle("hovered",e===i);it.domElement.style.cursor=i?"pointer":""}}function Qh(i){if(Be!=="overview"||document.body.classList.contains("focus-view"))return null;const e=it.domElement.getBoundingClientRect();fu.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),du.setFromCamera(fu,et);const t=du.intersectObjects(ux,!0)[0];if(!t)return null;let n=t.object;for(;n;){if(n.userData.bayKey)return n.userData.bayKey;for(const[s,r]of Object.entries(_t.proxies))if(n===r)return s;n=n.parent}return null}function al(){if(!lt)return;lt=null;const i=Be==="overview"?st.maxDistance:85,e=et.position.distanceTo(qt.target);qt.maxDistance=Math.max(i,e+.5),wt={start:performance.now(),duration:220,fromFov:et.fov,fromFog:Nt.fog.far,toFov:Be==="overview"?st.fov:40,toFog:Be==="overview"?st.fogFar:sl}}it.domElement.addEventListener("pointerdown",i=>{al(),ao={id:i.pointerId,x:i.clientX,y:i.clientY,time:performance.now()}},{passive:!0});it.domElement.addEventListener("pointermove",i=>{if(Be!=="overview"||i.buttons||i.pointerType==="touch"){oo&&_s(null),i.buttons&&al();return}performance.now()-pu<85||(pu=performance.now(),_s(Qh(i)))},{passive:!0});it.domElement.addEventListener("pointerleave",()=>_s(null),{passive:!0});it.domElement.addEventListener("pointerup",i=>{const e=ao;if(ao=null,!e||e.id!==i.pointerId||performance.now()-e.time>650||Math.hypot(i.clientX-e.x,i.clientY-e.y)>7)return;const t=Qh(i);t&&Qs(t)},{passive:!0});it.domElement.addEventListener("pointercancel",()=>{ao=null},{passive:!0});it.domElement.addEventListener("wheel",al,{passive:!0});for(const[i,e]of Object.entries(er))e.addEventListener("pointerenter",()=>_s(i)),e.addEventListener("pointerleave",()=>_s(null)),e.addEventListener("click",()=>Qs(i)),e.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),Qs(i))});const ka={overview:document.getElementById("tabOverview"),lpe:document.getElementById("tabLPE"),imm:document.getElementById("tabIMM"),mbe:document.getElementById("tabMBE"),cmp:document.getElementById("tabCMP"),litho:document.getElementById("tabLitho"),spin:document.getElementById("tabSpin"),implant:document.getElementById("tabImplant"),mocvd:document.getElementById("tabMOCVD")},hx=document.getElementById("lpeLeft"),dx=document.getElementById("mbeLeft"),fx=document.getElementById("overviewLeft"),px=document.getElementById("mbeControls"),mx=document.getElementById("overviewControls"),Va=document.getElementById("mbePlayBtn"),Wa=document.getElementById("cmpPlayBtn"),ed=document.getElementById("lithoPlayBtn"),td=document.getElementById("spinPlayBtn"),nd=document.getElementById("implantPlayBtn"),id=document.getElementById("mocvdPlayBtn");async function gx(){return ht||(Hr||(Hr=Promise.all([hn(()=>import("./scene-D5gYE_5o.js"),[],import.meta.url),hn(()=>import("./controller-CFlD6IsL.js"),[],import.meta.url)]).then(([i,e])=>{const t=i.buildMocvd({scene:Nt});return ht=e.createMocvdController(t),t.group.visible=Be==="mocvd",_t.setFocus(Be),id.disabled=!1,ht.refresh(),it.shadowMap.needsUpdate=!0,ht}).catch(i=>{throw Hr=null,document.getElementById("mocvdDetail").textContent="Unable to load MOCVD station; reload to retry.",console.error("MOCVD station failed:",i),i})),Hr)}async function _x(){return ct||(zr||(zr=Promise.all([hn(()=>import("./scene-ChROO2UY.js"),[],import.meta.url),hn(()=>import("./controller-bmMHUkQr.js"),[],import.meta.url)]).then(([i,e])=>{const t=i.buildSpin({scene:Nt});return ct=e.createSpinController(t),t.group.visible=Be==="spin",_t.setFocus(Be),td.disabled=!1,ct.refresh(),it.shadowMap.needsUpdate=!0,ct}).catch(i=>{throw zr=null,document.getElementById("spinDetail").textContent="Unable to load spin coater; reload to retry.",console.error(i),i})),zr)}async function vx(){return ut||(Gr||(Gr=Promise.all([hn(()=>import("./scene-C-gTmm5N.js"),[],import.meta.url),hn(()=>import("./controller-D2XJ4w1f.js"),[],import.meta.url)]).then(([i,e])=>{const t=i.buildImplanter({scene:Nt});return ut=e.createImplantController(t),t.group.visible=Be==="implant",_t.setFocus(Be),nd.disabled=!1,ut.refresh(),it.shadowMap.needsUpdate=!0,ut}).catch(i=>{throw Gr=null,document.getElementById("implantDetail").textContent="Unable to load implanter; reload to retry.",console.error(i),i})),Gr)}async function xx(){return ot||(Br||(Br=Promise.all([hn(()=>import("./scene-BQVfSCjZ.js"),__vite__mapDeps([0,1]),import.meta.url),hn(()=>import("./controller-BoK9qQU3.js"),__vite__mapDeps([2,1]),import.meta.url)]).then(([i,e])=>{const t=i.buildLitho({scene:Nt,camera:et});return ot=e.createLithoController(t),ot.group.visible=Be==="litho",_t.setFocus(Be),ed.disabled=!1,ot.refresh(),it.shadowMap.needsUpdate=!0,ot}).catch(i=>{throw Br=null,document.getElementById("lithoDetail").textContent="Lithography loading failed; reload to retry.",console.error(i),i})),Br)}async function Mx(){return tt||(Fr||(Fr=Promise.all([hn(()=>import("./scene-D63tIg60.js"),[],import.meta.url),hn(()=>import("./controller-qV7DpZJq.js"),[],import.meta.url)]).then(([i,e])=>{const t=i.buildCMP({scene:Nt,batchStatic:!window.__foundryDisableCmpBatching});return tt=e.createCMPController(t),tt.group.visible=Be==="cmp",_t.setFocus(Be),Wa.disabled=!1,tt.refresh(),it.shadowMap.needsUpdate=!0,tt}).catch(i=>{throw Fr=null,Wa.disabled=!0,document.getElementById("cmpNarrDetail").textContent="CMP model could not load. Reload to retry.",console.error("CMP station failed:",i),i})),Fr)}async function yx(){return vt||(kr||(kr=Promise.all([hn(()=>import("./scene-eeeEf7HE.js"),__vite__mapDeps([3,4]),import.meta.url),hn(()=>import("./controller-B9H7PfEF.js"),__vite__mapDeps([5,4]),import.meta.url)]).then(([i,e])=>{const t=new _n(new P(0,0,-1),0),n=i.buildMbe({scene:Nt,clipPlane:t});return vt=e.createMBEController(n),n.MBE.visible=Be==="mbe",_t.setFocus(Be),Va.disabled=!1,vt.refresh(),it.shadowMap.needsUpdate=!0,vt}).catch(i=>{throw kr=null,Va.disabled=!0,document.getElementById("mbeNarrDetail").textContent="Unable to load the MBE model. Reload to retry.",console.error("MBE station failed to load:",i),i})),kr)}function Sx(i){hx.hidden=!(i==="lpe"||i==="imm"),document.getElementById("lpeOnlyIllustrations").hidden=i!=="lpe",document.getElementById("ionOnlyIllustrations").hidden=i!=="imm",dx.hidden=i!=="mbe",document.getElementById("cmpLeft").hidden=i!=="cmp",document.getElementById("lithoLeft").hidden=i!=="litho",document.getElementById("spinLeft").hidden=i!=="spin",document.getElementById("implantLeft").hidden=i!=="implant",document.getElementById("mocvdLeft").hidden=i!=="mocvd",fx.hidden=i!=="overview",rx.style.display=i==="lpe"?"block":"none",ox.style.display=i==="imm"?"block":"none",px.hidden=i!=="mbe",document.getElementById("cmpControls").hidden=i!=="cmp",document.getElementById("lithoControls").hidden=i!=="litho",document.getElementById("spinControls").hidden=i!=="spin",document.getElementById("implantControls").hidden=i!=="implant",document.getElementById("mocvdControls").hidden=i!=="mocvd",mx.hidden=i!=="overview"}function Qs(i,{instant:e=!1}={}){i in Kn||(i="overview"),wt=null,Be=i,_s(null),xo.visible=i==="lpe",gs.visible=i==="imm",vt&&(vt.MBE.visible=i==="mbe"),tt&&(tt.group.visible=i==="cmp"),ot&&(ot.group.visible=i==="litho"),ct&&(ct.group.visible=i==="spin"),ut&&(ut.group.visible=i==="implant"),ht&&(ht.group.visible=i==="mocvd"),_t.setFocus(i==="mbe"&&!vt||i==="cmp"&&!tt||i==="litho"&&!ot||i==="spin"&&!ct||i==="implant"&&!ut||i==="mocvd"&&!ht?"overview":i);for(const[l,c]of Object.entries(ka))c.classList.toggle("active",l===i),c.setAttribute("aria-pressed",String(l===i));Sx(i),ka[i].scrollIntoView({block:"nearest",inline:"nearest"});const t=Kn[i],n=i==="overview"?st.fov:40,s=i==="overview"?st.fogFar:sl,r=et.position.distanceTo(t.pos),a=vh(r,_i);lt=e||us!=null&&us.matches?null:{start:performance.now(),duration:a,fromPos:et.position.clone(),fromTarget:qt.target.clone(),fromFov:et.fov,fromFog:Nt.fog.far,toPos:t.pos.clone(),toTarget:t.tgt.clone(),toFov:n,toFog:s},Jh=a,et.far=Math.max(300,st.distance*2.4),qt.maxDistance=Math.max(st.maxDistance,85),lt||(et.position.copy(t.pos),qt.target.copy(t.tgt),et.fov=n,Nt.fog.far=s),et.updateProjectionMatrix(),qt.maxPolarAngle=i==="mbe"?Math.PI*.73:Math.PI*.495;const o=i==="overview"?_t.layout.centerX:rn[i].x;Tn.position.set(o+9,18,14),Tn.target.position.set(o,3,0),Tn.target.updateMatrixWorld(),Ws.position.set(o-10,9,-8),Ws.target.position.set(o,2.5,0),Ws.target.updateMatrixWorld(),Hv.visible=i==="lpe",kv.visible=i==="imm",it.shadowMap.needsUpdate=!0;for(const l of Wh)l.style.display=i==="overview"?"block":"none",l.tabIndex=i==="overview"?0:-1;if(document.body.classList.toggle("room-overview",i==="overview"),i==="lpe"&&(Dt?(Ut.textContent=Dt.narr,Ut.style.color=Dt.color,Rn.textContent=Dt.detail):ol()),i==="imm")if(_e.immOn&&_e.immIdx>=0){const l=St[_e.immIdx];Ut.textContent=l.narr,Ut.style.color=l.color,Rn.textContent=typeof l.detail=="function"?l.detail():l.detail}else _e.hold?(Ut.textContent=_e.hold.s,Ut.style.color=_e.hold.c,Rn.textContent=_e.hold.d,Gn.textContent=_e.hold.t):(Ut.textContent="READY · WAFER CLAMPED",Ut.style.color="#7fc4ff",Rn.textContent="The chip is mounted on the cooled stage. Run the preset Ar⁺ process to see vacuum stabilization, beam generation and masked ridge etching.",Gn.textContent="Preset 0.40 µm etch · chamber closed");i==="mbe"&&(vt?vt.refresh():(Va.disabled=!0,document.getElementById("mbeNarrDetail").textContent="Opening the MBE station in the shared lab…",yx())),i==="cmp"&&(tt?tt.refresh():(Wa.disabled=!0,document.getElementById("cmpNarrDetail").textContent="Loading CMP equipment into the shared lab…",Mx())),i==="litho"&&(ot?ot.refresh():(ed.disabled=!0,xx())),i==="spin"&&(ct?ct.refresh():(td.disabled=!0,_x())),i==="implant"&&(ut?ut.refresh():(nd.disabled=!0,vx())),i==="mocvd"&&(ht?ht.refresh():(id.disabled=!0,gx()))}for(const[i,e]of Object.entries(ka))e.addEventListener("click",()=>Qs(i));On.addEventListener("click",()=>{if(An){An=!1,On.textContent="▶ Run Growth Cycle",On.classList.remove("running");return}pi=0,Ga=-1,Dt=null,so=0,jr=!1,An=!0,ax(),lx(),(!Ei.position.x||Math.abs(Ei.position.x-io)<.01)&&(Ei.position.x=ei),On.textContent="■ Stop Cycle",On.classList.add("running"),On.classList.remove("done")});Fn.addEventListener("click",()=>{if(_e.immOn){_e.immOn=!1,_e.beam=0,_e.tiltNow=0,_e.press=es,_e.stage=25,_e.hold={s:"ABORTED · beam off",c:"#ff8a5a",d:"Beam and Ar flow stopped; shutter closes and stage levels. The chip stays clamped inside the chamber.",t:Gn.textContent},Fn.textContent="▶ Run Ion Mill",Fn.classList.remove("running");return}_e.immT=0,_e.immIdx=-1,_e.immDone=!1,_e.immOn=!0,_e.etch=0,_e.press=Vs,_e.tiltNow=0,_e.beam=0,_e.stage=25,_e.hold=null,Kh.style.width="0%",rs.forEach(i=>{i&&i.meshes.forEach(e=>{e.visible=!0,e.scale.y=1,e.position.y=i.baseY+i.h/2})}),Js.scale.y=1,Js.position.y=Ih+Dh/2,fi=0,kh.update(0,1),Fn.textContent="■ Stop Mill",Fn.classList.add("running"),Fn.classList.remove("done")});ol();const mu=new URLSearchParams(window.location.search).get("tool");Qs(mu in Kn?mu:"overview",{instant:!0});const xa=new gv;function Ex(){let i=0;return Mo.forEach(e=>{!e||!e.deposited||(e.active?i+=e.height*$h():i+=e.height)}),i}let gu=-1/0,_u=-1/0;function vu(i,e){const t=Be==="lpe"&&e-gu>=.1;t&&(gu=e),wh.forEach((g,v)=>{const m=.3+Math.max(0,(gn-25)/800)*3;g.material.emissiveIntensity=m+Math.sin(e*1.9+v*2.1)*.15}),Th.forEach((g,v)=>{const m=.4+Math.max(0,(gn-25)/800)*12;g.intensity=m+Math.sin(e*2.4+v*1.8)*.8}),Fa.forEach((g,v)=>{let m=0,f=1;An&&Dt&&(Dt.deposit===v&&(m=so*.5),Dt.meltback&&v===0&&(f=.6)),g.mesh.material.emissiveIntensity=(Zv[v]+m)*f+Math.sin(e*3.4+v*1.3)*.06}),Rh.intensity=An?3.4:1.8,Lh.rotation.z=e*.35,Ph.forEach((g,v)=>{const m=Math.max(0,Math.min(1,(gn-25)/780));g.pvStrip.material.emissiveIntensity=.3+m*2.2,g.svStrip.material.emissiveIntensity=.3+m*2}),Ch.forEach(g=>{const v=(e*g.userData.speed+g.userData.phase)%1;g.position.y=-.19+v*.18,g.position.x=g.userData.baseX+Math.sin(v*20)*.006,g.scale.setScalar(.5+v*.9)});let n=null,s=0;if(An){pi+=i,pi>=Ls&&(pi=Ls,An=!1,jr=!0,On.textContent="✓ LPE Complete",On.classList.remove("running"),On.classList.add("done"));let g=0,v=-1,m=0;for(let _=0;_<En.length;_++){if(pi<g+En[_].animSec||_===En.length-1){v=_,m=Math.min(1,(pi-g)/En[_].animSec);break}g+=En[_].animSec}if(so=m,v!==Ga){if(bt&&(bt.mesh.scale.y=bt.height,bt.mesh.position.y=bt.baseY+bt.height/2,bt.material.emissiveIntensity=.12,bt.active=!1,bt=null),Ga=v,Dt=En[v],Dt.deposit){cx(Dt.deposit);const _=Mo[Dt.deposit];_&&(_.deposited=!0,_.active=!0,_.mesh.visible=!0,bt=_)}Be==="lpe"&&(Ut.textContent=Dt.narr,Ut.style.color=Dt.color,Rn.textContent=Dt.detail)}const f=Dt;f.slider!==void 0?Vr=f.slider:f.from!==void 0&&(Vr=f.from+(f.to-f.from)*m);const[w,x]=f.temp;if(gn=w+(x-w)*m,f.deposit?(n=8378111,s=1.4+Math.sin(e*8)*.4):f.meltback&&(n=16736304,s=1.6+Math.sin(e*9)*.5),t){sx.style.width=(pi/Ls*100).toFixed(1)+"%";const _=En.slice(0,v).reduce((R,E)=>R+E.realMin,0)+m*En[v].realMin;Gn.textContent=`${cs(_)} / ${cs(Oa)} simulated · ${Math.round(Ls)} s demo`}t&&(Ha(gn),za(gn))}else Vr=jr?io:ei,jr?(gn=Math.max(25,gn-1.5),t&&(Ut.textContent="LPE COMPLETE",Ut.style.color="#7ee6a0",Rn.textContent=`${ro} layers · 2.1 µm total · DH structure finished. Switch to Ion Mill to pattern a ridge.`,Gn.textContent=`${cs(Oa)} simulated cycle · complete`),t&&(Ha(gn),za(gn))):t&&ol();Ei.position.x+=(Vr-Ei.position.x)*.18;const r=Ei.position.x,a=Ex(),l=ks+a+.001,c=Qi-.001,u=Math.max(.001,c-l);let h=-1,d=Rv;if(Fa.forEach((g,v)=>{const m=r+Hs[v];Math.abs(m)<d&&(d=Math.abs(m),h=v)}),h>=0){const g=r+Hs[h];jn.visible=!0,jn.position.set(g,(l+c)/2,0),jn.scale.y=u,jn.material.color.setHex(zn[h].color),jn.material.emissive.copy(lu[h].emissive),jn.material.emissiveIntensity=lu[h].emissiveIntensity}else jn.visible=!1;if(ts.position.y=ks+a+.002,h>=0?(ts.material.color.setHex(zn[h].color),ts.material.opacity=.35+Math.sin(e*6)*.12,hu!==h&&(va=1)):(ts.material.color.setHex(8378111),ts.material.opacity*=.85),hu=h,va*=.92,bt){const g=$h();bt.mesh.scale.y=bt.height*g,bt.mesh.position.y=bt.baseY+bt.height*g/2,bt.material.emissiveIntensity=.5+Math.sin(e*7)*.25}n!==null?(Is.color.setHex(n),Is.intensity=s):Is.intensity=0;const p=Is.intensity>0?.22:.05;Ah.material.opacity=.28+p*Math.sin(e*8)+va*.5}function xu(i,e){const t=Be==="imm"&&e-_u>=.1;if(t&&(_u=e),t&&!_e.immOn&&_e.hold&&Be==="imm"&&!An&&(Ut.textContent=_e.hold.s,Ut.style.color=_e.hold.c,Rn.textContent=_e.hold.d,Gn.textContent=_e.hold.t),_e.immOn){_e.immT+=i,_e.immT>=Or&&(_e.immT=Or,_e.immOn=!1,_e.immDone=!0,_e.hold={s:"MILL COMPLETE",c:"#7ee6a0",d:Rn.textContent,t:Gn.textContent},Fn.textContent="✓ Mill Complete",Fn.classList.remove("running"),Fn.classList.add("done"));let h=0,d=-1,p=0;for(let f=0;f<St.length;f++){if(_e.immT<h+St[f].dur||f===St.length-1){d=f,p=Math.min(1,(_e.immT-h)/St[f].dur);break}h+=St[f].dur}if(_e.immLocal=p,d!==_e.immIdx){_e.immIdx=d;const f=St[d];Be==="imm"&&(Ut.textContent=f.narr,Ut.style.color=f.color,Rn.textContent=typeof f.detail=="function"?f.detail():f.detail)}const g=St[d],v=d-1,m=v>=0?St[v]:{tB:0,tS:25};_e.press=g.cP?zv(g.cP[0],g.cP[1],p):_e.press,_e.beam=(m.tB||0)+(g.tB-(m.tB||0))*p,_e.stage=(m.tS||25)+(g.tS-(m.tS||25))*p,_e.etch=g.etch?p:d>Fv?1:0,_e.elapsedReal=St.slice(0,d).reduce((f,w,x)=>f+ga(x),0)+p*ga(d),_e.tiltNow=g.tilt?rt.tilt:g.tiltOut?rt.tilt*(1-p):0,t&&(Kh.style.width=(_e.immT/Or*100).toFixed(1)+"%",Gn.textContent=`IBE · ${cs(_e.elapsedReal)} of ${cs(St.reduce((f,w,x)=>f+ga(x),0))} real · demo ${Math.round(_e.immT)}s / ${Or}s`)}if(t){document.getElementById("v1").textContent=Bv(_e.press),document.getElementById("v2").textContent=_e.beam.toFixed(2)+" mA/cm²",document.getElementById("v3").textContent=Math.round(_e.stage)+" °C · "+Math.round(Qn.radToDeg(qr.rotation.x))+"° tilt";const h=_e.etch*rt.depth,d=rt.UPPER-h;document.getElementById("v4").textContent=_e.etch>0?Math.round(h*1e3)+" nm @ "+rl(rt.tilt).toFixed(0)+" nm/min":"—";const p=document.getElementById("v5");p.textContent=_e.etch>0?d>0?d.toFixed(2)+" µm":"ACTIVE HIT":"—",p.style.color=_e.etch>0&&d<.05?"#ff6a5a":"",document.getElementById("v6").textContent=_e.etch>0?Math.max(0,rt.resistT-h/rt.sel).toFixed(2)+" µm":"—"}vi.plasma.opacity=_e.beam*1.2,vi.plasmaCore.opacity=_e.beam*1.8,vi.beam.opacity=_e.beam*.8,vi.vpGlow.opacity=_e.beam*.85,Uh.scale.setScalar(1+_e.beam*.4),Nh.scale.setScalar(1+_e.beam*.3),Fh.intensity=_e.beam*10,qr.rotation.x=Qn.lerp(qr.rotation.x,(_e.tiltNow||0)*Math.PI/180,.1);const n=_e.immOn&&St[_e.immIdx]&&St[_e.immIdx].hot,s=_e.immOn&&St[_e.immIdx]&&St[_e.immIdx].open;fi+=((s?1:0)-fi)*Math.min(1,i*4),Bh.rotation.z=fi*1.5,zh.rotation.z=-fi*1.5;const r=Qn.lerp($v+.02,uu,fi);Ba.scale.y=Math.max(.02,(_a-r)/(_a-uu)),Ba.position.y=(_a+r)/2,cu.emissiveIntensity+=((n?2.2:0)-cu.emissiveIntensity)*Math.min(1,i*3),Kv.emissiveIntensity=_e.beam*(1-fi)*.9;const a=_e.immOn&&St[_e.immIdx]&&St[_e.immIdx].etch,o=a?1.5:0;Zn.rotation.y+=o*i,Gh.rotation.y=Zn.rotation.y;let l=.04;for(let h=rs.length-1;h>=1;h--){const d=rs[h];if(d&&d.meshes[0].visible){l=d.baseY+d.h*d.meshes[0].scale.y;break}}a&&Zn.updateWorldMatrix(!0,!1),Oh.forEach(h=>{if(a){if(h.mesh.visible=!0,h.age+=i*1.4,h.age>=1){h.age=0;const p=Math.random()<.5?-1:1,g=new P(p*(Jv/2+Math.random()*Qv*.9),l+.012,(Math.random()-.5)*.66);Zn.localToWorld(g),gs.worldToLocal(g),h.mesh.position.copy(g),h.nrm=new P(0,1,0).transformDirection(Zn.matrixWorld);const v=Math.random()*Math.PI*.5,m=Math.random()*Math.PI*2,f=.35+Math.random()*.7,w=new P(Math.sin(v)*Math.cos(m),0,Math.sin(v)*Math.sin(m)).multiplyScalar(.7),x=h.nrm.clone().multiplyScalar(Math.cos(v)).add(w).normalize().multiplyScalar(f);h.vx=x.x,h.vy=x.y,h.vz=x.z}h.mesh.position.x+=h.vx*i,h.mesh.position.y+=h.vy*i,h.mesh.position.z+=h.vz*i;const d=new P(h.vx,h.vy,h.vz).normalize();h.mesh.quaternion.setFromUnitVectors(new P(0,1,0),d),h.mesh.material.opacity=.85*(1-h.age)}else h.mesh.visible=!1});let c=_e.etch*rt.depth;for(let h=rs.length-1;h>=1;h--){const d=rs[h];if(!d)continue;const p=Math.min(c,d.t),g=p/d.t,v=Math.max(5e-4,d.h*(1-g));d.meshes.forEach(m=>{m.visible=g<.999,m.scale.y=v/d.h,m.position.y=d.baseY+v/2}),c-=p}const u=Math.max(.02,1-_e.etch*rt.depth/rt.sel/rt.resistT);Js.scale.y=u,Js.position.y=Ih+Dh*u/2,t&&kh.update(_e.etch*rt.depth,u)}let Wr=-1/0,sd=-1/0,Mu=-1/0;const rd=[],od=[];function yu(i,e){Number.isFinite(e)&&e>=0&&(i.push(e),i.length>90&&i.shift())}function Su(i){if(!i.length)return null;const e=[...i].sort((t,n)=>t-n);return Number(e[Math.floor((e.length-1)*.95)].toFixed(2))}let Cs=0,Ps=0;for(const i of["pointerdown","pointermove","wheel"])it.domElement.addEventListener(i,()=>{sd=performance.now()},{passive:!0});function ad(i=0){if(requestAnimationFrame(ad),document.hidden){xa.getDelta();return}const e=Be==="lpe"&&An||Be==="imm"&&_e.immOn||Be==="mbe"&&(vt==null?void 0:vt.isRunning())||Be==="cmp"&&(tt==null?void 0:tt.isRunning())||Be==="litho"&&(ot==null?void 0:ot.isRunning())||Be==="spin"&&(ct==null?void 0:ct.isRunning())||Be==="implant"&&(ut==null?void 0:ut.isRunning())||Be==="mocvd"&&(ht==null?void 0:ht.isRunning()),t=!!lt||!!wt||i-sd<750,n=_i?e||t?45:18:e||t?60:24;if(i-Wr<1e3/n)return;Number.isFinite(Wr)&&yu(od,i-Wr),Wr=i;const s=Math.min(xa.getDelta(),.22),r=xa.getElapsedTime();if(Be==="lpe"?(vu(s,r),Cs=0):An&&(Cs+=s,Cs>=.1&&(vu(Cs,r),Cs=0)),Be==="imm"?(xu(s,r),Ps=0):_e.immOn&&(Ps+=s,Ps>=.1&&(xu(Ps,r),Ps=0)),vt&&(Be==="mbe"||vt.isRunning())&&vt.update(s,r,Be==="mbe"),tt&&(Be==="cmp"||tt.isRunning())&&tt.update(s,r,Be==="cmp"),ot&&(Be==="litho"||ot.isRunning())&&ot.update(s,r,Be==="litho"),ct&&(Be==="spin"||ct.isRunning())&&ct.update(s,r,Be==="spin"),ut&&(Be==="implant"||ut.isRunning())&&ut.update(s,r,Be==="implant"),ht&&(Be==="mocvd"||ht.isRunning())&&ht.update(s,r,Be==="mocvd"),lt){const o=(i-lt.start)/lt.duration,l=au(o);et.position.lerpVectors(lt.fromPos,lt.toPos,l),qt.target.lerpVectors(lt.fromTarget,lt.toTarget,l),et.fov=Qn.lerp(lt.fromFov,lt.toFov,l),Nt.fog.far=Qn.lerp(lt.fromFog,lt.toFog,l),et.updateProjectionMatrix(),o>=1&&(lt=null,qt.maxDistance=Be==="overview"?st.maxDistance:85)}else if(wt){const o=(i-wt.start)/wt.duration,l=au(o);et.fov=Qn.lerp(wt.fromFov,wt.toFov,l),Nt.fog.far=Qn.lerp(wt.fromFog,wt.toFog,l),et.updateProjectionMatrix(),o>=1&&(wt=null)}qt.update(),Be==="overview"&&tx(),it.shadowMap.enabled&&i-Mu>400&&(e||t)&&(it.shadowMap.needsUpdate=!0,Mu=i);const a=performance.now();it.render(Nt,et),yu(rd,performance.now()-a)}window.addEventListener("resize",()=>{et.aspect=window.innerWidth/window.innerHeight,st=_h(_t.layout,window.innerWidth,window.innerHeight),Kn.overview.pos.set(st.centerX,st.targetY+st.height,st.distance),Kn.overview.tgt.set(st.centerX,st.targetY,0),_i=window.innerWidth<900||!!(window.matchMedia&&window.matchMedia("(pointer:coarse)").matches);const i=_i?512:1024;if(Tn.shadow.mapSize.x!==i&&(Tn.shadow.mapSize.set(i,i),Tn.shadow.map&&(Tn.shadow.map.dispose(),Tn.shadow.map=null)),it.shadowMap.enabled=!_i,it.shadowMap.needsUpdate=!0,it.setSize(window.innerWidth,window.innerHeight),it.setPixelRatio(Math.min(window.devicePixelRatio||1,_i?1:1.25)),Be==="overview")if(et.far=Math.max(300,st.distance*2.4),qt.maxDistance=st.maxDistance,wt=null,us!=null&&us.matches)lt=null,et.position.copy(Kn.overview.pos),qt.target.copy(Kn.overview.tgt),et.fov=st.fov,Nt.fog.far=st.fogFar;else{const e=Kn.overview;lt={start:performance.now(),duration:vh(et.position.distanceTo(e.pos),_i),fromPos:et.position.clone(),fromTarget:qt.target.clone(),fromFov:et.fov,fromFog:Nt.fog.far,toPos:e.pos.clone(),toTarget:e.tgt.clone(),toFov:st.fov,toFog:st.fogFar}}et.updateProjectionMatrix()});window.__foundryDiagnostics=()=>({view:Be,panels:ex.state(),rendererCount:document.querySelectorAll("canvas").length,mbeLoaded:!!vt,cmpLoaded:!!tt,lithoLoaded:!!ot,spinLoaded:!!ct,implantLoaded:!!ut,mocvdLoaded:!!ht,mocvdState:(ht==null?void 0:ht.getState())??null,mocvdRenderOptimization:(ht==null?void 0:ht.renderOptimization)??null,spinState:(ct==null?void 0:ct.getState())??null,implantState:(ut==null?void 0:ut.getState())??null,spinRenderOptimization:(ct==null?void 0:ct.renderOptimization)??null,implantRenderOptimization:(ut==null?void 0:ut.renderOptimization)??null,lithoState:(ot==null?void 0:ot.getState())??null,lithoRenderOptimization:(ot==null?void 0:ot.renderOptimization)??null,cmpState:(tt==null?void 0:tt.getState())??null,cmpGeometry:(tt==null?void 0:tt.geometry)??null,cmpRenderOptimization:(tt==null?void 0:tt.renderOptimization)??null,mbeRenderOptimization:(vt==null?void 0:vt.renderOptimization)??null,lpeRenderOptimization:nx,immRenderOptimization:ix,ionMill:{waferLocalPosition:Zn.position.toArray(),waferMounted:Zn.userData.mountedOnStage,assembly:gs.userData.ionMillAssembly,presetTilt:rt.tilt,presetDepth:rt.depth},detailed:{lpe:xo.visible,imm:gs.visible,mbe:(vt==null?void 0:vt.MBE.visible)??!1,cmp:(tt==null?void 0:tt.group.visible)??!1,litho:(ot==null?void 0:ot.group.visible)??!1,spin:(ct==null?void 0:ct.group.visible)??!1,implant:(ut==null?void 0:ut.group.visible)??!1,mocvd:(ht==null?void 0:ht.group.visible)??!1},proxies:Object.fromEntries(Object.entries(_t.proxies).map(([i,e])=>[i,e.visible])),drawCalls:it.info.render.calls,triangles:it.info.render.triangles,lighting:{exposure:it.toneMappingExposure,keyIntensity:Tn.intensity,fillIntensity:Ws.intensity,fillTarget:Ws.target.position.toArray()},pixelRatio:it.getPixelRatio(),shadowMap:it.shadowMap.enabled,shadowResolution:Tn.shadow.mapSize.x,ground:{floorSize:_t.layout.floorSize,gridSize:_t.layout.gridSize,gridDivisions:_t.layout.gridDivisions,shared:!0},roomBounds:{minX:_t.layout.minX,maxX:_t.layout.maxX,centerX:_t.layout.centerX,span:_t.layout.span,wallWidth:_t.layout.wallWidth},viewGeometry:{fov:et.fov,far:et.far,fogFar:Nt.fog.far,maxDistance:qt.maxDistance},cpuRenderP95ms:Su(rd),frameIntervalP95ms:Su(od),cameraPosition:et.position.toArray(),cameraTarget:qt.target.toArray(),cameraJourney:{active:!!lt,durationMs:Jh,fromFov:(lt==null?void 0:lt.fromFov)??et.fov,toFov:(lt==null?void 0:lt.toFov)??et.fov},framingRecovery:{active:!!wt,targetFov:(wt==null?void 0:wt.toFov)??null,targetFog:(wt==null?void 0:wt.toFog)??null},hoveredBay:oo,overviewLabels:Wh.length});requestAnimationFrame(ad);export{Ds as A,yn as B,un as C,tn as D,nl as E,ft as G,U_ as I,ra as M,At as O,_n as P,wi as Q,_o as R,ms as S,$s as T,P as V,He as a,Mn as b,Ce as c,Pa as d,mo as e,en as f,bx as g,Qn as h,Ti as i,qe as j,fo as k,Dc as l,il as m,Ot as n,cn as o,wx as p,ba as q,Si as r,dh as s,La as t};

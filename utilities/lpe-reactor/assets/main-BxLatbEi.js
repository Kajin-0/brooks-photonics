const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./scene-CinLMWny.js","./process-4qZ9l0-u.js","./controller-BoK9qQU3.js","./scene-CUAFJ3u-.js","./process-CxUEz70t.js","./controller-B9H7PfEF.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Jh="modulepreload",Qh=function(i,e){return new URL(i,e).href},cl={},Sn=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),u=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Qh(l,n),l in cl)return;cl[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const x=a[g];if(x.href===l&&(!c||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":Jh,c||(p.as="script"),p.crossOrigin="",p.href=l,u&&p.setAttribute("nonce",u),document.head.appendChild(p),c)return new Promise((g,x)=>{p.addEventListener("load",g),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="160",Ii={ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ed=0,ul=1,td=2,fu=1,pu=2,Pn=3,ni=0,Vt=1,Kt=2,Jn=0,as=1,Us=2,hl=3,dl=4,nd=5,_i=100,id=101,sd=102,fl=103,pl=104,rd=200,od=201,ad=202,ld=203,_a=204,xa=205,cd=206,ud=207,hd=208,dd=209,fd=210,pd=211,md=212,gd=213,_d=214,xd=0,vd=1,Md=2,qr=3,yd=4,Sd=5,Ed=6,bd=7,mu=0,wd=1,Td=2,Qn=0,Ad=1,Rd=2,Cd=3,gu=4,Pd=5,Ld=6,_u=300,ds=301,fs=302,va=303,Ma=304,ao=306,ya=1e3,un=1001,Sa=1002,Gt=1003,ml=1004,So=1005,Qt=1006,Id=1007,Ys=1008,ei=1009,Dd=1010,Ud=1011,ka=1012,xu=1013,Zn=1014,Kn=1015,qs=1016,vu=1017,Mu=1018,Mi=1020,Nd=1021,hn=1023,Od=1024,Fd=1025,yi=1026,ps=1027,Bd=1028,yu=1029,zd=1030,Su=1031,Eu=1033,Eo=33776,bo=33777,wo=33778,To=33779,gl=35840,_l=35841,xl=35842,vl=35843,bu=36196,Ml=37492,yl=37496,Sl=37808,El=37809,bl=37810,wl=37811,Tl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Ll=37817,Il=37818,Dl=37819,Ul=37820,Nl=37821,Ao=36492,Ol=36494,Fl=36495,Gd=36283,Bl=36284,zl=36285,Gl=36286,wu=3e3,Si=3001,Hd=3200,kd=3201,Tu=0,Vd=1,tn="",It="srgb",Bn="srgb-linear",Va="display-p3",lo="display-p3-linear",jr="linear",at="srgb",Zr="rec709",Kr="p3",Ui=7680,Hl=519,Wd=512,Xd=513,Yd=514,Au=515,qd=516,jd=517,Zd=518,Kd=519,kl=35044,ov=35048,Vl="300 es",Ea=1035,Nn=2e3,$r=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wl=1234567;const ls=Math.PI/180,js=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Wa(i,e){return(i%e+e)%e}function $d(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jd(i,e,t){return i!==e?(t-i)/(e-i):0}function Ns(i,e,t){return(1-t)*i+t*e}function Qd(i,e,t,n){return Ns(i,e,1-Math.exp(-t*n))}function ef(i,e=1){return e-Math.abs(Wa(i,e*2)-e)}function tf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rf(i,e){return i+Math.random()*(e-i)}function of(i){return i*(.5-Math.random())}function af(i){i!==void 0&&(Wl=i);let e=Wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lf(i){return i*ls}function cf(i){return i*js}function ba(i){return(i&i-1)===0&&i!==0}function uf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hf(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),u=a(t/2),l=r((e+n)/2),c=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*c,u*h,u*d,o*l);break;case"YZY":i.set(u*d,o*c,u*h,o*l);break;case"ZXZ":i.set(u*h,u*d,o*c,o*l);break;case"XZX":i.set(o*c,u*g,u*p,o*l);break;case"YXY":i.set(u*p,o*c,u*g,o*l);break;case"ZYZ":i.set(u*g,u*p,o*c,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kr={DEG2RAD:ls,RAD2DEG:js,generateUUID:Pi,clamp:Mt,euclideanModulo:Wa,mapLinear:$d,inverseLerp:Jd,lerp:Ns,damp:Qd,pingpong:ef,smoothstep:tf,smootherstep:nf,randInt:sf,randFloat:rf,randFloatSpread:of,seededRandom:af,degToRad:lf,radToDeg:cf,isPowerOfTwo:ba,ceilPowerOfTwo:uf,floorPowerOfTwo:Jr,setQuaternionFromProperEuler:hf,normalize:Bt,denormalize:Qi};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,s,r,a,o,u,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,u,l)}set(e,t,n,s,r,a,o,u,l){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=u,c[6]=n,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],u=n[6],l=n[1],c=n[4],h=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],v=s[1],_=s[4],M=s[7],P=s[2],A=s[5],R=s[8];return r[0]=a*x+o*v+u*P,r[3]=a*m+o*_+u*A,r[6]=a*f+o*M+u*R,r[1]=l*x+c*v+h*P,r[4]=l*m+c*_+h*A,r[7]=l*f+c*M+h*R,r[2]=d*x+p*v+g*P,r[5]=d*m+p*_+g*A,r[8]=d*f+p*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8];return t*a*c-t*o*l-n*r*c+n*o*u+s*r*l-s*a*u}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8],h=c*a-o*l,d=o*u-c*r,p=l*r-a*u,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*l-c*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(c*t-s*u)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*u-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const u=Math.cos(r),l=Math.sin(r);return this.set(n*u,n*l,-n*(u*a+l*o)+a+e,-s*l,s*u,-s*(-l*a+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new Ze;function Ru(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function df(){const i=Qr("canvas");return i.style.display="block",i}const Xl={};function Os(i){i in Xl||(Xl[i]=!0,console.warn(i))}const Yl=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ql=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tr={[Bn]:{transfer:jr,primaries:Zr,toReference:i=>i,fromReference:i=>i},[It]:{transfer:at,primaries:Zr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[lo]:{transfer:jr,primaries:Kr,toReference:i=>i.applyMatrix3(ql),fromReference:i=>i.applyMatrix3(Yl)},[Va]:{transfer:at,primaries:Kr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ql),fromReference:i=>i.applyMatrix3(Yl).convertLinearToSRGB()}},ff=new Set([Bn,lo]),tt={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ff.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=tr[e].toReference,s=tr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return tr[i].primaries},getTransfer:function(i){return i===tn?jr:tr[i].transfer}};function cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class Cu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ni===void 0&&(Ni=Qr("canvas")),Ni.width=e.width,Ni.height=e.height;const n=Ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pf=0;class Pu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Po(s[a].image)):r.push(Po(s[a]))}else r=Po(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mf=0;class Wt extends Ci{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=un,s=un,r=Qt,a=Ys,o=hn,u=ei,l=Wt.DEFAULT_ANISOTROPY,c=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Pi(),this.name="",this.source=new Pu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=u,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Si?It:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?Si:wu}set encoding(e){Os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Si?It:tn}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=_u;Wt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const u=e.elements,l=u[0],c=u[4],h=u[8],d=u[1],p=u[5],g=u[9],x=u[2],m=u[6],f=u[10];if(Math.abs(c-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,M=(p+1)/2,P=(f+1)/2,A=(c+d)/4,R=(h+x)/4,U=(g+m)/4;return _>M&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=R/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=U/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=U/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(d-c)/v,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gf extends Ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Si?It:tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends gf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lu extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _f extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let u=n[s+0],l=n[s+1],c=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=u,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||u!==d||l!==p||c!==g){let m=1-o;const f=u*d+l*p+c*g+h*x,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const P=Math.sqrt(_),A=Math.atan2(P,f*v);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const M=o*v;if(u=u*m+d*M,l=l*m+p*M,c=c*m+g*M,h=h*m+x*M,m===1-o){const P=1/Math.sqrt(u*u+l*l+c*c+h*h);u*=P,l*=P,c*=P,h*=P}}e[t]=u,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],u=n[s+1],l=n[s+2],c=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+c*h+u*p-l*d,e[t+1]=u*g+c*d+l*h-o*p,e[t+2]=l*g+c*p+o*d-u*h,e[t+3]=c*g-o*h-u*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,u=Math.sin,l=o(n/2),c=o(s/2),h=o(r/2),d=u(n/2),p=u(s/2),g=u(r/2);switch(a){case"XYZ":this._x=d*c*h+l*p*g,this._y=l*p*h-d*c*g,this._z=l*c*g+d*p*h,this._w=l*c*h-d*p*g;break;case"YXZ":this._x=d*c*h+l*p*g,this._y=l*p*h-d*c*g,this._z=l*c*g-d*p*h,this._w=l*c*h+d*p*g;break;case"ZXY":this._x=d*c*h-l*p*g,this._y=l*p*h+d*c*g,this._z=l*c*g+d*p*h,this._w=l*c*h-d*p*g;break;case"ZYX":this._x=d*c*h-l*p*g,this._y=l*p*h+d*c*g,this._z=l*c*g-d*p*h,this._w=l*c*h+d*p*g;break;case"YZX":this._x=d*c*h+l*p*g,this._y=l*p*h+d*c*g,this._z=l*c*g-d*p*h,this._w=l*c*h-d*p*g;break;case"XZY":this._x=d*c*h-l*p*g,this._y=l*p*h-d*c*g,this._z=l*c*g+d*p*h,this._w=l*c*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],u=t[9],l=t[2],c=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-u)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(c-u)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(u+c)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(u+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,u=t._y,l=t._z,c=t._w;return this._x=n*c+a*o+s*l-r*u,this._y=s*c+a*u+r*o-n*l,this._z=r*c+a*l+n*u-s*o,this._w=a*c-n*o-s*u-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const u=1-o*o;if(u<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(u),c=Math.atan2(l,o),h=Math.sin((1-t)*c)/l,d=Math.sin(t*c)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,u=e.w,l=2*(a*s-o*n),c=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+u*l+a*h-o*c,this.y=n+u*c+o*l-r*h,this.z=s+u*h+r*c-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,u=t.z;return this.x=s*u-r*o,this.y=r*a-n*u,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new C,jl=new Ti;class Li{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),ir.subVectors(this.max,Ss),Oi.subVectors(e.a,Ss),Fi.subVectors(e.b,Ss),Bi.subVectors(e.c,Ss),Hn.subVectors(Fi,Oi),kn.subVectors(Bi,Fi),li.subVectors(Oi,Bi);let t=[0,-Hn.z,Hn.y,0,-kn.z,kn.y,0,-li.z,li.y,Hn.z,0,-Hn.x,kn.z,0,-kn.x,li.z,0,-li.x,-Hn.y,Hn.x,0,-kn.y,kn.x,0,-li.y,li.x,0];return!Io(t,Oi,Fi,Bi,ir)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,Oi,Fi,Bi,ir))?!1:(sr.crossVectors(Hn,kn),t=[sr.x,sr.y,sr.z],Io(t,Oi,Fi,Bi,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new C,new C,new C,new C,new C,new C,new C,new C],rn=new C,nr=new Li,Oi=new C,Fi=new C,Bi=new C,Hn=new C,kn=new C,li=new C,Ss=new C,ir=new C,sr=new C,ci=new C;function Io(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ci.fromArray(i,r);const o=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),u=e.dot(ci),l=t.dot(ci),c=n.dot(ci);if(Math.max(-Math.max(u,l,c),Math.min(u,l,c))>o)return!1}return!0}const xf=new Li,Es=new C,Do=new C;class xs{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(Do)),this.expandByPoint(Es.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new C,Uo=new C,rr=new C,Vn=new C,No=new C,or=new C,Oo=new C;class Xa{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Uo.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Uo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(rr),o=Vn.dot(this.direction),u=-Vn.dot(rr),l=Vn.lengthSq(),c=Math.abs(1-a*a);let h,d,p,g;if(c>0)if(h=a*u-o,d=a*o-u,g=r*c,h>=0)if(d>=-g)if(d<=g){const x=1/c;h*=x,d*=x,p=h*(h+a*d+2*o)+d*(a*h+d+2*u)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*u)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*u)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-u),r),p=-h*h+d*(d+2*u)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-u),r),p=d*(d+2*u)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-u),r),p=-h*h+d*(d+2*u)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Uo).addScaledVector(rr,d),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,u=n+a;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,u;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,u=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,u=(e.min.z-d.z)*h),n>u||o>s)||((o>n||n!==n)&&(n=o),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,s,r){No.subVectors(t,e),or.subVectors(n,e),Oo.crossVectors(No,or);let a=this.direction.dot(Oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);const u=o*this.direction.dot(or.crossVectors(Vn,or));if(u<0)return null;const l=o*this.direction.dot(No.cross(Vn));if(l<0||u+l>a)return null;const c=-o*Vn.dot(Oo);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,s,r,a,o,u,l,c,h,d,p,g,x,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,u,l,c,h,d,p,g,x,m)}set(e,t,n,s,r,a,o,u,l,c,h,d,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=u,f[2]=l,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),u=Math.cos(s),l=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*c,p=a*h,g=o*c,x=o*h;t[0]=u*c,t[4]=-u*h,t[8]=l,t[1]=p+g*l,t[5]=d-x*l,t[9]=-o*u,t[2]=x-d*l,t[6]=g+p*l,t[10]=a*u}else if(e.order==="YXZ"){const d=u*c,p=u*h,g=l*c,x=l*h;t[0]=d+x*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=p*o-g,t[6]=x+d*o,t[10]=a*u}else if(e.order==="ZXY"){const d=u*c,p=u*h,g=l*c,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*c,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const d=a*c,p=a*h,g=o*c,x=o*h;t[0]=u*c,t[4]=g*l-p,t[8]=d*l+x,t[1]=u*h,t[5]=x*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const d=a*u,p=a*l,g=o*u,x=o*l;t[0]=u*c,t[4]=x-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-l*c,t[6]=p*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*u,p=a*l,g=o*u,x=o*l;t[0]=u*c,t[4]=-h,t[8]=l*c,t[1]=d*h+x,t[5]=a*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*c,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vf,e,Mf)}lookAt(e,t,n){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Wn.crossVectors(n,Yt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Wn.crossVectors(n,Yt)),Wn.normalize(),ar.crossVectors(Yt,Wn),s[0]=Wn.x,s[4]=ar.x,s[8]=Yt.x,s[1]=Wn.y,s[5]=ar.y,s[9]=Yt.y,s[2]=Wn.z,s[6]=ar.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],u=n[8],l=n[12],c=n[1],h=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],v=n[3],_=n[7],M=n[11],P=n[15],A=s[0],R=s[4],U=s[8],S=s[12],w=s[1],N=s[5],Y=s[9],te=s[13],I=s[2],B=s[6],G=s[10],$=s[14],K=s[3],X=s[7],re=s[11],ee=s[15];return r[0]=a*A+o*w+u*I+l*K,r[4]=a*R+o*N+u*B+l*X,r[8]=a*U+o*Y+u*G+l*re,r[12]=a*S+o*te+u*$+l*ee,r[1]=c*A+h*w+d*I+p*K,r[5]=c*R+h*N+d*B+p*X,r[9]=c*U+h*Y+d*G+p*re,r[13]=c*S+h*te+d*$+p*ee,r[2]=g*A+x*w+m*I+f*K,r[6]=g*R+x*N+m*B+f*X,r[10]=g*U+x*Y+m*G+f*re,r[14]=g*S+x*te+m*$+f*ee,r[3]=v*A+_*w+M*I+P*K,r[7]=v*R+_*N+M*B+P*X,r[11]=v*U+_*Y+M*G+P*re,r[15]=v*S+_*te+M*$+P*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],u=e[9],l=e[13],c=e[2],h=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*u*h-s*l*h-r*o*d+n*l*d+s*o*p-n*u*p)+x*(+t*u*p-t*l*d+r*a*d-s*a*p+s*l*c-r*u*c)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*c-n*l*c)+f*(-s*o*c-t*u*h+t*o*d+s*a*h-n*a*d+n*u*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8],h=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],v=h*m*l-x*d*l+x*u*p-o*m*p-h*u*f+o*d*f,_=g*d*l-c*m*l-g*u*p+a*m*p+c*u*f-a*d*f,M=c*x*l-g*h*l+g*o*p-a*x*p-c*o*f+a*h*f,P=g*h*u-c*x*u-g*o*d+a*x*d+c*o*m-a*h*m,A=t*v+n*_+s*M+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(x*d*r-h*m*r-x*s*p+n*m*p+h*s*f-n*d*f)*R,e[2]=(o*m*r-x*u*r+x*s*l-n*m*l-o*s*f+n*u*f)*R,e[3]=(h*u*r-o*d*r-h*s*l+n*d*l+o*s*p-n*u*p)*R,e[4]=_*R,e[5]=(c*m*r-g*d*r+g*s*p-t*m*p-c*s*f+t*d*f)*R,e[6]=(g*u*r-a*m*r-g*s*l+t*m*l+a*s*f-t*u*f)*R,e[7]=(a*d*r-c*u*r+c*s*l-t*d*l-a*s*p+t*u*p)*R,e[8]=M*R,e[9]=(g*h*r-c*x*r-g*n*p+t*x*p+c*n*f-t*h*f)*R,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*f+t*o*f)*R,e[11]=(c*o*r-a*h*r-c*n*l+t*h*l+a*n*p-t*o*p)*R,e[12]=P*R,e[13]=(c*x*s-g*h*s+g*n*d-t*x*d-c*n*m+t*h*m)*R,e[14]=(g*o*s-a*x*s-g*n*u+t*x*u+a*n*m-t*o*m)*R,e[15]=(a*h*s-c*o*s+c*n*u-t*h*u-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,u=e.z,l=r*a,c=r*o;return this.set(l*a+n,l*o-s*u,l*u+s*o,0,l*o+s*u,c*o+n,c*u-s*a,0,l*u-s*o,c*u+s*a,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,u=t._w,l=r+r,c=a+a,h=o+o,d=r*l,p=r*c,g=r*h,x=a*c,m=a*h,f=o*h,v=u*l,_=u*c,M=u*h,P=n.x,A=n.y,R=n.z;return s[0]=(1-(x+f))*P,s[1]=(p+M)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(d+f))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+_)*R,s[9]=(m-v)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);const l=1/r,c=1/a,h=1/o;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=c,on.elements[5]*=c,on.elements[6]*=c,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Nn){const u=this.elements,l=2*r/(t-e),c=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(o===Nn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===$r)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=c,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=p,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn){const u=this.elements,l=1/(t-e),c=1/(n-s),h=1/(a-r),d=(t+e)*l,p=(n+s)*c;let g,x;if(o===Nn)g=(a+r)*h,x=-2*h;else if(o===$r)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=2*l,u[4]=0,u[8]=0,u[12]=-d,u[1]=0,u[5]=2*c,u[9]=0,u[13]=-p,u[2]=0,u[6]=0,u[10]=x,u[14]=-g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zi=new C,on=new ct,vf=new C(0,0,0),Mf=new C(1,1,1),Wn=new C,ar=new C,Yt=new C,Zl=new ct,Kl=new Ti;class co{constructor(e=0,t=0,n=0,s=co.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],u=s[1],l=s[5],c=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}co.DEFAULT_ORDER="XYZ";class Iu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yf=0;const $l=new C,Gi=new Ti,An=new ct,lr=new C,bs=new C,Sf=new C,Ef=new Ti,Jl=new C(1,0,0),Ql=new C(0,1,0),ec=new C(0,0,1),bf={type:"added"},wf={type:"removed"};class St extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new C,t=new co,n=new Ti,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ze}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Jl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(ec,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(bs,lr,this.up):An.lookAt(lr,bs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(An),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,Sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let l=0,c=u.length;l<c;l++){const h=u[l];r(e.shapes,h)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,l=this.material.length;u<l;u++)o.push(r(e.materials,this.material[u]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];s.animations.push(r(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),l=a(e.textures),c=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const u=[];for(const l in o){const c=o[l];delete c.metadata,u.push(c)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new C(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new C,Rn=new C,Fo=new C,Cn=new C,Hi=new C,ki=new C,tc=new C,Bo=new C,zo=new C,Go=new C;let cr=!1;class en{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),Rn.subVectors(n,t),Fo.subVectors(e,t);const a=an.dot(an),o=an.dot(Rn),u=an.dot(Fo),l=Rn.dot(Rn),c=Rn.dot(Fo),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*u-o*c)*d,g=(a*c-o*u)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,n,s,r,a,o,u){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),this.getInterpolation(e,t,n,s,r,a,o,u)}static getInterpolation(e,t,n,s,r,a,o,u){return this.getBarycoord(e,t,n,s,Cn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Cn.x),u.addScaledVector(a,Cn.y),u.addScaledVector(o,Cn.z),u)}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),Rn.subVectors(e,t),an.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Hi.subVectors(s,n),ki.subVectors(r,n),Bo.subVectors(e,n);const u=Hi.dot(Bo),l=ki.dot(Bo);if(u<=0&&l<=0)return t.copy(n);zo.subVectors(e,s);const c=Hi.dot(zo),h=ki.dot(zo);if(c>=0&&h<=c)return t.copy(s);const d=u*h-c*l;if(d<=0&&u>=0&&c<=0)return a=u/(u-c),t.copy(n).addScaledVector(Hi,a);Go.subVectors(e,r);const p=Hi.dot(Go),g=ki.dot(Go);if(g>=0&&p<=g)return t.copy(r);const x=p*l-u*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ki,o);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return tc.subVectors(r,s),o=(h-c)/(h-c+(p-g)),t.copy(s).addScaledVector(tc,o);const f=1/(m+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(Hi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Wa(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ho(a,r,e+1/3),this.g=Ho(a,r,e),this.b=Ho(a,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return tt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Mt(Nt.r*255,0,255))*65536+Math.round(Mt(Nt.g*255,0,255))*256+Math.round(Mt(Nt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let u,l;const c=(o+a)/2;if(o===a)u=0,l=0;else{const h=a-o;switch(l=c<=.5?h/(a+o):h/(2-a-o),a){case n:u=(s-r)/h+(s<r?6:0);break;case s:u=(r-n)/h+2;break;case r:u=(n-s)/h+4;break}u/=6}return e.h=u,e.s=l,e.l=c,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=It){tt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,s=Nt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(ur);const n=Ns(Xn.h,ur.h,t),s=Ns(Xn.s,ur.s,t),r=Ns(Xn.l,ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ye;Ye.NAMES=Du;let Tf=0;class vs extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=as,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=xa,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const u=r[o];delete u.metadata,a.push(u)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dn extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new C,hr=new he;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}}class Uu extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nu extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Je extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Af=0;const Jt=new ct,ko=new St,Vi=new C,qt=new Li,ws=new Li,At=new C;class Lt extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ru(e)?Nu:Uu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(qt.min,ws.min),qt.expandByPoint(At),At.addVectors(qt.max,ws.max),qt.expandByPoint(At)):(qt.expandByPoint(ws.min),qt.expandByPoint(ws.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],u=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)At.fromBufferAttribute(o,l),u&&(Vi.fromBufferAttribute(e,l),At.add(Vi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));const u=this.getAttribute("tangent").array,l=[],c=[];for(let w=0;w<o;w++)l[w]=new C,c[w]=new C;const h=new C,d=new C,p=new C,g=new he,x=new he,m=new he,f=new C,v=new C;function _(w,N,Y){h.fromArray(s,w*3),d.fromArray(s,N*3),p.fromArray(s,Y*3),g.fromArray(a,w*2),x.fromArray(a,N*2),m.fromArray(a,Y*2),d.sub(h),p.sub(h),x.sub(g),m.sub(g);const te=1/(x.x*m.y-m.x*x.y);isFinite(te)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(te),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(te),l[w].add(f),l[N].add(f),l[Y].add(f),c[w].add(v),c[N].add(v),c[Y].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,N=M.length;w<N;++w){const Y=M[w],te=Y.start,I=Y.count;for(let B=te,G=te+I;B<G;B+=3)_(n[B+0],n[B+1],n[B+2])}const P=new C,A=new C,R=new C,U=new C;function S(w){R.fromArray(r,w*3),U.copy(R);const N=l[w];P.copy(N),P.sub(R.multiplyScalar(R.dot(N))).normalize(),A.crossVectors(U,N);const te=A.dot(c[w])<0?-1:1;u[w*4]=P.x,u[w*4+1]=P.y,u[w*4+2]=P.z,u[w*4+3]=te}for(let w=0,N=M.length;w<N;++w){const Y=M[w],te=Y.start,I=Y.count;for(let B=te,G=te+I;B<G;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,u=new C,l=new C,c=new C,h=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),o.fromBufferAttribute(n,g),u.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(c),u.add(c),l.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,u.x,u.y,u.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,u){const l=o.array,c=o.itemSize,h=o.normalized,d=new l.constructor(u.length*c);let p=0,g=0;for(let x=0,m=u.length;x<m;x++){o.isInterleavedBufferAttribute?p=u[x]*o.data.stride+o.offset:p=u[x]*c;for(let f=0;f<c;f++)d[g++]=l[p++]}return new nn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,s=this.attributes;for(const o in s){const u=s[o],l=e(u,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const u=[],l=r[o];for(let c=0,h=l.length;c<h;c++){const d=l[c],p=e(d,n);u.push(p)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const s={};let r=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],c=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];c.push(p.toJSON(e.data))}c.length>0&&(s[u]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(t))}const r=e.morphAttributes;for(const l in r){const c=[],h=r[l];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new ct,ui=new Xa,dr=new xs,ic=new C,Wi=new C,Xi=new C,Yi=new C,Vo=new C,fr=new C,pr=new he,mr=new he,gr=new he,sc=new C,rc=new C,oc=new C,_r=new C,xr=new C;class Ce extends St{constructor(e=new Lt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let u=0,l=r.length;u<l;u++){const c=o[u],h=r[u];c!==0&&(Vo.fromBufferAttribute(h,e),a?fr.addScaledVector(Vo,c):fr.addScaledVector(Vo.sub(t),c))}t.add(fr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(dr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(dr,ic)===null||ui.origin.distanceToSquared(ic)>(e.far-e.near)**2))&&(nc.copy(r).invert(),ui.copy(e.ray).applyMatrix4(nc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,u=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,P=_;M<P;M+=3){const A=o.getX(M),R=o.getX(M+1),U=o.getX(M+2);s=vr(this,f,e,n,l,c,h,A,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);s=vr(this,a,e,n,l,c,h,v,_,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(u.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,P=_;M<P;M+=3){const A=M,R=M+1,U=M+2;s=vr(this,f,e,n,l,c,h,A,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(u.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=m,_=m+1,M=m+2;s=vr(this,a,e,n,l,c,h,v,_,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Rf(i,e,t,n,s,r,a,o){let u;if(e.side===Vt?u=n.intersectTriangle(a,r,s,!0,o):u=n.intersectTriangle(s,r,a,e.side===ni,o),u===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(xr);return l<t.near||l>t.far?null:{distance:l,point:xr.clone(),object:i}}function vr(i,e,t,n,s,r,a,o,u,l){i.getVertexPosition(o,Wi),i.getVertexPosition(u,Xi),i.getVertexPosition(l,Yi);const c=Rf(i,e,t,n,Wi,Xi,Yi,_r);if(c){s&&(pr.fromBufferAttribute(s,o),mr.fromBufferAttribute(s,u),gr.fromBufferAttribute(s,l),c.uv=en.getInterpolation(_r,Wi,Xi,Yi,pr,mr,gr,new he)),r&&(pr.fromBufferAttribute(r,o),mr.fromBufferAttribute(r,u),gr.fromBufferAttribute(r,l),c.uv1=en.getInterpolation(_r,Wi,Xi,Yi,pr,mr,gr,new he),c.uv2=c.uv1),a&&(sc.fromBufferAttribute(a,o),rc.fromBufferAttribute(a,u),oc.fromBufferAttribute(a,l),c.normal=en.getInterpolation(_r,Wi,Xi,Yi,sc,rc,oc,new C),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:u,c:l,normal:new C,materialIndex:0};en.getNormal(Wi,Xi,Yi,h.normal),c.face=h}return c}class pn extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const u=[],l=[],c=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2));function g(x,m,f,v,_,M,P,A,R,U,S){const w=M/R,N=P/U,Y=M/2,te=P/2,I=A/2,B=R+1,G=U+1;let $=0,K=0;const X=new C;for(let re=0;re<G;re++){const ee=re*N-te;for(let ge=0;ge<B;ge++){const V=ge*w-Y;X[x]=V*v,X[m]=ee*_,X[f]=I,l.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[f]=A>0?1:-1,c.push(X.x,X.y,X.z),h.push(ge/R),h.push(1-re/U),$+=1}}for(let re=0;re<U;re++)for(let ee=0;ee<R;ee++){const ge=d+ee+B*re,V=d+ee+B*(re+1),oe=d+(ee+1)+B*(re+1),ve=d+(ee+1)+B*re;u.push(ge,V,ve),u.push(V,oe,ve),K+=6}o.addGroup(p,K,S),p+=K,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=ms(i[t]);for(const s in n)e[s]=n[s]}return e}function Cf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ou(i){return i.getRenderTarget()===null?i.outputColorSpace:tt.workingColorSpace}const Pf={clone:ms,merge:zt};var Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fu extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends Fu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/u,t-=a.offsetY*n/l,s*=a.width/u,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,ji=1;class Df extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(qi,ji,e,t);s.layers=this.layers,this.add(s);const r=new Zt(qi,ji,e,t);r.layers=this.layers,this.add(r);const a=new Zt(qi,ji,e,t);a.layers=this.layers,this.add(a);const o=new Zt(qi,ji,e,t);o.layers=this.layers,this.add(o);const u=new Zt(qi,ji,e,t);u.layers=this.layers,this.add(u);const l=new Zt(qi,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,u]=t;for(const l of t)this.remove(l);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,u,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,u),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bu extends Wt{constructor(e,t,n,s,r,a,o,u,l,c){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,n,s,r,a,o,u,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uf extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Si?It:tn),this.texture=new Bu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Jn});r.uniforms.tEquirect.value=t;const a=new Ce(s,r),o=t.minFilter;return t.minFilter===Ys&&(t.minFilter=Qt),new Df(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Wo=new C,Nf=new C,Of=new Ze;class cn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Wo.subVectors(n,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Of.getNormalMatrix(e),s=this.coplanarPoint(Wo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new xs,Mr=new C;class Ya{constructor(e=new cn,t=new cn,n=new cn,s=new cn,r=new cn,a=new cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],u=s[3],l=s[4],c=s[5],h=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],v=s[13],_=s[14],M=s[15];if(n[0].setComponents(u-r,d-l,m-p,M-f).normalize(),n[1].setComponents(u+r,d+l,m+p,M+f).normalize(),n[2].setComponents(u+a,d+c,m+g,M+v).normalize(),n[3].setComponents(u-a,d-c,m-g,M-v).normalize(),n[4].setComponents(u-o,d-h,m-x,M-_).normalize(),t===Nn)n[5].setComponents(u+o,d+h,m+x,M+_).normalize();else if(t===$r)n[5].setComponents(o,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Mr.x=s.normal.x>0?e.max.x:e.min.x,Mr.y=s.normal.y>0?e.max.y:e.min.y,Mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ff(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,c){const h=l.array,d=l.usage,p=h.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,h,d),l.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,c,h){const d=c.array,p=c._updateRange,g=c.updateRanges;if(i.bindBuffer(h,l),p.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){const f=g[x];t?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c&&(i.deleteBuffer(c.buffer),n.delete(l))}function u(l,c){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,c),h.version=l.version}}return{get:a,remove:o,update:u}}class uo extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),u=Math.floor(s),l=o+1,c=u+1,h=e/o,d=t/u,p=[],g=[],x=[],m=[];for(let f=0;f<c;f++){const v=f*d-a;for(let _=0;_<l;_++){const M=_*h-r;g.push(M,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-f/u)}}for(let f=0;f<u;f++)for(let v=0;v<o;v++){const _=v+l*f,M=v+l*(f+1),P=v+1+l*(f+1),A=v+1+l*f;p.push(_,M,A),p.push(M,P,A)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
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
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ap=`#define PI 3.141592653589793
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
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`
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
}`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Tp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Op=`PhysicalMaterial material;
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
#endif`,Fp=`struct PhysicalMaterial {
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
}`,Bp=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
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
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sm=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Wm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
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
}`,Km=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Qm=`#define LAMBERT
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
}`,e0=`#define LAMBERT
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
}`,t0=`#define MATCAP
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
}`,n0=`#define MATCAP
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
}`,i0=`#define NORMAL
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
}`,s0=`#define NORMAL
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
}`,r0=`#define PHONG
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
}`,o0=`#define PHONG
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
}`,a0=`#define STANDARD
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
}`,l0=`#define STANDARD
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
}`,c0=`#define TOON
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
}`,u0=`#define TOON
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
}`,h0=`uniform float size;
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,p0=`uniform vec3 color;
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
}`,m0=`uniform float rotation;
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
}`,g0=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Bf,alphahash_pars_fragment:zf,alphamap_fragment:Gf,alphamap_pars_fragment:Hf,alphatest_fragment:kf,alphatest_pars_fragment:Vf,aomap_fragment:Wf,aomap_pars_fragment:Xf,batching_pars_vertex:Yf,batching_vertex:qf,begin_vertex:jf,beginnormal_vertex:Zf,bsdfs:Kf,iridescence_fragment:$f,bumpmap_pars_fragment:Jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:tp,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:sp,color_pars_vertex:rp,color_vertex:op,common:ap,cube_uv_reflection_fragment:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:up,displacementmap_vertex:hp,emissivemap_fragment:dp,emissivemap_pars_fragment:fp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:_p,envmap_pars_fragment:xp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Lp,envmap_vertex:Mp,fog_vertex:yp,fog_pars_vertex:Sp,fog_fragment:Ep,fog_pars_fragment:bp,gradientmap_pars_fragment:wp,lightmap_fragment:Tp,lightmap_pars_fragment:Ap,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Pp,lights_toon_fragment:Ip,lights_toon_pars_fragment:Dp,lights_phong_fragment:Up,lights_phong_pars_fragment:Np,lights_physical_fragment:Op,lights_physical_pars_fragment:Fp,lights_fragment_begin:Bp,lights_fragment_maps:zp,lights_fragment_end:Gp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:Yp,map_particle_fragment:qp,map_particle_pars_fragment:jp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Kp,morphcolor_vertex:$p,morphnormal_vertex:Jp,morphtarget_pars_vertex:Qp,morphtarget_vertex:em,normal_fragment_begin:tm,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:um,opaque_fragment:hm,packing:dm,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:Mm,shadowmap_vertex:ym,shadowmask_pars_fragment:Sm,skinbase_vertex:Em,skinning_pars_vertex:bm,skinning_vertex:wm,skinnormal_vertex:Tm,specularmap_fragment:Am,specularmap_pars_fragment:Rm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Pm,transmission_fragment:Lm,transmission_pars_fragment:Im,uv_pars_fragment:Dm,uv_pars_vertex:Um,uv_vertex:Nm,worldpos_vertex:Om,background_vert:Fm,background_frag:Bm,backgroundCube_vert:zm,backgroundCube_frag:Gm,cube_vert:Hm,cube_frag:km,depth_vert:Vm,depth_frag:Wm,distanceRGBA_vert:Xm,distanceRGBA_frag:Ym,equirect_vert:qm,equirect_frag:jm,linedashed_vert:Zm,linedashed_frag:Km,meshbasic_vert:$m,meshbasic_frag:Jm,meshlambert_vert:Qm,meshlambert_frag:e0,meshmatcap_vert:t0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:s0,meshphong_vert:r0,meshphong_frag:o0,meshphysical_vert:a0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:u0,points_vert:h0,points_frag:d0,shadow_vert:f0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},xe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},_n={basic:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:zt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:zt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:zt([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:zt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:zt([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:zt([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:zt([xe.common,xe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:zt([xe.lights,xe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};_n.physical={uniforms:zt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const yr={r:0,b:0,g:0};function _0(i,e,t,n,s,r,a){const o=new Ye(0);let u=r===!0?0:1,l,c,h=null,d=0,p=null;function g(m,f){let v=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?x(o,u):_&&_.isColor&&(x(_,1),v=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ao)?(c===void 0&&(c=new Ce(new pn(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:ms(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=tt.getTransfer(_.colorSpace)!==at,(h!==_||d!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ce(new uo(2,2),new Ai({name:"BackgroundMaterial",uniforms:ms(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=tt.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,f){m.getRGB(yr,Ou(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),u=f,x(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(m){u=m,x(o,u)},render:g}}function x0(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},u=m(null);let l=u,c=!1;function h(I,B,G,$,K){let X=!1;if(a){const re=x($,G,B);l!==re&&(l=re,p(l.object)),X=f(I,$,G,K),X&&v(I,$,G,K)}else{const re=B.wireframe===!0;(l.geometry!==$.id||l.program!==G.id||l.wireframe!==re)&&(l.geometry=$.id,l.program=G.id,l.wireframe=re,X=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(X||c)&&(c=!1,U(I,B,G,$),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,B,G){const $=G.wireframe===!0;let K=o[I.id];K===void 0&&(K={},o[I.id]=K);let X=K[B.id];X===void 0&&(X={},K[B.id]=X);let re=X[$];return re===void 0&&(re=m(d()),X[$]=re),re}function m(I){const B=[],G=[],$=[];for(let K=0;K<s;K++)B[K]=0,G[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:$,object:I,attributes:{},index:null}}function f(I,B,G,$){const K=l.attributes,X=B.attributes;let re=0;const ee=G.getAttributes();for(const ge in ee)if(ee[ge].location>=0){const oe=K[ge];let ve=X[ge];if(ve===void 0&&(ge==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),ge==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;re++}return l.attributesNum!==re||l.index!==$}function v(I,B,G,$){const K={},X=B.attributes;let re=0;const ee=G.getAttributes();for(const ge in ee)if(ee[ge].location>=0){let oe=X[ge];oe===void 0&&(ge==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),ge==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),K[ge]=ve,re++}l.attributes=K,l.attributesNum=re,l.index=$}function _(){const I=l.newAttributes;for(let B=0,G=I.length;B<G;B++)I[B]=0}function M(I){P(I,0)}function P(I,B){const G=l.newAttributes,$=l.enabledAttributes,K=l.attributeDivisors;G[I]=1,$[I]===0&&(i.enableVertexAttribArray(I),$[I]=1),K[I]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),K[I]=B)}function A(){const I=l.newAttributes,B=l.enabledAttributes;for(let G=0,$=B.length;G<$;G++)B[G]!==I[G]&&(i.disableVertexAttribArray(G),B[G]=0)}function R(I,B,G,$,K,X,re){re===!0?i.vertexAttribIPointer(I,B,G,K,X):i.vertexAttribPointer(I,B,G,$,K,X)}function U(I,B,G,$){if(n.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const K=$.attributes,X=G.getAttributes(),re=B.defaultAttributeValues;for(const ee in X){const ge=X[ee];if(ge.location>=0){let V=K[ee];if(V===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){const oe=V.normalized,ve=V.itemSize,Ee=t.get(V);if(Ee===void 0)continue;const Me=Ee.buffer,Re=Ee.type,Ne=Ee.bytesPerElement,be=n.isWebGL2===!0&&(Re===i.INT||Re===i.UNSIGNED_INT||V.gpuType===xu);if(V.isInterleavedBufferAttribute){const Ue=V.data,L=Ue.stride,ue=V.offset;if(Ue.isInstancedInterleavedBuffer){for(let j=0;j<ge.locationSize;j++)P(ge.location+j,Ue.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let j=0;j<ge.locationSize;j++)M(ge.location+j);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let j=0;j<ge.locationSize;j++)R(ge.location+j,ve/ge.locationSize,Re,oe,L*Ne,(ue+ve/ge.locationSize*j)*Ne,be)}else{if(V.isInstancedBufferAttribute){for(let Ue=0;Ue<ge.locationSize;Ue++)P(ge.location+Ue,V.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ue=0;Ue<ge.locationSize;Ue++)M(ge.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ue=0;Ue<ge.locationSize;Ue++)R(ge.location+Ue,ve/ge.locationSize,Re,oe,ve*Ne,ve/ge.locationSize*Ue*Ne,be)}}else if(re!==void 0){const oe=re[ee];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(ge.location,oe);break;case 3:i.vertexAttrib3fv(ge.location,oe);break;case 4:i.vertexAttrib4fv(ge.location,oe);break;default:i.vertexAttrib1fv(ge.location,oe)}}}}A()}function S(){Y();for(const I in o){const B=o[I];for(const G in B){const $=B[G];for(const K in $)g($[K].object),delete $[K];delete B[G]}delete o[I]}}function w(I){if(o[I.id]===void 0)return;const B=o[I.id];for(const G in B){const $=B[G];for(const K in $)g($[K].object),delete $[K];delete B[G]}delete o[I.id]}function N(I){for(const B in o){const G=o[B];if(G[I.id]===void 0)continue;const $=G[I.id];for(const K in $)g($[K].object),delete $[K];delete G[I.id]}}function Y(){te(),c=!0,l!==u&&(l=u,p(l.object))}function te(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:te,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:M,disableUnusedAttributes:A}}function v0(i,e,t,n){const s=n.isWebGL2;let r;function a(c){r=c}function o(c,h){i.drawArrays(r,c,h),t.update(h,r,1)}function u(c,h,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,c,h,d),t.update(h,r,d)}function l(c,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(c[g],h[g]);else{p.multiDrawArraysWEBGL(r,c,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=l}function M0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const u=r(o);u!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);const l=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=a||e.has("OES_texture_float"),P=_&&M,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:A}}function y0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new cn,o=new Ze,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?c(null):l();else{const v=r?0:n,_=v*4;let M=f.clippingState||null;u.value=M,M=c(g,d,_,p);for(let P=0;P!==_;++P)M[P]=t[P];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,d,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=u.value,g!==!0||m===null){const f=p+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,M=p;_!==x;++_,M+=4)a.copy(h[_]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function S0(i){let e=new WeakMap;function t(a,o){return o===va?a.mapping=ds:o===Ma&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===va||o===Ma)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const l=new Uf(u.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const u=e.get(o);u!==void 0&&(e.delete(o),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Gu extends Fu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,u=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=c*this.view.offsetY,u=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,ac=[.125,.215,.35,.446,.526,.582],xi=20,Xo=new Gu,lc=new Ye;let Yo=null,qo=0,jo=0;const pi=(1+Math.sqrt(5))/2,Zi=1/pi,cc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,pi,Zi),new C(0,pi,-Zi),new C(Zi,0,pi),new C(-Zi,0,pi),new C(pi,Zi,0),new C(-pi,Zi,0)];class wa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Yo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,qo,jo),e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:qs,format:hn,colorSpace:Bn,depthBuffer:!1},s=uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(r)),this._blurMaterial=b0(r,e,t)}return s}_compileMaterial(e){const t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,n,s){const o=new Zt(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(lc),c.toneMapping=Qn,c.autoClear=!1;const p=new dn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new Ce(new pn,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(lc),x=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,u[f],0),o.lookAt(l[f],0,0)):v===1?(o.up.set(0,0,u[f]),o.lookAt(0,l[f],0)):(o.up.set(0,u[f],0),o.lookAt(0,0,l[f]));const _=this._cubeSize;Sr(s,v*_,f>2?_:0,_,_),c.setRenderTarget(s),x&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ds||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const u=this._cubeSize;Sr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,Xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cc[(s-1)%cc.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const u=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Ce(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*xi-1),x=r/g,m=isFinite(r)?1+Math.floor(c*x):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const f=[];let v=0;for(let R=0;R<xi;++R){const U=R/x,S=Math.exp(-U*U/2);f.push(S),R===0?v+=S:R<m&&(v+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const M=this._sizeLods[s],P=3*M*(s>_-is?s-_+is:0),A=4*(this._cubeSize-M);Sr(t,P,A,3*M,2*M),u.setRenderTarget(t),u.render(h,Xo)}}function E0(i){const e=[],t=[],n=[];let s=i;const r=i-is+1+ac.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let u=1/o;a>i-is?u=ac[a-i+is-1]:a===0&&(u=0),n.push(u);const l=1/(o-2),c=-l,h=1+l,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,U=A>2?0:-1,S=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];v.set(S,x*g*A),_.set(d,m*g*A);const w=[A,A,A,A,A,A];M.set(w,f*g*A)}const P=new Lt;P.setAttribute("position",new nn(v,x)),P.setAttribute("uv",new nn(_,m)),P.setAttribute("faceIndex",new nn(M,f)),e.push(P),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uc(i,e,t){const n=new wi(i,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function b0(i,e,t){const n=new Float32Array(xi),s=new C(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function hc(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function dc(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function qa(){return`

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
	`}function w0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const u=o.mapping,l=u===va||u===Ma,c=u===ds||u===fs;if(l||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new wa(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||c&&h&&s(h)){t===null&&(t=new wa(i));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let u=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&u++;return u===l}function r(o){const u=o.target;u.removeEventListener("dispose",r);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function T0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function A0(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function u(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,M=v.length;_<M;_+=3){const P=v[_+0],A=v[_+1],R=v[_+2];d.push(P,A,A,R,R,P)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const P=_+0,A=_+1,R=_+2;d.push(P,A,A,R,R,P)}}else return;const m=new(Ru(d)?Nu:Uu)(d,1);m.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function c(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:u,getWireframeAttribute:c}}function R0(i,e,t,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,u;function l(p){o=p.type,u=p.bytesPerElement}function c(p,g){i.drawElements(r,g,o,p*u),t.update(g,r,1)}function h(p,g,x){if(x===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*u,x),t.update(g,r,x)}function d(p,g,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/u,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let f=0;for(let v=0;v<x;v++)f+=g[v];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function C0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function P0(i,e){return i[0]-e[0]}function L0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function I0(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new ut,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function u(l,c,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let x=r.get(c);if(x===void 0||x.count!==g){let I=function(){Y.dispose(),r.delete(c),c.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();const v=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let U=0;v===!0&&(U=1),_===!0&&(U=2),M===!0&&(U=3);let S=c.attributes.position.count*U,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const N=new Float32Array(S*w*4*g),Y=new Lu(N,S,w,g);Y.type=Kn,Y.needsUpdate=!0;const te=U*4;for(let B=0;B<g;B++){const G=P[B],$=A[B],K=R[B],X=S*w*4*B;for(let re=0;re<G.count;re++){const ee=re*te;v===!0&&(a.fromBufferAttribute(G,re),N[X+ee+0]=a.x,N[X+ee+1]=a.y,N[X+ee+2]=a.z,N[X+ee+3]=0),_===!0&&(a.fromBufferAttribute($,re),N[X+ee+4]=a.x,N[X+ee+5]=a.y,N[X+ee+6]=a.z,N[X+ee+7]=0),M===!0&&(a.fromBufferAttribute(K,re),N[X+ee+8]=a.x,N[X+ee+9]=a.y,N[X+ee+10]=a.z,N[X+ee+11]=K.itemSize===4?a.w:1)}}x={count:g,texture:Y,size:new he(S,w)},r.set(c,x),c.addEventListener("dispose",I)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const f=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",f),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let g=n[c.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[c.id]=g}for(let _=0;_<p;_++){const M=g[_];M[0]=_,M[1]=d[_]}g.sort(L0);for(let _=0;_<8;_++)_<p&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(P0);const x=c.morphAttributes.position,m=c.morphAttributes.normal;let f=0;for(let _=0;_<8;_++){const M=o[_],P=M[0],A=M[1];P!==Number.MAX_SAFE_INTEGER&&A?(x&&c.getAttribute("morphTarget"+_)!==x[P]&&c.setAttribute("morphTarget"+_,x[P]),m&&c.getAttribute("morphNormal"+_)!==m[P]&&c.setAttribute("morphNormal"+_,m[P]),s[_]=A,f+=A):(x&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),m&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),s[_]=0)}const v=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:u}}function D0(i,e,t,n){let s=new WeakMap;function r(u){const l=n.render.frame,c=u.geometry,h=e.get(u,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),s.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){const d=u.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(u){const l=u.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Hu extends Wt{constructor(e,t,n,s,r,a,o,u,l,c){if(c=c!==void 0?c:yi,c!==yi&&c!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===yi&&(n=Zn),n===void 0&&c===ps&&(n=Mi),super(null,s,r,a,o,u,c,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=u!==void 0?u:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ku=new Wt,Vu=new Hu(1,1);Vu.compareFunction=Au;const Wu=new Lu,Xu=new _f,Yu=new Bu,fc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),_c=new Float32Array(4);function Ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=fc[s];if(r===void 0&&(r=new Float32Array(s),fc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ho(i,e){let t=pc[e];t===void 0&&(t=new Int32Array(e),pc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function U0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function B0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;_c.set(n),i.uniformMatrix2fv(this.addr,!1,_c),bt(t,n)}}function z0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;gc.set(n),i.uniformMatrix3fv(this.addr,!1,gc),bt(t,n)}}function G0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;mc.set(n),i.uniformMatrix4fv(this.addr,!1,mc),bt(t,n)}}function H0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function X0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function Z0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Vu:ku;t.setTexture2D(e||r,s)}function K0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xu,s)}function $0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Yu,s)}function J0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wu,s)}function Q0(i){switch(i){case 5126:return U0;case 35664:return N0;case 35665:return O0;case 35666:return F0;case 35674:return B0;case 35675:return z0;case 35676:return G0;case 5124:case 35670:return H0;case 35667:case 35671:return k0;case 35668:case 35672:return V0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return Y0;case 36295:return q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return J0}}function eg(i,e){i.uniform1fv(this.addr,e)}function tg(i,e){const t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function ng(i,e){const t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function ig(i,e){const t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function sg(i,e){const t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rg(i,e){const t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function og(i,e){const t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ag(i,e){i.uniform1iv(this.addr,e)}function lg(i,e){i.uniform2iv(this.addr,e)}function cg(i,e){i.uniform3iv(this.addr,e)}function ug(i,e){i.uniform4iv(this.addr,e)}function hg(i,e){i.uniform1uiv(this.addr,e)}function dg(i,e){i.uniform2uiv(this.addr,e)}function fg(i,e){i.uniform3uiv(this.addr,e)}function pg(i,e){i.uniform4uiv(this.addr,e)}function mg(i,e,t){const n=this.cache,s=e.length,r=ho(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ku,r[a])}function gg(i,e,t){const n=this.cache,s=e.length,r=ho(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xu,r[a])}function _g(i,e,t){const n=this.cache,s=e.length,r=ho(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Yu,r[a])}function xg(i,e,t){const n=this.cache,s=e.length,r=ho(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wu,r[a])}function vg(i){switch(i){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return ug;case 5125:return hg;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}class Mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Q0(t.type)}}class yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vg(t.type)}}class Sg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function xc(i,e){i.seq.push(e),i.map[e.id]=e}function Eg(i,e,t){const n=i.name,s=n.length;for(Zo.lastIndex=0;;){const r=Zo.exec(n),a=Zo.lastIndex;let o=r[1];const u=r[2]==="]",l=r[3];if(u&&(o=o|0),l===void 0||l==="["&&a+2===s){xc(t,l===void 0?new Mg(o,i,e):new yg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Sg(o),xc(t,h)),t=h}}}class Vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Eg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],u=n[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function vc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bg=37297;let wg=0;function Tg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ag(i){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(i);let n;switch(e===t?n="":e===Kr&&t===Zr?n="LinearDisplayP3ToLinearSRGB":e===Zr&&t===Kr&&(n="LinearSRGBToLinearDisplayP3"),i){case Bn:case lo:return[n,"LinearTransferOETF"];case It:case Va:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Mc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Tg(i.getShaderSource(e),a)}else return s}function Rg(i,e){const t=Ag(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cg(i,e){let t;switch(e){case Ad:t="Linear";break;case Rd:t="Reinhard";break;case Cd:t="OptimizedCineon";break;case gu:t="ACESFilmic";break;case Ld:t="AgX";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function Lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ss).join(`
`)}function Ig(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ss(i){return i!==""}function yc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(Ug,Og)}const Ng=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Og(i,e){let t=Xe[e];if(t===void 0){const n=Ng.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(i){return i.replace(Fg,Bg)}function Bg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:e="ENVMAP_TYPE_CUBE";break;case ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function kg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mu:e="ENVMAP_BLENDING_MULTIPLY";break;case wd:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function Vg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=zg(t),l=Gg(t),c=Hg(t),h=kg(t),d=Vg(t),p=t.isWebGL2?"":Pg(t),g=Lg(t),x=Ig(r),m=s.createProgram();let f,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ss).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ss).join(`
`),v.length>0&&(v+=`
`)):(f=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),v=[p,bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Rg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),a=Ta(a),a=yc(a,t),a=Sc(a,t),o=Ta(o),o=yc(o,t),o=Sc(o,t),a=Ec(a),o=Ec(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=_+f+a,P=_+v+o,A=vc(s,s.VERTEX_SHADER,M),R=vc(s,s.FRAGMENT_SHADER,P);s.attachShader(m,A),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(Y){if(i.debug.checkShaderErrors){const te=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(A).trim(),B=s.getShaderInfoLog(R).trim();let G=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,R);else{const K=Mc(s,A,"vertex"),X=Mc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+K+`
`+X)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(I===""||B==="")&&($=!1);$&&(Y.diagnostics={runnable:G,programLog:te,vertexShader:{log:I,prefix:f},fragmentShader:{log:B,prefix:v}})}s.deleteShader(A),s.deleteShader(R),S=new Vr(s,m),w=Dg(s,m)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,bg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}let Xg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qg(e),t.set(e,n)),n}}class qg{constructor(e){this.id=Xg++,this.code=e,this.usedTimes=0}}function jg(i,e,t,n,s,r,a){const o=new Iu,u=new Yg,l=[],c=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,w,N,Y,te){const I=Y.fog,B=te.geometry,G=S.isMeshStandardMaterial?Y.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),K=$&&$.mapping===ao?$.image.height:null,X=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=re!==void 0?re.length:0;let ge=0;B.morphAttributes.position!==void 0&&(ge=1),B.morphAttributes.normal!==void 0&&(ge=2),B.morphAttributes.color!==void 0&&(ge=3);let V,oe,ve,Ee;if(X){const Ot=_n[X];V=Ot.vertexShader,oe=Ot.fragmentShader}else V=S.vertexShader,oe=S.fragmentShader,u.update(S),ve=u.getVertexShaderID(S),Ee=u.getFragmentShaderID(S);const Me=i.getRenderTarget(),Re=te.isInstancedMesh===!0,Ne=te.isBatchedMesh===!0,be=!!S.map,Ue=!!S.matcap,L=!!$,ue=!!S.aoMap,j=!!S.lightMap,le=!!S.bumpMap,Z=!!S.normalMap,Ae=!!S.displacementMap,_e=!!S.emissiveMap,b=!!S.metalnessMap,y=!!S.roughnessMap,F=S.anisotropy>0,ae=S.clearcoat>0,ne=S.iridescence>0,ie=S.sheen>0,we=S.transmission>0,pe=F&&!!S.anisotropyMap,ye=ae&&!!S.clearcoatMap,Pe=ae&&!!S.clearcoatNormalMap,Be=ae&&!!S.clearcoatRoughnessMap,se=ne&&!!S.iridescenceMap,q=ne&&!!S.iridescenceThicknessMap,E=ie&&!!S.sheenColorMap,O=ie&&!!S.sheenRoughnessMap,J=!!S.specularMap,Q=!!S.specularColorMap,Se=!!S.specularIntensityMap,Oe=we&&!!S.transmissionMap,He=we&&!!S.thicknessMap,Le=!!S.gradientMap,ce=!!S.alphaMap,D=S.alphaTest>0,fe=!!S.alphaHash,de=!!S.extensions,Fe=!!B.attributes.uv1,Ie=!!B.attributes.uv2,$e=!!B.attributes.uv3;let Qe=Qn;return S.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Qe=i.toneMapping),{isWebGL2:c,shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:oe,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ne,instancing:Re,instancingColor:Re&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Bn,map:be,matcap:Ue,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:K,aoMap:ue,lightMap:j,bumpMap:le,normalMap:Z,displacementMap:d&&Ae,emissiveMap:_e,normalMapObjectSpace:Z&&S.normalMapType===Vd,normalMapTangentSpace:Z&&S.normalMapType===Tu,metalnessMap:b,roughnessMap:y,anisotropy:F,anisotropyMap:pe,clearcoat:ae,clearcoatMap:ye,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Be,iridescence:ne,iridescenceMap:se,iridescenceThicknessMap:q,sheen:ie,sheenColorMap:E,sheenRoughnessMap:O,specularMap:J,specularColorMap:Q,specularIntensityMap:Se,transmission:we,transmissionMap:Oe,thicknessMap:He,gradientMap:Le,opaque:S.transparent===!1&&S.blending===as,alphaMap:ce,alphaTest:D,alphaHash:fe,combine:S.combine,mapUv:be&&x(S.map.channel),aoMapUv:ue&&x(S.aoMap.channel),lightMapUv:j&&x(S.lightMap.channel),bumpMapUv:le&&x(S.bumpMap.channel),normalMapUv:Z&&x(S.normalMap.channel),displacementMapUv:Ae&&x(S.displacementMap.channel),emissiveMapUv:_e&&x(S.emissiveMap.channel),metalnessMapUv:b&&x(S.metalnessMap.channel),roughnessMapUv:y&&x(S.roughnessMap.channel),anisotropyMapUv:pe&&x(S.anisotropyMap.channel),clearcoatMapUv:ye&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:q&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:E&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:O&&x(S.sheenRoughnessMap.channel),specularMapUv:J&&x(S.specularMap.channel),specularColorMapUv:Q&&x(S.specularColorMap.channel),specularIntensityMapUv:Se&&x(S.specularIntensityMap.channel),transmissionMapUv:Oe&&x(S.transmissionMap.channel),thicknessMapUv:He&&x(S.thicknessMap.channel),alphaMapUv:ce&&x(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Z||F),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Ie,vertexUv3s:$e,pointsUvs:te.isPoints===!0&&!!B.attributes.uv&&(be||ce),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ge,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Kt,flipSided:S.side===Vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:de&&S.extensions.derivatives===!0,extensionFragDepth:de&&S.extensions.fragDepth===!0,extensionDrawBuffers:de&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)w.push(N),w.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(v(w,S),_(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function M(S){const w=g[S.type];let N;if(w){const Y=_n[w];N=Pf.clone(Y.uniforms)}else N=S.uniforms;return N}function P(S,w){let N;for(let Y=0,te=l.length;Y<te;Y++){const I=l[Y];if(I.cacheKey===w){N=I,++N.usedTimes;break}}return N===void 0&&(N=new Wg(i,w,S,r),l.push(N)),N}function A(S){if(--S.usedTimes===0){const w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),S.destroy()}}function R(S){u.remove(S)}function U(){u.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:U}}function Zg(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,g,x,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function o(h,d,p,g,x,m){const f=a(h,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function u(h,d,p,g,x,m){const f=a(h,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Kg),n.length>1&&n.sort(d||wc),s.length>1&&s.sort(d||wc)}function c(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:u,finish:c,sort:l}}function $g(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Tc,i.set(n,[a])):s>=r.length?(a=new Tc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ye};break;case"SpotLight":t={position:new C,direction:new C,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let e_=0;function t_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function n_(i,e){const t=new Jg,n=Qg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new C);const r=new C,a=new ct,o=new ct;function u(c,h){let d=0,p=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let x=0,m=0,f=0,v=0,_=0,M=0,P=0,A=0,R=0,U=0,S=0;c.sort(t_);const w=h===!0?Math.PI:1;for(let Y=0,te=c.length;Y<te;Y++){const I=c[Y],B=I.color,G=I.intensity,$=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=B.r*G*w,p+=B.g*G*w,g+=B.b*G*w;else if(I.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(I.sh.coefficients[X],G);S++}else if(I.isDirectionalLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const re=I.shadow,ee=n.get(I);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,s.directionalShadow[x]=ee,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=I.shadow.matrix,M++}s.directional[x]=X,x++}else if(I.isSpotLight){const X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(B).multiplyScalar(G*w),X.distance=$,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,s.spot[f]=X;const re=I.shadow;if(I.map&&(s.spotLightMap[R]=I.map,R++,re.updateMatrices(I),I.castShadow&&U++),s.spotLightMatrix[f]=re.matrix,I.castShadow){const ee=n.get(I);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,s.spotShadow[f]=ee,s.spotShadowMap[f]=K,A++}f++}else if(I.isRectAreaLight){const X=t.get(I);X.color.copy(B).multiplyScalar(G),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),s.rectArea[v]=X,v++}else if(I.isPointLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*w),X.distance=I.distance,X.decay=I.decay,I.castShadow){const re=I.shadow,ee=n.get(I);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,ee.shadowCameraNear=re.camera.near,ee.shadowCameraFar=re.camera.far,s.pointShadow[m]=ee,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=I.shadow.matrix,P++}s.point[m]=X,m++}else if(I.isHemisphereLight){const X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(G*w),X.groundColor.copy(I.groundColor).multiplyScalar(G*w),s.hemi[_]=X,_++}}v>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==v||N.hemiLength!==_||N.numDirectionalShadows!==M||N.numPointShadows!==P||N.numSpotShadows!==A||N.numSpotMaps!==R||N.numLightProbes!==S)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=v,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=A+R-U,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=S,N.directionalLength=x,N.pointLength=m,N.spotLength=f,N.rectAreaLength=v,N.hemiLength=_,N.numDirectionalShadows=M,N.numPointShadows=P,N.numSpotShadows=A,N.numSpotMaps=R,N.numLightProbes=S,s.version=e_++)}function l(c,h){let d=0,p=0,g=0,x=0,m=0;const f=h.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const M=c[v];if(M.isDirectionalLight){const P=s.directional[d];P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(M.isSpotLight){const P=s.spot[g];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const P=s.rectArea[x];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const P=s.point[p];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const P=s.hemi[m];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:u,setupView:l,state:s}}function Ac(i,e){const t=new n_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function u(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:u,setupLightsView:l,pushLight:a,pushShadow:o}}function i_(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let u;return o===void 0?(u=new Ac(i,e),t.set(r,[u])):a>=o.length?(u=new Ac(i,e),o.push(u)):u=o[a],u}function s(){t=new WeakMap}return{get:n,dispose:s}}class s_ extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r_ extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
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
}`;function l_(i,e,t){let n=new Ya;const s=new he,r=new he,a=new ut,o=new s_({depthPacking:kd}),u=new r_,l={},c=t.maxTextureSize,h={[ni]:Vt,[Vt]:ni,[Kt]:Kt},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:o_,fragmentShader:a_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let f=this.type;this.render=function(A,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Jn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const te=f!==Pn&&this.type===Pn,I=f===Pn&&this.type!==Pn;for(let B=0,G=A.length;B<G;B++){const $=A[B],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const X=K.getFrameExtents();if(s.multiply(X),r.copy(K.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/X.x),s.x=r.x*X.x,K.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/X.y),s.y=r.y*X.y,K.mapSize.y=r.y)),K.map===null||te===!0||I===!0){const ee=this.type!==Pn?{minFilter:Gt,magFilter:Gt}:{};K.map!==null&&K.map.dispose(),K.map=new wi(s.x,s.y,ee),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const re=K.getViewportCount();for(let ee=0;ee<re;ee++){const ge=K.getViewport(ee);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),Y.viewport(a),K.updateMatrices($,ee),n=K.getFrustum(),M(R,U,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===Pn&&v(K,U),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,w,N)};function v(A,R){const U=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,U,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,U,p,x,null)}function _(A,R,U,S){let w=null;const N=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)w=N;else if(w=U.isPointLight===!0?u:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=w.uuid,te=R.uuid;let I=l[Y];I===void 0&&(I={},l[Y]=I);let B=I[te];B===void 0&&(B=w.clone(),I[te]=B,R.addEventListener("dispose",P)),w=B}if(w.visible=R.visible,w.wireframe=R.wireframe,S===Pn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=i.properties.get(w);Y.light=U}return w}function M(A,R,U,S,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const te=e.update(A),I=A.material;if(Array.isArray(I)){const B=te.groups;for(let G=0,$=B.length;G<$;G++){const K=B[G],X=I[K.materialIndex];if(X&&X.visible){const re=_(A,X,S,w);A.onBeforeShadow(i,A,R,U,te,re,K),i.renderBufferDirect(U,null,te,re,A,K),A.onAfterShadow(i,A,R,U,te,re,K)}}}else if(I.visible){const B=_(A,I,S,w);A.onBeforeShadow(i,A,R,U,te,B,null),i.renderBufferDirect(U,null,te,B,A,null),A.onAfterShadow(i,A,R,U,te,B,null)}}const Y=A.children;for(let te=0,I=Y.length;te<I;te++)M(Y[te],R,U,S,w)}function P(A){A.target.removeEventListener("dispose",P);for(const U in l){const S=l[U],w=A.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function c_(i,e,t){const n=t.isWebGL2;function s(){let D=!1;const fe=new ut;let de=null;const Fe=new ut(0,0,0,0);return{setMask:function(Ie){de!==Ie&&!D&&(i.colorMask(Ie,Ie,Ie,Ie),de=Ie)},setLocked:function(Ie){D=Ie},setClear:function(Ie,$e,Qe,wt,Ot){Ot===!0&&(Ie*=wt,$e*=wt,Qe*=wt),fe.set(Ie,$e,Qe,wt),Fe.equals(fe)===!1&&(i.clearColor(Ie,$e,Qe,wt),Fe.copy(fe))},reset:function(){D=!1,de=null,Fe.set(-1,0,0,0)}}}function r(){let D=!1,fe=null,de=null,Fe=null;return{setTest:function(Ie){Ie?Ne(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Ie){fe!==Ie&&!D&&(i.depthMask(Ie),fe=Ie)},setFunc:function(Ie){if(de!==Ie){switch(Ie){case xd:i.depthFunc(i.NEVER);break;case vd:i.depthFunc(i.ALWAYS);break;case Md:i.depthFunc(i.LESS);break;case qr:i.depthFunc(i.LEQUAL);break;case yd:i.depthFunc(i.EQUAL);break;case Sd:i.depthFunc(i.GEQUAL);break;case Ed:i.depthFunc(i.GREATER);break;case bd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Ie}},setLocked:function(Ie){D=Ie},setClear:function(Ie){Fe!==Ie&&(i.clearDepth(Ie),Fe=Ie)},reset:function(){D=!1,fe=null,de=null,Fe=null}}}function a(){let D=!1,fe=null,de=null,Fe=null,Ie=null,$e=null,Qe=null,wt=null,Ot=null;return{setTest:function(st){D||(st?Ne(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(st){fe!==st&&!D&&(i.stencilMask(st),fe=st)},setFunc:function(st,Ft,mn){(de!==st||Fe!==Ft||Ie!==mn)&&(i.stencilFunc(st,Ft,mn),de=st,Fe=Ft,Ie=mn)},setOp:function(st,Ft,mn){($e!==st||Qe!==Ft||wt!==mn)&&(i.stencilOp(st,Ft,mn),$e=st,Qe=Ft,wt=mn)},setLocked:function(st){D=st},setClear:function(st){Ot!==st&&(i.clearStencil(st),Ot=st)},reset:function(){D=!1,fe=null,de=null,Fe=null,Ie=null,$e=null,Qe=null,wt=null,Ot=null}}}const o=new s,u=new r,l=new a,c=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,_=null,M=null,P=null,A=null,R=null,U=null,S=new Ye(0,0,0),w=0,N=!1,Y=null,te=null,I=null,B=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,X=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(re)[1]),K=X>=1):re.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),K=X>=2);let ee=null,ge={};const V=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),ve=new ut().fromArray(V),Ee=new ut().fromArray(oe);function Me(D,fe,de,Fe){const Ie=new Uint8Array(4),$e=i.createTexture();i.bindTexture(D,$e),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<de;Qe++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(fe,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(fe+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return $e}const Re={};Re[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),u.setClear(1),l.setClear(0),Ne(i.DEPTH_TEST),u.setFunc(qr),_e(!1),b(ul),Ne(i.CULL_FACE),Z(Jn);function Ne(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function be(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ue(D,fe){return p[D]!==fe?(i.bindFramebuffer(D,fe),p[D]=fe,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=fe),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=fe)),!0):!1}function L(D,fe){let de=x,Fe=!1;if(D)if(de=g.get(fe),de===void 0&&(de=[],g.set(fe,de)),D.isWebGLMultipleRenderTargets){const Ie=D.texture;if(de.length!==Ie.length||de[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,Qe=Ie.length;$e<Qe;$e++)de[$e]=i.COLOR_ATTACHMENT0+$e;de.length=Ie.length,Fe=!0}}else de[0]!==i.COLOR_ATTACHMENT0&&(de[0]=i.COLOR_ATTACHMENT0,Fe=!0);else de[0]!==i.BACK&&(de[0]=i.BACK,Fe=!0);Fe&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function ue(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const j={[_i]:i.FUNC_ADD,[id]:i.FUNC_SUBTRACT,[sd]:i.FUNC_REVERSE_SUBTRACT};if(n)j[fl]=i.MIN,j[pl]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(j[fl]=D.MIN_EXT,j[pl]=D.MAX_EXT)}const le={[rd]:i.ZERO,[od]:i.ONE,[ad]:i.SRC_COLOR,[_a]:i.SRC_ALPHA,[fd]:i.SRC_ALPHA_SATURATE,[hd]:i.DST_COLOR,[cd]:i.DST_ALPHA,[ld]:i.ONE_MINUS_SRC_COLOR,[xa]:i.ONE_MINUS_SRC_ALPHA,[dd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[pd]:i.CONSTANT_COLOR,[md]:i.ONE_MINUS_CONSTANT_COLOR,[gd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(D,fe,de,Fe,Ie,$e,Qe,wt,Ot,st){if(D===Jn){f===!0&&(be(i.BLEND),f=!1);return}if(f===!1&&(Ne(i.BLEND),f=!0),D!==nd){if(D!==v||st!==N){if((_!==_i||A!==_i)&&(i.blendEquation(i.FUNC_ADD),_=_i,A=_i),st)switch(D){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Us:i.blendFunc(i.ONE,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Us:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,P=null,R=null,U=null,S.set(0,0,0),w=0,v=D,N=st}return}Ie=Ie||fe,$e=$e||de,Qe=Qe||Fe,(fe!==_||Ie!==A)&&(i.blendEquationSeparate(j[fe],j[Ie]),_=fe,A=Ie),(de!==M||Fe!==P||$e!==R||Qe!==U)&&(i.blendFuncSeparate(le[de],le[Fe],le[$e],le[Qe]),M=de,P=Fe,R=$e,U=Qe),(wt.equals(S)===!1||Ot!==w)&&(i.blendColor(wt.r,wt.g,wt.b,Ot),S.copy(wt),w=Ot),v=D,N=!1}function Ae(D,fe){D.side===Kt?be(i.CULL_FACE):Ne(i.CULL_FACE);let de=D.side===Vt;fe&&(de=!de),_e(de),D.blending===as&&D.transparent===!1?Z(Jn):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),u.setFunc(D.depthFunc),u.setTest(D.depthTest),u.setMask(D.depthWrite),o.setMask(D.colorWrite);const Fe=D.stencilWrite;l.setTest(Fe),Fe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),F(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(D){Y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),Y=D)}function b(D){D!==ed?(Ne(i.CULL_FACE),D!==te&&(D===ul?i.cullFace(i.BACK):D===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),te=D}function y(D){D!==I&&(K&&i.lineWidth(D),I=D)}function F(D,fe,de){D?(Ne(i.POLYGON_OFFSET_FILL),(B!==fe||G!==de)&&(i.polygonOffset(fe,de),B=fe,G=de)):be(i.POLYGON_OFFSET_FILL)}function ae(D){D?Ne(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function ne(D){D===void 0&&(D=i.TEXTURE0+$-1),ee!==D&&(i.activeTexture(D),ee=D)}function ie(D,fe,de){de===void 0&&(ee===null?de=i.TEXTURE0+$-1:de=ee);let Fe=ge[de];Fe===void 0&&(Fe={type:void 0,texture:void 0},ge[de]=Fe),(Fe.type!==D||Fe.texture!==fe)&&(ee!==de&&(i.activeTexture(de),ee=de),i.bindTexture(D,fe||Re[D]),Fe.type=D,Fe.texture=fe)}function we(){const D=ge[ee];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function E(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(D){ve.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ve.copy(D))}function Oe(D){Ee.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ee.copy(D))}function He(D,fe){let de=h.get(fe);de===void 0&&(de=new WeakMap,h.set(fe,de));let Fe=de.get(D);Fe===void 0&&(Fe=i.getUniformBlockIndex(fe,D.name),de.set(D,Fe))}function Le(D,fe){const Fe=h.get(fe).get(D);c.get(fe)!==Fe&&(i.uniformBlockBinding(fe,Fe,D.__bindingPointIndex),c.set(fe,Fe))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ee=null,ge={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,_=null,M=null,P=null,A=null,R=null,U=null,S=new Ye(0,0,0),w=0,N=!1,Y=null,te=null,I=null,B=null,G=null,ve.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),o.reset(),u.reset(),l.reset()}return{buffers:{color:o,depth:u,stencil:l},enable:Ne,disable:be,bindFramebuffer:Ue,drawBuffers:L,useProgram:ue,setBlending:Z,setMaterial:Ae,setFlipSided:_e,setCullFace:b,setLineWidth:y,setPolygonOffset:F,setScissorTest:ae,activeTexture:ne,bindTexture:ie,unbindTexture:we,compressedTexImage2D:pe,compressedTexImage3D:ye,texImage2D:J,texImage3D:Q,updateUBOMapping:He,uniformBlockBinding:Le,texStorage2D:E,texStorage3D:O,texSubImage2D:Pe,texSubImage3D:Be,compressedTexSubImage2D:se,compressedTexSubImage3D:q,scissor:Se,viewport:Oe,reset:ce}}function u_(i,e,t,n,s,r,a){const o=s.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return p?new OffscreenCanvas(b,y):Qr("canvas")}function x(b,y,F,ae){let ne=1;if((b.width>ae||b.height>ae)&&(ne=ae/Math.max(b.width,b.height)),ne<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=y?Jr:Math.floor,we=ie(ne*b.width),pe=ie(ne*b.height);h===void 0&&(h=g(we,pe));const ye=F?g(we,pe):h;return ye.width=we,ye.height=pe,ye.getContext("2d").drawImage(b,0,0,we,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+we+"x"+pe+")."),ye}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ba(b.width)&&ba(b.height)}function f(b){return o?!1:b.wrapS!==un||b.wrapT!==un||b.minFilter!==Gt&&b.minFilter!==Qt}function v(b,y){return b.generateMipmaps&&y&&b.minFilter!==Gt&&b.minFilter!==Qt}function _(b){i.generateMipmap(b)}function M(b,y,F,ae,ne=!1){if(o===!1)return y;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=y;if(y===i.RED&&(F===i.FLOAT&&(ie=i.R32F),F===i.HALF_FLOAT&&(ie=i.R16F),F===i.UNSIGNED_BYTE&&(ie=i.R8)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ie=i.R8UI),F===i.UNSIGNED_SHORT&&(ie=i.R16UI),F===i.UNSIGNED_INT&&(ie=i.R32UI),F===i.BYTE&&(ie=i.R8I),F===i.SHORT&&(ie=i.R16I),F===i.INT&&(ie=i.R32I)),y===i.RG&&(F===i.FLOAT&&(ie=i.RG32F),F===i.HALF_FLOAT&&(ie=i.RG16F),F===i.UNSIGNED_BYTE&&(ie=i.RG8)),y===i.RGBA){const we=ne?jr:tt.getTransfer(ae);F===i.FLOAT&&(ie=i.RGBA32F),F===i.HALF_FLOAT&&(ie=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ie=we===at?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function P(b,y,F){return v(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==Gt&&b.minFilter!==Qt?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function A(b){return b===Gt||b===ml||b===So?i.NEAREST:i.LINEAR}function R(b){const y=b.target;y.removeEventListener("dispose",R),S(y),y.isVideoTexture&&c.delete(y)}function U(b){const y=b.target;y.removeEventListener("dispose",U),N(y)}function S(b){const y=n.get(b);if(y.__webglInit===void 0)return;const F=b.source,ae=d.get(F);if(ae){const ne=ae[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(b),Object.keys(ae).length===0&&d.delete(F)}n.remove(b)}function w(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const F=b.source,ae=d.get(F);delete ae[y.__cacheKey],a.memory.textures--}function N(b){const y=b.texture,F=n.get(b),ae=n.get(y);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(F.__webglFramebuffer[ne]))for(let ie=0;ie<F.__webglFramebuffer[ne].length;ie++)i.deleteFramebuffer(F.__webglFramebuffer[ne][ie]);else i.deleteFramebuffer(F.__webglFramebuffer[ne]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ne])}else{if(Array.isArray(F.__webglFramebuffer))for(let ne=0;ne<F.__webglFramebuffer.length;ne++)i.deleteFramebuffer(F.__webglFramebuffer[ne]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ne=0;ne<F.__webglColorRenderbuffer.length;ne++)F.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ne]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ne=0,ie=y.length;ne<ie;ne++){const we=n.get(y[ne]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),a.memory.textures--),n.remove(y[ne])}n.remove(y),n.remove(b)}let Y=0;function te(){Y=0}function I(){const b=Y;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),Y+=1,b}function B(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function G(b,y){const F=n.get(b);if(b.isVideoTexture&&Ae(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(F,b,y);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function $(b,y){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ve(F,b,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function K(b,y){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ve(F,b,y);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function X(b,y){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Ee(F,b,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}const re={[ya]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},ee={[Gt]:i.NEAREST,[ml]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Id]:i.LINEAR_MIPMAP_NEAREST,[Ys]:i.LINEAR_MIPMAP_LINEAR},ge={[Wd]:i.NEVER,[Kd]:i.ALWAYS,[Xd]:i.LESS,[Au]:i.LEQUAL,[Yd]:i.EQUAL,[Zd]:i.GEQUAL,[qd]:i.GREATER,[jd]:i.NOTEQUAL};function V(b,y,F){if(F?(i.texParameteri(b,i.TEXTURE_WRAP_S,re[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,re[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,re[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ee[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ee[y.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==un||y.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,A(y.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==Gt&&y.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Gt||y.minFilter!==So&&y.minFilter!==Ys||y.type===Kn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===qs&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(b,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function oe(b,y){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",R));const ae=y.source;let ne=d.get(ae);ne===void 0&&(ne={},d.set(ae,ne));const ie=B(y);if(ie!==b.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ne[ie].usedTimes++;const we=ne[b.__cacheKey];we!==void 0&&(ne[b.__cacheKey].usedTimes--,we.usedTimes===0&&w(y)),b.__cacheKey=ie,b.__webglTexture=ne[ie].texture}return F}function ve(b,y,F){let ae=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=i.TEXTURE_3D);const ne=oe(b,y),ie=y.source;t.bindTexture(ae,b.__webglTexture,i.TEXTURE0+F);const we=n.get(ie);if(ie.version!==we.__version||ne===!0){t.activeTexture(i.TEXTURE0+F);const pe=tt.getPrimaries(tt.workingColorSpace),ye=y.colorSpace===tn?null:tt.getPrimaries(y.colorSpace),Pe=y.colorSpace===tn||pe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Be=f(y)&&m(y.image)===!1;let se=x(y.image,Be,!1,s.maxTextureSize);se=_e(y,se);const q=m(se)||o,E=r.convert(y.format,y.colorSpace);let O=r.convert(y.type),J=M(y.internalFormat,E,O,y.colorSpace,y.isVideoTexture);V(ae,y,q);let Q;const Se=y.mipmaps,Oe=o&&y.isVideoTexture!==!0&&J!==bu,He=we.__version===void 0||ne===!0,Le=P(y,se,q);if(y.isDepthTexture)J=i.DEPTH_COMPONENT,o?y.type===Kn?J=i.DEPTH_COMPONENT32F:y.type===Zn?J=i.DEPTH_COMPONENT24:y.type===Mi?J=i.DEPTH24_STENCIL8:J=i.DEPTH_COMPONENT16:y.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===yi&&J===i.DEPTH_COMPONENT&&y.type!==ka&&y.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Zn,O=r.convert(y.type)),y.format===ps&&J===i.DEPTH_COMPONENT&&(J=i.DEPTH_STENCIL,y.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Mi,O=r.convert(y.type))),He&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,J,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,J,se.width,se.height,0,E,O,null));else if(y.isDataTexture)if(Se.length>0&&q){Oe&&He&&t.texStorage2D(i.TEXTURE_2D,Le,J,Se[0].width,Se[0].height);for(let ce=0,D=Se.length;ce<D;ce++)Q=Se[ce],Oe?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Q.width,Q.height,E,O,Q.data):t.texImage2D(i.TEXTURE_2D,ce,J,Q.width,Q.height,0,E,O,Q.data);y.generateMipmaps=!1}else Oe?(He&&t.texStorage2D(i.TEXTURE_2D,Le,J,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,E,O,se.data)):t.texImage2D(i.TEXTURE_2D,0,J,se.width,se.height,0,E,O,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,J,Se[0].width,Se[0].height,se.depth);for(let ce=0,D=Se.length;ce<D;ce++)Q=Se[ce],y.format!==hn?E!==null?Oe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Q.width,Q.height,se.depth,E,Q.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,J,Q.width,Q.height,se.depth,0,Q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Q.width,Q.height,se.depth,E,O,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,J,Q.width,Q.height,se.depth,0,E,O,Q.data)}else{Oe&&He&&t.texStorage2D(i.TEXTURE_2D,Le,J,Se[0].width,Se[0].height);for(let ce=0,D=Se.length;ce<D;ce++)Q=Se[ce],y.format!==hn?E!==null?Oe?t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Q.width,Q.height,E,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,J,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Q.width,Q.height,E,O,Q.data):t.texImage2D(i.TEXTURE_2D,ce,J,Q.width,Q.height,0,E,O,Q.data)}else if(y.isDataArrayTexture)Oe?(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,J,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,E,O,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,se.width,se.height,se.depth,0,E,O,se.data);else if(y.isData3DTexture)Oe?(He&&t.texStorage3D(i.TEXTURE_3D,Le,J,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,E,O,se.data)):t.texImage3D(i.TEXTURE_3D,0,J,se.width,se.height,se.depth,0,E,O,se.data);else if(y.isFramebufferTexture){if(He)if(Oe)t.texStorage2D(i.TEXTURE_2D,Le,J,se.width,se.height);else{let ce=se.width,D=se.height;for(let fe=0;fe<Le;fe++)t.texImage2D(i.TEXTURE_2D,fe,J,ce,D,0,E,O,null),ce>>=1,D>>=1}}else if(Se.length>0&&q){Oe&&He&&t.texStorage2D(i.TEXTURE_2D,Le,J,Se[0].width,Se[0].height);for(let ce=0,D=Se.length;ce<D;ce++)Q=Se[ce],Oe?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,E,O,Q):t.texImage2D(i.TEXTURE_2D,ce,J,E,O,Q);y.generateMipmaps=!1}else Oe?(He&&t.texStorage2D(i.TEXTURE_2D,Le,J,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,E,O,se)):t.texImage2D(i.TEXTURE_2D,0,J,E,O,se);v(y,q)&&_(ae),we.__version=ie.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Ee(b,y,F){if(y.image.length!==6)return;const ae=oe(b,y),ne=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const ie=n.get(ne);if(ne.version!==ie.__version||ae===!0){t.activeTexture(i.TEXTURE0+F);const we=tt.getPrimaries(tt.workingColorSpace),pe=y.colorSpace===tn?null:tt.getPrimaries(y.colorSpace),ye=y.colorSpace===tn||we===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Pe=y.isCompressedTexture||y.image[0].isCompressedTexture,Be=y.image[0]&&y.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!Pe&&!Be?se[ce]=x(y.image[ce],!1,!0,s.maxCubemapSize):se[ce]=Be?y.image[ce].image:y.image[ce],se[ce]=_e(y,se[ce]);const q=se[0],E=m(q)||o,O=r.convert(y.format,y.colorSpace),J=r.convert(y.type),Q=M(y.internalFormat,O,J,y.colorSpace),Se=o&&y.isVideoTexture!==!0,Oe=ie.__version===void 0||ae===!0;let He=P(y,q,E);V(i.TEXTURE_CUBE_MAP,y,E);let Le;if(Pe){Se&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,Q,q.width,q.height);for(let ce=0;ce<6;ce++){Le=se[ce].mipmaps;for(let D=0;D<Le.length;D++){const fe=Le[D];y.format!==hn?O!==null?Se?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,0,0,fe.width,fe.height,O,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,Q,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,0,0,fe.width,fe.height,O,J,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,Q,fe.width,fe.height,0,O,J,fe.data)}}}else{Le=y.mipmaps,Se&&Oe&&(Le.length>0&&He++,t.texStorage2D(i.TEXTURE_CUBE_MAP,He,Q,se[0].width,se[0].height));for(let ce=0;ce<6;ce++)if(Be){Se?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,O,J,se[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Q,se[ce].width,se[ce].height,0,O,J,se[ce].data);for(let D=0;D<Le.length;D++){const de=Le[D].image[ce].image;Se?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,0,0,de.width,de.height,O,J,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,Q,de.width,de.height,0,O,J,de.data)}}else{Se?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,O,J,se[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Q,O,J,se[ce]);for(let D=0;D<Le.length;D++){const fe=Le[D];Se?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,0,0,O,J,fe.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,Q,O,J,fe.image[ce])}}}v(y,E)&&_(i.TEXTURE_CUBE_MAP),ie.__version=ne.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Me(b,y,F,ae,ne,ie){const we=r.convert(F.format,F.colorSpace),pe=r.convert(F.type),ye=M(F.internalFormat,we,pe,F.colorSpace);if(!n.get(y).__hasExternalTextures){const Be=Math.max(1,y.width>>ie),se=Math.max(1,y.height>>ie);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ie,ye,Be,se,y.depth,0,we,pe,null):t.texImage2D(ne,ie,ye,Be,se,0,we,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Z(y)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ne,n.get(F).__webglTexture,0,le(y)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ne,n.get(F).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(b,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let ae=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||Z(y)){const ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Kn?ae=i.DEPTH_COMPONENT32F:ne.type===Zn&&(ae=i.DEPTH_COMPONENT24));const ie=le(y);Z(y)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,ae,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ae,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const ae=le(y);F&&Z(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,y.width,y.height):Z(y)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const ae=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ne=0;ne<ae.length;ne++){const ie=ae[ne],we=r.convert(ie.format,ie.colorSpace),pe=r.convert(ie.type),ye=M(ie.internalFormat,we,pe,ie.colorSpace),Pe=le(y);F&&Z(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ye,y.width,y.height):Z(y)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ye,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ye,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const ae=n.get(y.depthTexture).__webglTexture,ne=le(y);if(y.depthTexture.format===yi)Z(y)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(y.depthTexture.format===ps)Z(y)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function be(b){const y=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ne(y.__webglFramebuffer,b)}else if(F){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]=i.createRenderbuffer(),Re(y.__webglDepthbuffer[ae],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Re(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(b,y,F){const ae=n.get(b);y!==void 0&&Me(ae.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&be(b)}function L(b){const y=b.texture,F=n.get(b),ae=n.get(y);b.addEventListener("dispose",U),b.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=y.version,a.memory.textures++);const ne=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,we=m(b)||o;if(ne){F.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[pe]=[];for(let ye=0;ye<y.mipmaps.length;ye++)F.__webglFramebuffer[pe][ye]=i.createFramebuffer()}else F.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)F.__webglFramebuffer[pe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ie)if(s.drawBuffers){const pe=b.texture;for(let ye=0,Pe=pe.length;ye<Pe;ye++){const Be=n.get(pe[ye]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Z(b)===!1){const pe=ie?y:[y];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ye=0;ye<pe.length;ye++){const Pe=pe[ye];F.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ye]);const Be=r.convert(Pe.format,Pe.colorSpace),se=r.convert(Pe.type),q=M(Pe.internalFormat,Be,se,Pe.colorSpace,b.isXRRenderTarget===!0),E=le(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,E,q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,F.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),V(i.TEXTURE_CUBE_MAP,y,we);for(let pe=0;pe<6;pe++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)Me(F.__webglFramebuffer[pe][ye],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else Me(F.__webglFramebuffer[pe],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(y,we)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const pe=b.texture;for(let ye=0,Pe=pe.length;ye<Pe;ye++){const Be=pe[ye],se=n.get(Be);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),V(i.TEXTURE_2D,Be,we),Me(F.__webglFramebuffer,b,Be,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),v(Be,we)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?pe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ae.__webglTexture),V(pe,y,we),o&&y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)Me(F.__webglFramebuffer[ye],b,y,i.COLOR_ATTACHMENT0,pe,ye);else Me(F.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,pe,0);v(y,we)&&_(pe),t.unbindTexture()}b.depthBuffer&&be(b)}function ue(b){const y=m(b)||o,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0,ne=F.length;ae<ne;ae++){const ie=F[ae];if(v(ie,y)){const we=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(ie).__webglTexture;t.bindTexture(we,pe),_(we),t.unbindTexture()}}}function j(b){if(o&&b.samples>0&&Z(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,ae=b.height;let ne=i.COLOR_BUFFER_BIT;const ie=[],we=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(b),ye=b.isWebGLMultipleRenderTargets===!0;if(ye)for(let Pe=0;Pe<y.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Pe=0;Pe<y.length;Pe++){ie.push(i.COLOR_ATTACHMENT0+Pe),b.depthBuffer&&ie.push(we);const Be=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Be===!1&&(b.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Pe]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[we]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[we])),ye){const se=n.get(y[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,F,ae,0,0,F,ae,ne,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Pe=0;Pe<y.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Pe]);const Be=n.get(y[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function le(b){return Math.min(s.maxSamples,b.samples)}function Z(b){const y=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(b){const y=a.render.frame;c.get(b)!==y&&(c.set(b,y),b.update())}function _e(b,y){const F=b.colorSpace,ae=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ea||F!==Bn&&F!==tn&&(tt.getTransfer(F)===at?o===!1?e.has("EXT_sRGB")===!0&&ae===hn?(b.format=Ea,b.minFilter=Qt,b.generateMipmaps=!1):y=Cu.sRGBToLinear(y):(ae!==hn||ne!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}this.allocateTextureUnit=I,this.resetTextureUnits=te,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=Ue,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Z}function h_(i,e,t){const n=t.isWebGL2;function s(r,a=tn){let o;const u=tt.getTransfer(a);if(r===ei)return i.UNSIGNED_BYTE;if(r===vu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Mu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Dd)return i.BYTE;if(r===Ud)return i.SHORT;if(r===ka)return i.UNSIGNED_SHORT;if(r===xu)return i.INT;if(r===Zn)return i.UNSIGNED_INT;if(r===Kn)return i.FLOAT;if(r===qs)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Nd)return i.ALPHA;if(r===hn)return i.RGBA;if(r===Od)return i.LUMINANCE;if(r===Fd)return i.LUMINANCE_ALPHA;if(r===yi)return i.DEPTH_COMPONENT;if(r===ps)return i.DEPTH_STENCIL;if(r===Ea)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bd)return i.RED;if(r===yu)return i.RED_INTEGER;if(r===zd)return i.RG;if(r===Su)return i.RG_INTEGER;if(r===Eu)return i.RGBA_INTEGER;if(r===Eo||r===bo||r===wo||r===To)if(u===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Eo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Eo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===To)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gl||r===_l||r===xl||r===vl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===gl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ml||r===yl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ml)return u===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===yl)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sl||r===El||r===bl||r===wl||r===Tl||r===Al||r===Rl||r===Cl||r===Pl||r===Ll||r===Il||r===Dl||r===Ul||r===Nl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Sl)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===El)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bl)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wl)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tl)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Al)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rl)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cl)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pl)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ll)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Il)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dl)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ul)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nl)return u===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ao||r===Ol||r===Fl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ao)return u===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ol)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gd||r===Bl||r===zl||r===Gl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ao)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Bl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class d_ extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lt extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f_={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return o!==null&&(o.visible=s!==null),u!==null&&(u.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class p_ extends Ci{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",u=1,l=null,c=null,h=null,d=null,p=null,g=null;const x=t.getContextAttributes();let m=null,f=null;const v=[],_=[],M=new he;let P=null;const A=new Zt;A.layers.enable(1),A.viewport=new ut;const R=new Zt;R.layers.enable(2),R.viewport=new ut;const U=[A,R],S=new d_;S.layers.enable(1),S.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let oe=v[V];return oe===void 0&&(oe=new Ko,v[V]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(V){let oe=v[V];return oe===void 0&&(oe=new Ko,v[V]=oe),oe.getGripSpace()},this.getHand=function(V){let oe=v[V];return oe===void 0&&(oe=new Ko,v[V]=oe),oe.getHandSpace()};function Y(V){const oe=_.indexOf(V.inputSource);if(oe===-1)return;const ve=v[oe];ve!==void 0&&(ve.update(V.inputSource,V.frame,l||a),ve.dispatchEvent({type:V.type,data:V.inputSource}))}function te(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",I);for(let V=0;V<v.length;V++){const oe=_[V];oe!==null&&(_[V]=null,v[V].disconnect(oe))}w=null,N=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",te),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new wi(p.framebufferWidth,p.framebufferHeight,{format:hn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let oe=null,ve=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=x.stencil?ps:yi,ve=x.stencil?Mi:Zn);const Me={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new wi(d.textureWidth,d.textureHeight,{format:hn,type:ei,depthTexture:new Hu(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Re=e.properties.get(f);Re.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(u),l=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(V){for(let oe=0;oe<V.removed.length;oe++){const ve=V.removed[oe],Ee=_.indexOf(ve);Ee>=0&&(_[Ee]=null,v[Ee].disconnect(ve))}for(let oe=0;oe<V.added.length;oe++){const ve=V.added[oe];let Ee=_.indexOf(ve);if(Ee===-1){for(let Re=0;Re<v.length;Re++)if(Re>=_.length){_.push(ve),Ee=Re;break}else if(_[Re]===null){_[Re]=ve,Ee=Re;break}if(Ee===-1)break}const Me=v[Ee];Me&&Me.connect(ve)}}const B=new C,G=new C;function $(V,oe,ve){B.setFromMatrixPosition(oe.matrixWorld),G.setFromMatrixPosition(ve.matrixWorld);const Ee=B.distanceTo(G),Me=oe.projectionMatrix.elements,Re=ve.projectionMatrix.elements,Ne=Me[14]/(Me[10]-1),be=Me[14]/(Me[10]+1),Ue=(Me[9]+1)/Me[5],L=(Me[9]-1)/Me[5],ue=(Me[8]-1)/Me[0],j=(Re[8]+1)/Re[0],le=Ne*ue,Z=Ne*j,Ae=Ee/(-ue+j),_e=Ae*-ue;oe.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(_e),V.translateZ(Ae),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const b=Ne+Ae,y=be+Ae,F=le-_e,ae=Z+(Ee-_e),ne=Ue*be/y*b,ie=L*be/y*b;V.projectionMatrix.makePerspective(F,ae,ne,ie,b,y),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function K(V,oe){oe===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(oe.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;S.near=R.near=A.near=V.near,S.far=R.far=A.far=V.far,(w!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,N=S.far);const oe=V.parent,ve=S.cameras;K(S,oe);for(let Ee=0;Ee<ve.length;Ee++)K(ve[Ee],oe);ve.length===2?$(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),X(V,S,oe)};function X(V,oe,ve){ve===null?V.matrix.copy(oe.matrixWorld):(V.matrix.copy(ve.matrixWorld),V.matrix.invert(),V.matrix.multiply(oe.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(oe.projectionMatrix),V.projectionMatrixInverse.copy(oe.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=js*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return u},this.setFoveation=function(V){u=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let re=null;function ee(V,oe){if(c=oe.getViewerPose(l||a),g=oe,c!==null){const ve=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Ee=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let Me=0;Me<ve.length;Me++){const Re=ve[Me];let Ne=null;if(p!==null)Ne=p.getViewport(Re);else{const Ue=h.getViewSubImage(d,Re);Ne=Ue.viewport,Me===0&&(e.setRenderTargetTextures(f,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(f))}let be=U[Me];be===void 0&&(be=new Zt,be.layers.enable(Me),be.viewport=new ut,U[Me]=be),be.matrix.fromArray(Re.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Re.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Me===0&&(S.matrix.copy(be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push(be)}}for(let ve=0;ve<v.length;ve++){const Ee=_[ve],Me=v[ve];Ee!==null&&Me!==void 0&&Me.update(Ee,oe,l||a)}re&&re(V,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const ge=new zu;ge.setAnimationLoop(ee),this.setAnimationLoop=function(V){re=V},this.dispose=function(){}}}function m_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ou(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),c(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?u(m,f,v,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function u(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g_(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(v,_){const M=_.program;n.uniformBlockBinding(v,M)}function l(v,_){let M=s[v.id];M===void 0&&(g(v),M=c(v),s[v.id]=M,v.addEventListener("dispose",m));const P=_.program;n.updateUBOMapping(v,P);const A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function c(v){const _=h();v.__bindingPointIndex=_;const M=i.createBuffer(),P=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=s[v.id],M=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,R=M.length;A<R;A++){const U=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,w=U.length;S<w;S++){const N=U[S];if(p(N,A,S,P)===!0){const Y=N.__offset,te=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let B=0;B<te.length;B++){const G=te[B],$=x(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,Y+I,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,_,M,P){const A=v.value,R=_+"_"+M;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{const U=P[R];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return P[R]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(v){const _=v.uniforms;let M=0;const P=16;for(let R=0,U=_.length;R<U;R++){const S=Array.isArray(_[R])?_[R]:[_[R]];for(let w=0,N=S.length;w<N;w++){const Y=S[w],te=Array.isArray(Y.value)?Y.value:[Y.value];for(let I=0,B=te.length;I<B;I++){const G=te[I],$=x(G),K=M%P;K!==0&&P-K<$.boundary&&(M+=P-K),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=$.storage}}}const A=M%P;return A>0&&(M+=P-A),v.__size=M,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:u,update:l,dispose:f}}class qu{constructor(e={}){const{canvas:t=df(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const _=this;let M=!1,P=0,A=0,R=null,U=-1,S=null;const w=new ut,N=new ut;let Y=null;const te=new Ye(0);let I=0,B=t.width,G=t.height,$=1,K=null,X=null;const re=new ut(0,0,B,G),ee=new ut(0,0,B,G);let ge=!1;const V=new Ya;let oe=!1,ve=!1,Ee=null;const Me=new ct,Re=new he,Ne=new C,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return R===null?$:1}let L=n;function ue(T,z){for(let k=0;k<T.length;k++){const W=T[k],H=t.getContext(W,z);if(H!==null)return H}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ha}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),L=ue(z,T),L===null)throw ue(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let j,le,Z,Ae,_e,b,y,F,ae,ne,ie,we,pe,ye,Pe,Be,se,q,E,O,J,Q,Se,Oe;function He(){j=new T0(L),le=new M0(L,j,e),j.init(le),Q=new h_(L,j,le),Z=new c_(L,j,le),Ae=new C0(L),_e=new Zg,b=new u_(L,j,Z,_e,le,Q,Ae),y=new S0(_),F=new w0(_),ae=new Ff(L,le),Se=new x0(L,j,ae,le),ne=new A0(L,ae,Ae,Se),ie=new D0(L,ne,ae,Ae),E=new I0(L,le,b),Be=new y0(_e),we=new jg(_,y,F,j,le,Se,Be),pe=new m_(_,_e),ye=new $g,Pe=new i_(j,le),q=new _0(_,y,F,Z,ie,d,u),se=new l_(_,ie,le),Oe=new g_(L,Ae,le,Z),O=new v0(L,j,Ae,le),J=new R0(L,j,Ae,le),Ae.programs=we.programs,_.capabilities=le,_.extensions=j,_.properties=_e,_.renderLists=ye,_.shadowMap=se,_.state=Z,_.info=Ae}He();const Le=new p_(_,L);this.xr=Le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=j.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=j.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(B,G,!1))},this.getSize=function(T){return T.set(B,G)},this.setSize=function(T,z,k=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,G=z,t.width=Math.floor(T*$),t.height=Math.floor(z*$),k===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(B*$,G*$).floor()},this.setDrawingBufferSize=function(T,z,k){B=T,G=z,$=k,t.width=Math.floor(T*k),t.height=Math.floor(z*k),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,z,k,W){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,z,k,W),Z.viewport(w.copy(re).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,z,k,W){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,z,k,W),Z.scissor(N.copy(ee).multiplyScalar($).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(T){Z.setScissorTest(ge=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(T=!0,z=!0,k=!0){let W=0;if(T){let H=!1;if(R!==null){const Te=R.texture.format;H=Te===Eu||Te===Su||Te===yu}if(H){const Te=R.texture.type,De=Te===ei||Te===Zn||Te===ka||Te===Mi||Te===vu||Te===Mu,ze=q.getClearColor(),ke=q.getClearAlpha(),qe=ze.r,Ve=ze.g,We=ze.b;De?(p[0]=qe,p[1]=Ve,p[2]=We,p[3]=ke,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=qe,g[1]=Ve,g[2]=We,g[3]=ke,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}z&&(W|=L.DEPTH_BUFFER_BIT),k&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ye.dispose(),Pe.dispose(),_e.dispose(),y.dispose(),F.dispose(),ie.dispose(),Se.dispose(),Oe.dispose(),we.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Ot),Le.removeEventListener("sessionend",st),Ee&&(Ee.dispose(),Ee=null),Ft.stop()};function ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Ae.autoReset,z=se.enabled,k=se.autoUpdate,W=se.needsUpdate,H=se.type;He(),Ae.autoReset=T,se.enabled=z,se.autoUpdate=k,se.needsUpdate=W,se.type=H}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function de(T){const z=T.target;z.removeEventListener("dispose",de),Fe(z)}function Fe(T){Ie(T),_e.remove(T)}function Ie(T){const z=_e.get(T).programs;z!==void 0&&(z.forEach(function(k){we.releaseProgram(k)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,k,W,H,Te){z===null&&(z=be);const De=H.isMesh&&H.matrixWorld.determinant()<0,ze=jh(T,z,k,W,H);Z.setMaterial(W,De);let ke=k.index,qe=1;if(W.wireframe===!0){if(ke=ne.getWireframeAttribute(k),ke===void 0)return;qe=2}const Ve=k.drawRange,We=k.attributes.position;let mt=Ve.start*qe,Xt=(Ve.start+Ve.count)*qe;Te!==null&&(mt=Math.max(mt,Te.start*qe),Xt=Math.min(Xt,(Te.start+Te.count)*qe)),ke!==null?(mt=Math.max(mt,0),Xt=Math.min(Xt,ke.count)):We!=null&&(mt=Math.max(mt,0),Xt=Math.min(Xt,We.count));const Tt=Xt-mt;if(Tt<0||Tt===1/0)return;Se.setup(H,W,ze,k,ke);let bn,ht=O;if(ke!==null&&(bn=ae.get(ke),ht=J,ht.setIndex(bn)),H.isMesh)W.wireframe===!0?(Z.setLineWidth(W.wireframeLinewidth*Ue()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(H.isLine){let je=W.linewidth;je===void 0&&(je=1),Z.setLineWidth(je*Ue()),H.isLineSegments?ht.setMode(L.LINES):H.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else H.isPoints?ht.setMode(L.POINTS):H.isSprite&&ht.setMode(L.TRIANGLES);if(H.isBatchedMesh)ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ht.renderInstances(mt,Tt,H.count);else if(k.isInstancedBufferGeometry){const je=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,xo=Math.min(k.instanceCount,je);ht.renderInstances(mt,Tt,xo)}else ht.render(mt,Tt)};function $e(T,z,k){T.transparent===!0&&T.side===Kt&&T.forceSinglePass===!1?(T.side=Vt,T.needsUpdate=!0,er(T,z,k),T.side=ni,T.needsUpdate=!0,er(T,z,k),T.side=Kt):er(T,z,k)}this.compile=function(T,z,k=null){k===null&&(k=T),m=Pe.get(k),m.init(),v.push(m),k.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==k&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);const W=new Set;return T.traverse(function(H){const Te=H.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const ze=Te[De];$e(ze,k,H),W.add(ze)}else $e(Te,k,H),W.add(Te)}),v.pop(),m=null,W},this.compileAsync=function(T,z,k=null){const W=this.compile(T,z,k);return new Promise(H=>{function Te(){if(W.forEach(function(De){_e.get(De).currentProgram.isReady()&&W.delete(De)}),W.size===0){H(T);return}setTimeout(Te,10)}j.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Qe=null;function wt(T){Qe&&Qe(T)}function Ot(){Ft.stop()}function st(){Ft.start()}const Ft=new zu;Ft.setAnimationLoop(wt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(T){Qe=T,Le.setAnimationLoop(T),T===null?Ft.stop():Ft.start()},Le.addEventListener("sessionstart",Ot),Le.addEventListener("sessionend",st),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(z),z=Le.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,z,R),m=Pe.get(T,v.length),m.init(),v.push(m),Me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),V.setFromProjectionMatrix(Me),ve=this.localClippingEnabled,oe=Be.init(this.clippingPlanes,ve),x=ye.get(T,f.length),x.init(),f.push(x),mn(T,z,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(K,X),this.info.render.frame++,oe===!0&&Be.beginShadows();const k=m.state.shadowsArray;if(se.render(k,T,z),oe===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(x,T),m.setupLights(_._useLegacyLights),z.isArrayCamera){const W=z.cameras;for(let H=0,Te=W.length;H<Te;H++){const De=W[H];il(x,T,De,De.viewport)}}else il(x,T,z);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,z),Se.resetDefaultState(),U=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function mn(T,z,k,W){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){W&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);const De=ie.update(T),ze=T.material;ze.visible&&x.push(T,De,ze,k,Ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){const De=ie.update(T),ze=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ne.copy(De.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(Me)),Array.isArray(ze)){const ke=De.groups;for(let qe=0,Ve=ke.length;qe<Ve;qe++){const We=ke[qe],mt=ze[We.materialIndex];mt&&mt.visible&&x.push(T,De,mt,k,Ne.z,We)}}else ze.visible&&x.push(T,De,ze,k,Ne.z,null)}}const Te=T.children;for(let De=0,ze=Te.length;De<ze;De++)mn(Te[De],z,k,W)}function il(T,z,k,W){const H=T.opaque,Te=T.transmissive,De=T.transparent;m.setupLightsView(k),oe===!0&&Be.setGlobalState(_.clippingPlanes,k),Te.length>0&&qh(H,Te,z,k),W&&Z.viewport(w.copy(W)),H.length>0&&Qs(H,z,k),Te.length>0&&Qs(Te,z,k),De.length>0&&Qs(De,z,k),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function qh(T,z,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const Te=le.isWebGL2;Ee===null&&(Ee=new wi(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?qs:ei,minFilter:Ys,samples:Te?4:0})),_.getDrawingBufferSize(Re),Te?Ee.setSize(Re.x,Re.y):Ee.setSize(Jr(Re.x),Jr(Re.y));const De=_.getRenderTarget();_.setRenderTarget(Ee),_.getClearColor(te),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const ze=_.toneMapping;_.toneMapping=Qn,Qs(T,k,W),b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee);let ke=!1;for(let qe=0,Ve=z.length;qe<Ve;qe++){const We=z[qe],mt=We.object,Xt=We.geometry,Tt=We.material,bn=We.group;if(Tt.side===Kt&&mt.layers.test(W.layers)){const ht=Tt.side;Tt.side=Vt,Tt.needsUpdate=!0,sl(mt,k,W,Xt,Tt,bn),Tt.side=ht,Tt.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee)),_.setRenderTarget(De),_.setClearColor(te,I),_.toneMapping=ze}function Qs(T,z,k){const W=z.isScene===!0?z.overrideMaterial:null;for(let H=0,Te=T.length;H<Te;H++){const De=T[H],ze=De.object,ke=De.geometry,qe=W===null?De.material:W,Ve=De.group;ze.layers.test(k.layers)&&sl(ze,z,k,ke,qe,Ve)}}function sl(T,z,k,W,H,Te){T.onBeforeRender(_,z,k,W,H,Te),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(_,z,k,W,T,Te),H.transparent===!0&&H.side===Kt&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,_.renderBufferDirect(k,z,W,H,T,Te),H.side=ni,H.needsUpdate=!0,_.renderBufferDirect(k,z,W,H,T,Te),H.side=Kt):_.renderBufferDirect(k,z,W,H,T,Te),T.onAfterRender(_,z,k,W,H,Te)}function er(T,z,k){z.isScene!==!0&&(z=be);const W=_e.get(T),H=m.state.lights,Te=m.state.shadowsArray,De=H.state.version,ze=we.getParameters(T,H.state,Te,z,k),ke=we.getProgramCacheKey(ze);let qe=W.programs;W.environment=T.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(T.isMeshStandardMaterial?F:y).get(T.envMap||W.environment),qe===void 0&&(T.addEventListener("dispose",de),qe=new Map,W.programs=qe);let Ve=qe.get(ke);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===De)return ol(T,ze),Ve}else ze.uniforms=we.getUniforms(T),T.onBuild(k,ze,_),T.onBeforeCompile(ze,_),Ve=we.acquireProgram(ze,ke),qe.set(ke,Ve),W.uniforms=ze.uniforms;const We=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=Be.uniform),ol(T,ze),W.needsLights=Kh(T),W.lightsStateVersion=De,W.needsLights&&(We.ambientLightColor.value=H.state.ambient,We.lightProbe.value=H.state.probe,We.directionalLights.value=H.state.directional,We.directionalLightShadows.value=H.state.directionalShadow,We.spotLights.value=H.state.spot,We.spotLightShadows.value=H.state.spotShadow,We.rectAreaLights.value=H.state.rectArea,We.ltc_1.value=H.state.rectAreaLTC1,We.ltc_2.value=H.state.rectAreaLTC2,We.pointLights.value=H.state.point,We.pointLightShadows.value=H.state.pointShadow,We.hemisphereLights.value=H.state.hemi,We.directionalShadowMap.value=H.state.directionalShadowMap,We.directionalShadowMatrix.value=H.state.directionalShadowMatrix,We.spotShadowMap.value=H.state.spotShadowMap,We.spotLightMatrix.value=H.state.spotLightMatrix,We.spotLightMap.value=H.state.spotLightMap,We.pointShadowMap.value=H.state.pointShadowMap,We.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function rl(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Vr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ol(T,z){const k=_e.get(T);k.outputColorSpace=z.outputColorSpace,k.batching=z.batching,k.instancing=z.instancing,k.instancingColor=z.instancingColor,k.skinning=z.skinning,k.morphTargets=z.morphTargets,k.morphNormals=z.morphNormals,k.morphColors=z.morphColors,k.morphTargetsCount=z.morphTargetsCount,k.numClippingPlanes=z.numClippingPlanes,k.numIntersection=z.numClipIntersection,k.vertexAlphas=z.vertexAlphas,k.vertexTangents=z.vertexTangents,k.toneMapping=z.toneMapping}function jh(T,z,k,W,H){z.isScene!==!0&&(z=be),b.resetTextureUnits();const Te=z.fog,De=W.isMeshStandardMaterial?z.environment:null,ze=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bn,ke=(W.isMeshStandardMaterial?F:y).get(W.envMap||De),qe=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ve=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),We=!!k.morphAttributes.position,mt=!!k.morphAttributes.normal,Xt=!!k.morphAttributes.color;let Tt=Qn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Tt=_.toneMapping);const bn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ht=bn!==void 0?bn.length:0,je=_e.get(W),xo=m.state.lights;if(oe===!0&&(ve===!0||T!==S)){const $t=T===S&&W.id===U;Be.setState(W,T,$t)}let pt=!1;W.version===je.__version?(je.needsLights&&je.lightsStateVersion!==xo.state.version||je.outputColorSpace!==ze||H.isBatchedMesh&&je.batching===!1||!H.isBatchedMesh&&je.batching===!0||H.isInstancedMesh&&je.instancing===!1||!H.isInstancedMesh&&je.instancing===!0||H.isSkinnedMesh&&je.skinning===!1||!H.isSkinnedMesh&&je.skinning===!0||H.isInstancedMesh&&je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&je.instancingColor===!1&&H.instanceColor!==null||je.envMap!==ke||W.fog===!0&&je.fog!==Te||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Be.numPlanes||je.numIntersection!==Be.numIntersection)||je.vertexAlphas!==qe||je.vertexTangents!==Ve||je.morphTargets!==We||je.morphNormals!==mt||je.morphColors!==Xt||je.toneMapping!==Tt||le.isWebGL2===!0&&je.morphTargetsCount!==ht)&&(pt=!0):(pt=!0,je.__version=W.version);let oi=je.currentProgram;pt===!0&&(oi=er(W,z,H));let al=!1,ys=!1,vo=!1;const Dt=oi.getUniforms(),ai=je.uniforms;if(Z.useProgram(oi.program)&&(al=!0,ys=!0,vo=!0),W.id!==U&&(U=W.id,ys=!0),al||S!==T){Dt.setValue(L,"projectionMatrix",T.projectionMatrix),Dt.setValue(L,"viewMatrix",T.matrixWorldInverse);const $t=Dt.map.cameraPosition;$t!==void 0&&$t.setValue(L,Ne.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&Dt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Dt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,ys=!0,vo=!0)}if(H.isSkinnedMesh){Dt.setOptional(L,H,"bindMatrix"),Dt.setOptional(L,H,"bindMatrixInverse");const $t=H.skeleton;$t&&(le.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Dt.setValue(L,"boneTexture",$t.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Dt.setOptional(L,H,"batchingTexture"),Dt.setValue(L,"batchingTexture",H._matricesTexture,b));const Mo=k.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0&&le.isWebGL2===!0)&&E.update(H,k,oi),(ys||je.receiveShadow!==H.receiveShadow)&&(je.receiveShadow=H.receiveShadow,Dt.setValue(L,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ai.envMap.value=ke,ai.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ys&&(Dt.setValue(L,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&Zh(ai,vo),Te&&W.fog===!0&&pe.refreshFogUniforms(ai,Te),pe.refreshMaterialUniforms(ai,W,$,G,Ee),Vr.upload(L,rl(je),ai,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vr.upload(L,rl(je),ai,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Dt.setValue(L,"center",H.center),Dt.setValue(L,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(L,"normalMatrix",H.normalMatrix),Dt.setValue(L,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const $t=W.uniformsGroups;for(let yo=0,$h=$t.length;yo<$h;yo++)if(le.isWebGL2){const ll=$t[yo];Oe.update(ll,oi),Oe.bind(ll,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function Zh(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Kh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,z,k){_e.get(T.texture).__webglTexture=z,_e.get(T.depthTexture).__webglTexture=k;const W=_e.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const k=_e.get(T);k.__webglFramebuffer=z,k.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,k=0){R=T,P=z,A=k;let W=!0,H=null,Te=!1,De=!1;if(T){const ke=_e.get(T);ke.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(L.FRAMEBUFFER,null),W=!1):ke.__webglFramebuffer===void 0?b.setupRenderTarget(T):ke.__hasExternalTextures&&b.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);const qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const Ve=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?H=Ve[z][k]:H=Ve[z],Te=!0):le.isWebGL2&&T.samples>0&&b.useMultisampledRTT(T)===!1?H=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[k]:H=Ve,w.copy(T.viewport),N.copy(T.scissor),Y=T.scissorTest}else w.copy(re).multiplyScalar($).floor(),N.copy(ee).multiplyScalar($).floor(),Y=ge;if(Z.bindFramebuffer(L.FRAMEBUFFER,H)&&le.drawBuffers&&W&&Z.drawBuffers(T,H),Z.viewport(w),Z.scissor(N),Z.setScissorTest(Y),Te){const ke=_e.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,ke.__webglTexture,k)}else if(De){const ke=_e.get(T.texture),qe=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,k||0,qe)}U=-1},this.readRenderTargetPixels=function(T,z,k,W,H,Te,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){Z.bindFramebuffer(L.FRAMEBUFFER,ze);try{const ke=T.texture,qe=ke.format,Ve=ke.type;if(qe!==hn&&Q.convert(qe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===qs&&(j.has("EXT_color_buffer_half_float")||le.isWebGL2&&j.has("EXT_color_buffer_float"));if(Ve!==ei&&Q.convert(Ve)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Kn&&(le.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-W&&k>=0&&k<=T.height-H&&L.readPixels(z,k,W,H,Q.convert(qe),Q.convert(Ve),Te)}finally{const ke=R!==null?_e.get(R).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(T,z,k=0){const W=Math.pow(2,-k),H=Math.floor(z.image.width*W),Te=Math.floor(z.image.height*W);b.setTexture2D(z,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,T.x,T.y,H,Te),Z.unbindTexture()},this.copyTextureToTexture=function(T,z,k,W=0){const H=z.image.width,Te=z.image.height,De=Q.convert(k.format),ze=Q.convert(k.type);b.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment),z.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,T.x,T.y,H,Te,De,ze,z.image.data):z.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,De,z.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,W,T.x,T.y,De,ze,z.image),W===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(T,z,k,W,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=T.max.x-T.min.x+1,De=T.max.y-T.min.y+1,ze=T.max.z-T.min.z+1,ke=Q.convert(W.format),qe=Q.convert(W.type);let Ve;if(W.isData3DTexture)b.setTexture3D(W,0),Ve=L.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)b.setTexture2DArray(W,0),Ve=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const We=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xt=L.getParameter(L.UNPACK_SKIP_PIXELS),Tt=L.getParameter(L.UNPACK_SKIP_ROWS),bn=L.getParameter(L.UNPACK_SKIP_IMAGES),ht=k.isCompressedTexture?k.mipmaps[H]:k.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,T.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,T.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,T.min.z),k.isDataTexture||k.isData3DTexture?L.texSubImage3D(Ve,H,z.x,z.y,z.z,Te,De,ze,ke,qe,ht.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ve,H,z.x,z.y,z.z,Te,De,ze,ke,ht.data)):L.texSubImage3D(Ve,H,z.x,z.y,z.z,Te,De,ze,ke,qe,ht),L.pixelStorei(L.UNPACK_ROW_LENGTH,We),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bn),H===0&&W.generateMipmaps&&L.generateMipmap(Ve),Z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){P=0,A=0,R=null,Z.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Va?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===lo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?Si:wu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Si?It:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class __ extends qu{}__.prototype.isWebGL1Renderer=!0;class ja{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new ja(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ju extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Rc extends nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ki=new ct,Cc=new ct,Er=[],Pc=new Li,x_=new ct,Ts=new Ce,As=new xs;class v_ extends Ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,x_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Pc.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Pc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),As.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),e.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),Cc.multiplyMatrices(n,Ki),Ts.matrixWorld=Cc,Ts.raycast(e,Er);for(let a=0,o=Er.length;a<o;a++){const u=Er[a];u.instanceId=r,u.object=this,t.push(u)}Er.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Za extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new C,Ic=new C,Dc=new ct,$o=new Xa,br=new xs;class M_ extends St{constructor(e=new Lt,t=new Za){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Lc.fromBufferAttribute(t,s-1),Ic.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Lc.distanceTo(Ic);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;Dc.copy(s).invert(),$o.copy(e.ray).applyMatrix4(Dc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=new C,c=new C,h=new C,d=new C,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let _=f,M=v-1;_<M;_+=p){const P=g.getX(_),A=g.getX(_+1);if(l.fromBufferAttribute(m,P),c.fromBufferAttribute(m,A),$o.distanceSqToSegment(l,c,d,h)>u)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let _=f,M=v-1;_<M;_+=p){if(l.fromBufferAttribute(m,_),c.fromBufferAttribute(m,_+1),$o.distanceSqToSegment(l,c,d,h)>u)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Uc=new C,Nc=new C;class Zu extends M_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Uc.fromBufferAttribute(t,s),Nc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uc.distanceTo(Nc);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class av extends Wt{constructor(e,t,n,s,r,a,o,u,l){super(e,t,n,s,r,a,o,u,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,u=r-1,l;for(;o<=u;)if(s=Math.floor(o+(u-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)u=s-1;else{u=s;break}if(s=u,n[s]===a)return s/(r-1);const c=n[s],d=n[s+1]-c,p=(a-c)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),u=t||(a.isVector2?new he:new C);return u.copy(o).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,s=[],r=[],a=[],o=new C,u=new ct;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const c=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Mt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(u.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Mt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(u.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ka extends En{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=u}getPoint(e,t){const n=t||new he,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let u=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=u-this.aX,p=l-this.aY;u=d*c-p*h+this.aX,l=d*h+p*c+this.aY}return n.set(u,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class y_ extends Ka{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function $a(){let i=0,e=0,t=0,n=0;function s(r,a,o,u){i=r,e=o,t=-3*r+3*a-2*o-u,n=2*r-2*a+o+u}return{initCatmullRom:function(r,a,o,u,l){s(a,o,l*(o-r),l*(u-a))},initNonuniformCatmullRom:function(r,a,o,u,l,c,h){let d=(a-r)/l-(o-r)/(l+c)+(o-a)/c,p=(o-a)/c-(u-a)/(c+h)+(u-o)/h;d*=c,p*=c,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const wr=new C,Jo=new $a,Qo=new $a,ea=new $a;class Aa extends En{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),u=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:u===0&&o===r-1&&(o=r-2,u=1);let l,c;this.closed||o>0?l=s[(o-1)%r]:(wr.subVectors(s[0],s[1]).add(s[0]),l=wr);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=wr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Jo.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,g,x,m),Qo.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,g,x,m),ea.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,g,x,m)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),Qo.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),ea.initCatmullRom(l.z,h.z,d.z,c.z,this.tension));return n.set(Jo.calc(u),Qo.calc(u),ea.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Oc(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,u=i*o;return(2*t-2*n+r+a)*u+(-3*t+3*n-2*r-a)*o+r*i+t}function S_(i,e){const t=1-i;return t*t*e}function E_(i,e){return 2*(1-i)*i*e}function b_(i,e){return i*i*e}function Fs(i,e,t,n){return S_(i,e)+E_(i,t)+b_(i,n)}function w_(i,e){const t=1-i;return t*t*t*e}function T_(i,e){const t=1-i;return 3*t*t*i*e}function A_(i,e){return 3*(1-i)*i*i*e}function R_(i,e){return i*i*i*e}function Bs(i,e,t,n,s){return w_(i,e)+T_(i,t)+A_(i,n)+R_(i,s)}class Ku extends En{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bs(e,s.x,r.x,a.x,o.x),Bs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class C_ extends En{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bs(e,s.x,r.x,a.x,o.x),Bs(e,s.y,r.y,a.y,o.y),Bs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $u extends En{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P_ extends En{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends En{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Fs(e,s.x,r.x,a.x),Fs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qu extends En{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Fs(e,s.x,r.x,a.x),Fs(e,s.y,r.y,a.y),Fs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eh extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,u=s[a===0?a:a-1],l=s[a],c=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Oc(o,u.x,l.x,c.x,h.x),Oc(o,u.y,l.y,c.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var eo=Object.freeze({__proto__:null,ArcCurve:y_,CatmullRomCurve3:Aa,CubicBezierCurve:Ku,CubicBezierCurve3:C_,EllipseCurve:Ka,LineCurve:$u,LineCurve3:P_,QuadraticBezierCurve:Ju,QuadraticBezierCurve3:Qu,SplineCurve:eh});class L_ extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],u=o.getLength(),l=u===0?0:1-a/u;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,u=a.getPoints(o);for(let l=0;l<u.length;l++){const c=u[l];n&&n.equals(c)||(t.push(c),n=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new eo[s.type]().fromJSON(s))}return this}}class Ra extends L_{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new $u(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ju(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Ku(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new eh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+o,t+u,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,u){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,n,s,r,a,o,u),this}absellipse(e,t,n,s,r,a,o,u){const l=new Ka(e,t,n,s,r,a,o,u);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fo extends Lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],u=[],l=new C,c=new he;a.push(0,0,0),o.push(0,0,1),u.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(a[d]/e+1)/2,c.y=(a[d+1]/e+1)/2,u.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class fn extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:u};const l=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],d=[],p=[];let g=0;const x=[],m=n/2;let f=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function v(){const M=new C,P=new C;let A=0;const R=(t-e)/n;for(let U=0;U<=r;U++){const S=[],w=U/r,N=w*(t-e)+e;for(let Y=0;Y<=s;Y++){const te=Y/s,I=te*u+o,B=Math.sin(I),G=Math.cos(I);P.x=N*B,P.y=-w*n+m,P.z=N*G,h.push(P.x,P.y,P.z),M.set(B,R,G).normalize(),d.push(M.x,M.y,M.z),p.push(te,1-w),S.push(g++)}x.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){const w=x[S][U],N=x[S+1][U],Y=x[S+1][U+1],te=x[S][U+1];c.push(w,N,te),c.push(N,Y,te),A+=6}l.addGroup(f,A,0),f+=A}function _(M){const P=g,A=new he,R=new C;let U=0;const S=M===!0?e:t,w=M===!0?1:-1;for(let Y=1;Y<=s;Y++)h.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),g++;const N=g;for(let Y=0;Y<=s;Y++){const I=Y/s*u+o,B=Math.cos(I),G=Math.sin(I);R.x=S*G,R.y=m*w,R.z=S*B,h.push(R.x,R.y,R.z),d.push(0,w,0),A.x=B*.5+.5,A.y=G*.5*w+.5,p.push(A.x,A.y),g++}for(let Y=0;Y<s;Y++){const te=P+Y,I=N+Y;M===!0?c.push(I,I+1,te):c.push(I+1,I,te),U+=3}l.addGroup(f,U,M===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Tr=new C,Ar=new C,ta=new C,Rr=new en;class I_ extends Lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(ls*t),a=e.getIndex(),o=e.getAttribute("position"),u=a?a.count:o.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<u;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:x,b:m,c:f}=Rr;if(x.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Rr.getNormal(ta),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const _=(v+1)%3,M=h[v],P=h[_],A=Rr[c[v]],R=Rr[c[_]],U=`${M}_${P}`,S=`${P}_${M}`;S in d&&d[S]?(ta.dot(d[S].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(R.x,R.y,R.z)),d[S]=null):U in d||(d[U]={index0:l[v],index1:l[_],normal:ta.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];Tr.fromBufferAttribute(o,x),Ar.fromBufferAttribute(o,m),p.push(Tr.x,Tr.y,Tr.z),p.push(Ar.x,Ar.y,Ar.z)}this.setAttribute("position",new Je(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class th extends Ra{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ra().fromJSON(s))}return this}}const D_={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=nh(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,u,l,c,h,d,p;if(n&&(r=B_(i,e,r,t)),i.length>80*t){o=l=i[0],u=c=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<o&&(o=h),d<u&&(u=d),h>l&&(l=h),d>c&&(c=d);p=Math.max(l-o,c-u),p=p!==0?32767/p:0}return Zs(r,a,t,o,u,p,0),a}};function nh(i,e,t,n,s){let r,a;if(s===Z_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Fc(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Fc(r,i[r],i[r+1],a);return a&&po(a,a.next)&&($s(a),a=a.next),a}function Ri(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(po(t,t.next)||ft(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zs(i,e,t,n,s,r,a){if(!i)return;!a&&r&&V_(i,n,s,r);let o=i,u,l;for(;i.prev!==i.next;){if(u=i.prev,l=i.next,r?N_(i,n,s,r):U_(i)){e.push(u.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),$s(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=O_(Ri(i),e,t),Zs(i,e,t,n,s,r,2)):a===2&&F_(i,e,t,n,s,r):Zs(Ri(i),e,t,n,s,r,1);break}}}function U_(i){const e=i.prev,t=i,n=i.next;if(ft(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,u=t.y,l=n.y,c=s<r?s<a?s:a:r<a?r:a,h=o<u?o<l?o:l:u<l?u:l,d=s>r?s>a?s:a:r>a?r:a,p=o>u?o>l?o:l:u>l?u:l;let g=n.next;for(;g!==e;){if(g.x>=c&&g.x<=d&&g.y>=h&&g.y<=p&&rs(s,o,r,u,a,l,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function N_(i,e,t,n){const s=i.prev,r=i,a=i.next;if(ft(s,r,a)>=0)return!1;const o=s.x,u=r.x,l=a.x,c=s.y,h=r.y,d=a.y,p=o<u?o<l?o:l:u<l?u:l,g=c<h?c<d?c:d:h<d?h:d,x=o>u?o>l?o:l:u>l?u:l,m=c>h?c>d?c:d:h>d?h:d,f=Ca(p,g,e,t,n),v=Ca(x,m,e,t,n);let _=i.prevZ,M=i.nextZ;for(;_&&_.z>=f&&M&&M.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&rs(o,c,u,h,l,d,_.x,_.y)&&ft(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&rs(o,c,u,h,l,d,M.x,M.y)&&ft(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&rs(o,c,u,h,l,d,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&rs(o,c,u,h,l,d,M.x,M.y)&&ft(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function O_(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!po(s,r)&&ih(s,n,n.next,r)&&Ks(s,r)&&Ks(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$s(n),$s(n.next),n=i=r),n=n.next}while(n!==i);return Ri(n)}function F_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Y_(a,o)){let u=sh(a,o);a=Ri(a,a.next),u=Ri(u,u.next),Zs(a,e,t,n,s,r,0),Zs(u,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function B_(i,e,t,n){const s=[];let r,a,o,u,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,u=r<a-1?e[r+1]*n:i.length,l=nh(i,o,u,n,!1),l===l.next&&(l.steiner=!0),s.push(X_(l));for(s.sort(z_),r=0;r<s.length;r++)t=G_(s[r],t);return t}function z_(i,e){return i.x-e.x}function G_(i,e){const t=H_(i,e);if(!t)return e;const n=sh(t,i);return Ri(n,n.next),Ri(t,t.next)}function H_(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,u=s.x,l=s.y;let c=1/0,h;t=s;do r>=t.x&&t.x>=u&&r!==t.x&&rs(a<l?r:n,a,u,l,a<l?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),Ks(t,i)&&(h<c||h===c&&(t.x>s.x||t.x===s.x&&k_(s,t)))&&(s=t,c=h)),t=t.next;while(t!==o);return s}function k_(i,e){return ft(i.prev,i,e.prev)<0&&ft(e.next,i,i.next)<0}function V_(i,e,t,n){let s=i;do s.z===0&&(s.z=Ca(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,W_(s)}function W_(i){let e,t,n,s,r,a,o,u,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(u=l;o>0||u>0&&n;)o!==0&&(u===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,u--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function Ca(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function X_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Y_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!q_(i,e)&&(Ks(i,e)&&Ks(e,i)&&j_(i,e)&&(ft(i.prev,i,e.prev)||ft(i,e.prev,e))||po(i,e)&&ft(i.prev,i,i.next)>0&&ft(e.prev,e,e.next)>0)}function ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function po(i,e){return i.x===e.x&&i.y===e.y}function ih(i,e,t,n){const s=Pr(ft(i,e,t)),r=Pr(ft(i,e,n)),a=Pr(ft(t,n,i)),o=Pr(ft(t,n,e));return!!(s!==r&&a!==o||s===0&&Cr(i,t,e)||r===0&&Cr(i,n,e)||a===0&&Cr(t,i,n)||o===0&&Cr(t,e,n))}function Cr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Pr(i){return i>0?1:i<0?-1:0}function q_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ih(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ks(i,e){return ft(i.prev,i,i.next)<0?ft(i,e,i.next)>=0&&ft(i,i.prev,e)>=0:ft(i,e,i.prev)<0||ft(i,i.next,e)<0}function j_(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function sh(i,e){const t=new Pa(i.i,i.x,i.y),n=new Pa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fc(i,e,t,n){const s=new Pa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pa(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class zs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return zs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Bc(e),zc(n,e);let a=e.length;t.forEach(Bc);for(let u=0;u<t.length;u++)s.push(a),a+=t[u].length,zc(n,t[u]);const o=D_.triangulate(n,s);for(let u=0;u<o.length;u+=3)r.push(o.slice(u,u+3));return r}}function Bc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function zc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ja extends Lt{constructor(e=new th([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,u=e.length;o<u;o++){const l=e[o];a(l)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function a(o){const u=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:K_;let _,M=!1,P,A,R,U;f&&(_=f.getSpacedPoints(c),M=!0,d=!1,P=f.computeFrenetFrames(c,!1),A=new C,R=new C,U=new C),d||(m=0,p=0,g=0,x=0);const S=o.extractPoints(l);let w=S.shape;const N=S.holes;if(!zs.isClockWise(w)){w=w.reverse();for(let L=0,ue=N.length;L<ue;L++){const j=N[L];zs.isClockWise(j)&&(N[L]=j.reverse())}}const te=zs.triangulateShape(w,N),I=w;for(let L=0,ue=N.length;L<ue;L++){const j=N[L];w=w.concat(j)}function B(L,ue,j){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ue,j)}const G=w.length,$=te.length;function K(L,ue,j){let le,Z,Ae;const _e=L.x-ue.x,b=L.y-ue.y,y=j.x-L.x,F=j.y-L.y,ae=_e*_e+b*b,ne=_e*F-b*y;if(Math.abs(ne)>Number.EPSILON){const ie=Math.sqrt(ae),we=Math.sqrt(y*y+F*F),pe=ue.x-b/ie,ye=ue.y+_e/ie,Pe=j.x-F/we,Be=j.y+y/we,se=((Pe-pe)*F-(Be-ye)*y)/(_e*F-b*y);le=pe+_e*se-L.x,Z=ye+b*se-L.y;const q=le*le+Z*Z;if(q<=2)return new he(le,Z);Ae=Math.sqrt(q/2)}else{let ie=!1;_e>Number.EPSILON?y>Number.EPSILON&&(ie=!0):_e<-Number.EPSILON?y<-Number.EPSILON&&(ie=!0):Math.sign(b)===Math.sign(F)&&(ie=!0),ie?(le=-b,Z=_e,Ae=Math.sqrt(ae)):(le=_e,Z=b,Ae=Math.sqrt(ae/2))}return new he(le/Ae,Z/Ae)}const X=[];for(let L=0,ue=I.length,j=ue-1,le=L+1;L<ue;L++,j++,le++)j===ue&&(j=0),le===ue&&(le=0),X[L]=K(I[L],I[j],I[le]);const re=[];let ee,ge=X.concat();for(let L=0,ue=N.length;L<ue;L++){const j=N[L];ee=[];for(let le=0,Z=j.length,Ae=Z-1,_e=le+1;le<Z;le++,Ae++,_e++)Ae===Z&&(Ae=0),_e===Z&&(_e=0),ee[le]=K(j[le],j[Ae],j[_e]);re.push(ee),ge=ge.concat(ee)}for(let L=0;L<m;L++){const ue=L/m,j=p*Math.cos(ue*Math.PI/2),le=g*Math.sin(ue*Math.PI/2)+x;for(let Z=0,Ae=I.length;Z<Ae;Z++){const _e=B(I[Z],X[Z],le);Me(_e.x,_e.y,-j)}for(let Z=0,Ae=N.length;Z<Ae;Z++){const _e=N[Z];ee=re[Z];for(let b=0,y=_e.length;b<y;b++){const F=B(_e[b],ee[b],le);Me(F.x,F.y,-j)}}}const V=g+x;for(let L=0;L<G;L++){const ue=d?B(w[L],ge[L],V):w[L];M?(R.copy(P.normals[0]).multiplyScalar(ue.x),A.copy(P.binormals[0]).multiplyScalar(ue.y),U.copy(_[0]).add(R).add(A),Me(U.x,U.y,U.z)):Me(ue.x,ue.y,0)}for(let L=1;L<=c;L++)for(let ue=0;ue<G;ue++){const j=d?B(w[ue],ge[ue],V):w[ue];M?(R.copy(P.normals[L]).multiplyScalar(j.x),A.copy(P.binormals[L]).multiplyScalar(j.y),U.copy(_[L]).add(R).add(A),Me(U.x,U.y,U.z)):Me(j.x,j.y,h/c*L)}for(let L=m-1;L>=0;L--){const ue=L/m,j=p*Math.cos(ue*Math.PI/2),le=g*Math.sin(ue*Math.PI/2)+x;for(let Z=0,Ae=I.length;Z<Ae;Z++){const _e=B(I[Z],X[Z],le);Me(_e.x,_e.y,h+j)}for(let Z=0,Ae=N.length;Z<Ae;Z++){const _e=N[Z];ee=re[Z];for(let b=0,y=_e.length;b<y;b++){const F=B(_e[b],ee[b],le);M?Me(F.x,F.y+_[c-1].y,_[c-1].x+j):Me(F.x,F.y,h+j)}}}oe(),ve();function oe(){const L=s.length/3;if(d){let ue=0,j=G*ue;for(let le=0;le<$;le++){const Z=te[le];Re(Z[2]+j,Z[1]+j,Z[0]+j)}ue=c+m*2,j=G*ue;for(let le=0;le<$;le++){const Z=te[le];Re(Z[0]+j,Z[1]+j,Z[2]+j)}}else{for(let ue=0;ue<$;ue++){const j=te[ue];Re(j[2],j[1],j[0])}for(let ue=0;ue<$;ue++){const j=te[ue];Re(j[0]+G*c,j[1]+G*c,j[2]+G*c)}}n.addGroup(L,s.length/3-L,0)}function ve(){const L=s.length/3;let ue=0;Ee(I,ue),ue+=I.length;for(let j=0,le=N.length;j<le;j++){const Z=N[j];Ee(Z,ue),ue+=Z.length}n.addGroup(L,s.length/3-L,1)}function Ee(L,ue){let j=L.length;for(;--j>=0;){const le=j;let Z=j-1;Z<0&&(Z=L.length-1);for(let Ae=0,_e=c+m*2;Ae<_e;Ae++){const b=G*Ae,y=G*(Ae+1),F=ue+le+b,ae=ue+Z+b,ne=ue+Z+y,ie=ue+le+y;Ne(F,ae,ne,ie)}}}function Me(L,ue,j){u.push(L),u.push(ue),u.push(j)}function Re(L,ue,j){be(L),be(ue),be(j);const le=s.length/3,Z=v.generateTopUV(n,s,le-3,le-2,le-1);Ue(Z[0]),Ue(Z[1]),Ue(Z[2])}function Ne(L,ue,j,le){be(L),be(ue),be(le),be(ue),be(j),be(le);const Z=s.length/3,Ae=v.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);Ue(Ae[0]),Ue(Ae[1]),Ue(Ae[3]),Ue(Ae[1]),Ue(Ae[2]),Ue(Ae[3])}function be(L){s.push(u[L*3+0]),s.push(u[L*3+1]),s.push(u[L*3+2])}function Ue(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new eo[s.type]().fromJSON(s)),new Ja(n,e.options)}}const K_={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],u=e[n*3+1],l=e[s*3],c=e[s*3+1];return[new he(r,a),new he(o,u),new he(l,c)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],u=e[t*3+2],l=e[n*3],c=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-c)<Math.abs(a-l)?[new he(a,1-u),new he(l,1-h),new he(d,1-g),new he(x,1-f)]:[new he(o,1-u),new he(c,1-h),new he(p,1-g),new he(m,1-f)]}};function $_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Qa extends Lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],u=[],l=[],c=[];let h=e;const d=(t-e)/s,p=new C,g=new he;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),u.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,c.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const v=f+m,_=v,M=v+n+1,P=v+n+2,A=v+1;o.push(_,M,A),o.push(M,P,A)}}this.setIndex(o),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gs extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+o,Math.PI);let l=0;const c=[],h=new C,d=new C,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const v=[],_=f/n;let M=0;f===0&&a===0?M=.5/t:f===n&&u===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const A=P/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+M,1-_),v.push(l++)}c.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const _=c[f][v+1],M=c[f][v],P=c[f+1][v],A=c[f+1][v+1];(f!==0||a>0)&&p.push(_,M,A),(f!==n-1||u<Math.PI)&&p.push(M,P,A)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ht extends Lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],u=[],l=[],c=new C,h=new C,d=new C;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),c.x=e*Math.cos(x),c.y=e*Math.sin(x),d.subVectors(h,c).normalize(),u.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;a.push(x,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class to extends Lt{constructor(e=new Qu(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,u=new C,l=new he;let c=new C;const h=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),f()}function m(_){c=e.getPointAt(_/t,c);const M=a.normals[_],P=a.binormals[_];for(let A=0;A<=s;A++){const R=A/s*Math.PI*2,U=Math.sin(R),S=-Math.cos(R);u.x=S*M.x+U*P.x,u.y=S*M.y+U*P.y,u.z=S*M.z+U*P.z,u.normalize(),d.push(u.x,u.y,u.z),o.x=c.x+n*u.x,o.y=c.y+n*u.y,o.z=c.z+n*u.z,h.push(o.x,o.y,o.z)}}function f(){for(let _=1;_<=t;_++)for(let M=1;M<=s;M++){const P=(s+1)*(_-1)+(M-1),A=(s+1)*_+(M-1),R=(s+1)*_+M,U=(s+1)*(_-1)+M;g.push(P,A,U),g.push(A,R,U)}}function v(){for(let _=0;_<=t;_++)for(let M=0;M<=s;M++)l.x=_/t,l.y=M/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new to(new eo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ge extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class na extends Ge{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mo extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class J_ extends mo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ia=new ct,Gc=new C,Hc=new C;class rh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kc=new ct,Rs=new C,sa=new C;class Q_ extends rh{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rs),sa.copy(n.position),sa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sa),n.updateMatrixWorld(),s.makeTranslation(-Rs.x,-Rs.y,-Rs.z),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc)}}class Ei extends mo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Q_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ex extends rh{constructor(){super(new Gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vc extends mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new ex}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tx extends mo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wc(){return(typeof performance>"u"?Date:performance).now()}class Xc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ix extends Zu{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ye(n),s=new Ye(s);const r=t/2,a=e/t,o=e/2,u=[],l=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){u.push(-o,0,g,o,0,g),u.push(g,0,-o,g,0,o);const x=d===r?n:s;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}const c=new Lt;c.setAttribute("position",new Je(u,3)),c.setAttribute("color",new Je(l,3));const h=new Za({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);const Yc={type:"change"},ra={type:"start"},qc={type:"end"},Lr=new Xa,jc=new cn,sx=Math.cos(70*kr.DEG2RAD);class rx extends Ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",ie),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Yc),n.update(),r=s.NONE},this.update=function(){const E=new C,O=new Ti().setFromUnitVectors(e.up,new C(0,1,0)),J=O.clone().invert(),Q=new C,Se=new Ti,Oe=new C,He=2*Math.PI;return function(ce=null){const D=n.object.position;E.copy(D).sub(n.target),E.applyQuaternion(O),o.setFromVector3(E),n.autoRotate&&r===s.NONE&&N(S(ce)),n.enableDamping?(o.theta+=u.theta*n.dampingFactor,o.phi+=u.phi*n.dampingFactor):(o.theta+=u.theta,o.phi+=u.phi);let fe=n.minAzimuthAngle,de=n.maxAzimuthAngle;isFinite(fe)&&isFinite(de)&&(fe<-Math.PI?fe+=He:fe>Math.PI&&(fe-=He),de<-Math.PI?de+=He:de>Math.PI&&(de-=He),fe<=de?o.theta=Math.max(fe,Math.min(de,o.theta)):o.theta=o.theta>(fe+de)/2?Math.max(fe,o.theta):Math.min(de,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=X(o.radius):o.radius=X(o.radius*l),E.setFromSpherical(o),E.applyQuaternion(J),D.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),c.set(0,0,0));let Fe=!1;if(n.zoomToCursor&&A){let Ie=null;if(n.object.isPerspectiveCamera){const $e=E.length();Ie=X($e*l);const Qe=$e-Ie;n.object.position.addScaledVector(M,Qe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $e=new C(P.x,P.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Fe=!0;const Qe=new C(P.x,P.y,0);Qe.unproject(n.object),n.object.position.sub(Qe).add($e),n.object.updateMatrixWorld(),Ie=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ie!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ie).add(n.object.position):(Lr.origin.copy(n.object.position),Lr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Lr.direction))<sx?e.lookAt(n.target):(jc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Lr.intersectPlane(jc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Fe=!0);return l=1,A=!1,Fe||Q.distanceToSquared(n.object.position)>a||8*(1-Se.dot(n.object.quaternion))>a||Oe.distanceToSquared(n.target)>0?(n.dispatchEvent(Yc),Q.copy(n.object.position),Se.copy(n.object.quaternion),Oe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ye),n.domElement.removeEventListener("pointerdown",_e),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ie),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Xc,u=new Xc;let l=1;const c=new C,h=new he,d=new he,p=new he,g=new he,x=new he,m=new he,f=new he,v=new he,_=new he,M=new C,P=new he;let A=!1;const R=[],U={};function S(E){return E!==null?2*Math.PI/60*n.autoRotateSpeed*E:2*Math.PI/60/60*n.autoRotateSpeed}function w(E){const O=Math.abs(E)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*O)}function N(E){u.theta-=E}function Y(E){u.phi-=E}const te=function(){const E=new C;return function(J,Q){E.setFromMatrixColumn(Q,0),E.multiplyScalar(-J),c.add(E)}}(),I=function(){const E=new C;return function(J,Q){n.screenSpacePanning===!0?E.setFromMatrixColumn(Q,1):(E.setFromMatrixColumn(Q,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(J),c.add(E)}}(),B=function(){const E=new C;return function(J,Q){const Se=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;E.copy(Oe).sub(n.target);let He=E.length();He*=Math.tan(n.object.fov/2*Math.PI/180),te(2*J*He/Se.clientHeight,n.object.matrix),I(2*Q*He/Se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(te(J*(n.object.right-n.object.left)/n.object.zoom/Se.clientWidth,n.object.matrix),I(Q*(n.object.top-n.object.bottom)/n.object.zoom/Se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(E,O){if(!n.zoomToCursor)return;A=!0;const J=n.domElement.getBoundingClientRect(),Q=E-J.left,Se=O-J.top,Oe=J.width,He=J.height;P.x=Q/Oe*2-1,P.y=-(Se/He)*2+1,M.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(E){return Math.max(n.minDistance,Math.min(n.maxDistance,E))}function re(E){h.set(E.clientX,E.clientY)}function ee(E){K(E.clientX,E.clientX),f.set(E.clientX,E.clientY)}function ge(E){g.set(E.clientX,E.clientY)}function V(E){d.set(E.clientX,E.clientY),p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;N(2*Math.PI*p.x/O.clientHeight),Y(2*Math.PI*p.y/O.clientHeight),h.copy(d),n.update()}function oe(E){v.set(E.clientX,E.clientY),_.subVectors(v,f),_.y>0?G(w(_.y)):_.y<0&&$(w(_.y)),f.copy(v),n.update()}function ve(E){x.set(E.clientX,E.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(x),n.update()}function Ee(E){K(E.clientX,E.clientY),E.deltaY<0?$(w(E.deltaY)):E.deltaY>0&&G(w(E.deltaY)),n.update()}function Me(E){let O=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),O=!0;break}O&&(E.preventDefault(),n.update())}function Re(E){if(R.length===1)h.set(E.pageX,E.pageY);else{const O=q(E),J=.5*(E.pageX+O.x),Q=.5*(E.pageY+O.y);h.set(J,Q)}}function Ne(E){if(R.length===1)g.set(E.pageX,E.pageY);else{const O=q(E),J=.5*(E.pageX+O.x),Q=.5*(E.pageY+O.y);g.set(J,Q)}}function be(E){const O=q(E),J=E.pageX-O.x,Q=E.pageY-O.y,Se=Math.sqrt(J*J+Q*Q);f.set(0,Se)}function Ue(E){n.enableZoom&&be(E),n.enablePan&&Ne(E)}function L(E){n.enableZoom&&be(E),n.enableRotate&&Re(E)}function ue(E){if(R.length==1)d.set(E.pageX,E.pageY);else{const J=q(E),Q=.5*(E.pageX+J.x),Se=.5*(E.pageY+J.y);d.set(Q,Se)}p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;N(2*Math.PI*p.x/O.clientHeight),Y(2*Math.PI*p.y/O.clientHeight),h.copy(d)}function j(E){if(R.length===1)x.set(E.pageX,E.pageY);else{const O=q(E),J=.5*(E.pageX+O.x),Q=.5*(E.pageY+O.y);x.set(J,Q)}m.subVectors(x,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(x)}function le(E){const O=q(E),J=E.pageX-O.x,Q=E.pageY-O.y,Se=Math.sqrt(J*J+Q*Q);v.set(0,Se),_.set(0,Math.pow(v.y/f.y,n.zoomSpeed)),G(_.y),f.copy(v);const Oe=(E.pageX+O.x)*.5,He=(E.pageY+O.y)*.5;K(Oe,He)}function Z(E){n.enableZoom&&le(E),n.enablePan&&j(E)}function Ae(E){n.enableZoom&&le(E),n.enableRotate&&ue(E)}function _e(E){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",y)),Pe(E),E.pointerType==="touch"?we(E):F(E))}function b(E){n.enabled!==!1&&(E.pointerType==="touch"?pe(E):ae(E))}function y(E){Be(E),R.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y)),n.dispatchEvent(qc),r=s.NONE}function F(E){let O;switch(E.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Ii.DOLLY:if(n.enableZoom===!1)return;ee(E),r=s.DOLLY;break;case Ii.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;ge(E),r=s.PAN}else{if(n.enableRotate===!1)return;re(E),r=s.ROTATE}break;case Ii.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;re(E),r=s.ROTATE}else{if(n.enablePan===!1)return;ge(E),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ra)}function ae(E){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;V(E);break;case s.DOLLY:if(n.enableZoom===!1)return;oe(E);break;case s.PAN:if(n.enablePan===!1)return;ve(E);break}}function ne(E){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(E.preventDefault(),n.dispatchEvent(ra),Ee(E),n.dispatchEvent(qc))}function ie(E){n.enabled===!1||n.enablePan===!1||Me(E)}function we(E){switch(se(E),R.length){case 1:switch(n.touches.ONE){case Di.ROTATE:if(n.enableRotate===!1)return;Re(E),r=s.TOUCH_ROTATE;break;case Di.PAN:if(n.enablePan===!1)return;Ne(E),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ue(E),r=s.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(E),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ra)}function pe(E){switch(se(E),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ue(E),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;j(E),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Z(E),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(E),n.update();break;default:r=s.NONE}}function ye(E){n.enabled!==!1&&E.preventDefault()}function Pe(E){R.push(E.pointerId)}function Be(E){delete U[E.pointerId];for(let O=0;O<R.length;O++)if(R[O]==E.pointerId){R.splice(O,1);return}}function se(E){let O=U[E.pointerId];O===void 0&&(O=new he,U[E.pointerId]=O),O.set(E.pageX,E.pageY)}function q(E){const O=E.pointerId===R[0]?R[1]:R[0];return U[O]}n.domElement.addEventListener("contextmenu",ye),n.domElement.addEventListener("pointerdown",_e),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",ne,{passive:!1}),this.update()}}class ox extends ju{constructor(e=null){super();const t=new pn;t.deleteAttribute("uv");const n=new Ge({side:Vt}),s=new Ge;let r=5;e!==null&&e._useLegacyLights===!1&&(r=900);const a=new Ei(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new Ce(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const u=new Ce(t,s);u.position.set(-10.906,2.009,1.846),u.rotation.set(0,-.195,0),u.scale.set(2.328,7.905,4.651),this.add(u);const l=new Ce(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);const c=new Ce(t,s);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const h=new Ce(t,s);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const d=new Ce(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const p=new Ce(t,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const g=new Ce(t,$i(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);const x=new Ce(t,$i(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const m=new Ce(t,$i(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const f=new Ce(t,$i(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const v=new Ce(t,$i(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const _=new Ce(t,$i(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function $i(i){const e=new dn;return e.color.setScalar(i),e}function ax(){const i=window.innerWidth<900||window.matchMedia&&window.matchMedia("(pointer:coarse)").matches,e=new qu({antialias:!i,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,i?1:1.25)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!i,e.shadowMap.autoUpdate=!1,e.shadowMap.type=pu,e.toneMapping=gu,e.toneMappingExposure=1.23,e.localClippingEnabled=!0,document.body.appendChild(e.domElement);const t=new ju;t.background=new Ye(395018),t.fog=new ja(395018,40,110);const n=new Zt(40,window.innerWidth/window.innerHeight,.1,300);n.position.set(7.5,11,22);const s=new rx(n,e.domElement);s.target.set(7.5,3,0),s.enableDamping=!0,s.dampingFactor=.06,s.minDistance=6,s.maxDistance=85,s.maxPolarAngle=Math.PI*.495;const r=new wa(e);t.environment=r.fromScene(new ox,.04).texture,r.dispose();const a=new cn(new C(0,0,-1),0),o=new cn(new C(0,0,-1),0),u={clippingPlanes:[a],clipShadows:!0},l={clippingPlanes:[o],clipShadows:!0};t.add(new tx(16777215,.36)),t.add(new J_(12704756,2107702,.78));const c=new Vc(16773856,2.3);c.position.set(9,18,14),c.castShadow=!0,c.shadow.mapSize.set(i?512:1024,i?512:1024);const h=c.shadow.camera;h.left=-13,h.right=13,h.top=13,h.bottom=-13,h.near=1,h.far=80,c.shadow.bias=-5e-4,c.shadow.normalBias=.025,t.add(c),t.add(c.target);const d=new Vc(11784168,1.35);d.position.set(-12,9,-8),t.add(d),t.add(d.target);const p=new Ei(16744512,40,34,2);p.position.set(-11,5,-8),t.add(p);const g=new Ei(7321855,35,30,2);g.position.set(20,6,-6),t.add(g);const x={shell:new Ge({color:7107452,metalness:.8,roughness:.58,envMapIntensity:.9,...u}),insul:new Ge({color:14998728,metalness:.02,roughness:.98,...u}),former:new Ge({color:13815493,metalness:.04,roughness:.92,...u}),coil:new Ge({color:3810583,metalness:.92,roughness:.42,emissive:16734736,emissiveIntensity:2.3,...u}),ceramic:new Ge({color:14078666,metalness:.04,roughness:.85,...u}),tcSheath:new Ge({color:9079429,metalness:.9,roughness:.4}),terminal:new Ge({color:12105904,metalness:.95,roughness:.35}),steel:new Ge({color:12831957,metalness:1,roughness:.24,envMapIntensity:1.5}),steel2:new Ge({color:9674152,metalness:1,roughness:.38,envMapIntensity:1.3}),steel3:new Ge({color:5989229,metalness:1,roughness:.52,envMapIntensity:1.1}),dark:new Ge({color:1316378,metalness:.55,roughness:.62}),copper:new Ge({color:12088115,metalness:1,roughness:.3,envMapIntensity:1.7}),rubber:new Ge({color:790033,metalness:.1,roughness:.94}),hoseBlue:new Ge({color:1396896,metalness:.1,roughness:.72}),hoseRed:new Ge({color:9053208,metalness:.1,roughness:.72}),glass:new na({color:14677247,metalness:0,roughness:.03,transparent:!0,opacity:.11,depthWrite:!1,envMapIntensity:2.6,clearcoat:1,clearcoatRoughness:.02,side:Kt}),graphite:new Ge({color:3356476,metalness:.45,roughness:.72}),graphiteDark:new Ge({color:2106151,metalness:.4,roughness:.8}),substrate:new Ge({color:7190760,metalness:.75,roughness:.2,emissive:666180,emissiveIntensity:1}),ledG:new Ge({color:6661,emissive:3604344,emissiveIntensity:3.5}),ledA:new Ge({color:1707264,emissive:16752682,emissiveIntensity:3.5}),ledR:new Ge({color:1705221,emissive:16722474,emissiveIntensity:3}),bubblerGlass:new na({color:13625855,metalness:0,roughness:.04,transparent:!0,opacity:.18,clearcoat:1,clearcoatRoughness:.02}),oil:new Ge({color:2785238,metalness:.2,roughness:.15,emissive:670314,emissiveIntensity:.9}),bubble:new na({color:14677247,metalness:0,roughness:.05,transparent:!0,opacity:.55,clearcoat:1}),pd:new Ge({color:12568528,metalness:1,roughness:.22,envMapIntensity:1.6}),hotPd:new Ge({color:3349e3,emissive:16734741,emissiveIntensity:1.8,roughness:.5}),gaugeFace:new Ge({color:15789538,metalness:.05,roughness:.85}),alum:new Ge({color:13161180,metalness:.85,roughness:.4,envMapIntensity:1.2,...l}),resist:new Ge({color:13649968,metalness:.1,roughness:.7,emissive:4198408,emissiveIntensity:.5}),beam:new dn({color:9429247,transparent:!0,opacity:0,depthWrite:!1}),plasma:new dn({color:11591935,transparent:!0,opacity:0,depthWrite:!1,blending:Us}),plasmaCore:new dn({color:14742783,transparent:!0,opacity:0,depthWrite:!1,blending:Us}),vpGlow:new dn({color:8373503,transparent:!0,opacity:0,depthWrite:!1,blending:Us}),sput:new dn({color:13689072,transparent:!0,opacity:.8})};return{renderer:e,scene:t,camera:n,controls:s,clipPlane:a,clipPlaneIMM:o,MAT:x,keyLight:c,fill:d,rimLPE:p,rimIMM:g,lowPower:i}}function lx(i){const e=(u,l,c,h,d=32,p=!1)=>new Ce(new fn(u,l,c,d,1,p),h),t=(u,l,c,h)=>new Ce(new pn(u,l,c),h),n=new fn(.026,.026,.055,6);function s(u,l,c=i.steel3,h="x"){const d=new v_(n,c,l),p=new St;for(let g=0;g<l;g++){const x=g/l*Math.PI*2;p.position.set(0,0,0),p.rotation.set(0,0,0),h==="x"?(p.rotation.z=Math.PI/2,p.position.set(0,Math.cos(x)*u,Math.sin(x)*u)):p.position.set(Math.cos(x)*u,0,Math.sin(x)*u),p.updateMatrix(),d.setMatrixAt(g,p.matrix)}return d.instanceMatrix.needsUpdate=!0,d}function r(u,l,c,h=32,d=8){const p=new Aa(u.map(g=>new C(...g)));return new Ce(new to(p,h,l,d,!1),c)}function a(u,l,c,h,d,p){const g=[],x=Math.round(h*12);for(let f=0;f<=x;f++){const v=f/x,_=v*h*Math.PI*2;g.push(new C(l+v*(c-l),Math.cos(_)*u,Math.sin(_)*u))}const m=new Aa(g);return new Ce(new to(m,x*2,d,5,!1),p)}function o(u,l,c,h,d=32){const p=new th;p.absarc(0,0,l,0,Math.PI*2,!1);const g=new Ra;g.absarc(0,0,u,0,Math.PI*2,!0),p.holes.push(g);const x=new Ja(p,{depth:c,bevelEnabled:!1,curveSegments:d});return x.translate(0,0,-c/2),x.rotateY(Math.PI/2),new Ce(x,h)}return{cyl:e,box:t,boltRing:s,tubeAlong:r,makeCoil:a,annularTube:o}}const Gs=.42,La=12.6,Hs=6.3,cx=.55,oa=.8,Zc=.82,Kc=1.6,jt=1.65,ks=[-.88,-.44,0,.44,.88],Ir=1.13,$n=1.3,no=-1.3,ux=.22,hx=.22,Ji=.1,dx=.22,Wr=-.3,Vs=Wr+.001,$c=.02,Dr=.18,es=-.272,Jc=.06,Qc=.05,fx=.06,On=[{mat:"Ga melt",color:12633288,glow:.35,thickness:null},{mat:"GaAs (buffer)",color:14213352,glow:.8,thickness:1},{mat:"Al₀.₃Ga₀.₇As",color:13154472,glow:.9,thickness:.5},{mat:"GaAs (active)",color:14542318,glow:.85,thickness:.1},{mat:"Al₀.₃Ga₀.₇As",color:13154472,glow:.9,thickness:.5}],xn=[{x:-3.525,len:2.3,role:"end"},{x:-1.175,len:2.3,role:"main"},{x:1.175,len:2.3,role:"main"},{x:3.525,len:2.3,role:"end"}];function px({scene:i,MAT:e,clipPlane:t,cyl:n,box:s,boltRing:r,tubeAlong:a,makeCoil:o,annularTube:u}){const l=On.map(q=>new Ge({color:q.color,metalness:.95,roughness:.1,emissive:3348480,emissiveIntensity:.45+q.glow*.3})),c=On.map(q=>.45+q.glow*.3),h=new lt;h.position.y=2.65,i.add(h);const d=new lt;h.add(d);const p=-1.36,g=-2.65,x=p-g;for(const q of[-4.55,4.55]){for(const O of[-.7,.7]){const J=s(.13,x,.13,e.steel3);J.position.set(q,(p+g)/2,O),d.add(J);const Q=n(.17,.2,.06,e.dark,14);Q.position.set(q,g+.03,O),d.add(Q)}const E=s(.11,.11,1.55,e.steel3);E.position.set(q,p,0),d.add(E)}for(const q of[-.7,.7]){const E=s(9.25,.14,.14,e.steel3);E.position.set(0,-1.29,q),d.add(E)}const m=[],f=[];xn.forEach((q,E)=>{const O=q.x,J=q.len,Q=u(Kc,jt,J,e.shell,40);Q.position.x=O,h.add(Q);const Se=u(Zc+.02,Kc,J-.02,e.insul,32);Se.position.x=O,h.add(Se);const Oe=u(cx,oa,J-.04,e.former,32);Oe.position.x=O,h.add(Oe);const He=e.coil.clone();He.clippingPlanes=[t],He.clipShadows=!0;const Le=o(Zc,O-J/2+.1,O+J/2-.1,15,.024,He);h.add(Le),m.push(Le);const ce=n(.045,.045,.12,e.ceramic,10);ce.position.set(O,-jt-.02,0),h.add(ce);const D=n(.018,.018,jt-oa+.1,e.tcSheath,10);D.position.set(O,-2.45/2,0),h.add(D);const fe=n(.024,.024,.03,e.copper,8);fe.position.set(O,-oa-.02,0),h.add(fe);const de=new Ei(16738858,9,5.4,2);de.position.set(O,-.05,-.6),h.add(de),f.push(de)});for(const q of[-1,1]){const E=q*(xn[3].x+xn[3].len/2),O=u(Gs+.02,jt,.06,e.steel2,32);O.position.x=E,h.add(O);const J=r(jt-.08,12,e.steel3);J.position.x=E+q*.04,h.add(J)}for(const q of[-3.5,3.5]){const E=new Ce(new Ht(jt+.04,.055,6,24,Math.PI*.8),e.steel2);E.rotation.y=Math.PI/2,E.rotation.z=-Math.PI*.9,E.position.set(q,0,0),d.add(E)}const v=n(Gs,Gs,La,e.glass,40,!0);v.rotation.z=Math.PI/2,v.renderOrder=10,v.castShadow=!1,v.receiveShadow=!1,h.add(v);function _(q,E){const O=new lt;O.position.x=q;const J=n(.62,.62,.1,e.steel2,32);J.rotation.z=Math.PI/2,O.add(J);const Q=new Ce(new Ht(.5,.045,6,24),e.rubber);Q.rotation.y=Math.PI/2,Q.position.x=-E*.06,O.add(Q);const Se=n(.5,.46,.16,e.steel2,32);Se.rotation.z=Math.PI/2,Se.position.x=E*.13,O.add(Se);const Oe=r(.55,16);Oe.position.x=E*.055,O.add(Oe);const He=new Ce(new Ht(.56,.024,6,24),e.copper);He.rotation.y=Math.PI/2,He.position.x=E*.02,O.add(He);const Le=-.55,ce=.3;return O.add(a([[E*.02,Le,ce],[E*.08,Le-.3,ce+.05],[E*.15,Le-.7,ce+.1],[E*.22,Le-1.1,ce+.18],[E*.28,Le-1.55,ce+.28],[E*.32,Le-2.1,ce+.35]],.032,e.hoseBlue,32)),O.add(a([[E*.02,Le,-ce],[E*.08,Le-.3,-ce-.05],[E*.15,Le-.7,-ce-.1],[E*.22,Le-1.1,-ce-.18],[E*.28,Le-1.55,-ce-.28],[E*.32,Le-2.1,-ce-.35]],.032,e.hoseRed,32)),h.add(O),O}const M=_(-Hs,-1),P=_(Hs,1),A=new lt;h.add(A);const R=s(5.6,.08,.55,e.graphiteDark);R.position.set(0,Wr-.04,0),A.add(R);for(const[q,E,O,J]of[[0,.12,.27,.03],[0,-.12,.27,.03],[.12,0,.03,.27],[-.12,0,.03,.27]]){const Q=s(O,.008,J,e.graphite);Q.position.set(q,Wr+.004,E),A.add(Q)}const U=s(Dr,$c,Dr,e.substrate);U.position.set(0,Vs-$c/2,0),A.add(U);const S=new Ce(new Qa(.13,.15,24),new dn({color:8373503,transparent:!0,opacity:.3,side:Kt}));S.rotation.x=-Math.PI/2,S.position.set(0,Wr+8e-4,0),A.add(S);const w=new lt;A.add(w);const N=[],Y=Vs+8e-4;let te=0;const I=.002,B=.006;On.forEach((q,E)=>{if(q.thickness===null){N[E]=null;return}const O=I+q.thickness*B,J=new Ge({color:q.color,metalness:.85,roughness:.15,emissive:q.color,emissiveIntensity:.12}),Q=new Ce(new pn(Dr*.86,1,Dr*.86),J);Q.scale.y=1e-4,Q.position.y=Y+te,Q.visible=!1,w.add(Q),N[E]={mesh:Q,material:J,height:O,baseY:Y+te,deposited:!1,active:!1},te+=O});const G=new Ce(new fn(Qc,Qc,1,16),new Ge({color:12633288,metalness:.95,roughness:.1,emissive:3348480,emissiveIntensity:.9}));G.visible=!1,A.add(G);const $=new Ce(new fn(.1,.1,.003,24,1,!0),new dn({color:8378111,transparent:!0,opacity:0,side:Kt}));A.add($);const K=new Ei(8378111,0,1.4,2);K.position.set(0,Vs+.15,0),A.add(K);const X=new lt;X.position.x=$n,A.add(X);for(const q of[-1,1]){const E=s(.14,Ji,.44,e.graphite);E.position.set(q*(Ir-.07),es+Ji/2,0),X.add(E)}for(let q=0;q<4;q++){const E=(ks[q]+ks[q+1])/2,O=s(dx,Ji,.44,e.graphite);O.position.set(E,es+Ji/2,0),X.add(O)}const re=[];On.forEach((q,E)=>{const O=s(ux-.005,Jc,hx-.005,l[E]);O.position.set(ks[E],es+Jc/2,0),X.add(O),re.push({mesh:O,baseY:O.position.y})});const ee=new Ei(16747066,3.2,2.6,2);ee.position.set(0,es+Ji*.6,0),X.add(ee);const ge=es+Ji/2,V=7,oe=n(.03,.03,V,e.graphiteDark,12);oe.rotation.z=Math.PI/2,oe.position.set(Ir+V/2,ge,0),X.add(oe);const ve=n(.085,.085,.22,e.steel2,14);ve.rotation.z=Math.PI/2,ve.position.set(Ir+V+.11,ge,0),X.add(ve);const Ee=n(.12,.12,.06,e.copper,14);Ee.rotation.z=Math.PI/2,Ee.position.set(Ir+V+.25,ge,0),X.add(Ee);const Me=new lt;Me.position.set(Hs+.12,ge,0),h.add(Me);for(let q=0;q<9;q++){const E=new Ce(new Ht(.135,.026,6,16),e.steel3);E.rotation.y=Math.PI/2,E.position.x=q*.052,Me.add(E)}const Re=new lt;h.add(Re),M.add(a([[0,0,0],[-.4,0,.05],[-.4,-.75,.2],[-.4,-1.3,.2]],.055,e.steel3,32));const Ne=n(.11,.11,.2,e.copper,14);Ne.position.set(-.4,-.85,.2),Ne.rotation.x=Math.PI/2,M.add(Ne);const be=new Ce(new Ht(.1,.022,6,16),e.copper);be.position.set(-.4,-.85,.2),be.rotation.x=Math.PI/2,M.add(be);const Ue=new lt;Ue.position.set(-7.6,-.65,.15),Re.add(Ue);const L=n(.075,.075,1.1,e.pd,16);L.rotation.z=Math.PI/2,Ue.add(L);const ue=n(.1,.1,.55,e.hotPd,16);ue.rotation.z=Math.PI/2,Ue.add(ue);const j=new lt;j.position.set(-6.6,.1,.2),j.rotation.y=-.25,Re.add(j);const le=new Ce(new fo(.105,20),e.gaugeFace);le.position.z=.001,j.add(le);const Z=new Ce(new Ht(.11,.011,6,20),e.steel2);j.add(Z);const Ae=new lt;Ae.position.set(-6.05,-.55,.2),Re.add(Ae);for(let q=0;q<2;q++){const E=s(.34,.22,.24,e.dark);E.position.set(q*.44,0,0),Ae.add(E)}Re.add(a([[-7.6,-.65,.15],[-7.1,-.65,.18],[-6.8,-.55,.2],[-6.6,-.3,.2],[-6.6,0,.2]],.03,e.steel3,32)),Re.add(a([[-6.6,.1,.2],[-6.45,.05,.2],[-6.25,-.2,.2],[-6.05,-.3,.2],[-6.05,-.4,.2]],.03,e.steel3,32)),Re.add(a([[-6.05,-.66,.2],[-6.05,-.85,.2],[-5.83,-.85,.2],[-5.61,-.85,.2],[-5.61,-.66,.2]],.03,e.steel3,32)),Re.add(a([[-5.83,-.85,.2],[-5.83,-1.2,.22],[-6,-1.5,.22],[-6.4,-1.5,.22],[-6.6,-1.4,.2],[-6.7,-1.3,.2]],.03,e.steel3,48));const _e=new lt;_e.position.set(7.05,-1.55,.2),h.add(_e),P.add(a([[0,.3,0],[.35,.1,.1],[.6,-.4,.15],[.75,-.9,.18],[.75,-1.33,.2]],.045,e.steel3,32));const b=n(.13,.13,.4,e.bubblerGlass,16);_e.add(b);const y=n(.115,.115,.18,e.oil,16);y.position.y=-.1,_e.add(y);const F=[];for(let q=0;q<14;q++){const E=.01+Math.random()*.008,O=new Ce(new gs(E,5,4),e.bubble);O.userData={phase:Math.random(),speed:.55+Math.random()*.55,baseX:(Math.random()-.5)*.11},O.position.set(O.userData.baseX,-.19,(Math.random()-.5)*.11),_e.add(O),F.push(O)}const ae=s(2.8,.72,.04,e.steel3);ae.position.set(-2.3,-.95,.8),h.add(ae);const ne=new lt;ne.position.set(-2.5,-.88,.86),h.add(ne);const ie=s(.9,.42,.16,e.dark);ne.add(ie);const we=[];for(let q=0;q<4;q++){const E=-.315+q*.21,O=s(.14,.028,.003,new Ge({color:6661,emissive:16734736,emissiveIntensity:2}));O.position.set(E,.09,.083),ne.add(O);const J=s(.14,.024,.003,new Ge({color:6661,emissive:3604344,emissiveIntensity:1.8}));J.position.set(E,.045,.083),ne.add(J),we.push({pvStrip:O,svStrip:J})}const pe=new lt;pe.position.set(-1.55,-.88,.86),h.add(pe);const ye=s(.55,.34,.2,e.dark);pe.add(ye);const Pe=new lt;Pe.position.set(-3.35,-.88,.86),h.add(Pe);const Be=s(.28,.24,.14,e.dark);Pe.add(Be);const se=new Ce(new gs(.018,6,4),e.ledR);return se.position.set(.08,.04,.071),Pe.add(se),{machine:h,zoneCoils:m,zoneLights:f,growthLayers:N,growthLayersGroup:w,contactRing:$,meltBridge:G,melts:re,sliderGroup:X,subRing:S,substrate:U,growthLight:K,sliderGlow:ee,bubbles:F,pidScreens:we,otcLed:se,inletWheel:be,meltMats:l,baseMeltEmissive:c}}function mx({scene:i,MAT:e,cyl:t,box:n,annularTube:s,tubeAlong:r}){const a=new lt;a.position.set(16,0,0),i.add(a);const o=1.8,u=3.4,l=3.4,c=l-u/2,h=e.steel3;for(const q of[-2.2,2.2])for(const E of[-2.2,2.2]){const O=n(.16,c-.06,.16,h);O.position.set(q,(c-.06)/2+.06,E),a.add(O);const J=t(.19,.22,.06,e.dark,12);J.position.set(q,.03,E),a.add(J)}for(const q of[-2.2,2.2]){const E=n(.3,.18,4.9,e.dark);E.position.set(q,.09,0),a.add(E);const O=n(.12,.12,4.4,h);O.position.set(q,1.05,0),a.add(O)}for(const q of[-2.2,2.2]){const E=n(4.6,.12,.12,h);E.position.set(0,.2,q),a.add(E);const O=n(4.52,.11,.11,h);O.position.set(0,1.4,q),a.add(O)}const d=new Ce(new Ht(o+.1,.09,8,40),e.steel2);d.rotation.x=Math.PI/2,d.position.y=c-.015,a.add(d);for(const[q,E]of[[-2.2,-2.2],[-2.2,2.2],[2.2,-2.2],[2.2,2.2]]){const O=Math.hypot(q,E),J=new C(q*.78/O*2.45,c-.015,E*.78/O*2.45),Q=new C(q,c-.015,E),Se=Q.clone().sub(J),Oe=n(Se.length(),.1,.1,h);Oe.position.copy(J).add(Q).multiplyScalar(.5),Oe.quaternion.setFromUnitVectors(new C(1,0,0),Se.normalize()),a.add(Oe)}const p=n(1.3,.56,1.36,e.dark);p.position.set(0,.28,0),a.add(p);for(const q of[-.53,.53]){const E=n(.06,.5,1.4,e.steel2);E.position.set(q,.3,0),a.add(E)}const g=s(o-.08,o,u,e.alum,36);g.rotation.z=Math.PI/2,g.position.y=l,a.add(g);const x=t(o+.1,o+.1,.08,e.steel2,36);x.position.y=l+u/2,a.add(x);const m=t(o+.1,o+.1,.08,e.steel2,36);m.position.y=l-u/2,a.add(m);const f=l+u/2+1,v=t(.75,.75,.6,e.steel2,20);v.position.y=f,a.add(v);const _=t(.85,.85,.1,e.steel3,20);_.position.y=f+.35,a.add(_);for(let q=0;q<3;q++){const E=new Ce(new Ht(.55,.02,5,16),e.steel);E.rotation.x=Math.PI/2,E.position.y=f-.32-q*.03,a.add(E)}a.add(r([[0,f+.4,0],[0,f+1.2,0],[.6,f+1.6,.3],[1.5,f+1.7,.5]],.06,e.rubber,16));const M=t(.25,.25,1.2,e.steel2,14);M.position.set(2.6,2.2,.4),a.add(M);const P=t(.1,.1,.1,e.copper,8);P.position.set(2.6,2.85,.4),a.add(P),a.add(r([[.7,f,0],[1.2,f,0],[1.6,f-.2,0],[2.1,f-.9,.15],[2.4,2.5,.3],[2.6,2.8,.4]],.05,e.steel3,24));const A=l-.3,R=t(.75,.75,.1,e.steel2,20),U=new lt;U.position.y=A,a.add(U),R.position.y=0,U.add(R);const S=t(.1,.1,1.5,e.steel3,10);S.position.y=A-.75,a.add(S);const w=t(.3,.3,.35,e.dark,12);w.position.y=l-u/2-.4,a.add(w);const N=t(.35,.35,.3,e.steel2,14);N.rotation.x=Math.PI/2,N.position.set(0,l+.3,o+.15),a.add(N);const Y=t(.28,.28,.02,e.glass,14);Y.rotation.x=Math.PI/2,Y.position.set(0,l+.3,o+.31),a.add(Y);const te=new Ce(new fo(.24,20),e.vpGlow);te.position.set(0,l+.3,o+.32),a.add(te);const I=n(.14,1.55,.14,h);I.position.set(o+.64,2.24,0),a.add(I);const B=n(1.2,.1,.12,h);B.position.set(o+.16,1.65,0),a.add(B);const G=n(.2,.86,.86,e.steel3);G.position.set(o+.12,l,0),a.add(G);const $=t(.4,.4,.6,e.steel2,14);$.rotation.z=Math.PI/2,$.position.set(o+.4,l,0),a.add($);for(const q of[o+.12,o+.72]){const E=t(.48,.48,.075,e.flange??e.steel2,18);E.rotation.z=Math.PI/2,E.position.set(q,l,0),a.add(E)}const K=t(.12,.12,.15,e.copper,8);K.position.set(o+.8,l,0),a.add(K);const X=t(.45,.45,.5,e.steel2,16);X.position.y=l-u/2-.7,a.add(X);for(let q=0;q<4;q++){const E=new Ce(new Ht(.47,.02,4,14),e.steel3);E.rotation.x=Math.PI/2,E.position.y=l-u/2-.5-q*.1,a.add(E)}const re=t(.35,.3,.25,e.dark,12);re.position.y=l-u/2-1.1,a.add(re);const ee=new lt;ee.position.set(0,.06,0),ee.userData.mountedOnStage=!0,U.add(ee);const ge=n(1,.08,.8,e.substrate);ee.add(ge);let V=.04;const oe=.04,ve=.1,Ee=.18,Me=(.9-Ee)/2,Re=Ee/2+Me/2,Ne=[];On.forEach((q,E)=>{if(q.thickness===null){Ne[E]=null;return}const O=oe+q.thickness*ve,J=()=>new Ge({color:q.color,metalness:.8,roughness:.2,emissive:q.color,emissiveIntensity:.1}),Q=.04+V+O/2,Se=new Ce(new pn(Ee,O,.7),J());Se.position.set(0,Q,0),ee.add(Se);const Oe=[-Re,Re].map(He=>{const Le=new Ce(new pn(Me,O,.7),J());return Le.position.set(He,Q,0),ee.add(Le),Le});Ne[E]={meshes:Oe,baseY:.04+V,h:O,t:q.thickness},V+=O});const be=.04+V,Ue=.27,L=n(Ee,Ue,.7,e.resist);L.position.set(0,be+Ue/2,0),ee.add(L);for(const[q,E]of[[-.5,-.4],[.5,-.4],[-.5,.4],[.5,.4]]){const O=n(.1,.03,.1,e.steel3);O.position.set(q,.015,E),ee.add(O)}const ue=new Ce(new fn(.7,.7,.66,24,1,!0),e.glass);ue.position.y=l+u/2+.47,a.add(ue);const j=new Ge({color:3349e3,emissive:16742944,emissiveIntensity:0}),le=new Ce(new Ht(.12,.012,6,16),j);le.rotation.x=Math.PI/2,le.position.set(.68,l+u/2-.38,0),a.add(le);const Z=A+1.05,Ae=new Ge({color:10135476,metalness:.9,roughness:.35,emissive:16738848,emissiveIntensity:0}),_e=q=>{const E=new lt;E.position.set(q*.78,Z,0);const O=n(.78,.03,1.6,Ae);return O.position.x=-q*.39,E.add(O),a.add(E),E},b=_e(-1),y=_e(1),F=n(1.1,.5,.6,e.dark);F.position.set(-3,.25,0),a.add(F),a.add(r([[0,.45,0],[0,.4,0],[-1.5,.4,0],[-2.4,.4,0]],.07,e.steel3,16));const ae=t(.13,.13,.5,e.steel2,14);ae.rotation.z=Math.PI/2,ae.position.set(-2.05,l-.9,0),a.add(ae);const ne=t(.05,.05,2,e.steel3,10);ne.rotation.z=Math.PI/2,ne.position.set(0,A-.09,0),a.add(ne);for(const q of[-1,1]){const E=n(.12,.3,.2,e.steel3);E.position.set(q,A-.2,0),a.add(E)}const ie=f-.4,we=A+.8,pe=new Ce(new fn(.55,.68,ie-we,20,1,!0),e.beam);pe.position.y=(ie+we)/2,a.add(pe);const ye=new Ce(new gs(.55,14,10),e.plasma);ye.position.y=f-.35,a.add(ye);const Pe=new Ce(new gs(.3,12,8),e.plasmaCore);Pe.position.y=f-.35,a.add(Pe);const Be=[];for(let q=0;q<24;q++){const E=new fn(.002,.01,.1,3),O=new Ce(E,e.sput.clone());O.visible=!1,a.add(O),Be.push({mesh:O,age:1,vx:0,vy:0,vz:0})}a.userData.ionMillAssembly={supportedAtFloor:!0,chamberBottomY:c,supportTopY:c,preloadedWafer:!0,loadLockBracket:!0,pumpPedestal:!0};const se=new Ei(7321855,0,6,2);return se.position.set(0,l,0),a.add(se),{IMM:a,etchL:Ne,wafer:ee,resist:L,MASK_TOP:be,RES_H:Ue,tiltG:U,beamCone:pe,plasma:ye,plasmaCore:Pe,sputters:Be,chamberLight:se,neutMat:j,leafL:b,leafR:y,shutterMat:Ae,shutterY:Z,BT:ie,BB:we,stg:R,RW:Ee,FW:Me,vpGlow:te}}function gx(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,u=new Lt;let l=0;for(let c=0;c<i.length;++c){const h=i[c];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;u.addGroup(l,p,c),l+=p}}if(t){let c=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+c);c+=i[d].attributes.position.count}u.setIndex(h)}for(const c in r){const h=eu(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;u.setAttribute(c,h)}for(const c in a){const h=a[c][0].length;if(h===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[c]=[];for(let d=0;d<h;++d){const p=[];for(let x=0;x<a[c].length;++x)p.push(a[c][x][d]);const g=eu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;u.morphAttributes[c].push(g)}}return u}function eu(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const c=i[l];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.array.length}const a=new e(r);let o=0;for(let l=0;l<i.length;++l)a.set(i[l].array,o),o+=i[l].array.length;const u=new nn(a,t,n);return s!==void 0&&(u.gpuType=s),u}function el(i,{exclude:e=new Set}={}){var l;if(!(i!=null&&i.isGroup))throw new TypeError("Expected a THREE.Group");const t=i.children.filter(c=>c.isMesh||c.isInstancedMesh).length;if(typeof window<"u"&&window.__foundryDisableBatching)return Object.freeze({before:t,after:t,mergedGroups:0,mergedMeshes:0,savedDrawCalls:0,verifiedTriangleIndices:0});const n=new Map;for(const c of[...i.children]){if(!c.isMesh||c.isInstancedMesh||c.isSkinnedMesh||e.has(c)||c.userData.noStaticMerge||Array.isArray(c.material)||c.material.transparent||c.material.isMeshBasicMaterial||c.geometry.morphAttributes&&Object.values(c.geometry.morphAttributes).some(g=>g==null?void 0:g.length))continue;const h=Object.entries(c.geometry.attributes).sort(([g],[x])=>g.localeCompare(x));if(!h.length)continue;const d=h.map(([g,x])=>g+":"+x.itemSize+":"+x.normalized+":"+x.array.constructor.name).join("|"),p=c.material.uuid+";"+(c.geometry.index?"indexed":"nonindexed")+";"+d;n.has(p)||n.set(p,[]),n.get(p).push(c)}let s=0,r=0,a=0,o=0;for(const c of n.values()){if(c.length<2)continue;const h=[];try{for(const m of c){m.updateMatrix();const f=m.geometry.clone();f.applyMatrix4(m.matrix),h.push(f)}const d=gx(h,!1);if(!d)continue;const p=h.reduce((m,f)=>{var v;return m+(((v=f.index)==null?void 0:v.count)??f.attributes.position.count)},0),g=((l=d.index)==null?void 0:l.count)??d.attributes.position.count;if(p!==g)throw new Error("Static batch changed triangle topology");o+=p;const x=new Ce(d,c[0].material);x.name="Static detail batch ("+c.length+" identical-material meshes)",x.castShadow=c.some(m=>m.castShadow),x.receiveShadow=c.some(m=>m.receiveShadow),i.add(x);for(const m of c)i.remove(m);r++,a+=c.length,s+=c.length-1}finally{for(const d of h)d.dispose()}}const u=i.children.filter(c=>c.isMesh||c.isInstancedMesh).length;return Object.freeze({before:t,after:u,mergedGroups:r,mergedMeshes:a,savedDrawCalls:s,verifiedTriangleIndices:o})}const oh=110,aa=2;function _x(i){const e=Object.entries(i);if(!e.length)throw new RangeError("At least one equipment bay is required");const t=e.map(([h,d])=>{const p=d.width??(h==="lpe"?13:8);if(!Number.isFinite(d.x)||!Number.isFinite(p)||p<=0)throw new RangeError("Invalid equipment bay dimensions: "+h);return{key:h,x:d.x,width:p,min:d.x-p/2,max:d.x+p/2}}),n=Math.min(...t.map(h=>h.min)),s=Math.max(...t.map(h=>h.max)),r=(n+s)/2,a=s-n,o=n-16,u=s+16,l=u-o,c=Math.ceil(Math.max(400,a*4+200)/(2*aa))*(2*aa);return Object.freeze({minX:n,maxX:s,centerX:r,span:a,wallMinX:o,wallMaxX:u,wallWidth:l,floorSize:c,gridSize:c,gridDivisions:c/aa,footprint:t})}function ah(i,e,t){if(e<=0||t<=0)throw new RangeError("Invalid viewport");const n=e/t,s=n<.85?72:n<1.1?56:40,r=Math.atan(Math.tan(s*Math.PI/360)*n),a=Math.max(64,(i.span/2+8)/Math.tan(r)),o=Math.max(18.75,a*.245),u=Math.max(oh,Math.ceil(a*1.5));return Object.freeze({centerX:i.centerX,targetY:3.25,fov:s,distance:a,height:o,fogFar:u,maxDistance:Math.max(85,a*1.22)})}const In=Object.freeze({lpe:{x:0,name:"Liquid phase epitaxy"},imm:{x:16,name:"Ion beam mill"},mbe:{x:30,name:"Molecular beam epitaxy"},cmp:{x:46,name:"Chemical mechanical planarization"},litho:{x:62,name:"ArF immersion photolithography"},spin:{x:78,name:"Photoresist spin coater",width:8},implant:{x:94,name:"Ion implanter",width:11}});function xx(i,{batchProxies:e=!0}={}){const t=new lt;t.name="Foundry room",i.add(t);const n=new Ge({color:1516593,metalness:.65,roughness:.62}),s=new Ge({color:5859962,metalness:.75,roughness:.42}),r=new Ge({color:9149611,metalness:.7,roughness:.46}),a=new Ge({color:7107452,metalness:.8,roughness:.58}),o=new Ge({color:11908010,metalness:.05,roughness:.85}),u=new Ge({color:8742220,metalness:.66,roughness:.48}),l=(v,_,M,P,A,R,U,S,w)=>{const N=new Ce(new pn(M,P,A),R);return N.name=_,N.position.set(U,S,w),v.add(N),N},c=(v,_,M,P,A,R,U,S,w,N=14,Y="y")=>{const te=new Ce(new fn(M,P,A,N),R);return te.name=_,te.position.set(U,S,w),Y==="x"&&(te.rotation.z=Math.PI/2),Y==="z"&&(te.rotation.x=Math.PI/2),v.add(te),te},h=(v,_,M,P,A,R,U,S,w="y")=>{const N=new Ce(new Ht(M,P,5,18),A);return N.name=_,N.position.set(R,U,S),w==="x"?N.rotation.y=Math.PI/2:w==="y"&&(N.rotation.x=Math.PI/2),v.add(N),N},d=_x(In),p=new Ce(new uo(d.floorSize,d.floorSize),new Ge({color:1186340,roughness:.72,metalness:.35}));p.name="room-ground-plane",p.rotation.x=-Math.PI/2,p.position.x=d.centerX,p.receiveShadow=!0,t.add(p);const g=new ix(d.gridSize,d.gridDivisions,2638943,1516853);g.name="room-continuous-grid",g.position.set(d.centerX,.003,0),g.material.transparent=!0,g.material.opacity=.48,t.add(g);const x=l(t,"room-rear-wall",d.wallWidth,11,.18,n,(d.wallMinX+d.wallMaxX)/2,5.5,-9.8);x.material=new dn({color:1384750,fog:!0,side:Kt});for(let v=d.wallMinX+12;v<d.wallMaxX-3;v+=15)l(t,"room-wall-support",.15,10.5,.22,s,v,5.25,-9.4);const m={},f={};for(const[v,_]of Object.entries(In)){const M=_.width??(v==="lpe"?13:8),P=l(t,v+"-bay-floor",M,.07,8,n,_.x,.035,0),A=new Zu(new I_(P.geometry),new Za({color:3233397,transparent:!0,opacity:.8}));A.position.copy(P.position),A.name=v+"-bay-outline",t.add(A);const R=new lt;R.name=_.name+" (room silhouette)",R.position.x=_.x,t.add(R),m[v]=R}{const v=m.lpe,_=2.65;for(let M=0;M<xn.length;M++){const P=xn[M];c(v,"lpe-zone-"+M,jt,jt,P.len,a,P.x,_,0,18,"x"),M<xn.length-1&&h(v,"lpe-zone-joint",jt+.015,.045,s,P.x+P.len/2+.025,_,0,"x")}for(const M of[-1,1]){const P=M*(xn.at(-1).x+xn.at(-1).len/2);c(v,"lpe-insulation-flange",jt+.05,jt+.05,.11,r,P,_,0,18,"x")}c(v,"lpe-quartz-process-tube",Gs,Gs,La,o,0,_,0,12,"x");for(const M of[-1,1])c(v,"lpe-end-vacuum-fitting",.6,.6,.22,r,M*Hs,_,0,14,"x"),c(v,"lpe-end-cap",.46,.46,.15,s,M*(Hs+.16),_,0,12,"x");for(const M of[-4.55,4.55]){for(const P of[-.7,.7])l(v,"lpe-frame-leg",.13,1.29,.13,s,M,.645,P),c(v,"lpe-frame-foot",.18,.2,.06,n,M,.03,P,8);l(v,"lpe-frame-crossmember",.12,.12,1.55,s,M,1.29,0)}for(const M of[-.7,.7])l(v,"lpe-frame-longitudinal-rail",9.25,.14,.14,s,0,1.36,M);for(const M of[-3.5,3.5])l(v,"lpe-furnace-cradle",.2,.28,2.6,r,M,1.29,0),h(v,"lpe-saddle-outline",jt+.03,.055,r,M,_,0,"x");v.userData.silhouette={source:"lpe.js",shellRadius:jt,centerY:_,zoneCount:xn.length,frameLegCount:4,frameGroundY:0,detailedFrameTopY:1.36,processTubeLength:La}}{const v=m.imm,_=3.4,M=1.7;c(v,"imm-chamber",1.8,1.8,3.4,r,0,_,0,18);for(const P of[1.7,5.1])c(v,"imm-chamber-flange",1.9,1.9,.12,s,0,P,0,18);h(v,"imm-support-collar",1.9,.09,s,0,M-.01,0);for(const P of[-2.2,2.2]){for(const A of[-2.2,2.2])l(v,"imm-frame-leg",.16,1.64,.16,s,P,.88,A),c(v,"imm-floor-foot",.19,.22,.06,n,P,.03,A,8);l(v,"imm-floor-skid",.26,.16,4.65,n,P,.08,0),l(v,"imm-longitudinal-tie",.11,.11,4.4,s,P,1.4,0)}for(const P of[-2.2,2.2])l(v,"imm-cross-frame",4.5,.11,.11,s,0,1.4,P);for(const P of[-2.2,2.2])for(const A of[-2.2,2.2]){const R=new C(P,0,A),U=R.length(),S=new C(P*1.9/U,1.7,A*1.9/U),w=new C(P,1.7,A),N=w.clone().sub(S);l(v,"imm-collar-frame-bracket",N.length(),.12,.12,s,(S.x+w.x)/2,1.7,(S.z+w.z)/2).quaternion.setFromUnitVectors(new C(1,0,0),N.normalize())}c(v,"imm-source-neck",.7,.7,.92,s,0,5.48,0,14),c(v,"imm-ion-source",.75,.75,.6,n,0,6.1,0,16),c(v,"imm-source-cap",.85,.85,.12,s,0,6.45,0,16),c(v,"imm-load-lock",.4,.4,.6,s,2.2,_,0,12,"x"),c(v,"imm-load-lock-flange",.47,.47,.1,r,1.94,_,0,12,"x"),l(v,"imm-load-lock-post",.14,1.5,.14,s,2.45,2.27,0),l(v,"imm-load-lock-brace",1.14,.12,.12,s,2.15,1.63,0),l(v,"imm-pump-pedestal",1.3,.55,1.34,n,0,.275,0),c(v,"imm-turbo-base",.35,.3,.23,n,0,.665,0,12),c(v,"imm-turbo-pump",.45,.45,.55,s,0,1.05,0,12),c(v,"imm-pump-neck",.37,.37,.4,r,0,1.52,0,10),c(v,"imm-viewport",.32,.32,.22,s,0,3.7,1.83,12,"z"),v.userData.silhouette={source:"ion-mill.js",chamberRadius:1.8,chamberBottomY:M,frameLegCount:4,frameGroundY:.06,loadLockSupported:!0,turboSupported:!0,sourceConnected:!0}}{const v=m.mbe;c(v,"mbe-uhv-chamber",1.5,1.5,3.3,r,0,3.65,0,18),c(v,"mbe-tapered-top",.75,1.5,.6,s,0,5.6,0,18),c(v,"mbe-top-flange",.85,.85,.12,r,0,5.93,0,16),c(v,"mbe-rotary-shaft",.1,.1,.9,s,0,6.43,0,10),c(v,"mbe-manipulator-motor",.34,.34,.4,n,0,7.05,0,12),c(v,"mbe-motor-cap",.26,.33,.1,r,0,7.32,0,12),c(v,"mbe-lower-flange",1.65,1.65,.1,s,0,2,0,18),h(v,"mbe-support-collar",1.65,.08,r,0,1.94,0);for(const _ of[-2,2]){for(const M of[-1.9,1.9])l(v,"mbe-frame-leg",.14,1.92,.14,s,_,.96,M),c(v,"mbe-floor-foot",.19,.22,.06,n,_,.03,M,8);l(v,"mbe-frame-end-tie",.11,.1,3.8,s,_,1.45,0)}for(const _ of[-1.9,1.9])l(v,"mbe-frame-side-rail",4.14,.1,.11,s,0,1.45,_);for(const _ of[-2,2])for(const M of[-1.9,1.9]){const P=new C(_,0,M),A=P.length(),R=new C(_*1.65/A,1.94,M*1.65/A),U=new C(_,1.94,M),S=U.clone().sub(R);l(v,"mbe-collar-frame-bracket",S.length(),.1,.1,s,(R.x+U.x)/2,1.94,(R.z+U.z)/2).quaternion.setFromUnitVectors(new C(1,0,0),S.normalize())}c(v,"mbe-side-flange",.29,.29,.33,s,1.6,3,0,12,"x"),c(v,"mbe-side-flange",.29,.29,.33,s,-1.6,3,0,12,"x"),c(v,"mbe-front-view-port",.34,.34,.25,u,0,4.45,1.55,12,"z"),v.userData.silhouette={source:"mbe/scene.js",chamberRadius:1.5,chamberBottomY:2,taperedTop:!0,frameLegCount:4,frameGroundY:0,supportCollarY:1.94,topManipulator:!0}}{const v=m.cmp;l(v,"cmp-table-top",6.5,.12,6.5,s,0,1.04,0);for(const _ of[-2.85,2.85])for(const M of[-2.85,2.85])l(v,"cmp-table-leg",.19,.99,.19,n,_,.495,M);l(v,"cmp-lower-shelf",6.2,.1,6.2,n,0,.35,0),c(v,"cmp-catch-tray",2.85,2.85,.18,r,0,1.22,0,20),c(v,"cmp-platen-and-pad",2.02,2.02,.24,n,0,1.57,0,20),c(v,"cmp-offset-carrier",.6,.6,.36,r,1,2.38,0,16),c(v,"cmp-carrier-shaft",.13,.13,1.35,s,1,3.22,0,12),c(v,"cmp-carrier-motor",.3,.3,.4,n,1,4.05,0,12);for(const _ of[-2.7,2.7])l(v,"cmp-overhead-post",.2,3.78,.2,s,_,2.97,-2.45);l(v,"cmp-overhead-beam",5.6,.2,.24,s,0,4.87,-2.45),l(v,"cmp-head-support",.23,.16,2.55,r,1,4.87,-1.2),l(v,"cmp-slurry-support",.15,1.8,.15,r,2.45,2,1.4),l(v,"cmp-slurry-arm",2,.12,.15,r,1.55,2.87,1.4),l(v,"cmp-conditioner-support",.15,1.8,.15,r,-2.45,2,.8),l(v,"cmp-conditioner-arm",2,.12,.15,r,-1.6,2.87,.8),v.userData.silhouette={source:"cmp/scene.js",tableTopY:1.1,tableWidth:6.5,floorLegCount:4,overheadAnchored:!0,platenRadius:2.02,carrierOffset:1}}{const v=m.litho;l(v,"litho-floor-skid",5.1,.22,4.9,n,0,.13,0);for(const _ of[-2.1,2.1])for(const M of[-2,2])l(v,"litho-floor-leg",.22,1.2,.22,s,_,.72,M),l(v,"litho-foot",.4,.06,.4,n,_,.03,M);l(v,"litho-granite",3.4,.3,3.35,n,0,1.12,0),l(v,"litho-stage",2.75,.09,2.8,r,0,1.32,0),c(v,"litho-wafer",.31,.31,.035,u,0,1.55,0,16);for(const _ of[-2.25,2.25])for(const M of[-2.1,2.1])l(v,"litho-upper-post",.15,3.65,.15,s,_,1.93,M);for(const _ of[-2.1,2.1])l(v,"litho-upper-beam",4.65,.15,.16,s,0,3.72,_);l(v,"litho-top-bridge",.15,.15,4.3,s,0,3.72,0),l(v,"litho-top-control",.35,.25,.42,n,0,3.89,0),c(v,"litho-optics",.3,.3,1.26,r,0,2.16,0,14),c(v,"litho-illuminator",.27,.27,.43,n,0,3.39,0,14),l(v,"litho-reticle-rail",1.35,.12,.16,r,0,3.25,-.34),l(v,"litho-reticle",.6,.04,.55,u,0,3.02,0),l(v,"litho-laser",.85,.48,.75,n,-1.44,1.82,0),l(v,"litho-laser-pedestal",.45,.54,.55,s,-1.44,1.36,0),l(v,"litho-beam-duct",1.46,.12,.12,s,-.73,3.35,0),v.userData.silhouette={source:"litho/scene.js",grounded:!0,framePosts:4,carrierHeight:3.72,waferRadius:.31}}{const v=m.spin;c(v,"spin-base",1.1,1.1,.84,n,0,.42,0,20),c(v,"spin-bowl",1.12,1.08,.68,s,0,1.18,0,22),h(v,"spin-bowl-lip",1.1,.028,r,0,1.52,0),c(v,"spin-vacuum-chuck",.86,.86,.16,n,0,1.18,0,20),c(v,"spin-wafer",.78,.78,.02,r,0,1.29,0,20),l(v,"spin-dispense-post",.11,1.83,.11,r,-1.65,.93,0),l(v,"spin-dispense-arm",1.55,.07,.07,r,-.875,1.85,0),c(v,"spin-nozzle",.04,.04,.29,u,-.1,1.65,0,10),l(v,"spin-hot-plate-base",.74,.17,.74,n,1.85,.09,.55),c(v,"spin-hot-plate",.3,.3,.035,r,1.85,.19,.55,18),v.userData.silhouette={source:"spin/scene.js",waferRadius:.78,grounded:!0}}{const v=m.implant,_=1.2,M=new Ge({color:4346730,metalness:.78,roughness:.4}),P=new Ge({color:11102777,metalness:.67,roughness:.48}),A=new Ge({color:10070715,metalness:.85,roughness:.32}),R=(U,S,w,N,Y)=>{const te=new C(...S),I=new C(...w),B=I.clone().sub(te),G=new Ce(new fn(N,N,B.length(),12),Y);return G.position.copy(te).add(I).multiplyScalar(.5),G.quaternion.setFromUnitVectors(new C(0,1,0),B.normalize()),G.name=U,v.add(G),G};l(v,"implant-deck",6.4,.14,2.2,s,.5,.17,-.1);for(const U of[-2.3,-.95,.75,2.7])for(const S of[-.84,.84])l(v,"implant-frame-post",.12,.34,.12,n,U,.17,S);l(v,"implant-source-deck",1.3,.12,1.34,n,-1.32,.62,-2.53);for(const U of[-1.83,-.81])for(const S of[-2.96,-2.1])l(v,"implant-source-support",.09,.53,.09,s,U,.32,S);l(v,"implant-source",.77,.63,.65,n,-1.32,_,-2.53),c(v,"implant-extraction-flange",.25,.25,.1,A,-.92,_,-2.23,12,"x"),R("implant-incoming-beamline",[-1.04,_,-2.26],[-.19,_,-1.05],.15,r);for(const U of[_-.24,_+.24]){const S=new Ce(new Ht(.72,.2,8,20,Math.PI,Math.PI/2),M);S.rotation.x=Math.PI/2,S.position.set(.48,U,-.6),S.name="implant-analyzer-yoke",v.add(S);const w=new Ce(new Ht(.77,.07,6,20,Math.PI,Math.PI/2),P);w.rotation.x=Math.PI/2,w.position.set(.48,U+.01*(U>_?1:-1),-.6),w.name="implant-analyzer-coil",v.add(w)}R("implant-analyzer-exit",[.45,_,-.25],[.95,_,0],.18,r),R("implant-accelerator",[.88,_,0],[1.63,_,0],.19,A);for(const U of[1.05,1.32,1.6])c(v,"implant-accelerator-flange",.26,.26,.06,s,U,_,0,14,"x");R("implant-scanner-bellows",[1.65,_,0],[2.14,_,0],.23,n);for(const U of[1.73,1.83,1.93,2.03])c(v,"implant-bellows-rib",.27,.27,.04,r,U,_,0,12,"x");c(v,"implant-end-station",.77,.77,1.12,s,2.65,_,0,20,"x"),c(v,"implant-end-flange",.87,.87,.08,A,3.22,_,0,20,"x"),c(v,"implant-chamber-viewport",.21,.21,.09,n,2.65,_+.7,.28,16),c(v,"implant-load-lock",.28,.28,.66,s,2.72,_,.92,16,"z"),c(v,"implant-load-lock-flange",.34,.34,.07,A,2.72,_,1.28,14,"z"),c(v,"implant-turbo-neck",.25,.25,.18,n,2.55,.48,0,14),c(v,"implant-turbo-pump",.24,.18,.39,r,2.55,.25,0,14);for(const U of[-.53,.53])l(v,"implant-chamber-support",.16,.47,.16,n,2.65,.31,U);l(v,"implant-control-rack",.92,1.65,.79,n,4.18,.83,.35),l(v,"implant-rack-face",.04,1.37,.62,r,4.67,.86,.35);for(const U of[.5,.83,1.18])l(v,"implant-rack-module",.06,.13,.5,M,4.72,U,.35);v.userData.silhouette={source:"implant/scene.js",analyzerAngle:90,grounded:!0,sourceToAnalyzer:!0,continuousBeamline:!0,magnetYokes:2,loadLock:!0,turboPump:!0}}for(const[v,_]of Object.entries(m))_.traverse(M=>{M.isMesh&&(M.castShadow=!1,M.receiveShadow=!1)}),f[v]=e?el(_):null;return{room:t,proxies:m,proxyStats:f,layout:d,setFocus(v){for(const[_,M]of Object.entries(m))M.visible=_!==v}}}function vx(){const i=document.getElementById("tProfileContent");function e(s){const v=A=>{const R=Math.abs(A);if(R<4.575)return s;const U=Math.min(1,(R-4.675+.1)/1),S=U*U*(3-2*U);return s-S*(s-25)};let _="";for(let A=0;A<=80;A++){const R=A/80,U=-5.5+R*(5.5- -5.5),S=v(U),w=6+R*244,N=4+(1-(S-0)/820)*30;_+=(A===0?"M":"L")+w.toFixed(1)+","+N.toFixed(1)+" "}const M=_+"L 250,34 L 6,34 Z";let P="";xn.forEach(A=>{const S=6+(A.x-A.len/2- -5.5)/(5.5- -5.5)*244;S>7&&S<249&&(P+=`<line x1="${S.toFixed(1)}" y1="4" x2="${S.toFixed(1)}" y2="34" stroke="#3d7fd6" stroke-width="0.4" opacity="0.30" stroke-dasharray="1.5,1.5"/>`)}),i.innerHTML=`
    <path d="${M}" fill="url(#tGrad)"/>
    <path d="${_}" fill="none" stroke="#3d7fd6" stroke-width="1.3" stroke-linejoin="round"/>
    ${P}
    <text x="6" y="41" font-size="4.5" fill="#5f7d9e" letter-spacing="0.6">COLD</text>
    <text x="${256/2-12}" y="41" font-size="4.5" fill="#7ee6a0" letter-spacing="0.6">BOAT</text>
    <text x="236" y="41" font-size="4.5" fill="#5f7d9e" letter-spacing="0.6">COLD</text>
  `}e(25);let t=25;function n(s){Math.abs(s-t)<1.5||(t=s,e(s))}return{maybeUpdateProfile:n}}function Mx(i){const e=(()=>{const t=document.getElementById("xsec"),n="http://www.w3.org/2000/svg",s=20,r=80,a=g=>r-g*s,o=(g,x)=>{const m=document.createElementNS(n,g);for(const f in x)m.setAttribute(f,x[f]);return t.appendChild(m),m};o("rect",{x:0,y:r,width:256,height:12,fill:"#3a5a78"});const u=[];let l=0,c=0;On.forEach((g,x)=>{if(g.thickness===null)return;const m="#"+g.color.toString(16).padStart(6,"0"),f={b0:l,b1:l+g.thickness,fl:[o("rect",{fill:m,x:4,width:116}),o("rect",{fill:m,x:136,width:116})],rd:o("rect",{fill:m,x:120,width:16})};f.rd.setAttribute("y",a(f.b1)),f.rd.setAttribute("height",g.thickness*s),u.push(f),l+=g.thickness,x===3&&(c=l)});const h=l,d=o("rect",{fill:"#d04830",x:120,width:16});o("line",{x1:0,x2:256,y1:a(c),y2:a(c),stroke:"#ffd060","stroke-width":.6,"stroke-dasharray":"3 2"}),o("text",{x:6,y:a(c)-2,fill:"#ffd060","font-size":7}).textContent="active layer top";const p=o("text",{x:142,y:10,"font-size":8,fill:"#a6c4e0"});return{update(g,x){const m=h-g;u.forEach(_=>{const M=Math.max(_.b0,Math.min(_.b1,m));_.fl.forEach(P=>{P.setAttribute("y",a(M)),P.setAttribute("height",Math.max(0,(M-_.b0)*s))})});const f=i.resistT*x;d.setAttribute("y",a(h+f)),d.setAttribute("height",f*s);const v=m-c;p.textContent=g<=0?"unetched":v>0?`etch floor ${v.toFixed(2)} µm above active`:"FLOOR BELOW ACTIVE TOP",p.setAttribute("fill",g>0&&v<.05?"#ff6a5a":"#a6c4e0")}}})();return e.update(0,1),e}function yx(){const i={process:{panel:document.getElementById("leftPanel"),minimize:document.getElementById("minimizeProcess"),restore:document.getElementById("restoreProcess")},equipment:{panel:document.getElementById("rightPanel"),minimize:document.getElementById("minimizeEquipment"),restore:document.getElementById("restoreEquipment")}},e=document.getElementById("focusToggle"),t=window.matchMedia("(max-width:760px), (max-width:900px) and (max-height:520px)"),n=document.getElementById("mobileEquipment"),s=document.getElementById("mobileProcess"),r={process:t.matches,equipment:!1};function a(c){t.matches&&(r.process=c!=="process",r.equipment=c!=="equipment",o())}n.addEventListener("click",()=>a("equipment")),s.addEventListener("click",()=>a("process")),t.addEventListener("change",c=>{r.process=c.matches,r.equipment=!1,o()});function o(){for(const[h,{panel:d,minimize:p,restore:g}]of Object.entries(i))d.hidden=r[h],g.hidden=!r[h],p.setAttribute("aria-expanded",String(!r[h])),g.setAttribute("aria-expanded",String(!r[h]));const c=r.process&&r.equipment;n.setAttribute("aria-pressed",String(!r.equipment)),s.setAttribute("aria-pressed",String(!r.process)),document.body.classList.toggle("focus-view",c),e.setAttribute("aria-pressed",String(c)),e.textContent=c?"Show panels":"Focus view",e.title=c?"Show both panels (H)":"Hide both panels (H)"}function u(c,h,{focus:d=!1}={}){r[c]=h,!h&&t.matches&&(r[c==="process"?"equipment":"process"]=!0),o(),d&&(h?i[c].restore:i[c].minimize).focus()}function l(){const c=!(r.process&&r.equipment);r.process=c,r.equipment=c,!c&&t.matches&&(r.process=!0),o()}for(const c of Object.keys(i))i[c].minimize.addEventListener("click",()=>u(c,!0,{focus:!0})),i[c].restore.addEventListener("click",()=>u(c,!1,{focus:!0}));return e.addEventListener("click",l),document.addEventListener("keydown",c=>{if(c.defaultPrevented||c.altKey||c.ctrlKey||c.metaKey)return;const h=c.target;if(c.key.toLowerCase()==="h"){if(h instanceof HTMLElement&&(h.isContentEditable||h.closest("input,textarea,select,[contenteditable]")))return;c.preventDefault(),l()}else c.key==="Escape"&&(r.process||r.equipment)&&(c.preventDefault(),r.process=t.matches,r.equipment=!1,o(),e.focus())}),o(),{state:()=>({...r}),showBoth:()=>{r.process=t.matches,r.equipment=!1,o()}}}const la=.88,ca=.44,ua=0,ha=-.44,da=-.88,gn=[{name:"Heat-up",realMin:60,animSec:14,temp:[25,800],slider:$n,narr:"HEATING · H₂ flowing",color:"#7fc4ff",detail:"60 min ramp 25 → 800 °C under flowing H₂. Kanthal elements ramp; mullite former evens out axial gradients."},{name:"Homogenise",realMin:40,animSec:10,temp:[800,800],slider:$n,narr:"HOMOGENISING · 800 °C",color:"#7fc4ff",detail:"40 min at 800 °C, ±0.1 °C PID. Charged As/Al dissolves; all melts undersaturated here."},{name:"Cool to 780",realMin:20,animSec:6,temp:[800,780],slider:$n,narr:"COOLING · 800 → 780 °C",color:"#7fc4ff",detail:"20 min cool at 1 °C/min. Melts stay undersaturated until each reaches its liquidus."},{name:"Slide → well 0",realMin:.5,animSec:1.2,from:$n,to:la,temp:[780,780],narr:"SLIDING · well 0",color:"#ffaa66",detail:"Push rod through bellows moves slider. Slightly undersaturated Ga–As (well 0) aligns with wafer."},{name:"Melt-back",realMin:2,animSec:3,temp:[780,780],slider:la,meltback:!0,narr:"MELT-BACK · in-situ etch",color:"#ff7050",detail:"Undersaturated melt dissolves a few µm of damaged/oxidised surface. Pure Ga would strip tens of µm."},{name:"Slide → well 1",realMin:.5,animSec:1.2,from:la,to:ca,temp:[780,780],narr:"SLIDING · well 1",color:"#ffaa66",detail:"Graphite wall (wider than wafer) wipes melt off. Well 1 (GaAs, liquidus 780.0 °C) slides in."},{name:"Grow GaAs buffer",realMin:15,animSec:8,temp:[780,777.75],slider:ca,deposit:1,growthExp:1.5,narr:"GROWTH · GaAs buffer",color:"#7ee6a0",detail:"Cooling 0.15 °C/min over 15 min (ΔT 2.25 °C). Solute (As) transport limits growth; growth ∝ t^1.5. Target 1.0 µm."},{name:"Slide → well 2",realMin:.5,animSec:1.2,from:ca,to:ua,temp:[777.75,777.75],narr:"SLIDING · well 2",color:"#ffaa66",detail:"Wall wipes melt. Well 2 (AlGaAs, liquidus 777.75 °C) aligning."},{name:"Grow AlGaAs lower",realMin:12,animSec:6,temp:[777.75,775.75],slider:ua,deposit:2,growthExp:1.5,narr:"GROWTH · Al₀.₃Ga₀.₇As lower",color:"#7ee6a0",detail:"Cooling 0.17 °C/min over 12 min (ΔT 2.0 °C). Al partitions strongly into solid. Target 0.5 µm."},{name:"Slide → well 3",realMin:.5,animSec:1.2,from:ua,to:ha,temp:[775.75,775.75],narr:"SLIDING · well 3",color:"#ffaa66",detail:"Wall wipes melt. Well 3 (GaAs, liquidus 775.75 °C) aligning."},{name:"Grow GaAs active",realMin:1,animSec:3,temp:[775.75,775.4],slider:ha,deposit:3,growthExp:1.5,narr:"GROWTH · GaAs active layer",color:"#7ee6a0",detail:"Short, small ΔT: 0.35 °C/min for 1 min. 0.1 µm GaAs active layer between claddings."},{name:"Slide → well 4",realMin:.5,animSec:1.2,from:ha,to:da,temp:[775.4,775.4],narr:"SLIDING · well 4",color:"#ffaa66",detail:"Wall wipes melt. Well 4 (AlGaAs) aligning."},{name:"Grow AlGaAs upper",realMin:8,animSec:5,temp:[775.4,773.9],slider:da,deposit:4,growthExp:1.5,narr:"GROWTH · Al₀.₃Ga₀.₇As upper",color:"#7ee6a0",detail:"Cooling 0.19 °C/min over 8 min (ΔT 1.5 °C). Completes DH structure. Target 0.5 µm."},{name:"Slide to unload",realMin:.5,animSec:1.2,from:da,to:no,temp:[773.9,773.9],narr:"SLIDING TO UNLOAD",color:"#ffaa66",detail:"Slider continues past last bin. Wafer never re-contacts a melt."},{name:"Cool-down",realMin:180,animSec:10,temp:[773.9,100],slider:no,narr:"COOLING DOWN · furnace off",color:"#5f7d9e",detail:"Furnace off, natural cool under flowing H₂ to <100 °C. Do not open hot."}],Ls=gn.reduce((i,e)=>i+e.animSec,0),Ia=gn.reduce((i,e)=>i+e.realMin,0);function us(i){if(i>=60){const e=Math.floor(i/60),t=Math.round(i-e*60);return`${e} h ${String(t).padStart(2,"0")} min`}return i>=1?`${Math.round(i)} min`:`${Math.round(i*60)} s`}const nt={J:5e-4,Y0:1.8,n:442e20,f:2,thOpt:70,resistT:1.5,sel:1.5,tilt:30,depth:.4,UPPER:.5};function tl(i){const e=i*Math.PI/180,t=Math.cos(e),n=Math.cos(nt.thOpt*Math.PI/180),s=Math.pow(t,-2)*Math.exp(nt.f*n*(1-1/t));return nt.Y0*s*t*nt.J/1602e-22/nt.n*1e7*60}const lh=()=>nt.depth*1e3/tl(nt.tilt),ts=5e-6,Yn=2e-4,Ws=5e-5,gt=[{dur:2,real:1,narr:"READY · wafer already clamped",color:"#7fc4ff",cP:[Ws,Ws],tB:0,tS:25,detail:"The chip has already been transferred through the load lock and clamped to the water-cooled stage. The transfer mechanism is outside this cutaway."},{dur:3,real:5,narr:"PUMPING · chamber stabilizes",color:"#7fc4ff",cP:[Ws,ts],tB:0,tS:25,detail:"The closed chamber stabilizes from 5×10⁻⁵ to 5×10⁻⁶ Torr. The wafer stays mechanically seated on its stage."},{dur:2,real:1,narr:"ARGON · source gas admitted",color:"#7fc4ff",cP:[ts,Yn],tB:0,tS:25,detail:"Argon is admitted. The example working pressure is 2×10⁻⁴ Torr; the ion beam remains blocked by its shutter."},{dur:3,real:5,narr:"ION SOURCE · shutter closed",color:"#ffaa66",cP:[Yn,Yn],tB:.5,tS:25,hot:!0,detail:"The Kaufman source and neutralizer start. A nominal 500 eV Ar⁺ beam is stabilized behind the closed shutter."},{dur:2,real:3,narr:"STAGE TILTS · preset 30°",color:"#ffaa66",cP:[Yn,Yn],tB:.5,tS:25,hot:!0,tilt:!0,detail:"The water-cooled wafer stage tilts to its preset 30° incidence angle while the source shutter remains closed."},{dur:10,real:0,narr:"MILLING · 500 eV Ar⁺",color:"#7ee6a0",etch:!0,cP:[Yn,Yn],tB:.5,tS:40,hot:!0,open:!0,tilt:!0,detail:()=>`The shutter opens; Ar⁺ removes exposed GaAs/AlGaAs by sputtering while the masked ridge remains. Rate ≈ ${tl(nt.tilt).toFixed(0)} nm/min; preset depth ${nt.depth.toFixed(2)} µm in ≈ ${lh().toFixed(1)} min. The stage rotates at 14 rpm.`},{dur:2,real:1,narr:"SHUTTER CLOSES · source off",color:"#7fc4ff",cP:[Yn,ts],tB:0,tS:30,tiltOut:!0,detail:"Shutter closes before the source is switched off. Argon flow stops and the stage returns to level."},{dur:2,real:2,narr:"COMPLETE · wafer remains mounted",color:"#7ee6a0",cP:[ts,ts],tB:0,tS:25,detail:()=>`Etched ${nt.depth.toFixed(2)} µm. ${(nt.UPPER-nt.depth).toFixed(2)} µm of upper cladding remains above the active layer. The wafer stays clamped for inspection; actual unload occurs through the load lock offscreen.`}],Ur=gt.reduce((i,e)=>i+e.dur,0),Sx=gt.findIndex(i=>i.etch);function Ex(i){return i>1?`${Math.round(i)} Torr`:i>.001?`${(i*1e3).toFixed(1)} mTorr`:`${i.toExponential(1)} Torr`}const fa=i=>gt[i].etch?lh():gt[i].real;function bx(i,e,t){if(i<=0||e<=0)return i+(e-i)*t;const n=Math.log10(i),s=Math.log10(e);return Math.pow(10,n+(s-n)*t)}const{renderer:yt,scene:sn,camera:kt,controls:ti,clipPlane:ch,clipPlaneIMM:wx,MAT:vi,keyLight:vn,fill:Xs,rimLPE:Tx,rimIMM:Ax,lowPower:Rx}=ax();let Is=Rx;const{cyl:uh,box:hh,boltRing:Cx,tubeAlong:dh,makeCoil:Px,annularTube:fh}=lx(vi),{machine:go,zoneCoils:ph,zoneLights:mh,growthLayers:_o,growthLayersGroup:Lx,contactRing:ns,meltBridge:qn,melts:Da,sliderGroup:bi,subRing:gh,substrate:Ix,growthLight:Ds,sliderGlow:_h,bubbles:xh,pidScreens:vh,otcLed:Dx,inletWheel:Mh,meltMats:tu,baseMeltEmissive:Ux}=px({scene:sn,MAT:vi,clipPlane:ch,cyl:uh,box:hh,boltRing:Cx,tubeAlong:dh,makeCoil:Px,annularTube:fh}),{IMM:_s,etchL:os,wafer:jn,resist:Js,MASK_TOP:yh,RES_H:Sh,tiltG:Xr,beamCone:Ua,plasma:Eh,plasmaCore:bh,sputters:wh,chamberLight:Th,neutMat:nu,leafL:Ah,leafR:Rh,shutterMat:Nx,shutterY:Ox,BT:pa,BB:iu,stg:Ch,RW:Fx,FW:Bx,vpGlow:Ph}=mx({scene:sn,MAT:vi,cyl:uh,box:hh,annularTube:fh,tubeAlong:dh}),Ct=xx(sn);let _t=ah(Ct.layout,window.innerWidth,window.innerHeight),et=null,Nr=null,it=null,Or=null,rt=null,Fr=null,ot=null,Br=null;const zx=yx();let dt=null,zr=null,vt=null,mi=0;const Lh=Mx(nt),{maybeUpdateProfile:Na}=vx(),ii=document.createElement("div");ii.className="label3d";ii.textContent="LPE · FURNACE";ii.style.color="#a9d8ff";ii.style.borderColor="#7fc4ff";document.body.appendChild(ii);const zn=document.createElement("div");zn.className="label3d";zn.textContent="ION BEAM ETCH · HIGH VACUUM";zn.style.color="#7fc4ff";zn.style.borderColor="#7fc4ff";zn.style.display="none";document.body.appendChild(zn);const si=document.createElement("div");si.className="label3d";si.textContent="MBE · UHV CHAMBER";si.style.color="#9dd4ff";si.style.borderColor="#7fc4ff";document.body.appendChild(si);const ri=document.createElement("div");ri.className="label3d";ri.textContent="CMP · OXIDE POLISH";ri.style.color="#9ed0f8";ri.style.borderColor="#7fc4ff";document.body.appendChild(ri);const Gn=document.createElement("div");Gn.className="label3d";Gn.textContent="LITHO · ArF SCANNER";Gn.style.color="#a9d8ff";Gn.style.borderColor="#7fc4ff";Gn.style.display="none";document.body.appendChild(Gn);const io=document.createElement("div"),so=document.createElement("div");for(const[i,e]of[[io,"SPIN COATER · PHOTORESIST"],[so,"ION IMPLANTER · DOPANT"]])i.className="label3d",i.textContent=e,i.style.borderColor="#7fc4ff",document.body.appendChild(i);const di=new C;function fi(i,e,t,n){di.set(e,t,n).project(kt);const s=(di.x*.5+.5)*window.innerWidth,r=(-di.y*.5+.5)*window.innerHeight;i.style.transform=`translate(-50%, -100%) translate(${s}px, ${r}px)`,i.style.opacity=di.z>=-1&&di.z<=1&&Math.abs(di.x)<=1.03&&Math.abs(di.y)<=1.03?"1":"0"}for(const i of[go,_s]){let e=0;i.traverse(t=>{var s,r;if(!t.isMesh)return;const n=!((s=t.material)!=null&&s.transparent)&&!((r=t.material)!=null&&r.isMeshBasicMaterial);t.castShadow=n&&e++<12,t.receiveShadow=!1})}Ph.castShadow=!1;const Gx=el(go,{exclude:new Set([...ph,...mh,..._o.map(i=>i==null?void 0:i.mesh).filter(Boolean),Lx,ns,qn,...Da.map(i=>i.mesh),bi,gh,Ix,Ds,_h,...xh,...vh.flatMap(i=>Object.values(i)),Dx,Mh])}),Hx=el(_s,{exclude:new Set([...os.flatMap(i=>(i==null?void 0:i.meshes)||[]),jn,Js,Xr,Ua,Eh,bh,...wh.map(i=>i.mesh),Th,Ah,Rh,Ch,Ph])}),Ih=document.getElementById("cut"),Dh=document.getElementById("cutIMM");function Uh(){ch.constant=1.9-Ih.value/100*3}function Nh(){wx.constant=2.5-Dh.value/100*4}Ih.addEventListener("input",Uh);Dh.addEventListener("input",Nh);Uh();Nh();let gi=0,Mn=!1,Yr=!1,Oa=-1,Rt=null,ro=0,oo=0,ln=25,Gr=$n,su=-1,ma=0;const me={immT:0,immOn:!1,immDone:!1,immIdx:-1,immLocal:0,press:Ws,tiltNow:0,beam:0,stage:25,etch:0},Pt=document.getElementById("narrStatus"),yn=document.getElementById("narrDetail"),Fn=document.getElementById("narrTime"),kx=document.getElementById("progBar"),Oh=document.getElementById("stack"),Dn=document.getElementById("playBtn"),Un=document.getElementById("immBtn"),Fh=document.getElementById("ionProgBar");document.getElementById("tabLPE");document.getElementById("tabIMM");const Vx=document.getElementById("lpeControls"),Wx=document.getElementById("immControls");function Bh(){if(!vt)return 0;const i=Rt&&Rt.growthExp||1;return Math.max(.001,Math.pow(ro,i))}function Fa(i){const e=Math.round(i);document.getElementById("t1").textContent=e+" °C",document.getElementById("t2").textContent=e+" °C",document.getElementById("t3").textContent=e+" °C",document.getElementById("t4").textContent=e+" °C"}function nl(){ln=25,Pt.textContent="IDLE",Pt.style.color="#5f7d9e",yn.textContent="One virtual lab with seven independent fabrication tools. Select a station to inspect its equipment and illustrative process.",Fn.textContent=`LPE · ${us(Ia)} simulated · ~${Math.round(Ls)} s demo`,Fa(25),Na(25)}function Xx(){Oh.innerHTML='<div class="layer sub"><span class="mat">GaAs (100) substrate</span><span class="thick">350 µm</span></div>',oo=0}function Yx(){_o.forEach(i=>{i&&(i.deposited=!1,i.active=!1,i.mesh.visible=!1,i.mesh.scale.y=1e-4,i.material.emissiveIntensity=.12)}),vt=null}function qx(i){if(i<=oo)return;oo=i;const e=On[i],t=document.createElement("div");t.className="layer new",t.innerHTML=`<span class="mat">${e.mat}</span><span class="thick">${e.thickness.toFixed(1)} µm</span>`,Oh.appendChild(t)}let Ke="overview";const hs={overview:{pos:new C(_t.centerX,_t.targetY+_t.height,_t.distance),tgt:new C(_t.centerX,_t.targetY,0)},lpe:{pos:new C(7.5,11,22),tgt:new C(0,2.6,0)},imm:{pos:new C(23,10,12),tgt:new C(16,3.2,0)},mbe:{pos:new C(36.8,3.8,12.5),tgt:new C(30,4.4,0)},cmp:{pos:new C(52,7.6,13),tgt:new C(46,2.2,0)},litho:{pos:new C(68.4,5,8),tgt:new C(62,1.95,0)},spin:{pos:new C(82.5,4.5,8.4),tgt:new C(78,.98,0)},implant:{pos:new C(99,6.4,12),tgt:new C(94.8,1.3,0)}};let Ln=null;const Ba={overview:document.getElementById("tabOverview"),lpe:document.getElementById("tabLPE"),imm:document.getElementById("tabIMM"),mbe:document.getElementById("tabMBE"),cmp:document.getElementById("tabCMP"),litho:document.getElementById("tabLitho"),spin:document.getElementById("tabSpin"),implant:document.getElementById("tabImplant")},jx=document.getElementById("lpeLeft"),Zx=document.getElementById("mbeLeft"),Kx=document.getElementById("overviewLeft"),$x=document.getElementById("mbeControls"),Jx=document.getElementById("overviewControls"),za=document.getElementById("mbePlayBtn"),Ga=document.getElementById("cmpPlayBtn"),zh=document.getElementById("lithoPlayBtn"),Gh=document.getElementById("spinPlayBtn"),Hh=document.getElementById("implantPlayBtn");async function Qx(){return rt||(Fr||(Fr=Promise.all([Sn(()=>import("./scene-DFHpdZJg.js"),[],import.meta.url),Sn(()=>import("./controller-bmMHUkQr.js"),[],import.meta.url)]).then(([i,e])=>{const t=i.buildSpin({scene:sn});return rt=e.createSpinController(t),t.group.visible=Ke==="spin",Ct.setFocus(Ke),Gh.disabled=!1,rt.refresh(),yt.shadowMap.needsUpdate=!0,rt}).catch(i=>{throw Fr=null,document.getElementById("spinDetail").textContent="Unable to load spin coater; reload to retry.",console.error(i),i})),Fr)}async function ev(){return ot||(Br||(Br=Promise.all([Sn(()=>import("./scene-zLgA4taR.js"),[],import.meta.url),Sn(()=>import("./controller-D2XJ4w1f.js"),[],import.meta.url)]).then(([i,e])=>{const t=i.buildImplanter({scene:sn});return ot=e.createImplantController(t),t.group.visible=Ke==="implant",Ct.setFocus(Ke),Hh.disabled=!1,ot.refresh(),yt.shadowMap.needsUpdate=!0,ot}).catch(i=>{throw Br=null,document.getElementById("implantDetail").textContent="Unable to load implanter; reload to retry.",console.error(i),i})),Br)}async function tv(){return it||(Or||(Or=Promise.all([Sn(()=>import("./scene-CinLMWny.js"),__vite__mapDeps([0,1]),import.meta.url),Sn(()=>import("./controller-BoK9qQU3.js"),__vite__mapDeps([2,1]),import.meta.url)]).then(([i,e])=>{const t=i.buildLitho({scene:sn,camera:kt});return it=e.createLithoController(t),it.group.visible=Ke==="litho",Ct.setFocus(Ke),zh.disabled=!1,it.refresh(),yt.shadowMap.needsUpdate=!0,it}).catch(i=>{throw Or=null,document.getElementById("lithoDetail").textContent="Lithography loading failed; reload to retry.",console.error(i),i})),Or)}async function nv(){return et||(Nr||(Nr=Promise.all([Sn(()=>import("./scene-J7Bb2O6h.js"),[],import.meta.url),Sn(()=>import("./controller-qV7DpZJq.js"),[],import.meta.url)]).then(([i,e])=>{const t=i.buildCMP({scene:sn,batchStatic:!window.__foundryDisableCmpBatching});return et=e.createCMPController(t),et.group.visible=Ke==="cmp",Ct.setFocus(Ke),Ga.disabled=!1,et.refresh(),yt.shadowMap.needsUpdate=!0,et}).catch(i=>{throw Nr=null,Ga.disabled=!0,document.getElementById("cmpNarrDetail").textContent="CMP model could not load. Reload to retry.",console.error("CMP station failed:",i),i})),Nr)}async function iv(){return dt||(zr||(zr=Promise.all([Sn(()=>import("./scene-CUAFJ3u-.js"),__vite__mapDeps([3,4]),import.meta.url),Sn(()=>import("./controller-B9H7PfEF.js"),__vite__mapDeps([5,4]),import.meta.url)]).then(([i,e])=>{const t=new cn(new C(0,0,-1),0),n=i.buildMbe({scene:sn,clipPlane:t});return dt=e.createMBEController(n),n.MBE.visible=Ke==="mbe",Ct.setFocus(Ke),za.disabled=!1,dt.refresh(),yt.shadowMap.needsUpdate=!0,dt}).catch(i=>{throw zr=null,za.disabled=!0,document.getElementById("mbeNarrDetail").textContent="Unable to load the MBE model. Reload to retry.",console.error("MBE station failed to load:",i),i})),zr)}function sv(i){jx.hidden=!(i==="lpe"||i==="imm"),document.getElementById("lpeOnlyIllustrations").hidden=i!=="lpe",document.getElementById("ionOnlyIllustrations").hidden=i!=="imm",Zx.hidden=i!=="mbe",document.getElementById("cmpLeft").hidden=i!=="cmp",document.getElementById("lithoLeft").hidden=i!=="litho",document.getElementById("spinLeft").hidden=i!=="spin",document.getElementById("implantLeft").hidden=i!=="implant",Kx.hidden=i!=="overview",Vx.style.display=i==="lpe"?"block":"none",Wx.style.display=i==="imm"?"block":"none",$x.hidden=i!=="mbe",document.getElementById("cmpControls").hidden=i!=="cmp",document.getElementById("lithoControls").hidden=i!=="litho",document.getElementById("spinControls").hidden=i!=="spin",document.getElementById("implantControls").hidden=i!=="implant",Jx.hidden=i!=="overview"}function kh(i){i in hs||(i="overview"),Ke=i,go.visible=i==="lpe",_s.visible=i==="imm",dt&&(dt.MBE.visible=i==="mbe"),et&&(et.group.visible=i==="cmp"),it&&(it.group.visible=i==="litho"),rt&&(rt.group.visible=i==="spin"),ot&&(ot.group.visible=i==="implant"),Ct.setFocus(i==="mbe"&&!dt||i==="cmp"&&!et||i==="litho"&&!it||i==="spin"&&!rt||i==="implant"&&!ot?"overview":i);for(const[t,n]of Object.entries(Ba))n.classList.toggle("active",t===i),n.setAttribute("aria-pressed",String(t===i));sv(i),Ba[i].scrollIntoView({block:"nearest",inline:"nearest"}),Ln=hs[i],kt.fov=i==="overview"?_t.fov:40,kt.far=Math.max(300,_t.distance*2.4),kt.updateProjectionMatrix(),sn.fog.far=i==="overview"?_t.fogFar:oh,ti.maxDistance=i==="overview"?_t.maxDistance:85,ti.maxPolarAngle=i==="mbe"?Math.PI*.73:Math.PI*.495;const e=i==="overview"?Ct.layout.centerX:In[i].x;if(vn.position.set(e+9,18,14),vn.target.position.set(e,3,0),vn.target.updateMatrixWorld(),Xs.position.set(e-10,9,-8),Xs.target.position.set(e,2.5,0),Xs.target.updateMatrixWorld(),Tx.visible=i==="lpe",Ax.visible=i==="imm",yt.shadowMap.needsUpdate=!0,ii.style.display=i==="overview"?"block":"none",zn.style.display=i==="overview"?"block":"none",si.style.display=i==="overview"?"block":"none",ri.style.display=i==="overview"?"block":"none",Gn.style.display=i==="overview"?"block":"none",io.style.display=i==="overview"?"block":"none",so.style.display=i==="overview"?"block":"none",i==="lpe"&&(Rt?(Pt.textContent=Rt.narr,Pt.style.color=Rt.color,yn.textContent=Rt.detail):nl()),i==="imm")if(me.immOn&&me.immIdx>=0){const t=gt[me.immIdx];Pt.textContent=t.narr,Pt.style.color=t.color,yn.textContent=typeof t.detail=="function"?t.detail():t.detail}else me.hold?(Pt.textContent=me.hold.s,Pt.style.color=me.hold.c,yn.textContent=me.hold.d,Fn.textContent=me.hold.t):(Pt.textContent="READY · WAFER CLAMPED",Pt.style.color="#7fc4ff",yn.textContent="The chip is mounted on the cooled stage. Run the preset Ar⁺ process to see vacuum stabilization, beam generation and masked ridge etching.",Fn.textContent="Preset 0.40 µm etch · chamber closed");i==="mbe"&&(dt?dt.refresh():(za.disabled=!0,document.getElementById("mbeNarrDetail").textContent="Opening the MBE station in the shared lab…",iv())),i==="cmp"&&(et?et.refresh():(Ga.disabled=!0,document.getElementById("cmpNarrDetail").textContent="Loading CMP equipment into the shared lab…",nv())),i==="litho"&&(it?it.refresh():(zh.disabled=!0,tv())),i==="spin"&&(rt?rt.refresh():(Gh.disabled=!0,Qx())),i==="implant"&&(ot?ot.refresh():(Hh.disabled=!0,ev()))}for(const[i,e]of Object.entries(Ba))e.addEventListener("click",()=>kh(i));Dn.addEventListener("click",()=>{if(Mn){Mn=!1,Dn.textContent="▶ Run Growth Cycle",Dn.classList.remove("running");return}gi=0,Oa=-1,Rt=null,ro=0,Yr=!1,Mn=!0,Xx(),Yx(),(!bi.position.x||Math.abs(bi.position.x-no)<.01)&&(bi.position.x=$n),Dn.textContent="■ Stop Cycle",Dn.classList.add("running"),Dn.classList.remove("done")});Un.addEventListener("click",()=>{if(me.immOn){me.immOn=!1,me.beam=0,me.tiltNow=0,me.press=ts,me.stage=25,me.hold={s:"ABORTED · beam off",c:"#ff8a5a",d:"Beam and Ar flow stopped; shutter closes and stage levels. The chip stays clamped inside the chamber.",t:Fn.textContent},Un.textContent="▶ Run Ion Mill",Un.classList.remove("running");return}me.immT=0,me.immIdx=-1,me.immDone=!1,me.immOn=!0,me.etch=0,me.press=Ws,me.tiltNow=0,me.beam=0,me.stage=25,me.hold=null,Fh.style.width="0%",os.forEach(i=>{i&&i.meshes.forEach(e=>{e.visible=!0,e.scale.y=1,e.position.y=i.baseY+i.h/2})}),Js.scale.y=1,Js.position.y=yh+Sh/2,mi=0,Lh.update(0,1),Un.textContent="■ Stop Mill",Un.classList.add("running"),Un.classList.remove("done")});nl();const ru=new URLSearchParams(window.location.search).get("tool");kh(ru in hs?ru:"overview");const ga=new nx;function rv(){let i=0;return _o.forEach(e=>{!e||!e.deposited||(e.active?i+=e.height*Bh():i+=e.height)}),i}let ou=-1/0,au=-1/0;function lu(i,e){const t=Ke==="lpe"&&e-ou>=.1;t&&(ou=e),ph.forEach((g,x)=>{const m=.3+Math.max(0,(ln-25)/800)*3;g.material.emissiveIntensity=m+Math.sin(e*1.9+x*2.1)*.15}),mh.forEach((g,x)=>{const m=.4+Math.max(0,(ln-25)/800)*12;g.intensity=m+Math.sin(e*2.4+x*1.8)*.8}),Da.forEach((g,x)=>{let m=0,f=1;Mn&&Rt&&(Rt.deposit===x&&(m=ro*.5),Rt.meltback&&x===0&&(f=.6)),g.mesh.material.emissiveIntensity=(Ux[x]+m)*f+Math.sin(e*3.4+x*1.3)*.06}),_h.intensity=Mn?3.4:1.8,Mh.rotation.z=e*.35,vh.forEach((g,x)=>{const m=Math.max(0,Math.min(1,(ln-25)/780));g.pvStrip.material.emissiveIntensity=.3+m*2.2,g.svStrip.material.emissiveIntensity=.3+m*2}),xh.forEach(g=>{const x=(e*g.userData.speed+g.userData.phase)%1;g.position.y=-.19+x*.18,g.position.x=g.userData.baseX+Math.sin(x*20)*.006,g.scale.setScalar(.5+x*.9)});let n=null,s=0;if(Mn){gi+=i,gi>=Ls&&(gi=Ls,Mn=!1,Yr=!0,Dn.textContent="✓ LPE Complete",Dn.classList.remove("running"),Dn.classList.add("done"));let g=0,x=-1,m=0;for(let M=0;M<gn.length;M++){if(gi<g+gn[M].animSec||M===gn.length-1){x=M,m=Math.min(1,(gi-g)/gn[M].animSec);break}g+=gn[M].animSec}if(ro=m,x!==Oa){if(vt&&(vt.mesh.scale.y=vt.height,vt.mesh.position.y=vt.baseY+vt.height/2,vt.material.emissiveIntensity=.12,vt.active=!1,vt=null),Oa=x,Rt=gn[x],Rt.deposit){qx(Rt.deposit);const M=_o[Rt.deposit];M&&(M.deposited=!0,M.active=!0,M.mesh.visible=!0,vt=M)}Ke==="lpe"&&(Pt.textContent=Rt.narr,Pt.style.color=Rt.color,yn.textContent=Rt.detail)}const f=Rt;f.slider!==void 0?Gr=f.slider:f.from!==void 0&&(Gr=f.from+(f.to-f.from)*m);const[v,_]=f.temp;if(ln=v+(_-v)*m,f.deposit?(n=8378111,s=1.4+Math.sin(e*8)*.4):f.meltback&&(n=16736304,s=1.6+Math.sin(e*9)*.5),t){kx.style.width=(gi/Ls*100).toFixed(1)+"%";const M=gn.slice(0,x).reduce((P,A)=>P+A.realMin,0)+m*gn[x].realMin;Fn.textContent=`${us(M)} / ${us(Ia)} simulated · ${Math.round(Ls)} s demo`}t&&(Fa(ln),Na(ln))}else Gr=Yr?no:$n,Yr?(ln=Math.max(25,ln-1.5),t&&(Pt.textContent="LPE COMPLETE",Pt.style.color="#7ee6a0",yn.textContent=`${oo} layers · 2.1 µm total · DH structure finished. Switch to Ion Mill to pattern a ridge.`,Fn.textContent=`${us(Ia)} simulated cycle · complete`),t&&(Fa(ln),Na(ln))):t&&nl();bi.position.x+=(Gr-bi.position.x)*.18;const r=bi.position.x,a=rv(),u=Vs+a+.001,l=es-.001,c=Math.max(.001,l-u);let h=-1,d=fx;if(Da.forEach((g,x)=>{const m=r+ks[x];Math.abs(m)<d&&(d=Math.abs(m),h=x)}),h>=0){const g=r+ks[h];qn.visible=!0,qn.position.set(g,(u+l)/2,0),qn.scale.y=c,qn.material.color.setHex(On[h].color),qn.material.emissive.copy(tu[h].emissive),qn.material.emissiveIntensity=tu[h].emissiveIntensity}else qn.visible=!1;if(ns.position.y=Vs+a+.002,h>=0?(ns.material.color.setHex(On[h].color),ns.material.opacity=.35+Math.sin(e*6)*.12,su!==h&&(ma=1)):(ns.material.color.setHex(8378111),ns.material.opacity*=.85),su=h,ma*=.92,vt){const g=Bh();vt.mesh.scale.y=vt.height*g,vt.mesh.position.y=vt.baseY+vt.height*g/2,vt.material.emissiveIntensity=.5+Math.sin(e*7)*.25}n!==null?(Ds.color.setHex(n),Ds.intensity=s):Ds.intensity=0;const p=Ds.intensity>0?.22:.05;gh.material.opacity=.28+p*Math.sin(e*8)+ma*.5}function cu(i,e){const t=Ke==="imm"&&e-au>=.1;if(t&&(au=e),t&&!me.immOn&&me.hold&&Ke==="imm"&&!Mn&&(Pt.textContent=me.hold.s,Pt.style.color=me.hold.c,yn.textContent=me.hold.d,Fn.textContent=me.hold.t),me.immOn){me.immT+=i,me.immT>=Ur&&(me.immT=Ur,me.immOn=!1,me.immDone=!0,me.hold={s:"MILL COMPLETE",c:"#7ee6a0",d:yn.textContent,t:Fn.textContent},Un.textContent="✓ Mill Complete",Un.classList.remove("running"),Un.classList.add("done"));let h=0,d=-1,p=0;for(let f=0;f<gt.length;f++){if(me.immT<h+gt[f].dur||f===gt.length-1){d=f,p=Math.min(1,(me.immT-h)/gt[f].dur);break}h+=gt[f].dur}if(me.immLocal=p,d!==me.immIdx){me.immIdx=d;const f=gt[d];Ke==="imm"&&(Pt.textContent=f.narr,Pt.style.color=f.color,yn.textContent=typeof f.detail=="function"?f.detail():f.detail)}const g=gt[d],x=d-1,m=x>=0?gt[x]:{tB:0,tS:25};me.press=g.cP?bx(g.cP[0],g.cP[1],p):me.press,me.beam=(m.tB||0)+(g.tB-(m.tB||0))*p,me.stage=(m.tS||25)+(g.tS-(m.tS||25))*p,me.etch=g.etch?p:d>Sx?1:0,me.elapsedReal=gt.slice(0,d).reduce((f,v,_)=>f+fa(_),0)+p*fa(d),me.tiltNow=g.tilt?nt.tilt:g.tiltOut?nt.tilt*(1-p):0,t&&(Fh.style.width=(me.immT/Ur*100).toFixed(1)+"%",Fn.textContent=`IBE · ${us(me.elapsedReal)} of ${us(gt.reduce((f,v,_)=>f+fa(_),0))} real · demo ${Math.round(me.immT)}s / ${Ur}s`)}if(t){document.getElementById("v1").textContent=Ex(me.press),document.getElementById("v2").textContent=me.beam.toFixed(2)+" mA/cm²",document.getElementById("v3").textContent=Math.round(me.stage)+" °C · "+Math.round(kr.radToDeg(Xr.rotation.x))+"° tilt";const h=me.etch*nt.depth,d=nt.UPPER-h;document.getElementById("v4").textContent=me.etch>0?Math.round(h*1e3)+" nm @ "+tl(nt.tilt).toFixed(0)+" nm/min":"—";const p=document.getElementById("v5");p.textContent=me.etch>0?d>0?d.toFixed(2)+" µm":"ACTIVE HIT":"—",p.style.color=me.etch>0&&d<.05?"#ff6a5a":"",document.getElementById("v6").textContent=me.etch>0?Math.max(0,nt.resistT-h/nt.sel).toFixed(2)+" µm":"—"}vi.plasma.opacity=me.beam*1.2,vi.plasmaCore.opacity=me.beam*1.8,vi.beam.opacity=me.beam*.8,vi.vpGlow.opacity=me.beam*.85,Eh.scale.setScalar(1+me.beam*.4),bh.scale.setScalar(1+me.beam*.3),Th.intensity=me.beam*10,Xr.rotation.x=kr.lerp(Xr.rotation.x,(me.tiltNow||0)*Math.PI/180,.1);const n=me.immOn&&gt[me.immIdx]&&gt[me.immIdx].hot,s=me.immOn&&gt[me.immIdx]&&gt[me.immIdx].open;mi+=((s?1:0)-mi)*Math.min(1,i*4),Ah.rotation.z=mi*1.5,Rh.rotation.z=-mi*1.5;const r=kr.lerp(Ox+.02,iu,mi);Ua.scale.y=Math.max(.02,(pa-r)/(pa-iu)),Ua.position.y=(pa+r)/2,nu.emissiveIntensity+=((n?2.2:0)-nu.emissiveIntensity)*Math.min(1,i*3),Nx.emissiveIntensity=me.beam*(1-mi)*.9;const a=me.immOn&&gt[me.immIdx]&&gt[me.immIdx].etch,o=a?1.5:0;jn.rotation.y+=o*i,Ch.rotation.y=jn.rotation.y;let u=.04;for(let h=os.length-1;h>=1;h--){const d=os[h];if(d&&d.meshes[0].visible){u=d.baseY+d.h*d.meshes[0].scale.y;break}}a&&jn.updateWorldMatrix(!0,!1),wh.forEach(h=>{if(a){if(h.mesh.visible=!0,h.age+=i*1.4,h.age>=1){h.age=0;const p=Math.random()<.5?-1:1,g=new C(p*(Fx/2+Math.random()*Bx*.9),u+.012,(Math.random()-.5)*.66);jn.localToWorld(g),_s.worldToLocal(g),h.mesh.position.copy(g),h.nrm=new C(0,1,0).transformDirection(jn.matrixWorld);const x=Math.random()*Math.PI*.5,m=Math.random()*Math.PI*2,f=.35+Math.random()*.7,v=new C(Math.sin(x)*Math.cos(m),0,Math.sin(x)*Math.sin(m)).multiplyScalar(.7),_=h.nrm.clone().multiplyScalar(Math.cos(x)).add(v).normalize().multiplyScalar(f);h.vx=_.x,h.vy=_.y,h.vz=_.z}h.mesh.position.x+=h.vx*i,h.mesh.position.y+=h.vy*i,h.mesh.position.z+=h.vz*i;const d=new C(h.vx,h.vy,h.vz).normalize();h.mesh.quaternion.setFromUnitVectors(new C(0,1,0),d),h.mesh.material.opacity=.85*(1-h.age)}else h.mesh.visible=!1});let l=me.etch*nt.depth;for(let h=os.length-1;h>=1;h--){const d=os[h];if(!d)continue;const p=Math.min(l,d.t),g=p/d.t,x=Math.max(5e-4,d.h*(1-g));d.meshes.forEach(m=>{m.visible=g<.999,m.scale.y=x/d.h,m.position.y=d.baseY+x/2}),l-=p}const c=Math.max(.02,1-me.etch*nt.depth/nt.sel/nt.resistT);Js.scale.y=c,Js.position.y=yh+Sh*c/2,t&&Lh.update(me.etch*nt.depth,c)}let Hr=-1/0,Vh=-1/0,uu=-1/0;const Wh=[],Xh=[];function hu(i,e){Number.isFinite(e)&&e>=0&&(i.push(e),i.length>90&&i.shift())}function du(i){if(!i.length)return null;const e=[...i].sort((t,n)=>t-n);return Number(e[Math.floor((e.length-1)*.95)].toFixed(2))}let Cs=0,Ps=0;for(const i of["pointerdown","pointermove","wheel"])yt.domElement.addEventListener(i,()=>{Vh=performance.now()},{passive:!0});function Yh(i=0){if(requestAnimationFrame(Yh),document.hidden){ga.getDelta();return}const e=Ke==="lpe"&&Mn||Ke==="imm"&&me.immOn||Ke==="mbe"&&(dt==null?void 0:dt.isRunning())||Ke==="cmp"&&(et==null?void 0:et.isRunning())||Ke==="litho"&&(it==null?void 0:it.isRunning())||Ke==="spin"&&(rt==null?void 0:rt.isRunning())||Ke==="implant"&&(ot==null?void 0:ot.isRunning()),t=!!Ln||i-Vh<750,n=Is?e||t?45:18:e||t?60:24;if(i-Hr<1e3/n)return;Number.isFinite(Hr)&&hu(Xh,i-Hr),Hr=i;const s=Math.min(ga.getDelta(),.22),r=ga.getElapsedTime();if(Ke==="lpe"?(lu(s,r),Cs=0):Mn&&(Cs+=s,Cs>=.1&&(lu(Cs,r),Cs=0)),Ke==="imm"?(cu(s,r),Ps=0):me.immOn&&(Ps+=s,Ps>=.1&&(cu(Ps,r),Ps=0)),dt&&(Ke==="mbe"||dt.isRunning())&&dt.update(s,r,Ke==="mbe"),et&&(Ke==="cmp"||et.isRunning())&&et.update(s,r,Ke==="cmp"),it&&(Ke==="litho"||it.isRunning())&&it.update(s,r,Ke==="litho"),rt&&(Ke==="spin"||rt.isRunning())&&rt.update(s,r,Ke==="spin"),ot&&(Ke==="implant"||ot.isRunning())&&ot.update(s,r,Ke==="implant"),Ln){const o=1-Math.exp(-9*s);kt.position.lerp(Ln.pos,o),ti.target.lerp(Ln.tgt,o),kt.position.distanceTo(Ln.pos)<.04&&ti.target.distanceTo(Ln.tgt)<.04&&(Ln=null)}ii.style.display!=="none"&&fi(ii,0,6.5,0),zn.style.display!=="none"&&fi(zn,In.imm.x,7.5,0),si.style.display!=="none"&&fi(si,In.mbe.x,8.2,0),ri.style.display!=="none"&&fi(ri,In.cmp.x,5.3,0),Gn.style.display!=="none"&&fi(Gn,In.litho.x,5,0),io.style.display!=="none"&&fi(io,In.spin.x,2.9,0),so.style.display!=="none"&&fi(so,In.implant.x,3.9,0),ti.update(),yt.shadowMap.enabled&&i-uu>400&&(e||t)&&(yt.shadowMap.needsUpdate=!0,uu=i);const a=performance.now();yt.render(sn,kt),hu(Wh,performance.now()-a)}window.addEventListener("resize",()=>{kt.aspect=window.innerWidth/window.innerHeight,_t=ah(Ct.layout,window.innerWidth,window.innerHeight),hs.overview.pos.set(_t.centerX,_t.targetY+_t.height,_t.distance),hs.overview.tgt.set(_t.centerX,_t.targetY,0),Is=window.innerWidth<900||!!(window.matchMedia&&window.matchMedia("(pointer:coarse)").matches);const i=Is?512:1024;vn.shadow.mapSize.x!==i&&(vn.shadow.mapSize.set(i,i),vn.shadow.map&&(vn.shadow.map.dispose(),vn.shadow.map=null)),yt.shadowMap.enabled=!Is,yt.shadowMap.needsUpdate=!0,yt.setSize(window.innerWidth,window.innerHeight),yt.setPixelRatio(Math.min(window.devicePixelRatio||1,Is?1:1.25)),Ke==="overview"&&(kt.fov=_t.fov,kt.far=Math.max(300,_t.distance*2.4),sn.fog.far=_t.fogFar,ti.maxDistance=_t.maxDistance,Ln=hs.overview),kt.updateProjectionMatrix()});window.__foundryDiagnostics=()=>({view:Ke,panels:zx.state(),rendererCount:document.querySelectorAll("canvas").length,mbeLoaded:!!dt,cmpLoaded:!!et,lithoLoaded:!!it,spinLoaded:!!rt,implantLoaded:!!ot,spinState:(rt==null?void 0:rt.getState())??null,implantState:(ot==null?void 0:ot.getState())??null,spinRenderOptimization:(rt==null?void 0:rt.renderOptimization)??null,implantRenderOptimization:(ot==null?void 0:ot.renderOptimization)??null,lithoState:(it==null?void 0:it.getState())??null,lithoRenderOptimization:(it==null?void 0:it.renderOptimization)??null,cmpState:(et==null?void 0:et.getState())??null,cmpGeometry:(et==null?void 0:et.geometry)??null,cmpRenderOptimization:(et==null?void 0:et.renderOptimization)??null,mbeRenderOptimization:(dt==null?void 0:dt.renderOptimization)??null,lpeRenderOptimization:Gx,immRenderOptimization:Hx,ionMill:{waferLocalPosition:jn.position.toArray(),waferMounted:jn.userData.mountedOnStage,assembly:_s.userData.ionMillAssembly,presetTilt:nt.tilt,presetDepth:nt.depth},detailed:{lpe:go.visible,imm:_s.visible,mbe:(dt==null?void 0:dt.MBE.visible)??!1,cmp:(et==null?void 0:et.group.visible)??!1,litho:(it==null?void 0:it.group.visible)??!1,spin:(rt==null?void 0:rt.group.visible)??!1,implant:(ot==null?void 0:ot.group.visible)??!1},proxies:Object.fromEntries(Object.entries(Ct.proxies).map(([i,e])=>[i,e.visible])),drawCalls:yt.info.render.calls,triangles:yt.info.render.triangles,lighting:{exposure:yt.toneMappingExposure,keyIntensity:vn.intensity,fillIntensity:Xs.intensity,fillTarget:Xs.target.position.toArray()},pixelRatio:yt.getPixelRatio(),shadowMap:yt.shadowMap.enabled,shadowResolution:vn.shadow.mapSize.x,ground:{floorSize:Ct.layout.floorSize,gridSize:Ct.layout.gridSize,gridDivisions:Ct.layout.gridDivisions,shared:!0},roomBounds:{minX:Ct.layout.minX,maxX:Ct.layout.maxX,centerX:Ct.layout.centerX,span:Ct.layout.span,wallWidth:Ct.layout.wallWidth},viewGeometry:{fov:kt.fov,far:kt.far,fogFar:sn.fog.far,maxDistance:ti.maxDistance},cpuRenderP95ms:du(Wh),frameIntervalP95ms:du(Xh),cameraPosition:kt.position.toArray(),cameraTarget:ti.target.toArray()});requestAnimationFrame(Yh);export{Us as A,pn as B,fn as C,Kt as D,Ja as E,lt as G,v_ as I,na as M,St as O,cn as P,Ti as Q,Qa as R,Ai as S,Ht as T,C as V,Ge as a,Ce as b,Aa as c,to as d,fo as e,dn as f,gs as g,ov as h,Ye as i,uo as j,Rc as k,Lt as l,el as m,nn as n,av as o,ya as p,Ei as q,th as r,Ra as s};

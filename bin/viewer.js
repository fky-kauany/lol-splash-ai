var Ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var zl=3;var ps=1,Kt=2,bn=0,Gl=1,Xn=2;var Ws=5,Xs=100;var qs=200,Ua=201;var Na=204,Fa=205,ka=206;var Oa=208;var Hl=3;var Vl=1,Wl=2,Xl=3,kr=4;var ql=6,Yl=7;var qt=1000;var ms=1003;var $l=1009;var Mn=1016;var Zl=1020;var jl=1023;var Jl=1027;var Kl=2200,gs=2201;var Ql=3201;var ec="",Nn="srgb";var tc="srgb";class ai{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}var nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Co=1234567,Os=Math.PI/180,Gs=180/Math.PI;function xi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[e&255]+nn[e>>8&255]+nn[e>>16&255]+nn[e>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function rn(e,t,n){return Math.max(t,Math.min(n,e))}function Ba(e,t){return(e%t+t)%t}function uh(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function dh(e,t,n){if(e!==t)return(n-e)/(t-e);else return 0}function Bs(e,t,n){return(1-n)*e+n*t}function fh(e,t,n,i){return Bs(e,t,1-Math.exp(-n*i))}function ph(e,t=1){return t-Math.abs(Ba(e,t*2)-t)}function mh(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*(3-2*e)}function gh(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10)}function vh(e,t){return e+Math.floor(Math.random()*(t-e+1))}function _h(e,t){return e+Math.random()*(t-e)}function xh(e){return e*(0.5-Math.random())}function yh(e){if(e!==void 0)Co=e;let t=Co+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bh(e){return e*Os}function Mh(e){return e*Gs}function Sh(e){return(e&e-1)===0&&e!==0}function wh(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Eh(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Th(e,t,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),f=a((t-i)/2),m=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":e.set(o*h,l*u,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*u,o*c);break;case"ZXZ":e.set(l*u,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*_,l*m,o*c);break;case"YXY":e.set(l*m,o*h,l*_,o*c);break;case"ZYZ":e.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function cn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("Invalid component type.")}}var kt={DEG2RAD:Os,RAD2DEG:Gs,generateUUID:xi,clamp:rn,euclideanModulo:Ba,mapLinear:uh,inverseLerp:dh,lerp:Bs,damp:fh,pingpong:ph,smoothstep:mh,smootherstep:gh,randInt:vh,randFloat:_h,randFloatSpread:xh,seededRandom:yh,degToRad:bh,radToDeg:Mh,isPowerOfTwo:Sh,ceilPowerOfTwo:wh,floorPowerOfTwo:Eh,setQuaternionFromProperEuler:Th,normalize:cn,denormalize:cs};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,i,s,r,a,o,l){if(lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l)}set(e,t,n,i,s,r,a,o,l){let c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],f=n[5],m=n[8],_=i[0],v=i[3],d=i[6],p=i[1],w=i[4],y=i[7],T=i[2],H=i[5],S=i[8];return s[0]=r*_+a*p+o*T,s[3]=r*v+a*w+o*H,s[6]=r*d+a*y+o*S,s[1]=l*_+c*p+h*T,s[4]=l*v+c*w+h*H,s[7]=l*d+c*y+h*S,s[2]=u*_+f*p+m*T,s[5]=u*v+f*w+m*H,s[8]=u*d+f*y+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*r*c-t*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=c*r-a*l,u=a*o-c*s,f=l*s-r*o,m=t*h+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=h*_,e[1]=(i*l-c*n)*_,e[2]=(a*n-i*r)*_,e[3]=u*_,e[4]=(c*t-i*o)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*o-l*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+e,-i*l,i*o,-i*(-l*r+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var Qr=new lt;function nc(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ur(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ah(){let e=Ur("canvas");return e.style.display="block",e}var Ro={};function Fs(e){if(e in Ro)return;Ro[e]=!0,console.warn(e)}function Ch(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function Rh(e){let t=e.elements;t[2]=0.5*t[2]+0.5*t[3],t[6]=0.5*t[6]+0.5*t[7],t[10]=0.5*t[10]+0.5*t[11],t[14]=0.5*t[14]+0.5*t[15]}function Ph(e){let t=e.elements;if(t[11]===-1)t[10]=-t[10]-1,t[14]=-t[14];else t[10]=-t[10],t[14]=-t[14]+1}var gt={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;if(this.spaces[t].transfer==="srgb")e.r=ri(e.r),e.g=ri(e.g),e.b=ri(e.b);if(this.spaces[t].primaries!==this.spaces[n].primaries)e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ);if(this.spaces[n].transfer==="srgb")e.r=us(e.r),e.g=us(e.g),e.b=us(e.b);return e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){if(e==="")return"linear";return this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function ri(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function us(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var Po=[0.64,0.33,0.3,0.6,0.15,0.06],Io=[0.2126,0.7152,0.0722],Do=[0.3127,0.329],Lo=new lt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Uo=new lt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);gt.define({["srgb-linear"]:{primaries:Po,whitePoint:Do,transfer:"linear",toXYZ:Lo,fromXYZ:Uo,luminanceCoefficients:Io,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Po,whitePoint:Do,transfer:"srgb",toXYZ:Lo,fromXYZ:Uo,luminanceCoefficients:Io,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}});var Zi;class ic{static getDataURL(e){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{if(Zi===void 0)Zi=Ur("canvas");Zi.width=e.width,Zi.height=e.height;let n=Zi.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);t=Zi}if(t.width>2048||t.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",0.6);else return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ri(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(ri(t[n]/255)*255);else t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Ih=0;class za{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(ea(i[r].image));else s.push(ea(i[r]))}else s=ea(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function ea(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return ic.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var Dh=0;class Ut extends ai{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Ut.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=xi(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=300;Ut.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,i=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,r=0.01,a=0.1,o=e.elements,l=o[0],c=o[4],h=o[8],u=o[1],f=o[5],m=o[9],_=o[2],v=o[6],d=o[10];if(Math.abs(c-u)<0.01&&Math.abs(h-_)<0.01&&Math.abs(m-v)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(h+_)<0.1&&Math.abs(m+v)<0.1&&Math.abs(l+f+d-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(f+1)/2,T=(d+1)/2,H=(c+u)/4,S=(h+_)/4,A=(m+v)/4;if(w>y&&w>T)if(w<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(w),i=H/n,s=S/n;else if(y>T)if(y<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(y),n=H/i,s=A/i;else if(T<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(T),n=S/s,i=A/s;return this.set(n,i,s,t),this}let p=Math.sqrt((v-m)*(v-m)+(h-_)*(h-_)+(u-c)*(u-c));if(Math.abs(p)<0.001)p=1;return this.x=(v-m)/p,this.y=(h-_)/p,this.z=(u-c)/p,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sc extends ai{constructor(e=1,t=1,n={}){super();this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);if(this.texture.source=new za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null)this.depthTexture=e.depthTexture.clone();return this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nt extends sc{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class Ga extends Ut{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rc extends Ut{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r+0],f=s[r+1],m=s[r+2],_=s[r+3];if(a===0){e[t+0]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||o!==u||l!==f||c!==m){let v=1-a,d=o*u+l*f+c*m+h*_,p=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){let T=Math.sqrt(w),H=Math.atan2(T,d*p);v=Math.sin(v*H)/T,a=Math.sin(a*H)/T}let y=a*p;if(o=o*v+u*y,l=l*v+f*y,c=c*v+m*y,h=h*v+_*y,v===1-a){let T=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=T,l*=T,c*=T,h*=T}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],u=s[r+1],f=s[r+2],m=s[r+3];return e[t]=a*m+c*h+o*f-l*u,e[t+1]=o*m+c*u+l*h-a*f,e[t+2]=l*m+c*f+a*u-o*h,e[t+3]=c*m-a*h-o*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:i,_z:s,_order:r}=e,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),h=a(s/2),u=o(n/2),f=o(i/2),m=o(s/2);switch(r){case"XYZ":this._x=u*c*h+l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h-u*f*m;break;case"YXZ":this._x=u*c*h+l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h+u*f*m;break;case"ZXY":this._x=u*c*h-l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h-u*f*m;break;case"ZYX":this._x=u*c*h-l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h+u*f*m;break;case"YZX":this._x=u*c*h+l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h-u*f*m;break;case"XZY":this._x=u*c*h-l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],u=n+a+h;if(u>0){let f=0.5/Math.sqrt(u+1);this._w=0.25/f,this._x=(c-o)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(c-o)/f,this._x=0.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(i+r)/f,this._y=0.25*f,this._z=(o+c)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(o+c)/f,this._z=0.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<Number.EPSILON)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,a=t._x,o=t._y,l=t._z,c=t._w;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,r=this._w,a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0)this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a;else this.copy(e);if(a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let o=1-a*a;if(o<=Number.EPSILON){let f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(No.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(No.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,o=e.w,l=2*(r*i-a*n),c=2*(a*t-s*i),h=2*(s*n-r*t);return this.x=t+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:i,z:s}=e,r=t.x,a=t.y,o=t.z;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ta=new R,No=new Vt;class pn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(e.isMesh===!0)e.getVertexPosition(r,In);else In.fromBufferAttribute(s,r);In.applyMatrix4(e.matrixWorld),this.expandByPoint(In)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();rr.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();rr.copy(n.boundingBox)}rr.applyMatrix4(e.matrixWorld),this.union(rr)}}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),ar.subVectors(this.max,Cs),ji.subVectors(e.a,Cs),Ji.subVectors(e.b,Cs),Ki.subVectors(e.c,Cs),ui.subVectors(Ji,ji),di.subVectors(Ki,Ji),Ai.subVectors(ji,Ki);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ai.z,Ai.y,ui.z,0,-ui.x,di.z,0,-di.x,Ai.z,0,-Ai.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ai.y,Ai.x,0];if(!na(t,ji,Ji,Ki,ar))return!1;if(t=[1,0,0,0,1,0,0,0,1],!na(t,ji,Ji,Ki,ar))return!1;return or.crossVectors(ui,di),t=[or.x,or.y,or.z],na(t,ji,Ji,Ki,ar)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(In).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}var ei=[new R,new R,new R,new R,new R,new R,new R,new R],In=new R,rr=new pn,ji=new R,Ji=new R,Ki=new R,ui=new R,di=new R,Ai=new R,Cs=new R,ar=new R,or=new R,Ci=new R;function na(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Ci.fromArray(e,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=n.dot(Ci),h=i.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lh=new pn,Rs=new R,ia=new R;class qn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else Lh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);let t=Rs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(ia)),this.expandByPoint(Rs.copy(e.center).sub(ia));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}var ti=new R,sa=new R,lr=new R,fi=new R,ra=new R,cr=new R,aa=new R;class yi{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){sa.copy(e).add(t).multiplyScalar(0.5),lr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(sa);let s=e.distanceTo(t)*0.5,r=-this.direction.dot(lr),a=fi.dot(this.direction),o=-fi.dot(lr),l=fi.lengthSq(),c=Math.abs(1-r*r),h,u,f,m;if(c>0)if(h=r*o-a,u=r*a-o,m=s*c,h>=0)if(u>=-m)if(u<=m){let _=1/c;h*=_,u*=_,f=h*(h+r*u+2*a)+u*(r*h+u+2*o)+l}else u=s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*o)+l;else u=-s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*o)+l;else if(u<=-m)h=Math.max(0,-(-r*s+a)),u=h>0?-s:Math.min(Math.max(-s,-o),s),f=-h*h+u*(u+2*o)+l;else if(u<=m)h=0,u=Math.min(Math.max(-s,-o),s),f=u*(u+2*o)+l;else h=Math.max(0,-(r*s+a)),u=h>0?s:Math.min(Math.max(-s,-o),s),f=-h*h+u*(u+2*o)+l;else u=r>0?-s:s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(sa).addScaledVector(lr,u);return f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),i=ti.dot(ti)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,t);return this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;if(l>=0)n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l;else n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l;if(c>=0)s=(e.min.y-u.y)*c,r=(e.max.y-u.y)*c;else s=(e.max.y-u.y)*c,r=(e.min.y-u.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(e.min.z-u.z)*h,o=(e.max.z-u.z)*h;else a=(e.max.z-u.z)*h,o=(e.min.z-u.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,i,s){ra.subVectors(t,e),cr.subVectors(n,e),aa.crossVectors(ra,cr);let r=this.direction.dot(aa),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;fi.subVectors(this.origin,e);let o=a*this.direction.dot(cr.crossVectors(fi,cr));if(o<0)return null;let l=a*this.direction.dot(ra.cross(fi));if(l<0)return null;if(o+l>r)return null;let c=-a*fi.dot(aa);if(c<0)return null;return this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,s,r,a,o,l,c,h,u,f,m,_,v){if(Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l,c,h,u,f,m,_,v)}set(e,t,n,i,s,r,a,o,l,c,h,u,f,m,_,v){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=r,d[9]=a,d[13]=o,d[2]=l,d[6]=c,d[10]=h,d[14]=u,d[3]=f,d[7]=m,d[11]=_,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),r=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let u=r*c,f=r*h,m=a*c,_=a*h;t[0]=o*c,t[4]=-o*h,t[8]=l,t[1]=f+m*l,t[5]=u-_*l,t[9]=-a*o,t[2]=_-u*l,t[6]=m+f*l,t[10]=r*o}else if(e.order==="YXZ"){let u=o*c,f=o*h,m=l*c,_=l*h;t[0]=u+_*a,t[4]=m*a-f,t[8]=r*l,t[1]=r*h,t[5]=r*c,t[9]=-a,t[2]=f*a-m,t[6]=_+u*a,t[10]=r*o}else if(e.order==="ZXY"){let u=o*c,f=o*h,m=l*c,_=l*h;t[0]=u-_*a,t[4]=-r*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=r*c,t[9]=_-u*a,t[2]=-r*l,t[6]=a,t[10]=r*o}else if(e.order==="ZYX"){let u=r*c,f=r*h,m=a*c,_=a*h;t[0]=o*c,t[4]=m*l-f,t[8]=u*l+_,t[1]=o*h,t[5]=_*l+u,t[9]=f*l-m,t[2]=-l,t[6]=a*o,t[10]=r*o}else if(e.order==="YZX"){let u=r*o,f=r*l,m=a*o,_=a*l;t[0]=o*c,t[4]=_-u*h,t[8]=m*h+f,t[1]=h,t[5]=r*c,t[9]=-a*c,t[2]=-l*c,t[6]=f*h+m,t[10]=u-_*h}else if(e.order==="XZY"){let u=r*o,f=r*l,m=a*o,_=a*l;t[0]=o*c,t[4]=-h,t[8]=l*c,t[1]=u*h+_,t[5]=r*c,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*c,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uh,e,Nh)}lookAt(e,t,n){let i=this.elements;if(xn.subVectors(e,t),xn.lengthSq()===0)xn.z=1;if(xn.normalize(),pi.crossVectors(n,xn),pi.lengthSq()===0){if(Math.abs(n.z)===1)xn.x+=0.0001;else xn.z+=0.0001;xn.normalize(),pi.crossVectors(n,xn)}return pi.normalize(),hr.crossVectors(xn,pi),i[0]=pi.x,i[4]=hr.x,i[8]=xn.x,i[1]=pi.y,i[5]=hr.y,i[9]=xn.y,i[2]=pi.z,i[6]=hr.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],f=n[13],m=n[2],_=n[6],v=n[10],d=n[14],p=n[3],w=n[7],y=n[11],T=n[15],H=i[0],S=i[4],A=i[8],X=i[12],x=i[1],b=i[5],P=i[9],O=i[13],se=i[2],Z=i[6],le=i[10],N=i[14],K=i[3],j=i[7],de=i[11],me=i[15];return s[0]=r*H+a*x+o*se+l*K,s[4]=r*S+a*b+o*Z+l*j,s[8]=r*A+a*P+o*le+l*de,s[12]=r*X+a*O+o*N+l*me,s[1]=c*H+h*x+u*se+f*K,s[5]=c*S+h*b+u*Z+f*j,s[9]=c*A+h*P+u*le+f*de,s[13]=c*X+h*O+u*N+f*me,s[2]=m*H+_*x+v*se+d*K,s[6]=m*S+_*b+v*Z+d*j,s[10]=m*A+_*P+v*le+d*de,s[14]=m*X+_*O+v*N+d*me,s[3]=p*H+w*x+y*se+T*K,s[7]=p*S+w*b+y*Z+T*j,s[11]=p*A+w*P+y*le+T*de,s[15]=p*X+w*O+y*N+T*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],o=e[9],l=e[13],c=e[2],h=e[6],u=e[10],f=e[14],m=e[3],_=e[7],v=e[11],d=e[15];return m*(+s*o*h-i*l*h-s*a*u+n*l*u+i*a*f-n*o*f)+_*(+t*o*f-t*l*u+s*r*u-i*r*f+i*l*c-s*o*c)+v*(+t*l*h-t*a*f-s*r*h+n*r*f+s*a*c-n*l*c)+d*(-i*a*c-t*o*h+t*a*u+i*r*h-n*r*u+n*o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;if(e.isVector3)i[12]=e.x,i[13]=e.y,i[14]=e.z;else i[12]=e,i[13]=t,i[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=e[9],u=e[10],f=e[11],m=e[12],_=e[13],v=e[14],d=e[15],p=h*v*l-_*u*l+_*o*f-a*v*f-h*o*d+a*u*d,w=m*u*l-c*v*l-m*o*f+r*v*f+c*o*d-r*u*d,y=c*_*l-m*h*l+m*a*f-r*_*f-c*a*d+r*h*d,T=m*h*o-c*_*o-m*a*u+r*_*u+c*a*v-r*h*v,H=t*p+n*w+i*y+s*T;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/H;return e[0]=p*S,e[1]=(_*u*s-h*v*s-_*i*f+n*v*f+h*i*d-n*u*d)*S,e[2]=(a*v*s-_*o*s+_*i*l-n*v*l-a*i*d+n*o*d)*S,e[3]=(h*o*s-a*u*s-h*i*l+n*u*l+a*i*f-n*o*f)*S,e[4]=w*S,e[5]=(c*v*s-m*u*s+m*i*f-t*v*f-c*i*d+t*u*d)*S,e[6]=(m*o*s-r*v*s-m*i*l+t*v*l+r*i*d-t*o*d)*S,e[7]=(r*u*s-c*o*s+c*i*l-t*u*l-r*i*f+t*o*f)*S,e[8]=y*S,e[9]=(m*h*s-c*_*s-m*n*f+t*_*f+c*n*d-t*h*d)*S,e[10]=(r*_*s-m*a*s+m*n*l-t*_*l-r*n*d+t*a*d)*S,e[11]=(c*a*s-r*h*s-c*n*l+t*h*l+r*n*f-t*a*f)*S,e[12]=T*S,e[13]=(c*_*i-m*h*i+m*n*u-t*_*u-c*n*v+t*h*v)*S,e[14]=(m*a*i-r*_*i-m*n*o+t*_*o+r*n*v-t*a*v)*S,e[15]=(r*h*i-c*a*i+c*n*o-t*h*o-r*n*u+t*a*u)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,o=e.z,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,r=t._y,a=t._z,o=t._w,l=s+s,c=r+r,h=a+a,u=s*l,f=s*c,m=s*h,_=r*c,v=r*h,d=a*h,p=o*l,w=o*c,y=o*h,T=n.x,H=n.y,S=n.z;return i[0]=(1-(_+d))*T,i[1]=(f+y)*T,i[2]=(m-w)*T,i[3]=0,i[4]=(f-y)*H,i[5]=(1-(u+d))*H,i[6]=(v+p)*H,i[7]=0,i[8]=(m+w)*S,i[9]=(v-p)*S,i[10]=(1-(u+_))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Qi.set(i[0],i[1],i[2]).length(),r=Qi.set(i[4],i[5],i[6]).length(),a=Qi.set(i[8],i[9],i[10]).length();if(this.determinant()<0)s=-s;e.x=i[12],e.y=i[13],e.z=i[14],Dn.copy(this);let l=1/s,c=1/r,h=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=c,Dn.elements[5]*=c,Dn.elements[6]*=c,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=2000){let o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f,m;if(a===2000)f=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===2001)f=-r/(r-s),m=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=2000){let o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,f=(n+i)*c,m,_;if(a===2000)m=(r+s)*h,_=-2*h;else if(a===2001)m=s*h,_=-1*h;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=_,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}var Qi=new R,Dn=new Je,Uh=new R(0,0,0),Nh=new R(1,1,1),pi=new R,hr=new R,xn=new R,Fo=new Je,ko=new Vt;class fn{constructor(e=0,t=0,n=0,i=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":if(this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,f),this._z=Math.atan2(-r,s);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-rn(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,f),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(rn(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(u,f),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(rn(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,f);break;case"XZY":if(this._z=Math.asin(-rn(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,f),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return Fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ko.setFromEuler(this),this.setFromQuaternion(ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Or{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Fh=0,Oo=new R,es=new Vt,ni=new Je,ur=new R,Ps=new R,kh=new R,Oh=new Vt,Bo=new R(1,0,0),zo=new R(0,1,0),Go=new R(0,0,1),Ho={type:"added"},Bh={type:"removed"},ts={type:"childadded",child:null},oa={type:"childremoved",child:null};class Gt extends ai{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();let e=new R,t=new fn,n=new Vt,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new lt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Bo,e)}rotateY(e){return this.rotateOnAxis(zo,e)}rotateZ(e){return this.rotateOnAxis(Go,e)}translateOnAxis(e,t){return Oo.copy(e).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bo,e)}translateY(e){return this.translateOnAxis(zo,e)}translateZ(e){return this.translateOnAxis(Go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)ur.copy(e);else ur.set(e,t,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)ni.lookAt(Ps,ur,this.up);else ni.lookAt(ur,Ps,this.up);if(this.quaternion.setFromRotationMatrix(ni),i)ni.extractRotation(i.matrixWorld),es.setFromRotationMatrix(ni),this.quaternion.premultiply(es.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ho),ts.child=e,this.dispatchEvent(ts),ts.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bh),oa.child=e,this.dispatchEvent(oa),oa.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld);return e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ho),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(t===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((a)=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius};if(this.boundingBox!==null)i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(e);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(e.shapes,h)}else s(e.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(e.materials,this.material[o]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(e.animations,o))}}if(t){let a=r(e.geometries),o=r(e.materials),l=r(e.textures),c=r(e.images),h=r(e.shapes),u=r(e.skeletons),f=r(e.animations),m=r(e.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(u.length>0)n.skeletons=u;if(f.length>0)n.animations=f;if(m.length>0)n.nodes=m}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new R(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new R,ii=new R,la=new R,si=new R,ns=new R,is=new R,Vo=new R,ca=new R,ha=new R,ua=new R,da=new wt,fa=new wt,pa=new wt;class Un{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ln.subVectors(i,t),ii.subVectors(n,t),la.subVectors(e,t);let r=Ln.dot(Ln),a=Ln.dot(ii),o=Ln.dot(la),l=ii.dot(ii),c=ii.dot(la),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,f=(l*o-a*c)*u,m=(r*c-a*o)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,si)===null)return!1;return si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,i,s,r,a,o){if(this.getBarycoord(e,t,n,i,si)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,si.x),o.addScaledVector(r,si.y),o.addScaledVector(a,si.z),o}static getInterpolatedAttribute(e,t,n,i,s,r){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(e,t),fa.fromBufferAttribute(e,n),pa.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(da,s.x),r.addScaledVector(fa,s.y),r.addScaledVector(pa,s.z),r}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),ii.subVectors(e,t),Ln.cross(ii).dot(i)<0?!0:!1}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ln.cross(ii).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,a;ns.subVectors(i,n),is.subVectors(s,n),ca.subVectors(e,n);let o=ns.dot(ca),l=is.dot(ca);if(o<=0&&l<=0)return t.copy(n);ha.subVectors(e,i);let c=ns.dot(ha),h=is.dot(ha);if(c>=0&&h<=c)return t.copy(i);let u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return r=o/(o-c),t.copy(n).addScaledVector(ns,r);ua.subVectors(e,s);let f=ns.dot(ua),m=is.dot(ua);if(m>=0&&f<=m)return t.copy(s);let _=f*l-o*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(is,a);let v=c*m-f*h;if(v<=0&&h-c>=0&&f-m>=0)return Vo.subVectors(s,i),a=(h-c)/(h-c+(f-m)),t.copy(i).addScaledVector(Vo,a);let d=1/(v+_+u);return r=_*d,a=u*d,t.copy(n).addScaledVector(ns,r).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}var ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},dr={h:0,s:0,l:0};function ma(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=Ba(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ma(r,s,e+0.3333333333333333),this.g=ma(r,s,e),this.b=ma(r,s,e-0.3333333333333333)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=ac[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else console.warn("THREE.Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return gt.fromWorkingColorSpace(sn.copy(this),e),Math.round(rn(sn.r*255,0,255))*65536+Math.round(rn(sn.g*255,0,255))*256+Math.round(rn(sn.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(sn.copy(this),t);let{r:n,g:i,b:s}=sn,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e="srgb"){gt.fromWorkingColorSpace(sn.copy(this),e);let{r:t,g:n,b:i}=sn;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(dr);let n=Bs(mi.h,dr.h,t),i=Bs(mi.s,dr.s,t),s=Bs(mi.l,dr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var sn=new Oe;Oe.NAMES=ac;var zh=0;class Yn extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=xi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(t){let s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ot extends Yn{static get type(){return"MeshBasicMaterial"}constructor(e){super();this.isMeshBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var zt=new R,fr=new Ne;class ft{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=cs(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=cn(n,this.array);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=cs(t,this.array);return t}setX(e,t){if(this.normalized)t=cn(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=cs(t,this.array);return t}setY(e,t){if(this.normalized)t=cn(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=cs(t,this.array);return t}setZ(e,t){if(this.normalized)t=cn(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=cs(t,this.array);return t}setW(e,t){if(this.normalized)t=cn(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=cn(t,this.array),n=cn(n,this.array);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){if(e*=this.itemSize,this.normalized)t=cn(t,this.array),n=cn(n,this.array),i=cn(i,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e*=this.itemSize,this.normalized)t=cn(t,this.array),n=cn(n,this.array),i=cn(i,this.array),s=cn(s,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")e.name=this.name;if(this.usage!==35044)e.usage=this.usage;return e}}class Ys extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ha extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}var Gh=0,En=new Je,ga=new Gt,ss=new R,yn=new pn,Is=new pn,$t=new R;class Pt extends ai{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((nc(e))?Ha:Ys)(e,1);else this.index=e;return this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(e),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ft(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}if(e.length>t.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new pn;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];if(yn.setFromBufferAttribute(s),this.morphTargetsRelative)$t.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint($t);else this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new qn;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let a=t[s];if(Is.setFromBufferAttribute(a),this.morphTargetsRelative)$t.addVectors(yn.min,Is.min),yn.expandByPoint($t),$t.addVectors(yn.max,Is.max),yn.expandByPoint($t);else yn.expandByPoint(Is.min),yn.expandByPoint(Is.max)}yn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)$t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($t));if(t)for(let s=0,r=t.length;s<r;s++){let a=t[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if($t.fromBufferAttribute(a,l),o)ss.fromBufferAttribute(e,l),$t.add(ss);i=Math.max(i,n.distanceToSquared($t))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=t;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new ft(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),a=[],o=[];for(let A=0;A<n.count;A++)a[A]=new R,o[A]=new R;let l=new R,c=new R,h=new R,u=new Ne,f=new Ne,m=new Ne,_=new R,v=new R;function d(A,X,x){l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,X),h.fromBufferAttribute(n,x),u.fromBufferAttribute(s,A),f.fromBufferAttribute(s,X),m.fromBufferAttribute(s,x),c.sub(l),h.sub(l),f.sub(u),m.sub(u);let b=1/(f.x*m.y-m.x*f.y);if(!isFinite(b))return;_.copy(c).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(b),v.copy(h).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(b),a[A].add(_),a[X].add(_),a[x].add(_),o[A].add(v),o[X].add(v),o[x].add(v)}let p=this.groups;if(p.length===0)p=[{start:0,count:e.count}];for(let A=0,X=p.length;A<X;++A){let x=p[A],b=x.start,P=x.count;for(let O=b,se=b+P;O<se;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let w=new R,y=new R,T=new R,H=new R;function S(A){T.fromBufferAttribute(i,A),H.copy(T);let X=a[A];w.copy(X),w.sub(T.multiplyScalar(T.dot(X))).normalize(),y.crossVectors(H,X);let b=y.dot(o[A])<0?-1:1;r.setXYZW(A,w.x,w.y,w.z,b)}for(let A=0,X=p.length;A<X;++A){let x=p[A],b=x.start,P=x.count;for(let O=b,se=b+P;O<se;O+=3)S(e.getX(O+0)),S(e.getX(O+1)),S(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new R,s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),_=e.getX(u+1),v=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),a.add(c),o.add(c),l.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,o){let{array:l,itemSize:c,normalized:h}=a,u=new l.constructor(o.length*c),f=0,m=0;for(let _=0,v=o.length;_<v;_++){if(a.isInterleavedBufferAttribute)f=o[_]*a.data.stride+a.offset;else f=o[_]*c;for(let d=0;d<c;d++)u[m++]=l[f++]}return new ft(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Pt,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=e(o,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let u=l[c],f=e(u,n);o.push(f)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!=="")e.name=this.name;if(Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)e[l]=o[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let o in n){let l=n[o];e.data.attributes[o]=l.toJSON(e.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,u=l.length;h<u;h++){let f=l[h];c.push(f.toJSON(e.data))}if(c.length>0)i[o]=c,s=!0}if(s)e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)e.data.boundingSphere={center:a.center.toArray(),radius:a.radius};return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],h=s[l];for(let u=0,f=h.length;u<f;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=e.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Wo=new Je,Ri=new yi,pr=new qn,Xo=new R,mr=new R,gr=new R,vr=new R,va=new R,_r=new R,qo=new R,xr=new R;class rt extends Gt{constructor(e=new Pt,t=new Ot){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){_r.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(va.fromBufferAttribute(h,e),r)_r.addScaledVector(va,c);else _r.addScaledVector(va.sub(t),c)}t.add(_r)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(pr.copy(n.boundingSphere),pr.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),pr.containsPoint(Ri.origin)===!1){if(Ri.intersectSphere(pr,Xo)===null)return;if(Ri.origin.distanceToSquared(Xo)>(e.far-e.near)**2)return}if(Wo.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(Wo),n.boundingBox!==null){if(Ri.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,Ri)}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){let v=u[m],d=r[v.materialIndex],p=Math.max(v.start,f.start),w=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let y=p,T=w;y<T;y+=3){let H=a.getX(y),S=a.getX(y+1),A=a.getX(y+2);if(i=yr(this,d,e,n,l,c,h,H,S,A),i)i.faceIndex=Math.floor(y/3),i.face.materialIndex=v.materialIndex,t.push(i)}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let v=m,d=_;v<d;v+=3){let p=a.getX(v),w=a.getX(v+1),y=a.getX(v+2);if(i=yr(this,r,e,n,l,c,h,p,w,y),i)i.faceIndex=Math.floor(v/3),t.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){let v=u[m],d=r[v.materialIndex],p=Math.max(v.start,f.start),w=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let y=p,T=w;y<T;y+=3){let H=y,S=y+1,A=y+2;if(i=yr(this,d,e,n,l,c,h,H,S,A),i)i.faceIndex=Math.floor(y/3),i.face.materialIndex=v.materialIndex,t.push(i)}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let v=m,d=_;v<d;v+=3){let p=v,w=v+1,y=v+2;if(i=yr(this,r,e,n,l,c,h,p,w,y),i)i.faceIndex=Math.floor(v/3),t.push(i)}}}}function Hh(e,t,n,i,s,r,a,o){let l;if(t.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,t.side===0,o);if(l===null)return null;xr.copy(o),xr.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(xr);if(c<n.near||c>n.far)return null;return{distance:c,point:xr.clone(),object:e}}function yr(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,mr),e.getVertexPosition(l,gr),e.getVertexPosition(c,vr);let h=Hh(e,t,n,i,mr,gr,vr,qo);if(h){let u=new R;if(Un.getBarycoord(qo,mr,gr,vr,u),s)h.uv=Un.getInterpolatedAttribute(s,o,l,c,u,new Ne);if(r)h.uv1=Un.getInterpolatedAttribute(r,o,l,c,u,new Ne);if(a){if(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let f={a:o,b:l,c,normal:new R,materialIndex:0};Un.getNormal(mr,gr,vr,f.normal),h.face=f,h.barycoord=u}return h}class Fn extends Pt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(h,2));function m(_,v,d,p,w,y,T,H,S,A,X){let x=y/S,b=T/A,P=y/2,O=T/2,se=H/2,Z=S+1,le=A+1,N=0,K=0,j=new R;for(let de=0;de<le;de++){let me=de*b-O;for(let Ce=0;Ce<Z;Ce++){let ge=Ce*x-P;j[_]=ge*p,j[v]=me*w,j[d]=se,l.push(j.x,j.y,j.z),j[_]=0,j[v]=0,j[d]=H>0?1:-1,c.push(j.x,j.y,j.z),h.push(Ce/S),h.push(1-de/A),N+=1}}for(let de=0;de<A;de++)for(let me=0;me<S;me++){let Ce=u+me+Z*de,ge=u+me+Z*(de+1),J=u+(me+1)+Z*(de+1),ue=u+(me+1)+Z*de;o.push(Ce,ge,ue),o.push(ge,J,ue),K+=6}a.addGroup(f,K,X),f+=K,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion))if(s.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null;else t[n][i]=s.clone();else if(Array.isArray(s))t[n][i]=s.slice();else t[n][i]=s}}return t}function hn(e){let t={};for(let n=0;n<e.length;n++){let i=ds(e[n]);for(let s in i)t[s]=i[s]}return t}function Vh(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function oc(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return gt.workingColorSpace}var Zt={clone:ds,merge:hn},Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xt extends Yn{static get type(){return"ShaderMaterial"}constructor(e){super();if(this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}}class Va extends Gt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=2000}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var gi=new R,Yo=new Ne,$o=new Ne;class Ht extends Va{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Os*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Os*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Yo,$o),t.subVectors($o,Yo)}setViewOffset(e,t,n,i,s,r){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Os*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,t-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=e*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}var rs=-90,as=1;class lc extends Gt{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(rs,as,e,t);i.layers=this.layers,this.add(i);let s=new Ht(rs,as,e,t);s.layers=this.layers,this.add(s);let r=new Ht(rs,as,e,t);r.layers=this.layers,this.add(r);let a=new Ht(rs,as,e,t);a.layers=this.layers,this.add(a);let o=new Ht(rs,as,e,t);o.layers=this.layers,this.add(o);let l=new Ht(rs,as,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,o]=t;for(let l of t)this.remove(l);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,o),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,c),e.setRenderTarget(h,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Wa extends Ut{constructor(e,t,n,i,s,r,a,o,l,c){e=e!==void 0?e:[],t=t!==void 0?t:301;super(e,t,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cc extends Nt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fn(5,5,5),s=new xt({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let r=new rt(i,s),a=t.minFilter;if(t.minFilter===1008)t.minFilter=1006;return new lc(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}var _a=new R,qh=new R,Yh=new lt;class Hn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=_a.subVectors(n,t).cross(qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_a),i=this.normal.dot(n);if(i===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/i;if(s<0||s>1)return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yh.getNormalMatrix(e),i=this.coplanarPoint(_a).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Pi=new qn,br=new R;class Br{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,s=new Hn,r=new Hn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000){let n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],f=i[8],m=i[9],_=i[10],v=i[11],d=i[12],p=i[13],w=i[14],y=i[15];if(n[0].setComponents(o-s,u-l,v-f,y-d).normalize(),n[1].setComponents(o+s,u+l,v+f,y+d).normalize(),n[2].setComponents(o+r,u+c,v+m,y+p).normalize(),n[3].setComponents(o-r,u-c,v-m,y-p).normalize(),n[4].setComponents(o-a,u-h,v-_,y-w).normalize(),t===2000)n[5].setComponents(o+a,u+h,v+_,y+w).normalize();else if(t===2001)n[5].setComponents(a,h,_,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=0.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(br.x=i.normal.x>0?e.max.x:e.min.x,br.y=i.normal.y>0?e.max.y:e.min.y,br.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hc(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){if(t===!0)return;if(n===null)return;i=e.requestAnimationFrame(s),t=!0},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function $h(e){let t=new WeakMap;function n(o,l){let{array:c,usage:h}=o,u=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)m=e.HALF_FLOAT;else m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let{array:h,updateRanges:u}=l;if(e.bindBuffer(c,o),u.length===0)e.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){let _=u[f],v=u[m];if(v.start<=_.start+_.count+1)_.count=Math.max(_.count,v.start+v.count-_.start);else++f,u[f]=v}u.length=f+1;for(let m=0,_=u.length;m<_;m++){let v=u[m];e.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return t.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=t.get(o);if(l)e.deleteBuffer(l.buffer),t.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let h=t.get(o);if(!h||h.version<o.version)t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class vs extends Pt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=e/a,u=t/o,f=[],m=[],_=[],v=[];for(let d=0;d<c;d++){let p=d*u-r;for(let w=0;w<l;w++){let y=w*h-s;m.push(y,-p,0),_.push(0,0,1),v.push(w/a),v.push(1-d/o)}}for(let d=0;d<o;d++)for(let p=0;p<a;p++){let w=p+l*d,y=p+l*(d+1),T=p+1+l*(d+1),H=p+1+l*d;f.push(w,y,H),f.push(y,T,H)}this.setIndex(f),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jh=`#ifdef USE_ALPHAHASH
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
#endif`,Jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tu=`#ifdef USE_AOMAP
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
#endif`,nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ou=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lu=`#ifdef USE_IRIDESCENCE
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
#endif`,cu=`#ifdef USE_BUMPMAP
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_u=`#define PI 3.141592653589793
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
} // validated`,xu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yu=`vec3 transformedNormal = objectNormal;
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
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Au=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fu=`#ifdef USE_GRADIENTMAP
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
}`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Gu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qu=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Yu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,$u=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
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
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sd=`#if defined( USE_POINTS_UV )
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
#endif`,rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vd=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kd=`#ifdef USE_SKINNING
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
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,tf=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nf=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,sf=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cf=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,hf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,uf=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,df=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ff=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,pf=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mf=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,gf=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vf=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,_f=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xf=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,yf=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,bf=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Mf=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Sf=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,wf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ef=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Tf=`uniform vec3 color;
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
}`,Af=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Cf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ct={alphahash_fragment:Zh,alphahash_pars_fragment:jh,alphamap_fragment:Jh,alphamap_pars_fragment:Kh,alphatest_fragment:Qh,alphatest_pars_fragment:eu,aomap_fragment:tu,aomap_pars_fragment:nu,batching_pars_vertex:iu,batching_vertex:su,begin_vertex:ru,beginnormal_vertex:au,bsdfs:ou,iridescence_fragment:lu,bumpmap_pars_fragment:cu,clipping_planes_fragment:hu,clipping_planes_pars_fragment:uu,clipping_planes_pars_vertex:du,clipping_planes_vertex:fu,color_fragment:pu,color_pars_fragment:mu,color_pars_vertex:gu,color_vertex:vu,common:_u,cube_uv_reflection_fragment:xu,defaultnormal_vertex:yu,displacementmap_pars_vertex:bu,displacementmap_vertex:Mu,emissivemap_fragment:Su,emissivemap_pars_fragment:wu,colorspace_fragment:Eu,colorspace_pars_fragment:Tu,envmap_fragment:Au,envmap_common_pars_fragment:Cu,envmap_pars_fragment:Ru,envmap_pars_vertex:Pu,envmap_physical_pars_fragment:Gu,envmap_vertex:Iu,fog_vertex:Du,fog_pars_vertex:Lu,fog_fragment:Uu,fog_pars_fragment:Nu,gradientmap_pars_fragment:Fu,lightmap_pars_fragment:ku,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:Bu,lights_pars_begin:zu,lights_toon_fragment:Hu,lights_toon_pars_fragment:Vu,lights_phong_fragment:Wu,lights_phong_pars_fragment:Xu,lights_physical_fragment:qu,lights_physical_pars_fragment:Yu,lights_fragment_begin:$u,lights_fragment_maps:Zu,lights_fragment_end:ju,logdepthbuf_fragment:Ju,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:Qu,logdepthbuf_vertex:ed,map_fragment:td,map_pars_fragment:nd,map_particle_fragment:id,map_particle_pars_fragment:sd,metalnessmap_fragment:rd,metalnessmap_pars_fragment:ad,morphinstance_vertex:od,morphcolor_vertex:ld,morphnormal_vertex:cd,morphtarget_pars_vertex:hd,morphtarget_vertex:ud,normal_fragment_begin:dd,normal_fragment_maps:fd,normal_pars_fragment:pd,normal_pars_vertex:md,normal_vertex:gd,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:yd,iridescence_pars_fragment:bd,opaque_fragment:Md,packing:Sd,premultiplied_alpha_fragment:wd,project_vertex:Ed,dithering_fragment:Td,dithering_pars_fragment:Ad,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Pd,shadowmap_pars_vertex:Id,shadowmap_vertex:Dd,shadowmask_pars_fragment:Ld,skinbase_vertex:Ud,skinning_pars_vertex:Nd,skinning_vertex:Fd,skinnormal_vertex:kd,specularmap_fragment:Od,specularmap_pars_fragment:Bd,tonemapping_fragment:zd,tonemapping_pars_fragment:Gd,transmission_fragment:Hd,transmission_pars_fragment:Vd,uv_pars_fragment:Wd,uv_pars_vertex:Xd,uv_vertex:qd,worldpos_vertex:Yd,background_vert:$d,background_frag:Zd,backgroundCube_vert:jd,backgroundCube_frag:Jd,cube_vert:Kd,cube_frag:Qd,depth_vert:ef,depth_frag:tf,distanceRGBA_vert:nf,distanceRGBA_frag:sf,equirect_vert:rf,equirect_frag:af,linedashed_vert:of,linedashed_frag:lf,meshbasic_vert:cf,meshbasic_frag:hf,meshlambert_vert:uf,meshlambert_frag:df,meshmatcap_vert:ff,meshmatcap_frag:pf,meshnormal_vert:mf,meshnormal_frag:gf,meshphong_vert:vf,meshphong_frag:_f,meshphysical_vert:xf,meshphysical_frag:yf,meshtoon_vert:bf,meshtoon_frag:Mf,points_vert:Sf,points_frag:wf,shadow_vert:Ef,shadow_frag:Tf,sprite_vert:Af,sprite_frag:Cf},Pe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ne(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Vn={basic:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:hn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:hn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:hn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:hn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:hn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:hn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:hn([Pe.common,Pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:hn([Pe.lights,Pe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Vn.physical={uniforms:hn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Mr={r:0,b:0,g:0},Ii=new fn,Rf=new Je;function Pf(e,t,n,i,s,r,a){let o=new Oe(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function _(w){let y=w.isScene===!0?w.background:null;if(y&&y.isTexture)y=(w.backgroundBlurriness>0?n:t).get(y);return y}function v(w){let y=!1,T=_(w);if(T===null)p(o,l);else if(T&&T.isColor)p(T,1),y=!0;let H=e.xr.getEnvironmentBlendMode();if(H==="additive")i.buffers.color.setClear(0,0,0,1,a);else if(H==="alpha-blend")i.buffers.color.setClear(0,0,0,0,a);if(e.autoClear||y)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function d(w,y){let T=_(y);if(T&&(T.isCubeTexture||T.mapping===306)){if(h===void 0)h=new rt(new Fn(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:ds(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h);if(Ii.copy(y.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1)Ii.y*=-1,Ii.z*=-1;if(h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rf.makeRotationFromEuler(Ii)),h.material.toneMapped=gt.getTransfer(T.colorSpace)!=="srgb",u!==T||f!==T.version||m!==e.toneMapping)h.material.needsUpdate=!0,u=T,f=T.version,m=e.toneMapping;h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)}else if(T&&T.isTexture){if(c===void 0)c=new rt(new vs(2,2),new xt({name:"BackgroundMaterial",uniforms:ds(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c);if(c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=gt.getTransfer(T.colorSpace)!=="srgb",T.matrixAutoUpdate===!0)T.updateMatrix();if(c.material.uniforms.uvTransform.value.copy(T.matrix),u!==T||f!==T.version||m!==e.toneMapping)c.material.needsUpdate=!0,u=T,f=T.version,m=e.toneMapping;c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)}}function p(w,y){w.getRGB(Mr,oc(e)),i.buffers.color.setClear(Mr.r,Mr.g,Mr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:v,addToRenderList:d}}function If(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(b,P,O,se,Z){let le=!1,N=u(se,O,P);if(r!==N)r=N,c(r.object);if(le=m(b,se,O,Z),le)_(b,se,O,Z);if(Z!==null)t.update(Z,e.ELEMENT_ARRAY_BUFFER);if(le||a){if(a=!1,T(b,P,O,se),Z!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer)}}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function h(b){return e.deleteVertexArray(b)}function u(b,P,O){let se=O.wireframe===!0,Z=i[b.id];if(Z===void 0)Z={},i[b.id]=Z;let le=Z[P.id];if(le===void 0)le={},Z[P.id]=le;let N=le[se];if(N===void 0)N=f(l()),le[se]=N;return N}function f(b){let P=[],O=[],se=[];for(let Z=0;Z<n;Z++)P[Z]=0,O[Z]=0,se[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:se,object:b,attributes:{},index:null}}function m(b,P,O,se){let Z=r.attributes,le=P.attributes,N=0,K=O.getAttributes();for(let j in K)if(K[j].location>=0){let me=Z[j],Ce=le[j];if(Ce===void 0){if(j==="instanceMatrix"&&b.instanceMatrix)Ce=b.instanceMatrix;if(j==="instanceColor"&&b.instanceColor)Ce=b.instanceColor}if(me===void 0)return!0;if(me.attribute!==Ce)return!0;if(Ce&&me.data!==Ce.data)return!0;N++}if(r.attributesNum!==N)return!0;if(r.index!==se)return!0;return!1}function _(b,P,O,se){let Z={},le=P.attributes,N=0,K=O.getAttributes();for(let j in K)if(K[j].location>=0){let me=le[j];if(me===void 0){if(j==="instanceMatrix"&&b.instanceMatrix)me=b.instanceMatrix;if(j==="instanceColor"&&b.instanceColor)me=b.instanceColor}let Ce={};if(Ce.attribute=me,me&&me.data)Ce.data=me.data;Z[j]=Ce,N++}r.attributes=Z,r.attributesNum=N,r.index=se}function v(){let b=r.newAttributes;for(let P=0,O=b.length;P<O;P++)b[P]=0}function d(b){p(b,0)}function p(b,P){let{newAttributes:O,enabledAttributes:se,attributeDivisors:Z}=r;if(O[b]=1,se[b]===0)e.enableVertexAttribArray(b),se[b]=1;if(Z[b]!==P)e.vertexAttribDivisor(b,P),Z[b]=P}function w(){let{newAttributes:b,enabledAttributes:P}=r;for(let O=0,se=P.length;O<se;O++)if(P[O]!==b[O])e.disableVertexAttribArray(O),P[O]=0}function y(b,P,O,se,Z,le,N){if(N===!0)e.vertexAttribIPointer(b,P,O,Z,le);else e.vertexAttribPointer(b,P,O,se,Z,le)}function T(b,P,O,se){v();let Z=se.attributes,le=O.getAttributes(),N=P.defaultAttributeValues;for(let K in le){let j=le[K];if(j.location>=0){let de=Z[K];if(de===void 0){if(K==="instanceMatrix"&&b.instanceMatrix)de=b.instanceMatrix;if(K==="instanceColor"&&b.instanceColor)de=b.instanceColor}if(de!==void 0){let{normalized:me,itemSize:Ce}=de,ge=t.get(de);if(ge===void 0)continue;let{buffer:J,type:ue,bytesPerElement:ve}=ge,Ae=ue===e.INT||ue===e.UNSIGNED_INT||de.gpuType===1013;if(de.isInterleavedBufferAttribute){let _e=de.data,Ue=_e.stride,Be=de.offset;if(_e.isInstancedInterleavedBuffer){for(let He=0;He<j.locationSize;He++)p(j.location+He,_e.meshPerAttribute);if(b.isInstancedMesh!==!0&&se._maxInstanceCount===void 0)se._maxInstanceCount=_e.meshPerAttribute*_e.count}else for(let He=0;He<j.locationSize;He++)d(j.location+He);e.bindBuffer(e.ARRAY_BUFFER,J);for(let He=0;He<j.locationSize;He++)y(j.location+He,Ce/j.locationSize,ue,me,Ue*ve,(Be+Ce/j.locationSize*He)*ve,Ae)}else{if(de.isInstancedBufferAttribute){for(let _e=0;_e<j.locationSize;_e++)p(j.location+_e,de.meshPerAttribute);if(b.isInstancedMesh!==!0&&se._maxInstanceCount===void 0)se._maxInstanceCount=de.meshPerAttribute*de.count}else for(let _e=0;_e<j.locationSize;_e++)d(j.location+_e);e.bindBuffer(e.ARRAY_BUFFER,J);for(let _e=0;_e<j.locationSize;_e++)y(j.location+_e,Ce/j.locationSize,ue,me,Ce*ve,Ce/j.locationSize*_e*ve,Ae)}}else if(N!==void 0){let me=N[K];if(me!==void 0)switch(me.length){case 2:e.vertexAttrib2fv(j.location,me);break;case 3:e.vertexAttrib3fv(j.location,me);break;case 4:e.vertexAttrib4fv(j.location,me);break;default:e.vertexAttrib1fv(j.location,me)}}}}w()}function H(){X();for(let b in i){let P=i[b];for(let O in P){let se=P[O];for(let Z in se)h(se[Z].object),delete se[Z];delete P[O]}delete i[b]}}function S(b){if(i[b.id]===void 0)return;let P=i[b.id];for(let O in P){let se=P[O];for(let Z in se)h(se[Z].object),delete se[Z];delete P[O]}delete i[b.id]}function A(b){for(let P in i){let O=i[P];if(O[b.id]===void 0)continue;let se=O[b.id];for(let Z in se)h(se[Z].object),delete se[Z];delete O[b.id]}}function X(){if(x(),a=!0,r===s)return;r=s,c(r.object)}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:X,resetDefaultState:x,dispose:H,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:d,disableUnusedAttributes:w}}function Df(e,t,n){let i;function s(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,u){if(u===0)return;e.drawArraysInstanced(i,c,h,u),n.update(h,i,u)}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];n.update(m,i,1)}function l(c,h,u,f){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*f[v];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lf(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){if(A!==1023&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(A){let X=A===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(A!==1009&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==1015&&!X)return!1;return!0}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);if(h!==c)console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let u=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),T=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),H=_>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:H,maxSamples:S}}function Uf(e){let t=this,n=null,i=0,s=!1,r=!1,a=new Hn,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){n=h(u,f,0)},this.setState=function(u,f,m){let{clippingPlanes:_,clipIntersection:v,clipShadows:d}=u,p=e.get(u);if(!s||_===null||_.length===0||r&&!d)if(r)h(null);else c();else{let w=r?0:i,y=w*4,T=p.clippingState||null;l.value=T,T=h(_,f,y,m);for(let H=0;H!==y;++H)T[H]=n[H];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;t.numPlanes=i,t.numIntersection=0}function h(u,f,m,_){let v=u!==null?u.length:0,d=null;if(v!==0){if(d=l.value,_!==!0||d===null){let p=m+v*4,w=f.matrixWorldInverse;if(o.getNormalMatrix(w),d===null||d.length<p)d=new Float32Array(p);for(let y=0,T=m;y!==v;++y,T+=4)a.copy(u[y]).applyMatrix4(w,o),a.normal.toArray(d,T),d[T+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}function Nf(e){let t=new WeakMap;function n(a,o){if(o===303)a.mapping=301;else if(o===304)a.mapping=302;return a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===303||o===304)if(t.has(a)){let l=t.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new cc(l.height);return c.fromEquirectangularTexture(e,a),t.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);if(l!==void 0)t.delete(o),l.dispose()}function r(){t=new WeakMap}return{get:i,dispose:r}}class $s extends Va{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}var hs=4,Zo=[0.125,0.215,0.35,0.446,0.526,0.582],Ui=20,xa=new $s,jo=new Oe,ya=null,ba=0,Ma=0,Sa=!1,Li=(1+Math.sqrt(5))/2,os=1/Li,Jo=[new R(-Li,os,0),new R(Li,os,0),new R(-os,0,Li),new R(os,0,Li),new R(0,Li,-os),new R(0,Li,os),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class fs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=0.1,i=100){ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();if(s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0)this._blur(s,0,0,t);return this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,ba,Ma),this._renderer.xr.enabled=Sa,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===301||e.mapping===302)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},i=Ko(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Ko(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ff(s)),this._blurMaterial=kf(s,e,t)}return i}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,n,i){let a=new Ht(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(jo),c.toneMapping=0,c.autoClear=!1;let f=new Ot({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new rt(new Fn,f),_=!1,v=e.background;if(v){if(v.isColor)f.color.copy(v),e.background=null,_=!0}else f.color.copy(jo),_=!0;for(let d=0;d<6;d++){let p=d%3;if(p===0)a.up.set(0,o[d],0),a.lookAt(l[d],0,0);else if(p===1)a.up.set(0,0,o[d]),a.lookAt(0,l[d],0);else a.up.set(0,o[d],0),a.lookAt(0,0,l[d]);let w=this._cubeSize;if(Sr(i,p*w,d>2?w:0,w,w),c.setRenderTarget(i),_)c.render(m,a);c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===301||e.mapping===302;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=el();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Qo();let s=i?this._cubemapMaterial:this._equirectMaterial,r=new rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let o=this._cubeSize;Sr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(r,xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jo[(i-s-1)%Jo.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){let o=this._renderer,l=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let c=3,h=new rt(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),_=s/m,v=isFinite(s)?1+Math.floor(c*_):Ui;if(v>Ui)console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ui}`);let d=[],p=0;for(let S=0;S<Ui;++S){let A=S/_,X=Math.exp(-A*A/2);if(d.push(X),S===0)p+=X;else if(S<v)p+=2*X}for(let S=0;S<d.length;S++)d[S]=d[S]/p;if(u.envMap.value=e.texture,u.samples.value=v,u.weights.value=d,u.latitudinal.value=r==="latitudinal",a)u.poleAxis.value=a;let{_lodMax:w}=this;u.dTheta.value=m,u.mipInt.value=w-n;let y=this._sizeLods[i],T=3*y*(i>w-hs?i-w+hs:0),H=4*(this._cubeSize-y);Sr(t,T,H,3*y,2*y),o.setRenderTarget(t),o.render(h,xa)}}function Ff(e){let t=[],n=[],i=[],s=e,r=e-hs+1+Zo.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;if(a>e-hs)l=Zo[a-e+hs-1];else if(a===0)l=0;i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,d=2,p=1,w=new Float32Array(v*_*m),y=new Float32Array(d*_*m),T=new Float32Array(p*_*m);for(let S=0;S<m;S++){let A=S%3*2/3-1,X=S>2?0:-1,x=[A,X,0,A+0.6666666666666666,X,0,A+0.6666666666666666,X+1,0,A,X,0,A+0.6666666666666666,X+1,0,A,X+1,0];w.set(x,v*_*S),y.set(f,d*_*S);let b=[S,S,S,S,S,S];T.set(b,p*_*S)}let H=new Pt;if(H.setAttribute("position",new ft(w,v)),H.setAttribute("uv",new ft(y,d)),H.setAttribute("faceIndex",new ft(T,p)),t.push(H),s>hs)s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Ko(e,t,n){let i=new Nt(e,t,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sr(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function kf(e,t,n){let i=new Float32Array(Ui),s=new R(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qo(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function el(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}function Of(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f){if(n===null)n=new fs(e);return u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture}else if(u!==void 0)return u.texture;else{let m=o.image;if(c&&m&&m.height>0||h&&m&&s(m)){if(n===null)n=new fs(e);return u=c?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)if(o[h]!==void 0)l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);if(c!==void 0)t.delete(l),c.dispose()}function a(){if(t=new WeakMap,n!==null)n.dispose(),n=null}return{get:i,dispose:a}}function Bf(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Fs("THREE.WebGLRenderer: "+i+" extension not supported.");return s}}}function zf(e,t,n,i){let s={},r=new WeakMap;function a(u){let f=u.target;if(f.index!==null)t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let v=f.morphAttributes[_];for(let d=0,p=v.length;d<p;d++)t.remove(v[d])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);if(m)t.remove(m),r.delete(f);if(i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0)delete f._maxInstanceCount;n.memory.geometries--}function o(u,f){if(s[f.id]===!0)return f;return f.addEventListener("dispose",a),s[f.id]=!0,n.memory.geometries++,f}function l(u){let f=u.attributes;for(let _ in f)t.update(f[_],e.ARRAY_BUFFER);let m=u.morphAttributes;for(let _ in m){let v=m[_];for(let d=0,p=v.length;d<p;d++)t.update(v[d],e.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,_=u.attributes.position,v=0;if(m!==null){let w=m.array;v=m.version;for(let y=0,T=w.length;y<T;y+=3){let H=w[y+0],S=w[y+1],A=w[y+2];f.push(H,S,S,A,A,H)}}else if(_!==void 0){let w=_.array;v=_.version;for(let y=0,T=w.length/3-1;y<T;y+=3){let H=y+0,S=y+1,A=y+2;f.push(H,S,S,A,A,H)}}else return;let d=new((nc(f))?Ha:Ys)(f,1);d.version=v;let p=r.get(u);if(p)t.remove(p);r.set(u,d)}function h(u){let f=r.get(u);if(f){let m=u.index;if(m!==null){if(f.version<m.version)c(u)}}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gf(e,t,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){e.drawElements(i,m,r,f*a),n.update(m,i,1)}function c(f,m,_){if(_===0)return;e.drawElementsInstanced(i,m,r,f*a,_),n.update(m,i,_)}function h(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,_);let d=0;for(let p=0;p<_;p++)d+=m[p];n.update(d,i,1)}function u(f,m,_,v){if(_===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],v[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,v,0,_);let p=0;for(let w=0;w<_;w++)p+=m[w]*v[w];n.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hf(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Vf(e,t,n){let i=new WeakMap,s=new wt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let x=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",x)};if(f!==void 0)f.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],y=0;if(m===!0)y=1;if(_===!0)y=2;if(v===!0)y=3;let T=o.attributes.position.count*y,H=1;if(T>t.maxTextureSize)H=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize;let S=new Float32Array(T*H*4*u),A=new Ga(S,T,H,u);A.type=1015,A.needsUpdate=!0;let X=y*4;for(let b=0;b<u;b++){let P=d[b],O=p[b],se=w[b],Z=T*H*4*b;for(let le=0;le<P.count;le++){let N=le*X;if(m===!0)s.fromBufferAttribute(P,le),S[Z+N+0]=s.x,S[Z+N+1]=s.y,S[Z+N+2]=s.z,S[Z+N+3]=0;if(_===!0)s.fromBufferAttribute(O,le),S[Z+N+4]=s.x,S[Z+N+5]=s.y,S[Z+N+6]=s.z,S[Z+N+7]=0;if(v===!0)s.fromBufferAttribute(se,le),S[Z+N+8]=s.x,S[Z+N+9]=s.y,S[Z+N+10]=s.z,S[Z+N+11]=se.itemSize===4?s.w:1}}f={count:u,texture:A,size:new Ne(T,H)},i.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function Wf(e,t,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c)t.update(u),s.set(u,c);if(l.isInstancedMesh){if(l.hasEventListener("dispose",o)===!1)l.addEventListener("dispose",o);if(s.get(l)!==c){if(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null)n.update(l.instanceColor,e.ARRAY_BUFFER);s.set(l,c)}}if(l.isSkinnedMesh){let f=l.skeleton;if(s.get(f)!==c)f.update(),s.set(f,c)}return u}function a(){s=new WeakMap}function o(l){let c=l.target;if(c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null)n.remove(c.instanceColor)}return{update:r,dispose:a}}class Zs extends Ut{constructor(e,t,n,i,s,r,a,o,l,c=1026){if(c!==1026&&c!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(n===void 0&&c===1026)n=1014;if(n===void 0&&c===1027)n=1020;super(null,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=o!==void 0?o:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);if(this.compareFunction!==null)t.compareFunction=this.compareFunction;return t}}var uc=new Ut,tl=new Zs(1,1),dc=new Ga,fc=new rc,pc=new Wa,nl=[],il=[],sl=new Float32Array(16),rl=new Float32Array(9),al=new Float32Array(4);function _s(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=nl[s];if(r===void 0)r=new Float32Array(s),nl[s]=r;if(t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function Wt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Xt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function zr(e,t){let n=il[t];if(n===void 0)n=new Int32Array(t),il[t]=n;for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Xf(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function qf(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Wt(n,t))return;e.uniform2fv(this.addr,t),Xt(n,t)}}function Yf(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if(Wt(n,t))return;e.uniform3fv(this.addr,t),Xt(n,t)}}function $f(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Wt(n,t))return;e.uniform4fv(this.addr,t),Xt(n,t)}}function Zf(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Wt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Xt(n,t)}else{if(Wt(n,i))return;al.set(i),e.uniformMatrix2fv(this.addr,!1,al),Xt(n,i)}}function jf(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Wt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Xt(n,t)}else{if(Wt(n,i))return;rl.set(i),e.uniformMatrix3fv(this.addr,!1,rl),Xt(n,i)}}function Jf(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Wt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Xt(n,t)}else{if(Wt(n,i))return;sl.set(i),e.uniformMatrix4fv(this.addr,!1,sl),Xt(n,i)}}function Kf(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function Qf(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Wt(n,t))return;e.uniform2iv(this.addr,t),Xt(n,t)}}function ep(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(Wt(n,t))return;e.uniform3iv(this.addr,t),Xt(n,t)}}function tp(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Wt(n,t))return;e.uniform4iv(this.addr,t),Xt(n,t)}}function np(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function ip(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Wt(n,t))return;e.uniform2uiv(this.addr,t),Xt(n,t)}}function sp(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(Wt(n,t))return;e.uniform3uiv(this.addr,t),Xt(n,t)}}function rp(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Wt(n,t))return;e.uniform4uiv(this.addr,t),Xt(n,t)}}function ap(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_2D_SHADOW)tl.compareFunction=515,r=tl;else r=uc;n.setTexture2D(t||r,s)}function op(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(t||fc,s)}function lp(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(t||pc,s)}function cp(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(t||dc,s)}function hp(e){switch(e){case 5126:return Xf;case 35664:return qf;case 35665:return Yf;case 35666:return $f;case 35674:return Zf;case 35675:return jf;case 35676:return Jf;case 5124:case 35670:return Kf;case 35667:case 35671:return Qf;case 35668:case 35672:return ep;case 35669:case 35673:return tp;case 5125:return np;case 36294:return ip;case 36295:return sp;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return cp}}function up(e,t){e.uniform1fv(this.addr,t)}function dp(e,t){let n=_s(t,this.size,2);e.uniform2fv(this.addr,n)}function fp(e,t){let n=_s(t,this.size,3);e.uniform3fv(this.addr,n)}function pp(e,t){let n=_s(t,this.size,4);e.uniform4fv(this.addr,n)}function mp(e,t){let n=_s(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function gp(e,t){let n=_s(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vp(e,t){let n=_s(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _p(e,t){e.uniform1iv(this.addr,t)}function xp(e,t){e.uniform2iv(this.addr,t)}function yp(e,t){e.uniform3iv(this.addr,t)}function bp(e,t){e.uniform4iv(this.addr,t)}function Mp(e,t){e.uniform1uiv(this.addr,t)}function Sp(e,t){e.uniform2uiv(this.addr,t)}function wp(e,t){e.uniform3uiv(this.addr,t)}function Ep(e,t){e.uniform4uiv(this.addr,t)}function Tp(e,t,n){let i=this.cache,s=t.length,r=zr(n,s);if(!Wt(i,r))e.uniform1iv(this.addr,r),Xt(i,r);for(let a=0;a!==s;++a)n.setTexture2D(t[a]||uc,r[a])}function Ap(e,t,n){let i=this.cache,s=t.length,r=zr(n,s);if(!Wt(i,r))e.uniform1iv(this.addr,r),Xt(i,r);for(let a=0;a!==s;++a)n.setTexture3D(t[a]||fc,r[a])}function Cp(e,t,n){let i=this.cache,s=t.length,r=zr(n,s);if(!Wt(i,r))e.uniform1iv(this.addr,r),Xt(i,r);for(let a=0;a!==s;++a)n.setTextureCube(t[a]||pc,r[a])}function Rp(e,t,n){let i=this.cache,s=t.length,r=zr(n,s);if(!Wt(i,r))e.uniform1iv(this.addr,r),Xt(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||dc,r[a])}function Pp(e){switch(e){case 5126:return up;case 35664:return dp;case 35665:return fp;case 35666:return pp;case 35674:return mp;case 35675:return gp;case 35676:return vp;case 5124:case 35670:return _p;case 35667:case 35671:return xp;case 35668:case 35672:return yp;case 35669:case 35673:return bp;case 5125:return Mp;case 36294:return Sp;case 36295:return wp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Rp}}class mc{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hp(t.type)}}class gc{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pp(t.type)}}class vc{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(e,t[a.id],n)}}}var wa=/(\w+)(\])?(\[|\.)?/g;function ol(e,t){e.seq.push(t),e.map[t.id]=t}function Ip(e,t,n){let i=e.name,s=i.length;wa.lastIndex=0;while(!0){let r=wa.exec(i),a=wa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){ol(n,c===void 0?new mc(o,e,t):new gc(o,e,t));break}else{let u=n.map[o];if(u===void 0)u=new vc(o),ol(n,u);n=u}}}class zs{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Ip(s,r,this)}}setValue(e,t,n,i){let s=this.map[t];if(s!==void 0)s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];if(i!==void 0)this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let a=t[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(e,o.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];if(r.id in t)n.push(r)}return n}}function ll(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Dp=37297,Lp=0;function Up(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var cl=new lt;function Np(e){gt._getMatrix(cl,gt.workingColorSpace,e);let t=`mat3( ${cl.elements.map((n)=>n.toFixed(4))} )`;switch(gt.getTransfer(e)){case"linear":return[t,"LinearTransferOETF"];case"srgb":return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function hl(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+Up(e.getShaderSource(t),a)}else return s}function Fp(e,t){let n=Np(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kp(e,t){let n;switch(t){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="Cineon";break;case 4:n="ACESFilmic";break;case 6:n="AgX";break;case 7:n="Neutral";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var wr=new R;function Op(){gt.getLuminanceCoefficients(wr);let e=wr.x.toFixed(4),t=wr.y.toFixed(4),n=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Bp(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function zp(e){let t=[];for(let n in e){let i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function Gp(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;if(r.type===e.FLOAT_MAT2)o=2;if(r.type===e.FLOAT_MAT3)o=3;if(r.type===e.FLOAT_MAT4)o=4;n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ks(e){return e!==""}function ul(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(e){return e.replace(Hp,Wp)}var Vp=new Map;function Wp(e,t){let n=ct[t];if(n===void 0){let i=Vp.get(t);if(i!==void 0)n=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw Error("Can not resolve #include <"+t+">")}return Ia(n)}var Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(e){return e.replace(Xp,qp)}function qp(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}function Yp(e){let t="SHADOWMAP_TYPE_BASIC";if(e.shadowMapType===1)t="SHADOWMAP_TYPE_PCF";else if(e.shadowMapType===2)t="SHADOWMAP_TYPE_PCF_SOFT";else if(e.shadowMapType===3)t="SHADOWMAP_TYPE_VSM";return t}function $p(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zp(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function jp(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Jp(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Kp(e,t,n,i){let s=e.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=Yp(n),c=$p(n),h=Zp(n),u=jp(n),f=Jp(n),m=Bp(n),_=zp(r),v=s.createProgram(),d,p,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ks).join(`
`),d.length>0)d+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ks).join(`
`),p.length>0)p+=`
`}else d=[pl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[pl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?ct.tonemapping_pars_fragment:"",n.toneMapping!==0?kp("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Fp("linearToOutputTexel",n.outputColorSpace),Op(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ks).join(`
`);if(a=Ia(a),a=ul(a,n),a=dl(a,n),o=Ia(o),o=ul(o,n),o=dl(o,n),a=fl(a),o=fl(o),n.isRawShaderMaterial!==!0)w=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let y=w+d+a,T=w+p+o,H=ll(s,s.VERTEX_SHADER,y),S=ll(s,s.FRAGMENT_SHADER,T);if(s.attachShader(v,H),s.attachShader(v,S),n.index0AttributeName!==void 0)s.bindAttribLocation(v,0,n.index0AttributeName);else if(n.morphTargets===!0)s.bindAttribLocation(v,0,"position");s.linkProgram(v);function A(P){if(e.debug.checkShaderErrors){let O=s.getProgramInfoLog(v).trim(),se=s.getShaderInfoLog(H).trim(),Z=s.getShaderInfoLog(S).trim(),le=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(le=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(s,v,H,S);else{let K=hl(s,H,"vertex"),j=hl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+K+`
`+j)}else if(O!=="")console.warn("THREE.WebGLProgram: Program Info Log:",O);else if(se===""||Z==="")N=!1;if(N)P.diagnostics={runnable:le,programLog:O,vertexShader:{log:se,prefix:d},fragmentShader:{log:Z,prefix:p}}}s.deleteShader(H),s.deleteShader(S),X=new zs(s,v),x=Gp(s,v)}let X;this.getUniforms=function(){if(X===void 0)A(this);return X};let x;this.getAttributes=function(){if(x===void 0)A(this);return x};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(b===!1)b=s.getProgramParameter(v,Dp);return b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Lp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=H,this.fragmentShader=S,this}var Qp=0;class _c{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let{vertexShader:t,fragmentShader:n}=e,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);if(r.has(i)===!1)r.add(i),i.usedTimes++;if(r.has(s)===!1)r.add(s),s.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new xc(e),t.set(e,n);return n}}class xc{constructor(e){this.id=Qp++,this.code=e,this.usedTimes=0}}function em(e,t,n,i,s,r,a){let o=new Or,l=new _c,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){if(c.add(x),x===0)return"uv";return`uv${x}`}function d(x,b,P,O,se){let Z=O.fog,le=se.geometry,N=x.isMeshStandardMaterial?O.environment:null,K=(x.isMeshStandardMaterial?n:t).get(x.envMap||N),j=!!K&&K.mapping===306?K.image.height:null,de=_[x.type];if(x.precision!==null){if(m=s.getMaxPrecision(x.precision),m!==x.precision)console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead.")}let me=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ce=me!==void 0?me.length:0,ge=0;if(le.morphAttributes.position!==void 0)ge=1;if(le.morphAttributes.normal!==void 0)ge=2;if(le.morphAttributes.color!==void 0)ge=3;let J,ue,ve,Ae;if(de){let ke=Vn[de];J=ke.vertexShader,ue=ke.fragmentShader}else J=x.vertexShader,ue=x.fragmentShader,l.update(x),ve=l.getVertexShaderID(x),Ae=l.getFragmentShaderID(x);let _e=e.getRenderTarget(),Ue=e.state.buffers.depth.getReversed(),Be=se.isInstancedMesh===!0,He=se.isBatchedMesh===!0,$e=!!x.map,nt=!!x.matcap,L=!!K,ut=!!x.aoMap,C=!!x.lightMap,Q=!!x.bumpMap,Y=!!x.normalMap,ce=!!x.displacementMap,pe=!!x.emissiveMap,Se=!!x.metalnessMap,E=!!x.roughnessMap,g=x.anisotropy>0,V=x.clearcoat>0,ne=x.dispersion>0,re=x.iridescence>0,ee=x.sheen>0,Te=x.transmission>0,xe=g&&!!x.anisotropyMap,ae=V&&!!x.clearcoatMap,we=V&&!!x.clearcoatNormalMap,fe=V&&!!x.clearcoatRoughnessMap,Re=re&&!!x.iridescenceMap,Ze=re&&!!x.iridescenceThicknessMap,We=ee&&!!x.sheenColorMap,Ie=ee&&!!x.sheenRoughnessMap,De=!!x.specularMap,Ke=!!x.specularColorMap,dt=!!x.specularIntensityMap,k=Te&&!!x.transmissionMap,U=Te&&!!x.thicknessMap,D=!!x.gradientMap,G=!!x.alphaMap,oe=x.alphaTest>0,he=!!x.alphaHash,Me=!!x.extensions,Ye=0;if(x.toneMapped){if(_e===null||_e.isXRRenderTarget===!0)Ye=e.toneMapping}let Qe={shaderID:de,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:ue,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:Ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:He,batchingColor:He&&se._colorsTexture!==null,instancing:Be,instancingColor:Be&&se.instanceColor!==null,instancingMorph:Be&&se.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_e===null?e.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:"srgb-linear",alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:nt,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:j,aoMap:ut,lightMap:C,bumpMap:Q,normalMap:Y,displacementMap:f&&ce,emissiveMap:pe,normalMapObjectSpace:Y&&x.normalMapType===1,normalMapTangentSpace:Y&&x.normalMapType===0,metalnessMap:Se,roughnessMap:E,anisotropy:g,anisotropyMap:xe,clearcoat:V,clearcoatMap:ae,clearcoatNormalMap:we,clearcoatRoughnessMap:fe,dispersion:ne,iridescence:re,iridescenceMap:Re,iridescenceThicknessMap:Ze,sheen:ee,sheenColorMap:We,sheenRoughnessMap:Ie,specularMap:De,specularColorMap:Ke,specularIntensityMap:dt,transmission:Te,transmissionMap:k,thicknessMap:U,gradientMap:D,opaque:x.transparent===!1&&x.blending===1&&x.alphaToCoverage===!1,alphaMap:G,alphaTest:oe,alphaHash:he,combine:x.combine,mapUv:$e&&v(x.map.channel),aoMapUv:ut&&v(x.aoMap.channel),lightMapUv:C&&v(x.lightMap.channel),bumpMapUv:Q&&v(x.bumpMap.channel),normalMapUv:Y&&v(x.normalMap.channel),displacementMapUv:ce&&v(x.displacementMap.channel),emissiveMapUv:pe&&v(x.emissiveMap.channel),metalnessMapUv:Se&&v(x.metalnessMap.channel),roughnessMapUv:E&&v(x.roughnessMap.channel),anisotropyMapUv:xe&&v(x.anisotropyMap.channel),clearcoatMapUv:ae&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:We&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(x.sheenRoughnessMap.channel),specularMapUv:De&&v(x.specularMap.channel),specularColorMapUv:Ke&&v(x.specularColorMap.channel),specularIntensityMapUv:dt&&v(x.specularIntensityMap.channel),transmissionMapUv:k&&v(x.transmissionMap.channel),thicknessMapUv:U&&v(x.thicknessMap.channel),alphaMapUv:G&&v(x.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Y||g),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!le.attributes.uv&&($e||G),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ue,skinning:se.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ye,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)==="srgb",decodeVideoTextureEmissive:pe&&x.emissiveMap.isVideoTexture===!0&&gt.getTransfer(x.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function p(x){let b=[];if(x.shaderID)b.push(x.shaderID);else b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID);if(x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);if(x.isRawShaderMaterial===!1)w(b,x),y(b,x),b.push(e.outputColorSpace);return b.push(x.customProgramCacheKey),b.join()}function w(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){if(o.disableAll(),b.supportsVertexTextures)o.enable(0);if(b.instancing)o.enable(1);if(b.instancingColor)o.enable(2);if(b.instancingMorph)o.enable(3);if(b.matcap)o.enable(4);if(b.envMap)o.enable(5);if(b.normalMapObjectSpace)o.enable(6);if(b.normalMapTangentSpace)o.enable(7);if(b.clearcoat)o.enable(8);if(b.iridescence)o.enable(9);if(b.alphaTest)o.enable(10);if(b.vertexColors)o.enable(11);if(b.vertexAlphas)o.enable(12);if(b.vertexUv1s)o.enable(13);if(b.vertexUv2s)o.enable(14);if(b.vertexUv3s)o.enable(15);if(b.vertexTangents)o.enable(16);if(b.anisotropy)o.enable(17);if(b.alphaHash)o.enable(18);if(b.batching)o.enable(19);if(b.dispersion)o.enable(20);if(b.batchingColor)o.enable(21);if(x.push(o.mask),o.disableAll(),b.fog)o.enable(0);if(b.useFog)o.enable(1);if(b.flatShading)o.enable(2);if(b.logarithmicDepthBuffer)o.enable(3);if(b.reverseDepthBuffer)o.enable(4);if(b.skinning)o.enable(5);if(b.morphTargets)o.enable(6);if(b.morphNormals)o.enable(7);if(b.morphColors)o.enable(8);if(b.premultipliedAlpha)o.enable(9);if(b.shadowMapEnabled)o.enable(10);if(b.doubleSided)o.enable(11);if(b.flipSided)o.enable(12);if(b.useDepthPacking)o.enable(13);if(b.dithering)o.enable(14);if(b.transmission)o.enable(15);if(b.sheen)o.enable(16);if(b.opaque)o.enable(17);if(b.pointsUvs)o.enable(18);if(b.decodeVideoTexture)o.enable(19);if(b.decodeVideoTextureEmissive)o.enable(20);if(b.alphaToCoverage)o.enable(21);x.push(o.mask)}function T(x){let b=_[x.type],P;if(b){let O=Vn[b];P=Zt.clone(O.uniforms)}else P=x.uniforms;return P}function H(x,b){let P;for(let O=0,se=h.length;O<se;O++){let Z=h[O];if(Z.cacheKey===b){P=Z,++P.usedTimes;break}}if(P===void 0)P=new Kp(e,b,x,r),h.push(P);return P}function S(x){if(--x.usedTimes===0){let b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function A(x){l.remove(x)}function X(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:T,acquireProgram:H,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:X}}function tm(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);if(o===void 0)o={},e.set(a,o);return o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function nm(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function ml(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function gl(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(u,f,m,_,v,d){let p=e[t];if(p===void 0)p={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:d},e[t]=p;else p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=v,p.group=d;return t++,p}function o(u,f,m,_,v,d){let p=a(u,f,m,_,v,d);if(m.transmission>0)i.push(p);else if(m.transparent===!0)s.push(p);else n.push(p)}function l(u,f,m,_,v,d){let p=a(u,f,m,_,v,d);if(m.transmission>0)i.unshift(p);else if(m.transparent===!0)s.unshift(p);else n.unshift(p)}function c(u,f){if(n.length>1)n.sort(u||nm);if(i.length>1)i.sort(f||ml);if(s.length>1)s.sort(f||ml)}function h(){for(let u=t,f=e.length;u<f;u++){let m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function im(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;if(r===void 0)a=new gl,e.set(i,[a]);else if(s>=r.length)a=new gl,r.push(a);else a=r[s];return a}function n(){e=new WeakMap}return{get:t,dispose:n}}function sm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new R,color:new Oe};break;case"SpotLight":n={position:new R,direction:new R,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=n,n}}}function rm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}var am=0;function om(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function lm(e){let t=new sm,n=rm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,r=new Je,a=new Je;function o(c){let h=0,u=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,_=0,v=0,d=0,p=0,w=0,y=0,T=0,H=0,S=0,A=0;c.sort(om);for(let x=0,b=c.length;x<b;x++){let P=c[x],O=P.color,se=P.intensity,Z=P.distance,le=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*se,u+=O.g*se,f+=O.b*se;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],se);A++}else if(P.isDirectionalLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,j=n.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=le,i.directionalShadowMatrix[m]=P.shadow.matrix,w++}i.directional[m]=N,m++}else if(P.isSpotLight){let N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(O).multiplyScalar(se),N.distance=Z,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[v]=N;let K=P.shadow;if(P.map){if(i.spotLightMap[H]=P.map,H++,K.updateMatrices(P),P.castShadow)S++}if(i.spotLightMatrix[v]=K.matrix,P.castShadow){let j=n.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=le,T++}v++}else if(P.isRectAreaLight){let N=t.get(P);N.color.copy(O).multiplyScalar(se),N.halfWidth.set(P.width*0.5,0,0),N.halfHeight.set(0,P.height*0.5,0),i.rectArea[d]=N,d++}else if(P.isPointLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){let K=P.shadow,j=n.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=le,i.pointShadowMatrix[_]=P.shadow.matrix,y++}i.point[_]=N,_++}else if(P.isHemisphereLight){let N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(se),N.groundColor.copy(P.groundColor).multiplyScalar(se),i.hemi[p]=N,p++}}if(d>0)if(e.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2;else i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let X=i.hash;if(X.directionalLength!==m||X.pointLength!==_||X.spotLength!==v||X.rectAreaLength!==d||X.hemiLength!==p||X.numDirectionalShadows!==w||X.numPointShadows!==y||X.numSpotShadows!==T||X.numSpotMaps!==H||X.numLightProbes!==A)i.directional.length=m,i.spot.length=v,i.rectArea.length=d,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+H-S,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,X.directionalLength=m,X.pointLength=_,X.spotLength=v,X.rectAreaLength=d,X.hemiLength=p,X.numDirectionalShadows=w,X.numPointShadows=y,X.numSpotShadows=T,X.numSpotMaps=H,X.numLightProbes=A,i.version=am++}function l(c,h){let u=0,f=0,m=0,_=0,v=0,d=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let y=c[p];if(y.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),u++}else if(y.isSpotLight){let T=i.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),m++}else if(y.isRectAreaLight){let T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(y.width*0.5,0,0),T.halfHeight.set(0,y.height*0.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),f++}else if(y.isHemisphereLight){let T=i.hemi[v];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),v++}}}return{setup:o,setupView:l,state:i}}function vl(e){let t=new lm(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cm(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),o;if(a===void 0)o=new vl(e),t.set(s,[o]);else if(r>=a.length)o=new vl(e),a.push(o);else o=a[r];return o}function i(){t=new WeakMap}return{get:n,dispose:i}}class Gr extends Yn{static get type(){return"MeshDepthMaterial"}constructor(e){super();this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yc extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(e){super();this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}var hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,um=`uniform sampler2D shadow_pass;
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
}`;function dm(e,t,n){let i=new Br,s=new Ne,r=new Ne,a=new wt,o=new Gr({depthPacking:3201}),l=new yc,c={},h=n.maxTextureSize,u={[0]:1,[1]:0,[2]:2},f=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:hm,fragmentShader:um}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new Pt;_.setAttribute("position",new ft(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let v=new rt(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(S,A,X){if(d.enabled===!1)return;if(d.autoUpdate===!1&&d.needsUpdate===!1)return;if(S.length===0)return;let x=e.getRenderTarget(),b=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),O=e.state;O.setBlending(0),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let se=p!==3&&this.type===3,Z=p===3&&this.type!==3;for(let le=0,N=S.length;le<N;le++){let K=S[le],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let de=j.getFrameExtents();if(s.multiply(de),r.copy(j.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/de.x),s.x=r.x*de.x,j.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/de.y),s.y=r.y*de.y,j.mapSize.y=r.y}if(j.map===null||se===!0||Z===!0){let Ce=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(j.map!==null)j.map.dispose();j.map=new Nt(s.x,s.y,Ce),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}e.setRenderTarget(j.map),e.clear();let me=j.getViewportCount();for(let Ce=0;Ce<me;Ce++){let ge=j.getViewport(Ce);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),O.viewport(a),j.updateMatrices(K,Ce),i=j.getFrustum(),T(A,X,j.camera,K,this.type)}if(j.isPointLightShadow!==!0&&this.type===3)w(j,X);j.needsUpdate=!1}p=this.type,d.needsUpdate=!1,e.setRenderTarget(x,b,P)};function w(S,A){let X=t.update(v);if(f.defines.VSM_SAMPLES!==S.blurSamples)f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0;if(S.mapPass===null)S.mapPass=new Nt(s.x,s.y);f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,e.setRenderTarget(S.mapPass),e.clear(),e.renderBufferDirect(A,null,X,f,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,e.setRenderTarget(S.map),e.clear(),e.renderBufferDirect(A,null,X,m,v,null)}function y(S,A,X,x){let b=null,P=X.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)b=P;else if(b=X.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let O=b.uuid,se=A.uuid,Z=c[O];if(Z===void 0)Z={},c[O]=Z;let le=Z[se];if(le===void 0)le=b.clone(),Z[se]=le,A.addEventListener("dispose",H);b=le}if(b.visible=A.visible,b.wireframe=A.wireframe,x===3)b.side=A.shadowSide!==null?A.shadowSide:A.side;else b.side=A.shadowSide!==null?A.shadowSide:u[A.side];if(b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,X.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=e.properties.get(b);O.light=X}return b}function T(S,A,X,x,b){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)){if((S.castShadow||S.receiveShadow&&b===3)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld);let se=t.update(S),Z=S.material;if(Array.isArray(Z)){let le=se.groups;for(let N=0,K=le.length;N<K;N++){let j=le[N],de=Z[j.materialIndex];if(de&&de.visible){let me=y(S,de,x,b);S.onBeforeShadow(e,S,A,X,se,me,j),e.renderBufferDirect(X,null,se,me,S,j),S.onAfterShadow(e,S,A,X,se,me,j)}}}else if(Z.visible){let le=y(S,Z,x,b);S.onBeforeShadow(e,S,A,X,se,le,null),e.renderBufferDirect(X,null,se,le,S,null),S.onAfterShadow(e,S,A,X,se,le,null)}}}let O=S.children;for(let se=0,Z=O.length;se<Z;se++)T(O[se],A,X,x,b)}function H(S){S.target.removeEventListener("dispose",H);for(let X in c){let x=c[X],b=S.target.uuid;if(b in x)x[b].dispose(),delete x[b]}}}var fm={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};function pm(e,t){function n(){let k=!1,U=new wt,D=null,G=new wt(0,0,0,0);return{setMask:function(oe){if(D!==oe&&!k)e.colorMask(oe,oe,oe,oe),D=oe},setLocked:function(oe){k=oe},setClear:function(oe,he,Me,Ye,Qe){if(Qe===!0)oe*=Ye,he*=Ye,Me*=Ye;if(U.set(oe,he,Me,Ye),G.equals(U)===!1)e.clearColor(oe,he,Me,Ye),G.copy(U)},reset:function(){k=!1,D=null,G.set(-1,0,0,0)}}}function i(){let k=!1,U=!1,D=null,G=null,oe=null;return{setReversed:function(he){if(U!==he){let Me=t.get("EXT_clip_control");if(U)Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT);else Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT);let Ye=oe;oe=null,this.setClear(Ye)}U=he},getReversed:function(){return U},setTest:function(he){if(he)_e(e.DEPTH_TEST);else Ue(e.DEPTH_TEST)},setMask:function(he){if(D!==he&&!k)e.depthMask(he),D=he},setFunc:function(he){if(U)he=fm[he];if(G!==he){switch(he){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}G=he}},setLocked:function(he){k=he},setClear:function(he){if(oe!==he){if(U)he=1-he;e.clearDepth(he),oe=he}},reset:function(){k=!1,D=null,G=null,oe=null,U=!1}}}function s(){let k=!1,U=null,D=null,G=null,oe=null,he=null,Me=null,Ye=null,Qe=null;return{setTest:function(ke){if(!k)if(ke)_e(e.STENCIL_TEST);else Ue(e.STENCIL_TEST)},setMask:function(ke){if(U!==ke&&!k)e.stencilMask(ke),U=ke},setFunc:function(ke,ot,et){if(D!==ke||G!==ot||oe!==et)e.stencilFunc(ke,ot,et),D=ke,G=ot,oe=et},setOp:function(ke,ot,et){if(he!==ke||Me!==ot||Ye!==et)e.stencilOp(ke,ot,et),he=ke,Me=ot,Ye=et},setLocked:function(ke){k=ke},setClear:function(ke){if(Qe!==ke)e.clearStencil(ke),Qe=ke},reset:function(){k=!1,U=null,D=null,G=null,oe=null,he=null,Me=null,Ye=null,Qe=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,m=[],_=null,v=!1,d=null,p=null,w=null,y=null,T=null,H=null,S=null,A=new Oe(0,0,0),X=0,x=!1,b=null,P=null,O=null,se=null,Z=null,le=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,K=0,j=e.getParameter(e.VERSION);if(j.indexOf("WebGL")!==-1)K=parseFloat(/^WebGL (\d)/.exec(j)[1]),N=K>=1;else if(j.indexOf("OpenGL ES")!==-1)K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),N=K>=2;let de=null,me={},Ce=e.getParameter(e.SCISSOR_BOX),ge=e.getParameter(e.VIEWPORT),J=new wt().fromArray(Ce),ue=new wt().fromArray(ge);function ve(k,U,D,G){let oe=new Uint8Array(4),he=e.createTexture();e.bindTexture(k,he),e.texParameteri(k,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(k,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Me=0;Me<D;Me++)if(k===e.TEXTURE_3D||k===e.TEXTURE_2D_ARRAY)e.texImage3D(U,0,e.RGBA,1,1,G,0,e.RGBA,e.UNSIGNED_BYTE,oe);else e.texImage2D(U+Me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return he}let Ae={};Ae[e.TEXTURE_2D]=ve(e.TEXTURE_2D,e.TEXTURE_2D,1),Ae[e.TEXTURE_CUBE_MAP]=ve(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[e.TEXTURE_2D_ARRAY]=ve(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ae[e.TEXTURE_3D]=ve(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(e.DEPTH_TEST),a.setFunc(3),Q(!1),Y(1),_e(e.CULL_FACE),ut(0);function _e(k){if(h[k]!==!0)e.enable(k),h[k]=!0}function Ue(k){if(h[k]!==!1)e.disable(k),h[k]=!1}function Be(k,U){if(u[k]!==U){if(e.bindFramebuffer(k,U),u[k]=U,k===e.DRAW_FRAMEBUFFER)u[e.FRAMEBUFFER]=U;if(k===e.FRAMEBUFFER)u[e.DRAW_FRAMEBUFFER]=U;return!0}return!1}function He(k,U){let D=m,G=!1;if(k){if(D=f.get(U),D===void 0)D=[],f.set(U,D);let oe=k.textures;if(D.length!==oe.length||D[0]!==e.COLOR_ATTACHMENT0){for(let he=0,Me=oe.length;he<Me;he++)D[he]=e.COLOR_ATTACHMENT0+he;D.length=oe.length,G=!0}}else if(D[0]!==e.BACK)D[0]=e.BACK,G=!0;if(G)e.drawBuffers(D)}function $e(k){if(_!==k)return e.useProgram(k),_=k,!0;return!1}let nt={[100]:e.FUNC_ADD,[101]:e.FUNC_SUBTRACT,[102]:e.FUNC_REVERSE_SUBTRACT};nt[103]=e.MIN,nt[104]=e.MAX;let L={[200]:e.ZERO,[201]:e.ONE,[202]:e.SRC_COLOR,[204]:e.SRC_ALPHA,[210]:e.SRC_ALPHA_SATURATE,[208]:e.DST_COLOR,[206]:e.DST_ALPHA,[203]:e.ONE_MINUS_SRC_COLOR,[205]:e.ONE_MINUS_SRC_ALPHA,[209]:e.ONE_MINUS_DST_COLOR,[207]:e.ONE_MINUS_DST_ALPHA,[211]:e.CONSTANT_COLOR,[212]:e.ONE_MINUS_CONSTANT_COLOR,[213]:e.CONSTANT_ALPHA,[214]:e.ONE_MINUS_CONSTANT_ALPHA};function ut(k,U,D,G,oe,he,Me,Ye,Qe,ke){if(k===0){if(v===!0)Ue(e.BLEND),v=!1;return}if(v===!1)_e(e.BLEND),v=!0;if(k!==5){if(k!==d||ke!==x){if(p!==100||T!==100)e.blendEquation(e.FUNC_ADD),p=100,T=100;if(ke)switch(k){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,y=null,H=null,S=null,A.set(0,0,0),X=0,d=k,x=ke}return}if(oe=oe||U,he=he||D,Me=Me||G,U!==p||oe!==T)e.blendEquationSeparate(nt[U],nt[oe]),p=U,T=oe;if(D!==w||G!==y||he!==H||Me!==S)e.blendFuncSeparate(L[D],L[G],L[he],L[Me]),w=D,y=G,H=he,S=Me;if(Ye.equals(A)===!1||Qe!==X)e.blendColor(Ye.r,Ye.g,Ye.b,Qe),A.copy(Ye),X=Qe;d=k,x=!1}function C(k,U){k.side===2?Ue(e.CULL_FACE):_e(e.CULL_FACE);let D=k.side===1;if(U)D=!D;Q(D),k.blending===1&&k.transparent===!1?ut(0):ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let G=k.stencilWrite;if(o.setTest(G),G)o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass);pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?_e(e.SAMPLE_ALPHA_TO_COVERAGE):Ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function Q(k){if(b!==k){if(k)e.frontFace(e.CW);else e.frontFace(e.CCW);b=k}}function Y(k){if(k!==0){if(_e(e.CULL_FACE),k!==P)if(k===1)e.cullFace(e.BACK);else if(k===2)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else Ue(e.CULL_FACE);P=k}function ce(k){if(k!==O){if(N)e.lineWidth(k);O=k}}function pe(k,U,D){if(k){if(_e(e.POLYGON_OFFSET_FILL),se!==U||Z!==D)e.polygonOffset(U,D),se=U,Z=D}else Ue(e.POLYGON_OFFSET_FILL)}function Se(k){if(k)_e(e.SCISSOR_TEST);else Ue(e.SCISSOR_TEST)}function E(k){if(k===void 0)k=e.TEXTURE0+le-1;if(de!==k)e.activeTexture(k),de=k}function g(k,U,D){if(D===void 0)if(de===null)D=e.TEXTURE0+le-1;else D=de;let G=me[D];if(G===void 0)G={type:void 0,texture:void 0},me[D]=G;if(G.type!==k||G.texture!==U){if(de!==D)e.activeTexture(D),de=D;e.bindTexture(k,U||Ae[k]),G.type=k,G.texture=U}}function V(){let k=me[de];if(k!==void 0&&k.type!==void 0)e.bindTexture(k.type,null),k.type=void 0,k.texture=void 0}function ne(){try{e.compressedTexImage2D.apply(e,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{e.compressedTexImage3D.apply(e,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{e.texSubImage2D.apply(e,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{e.texSubImage3D.apply(e,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{e.texStorage2D.apply(e,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{e.texStorage3D.apply(e,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{e.texImage2D.apply(e,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{e.texImage3D.apply(e,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(k){if(J.equals(k)===!1)e.scissor(k.x,k.y,k.z,k.w),J.copy(k)}function Ie(k){if(ue.equals(k)===!1)e.viewport(k.x,k.y,k.z,k.w),ue.copy(k)}function De(k,U){let D=c.get(U);if(D===void 0)D=new WeakMap,c.set(U,D);let G=D.get(k);if(G===void 0)G=e.getUniformBlockIndex(U,k.name),D.set(k,G)}function Ke(k,U){let G=c.get(U).get(k);if(l.get(U)!==G)e.uniformBlockBinding(U,G,k.__bindingPointIndex),l.set(U,G)}function dt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},de=null,me={},u={},f=new WeakMap,m=[],_=null,v=!1,d=null,p=null,w=null,y=null,T=null,H=null,S=null,A=new Oe(0,0,0),X=0,x=!1,b=null,P=null,O=null,se=null,Z=null,J.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:Ue,bindFramebuffer:Be,drawBuffers:He,useProgram:$e,setBlending:ut,setMaterial:C,setFlipSided:Q,setCullFace:Y,setLineWidth:ce,setPolygonOffset:pe,setScissorTest:Se,activeTexture:E,bindTexture:g,unbindTexture:V,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:Re,texImage3D:Ze,updateUBOMapping:De,uniformBlockBinding:Ke,texStorage2D:we,texStorage3D:fe,texSubImage2D:ee,texSubImage3D:Te,compressedTexSubImage2D:xe,compressedTexSubImage3D:ae,scissor:We,viewport:Ie,reset:dt}}function _l(e,t,n,i){let s=mm(i);switch(n){case 1021:return e*t;case 1024:return e*t;case 1025:return e*t*2;case 1028:return e*t/s.components*s.byteLength;case 1029:return e*t/s.components*s.byteLength;case 1030:return e*t*2/s.components*s.byteLength;case 1031:return e*t*2/s.components*s.byteLength;case 1022:return e*t*3/s.components*s.byteLength;case 1023:return e*t*4/s.components*s.byteLength;case 1033:return e*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function mm(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function gm(e,t,n,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function _(E,g){return m?new OffscreenCanvas(E,g):Ur("canvas")}function v(E,g,V){let ne=1,re=Se(E);if(re.width>V||re.height>V)ne=V/Math.max(re.width,re.height);if(ne<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ee=Math.floor(ne*re.width),Te=Math.floor(ne*re.height);if(u===void 0)u=_(ee,Te);let xe=g?_(ee,Te):u;return xe.width=ee,xe.height=Te,xe.getContext("2d").drawImage(E,0,0,ee,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Te+")."),xe}else{if("data"in E)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+").");return E}return E}function d(E){return E.generateMipmaps}function p(E){e.generateMipmap(E)}function w(E){if(E.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(E.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function y(E,g,V,ne,re=!1){if(E!==null){if(e[E]!==void 0)return e[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=g;if(g===e.RED){if(V===e.FLOAT)ee=e.R32F;if(V===e.HALF_FLOAT)ee=e.R16F;if(V===e.UNSIGNED_BYTE)ee=e.R8}if(g===e.RED_INTEGER){if(V===e.UNSIGNED_BYTE)ee=e.R8UI;if(V===e.UNSIGNED_SHORT)ee=e.R16UI;if(V===e.UNSIGNED_INT)ee=e.R32UI;if(V===e.BYTE)ee=e.R8I;if(V===e.SHORT)ee=e.R16I;if(V===e.INT)ee=e.R32I}if(g===e.RG){if(V===e.FLOAT)ee=e.RG32F;if(V===e.HALF_FLOAT)ee=e.RG16F;if(V===e.UNSIGNED_BYTE)ee=e.RG8}if(g===e.RG_INTEGER){if(V===e.UNSIGNED_BYTE)ee=e.RG8UI;if(V===e.UNSIGNED_SHORT)ee=e.RG16UI;if(V===e.UNSIGNED_INT)ee=e.RG32UI;if(V===e.BYTE)ee=e.RG8I;if(V===e.SHORT)ee=e.RG16I;if(V===e.INT)ee=e.RG32I}if(g===e.RGB_INTEGER){if(V===e.UNSIGNED_BYTE)ee=e.RGB8UI;if(V===e.UNSIGNED_SHORT)ee=e.RGB16UI;if(V===e.UNSIGNED_INT)ee=e.RGB32UI;if(V===e.BYTE)ee=e.RGB8I;if(V===e.SHORT)ee=e.RGB16I;if(V===e.INT)ee=e.RGB32I}if(g===e.RGBA_INTEGER){if(V===e.UNSIGNED_BYTE)ee=e.RGBA8UI;if(V===e.UNSIGNED_SHORT)ee=e.RGBA16UI;if(V===e.UNSIGNED_INT)ee=e.RGBA32UI;if(V===e.BYTE)ee=e.RGBA8I;if(V===e.SHORT)ee=e.RGBA16I;if(V===e.INT)ee=e.RGBA32I}if(g===e.RGB){if(V===e.UNSIGNED_INT_5_9_9_9_REV)ee=e.RGB9_E5}if(g===e.RGBA){let Te=re?"linear":gt.getTransfer(ne);if(V===e.FLOAT)ee=e.RGBA32F;if(V===e.HALF_FLOAT)ee=e.RGBA16F;if(V===e.UNSIGNED_BYTE)ee=Te==="srgb"?e.SRGB8_ALPHA8:e.RGBA8;if(V===e.UNSIGNED_SHORT_4_4_4_4)ee=e.RGBA4;if(V===e.UNSIGNED_SHORT_5_5_5_1)ee=e.RGB5_A1}if(ee===e.R16F||ee===e.R32F||ee===e.RG16F||ee===e.RG32F||ee===e.RGBA16F||ee===e.RGBA32F)t.get("EXT_color_buffer_float");return ee}function T(E,g){let V;if(E){if(g===null||g===1014||g===1020)V=e.DEPTH24_STENCIL8;else if(g===1015)V=e.DEPTH32F_STENCIL8;else if(g===1012)V=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(g===null||g===1014||g===1020)V=e.DEPTH_COMPONENT24;else if(g===1015)V=e.DEPTH_COMPONENT32F;else if(g===1012)V=e.DEPTH_COMPONENT16;return V}function H(E,g){if(d(E)===!0||E.isFramebufferTexture&&E.minFilter!==1003&&E.minFilter!==1006)return Math.log2(Math.max(g.width,g.height))+1;else if(E.mipmaps!==void 0&&E.mipmaps.length>0)return E.mipmaps.length;else if(E.isCompressedTexture&&Array.isArray(E.image))return g.mipmaps.length;else return 1}function S(E){let g=E.target;if(g.removeEventListener("dispose",S),X(g),g.isVideoTexture)h.delete(g)}function A(E){let g=E.target;g.removeEventListener("dispose",A),b(g)}function X(E){let g=i.get(E);if(g.__webglInit===void 0)return;let V=E.source,ne=f.get(V);if(ne){let re=ne[g.__cacheKey];if(re.usedTimes--,re.usedTimes===0)x(E);if(Object.keys(ne).length===0)f.delete(V)}i.remove(E)}function x(E){let g=i.get(E);e.deleteTexture(g.__webglTexture);let V=E.source,ne=f.get(V);delete ne[g.__cacheKey],a.memory.textures--}function b(E){let g=i.get(E);if(E.depthTexture)E.depthTexture.dispose(),i.remove(E.depthTexture);if(E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(g.__webglFramebuffer[ne]))for(let re=0;re<g.__webglFramebuffer[ne].length;re++)e.deleteFramebuffer(g.__webglFramebuffer[ne][re]);else e.deleteFramebuffer(g.__webglFramebuffer[ne]);if(g.__webglDepthbuffer)e.deleteRenderbuffer(g.__webglDepthbuffer[ne])}else{if(Array.isArray(g.__webglFramebuffer))for(let ne=0;ne<g.__webglFramebuffer.length;ne++)e.deleteFramebuffer(g.__webglFramebuffer[ne]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer)e.deleteRenderbuffer(g.__webglDepthbuffer);if(g.__webglMultisampledFramebuffer)e.deleteFramebuffer(g.__webglMultisampledFramebuffer);if(g.__webglColorRenderbuffer){for(let ne=0;ne<g.__webglColorRenderbuffer.length;ne++)if(g.__webglColorRenderbuffer[ne])e.deleteRenderbuffer(g.__webglColorRenderbuffer[ne])}if(g.__webglDepthRenderbuffer)e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let V=E.textures;for(let ne=0,re=V.length;ne<re;ne++){let ee=i.get(V[ne]);if(ee.__webglTexture)e.deleteTexture(ee.__webglTexture),a.memory.textures--;i.remove(V[ne])}i.remove(E)}let P=0;function O(){P=0}function se(){let E=P;if(E>=s.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures);return P+=1,E}function Z(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function le(E,g){let V=i.get(E);if(E.isVideoTexture)ce(E);if(E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){let ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,E,g);return}}n.bindTexture(e.TEXTURE_2D,V.__webglTexture,e.TEXTURE0+g)}function N(E,g){let V=i.get(E);if(E.version>0&&V.__version!==E.version){ue(V,E,g);return}n.bindTexture(e.TEXTURE_2D_ARRAY,V.__webglTexture,e.TEXTURE0+g)}function K(E,g){let V=i.get(E);if(E.version>0&&V.__version!==E.version){ue(V,E,g);return}n.bindTexture(e.TEXTURE_3D,V.__webglTexture,e.TEXTURE0+g)}function j(E,g){let V=i.get(E);if(E.version>0&&V.__version!==E.version){ve(V,E,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture,e.TEXTURE0+g)}let de={[1000]:e.REPEAT,[1001]:e.CLAMP_TO_EDGE,[1002]:e.MIRRORED_REPEAT},me={[1003]:e.NEAREST,[1004]:e.NEAREST_MIPMAP_NEAREST,[1005]:e.NEAREST_MIPMAP_LINEAR,[1006]:e.LINEAR,[1007]:e.LINEAR_MIPMAP_NEAREST,[1008]:e.LINEAR_MIPMAP_LINEAR},Ce={[512]:e.NEVER,[519]:e.ALWAYS,[513]:e.LESS,[515]:e.LEQUAL,[514]:e.EQUAL,[518]:e.GEQUAL,[516]:e.GREATER,[517]:e.NOTEQUAL};function ge(E,g){if(g.type===1015&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===1006||g.magFilter===1007||g.magFilter===1005||g.magFilter===1008||g.minFilter===1006||g.minFilter===1007||g.minFilter===1005||g.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(E,e.TEXTURE_WRAP_S,de[g.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,de[g.wrapT]),E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)e.texParameteri(E,e.TEXTURE_WRAP_R,de[g.wrapR]);if(e.texParameteri(E,e.TEXTURE_MAG_FILTER,me[g.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction)e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===1003)return;if(g.minFilter!==1005&&g.minFilter!==1008)return;if(g.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function J(E,g){let V=!1;if(E.__webglInit===void 0)E.__webglInit=!0,g.addEventListener("dispose",S);let ne=g.source,re=f.get(ne);if(re===void 0)re={},f.set(ne,re);let ee=Z(g);if(ee!==E.__cacheKey){if(re[ee]===void 0)re[ee]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,V=!0;re[ee].usedTimes++;let Te=re[E.__cacheKey];if(Te!==void 0){if(re[E.__cacheKey].usedTimes--,Te.usedTimes===0)x(g)}E.__cacheKey=ee,E.__webglTexture=re[ee].texture}return V}function ue(E,g,V){let ne=e.TEXTURE_2D;if(g.isDataArrayTexture||g.isCompressedArrayTexture)ne=e.TEXTURE_2D_ARRAY;if(g.isData3DTexture)ne=e.TEXTURE_3D;let re=J(E,g),ee=g.source;n.bindTexture(ne,E.__webglTexture,e.TEXTURE0+V);let Te=i.get(ee);if(ee.version!==Te.__version||re===!0){n.activeTexture(e.TEXTURE0+V);let xe=gt.getPrimaries(gt.workingColorSpace),ae=g.colorSpace===""?null:gt.getPrimaries(g.colorSpace),we=g.colorSpace===""||xe===ae?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let fe=v(g.image,!1,s.maxTextureSize);fe=pe(g,fe);let Re=r.convert(g.format,g.colorSpace),Ze=r.convert(g.type),We=y(g.internalFormat,Re,Ze,g.colorSpace,g.isVideoTexture);ge(ne,g);let Ie,De=g.mipmaps,Ke=g.isVideoTexture!==!0,dt=Te.__version===void 0||re===!0,k=ee.dataReady,U=H(g,fe);if(g.isDepthTexture){if(We=T(g.format===1027,g.type),dt)if(Ke)n.texStorage2D(e.TEXTURE_2D,1,We,fe.width,fe.height);else n.texImage2D(e.TEXTURE_2D,0,We,fe.width,fe.height,0,Re,Ze,null)}else if(g.isDataTexture)if(De.length>0){if(Ke&&dt)n.texStorage2D(e.TEXTURE_2D,U,We,De[0].width,De[0].height);for(let D=0,G=De.length;D<G;D++)if(Ie=De[D],Ke){if(k)n.texSubImage2D(e.TEXTURE_2D,D,0,0,Ie.width,Ie.height,Re,Ze,Ie.data)}else n.texImage2D(e.TEXTURE_2D,D,We,Ie.width,Ie.height,0,Re,Ze,Ie.data);g.generateMipmaps=!1}else if(Ke){if(dt)n.texStorage2D(e.TEXTURE_2D,U,We,fe.width,fe.height);if(k)n.texSubImage2D(e.TEXTURE_2D,0,0,0,fe.width,fe.height,Re,Ze,fe.data)}else n.texImage2D(e.TEXTURE_2D,0,We,fe.width,fe.height,0,Re,Ze,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){if(Ke&&dt)n.texStorage3D(e.TEXTURE_2D_ARRAY,U,We,De[0].width,De[0].height,fe.depth);for(let D=0,G=De.length;D<G;D++)if(Ie=De[D],g.format!==1023)if(Re!==null)if(Ke){if(k)if(g.layerUpdates.size>0){let oe=_l(Ie.width,Ie.height,g.format,g.type);for(let he of g.layerUpdates){let Me=Ie.data.subarray(he*oe/Ie.data.BYTES_PER_ELEMENT,(he+1)*oe/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,D,0,0,he,Ie.width,Ie.height,1,Re,Me)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,D,0,0,0,Ie.width,Ie.height,fe.depth,Re,Ie.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,D,We,Ie.width,Ie.height,fe.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ke){if(k)n.texSubImage3D(e.TEXTURE_2D_ARRAY,D,0,0,0,Ie.width,Ie.height,fe.depth,Re,Ze,Ie.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,D,We,Ie.width,Ie.height,fe.depth,0,Re,Ze,Ie.data)}else{if(Ke&&dt)n.texStorage2D(e.TEXTURE_2D,U,We,De[0].width,De[0].height);for(let D=0,G=De.length;D<G;D++)if(Ie=De[D],g.format!==1023)if(Re!==null)if(Ke){if(k)n.compressedTexSubImage2D(e.TEXTURE_2D,D,0,0,Ie.width,Ie.height,Re,Ie.data)}else n.compressedTexImage2D(e.TEXTURE_2D,D,We,Ie.width,Ie.height,0,Ie.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ke){if(k)n.texSubImage2D(e.TEXTURE_2D,D,0,0,Ie.width,Ie.height,Re,Ze,Ie.data)}else n.texImage2D(e.TEXTURE_2D,D,We,Ie.width,Ie.height,0,Re,Ze,Ie.data)}else if(g.isDataArrayTexture)if(Ke){if(dt)n.texStorage3D(e.TEXTURE_2D_ARRAY,U,We,fe.width,fe.height,fe.depth);if(k)if(g.layerUpdates.size>0){let D=_l(fe.width,fe.height,g.format,g.type);for(let G of g.layerUpdates){let oe=fe.data.subarray(G*D/fe.data.BYTES_PER_ELEMENT,(G+1)*D/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,G,fe.width,fe.height,1,Re,Ze,oe)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Re,Ze,fe.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,We,fe.width,fe.height,fe.depth,0,Re,Ze,fe.data);else if(g.isData3DTexture)if(Ke){if(dt)n.texStorage3D(e.TEXTURE_3D,U,We,fe.width,fe.height,fe.depth);if(k)n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Re,Ze,fe.data)}else n.texImage3D(e.TEXTURE_3D,0,We,fe.width,fe.height,fe.depth,0,Re,Ze,fe.data);else if(g.isFramebufferTexture){if(dt)if(Ke)n.texStorage2D(e.TEXTURE_2D,U,We,fe.width,fe.height);else{let{width:D,height:G}=fe;for(let oe=0;oe<U;oe++)n.texImage2D(e.TEXTURE_2D,oe,We,D,G,0,Re,Ze,null),D>>=1,G>>=1}}else if(De.length>0){if(Ke&&dt){let D=Se(De[0]);n.texStorage2D(e.TEXTURE_2D,U,We,D.width,D.height)}for(let D=0,G=De.length;D<G;D++)if(Ie=De[D],Ke){if(k)n.texSubImage2D(e.TEXTURE_2D,D,0,0,Re,Ze,Ie)}else n.texImage2D(e.TEXTURE_2D,D,We,Re,Ze,Ie);g.generateMipmaps=!1}else if(Ke){if(dt){let D=Se(fe);n.texStorage2D(e.TEXTURE_2D,U,We,D.width,D.height)}if(k)n.texSubImage2D(e.TEXTURE_2D,0,0,0,Re,Ze,fe)}else n.texImage2D(e.TEXTURE_2D,0,We,Re,Ze,fe);if(d(g))p(ne);if(Te.__version=ee.version,g.onUpdate)g.onUpdate(g)}E.__version=g.version}function ve(E,g,V){if(g.image.length!==6)return;let ne=J(E,g),re=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+V);let ee=i.get(re);if(re.version!==ee.__version||ne===!0){n.activeTexture(e.TEXTURE0+V);let Te=gt.getPrimaries(gt.workingColorSpace),xe=g.colorSpace===""?null:gt.getPrimaries(g.colorSpace),ae=g.colorSpace===""||Te===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let we=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,Re=[];for(let G=0;G<6;G++){if(!we&&!fe)Re[G]=v(g.image[G],!0,s.maxCubemapSize);else Re[G]=fe?g.image[G].image:g.image[G];Re[G]=pe(g,Re[G])}let Ze=Re[0],We=r.convert(g.format,g.colorSpace),Ie=r.convert(g.type),De=y(g.internalFormat,We,Ie,g.colorSpace),Ke=g.isVideoTexture!==!0,dt=ee.__version===void 0||ne===!0,k=re.dataReady,U=H(g,Ze);ge(e.TEXTURE_CUBE_MAP,g);let D;if(we){if(Ke&&dt)n.texStorage2D(e.TEXTURE_CUBE_MAP,U,De,Ze.width,Ze.height);for(let G=0;G<6;G++){D=Re[G].mipmaps;for(let oe=0;oe<D.length;oe++){let he=D[oe];if(g.format!==1023)if(We!==null)if(Ke){if(k)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,oe,0,0,he.width,he.height,We,he.data)}else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,oe,De,he.width,he.height,0,he.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Ke){if(k)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,oe,0,0,he.width,he.height,We,Ie,he.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,oe,De,he.width,he.height,0,We,Ie,he.data)}}}else{if(D=g.mipmaps,Ke&&dt){if(D.length>0)U++;let G=Se(Re[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,U,De,G.width,G.height)}for(let G=0;G<6;G++)if(fe){if(Ke){if(k)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Re[G].width,Re[G].height,We,Ie,Re[G].data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,De,Re[G].width,Re[G].height,0,We,Ie,Re[G].data);for(let oe=0;oe<D.length;oe++){let Me=D[oe].image[G].image;if(Ke){if(k)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,oe+1,0,0,Me.width,Me.height,We,Ie,Me.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,oe+1,De,Me.width,Me.height,0,We,Ie,Me.data)}}else{if(Ke){if(k)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,We,Ie,Re[G])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,De,We,Ie,Re[G]);for(let oe=0;oe<D.length;oe++){let he=D[oe];if(Ke){if(k)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,oe+1,0,0,We,Ie,he.image[G])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,oe+1,De,We,Ie,he.image[G])}}}if(d(g))p(e.TEXTURE_CUBE_MAP);if(ee.__version=re.version,g.onUpdate)g.onUpdate(g)}E.__version=g.version}function Ae(E,g,V,ne,re,ee){let Te=r.convert(V.format,V.colorSpace),xe=r.convert(V.type),ae=y(V.internalFormat,Te,xe,V.colorSpace),we=i.get(g),fe=i.get(V);if(fe.__renderTarget=g,!we.__hasExternalTextures){let Re=Math.max(1,g.width>>ee),Ze=Math.max(1,g.height>>ee);if(re===e.TEXTURE_3D||re===e.TEXTURE_2D_ARRAY)n.texImage3D(re,ee,ae,Re,Ze,g.depth,0,Te,xe,null);else n.texImage2D(re,ee,ae,Re,Ze,0,Te,xe,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,E),Y(g))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ne,re,fe.__webglTexture,0,Q(g));else if(re===e.TEXTURE_2D||re>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,ne,re,fe.__webglTexture,ee);n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(E,g,V){if(e.bindRenderbuffer(e.RENDERBUFFER,E),g.depthBuffer){let ne=g.depthTexture,re=ne&&ne.isDepthTexture?ne.type:null,ee=T(g.stencilBuffer,re),Te=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=Q(g);if(Y(g))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe,ee,g.width,g.height);else if(V)e.renderbufferStorageMultisample(e.RENDERBUFFER,xe,ee,g.width,g.height);else e.renderbufferStorage(e.RENDERBUFFER,ee,g.width,g.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Te,e.RENDERBUFFER,E)}else{let ne=g.textures;for(let re=0;re<ne.length;re++){let ee=ne[re],Te=r.convert(ee.format,ee.colorSpace),xe=r.convert(ee.type),ae=y(ee.internalFormat,Te,xe,ee.colorSpace),we=Q(g);if(V&&Y(g)===!1)e.renderbufferStorageMultisample(e.RENDERBUFFER,we,ae,g.width,g.height);else if(Y(g))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we,ae,g.width,g.height);else e.renderbufferStorage(e.RENDERBUFFER,ae,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ue(E,g){if(g&&g.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=i.get(g.depthTexture);if(ne.__renderTarget=g,!ne.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0;le(g.depthTexture,0);let re=ne.__webglTexture,ee=Q(g);if(g.depthTexture.format===1026)if(Y(g))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,re,0,ee);else e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,re,0);else if(g.depthTexture.format===1027)if(Y(g))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,re,0,ee);else e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,re,0);else throw Error("Unknown depthTexture format")}function Be(E){let g=i.get(E),V=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let ne=E.depthTexture;if(g.__depthDisposeCallback)g.__depthDisposeCallback();if(ne){let re=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ne.removeEventListener("dispose",re)};ne.addEventListener("dispose",re),g.__depthDisposeCallback=re}g.__boundDepthTexture=ne}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(V)throw Error("target.depthTexture not supported in Cube render targets");Ue(g.__webglFramebuffer,E)}else if(V){g.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[ne]),g.__webglDepthbuffer[ne]===void 0)g.__webglDepthbuffer[ne]=e.createRenderbuffer(),_e(g.__webglDepthbuffer[ne],E,!1);else{let re=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=g.__webglDepthbuffer[ne];e.bindRenderbuffer(e.RENDERBUFFER,ee),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),_e(g.__webglDepthbuffer,E,!1);else{let ne=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,re),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,re)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function He(E,g,V){let ne=i.get(E);if(g!==void 0)Ae(ne.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(V!==void 0)Be(E)}function $e(E){let g=E.texture,V=i.get(E),ne=i.get(g);E.addEventListener("dispose",A);let re=E.textures,ee=E.isWebGLCubeRenderTarget===!0,Te=re.length>1;if(!Te){if(ne.__webglTexture===void 0)ne.__webglTexture=e.createTexture();ne.__version=g.version,a.memory.textures++}if(ee){V.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[xe]=[];for(let ae=0;ae<g.mipmaps.length;ae++)V.__webglFramebuffer[xe][ae]=e.createFramebuffer()}else V.__webglFramebuffer[xe]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let xe=0;xe<g.mipmaps.length;xe++)V.__webglFramebuffer[xe]=e.createFramebuffer()}else V.__webglFramebuffer=e.createFramebuffer();if(Te)for(let xe=0,ae=re.length;xe<ae;xe++){let we=i.get(re[xe]);if(we.__webglTexture===void 0)we.__webglTexture=e.createTexture(),a.memory.textures++}if(E.samples>0&&Y(E)===!1){V.__webglMultisampledFramebuffer=e.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let xe=0;xe<re.length;xe++){let ae=re[xe];V.__webglColorRenderbuffer[xe]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,V.__webglColorRenderbuffer[xe]);let we=r.convert(ae.format,ae.colorSpace),fe=r.convert(ae.type),Re=y(ae.internalFormat,we,fe,ae.colorSpace,E.isXRRenderTarget===!0),Ze=Q(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ze,Re,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,V.__webglColorRenderbuffer[xe])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer)V.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(V.__webglDepthRenderbuffer,E,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ee){n.bindTexture(e.TEXTURE_CUBE_MAP,ne.__webglTexture),ge(e.TEXTURE_CUBE_MAP,g);for(let xe=0;xe<6;xe++)if(g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)Ae(V.__webglFramebuffer[xe][ae],E,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ae);else Ae(V.__webglFramebuffer[xe],E,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);if(d(g))p(e.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(Te){for(let xe=0,ae=re.length;xe<ae;xe++){let we=re[xe],fe=i.get(we);if(n.bindTexture(e.TEXTURE_2D,fe.__webglTexture),ge(e.TEXTURE_2D,we),Ae(V.__webglFramebuffer,E,we,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,0),d(we))p(e.TEXTURE_2D)}n.unbindTexture()}else{let xe=e.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)xe=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(xe,ne.__webglTexture),ge(xe,g),g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)Ae(V.__webglFramebuffer[ae],E,g,e.COLOR_ATTACHMENT0,xe,ae);else Ae(V.__webglFramebuffer,E,g,e.COLOR_ATTACHMENT0,xe,0);if(d(g))p(xe);n.unbindTexture()}if(E.depthBuffer)Be(E)}function nt(E){let g=E.textures;for(let V=0,ne=g.length;V<ne;V++){let re=g[V];if(d(re)){let ee=w(E),Te=i.get(re).__webglTexture;n.bindTexture(ee,Te),p(ee),n.unbindTexture()}}}let L=[],ut=[];function C(E){if(E.samples>0){if(Y(E)===!1){let{textures:g,width:V,height:ne}=E,re=e.COLOR_BUFFER_BIT,ee=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Te=i.get(E),xe=g.length>1;if(xe)for(let ae=0;ae<g.length;ae++)n.bindFramebuffer(e.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Te.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ae=0;ae<g.length;ae++){if(E.resolveDepthBuffer){if(E.depthBuffer)re|=e.DEPTH_BUFFER_BIT;if(E.stencilBuffer&&E.resolveStencilBuffer)re|=e.STENCIL_BUFFER_BIT}if(xe){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Te.__webglColorRenderbuffer[ae]);let we=i.get(g[ae]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,we,0)}if(e.blitFramebuffer(0,0,V,ne,0,0,V,ne,re,e.NEAREST),l===!0){if(L.length=0,ut.length=0,L.push(e.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.resolveDepthBuffer===!1)L.push(ee),ut.push(ee),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ut);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,L)}}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),xe)for(let ae=0;ae<g.length;ae++){n.bindFramebuffer(e.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,Te.__webglColorRenderbuffer[ae]);let we=i.get(g[ae]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Te.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,we,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let g=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function Q(E){return Math.min(s.maxSamples,E.samples)}function Y(E){let g=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ce(E){let g=a.render.frame;if(h.get(E)!==g)h.set(E,g),E.update()}function pe(E,g){let{colorSpace:V,format:ne,type:re}=E;if(E.isCompressedTexture===!0||E.isVideoTexture===!0)return g;if(V!=="srgb-linear"&&V!=="")if(gt.getTransfer(V)==="srgb"){if(ne!==1023||re!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",V);return g}function Se(E){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement)c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height;else if(typeof VideoFrame<"u"&&E instanceof VideoFrame)c.width=E.displayWidth,c.height=E.displayHeight;else c.width=E.width,c.height=E.height;return c}this.allocateTextureUnit=se,this.resetTextureUnits=O,this.setTexture2D=le,this.setTexture2DArray=N,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=He,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Y}function vm(e,t){function n(i,s=""){let r,a=gt.getTransfer(s);if(i===1009)return e.UNSIGNED_BYTE;if(i===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return e.BYTE;if(i===1011)return e.SHORT;if(i===1012)return e.UNSIGNED_SHORT;if(i===1013)return e.INT;if(i===1014)return e.UNSIGNED_INT;if(i===1015)return e.FLOAT;if(i===1016)return e.HALF_FLOAT;if(i===1021)return e.ALPHA;if(i===1022)return e.RGB;if(i===1023)return e.RGBA;if(i===1024)return e.LUMINANCE;if(i===1025)return e.LUMINANCE_ALPHA;if(i===1026)return e.DEPTH_COMPONENT;if(i===1027)return e.DEPTH_STENCIL;if(i===1028)return e.RED;if(i===1029)return e.RED_INTEGER;if(i===1030)return e.RG;if(i===1031)return e.RG_INTEGER;if(i===1033)return e.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===36196||i===37492)return a==="srgb"?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===37808)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===36492)return a==="srgb"?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===1020)return e.UNSIGNED_INT_24_8;return e[i]!==void 0?e[i]:null}return{convert:n}}class bc extends Ht{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}}class Jt extends Gt{constructor(){super();this.isGroup=!0,this.type="Group"}}var _m={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let _ of e.hand.values()){let v=t.getJointPose(_,n),d=this._getHandJoint(l,_);if(v!==null)d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius;d.visible=v!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),f=0.02,m=0.005;if(l.inputState.pinching&&u>f+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=f-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(o!==null&&e.gripSpace){if(s=t.getPose(e.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1}}if(a!==null){if(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(_m)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}var xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ym=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ut,s=e.properties.get(i);if(s.__webglTexture=t.texture,t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,n=new xt({vertexShader:xm,fragmentShader:ym,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new vs(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sc extends ai{constructor(e,t){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,f=null,m=null,_=new Mc,v=t.getContextAttributes(),d=null,p=null,w=[],y=[],T=new Ne,H=null,S=new Ht;S.viewport=new wt;let A=new Ht;A.viewport=new wt;let X=[S,A],x=new bc,b=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=w[J];if(ue===void 0)ue=new Lr,w[J]=ue;return ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=w[J];if(ue===void 0)ue=new Lr,w[J]=ue;return ue.getGripSpace()},this.getHand=function(J){let ue=w[J];if(ue===void 0)ue=new Lr,w[J]=ue;return ue.getHandSpace()};function O(J){let ue=y.indexOf(J.inputSource);if(ue===-1)return;let ve=w[ue];if(ve!==void 0)ve.update(J.inputSource,J.frame,l||r),ve.dispatchEvent({type:J.type,data:J.inputSource})}function se(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",se),i.removeEventListener("inputsourceschange",Z);for(let J=0;J<w.length;J++){let ue=y[J];if(ue===null)continue;y[J]=null,w[J].disconnect(ue)}b=null,P=null,_.reset(),e.setRenderTarget(d),f=null,u=null,h=null,i=null,p=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(H),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){if(s=J,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){if(a=J,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",se),i.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0)await t.makeXRCompatible();if(H=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Nt(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,ve=null,Ae=null;if(v.depth)Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?1027:1026,ve=v.stencil?1020:1014;let _e={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(_e),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Nt(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Zs(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),ge.setContext(i),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(J){for(let ue=0;ue<J.removed.length;ue++){let ve=J.removed[ue],Ae=y.indexOf(ve);if(Ae>=0)y[Ae]=null,w[Ae].disconnect(ve)}for(let ue=0;ue<J.added.length;ue++){let ve=J.added[ue],Ae=y.indexOf(ve);if(Ae===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=y.length){y.push(ve),Ae=Ue;break}else if(y[Ue]===null){y[Ue]=ve,Ae=Ue;break}if(Ae===-1)break}let _e=w[Ae];if(_e)_e.connect(ve)}}let le=new R,N=new R;function K(J,ue,ve){le.setFromMatrixPosition(ue.matrixWorld),N.setFromMatrixPosition(ve.matrixWorld);let Ae=le.distanceTo(N),_e=ue.projectionMatrix.elements,Ue=ve.projectionMatrix.elements,Be=_e[14]/(_e[10]-1),He=_e[14]/(_e[10]+1),$e=(_e[9]+1)/_e[5],nt=(_e[9]-1)/_e[5],L=(_e[8]-1)/_e[0],ut=(Ue[8]+1)/Ue[0],C=Be*L,Q=Be*ut,Y=Ae/(-L+ut),ce=Y*-L;if(ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ce),J.translateZ(Y),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),_e[10]===-1)J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let pe=Be+Y,Se=He+Y,E=C-ce,g=Q+(Ae-ce),V=$e*He/Se*pe,ne=nt*He/Se*pe;J.projectionMatrix.makePerspective(E,g,V,ne,pe,Se),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function j(J,ue){if(ue===null)J.matrixWorld.copy(J.matrix);else J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix);J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let{near:ue,far:ve}=J;if(_.texture!==null){if(_.depthNear>0)ue=_.depthNear;if(_.depthFar>0)ve=_.depthFar}if(x.near=A.near=S.near=ue,x.far=A.far=S.far=ve,b!==x.near||P!==x.far)i.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,P=x.far;S.layers.mask=J.layers.mask|2,A.layers.mask=J.layers.mask|4,x.layers.mask=S.layers.mask|A.layers.mask;let Ae=J.parent,_e=x.cameras;j(x,Ae);for(let Ue=0;Ue<_e.length;Ue++)j(_e[Ue],Ae);if(_e.length===2)K(x,S,A);else x.projectionMatrix.copy(S.projectionMatrix);de(J,x,Ae)};function de(J,ue,ve){if(ve===null)J.matrix.copy(ue.matrixWorld);else J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld);if(J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera)J.fov=Gs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1}this.getCamera=function(){return x},this.getFoveation=function(){if(u===null&&f===null)return;return o},this.setFoveation=function(J){if(o=J,u!==null)u.fixedFoveation=J;if(f!==null&&f.fixedFoveation!==void 0)f.fixedFoveation=J},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let me=null;function Ce(J,ue){if(c=ue.getViewerPose(l||r),m=ue,c!==null){let ve=c.views;if(f!==null)e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p);let Ae=!1;if(ve.length!==x.cameras.length)x.cameras.length=0,Ae=!0;for(let Ue=0;Ue<ve.length;Ue++){let Be=ve[Ue],He=null;if(f!==null)He=f.getViewport(Be);else{let nt=h.getViewSubImage(u,Be);if(He=nt.viewport,Ue===0)e.setRenderTargetTextures(p,nt.colorTexture,u.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(p)}let $e=X[Ue];if($e===void 0)$e=new Ht,$e.layers.enable(Ue),$e.viewport=new wt,X[Ue]=$e;if($e.matrix.fromArray(Be.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Be.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(He.x,He.y,He.width,He.height),Ue===0)x.matrix.copy($e.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale);if(Ae===!0)x.cameras.push($e)}let _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")){let Ue=h.getDepthInformation(ve[0]);if(Ue&&Ue.isValid&&Ue.texture)_.init(e,Ue,i.renderState)}}for(let ve=0;ve<w.length;ve++){let Ae=y[ve],_e=w[ve];if(Ae!==null&&_e!==void 0)_e.update(Ae,ue,l||r)}if(me)me(J,ue);if(ue.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:ue});m=null}let ge=new hc;ge.setAnimationLoop(Ce),this.setAnimationLoop=function(J){me=J},this.dispose=function(){}}}var Di=new fn,bm=new Je;function Mm(e,t){function n(d,p){if(d.matrixAutoUpdate===!0)d.updateMatrix();p.value.copy(d.matrix)}function i(d,p){if(p.color.getRGB(d.fogColor.value,oc(e)),p.isFog)d.fogNear.value=p.near,d.fogFar.value=p.far;else if(p.isFogExp2)d.fogDensity.value=p.density}function s(d,p,w,y,T){if(p.isMeshBasicMaterial)r(d,p);else if(p.isMeshLambertMaterial)r(d,p);else if(p.isMeshToonMaterial)r(d,p),u(d,p);else if(p.isMeshPhongMaterial)r(d,p),h(d,p);else if(p.isMeshStandardMaterial){if(r(d,p),f(d,p),p.isMeshPhysicalMaterial)m(d,p,T)}else if(p.isMeshMatcapMaterial)r(d,p),_(d,p);else if(p.isMeshDepthMaterial)r(d,p);else if(p.isMeshDistanceMaterial)r(d,p),v(d,p);else if(p.isMeshNormalMaterial)r(d,p);else if(p.isLineBasicMaterial){if(a(d,p),p.isLineDashedMaterial)o(d,p)}else if(p.isPointsMaterial)l(d,p,w,y);else if(p.isSpriteMaterial)c(d,p);else if(p.isShadowMaterial)d.color.value.copy(p.color),d.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function r(d,p){if(d.opacity.value=p.opacity,p.color)d.diffuse.value.copy(p.color);if(p.emissive)d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)d.map.value=p.map,n(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,n(p.alphaMap,d.alphaMapTransform);if(p.bumpMap){if(d.bumpMap.value=p.bumpMap,n(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===1)d.bumpScale.value*=-1}if(p.normalMap){if(d.normalMap.value=p.normalMap,n(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===1)d.normalScale.value.negate()}if(p.displacementMap)d.displacementMap.value=p.displacementMap,n(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias;if(p.emissiveMap)d.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,d.emissiveMapTransform);if(p.specularMap)d.specularMap.value=p.specularMap,n(p.specularMap,d.specularMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest;let w=t.get(p),y=w.envMap,T=w.envMapRotation;if(y){if(d.envMap.value=y,Di.copy(T),Di.x*=-1,Di.y*=-1,Di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1)Di.y*=-1,Di.z*=-1;d.envMapRotation.value.setFromMatrix4(bm.makeRotationFromEuler(Di)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio}if(p.lightMap)d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,d.lightMapTransform);if(p.aoMap)d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,d.aoMapTransform)}function a(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map)d.map.value=p.map,n(p.map,d.mapTransform)}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,w,y){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*w,d.scale.value=y*0.5,p.map)d.map.value=p.map,n(p.map,d.uvTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,n(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function c(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map)d.map.value=p.map,n(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,n(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,0.0001)}function u(d,p){if(p.gradientMap)d.gradientMap.value=p.gradientMap}function f(d,p){if(d.metalness.value=p.metalness,p.metalnessMap)d.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,d.metalnessMapTransform);if(d.roughness.value=p.roughness,p.roughnessMap)d.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,d.roughnessMapTransform);if(p.envMap)d.envMapIntensity.value=p.envMapIntensity}function m(d,p,w){if(d.ior.value=p.ior,p.sheen>0){if(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)d.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,d.sheenColorMapTransform);if(p.sheenRoughnessMap)d.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,d.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)d.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,d.clearcoatMapTransform);if(p.clearcoatRoughnessMap)d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(d.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1)d.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)d.dispersion.value=p.dispersion;if(p.iridescence>0){if(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap)d.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,d.iridescenceMapTransform);if(p.iridescenceThicknessMap)d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform)}if(p.transmission>0){if(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap)d.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,d.transmissionMapTransform);if(d.thickness.value=p.thickness,p.thicknessMap)d.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,d.thicknessMapTransform);d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)d.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,d.anisotropyMapTransform)}if(d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap)d.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,d.specularColorMapTransform);if(p.specularIntensityMap)d.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,d.specularIntensityMapTransform)}function _(d,p){if(p.matcap)d.matcap.value=p.matcap}function v(d,p){let w=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sm(e,t,n,i){let s={},r={},a=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){let T=y.program;i.uniformBlockBinding(w,T)}function c(w,y){let T=s[w.id];if(T===void 0)_(w),T=h(w),s[w.id]=T,w.addEventListener("dispose",d);let H=y.program;i.updateUBOMapping(w,H);let S=t.render.frame;if(r[w.id]!==S)f(w),r[w.id]=S}function h(w){let y=u();w.__bindingPointIndex=y;let T=e.createBuffer(),H=w.__size,S=w.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,H,S),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,T),T}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let y=s[w.id],T=w.uniforms,H=w.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let S=0,A=T.length;S<A;S++){let X=Array.isArray(T[S])?T[S]:[T[S]];for(let x=0,b=X.length;x<b;x++){let P=X[x];if(m(P,S,x,H)===!0){let O=P.__offset,se=Array.isArray(P.value)?P.value:[P.value],Z=0;for(let le=0;le<se.length;le++){let N=se[le],K=v(N);if(typeof N==="number"||typeof N==="boolean")P.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,O+Z,P.__data);else if(N.isMatrix3)P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0;else N.toArray(P.__data,Z),Z+=K.storage/Float32Array.BYTES_PER_ELEMENT}e.bufferSubData(e.UNIFORM_BUFFER,O,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(w,y,T,H){let S=w.value,A=y+"_"+T;if(H[A]===void 0){if(typeof S==="number"||typeof S==="boolean")H[A]=S;else H[A]=S.clone();return!0}else{let X=H[A];if(typeof S==="number"||typeof S==="boolean"){if(X!==S)return H[A]=S,!0}else if(X.equals(S)===!1)return X.copy(S),!0}return!1}function _(w){let y=w.uniforms,T=0,H=16;for(let A=0,X=y.length;A<X;A++){let x=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,P=x.length;b<P;b++){let O=x[b],se=Array.isArray(O.value)?O.value:[O.value];for(let Z=0,le=se.length;Z<le;Z++){let N=se[Z],K=v(N),j=T%H,de=j%K.boundary,me=j+de;if(T+=de,me!==0&&H-me<K.storage)T+=H-me;O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=K.storage}}}let S=T%H;if(S>0)T+=H-S;return w.__size=T,w.__cache={},this}function v(w){let y={boundary:0,storage:0};if(typeof w==="number"||typeof w==="boolean")y.boundary=4,y.storage=4;else if(w.isVector2)y.boundary=8,y.storage=8;else if(w.isVector3||w.isColor)y.boundary=16,y.storage=12;else if(w.isVector4)y.boundary=16,y.storage=16;else if(w.isMatrix3)y.boundary=48,y.storage=48;else if(w.isMatrix4)y.boundary=64,y.storage=64;else if(w.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w);return y}function d(w){let y=w.target;y.removeEventListener("dispose",d);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let w in s)e.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ki{constructor(e={}){let{canvas:t=Ah(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let m=new Uint32Array(4),_=new Int32Array(4),v=null,d=null,p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let y=this,T=!1,H=0,S=0,A=null,X=-1,x=null,b=new wt,P=new wt,O=null,se=new Oe(0),Z=0,le=t.width,N=t.height,K=1,j=null,de=null,me=new wt(0,0,le,N),Ce=new wt(0,0,le,N),ge=!1,J=new Br,ue=!1,ve=!1,Ae=new Je,_e=new Je,Ue=new R,Be=new wt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function nt(){return A===null?K:1}let L=n;function ut(M,W){return t.getContext(M,W)}try{let M={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine","three.js r170");if(t.addEventListener("webglcontextlost",D,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",oe,!1),L===null){if(L=ut("webgl2",M),L===null)if(ut("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let C,Q,Y,ce,pe,Se,E,g,V,ne,re,ee,Te,xe,ae,we,fe,Re,Ze,We,Ie,De,Ke,dt;function k(){if(C=new Bf(L),C.init(),De=new vm(L,C),Q=new Lf(L,C,e,De),Y=new pm(L,C),Q.reverseDepthBuffer&&u)Y.buffers.depth.setReversed(!0);ce=new Hf(L),pe=new tm,Se=new gm(L,C,Y,pe,Q,De,ce),E=new Nf(y),g=new Of(y),V=new $h(L),Ke=new If(L,V),ne=new zf(L,V,ce,Ke),re=new Wf(L,ne,V,ce),Ze=new Vf(L,Q,Se),we=new Uf(pe),ee=new em(y,E,g,C,Q,Ke,we),Te=new Mm(y,pe),xe=new im,ae=new cm(C),Re=new Pf(y,E,g,Y,re,f,o),fe=new dm(y,re,Q),dt=new Sm(L,ce,Q,Y),We=new Df(L,C,ce),Ie=new Gf(L,C,ce),ce.programs=ee.programs,y.capabilities=Q,y.extensions=C,y.properties=pe,y.renderLists=xe,y.shadowMap=fe,y.state=Y,y.info=ce}k();let U=new Sc(y,L);this.xr=U,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=C.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=C.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){if(M===void 0)return;K=M,this.setSize(le,N,!1)},this.getSize=function(M){return M.set(le,N)},this.setSize=function(M,W,te=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(le=M,N=W,t.width=Math.floor(M*K),t.height=Math.floor(W*K),te===!0)t.style.width=M+"px",t.style.height=W+"px";this.setViewport(0,0,M,W)},this.getDrawingBufferSize=function(M){return M.set(le*K,N*K).floor()},this.setDrawingBufferSize=function(M,W,te){le=M,N=W,K=te,t.width=Math.floor(M*te),t.height=Math.floor(W*te),this.setViewport(0,0,M,W)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(me)},this.setViewport=function(M,W,te,ie){if(M.isVector4)me.set(M.x,M.y,M.z,M.w);else me.set(M,W,te,ie);Y.viewport(b.copy(me).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(Ce)},this.setScissor=function(M,W,te,ie){if(M.isVector4)Ce.set(M.x,M.y,M.z,M.w);else Ce.set(M,W,te,ie);Y.scissor(P.copy(Ce).multiplyScalar(K).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(M){Y.setScissorTest(ge=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){de=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(M=!0,W=!0,te=!0){let ie=0;if(M){let q=!1;if(A!==null){let be=A.texture.format;q=be===1033||be===1031||be===1029}if(q){let be=A.texture.type,Le=be===1009||be===1014||be===1012||be===1020||be===1017||be===1018,Ve=Re.getClearColor(),ze=Re.getClearAlpha(),tt=Ve.r,at=Ve.g,Fe=Ve.b;if(Le)m[0]=tt,m[1]=at,m[2]=Fe,m[3]=ze,L.clearBufferuiv(L.COLOR,0,m);else _[0]=tt,_[1]=at,_[2]=Fe,_[3]=ze,L.clearBufferiv(L.COLOR,0,_)}else ie|=L.COLOR_BUFFER_BIT}if(W)ie|=L.DEPTH_BUFFER_BIT;if(te)ie|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);L.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),xe.dispose(),ae.dispose(),pe.dispose(),E.dispose(),g.dispose(),re.dispose(),Ke.dispose(),dt.dispose(),ee.dispose(),U.dispose(),U.removeEventListener("sessionstart",et),U.removeEventListener("sessionend",ht),qe.stop()};function D(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let M=ce.autoReset,W=fe.enabled,te=fe.autoUpdate,ie=fe.needsUpdate,q=fe.type;k(),ce.autoReset=M,fe.enabled=W,fe.autoUpdate=te,fe.needsUpdate=ie,fe.type=q}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function he(M){let W=M.target;W.removeEventListener("dispose",he),Me(W)}function Me(M){Ye(M),pe.remove(M)}function Ye(M){let W=pe.get(M).programs;if(W!==void 0){if(W.forEach(function(te){ee.releaseProgram(te)}),M.isShaderMaterial)ee.releaseShaderCache(M)}}this.renderBufferDirect=function(M,W,te,ie,q,be){if(W===null)W=He;let Le=q.isMesh&&q.matrixWorld.determinant()<0,Ve=Kr(M,W,te,ie,q);Y.setMaterial(ie,Le);let ze=te.index,tt=1;if(ie.wireframe===!0){if(ze=ne.getWireframeAttribute(te),ze===void 0)return;tt=2}let at=te.drawRange,Fe=te.attributes.position,vt=at.start*tt,At=(at.start+at.count)*tt;if(be!==null)vt=Math.max(vt,be.start*tt),At=Math.min(At,(be.start+be.count)*tt);if(ze!==null)vt=Math.max(vt,0),At=Math.min(At,ze.count);else if(Fe!==void 0&&Fe!==null)vt=Math.max(vt,0),At=Math.min(At,Fe.count);let Ct=At-vt;if(Ct<0||Ct===1/0)return;Ke.setup(q,ie,Ve,te,ze);let en,yt=We;if(ze!==null)en=V.get(ze),yt=Ie,yt.setIndex(en);if(q.isMesh)if(ie.wireframe===!0)Y.setLineWidth(ie.wireframeLinewidth*nt()),yt.setMode(L.LINES);else yt.setMode(L.TRIANGLES);else if(q.isLine){let Xe=ie.linewidth;if(Xe===void 0)Xe=1;if(Y.setLineWidth(Xe*nt()),q.isLineSegments)yt.setMode(L.LINES);else if(q.isLineLoop)yt.setMode(L.LINE_LOOP);else yt.setMode(L.LINE_STRIP)}else if(q.isPoints)yt.setMode(L.POINTS);else if(q.isSprite)yt.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)yt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(!C.get("WEBGL_multi_draw")){let{_multiDrawStarts:Xe,_multiDrawCounts:An,_multiDrawCount:bt}=q,gn=ze?V.get(ze).bytesPerElement:1,ci=pe.get(ie).currentProgram.getUniforms();for(let ln=0;ln<bt;ln++)ci.setValue(L,"_gl_DrawID",ln),yt.render(Xe[ln]/gn,An[ln])}else yt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)yt.renderInstances(vt,Ct,q.count);else if(te.isInstancedBufferGeometry){let Xe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,An=Math.min(te.instanceCount,Xe);yt.renderInstances(vt,Ct,An)}else yt.render(vt,Ct)};function Qe(M,W,te){if(M.transparent===!0&&M.side===2&&M.forceSinglePass===!1)M.side=1,M.needsUpdate=!0,jt(M,W,te),M.side=0,M.needsUpdate=!0,jt(M,W,te),M.side=2;else jt(M,W,te)}this.compile=function(M,W,te=null){if(te===null)te=M;if(d=ae.get(te),d.init(W),w.push(d),te.traverseVisible(function(q){if(q.isLight&&q.layers.test(W.layers)){if(d.pushLight(q),q.castShadow)d.pushShadow(q)}}),M!==te)M.traverseVisible(function(q){if(q.isLight&&q.layers.test(W.layers)){if(d.pushLight(q),q.castShadow)d.pushShadow(q)}});d.setupLights();let ie=new Set;return M.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let be=q.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){let Ve=be[Le];Qe(Ve,te,q),ie.add(Ve)}else Qe(be,te,q),ie.add(be)}),w.pop(),d=null,ie},this.compileAsync=function(M,W,te=null){let ie=this.compile(M,W,te);return new Promise((q)=>{function be(){if(ie.forEach(function(Le){if(pe.get(Le).currentProgram.isReady())ie.delete(Le)}),ie.size===0){q(M);return}setTimeout(be,10)}if(C.get("KHR_parallel_shader_compile")!==null)be();else setTimeout(be,10)})};let ke=null;function ot(M){if(ke)ke(M)}function et(){qe.stop()}function ht(){qe.start()}let qe=new hc;if(qe.setAnimationLoop(ot),typeof self<"u")qe.setContext(self);this.setAnimationLoop=function(M){ke=M,U.setAnimationLoop(M),M===null?qe.stop():qe.start()},U.addEventListener("sessionstart",et),U.addEventListener("sessionend",ht),this.render=function(M,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(W.parent===null&&W.matrixWorldAutoUpdate===!0)W.updateMatrixWorld();if(U.enabled===!0&&U.isPresenting===!0){if(U.cameraAutoUpdate===!0)U.updateCamera(W);W=U.getCamera()}if(M.isScene===!0)M.onBeforeRender(y,M,W,A);if(d=ae.get(M,w.length),d.init(W),w.push(d),_e.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),J.setFromProjectionMatrix(_e),ve=this.localClippingEnabled,ue=we.init(this.clippingPlanes,ve),v=xe.get(M,p.length),v.init(),p.push(v),U.enabled===!0&&U.isPresenting===!0){let be=y.xr.getDepthSensingMesh();if(be!==null)St(be,W,-1/0,y.sortObjects)}if(St(M,W,0,y.sortObjects),v.finish(),y.sortObjects===!0)v.sort(j,de);if($e=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,$e)Re.addToRenderList(v,M);if(this.info.render.frame++,ue===!0)we.beginShadows();let te=d.state.shadowsArray;if(fe.render(te,M,W),ue===!0)we.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:ie,transmissive:q}=v;if(d.setupLights(),W.isArrayCamera){let be=W.cameras;if(q.length>0)for(let Le=0,Ve=be.length;Le<Ve;Le++){let ze=be[Le];li(ie,q,M,ze)}if($e)Re.render(M);for(let Le=0,Ve=be.length;Le<Ve;Le++){let ze=be[Le];Qt(v,M,ze,ze.viewport)}}else{if(q.length>0)li(ie,q,M,W);if($e)Re.render(M);Qt(v,M,W)}if(A!==null)Se.updateMultisampleRenderTarget(A),Se.updateRenderTargetMipmap(A);if(M.isScene===!0)M.onAfterRender(y,M,W);if(Ke.resetDefaultState(),X=-1,x=null,w.pop(),w.length>0){if(d=w[w.length-1],ue===!0)we.setGlobalState(y.clippingPlanes,d.state.camera)}else d=null;if(p.pop(),p.length>0)v=p[p.length-1];else v=null};function St(M,W,te,ie){if(M.visible===!1)return;if(M.layers.test(W.layers)){if(M.isGroup)te=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(W)}else if(M.isLight){if(d.pushLight(M),M.castShadow)d.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){if(ie)Be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);let Le=re.update(M),Ve=M.material;if(Ve.visible)v.push(M,Le,Ve,te,Be.z,null)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||J.intersectsObject(M)){let Le=re.update(M),Ve=M.material;if(ie){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();Be.copy(M.boundingSphere.center)}else{if(Le.boundingSphere===null)Le.computeBoundingSphere();Be.copy(Le.boundingSphere.center)}Be.applyMatrix4(M.matrixWorld).applyMatrix4(_e)}if(Array.isArray(Ve)){let ze=Le.groups;for(let tt=0,at=ze.length;tt<at;tt++){let Fe=ze[tt],vt=Ve[Fe.materialIndex];if(vt&&vt.visible)v.push(M,Le,vt,te,Be.z,Fe)}}else if(Ve.visible)v.push(M,Le,Ve,te,Be.z,null)}}}let be=M.children;for(let Le=0,Ve=be.length;Le<Ve;Le++)St(be[Le],W,te,ie)}function Qt(M,W,te,ie){let{opaque:q,transmissive:be,transparent:Le}=M;if(d.setupLightsView(te),ue===!0)we.setGlobalState(y.clippingPlanes,te);if(ie)Y.viewport(b.copy(ie));if(q.length>0)Kn(q,W,te);if(be.length>0)Kn(be,W,te);if(Le.length>0)Kn(Le,W,te);Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function li(M,W,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(d.state.transmissionRenderTarget[ie.id]===void 0)d.state.transmissionRenderTarget[ie.id]=new Nt(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace});let be=d.state.transmissionRenderTarget[ie.id],Le=ie.viewport||b;be.setSize(Le.z,Le.w);let Ve=y.getRenderTarget();if(y.setRenderTarget(be),y.getClearColor(se),Z=y.getClearAlpha(),Z<1)y.setClearColor(16777215,0.5);if(y.clear(),$e)Re.render(te);let ze=y.toneMapping;y.toneMapping=0;let tt=ie.viewport;if(ie.viewport!==void 0)ie.viewport=void 0;if(d.setupLightsView(ie),ue===!0)we.setGlobalState(y.clippingPlanes,ie);if(Kn(M,te,ie),Se.updateMultisampleRenderTarget(be),Se.updateRenderTargetMipmap(be),C.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Fe=0,vt=W.length;Fe<vt;Fe++){let At=W[Fe],Ct=At.object,en=At.geometry,yt=At.material,Xe=At.group;if(yt.side===2&&Ct.layers.test(ie.layers)){let An=yt.side;yt.side=1,yt.needsUpdate=!0,Es(Ct,te,ie,en,yt,Xe),yt.side=An,yt.needsUpdate=!0,at=!0}}if(at===!0)Se.updateMultisampleRenderTarget(be),Se.updateRenderTargetMipmap(be)}if(y.setRenderTarget(Ve),y.setClearColor(se,Z),tt!==void 0)ie.viewport=tt;y.toneMapping=ze}function Kn(M,W,te){let ie=W.isScene===!0?W.overrideMaterial:null;for(let q=0,be=M.length;q<be;q++){let Le=M[q],Ve=Le.object,ze=Le.geometry,tt=ie===null?Le.material:ie,at=Le.group;if(Ve.layers.test(te.layers))Es(Ve,W,te,ze,tt,at)}}function Es(M,W,te,ie,q,be){if(M.onBeforeRender(y,W,te,ie,q,be),M.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(y,W,te,ie,M,be),q.transparent===!0&&q.side===2&&q.forceSinglePass===!1)q.side=1,q.needsUpdate=!0,y.renderBufferDirect(te,W,ie,q,M,be),q.side=0,q.needsUpdate=!0,y.renderBufferDirect(te,W,ie,q,M,be),q.side=2;else y.renderBufferDirect(te,W,ie,q,M,be);M.onAfterRender(y,W,te,ie,q,be)}function jt(M,W,te){if(W.isScene!==!0)W=He;let ie=pe.get(M),q=d.state.lights,be=d.state.shadowsArray,Le=q.state.version,Ve=ee.getParameters(M,q.state,be,W,te),ze=ee.getProgramCacheKey(Ve),tt=ie.programs;if(ie.environment=M.isMeshStandardMaterial?W.environment:null,ie.fog=W.fog,ie.envMap=(M.isMeshStandardMaterial?g:E).get(M.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&M.envMap===null?W.environmentRotation:M.envMapRotation,tt===void 0)M.addEventListener("dispose",he),tt=new Map,ie.programs=tt;let at=tt.get(ze);if(at!==void 0){if(ie.currentProgram===at&&ie.lightsStateVersion===Le)return ir(M,Ve),at}else Ve.uniforms=ee.getUniforms(M),M.onBeforeCompile(Ve,y),at=ee.acquireProgram(Ve,ze),tt.set(ze,at),ie.uniforms=Ve.uniforms;let Fe=ie.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)Fe.clippingPlanes=we.uniform;if(ir(M,Ve),ie.needsLights=As(M),ie.lightsStateVersion=Le,ie.needsLights)Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.directionalShadowMap.value=q.state.directionalShadowMap,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotShadowMap.value=q.state.spotShadowMap,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMap.value=q.state.pointShadowMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix;return ie.currentProgram=at,ie.uniformsList=null,at}function Qn(M){if(M.uniformsList===null){let W=M.currentProgram.getUniforms();M.uniformsList=zs.seqWithValue(W.seq,M.uniforms)}return M.uniformsList}function ir(M,W){let te=pe.get(M);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function Kr(M,W,te,ie,q){if(W.isScene!==!0)W=He;Se.resetTextureUnits();let be=W.fog,Le=ie.isMeshStandardMaterial?W.environment:null,Ve=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:"srgb-linear",ze=(ie.isMeshStandardMaterial?g:E).get(ie.envMap||Le),tt=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,at=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Fe=!!te.morphAttributes.position,vt=!!te.morphAttributes.normal,At=!!te.morphAttributes.color,Ct=0;if(ie.toneMapped){if(A===null||A.isXRRenderTarget===!0)Ct=y.toneMapping}let en=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,yt=en!==void 0?en.length:0,Xe=pe.get(ie),An=d.state.lights;if(ue===!0){if(ve===!0||M!==x){let dn=M===x&&ie.id===X;we.setState(ie,M,dn)}}let bt=!1;if(ie.version===Xe.__version){if(Xe.needsLights&&Xe.lightsStateVersion!==An.state.version)bt=!0;else if(Xe.outputColorSpace!==Ve)bt=!0;else if(q.isBatchedMesh&&Xe.batching===!1)bt=!0;else if(!q.isBatchedMesh&&Xe.batching===!0)bt=!0;else if(q.isBatchedMesh&&Xe.batchingColor===!0&&q.colorTexture===null)bt=!0;else if(q.isBatchedMesh&&Xe.batchingColor===!1&&q.colorTexture!==null)bt=!0;else if(q.isInstancedMesh&&Xe.instancing===!1)bt=!0;else if(!q.isInstancedMesh&&Xe.instancing===!0)bt=!0;else if(q.isSkinnedMesh&&Xe.skinning===!1)bt=!0;else if(!q.isSkinnedMesh&&Xe.skinning===!0)bt=!0;else if(q.isInstancedMesh&&Xe.instancingColor===!0&&q.instanceColor===null)bt=!0;else if(q.isInstancedMesh&&Xe.instancingColor===!1&&q.instanceColor!==null)bt=!0;else if(q.isInstancedMesh&&Xe.instancingMorph===!0&&q.morphTexture===null)bt=!0;else if(q.isInstancedMesh&&Xe.instancingMorph===!1&&q.morphTexture!==null)bt=!0;else if(Xe.envMap!==ze)bt=!0;else if(ie.fog===!0&&Xe.fog!==be)bt=!0;else if(Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==we.numPlanes||Xe.numIntersection!==we.numIntersection))bt=!0;else if(Xe.vertexAlphas!==tt)bt=!0;else if(Xe.vertexTangents!==at)bt=!0;else if(Xe.morphTargets!==Fe)bt=!0;else if(Xe.morphNormals!==vt)bt=!0;else if(Xe.morphColors!==At)bt=!0;else if(Xe.toneMapping!==Ct)bt=!0;else if(Xe.morphTargetsCount!==yt)bt=!0}else bt=!0,Xe.__version=ie.version;let gn=Xe.currentProgram;if(bt===!0)gn=jt(ie,W,q);let ci=!1,ln=!1,Ti=!1,Et=gn.getUniforms(),vn=Xe.uniforms;if(Y.useProgram(gn.program))ci=!0,ln=!0,Ti=!0;if(ie.id!==X)X=ie.id,ln=!0;if(ci||x!==M){if(Y.buffers.depth.getReversed())Ae.copy(M.projectionMatrix),Rh(Ae),Ph(Ae),Et.setValue(L,"projectionMatrix",Ae);else Et.setValue(L,"projectionMatrix",M.projectionMatrix);Et.setValue(L,"viewMatrix",M.matrixWorldInverse);let Cn=Et.map.cameraPosition;if(Cn!==void 0)Cn.setValue(L,Ue.setFromMatrixPosition(M.matrixWorld));if(Q.logarithmicDepthBuffer)Et.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)Et.setValue(L,"isOrthographic",M.isOrthographicCamera===!0);if(x!==M)x=M,ln=!0,Ti=!0}if(q.isSkinnedMesh){Et.setOptional(L,q,"bindMatrix"),Et.setOptional(L,q,"bindMatrixInverse");let dn=q.skeleton;if(dn){if(dn.boneTexture===null)dn.computeBoneTexture();Et.setValue(L,"boneTexture",dn.boneTexture,Se)}}if(q.isBatchedMesh){if(Et.setOptional(L,q,"batchingTexture"),Et.setValue(L,"batchingTexture",q._matricesTexture,Se),Et.setOptional(L,q,"batchingIdTexture"),Et.setValue(L,"batchingIdTexture",q._indirectTexture,Se),Et.setOptional(L,q,"batchingColorTexture"),q._colorsTexture!==null)Et.setValue(L,"batchingColorTexture",q._colorsTexture,Se)}let hi=te.morphAttributes;if(hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)Ze.update(q,te,gn);if(ln||Xe.receiveShadow!==q.receiveShadow)Xe.receiveShadow=q.receiveShadow,Et.setValue(L,"receiveShadow",q.receiveShadow);if(ie.isMeshGouraudMaterial&&ie.envMap!==null)vn.envMap.value=ze,vn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1;if(ie.isMeshStandardMaterial&&ie.envMap===null&&W.environment!==null)vn.envMapIntensity.value=W.environmentIntensity;if(ln){if(Et.setValue(L,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights)Ts(vn,Ti);if(be&&ie.fog===!0)Te.refreshFogUniforms(vn,be);Te.refreshMaterialUniforms(vn,ie,K,N,d.state.transmissionRenderTarget[M.id]),zs.upload(L,Qn(Xe),vn,Se)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0)zs.upload(L,Qn(Xe),vn,Se),ie.uniformsNeedUpdate=!1;if(ie.isSpriteMaterial)Et.setValue(L,"center",q.center);if(Et.setValue(L,"modelViewMatrix",q.modelViewMatrix),Et.setValue(L,"normalMatrix",q.normalMatrix),Et.setValue(L,"modelMatrix",q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let dn=ie.uniformsGroups;for(let Cn=0,Rn=dn.length;Cn<Rn;Cn++){let sr=dn[Cn];dt.update(sr,gn),dt.bind(sr,gn)}}return gn}function Ts(M,W){M.ambientLightColor.needsUpdate=W,M.lightProbe.needsUpdate=W,M.directionalLights.needsUpdate=W,M.directionalLightShadows.needsUpdate=W,M.pointLights.needsUpdate=W,M.pointLightShadows.needsUpdate=W,M.spotLights.needsUpdate=W,M.spotLightShadows.needsUpdate=W,M.rectAreaLights.needsUpdate=W,M.hemisphereLights.needsUpdate=W}function As(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}if(this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,W,te){pe.get(M.texture).__webglTexture=W,pe.get(M.depthTexture).__webglTexture=te;let ie=pe.get(M);if(ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=te===void 0,!ie.__autoAllocateDepthBuffer){if(C.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(M,W){let te=pe.get(M);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(M,W=0,te=0){A=M,H=W,S=te;let ie=!0,q=null,be=!1,Le=!1;if(M){let ze=pe.get(M);if(ze.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(L.FRAMEBUFFER,null),ie=!1;else if(ze.__webglFramebuffer===void 0)Se.setupRenderTarget(M);else if(ze.__hasExternalTextures)Se.rebindTextures(M,pe.get(M.texture).__webglTexture,pe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Fe=M.depthTexture;if(ze.__boundDepthTexture!==Fe){if(Fe!==null&&pe.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(M)}}let tt=M.texture;if(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)Le=!0;let at=pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(at[W]))q=at[W][te];else q=at[W];be=!0}else if(M.samples>0&&Se.useMultisampledRTT(M)===!1)q=pe.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(at))q=at[te];else q=at;b.copy(M.viewport),P.copy(M.scissor),O=M.scissorTest}else b.copy(me).multiplyScalar(K).floor(),P.copy(Ce).multiplyScalar(K).floor(),O=ge;if(Y.bindFramebuffer(L.FRAMEBUFFER,q)&&ie)Y.drawBuffers(M,q);if(Y.viewport(b),Y.scissor(P),Y.setScissorTest(O),be){let ze=pe.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,te)}else if(Le){let ze=pe.get(M.texture),tt=W||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,te||0,tt)}X=-1},this.readRenderTargetPixels=function(M,W,te,ie,q,be,Le){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0)Ve=Ve[Le];if(Ve){Y.bindFramebuffer(L.FRAMEBUFFER,Ve);try{let ze=M.texture,tt=ze.format,at=ze.type;if(!Q.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(W>=0&&W<=M.width-ie&&(te>=0&&te<=M.height-q))L.readPixels(W,te,ie,q,De.convert(tt),De.convert(at),be)}finally{let ze=A!==null?pe.get(A).__webglFramebuffer:null;Y.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(M,W,te,ie,q,be,Le){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0)Ve=Ve[Le];if(Ve){let ze=M.texture,tt=ze.format,at=ze.type;if(!Q.textureFormatReadable(tt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(at))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=M.width-ie&&(te>=0&&te<=M.height-q)){Y.bindFramebuffer(L.FRAMEBUFFER,Ve);let Fe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.bufferData(L.PIXEL_PACK_BUFFER,be.byteLength,L.STREAM_READ),L.readPixels(W,te,ie,q,De.convert(tt),De.convert(at),0);let vt=A!==null?pe.get(A).__webglFramebuffer:null;Y.bindFramebuffer(L.FRAMEBUFFER,vt);let At=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ch(L,At,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,be),L.deleteBuffer(Fe),L.deleteSync(At),be}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,W=null,te=0){if(M.isTexture!==!0)Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1];let ie=Math.pow(2,-te),q=Math.floor(M.image.width*ie),be=Math.floor(M.image.height*ie),Le=W!==null?W.x:0,Ve=W!==null?W.y:0;Se.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,te,0,0,Le,Ve,q,be),Y.unbindTexture()},this.copyTextureToTexture=function(M,W,te=null,ie=null,q=0){if(M.isTexture!==!0)Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,M=arguments[1],W=arguments[2],q=arguments[3]||0,te=null;let be,Le,Ve,ze,tt,at,Fe,vt,At,Ct=M.isCompressedTexture?M.mipmaps[q]:M.image;if(te!==null)be=te.max.x-te.min.x,Le=te.max.y-te.min.y,Ve=te.isBox3?te.max.z-te.min.z:1,ze=te.min.x,tt=te.min.y,at=te.isBox3?te.min.z:0;else be=Ct.width,Le=Ct.height,Ve=Ct.depth||1,ze=0,tt=0,at=0;if(ie!==null)Fe=ie.x,vt=ie.y,At=ie.z;else Fe=0,vt=0,At=0;let en=De.convert(W.format),yt=De.convert(W.type),Xe;if(W.isData3DTexture)Se.setTexture3D(W,0),Xe=L.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Se.setTexture2DArray(W,0),Xe=L.TEXTURE_2D_ARRAY;else Se.setTexture2D(W,0),Xe=L.TEXTURE_2D;L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);let An=L.getParameter(L.UNPACK_ROW_LENGTH),bt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=L.getParameter(L.UNPACK_SKIP_PIXELS),ci=L.getParameter(L.UNPACK_SKIP_ROWS),ln=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,at);let Ti=M.isDataArrayTexture||M.isData3DTexture,Et=W.isDataArrayTexture||W.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let vn=pe.get(M),hi=pe.get(W),dn=pe.get(vn.__renderTarget),Cn=pe.get(hi.__renderTarget);Y.bindFramebuffer(L.READ_FRAMEBUFFER,dn.__webglFramebuffer),Y.bindFramebuffer(L.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Rn=0;Rn<Ve;Rn++){if(Ti)L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(M).__webglTexture,q,at+Rn);if(M.isDepthTexture){if(Et)L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(W).__webglTexture,q,At+Rn);L.blitFramebuffer(ze,tt,be,Le,Fe,vt,be,Le,L.DEPTH_BUFFER_BIT,L.NEAREST)}else if(Et)L.copyTexSubImage3D(Xe,q,Fe,vt,At+Rn,ze,tt,be,Le);else L.copyTexSubImage2D(Xe,q,Fe,vt,At+Rn,ze,tt,be,Le)}Y.bindFramebuffer(L.READ_FRAMEBUFFER,null),Y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Et)if(M.isDataTexture||M.isData3DTexture)L.texSubImage3D(Xe,q,Fe,vt,At,be,Le,Ve,en,yt,Ct.data);else if(W.isCompressedArrayTexture)L.compressedTexSubImage3D(Xe,q,Fe,vt,At,be,Le,Ve,en,Ct.data);else L.texSubImage3D(Xe,q,Fe,vt,At,be,Le,Ve,en,yt,Ct);else if(M.isDataTexture)L.texSubImage2D(L.TEXTURE_2D,q,Fe,vt,be,Le,en,yt,Ct.data);else if(M.isCompressedTexture)L.compressedTexSubImage2D(L.TEXTURE_2D,q,Fe,vt,Ct.width,Ct.height,en,Ct.data);else L.texSubImage2D(L.TEXTURE_2D,q,Fe,vt,be,Le,en,yt,Ct);if(L.pixelStorei(L.UNPACK_ROW_LENGTH,An),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ci),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ln),q===0&&W.generateMipmaps)L.generateMipmap(Xe);Y.unbindTexture()},this.copyTextureToTexture3D=function(M,W,te=null,ie=null,q=0){if(M.isTexture!==!0)Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ie=arguments[1]||null,M=arguments[2],W=arguments[3],q=arguments[4]||0;return Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,W,te,ie,q)},this.initRenderTarget=function(M){if(pe.get(M).__webglFramebuffer===void 0)Se.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)Se.setTextureCube(M,0);else if(M.isData3DTexture)Se.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)Se.setTexture2DArray(M,0);else Se.setTexture2D(M,0);Y.unbindTexture()},this.resetState=function(){H=0,S=0,A=null,Y.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}class Oi{constructor(e,t=1,n=1000){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new Oi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $n extends Gt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)t.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)t.object.backgroundIntensity=this.backgroundIntensity;if(t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)t.object.environmentIntensity=this.environmentIntensity;return t.object.environmentRotation=this.environmentRotation.toArray(),t}}var xl=new R,yl=new wt,bl=new wt,wm=new R,Ml=new Je,Er=new R,Ea=new qn,Sl=new Je,Ta=new yi;class Zn extends rt{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;if(this.boundingBox===null)this.boundingBox=new pn;this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingBox.expandByPoint(Er)}computeBoundingSphere(){let e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new qn;this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingSphere.expandByPoint(Er)}copy(e,t){if(super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}raycast(e,t){let n=this.material,i=this.matrixWorld;if(n===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Ea.copy(this.boundingSphere),Ea.applyMatrix4(i),e.ray.intersectsSphere(Ea)===!1)return;if(Sl.copy(i).invert(),Ta.copy(e.ray).applyMatrix4(Sl),this.boundingBox!==null){if(Ta.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(e,t,Ta)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){if(this.skeleton=e,t===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld;this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();if(s!==1/0)e.multiplyScalar(s);else e.set(1,0,0,0);t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;yl.fromBufferAttribute(i.attributes.skinIndex,e),bl.fromBufferAttribute(i.attributes.skinWeight,e),xl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let r=bl.getComponent(s);if(r!==0){let a=yl.getComponent(s);Ml.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(wm.copy(xl).applyMatrix4(Ml),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hr extends Gt{constructor(){super();this.isBone=!0,this.type="Bone"}}class Bi extends Ut{constructor(e=null,t=1,n=1,i,s,r,a,o,l=1003,c=1003,h,u){super(null,r,a,o,l,c,i,s,h,u);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var wl=new Je,Em=new Je;class Vr{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;if(this.bones[e])n.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];if(n)n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];if(n){if(n.parent&&n.parent.isBone)n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld);else n.matrix.copy(n.matrixWorld);n.matrix.decompose(n.position,n.quaternion,n.scale)}}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let a=e[s]?e[s].matrixWorld:Em;wl.multiplyMatrices(a,t[s]),wl.toArray(n,s*16)}if(i!==null)i.needsUpdate=!0}clone(){return new Vr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bi(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],r=t[s];if(r===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Hr;this.bones.push(r),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let r=t[i];e.bones.push(r.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}}class Wn extends ft{constructor(e,t,n,i=1){super(e,t,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var ls=new Je,El=new Je,Tr=[],Tl=new pn,Tm=new Je,Ds=new rt,Ls=new qn;class qa extends rt{constructor(e,t,n){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new Wn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tm)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new pn;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Tl.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(Tl)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new qn;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Ls.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ls)}copy(e,t){if(super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null)this.morphTexture=e.morphTexture.clone();if(e.instanceColor!==null)this.instanceColor=e.instanceColor.clone();if(this.count=e.count,e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),e.ray.intersectsSphere(Ls)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,ls),El.multiplyMatrices(n,ls),Ds.matrixWorld=El,Ds.raycast(e,Tr);for(let r=0,a=Tr.length;r<a;r++){let o=Tr[r];o.instanceId=s,o.object=this,t.push(o)}Tr.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new Wn(new Float32Array(this.instanceMatrix.count*3).fill(1),3);t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new Bi(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*e;s[o]=a,s.set(n,o+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}class Ya extends Yn{static get type(){return"LineBasicMaterial"}constructor(e){super();this.isLineBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var Nr=new R,Fr=new R,Al=new Je,Us=new yi,Ar=new qn,Aa=new R,Cl=new R;class wc extends Gt{constructor(e=new Pt,t=new Ya){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Nr.fromBufferAttribute(t,i-1),Fr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nr.distanceTo(Fr);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ar.copy(n.boundingSphere),Ar.applyMatrix4(i),Ar.radius+=s,e.ray.intersectsSphere(Ar)===!1)return;Al.copy(i).invert(),Us.copy(e.ray).applyMatrix4(Al);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let _=f,v=m-1;_<v;_+=l){let d=c.getX(_),p=c.getX(_+1),w=Cr(this,e,Us,o,d,p);if(w)t.push(w)}if(this.isLineLoop){let _=c.getX(m-1),v=c.getX(f),d=Cr(this,e,Us,o,_,v);if(d)t.push(d)}}else{let f=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let _=f,v=m-1;_<v;_+=l){let d=Cr(this,e,Us,o,_,_+1);if(d)t.push(d)}if(this.isLineLoop){let _=Cr(this,e,Us,o,m-1,f);if(_)t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cr(e,t,n,i,s,r){let a=e.geometry.attributes.position;if(Nr.fromBufferAttribute(a,s),Fr.fromBufferAttribute(a,r),n.distanceSqToSegment(Nr,Fr,Aa,Cl)>i)return;Aa.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(Aa);if(l<t.near||l>t.far)return;return{distance:l,point:Cl.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var Rl=new R,Pl=new R;class Ec extends wc{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Rl.fromBufferAttribute(t,i),Pl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rl.distanceTo(Pl);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wr extends Yn{static get type(){return"PointsMaterial"}constructor(e){super();this.isPointsMaterial=!0,this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Il=new Je,Da=new yi,Rr=new qn,Pr=new R;class $a extends Gt{constructor(e=new Pt,t=new Wr){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=s,e.ray.intersectsSphere(Rr)===!1)return;Il.copy(i).invert(),Da.copy(e.ray).applyMatrix4(Il);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,h=n.attributes.position;if(l!==null){let u=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let m=u,_=f;m<_;m++){let v=l.getX(m);Pr.fromBufferAttribute(h,v),Dl(Pr,v,o,i,e,t,this)}}else{let u=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let m=u,_=f;m<_;m++)Pr.fromBufferAttribute(h,m),Dl(Pr,m,o,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dl(e,t,n,i,s,r,a){let o=Da.distanceSqToPoint(e);if(o<n){let l=new R;Da.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xr extends Ut{constructor(e,t,n,i,s,r,a,o,l){super(e,t,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class xs extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],r=[],a=[],o=[],l=new R,c=new Ne;r.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let h=0,u=3;h<=t;h++,u+=3){let f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[u]/e+1)/2,c.y=(r[u+1]/e+1)/2,o.push(c.x,c.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qr extends Pt{constructor(e=0.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let a=[],o=[],l=[],c=[],h=e,u=(t-e)/i,f=new R,m=new Ne;for(let _=0;_<=i;_++){for(let v=0;v<=n;v++){let d=s+v/n*r;f.x=h*Math.cos(d),f.y=h*Math.sin(d),o.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,c.push(m.x,m.y)}h+=u}for(let _=0;_<i;_++){let v=_*(n+1);for(let d=0;d<n;d++){let p=d+v,w=p,y=p+n+1,T=p+n+2,H=p+1;a.push(w,y,H),a.push(y,T,H)}}this.setIndex(a),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Za extends xt{static get type(){return"RawShaderMaterial"}constructor(e){super(e);this.isRawShaderMaterial=!0}}class jn extends Yn{static get type(){return"MeshStandardMaterial"}constructor(e){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ja extends Yn{static get type(){return"MeshNormalMaterial"}constructor(e){super();this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ys extends Yn{static get type(){return"MeshLambertMaterial"}constructor(e){super();this.isMeshLambertMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ir(e,t,n){if(!e||!n&&e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Am(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Cm(e){function t(s,r){return e[s]-e[r]}let n=e.length,i=Array(n);for(let s=0;s!==n;++s)i[s]=s;return i.sort(t),i}function Ll(e,t,n){let i=e.length,s=new e.constructor(i);for(let r=0,a=0;a!==i;++r){let o=n[r]*t;for(let l=0;l!==t;++l)s[a++]=e[o+l]}return s}function Tc(e,t,n,i){let s=1,r=e[0];while(r!==void 0&&r[i]===void 0)r=e[s++];if(r===void 0)return;let a=r[i];if(a===void 0)return;if(Array.isArray(a))do{if(a=r[i],a!==void 0)t.push(r.time),n.push.apply(n,a);r=e[s++]}while(r!==void 0);else if(a.toArray!==void 0)do{if(a=r[i],a!==void 0)t.push(r.time),a.toArray(n,n.length);r=e[s++]}while(r!==void 0);else do{if(a=r[i],a!==void 0)t.push(r.time),n.push(a);r=e[s++]}while(r!==void 0)}class js{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){let a=t[1];if(e<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}while(n<r){let a=n+r>>>1;if(e<t[a])r=a;else n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Ac extends js{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,a=2*t-n;break;case 2402:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,o=2*n-t;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=e-1,o=t}let l=(n-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,v=_*m,d=-u*v+2*u*_-u*m,p=(1+u)*v+(-1.5-2*u)*_+(-0.5+u)*m+1,w=(-1-f)*v+(1.5+f)*_+0.5*m,y=f*v-f*_;for(let T=0;T!==a;++T)s[T]=d*r[c+T]+p*r[l+T]+w*r[o+T]+y*r[h+T];return s}}class Ja extends js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(n-t)/(i-t),h=1-c;for(let u=0;u!==a;++u)s[u]=r[l+u]*h+r[o+u]*c;return s}}class Cc extends js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ir(t,this.TimeBufferType),this.values=Ir(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ir(e.times,Array),values:Ir(e.values,Array)};let i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ac(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,i=this.values,s=n.length;if(s===0)console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(r!==null&&r>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,r),e=!1;break}r=o}if(i!==void 0){if(Am(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=e[a],c=e[a+1];if(l!==c&&(a!==1||l!==e[0]))if(!i){let h=a*n,u=h-n,f=h+n;for(let m=0;m!==n;++m){let _=t[h+m];if(_!==t[u+m]||_!==t[f+m]){o=!0;break}}}else o=!0;if(o){if(a!==r){e[r]=e[a];let h=a*n,u=r*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)t[o+l]=t[a+l];++r}if(r!==e.length)this.times=e.slice(0,r),this.values=t.slice(0,r*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=2301;class zi extends kn{constructor(e,t,n){super(e,t,n)}}zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=2300;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ka extends kn{}Ka.prototype.ValueTypeName="color";class Hs extends kn{}Hs.prototype.ValueTypeName="number";class Rc extends js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t),l=e*a;for(let c=l+a;l!==c;l+=4)Vt.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Gi extends kn{InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Hi extends kn{constructor(e,t,n){super(e,t,n)}}Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=2300;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class _i extends kn{}_i.prototype.ValueTypeName="vector";class Vs{constructor(e="",t=-1,n=[],i=2500){if(this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xi(),this.duration<0)this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Pm(n[r]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(kn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,r=[];for(let a=0;a<s;a++){let o=[],l=[];o.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let c=Cm(o);if(o=Ll(o,1,c),l=Ll(l,1,c),!i&&o[0]===0)o.push(s),l.push(l[0]);r.push(new Hs(".morphTargetInfluences["+t[a].name+"]",o,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.name.match(s);if(c&&c.length>1){let h=c[1],u=i[h];if(!u)i[h]=u=[];u.push(l)}}let r=[];for(let a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,f,m,_){if(f.length!==0){let v=[],d=[];if(Tc(f,v,d,m),v.length!==0)_.push(new h(u,v,d))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode,o=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let u=l[h].keys;if(!u||u.length===0)continue;if(u[0].morphTargets){let f={},m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)f[u[m].morphTargets[_]]=-1;for(let _ in f){let v=[],d=[];for(let p=0;p!==u[m].morphTargets.length;++p){let w=u[m];v.push(w.time),d.push(w.morphTarget===_?1:0)}i.push(new Hs(".morphTargetInfluence["+_+"]",v,d))}o=f.length*r}else{let f=".bones["+t[h].name+"]";n(_i,f+".position",u,"pos",i),n(Gi,f+".quaternion",u,"rot",i),n(_i,f+".scale",u,"scl",i)}}if(i.length===0)return null;return new this(s,o,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rm(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hs;case"vector":case"vector2":case"vector3":case"vector4":return _i;case"color":return Ka;case"quaternion":return Gi;case"bool":case"boolean":return zi;case"string":return Hi}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Pm(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Rm(e.type);if(e.times===void 0){let n=[],i=[];Tc(e.keys,n,i,"value"),e.times=n,e.values=i}if(t.parse!==void 0)return t.parse(e);else return new t(e.name,e.times,e.values,e.interpolation)}class Pc{constructor(e,t,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let f=l[h],m=l[h+1];if(f.global)f.lastIndex=0;if(f.test(c))return m}return null}}}var Im=new Pc;class Ic{constructor(e){this.manager=e!==void 0?e:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ic.DEFAULT_MATERIAL_NAME="__DEFAULT";class Yr extends Gt{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);if(t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0)t.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)t.object.distance=this.distance;if(this.angle!==void 0)t.object.angle=this.angle;if(this.decay!==void 0)t.object.decay=this.decay;if(this.penumbra!==void 0)t.object.penumbra=this.penumbra;if(this.shadow!==void 0)t.object.shadow=this.shadow.toJSON();if(this.target!==void 0)t.object.target=this.target.uuid;return t}}class bi extends Yr{constructor(e,t,n){super(e,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}var Ca=new Je,Ul=new R,Nl=new R;class Qa{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ul),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};if(this.intensity!==1)e.intensity=this.intensity;if(this.bias!==0)e.bias=this.bias;if(this.normalBias!==0)e.normalBias=this.normalBias;if(this.radius!==1)e.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)e.mapSize=this.mapSize.toArray();return e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Fl=new Je,Ns=new R,Ra=new R;class Dc extends Qa{constructor(){super(new Ht(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;if(s!==n.far)n.far=s,n.updateProjectionMatrix();Ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ns),Ra.copy(n.position),Ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ra),n.updateMatrixWorld(),i.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Fl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl)}}class eo extends Yr{constructor(e,t,n=0,i=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lc extends Qa{constructor(){super(new $s(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Jn extends Yr{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Lc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class to extends Pt{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Js{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=kl();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}function kl(){return performance.now()}class Uc{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=t}else{r+=t;let a=t/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let o=t*this._origIndex;this._mixBufferRegion(n,i,o,1-s,t)}if(r>0)this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let o=t,l=t+t;o!==l;++o)if(n[o]!==n[o+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=0.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Vt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let r=this._workIndex*s;Vt.multiplyQuaternionsFlat(e,r,e,t,e,n),Vt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){let r=1-i;for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){let a=t+r;e[a]=e[a]+e[n+r]*i}}}var no="\\[\\]\\.:\\/",Dm=new RegExp("["+no+"]","g"),io="[^"+no+"]",Lm="[^"+no.replace("\\.","")+"]",Um=/((?:WC+[\/:])*)/.source.replace("WC",io),Nm=/(WCOD+)?/.source.replace("WCOD",Lm),Fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",io),km=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",io),Om=new RegExp("^"+Um+Nm+Fm+km+"$"),Bm=["material","materials","bones","map"];class Nc{constructor(e,t,n){let i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new Tt(e,t,n);else return new Tt.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dm,"")}static parseTrackName(e){let t=Om.exec(e);if(t===null)throw Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Bm.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===t||a.uuid===t)return a;let o=n(a.children);if(o)return o}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(!e)e=Tt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;if(this.targetObject=e,e.needsUpdate!==void 0)a=this.Versioning.NeedsUpdate;else if(e.matrixWorldNeedsUpdate!==void 0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=Nc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fc{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,r=s.length,a=Array(r),o={endingStart:2400,endingEnd:2400};for(let l=0;l!==r;++l){let c=s[l].createInterpolant(null);a[l]=c,c.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,r=s/i,a=i/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;if(e!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e);return this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,r=this.timeScale,a=this._timeScaleInterpolant;if(a===null)a=i._lendControlInterpolant(),this._timeScaleInterpolant=a;let{parameterPositions:o,sampleValues:l}=a;return o[0]=s,o[1]=s+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;if(e!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e);return this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let o=(e-s)*n;if(o<0||n===0)t=0;else this._startTime=null,t=n*o}t*=this._updateTimeScale(e);let r=this._updateTime(t),a=this._updateWeight(e);if(a>0){let o=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case 2501:for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(r),l[c].accumulateAdditive(a);break;case 2500:default:for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(r),l[c].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];if(t*=i,e>n.parameterPositions[1]){if(this.stopFading(),i===0)this.enabled=!1}}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];if(t*=i,e>n.parameterPositions[1])if(this.stopWarping(),t===0)this.paused=!0;else this.timeScale=t}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,r=n===2202;if(e===0){if(s===-1)return i;return r&&(s&1)===1?t-i:i}if(n===2200){if(s===-1)this._loopCount=0,this._setEndings(!0,!0,!1);e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1)if(e>=0)s=0,this._setEndings(!0,this.repetitions===0,r);else this._setEndings(this.repetitions===0,!0,r);if(i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let o=this.repetitions-s;if(o<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1})}else{if(o===1){let l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;if(n)i.endingStart=2401,i.endingEnd=2401;else{if(e)i.endingStart=this.zeroSlopeAtStart?2401:2400;else i.endingStart=2402;if(t)i.endingEnd=this.zeroSlopeAtEnd?2401:2400;else i.endingEnd=2402}}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,r=this._weightInterpolant;if(r===null)r=i._lendControlInterpolant(),this._weightInterpolant=r;let{parameterPositions:a,sampleValues:o}=r;return a[0]=s,o[0]=t,a[1]=s+e,o[1]=n,this}}var zm=new Float32Array(1);class Mi extends ai{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,a=e._interpolants,o=n.uuid,l=this._bindingsByRootAndName,c=l[o];if(c===void 0)c={},l[o]=c;for(let h=0;h!==s;++h){let u=i[h],f=u.name,m=c[f];if(m!==void 0)++m.referenceCount,r[h]=m;else{if(m=r[h],m!==void 0){if(m._cacheIndex===null)++m.referenceCount,this._addInactiveBinding(m,o,f);continue}let _=t&&t._propertyBindings[h].binding.parsedPath;m=new Uc(Tt.create(n,f,_),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,o,f),r[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];if(s.useCount++===0)this._lendBinding(s),s.saveOriginalState()}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];if(--s.useCount===0)s.restoreOriginalState(),this._takeBackBinding(s)}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,a=r[s],o=a.knownActions,l=o[o.length-1],c=e._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,u=(e._localRoot||this._root).uuid;if(delete h[u],o.length===0)delete r[s];this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];if(--s.referenceCount===0)this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,r=i[t];if(r===void 0)r={},i[t]=r;r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],o=t[t.length-1],l=e._cacheIndex;if(o._cacheIndex=l,t[l]=o,t.pop(),delete a[s],Object.keys(a).length===0)delete r[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];if(n===void 0)n=new Ja(new Float32Array(2),new Float32Array(2),1,zm),n.__cacheIndex=t,e[t]=n;return n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,r=typeof e==="string"?Vs.findByName(i,e):e,a=r!==null?r.uuid:e,o=this._actionsByClip[a],l=null;if(n===void 0)if(r!==null)n=r.blendMode;else n=2500;if(o!==void 0){let h=o.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;if(l=o.knownActions[0],r===null)r=l._clip}if(r===null)return null;let c=new Fc(this,r,t,n);return this._bindAction(c,l),this._addInactiveAction(c,a,s),c}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e==="string"?Vs.findByName(n,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];if(a!==void 0)return a.actionByRoot[i]||null;return null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,r);let a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let r=s.knownActions;for(let a=0,o=r.length;a!==o;++a){let l=r[a];this._deactivateAction(l);let c=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,t[c]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let r in n){let a=n[r].actionByRoot,o=a[t];if(o!==void 0)this._deactivateAction(o),this._removeInactiveAction(o)}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let r in s){let a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);if(n!==null)this._deactivateAction(n),this._removeInactiveAction(n)}}var Ol=new Je;class so{constructor(e,t,n=0,i=1/0){this.ray=new yi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ol.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ol),this}intersectObject(e,t=!0,n=[]){return La(e,this,n,t),n.sort(Bl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)La(e[i],this,n,t);return n.sort(Bl),n}}function Bl(e,t){return e.distance-t.distance}function La(e,t,n,i){let s=!0;if(e.layers.test(t.layers)){if(e.raycast(t,n)===!1)s=!1}if(s===!0&&i===!0){let r=e.children;for(let a=0,o=r.length;a<o;a++)La(r[a],t,n,!0)}}class $r{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){if(this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(e,n),this.phi=Math.acos(rn(t/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}var vi=new R,Dr=new Je,Pa=new Je;class ro extends Ec{constructor(e){let t=kc(e),n=new Pt,i=[],s=[],r=new Oe(0,0,1),a=new Oe(0,1,0);for(let l=0;l<t.length;l++){let c=t[l];if(c.parent&&c.parent.isBone)i.push(0,0,0),i.push(0,0,0),s.push(r.r,r.g,r.b),s.push(a.r,a.g,a.b)}n.setAttribute("position",new Ft(i,3)),n.setAttribute("color",new Ft(s,3));let o=new Ya({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o);this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Pa.copy(this.root.matrixWorld).invert();for(let s=0,r=0;s<t.length;s++){let a=t[s];if(a.parent&&a.parent.isBone)Dr.multiplyMatrices(Pa,a.matrixWorld),vi.setFromMatrixPosition(Dr),i.setXYZ(r,vi.x,vi.y,vi.z),Dr.multiplyMatrices(Pa,a.parent.matrixWorld),vi.setFromMatrixPosition(Dr),i.setXYZ(r+1,vi.x,vi.y,vi.z),r+=2}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function kc(e){let t=[];if(e.isBone===!0)t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,kc(e.children[n]));return t}class ao extends ai{constructor(e,t=null){super();this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="170";class oo extends $n{constructor(){super();let e=new Fn;e.deleteAttribute("uv");let t=new jn({side:ps}),n=new jn,i=new eo(16777215,900,28,2);i.position.set(0.418,16.199,0.3),this.add(i);let s=new rt(e,t);s.position.set(-0.757,13.219,0.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new rt(e,n);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-0.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);let a=new rt(e,n);a.position.set(-5.607,-0.754,-0.758),a.rotation.set(0,0.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let o=new rt(e,n);o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),this.add(o);let l=new rt(e,n);l.position.set(-2.017,0.018,6.124),l.rotation.set(0,0.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let c=new rt(e,n);c.position.set(2.291,-0.756,-2.621),c.rotation.set(0,-0.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);let h=new rt(e,n);h.position.set(-2.193,-0.369,-5.547),h.rotation.set(0,0.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let u=new rt(e,bs(50));u.position.set(-16.116,14.37,8.208),u.scale.set(0.1,2.428,2.739),this.add(u);let f=new rt(e,bs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(0.1,2.425,2.751),this.add(f);let m=new rt(e,bs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(0.15,4.265,6.331),this.add(m);let _=new rt(e,bs(43));_.position.set(-0.462,8.89,14.52),_.scale.set(4.38,5.441,0.088),this.add(_);let v=new rt(e,bs(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,0.1),this.add(v);let d=new rt(e,bs(100));d.position.set(0,20,0),d.scale.set(1,0.1,1),this.add(d)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function bs(e){let t=new Ot;return t.color.setScalar(e),t}var Oc={type:"change"},co={type:"start"},zc={type:"end"},Zr=new yi,Bc=new Hn,Gm=Math.cos(70*kt.DEG2RAD),Yt=new R,mn=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lo=0.000001;class Ks extends ao{constructor(e,t=null){super(e,t);if(this.state=Rt.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Vt,this._lastTargetPosition=new R,this._quat=new Vt().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $r,this._sphericalDelta=new $r,this._scale=1,this._panOffset=new R,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new R,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vm.bind(this),this._onPointerDown=Hm.bind(this),this._onPointerUp=Wm.bind(this),this._onContextMenu=Jm.bind(this),this._onMouseWheel=Ym.bind(this),this._onKeyDown=$m.bind(this),this._onTouchStart=Zm.bind(this),this._onTouchMove=jm.bind(this),this._onMouseDown=Xm.bind(this),this._onMouseMove=qm.bind(this),this._interceptControlDown=Km.bind(this),this._interceptControlUp=Qm.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Oc),this.update(),this.state=Rt.NONE}update(e=null){let t=this.object.position;if(Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===Rt.NONE)this._rotateLeft(this._getAutoRotationAngle(e));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;if(isFinite(n)&&isFinite(i)){if(n<-Math.PI)n+=mn;else if(n>Math.PI)n-=mn;if(i<-Math.PI)i+=mn;else if(i>Math.PI)i-=mn;if(n<=i)this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let a=Yt.length();r=this._clampDistance(a*this._scale);let o=a-r;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),s=!!o}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=o!==this.object.zoom;let l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(r!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position);else if(Zr.origin.copy(this.object.position),Zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zr.direction))<Gm)this.object.lookAt(this.target);else Bc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zr.intersectPlane(Bc,this.target)}else if(this.object.isOrthographicCamera){let r=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom)this.object.updateProjectionMatrix(),s=!0}if(this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>lo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lo||this._lastTargetPosition.distanceToSquared(this.target)>lo)return this.dispatchEvent(Oc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(e){if(e!==null)return mn/60*this.autoRotateSpeed*e;else return mn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*0.01);return Math.pow(0.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){if(this.screenSpacePanning===!0)Yt.setFromMatrixColumn(t,1);else Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt);Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Yt.copy(i).sub(this.target);let s=Yt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(e){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=e;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(e){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=e;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){if(this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){if(this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0)this._dollyIn(this._getZoomScale(e.deltaY));else if(e.deltaY>0)this._dollyOut(this._getZoomScale(e.deltaY));this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:if(e.ctrlKey||e.metaKey||e.shiftKey)this._rotateUp(mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,this.keyPanSpeed);t=!0;break;case this.keys.BOTTOM:if(e.ctrlKey||e.metaKey||e.shiftKey)this._rotateUp(-mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,-this.keyPanSpeed);t=!0;break;case this.keys.LEFT:if(e.ctrlKey||e.metaKey||e.shiftKey)this._rotateLeft(mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(this.keyPanSpeed,0);t=!0;break;case this.keys.RIGHT:if(e.ctrlKey||e.metaKey||e.shiftKey)this._rotateLeft(-mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(-this.keyPanSpeed,0);t=!0;break}if(t)e.preventDefault(),this.update()}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=0.5*(e.pageX+t.x),i=0.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=0.5*(e.pageX+t.x),i=0.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){if(this.enableZoom)this._handleTouchStartDolly(e);if(this.enablePan)this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){if(this.enableZoom)this._handleTouchStartDolly(e);if(this.enableRotate)this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=0.5*(e.pageX+n.x),s=0.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=0.5*(e.pageX+t.x),i=0.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(e.pageX+t.x)*0.5,a=(e.pageY+t.y)*0.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){if(this.enableZoom)this._handleTouchMoveDolly(e);if(this.enablePan)this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){if(this.enableZoom)this._handleTouchMoveDolly(e);if(this.enableRotate)this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];if(t===void 0)t=new Ne,this._pointerPositions[e.pointerId]=t;t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}if(e.ctrlKey&&!this._controlActive)n.deltaY*=10;return n}}function Hm(e){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(e))return;if(this._addPointer(e),e.pointerType==="touch")this._onTouchStart(e);else this._onMouseDown(e)}function Vm(e){if(this.enabled===!1)return;if(e.pointerType==="touch")this._onTouchMove(e);else this._onMouseMove(e)}function Wm(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zc),this.state=Rt.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Xm(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Rt.DOLLY;break;case Ni.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Rt.ROTATE}break;case Ni.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Rt.PAN}break;default:this.state=Rt.NONE}if(this.state!==Rt.NONE)this.dispatchEvent(co)}function qm(e){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Ym(e){if(this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE)return;e.preventDefault(),this.dispatchEvent(co),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(zc)}function $m(e){if(this.enabled===!1||this.enablePan===!1)return;this._handleKeyDown(e)}function Zm(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Rt.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Rt.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}if(this.state!==Rt.NONE)this.dispatchEvent(co)}function jm(e){switch(this._trackPointer(e),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Rt.NONE}}function Jm(e){if(this.enabled===!1)return;e.preventDefault()}function Km(e){if(e.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function Qm(e){if(e.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}class Ms extends rt{constructor(){let e=Ms.SkyShader,t=new xt({name:e.name,uniforms:Zt.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:ps,depthWrite:!1});super(new Fn(1,1,1),t);this.isSky=!0}}Ms.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:0.005},mieDirectionalG:{value:0.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class an{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var eg=new $s(-1,1,1,-1,0,1);class Gc extends Pt{constructor(){super();this.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ft([0,2,0,0,2,0],2))}}var tg=new Gc;class On{constructor(e){this._mesh=new rt(tg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}var Hc={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:0.025},maxblur:{value:0.01},nearClip:{value:1},farClip:{value:1000}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class ho extends an{constructor(e,t,n){super();this.scene=e,this.camera=t;let i=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:0.025,r=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new Nt(1,1,{minFilter:ms,magFilter:ms,type:Mn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Gr,this.materialDepth.depthPacking=Ql,this.materialDepth.blending=bn;let a=Hc,o=Zt.clone(a.uniforms);o.tDepth.value=this.renderTargetDepth.texture,o.focus.value=i,o.aspect.value=t.aspect,o.aperture.value=s,o.maxblur.value=r,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new xt({defines:Object.assign({},a.defines),uniforms:o,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=o,this.fsQuad=new On(this.materialBokeh),this._oldClearColor=new Oe}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);let i=e.getClearAlpha(),s=e.autoClear;if(e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen)e.setRenderTarget(null),this.fsQuad.render(e);else e.setRenderTarget(t),e.clear(),this.fsQuad.render(e);this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(i),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}var Si={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vi extends an{constructor(e,t){super();if(this.textureID=t!==void 0?t:"tDiffuse",e instanceof xt)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=Zt.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this.fsQuad=new On(this.material)}render(e,t,n){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=n.texture;if(this.fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this.fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this.fsQuad.render(e)}}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jr extends an{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;if(this.inverse)r=0,a=1;else r=1,a=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class uo extends an{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fo{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vi(Si),this.copyPass.material.blending=bn,this.clock=new Js}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(e===void 0)e=this.clock.getDelta();let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled===!1)continue;if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}if(jr!==void 0){if(r instanceof jr)n=!0;else if(r instanceof uo)n=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}var Qs={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ne},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Je},cameraProjectionMatrixInverse:{value:new Je},cameraWorldMatrix:{value:new Je},radius:{value:0.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},er={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Jr={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Vc(e=5){let t=Math.floor(e)%2===0?Math.floor(e)+1:Math.floor(e),n=ng(t),i=n.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=n[a],l=2*Math.PI*o/i,c=new R(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*0.5+0.5)*255,s[a*4+1]=(c.y*0.5+0.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Bi(s,t,t);return r.wrapS=qt,r.wrapT=qt,r.needsUpdate=!0,r}function ng(e){let t=Math.floor(e)%2===0?Math.floor(e)+1:Math.floor(e),n=t*t,i=Array(n).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=n;){if(s===-1&&r===t)r=t-2,s=0;else{if(r===t)r=0;if(s<0)s=t-1}if(i[s*t+r]!==0){r-=2,s++;continue}else i[s*t+r]=a++;r++,s--}return i}var tr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:po(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ne},cameraProjectionMatrixInverse:{value:new Je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function po(e,t,n){let i=ig(e,t,n),s="vec3[SAMPLES](";for(let r=0;r<e;r++){let a=i[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<e-1?",":")"}`}return s}function ig(e,t,n){let i=[];for(let s=0;s<e;s++){let r=2*Math.PI*t*s/e,a=Math.pow(s/(e-1),n);i.push(new R(Math.cos(r),Math.sin(r),a))}return i}class mo{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}noise(e,t){let n,i,s,r=0.5*(Math.sqrt(3)-1),a=(e+t)*r,o=Math.floor(e+a),l=Math.floor(t+a),c=(3-Math.sqrt(3))/6,h=(o+l)*c,u=o-h,f=l-h,m=e-u,_=t-f,v,d;if(m>_)v=1,d=0;else v=0,d=1;let p=m-v+c,w=_-d+c,y=m-1+2*c,T=_-1+2*c,H=o&255,S=l&255,A=this.perm[H+this.perm[S]]%12,X=this.perm[H+v+this.perm[S+d]]%12,x=this.perm[H+1+this.perm[S+1]]%12,b=0.5-m*m-_*_;if(b<0)n=0;else b*=b,n=b*b*this.dot(this.grad3[A],m,_);let P=0.5-p*p-w*w;if(P<0)i=0;else P*=P,i=P*P*this.dot(this.grad3[X],p,w);let O=0.5-y*y-T*T;if(O<0)s=0;else O*=O,s=O*O*this.dot(this.grad3[x],y,T);return 70*(n+i+s)}noise3d(e,t,n){let i,s,r,a,o=0.3333333333333333,l=(e+t+n)*0.3333333333333333,c=Math.floor(e+l),h=Math.floor(t+l),u=Math.floor(n+l),f=0.16666666666666666,m=(c+h+u)*0.16666666666666666,_=c-m,v=h-m,d=u-m,p=e-_,w=t-v,y=n-d,T,H,S,A,X,x;if(p>=w)if(w>=y)T=1,H=0,S=0,A=1,X=1,x=0;else if(p>=y)T=1,H=0,S=0,A=1,X=0,x=1;else T=0,H=0,S=1,A=1,X=0,x=1;else if(w<y)T=0,H=0,S=1,A=0,X=1,x=1;else if(p<y)T=0,H=1,S=0,A=0,X=1,x=1;else T=0,H=1,S=0,A=1,X=1,x=0;let b=p-T+0.16666666666666666,P=w-H+0.16666666666666666,O=y-S+0.16666666666666666,se=p-A+0.3333333333333333,Z=w-X+0.3333333333333333,le=y-x+0.3333333333333333,N=p-1+0.5,K=w-1+0.5,j=y-1+0.5,de=c&255,me=h&255,Ce=u&255,ge=this.perm[de+this.perm[me+this.perm[Ce]]]%12,J=this.perm[de+T+this.perm[me+H+this.perm[Ce+S]]]%12,ue=this.perm[de+A+this.perm[me+X+this.perm[Ce+x]]]%12,ve=this.perm[de+1+this.perm[me+1+this.perm[Ce+1]]]%12,Ae=0.6-p*p-w*w-y*y;if(Ae<0)i=0;else Ae*=Ae,i=Ae*Ae*this.dot3(this.grad3[ge],p,w,y);let _e=0.6-b*b-P*P-O*O;if(_e<0)s=0;else _e*=_e,s=_e*_e*this.dot3(this.grad3[J],b,P,O);let Ue=0.6-se*se-Z*Z-le*le;if(Ue<0)r=0;else Ue*=Ue,r=Ue*Ue*this.dot3(this.grad3[ue],se,Z,le);let Be=0.6-N*N-K*K-j*j;if(Be<0)a=0;else Be*=Be,a=Be*Be*this.dot3(this.grad3[ve],N,K,j);return 32*(i+s+r+a)}noise4d(e,t,n,i){let s=this.grad4,r=this.simplex,a=this.perm,o=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,c,h,u,f,m,_=(e+t+n+i)*o,v=Math.floor(e+_),d=Math.floor(t+_),p=Math.floor(n+_),w=Math.floor(i+_),y=(v+d+p+w)*l,T=v-y,H=d-y,S=p-y,A=w-y,X=e-T,x=t-H,b=n-S,P=i-A,O=X>x?32:0,se=X>b?16:0,Z=x>b?8:0,le=X>P?4:0,N=x>P?2:0,K=b>P?1:0,j=O+se+Z+le+N+K,de=r[j][0]>=3?1:0,me=r[j][1]>=3?1:0,Ce=r[j][2]>=3?1:0,ge=r[j][3]>=3?1:0,J=r[j][0]>=2?1:0,ue=r[j][1]>=2?1:0,ve=r[j][2]>=2?1:0,Ae=r[j][3]>=2?1:0,_e=r[j][0]>=1?1:0,Ue=r[j][1]>=1?1:0,Be=r[j][2]>=1?1:0,He=r[j][3]>=1?1:0,$e=X-de+l,nt=x-me+l,L=b-Ce+l,ut=P-ge+l,C=X-J+2*l,Q=x-ue+2*l,Y=b-ve+2*l,ce=P-Ae+2*l,pe=X-_e+3*l,Se=x-Ue+3*l,E=b-Be+3*l,g=P-He+3*l,V=X-1+4*l,ne=x-1+4*l,re=b-1+4*l,ee=P-1+4*l,Te=v&255,xe=d&255,ae=p&255,we=w&255,fe=a[Te+a[xe+a[ae+a[we]]]]%32,Re=a[Te+de+a[xe+me+a[ae+Ce+a[we+ge]]]]%32,Ze=a[Te+J+a[xe+ue+a[ae+ve+a[we+Ae]]]]%32,We=a[Te+_e+a[xe+Ue+a[ae+Be+a[we+He]]]]%32,Ie=a[Te+1+a[xe+1+a[ae+1+a[we+1]]]]%32,De=0.6-X*X-x*x-b*b-P*P;if(De<0)c=0;else De*=De,c=De*De*this.dot4(s[fe],X,x,b,P);let Ke=0.6-$e*$e-nt*nt-L*L-ut*ut;if(Ke<0)h=0;else Ke*=Ke,h=Ke*Ke*this.dot4(s[Re],$e,nt,L,ut);let dt=0.6-C*C-Q*Q-Y*Y-ce*ce;if(dt<0)u=0;else dt*=dt,u=dt*dt*this.dot4(s[Ze],C,Q,Y,ce);let k=0.6-pe*pe-Se*Se-E*E-g*g;if(k<0)f=0;else k*=k,f=k*k*this.dot4(s[We],pe,Se,E,g);let U=0.6-V*V-ne*ne-re*re-ee*ee;if(U<0)m=0;else U*=U,m=U*U*this.dot4(s[Ie],V,ne,re,ee);return 27*(c+h+u+f+m)}}class Bn extends an{constructor(e,t,n,i,s,r,a){super();if(this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Vc(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Nt(this.width,this.height,{type:Mn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new xt({defines:Object.assign({},Qs.defines),uniforms:Zt.clone(Qs.uniforms),vertexShader:Qs.vertexShader,fragmentShader:Qs.fragmentShader,blending:bn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ja,this.normalMaterial.blending=bn,this.pdMaterial=new xt({defines:Object.assign({},tr.defines),uniforms:Zt.clone(tr.uniforms),vertexShader:tr.vertexShader,fragmentShader:tr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new xt({defines:Object.assign({},er.defines),uniforms:Zt.clone(er.uniforms),vertexShader:er.vertexShader,fragmentShader:er.fragmentShader,blending:bn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xt({uniforms:Zt.clone(Si.uniforms),vertexShader:Si.vertexShader,fragmentShader:Si.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Oa,blendDst:qs,blendEquation:Xs,blendSrcAlpha:ka,blendDstAlpha:qs,blendEquationAlpha:Xs}),this.blendMaterial=new xt({uniforms:Zt.clone(Jr.uniforms),vertexShader:Jr.vertexShader,fragmentShader:Jr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ws,blendSrc:Oa,blendDst:qs,blendEquation:Xs,blendSrcAlpha:ka,blendDstAlpha:qs,blendEquationAlpha:Xs}),this.fsQuad=new On(null),this.originalClearColor=new Oe,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),r!==void 0)this.updateGtaoMaterial(r);if(a!==void 0)this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else this.depthTexture=new Zs,this.depthTexture.format=Jl,this.depthTexture.type=Zl,this.normalRenderTarget=new Nt(this.width,this.height,{minFilter:ms,magFilter:ms,type:Mn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0;let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){if(e)this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max);else this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0}updateGtaoMaterial(e){if(e.radius!==void 0)this.gtaoMaterial.uniforms.radius.value=e.radius;if(e.distanceExponent!==void 0)this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent;if(e.thickness!==void 0)this.gtaoMaterial.uniforms.thickness.value=e.thickness;if(e.distanceFallOff!==void 0)this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0;if(e.scale!==void 0)this.gtaoMaterial.uniforms.scale.value=e.scale;if(e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES)this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0;if(e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS)this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0}updatePdMaterial(e){let t=!1;if(e.lumaPhi!==void 0)this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi;if(e.depthPhi!==void 0)this.pdMaterial.uniforms.depthPhi.value=e.depthPhi;if(e.normalPhi!==void 0)this.pdMaterial.uniforms.normalPhi.value=e.normalPhi;if(e.radius!==void 0&&e.radius!==this.radius)this.pdMaterial.uniforms.radius.value=e.radius;if(e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent)this.pdRadiusExponent=e.radiusExponent,t=!0;if(e.rings!==void 0&&e.rings!==this.pdRings)this.pdRings=e.rings,t=!0;if(e.samples!==void 0&&e.samples!==this.pdSamples)this.pdSamples=e.samples,t=!0;if(t)this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=po(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0}render(e,t,n){if(this._renderGBuffer)this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility();switch(this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Bn.OUTPUT.Off:break;case Bn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=bn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Bn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=bn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Bn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=bn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Bn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Bn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=bn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Bn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=bn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,s){e.getClearColor(this.originalClearColor);let r=e.getClearAlpha(),a=e.autoClear;if(e.setRenderTarget(n),e.autoClear=!1,i!==void 0&&i!==null)e.setClearColor(i),e.setClearAlpha(s||0),e.clear();this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderOverride(e,t,n,i,s){e.getClearColor(this.originalClearColor);let r=e.getClearAlpha(),a=e.autoClear;if(e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!==void 0&&i!==null)e.setClearColor(i),e.setClearAlpha(s||0),e.clear();this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){if(t.set(n,n.visible),n.isPoints||n.isLine)n.visible=!1})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new mo,n=e*e*4,i=new Uint8Array(n);for(let r=0;r<e;r++)for(let a=0;a<e;a++){let o=r,l=a;i[(r*e+a)*4]=(t.noise(o,l)*0.5+0.5)*255,i[(r*e+a)*4+1]=(t.noise(o+e,l)*0.5+0.5)*255,i[(r*e+a)*4+2]=(t.noise(o,l+e)*0.5+0.5)*255,i[(r*e+a)*4+3]=(t.noise(o+e,l+e)*0.5+0.5)*255}let s=new Bi(i,e,e,jl,$l);return s.wrapS=qt,s.wrapT=qt,s.needsUpdate=!0,s}}Bn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Wc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class go extends an{constructor(){super();let e=Wc;this.uniforms=Zt.clone(e.uniforms),this.material=new Za({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new On(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){if(this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===tc)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===Vl)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Wl)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Xl)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===kr)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===ql)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Yl)this.material.defines.NEUTRAL_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this.fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this.fsQuad.render(e)}}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vo extends an{constructor(e,t,n=null,i=null,s=null){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,r;if(this.overrideMaterial!==null)r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=r;e.autoClear=i}}var Xc={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Wi extends an{constructor(e,t,n,i){super();this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(s,r,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Nt(s,r,{type:Mn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Nt(s,r,{type:Mn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}let a=Xc;this.highPassUniforms=Zt.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let o=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(o[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ne(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=Si;this.copyUniforms=Zt.clone(c.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Xn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Oe,this.oldClearAlpha=1,this.basic=new Ot,this.fsQuad=new On(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let r=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),s)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e);this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this.fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=Wi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=Wi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[o];if(this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this.fsQuad.render(e);else e.setRenderTarget(n),this.fsQuad.render(e);e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(0.39894*Math.exp(-0.5*n*n/(e*e))/e);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(0.5,0.5)},direction:{value:new Ne(0.5,0.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Wi.BlurDirectionX=new Ne(1,0);Wi.BlurDirectionY=new Ne(0,1);var qc=(e)=>`j${e}`,Xi=(e,t)=>{let n=new DataView(e);if(String.fromCharCode(...new Uint8Array(e,0,4))!=="SKVM")throw Error("malha em formato desconhecido");let s=n.getUint32(4,!0),r=n.getUint32(8,!0),a=16,o=(v)=>{let d=new Float32Array(e,a,v);return a+=v*4,d},l=o(s*3),c=o(s*3),h=o(s*2),u=new Uint16Array(e,a,s*4);a+=s*8;let f=o(s*4),m=new Uint16Array(e,a,r),_=new Pt;return _.setAttribute("position",new ft(l,3)),_.setAttribute("normal",new ft(c,3)),_.setAttribute("uv",new ft(h,2)),_.setAttribute("skinIndex",new Ys(u,4)),_.setAttribute("skinWeight",new ft(f,4)),_.setIndex(new ft(m,1)),t.forEach((v,d)=>_.addGroup(v.startIndex,v.indexCount,d)),_},qi=(e,t)=>{let n=t.map((s,r)=>{let a=new Hr;return a.name=qc(r),a.userData.name=s.name,a.position.set(...s.t),a.quaternion.set(...s.r),a.scale.set(...s.s),a});t.forEach((s,r)=>{(s.parent>=0?n[s.parent]:e).add(n[r])});let i=t.map((s)=>new Je().fromArray(s.inverseBind));e.bind(new Vr(n,i),new Je),e.normalizeSkinWeights(),e.frustumCulled=!1},Yi=(e,t,n)=>{let i=new Float32Array(t.frames);for(let r=0;r<t.frames;r++)i[r]=r/t.fps;let s=[];for(let r of t.tracks){let a=n.get(r.joint>>>0);if(a===void 0)continue;let o=qc(a);s.push(new _i(`${o}.position`,i,r.t),new Gi(`${o}.quaternion`,i,r.r),new _i(`${o}.scale`,i,r.s))}return new Vs(e,Math.max((t.frames-1)/t.fps,1/t.fps),s)};var wi={save:"Salvar PNG",saving:"Salvando...",saved:"Salvo:",loading:"Carregando...",hint:"Arraste pra girar, roda pra aproximar, botão direito pra mover"},sg=`
.sklol-studio { position: relative; width: 100%; height: 100%; display: flex; align-items: center;
	justify-content: center; background: #05070b; overflow: hidden; }
.sklol-studio canvas { display: block; max-width: 100%; max-height: 100%; object-fit: contain; }
.sklol-studio-save { position: absolute; right: 16px; bottom: 16px; padding: 8px 16px; background: #1e2328;
	color: #cdbe91; border: 1px solid #c8aa6e; font: 700 12px "Segoe UI", sans-serif; letter-spacing: 0.06em;
	text-transform: uppercase; cursor: pointer; }
.sklol-studio-save:hover { background: #2a2f35; color: #f0e6d2; }
.sklol-studio-status { position: absolute; left: 16px; bottom: 16px; color: #c8aa6e; font: 12px "Segoe UI", sans-serif; }
`,rg=9,ag=150,nr=32,og=6,lg={tall:1500,wide:2600,center:0},cg=38,hg=-60,ug=42,dg=1981253,fg=30,_o=26,Yc=1,pg=0.72,mg=0.35,gg=1,vg=0.45,_g=2.4,xg=2.8,yg=0.004,bg=0.7,Mg=0.18,Sg=1,wg=100,yo=10,Eg=-50,Tg=40,Ag=28,Cg=2048,$c=5,Rg=30,Pg=9,Ig=2.4,xo=3,Dg=()=>{let e=11,t=()=>(e=e*16807%2147483647,e/2147483647),n=[],i=[],s=[];for(let o=0;o<$c;o++){let l=o/$c*Math.PI*2+t()*0.8,c=t()*Pg,h=Math.cos(l)*c,u=Math.sin(l)*c,f=l+Math.PI/2+(t()-0.5)*0.9,m=Math.cos(f),_=Math.sin(f),v=0.25+t()*0.45,d=Rg*(0.7+t()*0.6),p=n.length/3;for(let w=0;w<=xo;w++){let y=w/xo,T=Ig/2*(1-y),H=v*d*y*y,S=h+Math.cos(l)*H,A=u+Math.sin(l)*H,X=d*y*(1-0.15*v*y),x=0.45+0.7*y;n.push(S-m*T,X,A-_*T,S+m*T,X,A+_*T),i.push(x,x,x,x,x,x)}for(let w=0;w<xo;w++){let y=p+w*2;s.push(y,y+1,y+2,y+1,y+3,y+2)}}let r=new Pt;r.setAttribute("position",new ft(new Float32Array(n),3)),r.setAttribute("color",new ft(new Float32Array(i),3));let a=new Float32Array(n.length);for(let o=1;o<a.length;o+=3)a[o]=1;return r.setAttribute("normal",new ft(a,3)),r.setIndex(s),r},Lg=(e)=>{let n=e.createElement("canvas");n.width=n.height=1024;let i=n.getContext("2d");if(i){i.fillStyle="#16171a",i.fillRect(0,0,1024,1024);let r=1024/yo;i.fillStyle="#26282c";for(let a=1;a<yo;a++)i.fillRect(Math.round(a*r)-1,0,2,1024),i.fillRect(0,Math.round(a*r)-1,1024,2);i.fillStyle="#383b40",i.fillRect(0,0,3,1024),i.fillRect(1021,0,3,1024),i.fillRect(0,0,1024,3),i.fillRect(0,1021,1024,3)}let s=new Xr(n);return s.wrapS=s.wrapT=qt,s.colorSpace=Nn,s.anisotropy=16,s},Ug={uniforms:{tDiffuse:{value:null},resolution:{value:new Ne(1920,1080)},seed:{value:0.37}},vertexShader:`
		varying vec2 vUv;
		void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		uniform float seed;
		varying vec2 vUv;
		float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + seed) * 43758.5453); }
		void main() {
			vec2 c = vUv - 0.5;
			float edge = dot(c, c);
			// Aberração de cor: o vermelho e o azul se afastam um pouco, só nas bordas.
			vec2 shift = c * edge * 0.006;
			vec3 color = vec3(
				texture2D(tDiffuse, vUv + shift).r,
				texture2D(tDiffuse, vUv).g,
				texture2D(tDiffuse, vUv - shift).b);
			// Contraste em S e saturação.
			color = mix(color, color * color * (3.0 - 2.0 * color), 0.35);
			float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
			color = mix(vec3(luma), color, 1.14);
			// Tons divididos: as sombras puxam pro azul-petróleo, as luzes pro âmbar.
			color += mix(vec3(-0.012, 0.004, 0.022), vec3(0.03, 0.012, -0.02), smoothstep(0.15, 0.85, luma));
			// Vinheta.
			color *= mix(1.0, 0.62, smoothstep(0.08, 0.55, edge * 1.6));
			// Grão.
			color += (hash(vUv * resolution) - 0.5) * 0.025;
			gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
		}`},Ng={uniforms:{tDiffuse:{value:null},tMask:{value:null},resolution:{value:new Ne(1920,1080)},center:{value:new Ne(0.5,0.39)},inner:{value:0.21},outer:{value:0.5},strength:{value:0.005},darken:{value:0.3}},vertexShader:`
		varying vec2 vUv;
		void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform sampler2D tMask;
		uniform vec2 resolution;
		uniform vec2 center;
		uniform float inner, outer, strength, darken;
		varying vec2 vUv;
		void main() {
			// O centro vem de cima (como numa imagem); o vUv, de baixo.
			vec2 px = vUv * resolution;
			vec2 focus = vec2(center.x, 1.0 - center.y) * resolution;
			float d = distance(px, focus) / resolution.y;
			float t = smoothstep(0.0, 1.0, clamp((d - inner) / max(outer - inner, 1e-6), 0.0, 1.0));
			// A silhueta do campeão, com a borda amaciada (a média de uma grade 5x5 em volta), pra emenda
			// com o fundo desfocado não virar um contorno.
			float mask = 0.0;
			vec2 near = vec2(2.0) / resolution;
			for (int i = -2; i <= 2; i++) {
				for (int j = -2; j <= 2; j++) mask += texture2D(tMask, vUv + vec2(float(i), float(j)) * near).a;
			}
			t *= 1.0 - mask / 25.0;
			float sigma = t * strength * resolution.y;
			vec4 color = texture2D(tDiffuse, vUv);
			if (sigma > 0.05) {
				// Amostras a meio sigma uma da outra, até 2 sigmas pra cada lado.
				vec2 step = vec2(sigma * 0.5) / resolution;
				vec4 sum = vec4(0.0);
				float total = 0.0;
				for (int i = -4; i <= 4; i++) {
					for (int j = -4; j <= 4; j++) {
						float w = exp(-float(i * i + j * j) / 8.0);
						sum += texture2D(tDiffuse, vUv + vec2(float(i), float(j)) * step) * w;
						total += w;
					}
				}
				color = sum / total;
			}
			gl_FragColor = vec4(color.rgb * (1.0 - darken * t), 1.0);
		}`},Fg={uniforms:{tDiffuse:{value:null}},vertexShader:`
		varying vec2 vUv;
		void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		void main() {
			vec4 c = texture2D(tDiffuse, vUv);
			// NaN é o único valor diferente de si mesmo; um infinito passa de qualquer teto.
			bool bad = c.r != c.r || c.g != c.g || c.b != c.b || c.a != c.a || max(max(c.r, c.g), c.b) > 65000.0;
			gl_FragColor = bad ? vec4(0.0, 0.0, 0.0, 1.0) : c;
		}`},kg=(e)=>{let t=e.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d");if(n){let i=n.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(0.25,"rgba(255,240,210,0.6)"),i.addColorStop(1,"rgba(255,220,170,0)"),n.fillStyle=i,n.fillRect(0,0,64,64)}return new Xr(t)};function Ei(e,t){let n=e.ownerDocument,i=n.defaultView??window,s=t.fetch??i.fetch.bind(i),r=t.width??1920,a=!!t.scene,o=!a&&t.background==="grid",l=t.height??1080,c=(U,D)=>D===void 0||D<0?`${t.base}${U}`:`${t.base}${U}?skin=${D}`,h=async(U)=>{let D=await s(U);if(!D.ok)throw Error(`${D.status} ${(await D.text()).trim()}`);return await D.json()},u=async(U,D=!1)=>{let G=await s(U);if(!G.ok)throw Error(`${G.status}`);let oe=new Ut(await createImageBitmap(await G.blob(),{imageOrientation:"none"}));if(oe.flipY=!1,oe.colorSpace=Nn,oe.anisotropy=16,D)oe.wrapS=qt,oe.wrapT=qt;return oe.needsUpdate=!0,oe},f=n.createElement("div");f.className="sklol-studio";let m=n.createElement("style");m.textContent=sg;let _=n.createElement("div");_.className="sklol-studio-status",_.textContent=wi.loading;let v=new ki({antialias:!1,preserveDrawingBuffer:!0});v.setPixelRatio(1),v.setSize(r,l,!1),v.outputColorSpace=Nn,v.toneMapping=kr,v.toneMappingExposure=0.95,v.shadowMap.enabled=!0,v.shadowMap.type=zl,f.append(m,v.domElement,_),e.append(f);let d=new $n,p=new Ht(_o,r/l,10,60000),w=new Ms;w.scale.setScalar(50000);let y=w.material.uniforms;if(y.turbidity.value=_g,y.rayleigh.value=xg,y.mieCoefficient.value=yg,y.mieDirectionalG.value=0.86,w.material.fragmentShader=w.material.fragmentShader.replace("gl_FragColor = vec4( retColor, 1.0 );",`gl_FragColor = vec4( retColor * ${bg.toFixed(3)}, 1.0 );`),!o)d.add(w);let T=new Jt;T.scale.set(-1,1,1),d.add(T);let H=new Jn(16762506,4.2);H.castShadow=!0,H.shadow.mapSize.set(4096,4096),H.shadow.radius=7,H.shadow.blurSamples=20,H.shadow.bias=-0.0004,d.add(H,H.target);let S=new Jn(12375807,gg);d.add(S,S.target);let A=o?new bi(15922424,5593180,0.25):new bi(11126783,3813408,vg);d.add(A);let X=new Jn(16777215,2.4);if(o)H.color.set(16774376),H.intensity=2.8,S.color.set(14543103),S.intensity=0.9,d.add(X,X.target);let x=[],b=[],P=null,O=null,se=null,Z=[],le=-1,N=new Map,K=1,j=!1,de=!1,me=a?{...lg}:{tall:200,wide:120,center:100},Ce=nr,ge=null,J=null,ue=new so,ve=(U,D)=>{if(!ge)return!1;let G=D.clone().sub(U),oe=G.length();return ue.set(U,G.normalize()),ue.far=oe,ue.intersectObject(ge,!1).length>0},Ae=(U,D)=>{if(!ge)return 0;ue.set(new R(U,5000,D),new R(0,-1,0)),ue.far=1e4;let G=ue.intersectObject(ge,!1)[0];return G?G.point.y:0},_e=(U,D,G)=>{let oe=kt.degToRad(U),he=kt.degToRad(a?cg:og);return new R(Math.sin(oe)*Math.cos(he)*D,G+Math.sin(he)*D,Math.cos(oe)*Math.cos(he)*D)},Ue=()=>me.tall/pg/2/Math.tan(_o*Math.PI/360)*1.02,Be=()=>{let U=me.center,D=Ue();T.updateMatrixWorld(!0);let G=new R(0,U,0),oe=nr;for(let ot=0;ot<=18&&!t.angle&&!a;ot++){let et=nr+(ot%2?1:-1)*Math.ceil(ot/2)*10,ht=_e(et,D,U),qe=[0,1,2,3,4,5].map((jt)=>Ae(ht.x+Math.cos(jt*1.05)*220,ht.z+Math.sin(jt*1.05)*220));if(ht.y<Ae(ht.x,ht.z)+30||Math.max(...qe)>ht.y-60)continue;let St=new R(Math.cos(kt.degToRad(et)),0,-Math.sin(kt.degToRad(et))),Qt=Math.tan(_o*Math.PI/360)*D,li=Qt*(r/l),Kn=[];for(let jt of[-0.9,-0.45,0,0.45,0.9])for(let Qn of[-0.85,-0.4,0,0.4,0.85])Kn.push(St.clone().multiplyScalar(jt*li).setY(U+Qn*Qt));if(Kn.every((jt)=>jt.y<Ae(jt.x,jt.z)-5||!ve(ht,jt))){oe=et;break}}Ce=oe;let he=kt.degToRad(oe);if(p.position.copy(_e(oe,D,U)),J)J.rotation.y=-kt.degToRad(oe-nr);if(p.lookAt(G),g)g.target.set(0,U,0);if(t.pose){p.position.set(...t.pose.position);let ot=new R(...t.pose.target);p.lookAt(ot),g?.target.copy(ot)}else if(t.angle){let ot=t.angle,et=new R(...ot.target).multiplyScalar(me.tall).add(G),ht=new R().setFromSphericalCoords(ot.zoom*D,kt.degToRad(90-ot.pitch),kt.degToRad(ot.yaw));p.position.copy(et).add(ht),p.lookAt(et),g?.target.copy(et),he=kt.degToRad(ot.yaw)}let Me=he+kt.degToRad(o?Eg:a?hg:ag),Ye=new R().setFromSphericalCoords(1,kt.degToRad(90-(o?Tg:a?ug:rg)),Me);X.position.setFromSphericalCoords(3000,kt.degToRad(90-Ag),he+Math.PI),X.target.position.set(0,U,0),y.sunPosition.value.copy(Ye);let Qe=a?9000:3000;H.position.copy(Ye).multiplyScalar(Qe),H.target.position.set(0,U*0.5,0);let ke=Math.max(me.tall,me.wide)*2.2;Object.assign(H.shadow.camera,{left:-ke,right:ke,top:ke,bottom:-ke,near:100,far:Qe*2.4}),H.shadow.camera.updateProjectionMatrix(),S.position.set(p.position.x*2,me.tall*3,p.position.z*2),S.target.position.set(0,U,0),C.uniforms.focus.value=p.position.distanceTo(new R(0,U,0))},He=new Oe(13214076);if(!o)d.fog=a?new Oi(He,6000,11000):new Oi(He,1300,2900);let $e=new Nt(r,l,{type:Mn,samples:4}),nt=new fo(v,$e);nt.setPixelRatio(1),nt.setSize(r,l);let L=new Set(t.skip??[]);nt.addPass(new vo(d,p));let ut=new Bn(d,p,r,l);if(ut.updateGtaoMaterial({radius:26,distanceExponent:1.4,thickness:8,scale:1.1,samples:16}),ut.blendIntensity=0.85,!L.has("gtao"))nt.addPass(ut);let C=new ho(d,p,{focus:700,aperture:0.000004,maxblur:0.006});if(!L.has("bokeh")&&!a)nt.addPass(C);if(nt.addPass(new Vi(Fg)),!L.has("bloom"))nt.addPass(new Wi(new Ne(r,l),Mg,0.5,Sg));nt.addPass(new go);let Q=new Vi(Ug);if(Q.uniforms.resolution.value.set(r,l),!L.has("grade"))nt.addPass(Q);let Y=new Vi(Ng);Y.uniforms.resolution.value.set(r,l);let ce=!L.has("blur")&&!a;if(ce)nt.addPass(Y);let pe=new Nt(r,l);Y.uniforms.tMask.value=pe.texture;let Se=null,E=()=>{if(!ce)return;let U={mask:p.layers.mask,background:d.background,color:new Oe,alpha:v.getClearAlpha()};if(v.getClearColor(U.color),v.setRenderTarget(pe),v.setClearColor(0,0),v.clear(),J){let D=J,G=D.material;Se??=G.map((oe)=>{let he=oe,Me=new Ot({visible:oe.visible,map:he.map??null,alphaTest:he.alphaTest??0,side:Kt,fog:!1});return x.push(Me),Me}),D.material=Se,p.layers.set(Yc),d.background=null,v.render(d,p),D.material=G}p.layers.mask=U.mask,d.background=U.background,v.setClearColor(U.color,U.alpha),v.setRenderTarget(null)},g=null;if(t.interactive)g=new Ks(p,v.domElement),g.enableDamping=!0,g.maxPolarAngle=kt.degToRad(88),g.minDistance=a?300:80,g.maxDistance=a?9000:2600;let V=(U)=>{let D=Uint8Array.from(atob(U),(ht)=>ht.charCodeAt(0)),G=new DataView(D.buffer),oe=Math.floor(D.length/24);if(!oe)return;let he=Dg(),Me=new jn({color:14209734,vertexColors:!0,roughness:0.85,metalness:0,envMapIntensity:0.35,side:Kt}),Ye=new qa(he,Me,oe),Qe=new Je,ke=new Vt,ot=new R(0,1,0),et=new Oe;for(let ht=0;ht<oe;ht++){let qe=ht*24,St=G.getFloat32(qe+16,!0);ke.setFromAxisAngle(ot,G.getFloat32(qe+12,!0)),Qe.compose(new R(G.getFloat32(qe,!0),G.getFloat32(qe+4,!0),G.getFloat32(qe+8,!0)),ke,new R(St,St,St)),Ye.setMatrixAt(ht,Qe),Ye.setColorAt(ht,et.setRGB(D[qe+20]/255,D[qe+21]/255,D[qe+22]/255,Nn))}Ye.receiveShadow=!0,T.add(Ye),x.push(he,Me)},ne=async()=>{let U=await h(c("mapchunk")),D=Uint8Array.from(atob(U.mesh),(et)=>et.charCodeAt(0)),G=new DataView(D.buffer),oe=G.getUint32(4,!0),he=G.getUint32(8,!0),Me=new Pt;Me.setAttribute("position",new ft(new Float32Array(D.buffer,16,oe*3),3)),Me.setAttribute("uv",new ft(new Float32Array(D.buffer,16+oe*12,oe*2),2)),Me.setIndex(new ft(new Uint32Array(D.buffer,16+oe*20,he),1)),Me.computeVertexNormals();let Ye=U.groups.map((et,ht)=>{Me.addGroup(et.start,et.count,ht);let qe=new jn({color:14209734,roughness:0.95,metalness:0,envMapIntensity:0.35,side:Kt,alphaTest:et.alpha?0.4:0});if(et.texture)b.push(u(`${t.base}maptex/${et.texture}.png?side=${Cg}`,!0).then((St)=>{qe.map=St,qe.needsUpdate=!0,x.push(St)}).catch(()=>{}));return qe});x.push(Me,...Ye);let Qe=new Ot({visible:!1});x.push(Qe);let ke=U.groups.some((et)=>et.backdrop),ot=new rt(Me,Ye.map((et,ht)=>U.groups[ht].backdrop?Qe:et));if(ot.receiveShadow=!0,ot.castShadow=!0,T.add(ot),ge=ot,U.grass&&!a&&!L.has("grass"))V(U.grass);if(ke){let et=new rt(Me,Ye.map((ht,qe)=>U.groups[qe].backdrop?ht:Qe));T.add(et)}if(a){Me.computeBoundingBox();let et=Me.boundingBox?.min.y??0,ht=new xs(U.radius*1.5,96);ht.rotateX(-Math.PI/2);let qe=new jn({color:dg,roughness:0.85,metalness:0,envMapIntensity:0.15,side:Kt}),St=new rt(ht,qe);St.position.y=et+fg,St.receiveShadow=!0,T.add(St),x.push(ht,qe)}},re=async()=>{let U=await h(c("model",t.skin)),D=await s(c("mesh",U.skin));if(!D.ok)throw Error(`${D.status}`);let G=Xi(await D.arrayBuffer(),U.submeshes),oe=U.submeshes.map((qe)=>{if(/^vfx/i.test(qe.name)||qe.hidden)return new Ot({visible:!1});let St=new jn({color:16777215,roughness:0.55,metalness:0.05,envMapIntensity:mg,side:Kt,alphaTest:qe.alpha?0.3:0});if(qe.texture)b.push(u(c(`texture/${qe.texture}.png`,U.skin),!0).then((Qt)=>{St.map=Qt,St.needsUpdate=!0,x.push(Qt)}).catch(()=>{}));return St});x.push(G,...oe);let he=new Zn(G,oe);qi(he,U.joints),he.castShadow=!0,he.receiveShadow=!0;let Me=U.scale||1;he.scale.setScalar(Me),T.add(he),J=he,he.layers.enable(Yc),Z=U.animations??[],le=U.skin,N=new Map(U.joints.map((qe,St)=>[qe.hash>>>0,St])),P=new Mi(he);let Ye=Z.find((qe)=>qe.name==="idle1")??Z.find((qe)=>/^idle/.test(qe.name)&&!/_in|_to|run/.test(qe.name))??Z.find((qe)=>qe.name.includes("idle"));if(Ye)await ee(Ye.id,0.5);he.updateMatrixWorld(!0),he.skeleton.update();let Qe=new pn,ke=G.getIndex(),ot=new R,et=new Set;U.submeshes.forEach((qe)=>{if(qe.hidden||/^vfx/i.test(qe.name)||!ke)return;for(let St=qe.startIndex;St<qe.startIndex+qe.indexCount;St++){let Qt=ke.getX(St);if(et.has(Qt))continue;et.add(Qt),he.getVertexPosition(Qt,ot),Qe.expandByPoint(ot)}}),me=Qe.isEmpty()?{tall:200,wide:120,center:100}:{tall:(Qe.max.y-Math.max(0,Qe.min.y))*Me,wide:Math.max(Qe.max.x-Qe.min.x,Qe.max.z-Qe.min.z)*Me,center:(Math.max(0,Qe.min.y)+Qe.max.y)/2*Me};let ht=t.pose?Z.find((qe)=>qe.id===t.pose?.animation):Z.find((qe)=>qe.name===t.angle?.animation);if(ht)await ee(ht.id,(t.pose?t.pose.time:t.angle?.time)??0)},ee=async(U,D=0)=>{if(!P)return;let G=Z.find((Me)=>Me.id===U);if(!G)return;let oe=await h(c(`anim/${U}`,le));if(de||!P)return;let he=P.clipAction(Yi(G.name,oe,N));he.setLoop(gs,Number.POSITIVE_INFINITY),O?.stop(),he.play(),O=he,se=U,Te(D)},Te=(U)=>{if(!P||!O)return;let D=O.getClip().duration;O.time=D>0?kt.clamp(U,0,D):0,P.update(0)},xe=()=>{let U=Math.max(1500,Ue()*1.8),D=Math.max(1800,me.tall*4),G=new Fn(U*2,D,U*2);G.translate(0,D/2,0);let oe=G.getAttribute("position"),he=G.getAttribute("normal"),Me=G.getAttribute("uv"),Ye=wg*yo;for(let et=0;et<oe.count;et++){let[ht,qe,St]=[oe.getX(et),oe.getY(et),oe.getZ(et)];if(Math.abs(he.getX(et))>0.5)Me.setXY(et,St/Ye+0.5,qe/Ye);else if(Math.abs(he.getY(et))>0.5)Me.setXY(et,ht/Ye+0.5,St/Ye+0.5);else Me.setXY(et,ht/Ye+0.5,qe/Ye)}let Qe=Lg(n),ke=new jn({map:Qe,color:16777215,roughness:0.9,metalness:0,envMapIntensity:0.5,side:ps}),ot=new rt(G,ke);if(ot.receiveShadow=!0,d.add(ot),x.push(G,ke,Qe),d.background=new Oe(1447706),g)g.maxDistance=Math.min(U,D)*0.85},ae=()=>{let U=new fs(v),D=new oo,G=U.fromScene(D,0.04).texture;d.environment=G,d.environmentIntensity=0.45,D.dispose(),x.push(G,U)},we=()=>{let D=new Float32Array(1260),G=7,oe=()=>(G=G*16807%2147483647,G/2147483647);for(let Qe=0;Qe<420;Qe++){let ke=120+oe()*900,ot=oe()*Math.PI*2;D.set([Math.cos(ot)*ke,10+oe()*me.tall*2.2,Math.sin(ot)*ke],Qe*3)}let he=new Pt;he.setAttribute("position",new ft(D,3));let Me=kg(n),Ye=new Wr({size:7,map:Me,color:16767392,transparent:!0,opacity:0.75,depthWrite:!1,blending:Xn,sizeAttenuation:!0});x.push(he,Ye,Me),d.add(new $a(he,Ye))},fe=()=>{let U=new fs(v),D=new $n,G=new Ms;G.scale.setScalar(50000);for(let he of Object.keys(y)){let Me=y[he].value;G.material.uniforms[he].value=Me?.clone?Me.clone():Me}D.add(G);let oe=U.fromScene(D).texture;d.environment=oe,x.push(oe,U,G.geometry,G.material)},Re=0,Ze=0,We=(U=0)=>{if(de)return;Re=i.requestAnimationFrame(We);let D=Ze?Math.min((U-Ze)/1000,0.1):0;if(Ze=U,j&&P&&O)P.update(D*K);if(g?.update(),g)C.uniforms.focus.value=p.position.distanceTo(g.target);E(),nt.render()},Ie=Promise.all([a?ne():o?null:ne().catch(()=>{}),a?null:re()]).then(()=>Promise.all(b)).then(()=>{if(o)xe();if(Be(),o)ae();else if(fe(),!a)we();if(_.textContent=t.interactive?wi.hint:"",t.interactive)We()}).catch((U)=>{throw _.textContent=`${U instanceof Error?U.message:U}`,U}),De=async(U="image/png",D)=>{await Ie,g?.update(),C.uniforms.focus.value=p.position.distanceTo(g?g.target:new R(0,me.center,0)),E();for(let Ye=0;Ye<3;Ye++)nt.render();let G=v.domElement.toDataURL(U,D),[oe,he]=G.split(",");if(!oe.includes(U))throw Error(`o navegador não gera ${U}`);let Me=Uint8Array.from(atob(he),(Ye)=>Ye.charCodeAt(0));return new Blob([Me],{type:U})},Ke=()=>{let U=g?g.target.clone():new R(0,me.center,0),D=p.position.clone().sub(U),G=D.length(),oe=-kt.degToRad(Ce-nr),he=(ke)=>ke.applyAxisAngle(new R(0,1,0),oe),Me=he(D.clone()),Ye=he(U.clone().sub(new R(0,me.center,0))).divideScalar(me.tall),Qe=Z.find((ke)=>ke.id===se);return{yaw:kt.radToDeg(Math.atan2(Me.x,Me.z)),pitch:kt.radToDeg(Math.asin(kt.clamp(Me.y/G,-1,1))),zoom:G/Ue(),target:Ye.toArray(),...Qe&&O?{animation:Qe.name,time:O.time}:{}}},dt=()=>{let U=g?g.target:new R(0,me.center,0);return{position:p.position.toArray(),target:U.toArray(),...se&&O?{animation:se,time:O.time}:{}}},k=()=>({id:se,time:O?.time??0,duration:O?.getClip().duration??0,speed:K,playing:j});if(t.interactive&&t.onCapture){let U=n.createElement("button");U.className="sklol-studio-save",U.textContent=wi.save,U.addEventListener("click",async()=>{U.textContent=wi.saving;try{let D=await t.onCapture?.(await De());U.textContent=wi.save,_.textContent=`${wi.saved} ${D??""}`}catch(D){U.textContent=`${D instanceof Error?D.message:D}`}i.setTimeout(()=>{U.textContent=wi.save,_.textContent=wi.hint},4000)}),f.append(U)}return{ready:Ie,capture:De,pose:dt,angle:Ke,animations:()=>Z.slice(),setAnimation:(U)=>ee(U,0),playback:k,seek:Te,setSpeed(U){K=U},setPlaying(U){j=U},dispose(){if(de)return;de=!0,i.cancelAnimationFrame(Re),g?.dispose(),P?.stopAllAction();for(let U of x)U.dispose();nt.dispose(),$e.dispose(),pe.dispose(),v.dispose(),v.forceContextLoss(),f.remove()}}}var Zc=0.9,on={title:"Estúdio",mods:(e)=>`${e} mods`,progress:(e,t)=>`Fotos prontas: ${e} de ${t}`,saveAll:"Salvar todos",saveAllRunning:(e,t)=>`Salvando ${e} de ${t}...`,adjust:"Ajustar",save:"Salvar",saved:"Salvo",saving:"Salvando...",waiting:"Na fila",rendering:"Montando a cena...",apply:"Usar este ângulo",cancel:"Cancelar",saveHere:"Salvar com este ângulo",hint:"Arraste pra girar, roda pra aproximar, botão direito pra mover"},bo=`
.sklol-gallery { min-height: 100%; box-sizing: border-box; padding: 20px 24px 40px; background: #010a13;
	color: #a09b8c; font: 13px/1.4 "Segoe UI", sans-serif; }
.sklol-gallery-head { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; gap: 16px;
	margin: -20px -24px 20px; padding: 14px 24px; background: rgba(1, 10, 19, 0.94); border-bottom: 1px solid #463714; }
.sklol-gallery-title { color: #f0e6d2; font-size: 18px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
.sklol-gallery-count { color: #c8aa6e; }
.sklol-gallery-progress { flex: 1; }
.sklol-gallery button { padding: 7px 14px; background: #1e2328; color: #cdbe91; border: 1px solid #c8aa6e;
	font: 700 11px "Segoe UI", sans-serif; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; }
.sklol-gallery button:hover:not(:disabled) { background: #2a2f35; color: #f0e6d2; }
.sklol-gallery button:disabled { opacity: 0.45; cursor: default; }
.sklol-gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 18px; }
.sklol-gallery-card { display: flex; flex-direction: column; background: #0a1428; border: 1px solid #1e2328; }
.sklol-gallery-card.saved { border-color: #0ac8b9; }
.sklol-gallery-card.error { border-color: #e84057; }
.sklol-gallery-shot { position: relative; aspect-ratio: 16 / 9; background: #05070b; display: flex;
	align-items: center; justify-content: center; color: #5b5a56; overflow: hidden; }
.sklol-gallery-shot img { width: 100%; height: 100%; object-fit: cover; display: block; }
.sklol-gallery-badge { position: absolute; top: 8px; right: 8px; padding: 2px 8px; background: #0ac8b9;
	color: #010a13; font-weight: 700; font-size: 11px; text-transform: uppercase; }
.sklol-gallery-info { display: flex; align-items: center; gap: 8px; padding: 10px 12px; }
.sklol-gallery-name { flex: 1; color: #f0e6d2; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sklol-gallery-error { padding: 0 12px 10px; color: #e84057; font-size: 12px; }
.sklol-gallery-editor { position: fixed; inset: 0; z-index: 10; display: flex; flex-direction: column; background: #010a13; }
.sklol-gallery-editor-bar { display: flex; align-items: center; gap: 10px; padding: 10px 16px; border-bottom: 1px solid #463714; }
.sklol-gallery-editor-bar .sklol-gallery-name { font-size: 15px; }
.sklol-gallery-editor-stage { position: relative; flex: 1; min-height: 0; }
.sklol-gallery-hidden { position: fixed; left: -100000px; top: 0; width: 1920px; height: 1080px; pointer-events: none; }
`;function jc(e,t={}){let n=t.background,i=e.ownerDocument,s=(S,A,X)=>{let x=i.createElement(S);if(A)x.className=A;if(X!==void 0)x.textContent=X;return x},r=s("div","sklol-gallery"),a=s("style");a.textContent=bo;let o=s("div","sklol-gallery-head"),l=s("div","sklol-gallery-title",on.title),c=s("div","sklol-gallery-count"),h=s("div","sklol-gallery-progress"),u=s("button",void 0,on.saveAll);o.append(l,c,h,u);let f=s("div","sklol-gallery-grid");r.append(a,o,f),e.append(r);let m=[],_=null,v=()=>{let S=m.filter((A)=>A.blob||A.state==="error").length;h.textContent=on.progress(S,m.length)},d=(S)=>{let A=S.card;A.className=`sklol-gallery-card${S.state==="saved"?" saved":""}${S.state==="error"?" error":""}`;let X=s("div","sklol-gallery-shot");if(S.url){let se=s("img");se.src=S.url,X.append(se)}else X.textContent=S.state==="rendering"?on.rendering:S.state==="error"?"":on.waiting;if(S.state==="saved")X.append(s("div","sklol-gallery-badge",on.saved));let x=s("div","sklol-gallery-info"),b=s("div","sklol-gallery-name",S.name);b.title=S.name;let P=s("button",void 0,on.adjust);P.disabled=S.state==="error"||S.state==="saving",P.addEventListener("click",()=>T(S));let O=s("button",void 0,S.state==="saving"?on.saving:on.save);if(O.disabled=!S.blob||S.state==="saving",O.addEventListener("click",()=>void y(S)),x.append(b,P,O),A.replaceChildren(X,x),S.error)A.append(s("div","sklol-gallery-error",S.error))},p=(S,A,X)=>{if(S.url)URL.revokeObjectURL(S.url);S.blob=A,S.url=URL.createObjectURL(A),S.pose=X},w=async(S)=>{S.state="rendering",d(S);let A=s("div","sklol-gallery-hidden");r.append(A);let X=null;try{X=Ei(A,{base:`/api/m/${S.id}/`,pose:S.pose,background:n}),await X.ready;let x=await X.capture("image/webp",Zc);p(S,x,X.pose()),S.state="ready",S.error=void 0}catch(x){S.state="error",S.error=x instanceof Error?x.message:String(x)}finally{X?.dispose(),A.remove(),d(S),v(),S.settle()}},y=async(S)=>{if(!S.blob)return;S.state="saving",d(S);try{let A=await fetch(`/api/m/${S.id}/save`,{method:"POST",body:S.blob});if(!A.ok)throw Error(`${A.status} ${(await A.text()).trim()}`);S.state="saved",S.error=void 0}catch(A){S.state="ready",S.error=A instanceof Error?A.message:String(A)}d(S)},T=(S)=>{let A;_=new Promise((de)=>{A=()=>{_=null,de()}});let X=s("div","sklol-gallery-editor"),x=s("div","sklol-gallery-editor-bar"),b=s("div","sklol-gallery-name",S.name),P=s("div",void 0,on.hint),O=s("button",void 0,on.apply),se=s("button",void 0,on.saveHere),Z=s("button",void 0,on.cancel);x.append(b,P,O,se,Z);let le=s("div","sklol-gallery-editor-stage");X.append(x,le),r.append(X);let N=Ei(le,{base:`/api/m/${S.id}/`,interactive:!0,pose:S.pose,background:n}),K=()=>{N.dispose(),X.remove(),A()},j=async()=>{O.disabled=se.disabled=!0;let de=await N.capture("image/webp",Zc);p(S,de,N.pose()),S.state="ready",S.error=void 0};O.addEventListener("click",async()=>{await j(),K(),d(S),v()}),se.addEventListener("click",async()=>{await j(),K(),await y(S),v()}),Z.addEventListener("click",K)};u.addEventListener("click",async()=>{u.disabled=!0;let S=m.filter((A)=>A.state!=="error"&&A.state!=="saved");for(let A=0;A<S.length;A++)if(u.textContent=on.saveAllRunning(A+1,S.length),await S[A].rendered,S[A].blob)await y(S[A]);u.textContent=on.saveAll,u.disabled=!1}),(async()=>{let S=await(await fetch("/api/list")).json();c.textContent=on.mods(S.length),m=S.map((A)=>{let X,x=new Promise((P)=>{X=P}),b={...A,state:"waiting",card:s("div"),rendered:x,settle:X};return d(b),f.append(b.card),b}),v();for(let A of m){while(_)await _;if(A.blob)A.settle();else await w(A)}})()}var Og=["skins","maps","mobs","vfx","recall","icons","fonts","ui","sounds","announcer","other"],Bg=120000,Ge={title:(e)=>`Lote ${e}`,source:(e)=>`fonte: ${e}`,progress:(e,t,n)=>`Prontas: ${e} de ${t}${n?` · preparando ${n}`:""}`,filling:"procurando skins...",exhausted:"a lista da fonte acabou",next:"Salvar e ir pros próximos",nextRunning:(e,t)=>`Salvando ${e} de ${t}...`,nextWaiting:"Esperando as fotos...",skipped:(e)=>`Puladas (${e})`,adjust:"Ajustar",cover:(e,t)=>`Trocar capa (${e}/${t})`,noImages:"A fonte não tem imagem pra capa: use o Enviar capa",upload:"Enviar capa",openPage:"Abrir a página do mod na fonte",guessBadge:"Tipo adivinhado",guess:(e)=>`Tipo adivinhado, confira: ${e}`,confirm:"Confirmar",changeKind:"O tipo do mod (trocar confere o pacote de novo)",uploaded:"Capa enviada",download:"Baixar .fantome",json:"JSON",discard:"Descartar",discardConfirm:(e)=>`Descartar "${e}"? A pasta é apagada e ela não volta nos próximos lotes.`,apply:"Usar este ângulo",savePhoto:"Salvar foto",cancel:"Cancelar",save:"Salvar",close:"Fechar",hint:"Arraste pra girar, roda pra aproximar, botão direito pra mover",animation:"Animação",play:"Tocar",pause:"Pausar",time:"Tempo",speed:"Velocidade",championDefault:(e)=>`Padrão pro ${e}`,clearDefault:(e)=>`Tirar padrão do ${e}`,photo:"Montando a foto...",slowPhoto:"A foto do estúdio passou de 2 minutos; tente o Ajustar",waitingPhoto:"Na fila da foto",similar:(e,t)=>t?`Nome igual a ${e===1?"outro":`${e} outros`}`:`Nome parecido com ${e===1?"outro":`${e} outros`}`,compareTitle:(e)=>`Comparar "${e}"`,thisOne:"Este",sameName:"nome igual",similarName:"nome parecido",inBatch:"neste lote",official:"repositório oficial",earlier:"lote anterior",otherBatch:(e)=>`lote ${e}`,noCover:"sem capa ainda",unchanged:"sem mudança (licença ND)",jsonSaved:"JSON salvo",steps:{queued:"Na fila",download:"Baixando...",install:"Abrindo o pacote...",fix:"Consertando...",optimize:"Otimizando...",pack:"Montando o .fantome...",ready:"",saved:"",failed:"Falhou",duplicate:"Repetida"},kinds:{skins:"skin",maps:"mapa",mobs:"mobs",announcer:"announcer",vfx:"vfx",recall:"recall",icons:"ícones",fonts:"fonte",ui:"interface",sounds:"som",other:"outro",duplicate:"repetida",license:"licença",failed:"erro",nsfw:"NSFW",broken:"quebrada",error:"erro"}},zg=`
.sklol-batch-skipped { position: relative; }
.sklol-batch-info { flex-wrap: wrap; }
.sklol-batch-info .sklol-gallery-name { flex-basis: 100%; }
.sklol-batch-link { cursor: pointer; }
/* O tipo adivinhado (não é certeza): vermelho; o tipo "outro" (sem categoria): amarelo. */
.sklol-gallery-card.guessed { border-color: #e84057; box-shadow: 0 0 0 1px #e84057, 0 0 18px rgba(232, 64, 87, 0.4); }
.sklol-gallery-card.other-kind { border-color: #f0d230; box-shadow: 0 0 0 1px #f0d230, 0 0 18px rgba(240, 210, 48, 0.35); }
.sklol-batch-guess-badge { position: absolute; top: 8px; left: 8px; padding: 2px 8px; background: #e84057;
	color: #fff; font-weight: 700; font-size: 11px; text-transform: uppercase; }
.sklol-batch-guess { display: flex; align-items: center; gap: 8px; margin: 0 12px 10px; padding: 6px 10px;
	border: 1px solid #e84057; background: rgba(232, 64, 87, 0.12); color: #f0e6d2; font-size: 12px; }
.sklol-batch-guess span { flex: 1; }
.sklol-batch-kind-select { padding: 6px 8px; background: #1e2328; color: #cdbe91; border: 1px solid #c8aa6e;
	font: 700 11px "Segoe UI", sans-serif; text-transform: uppercase; }
.sklol-batch-download { padding: 7px 14px; background: #1e2328; color: #cdbe91; border: 1px solid #c8aa6e;
	font: 700 11px "Segoe UI", sans-serif; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; }
.sklol-batch-download:hover { background: #2a2f35; color: #f0e6d2; }
.sklol-batch-download[aria-disabled="true"] { opacity: 0.45; pointer-events: none; }
.sklol-batch-skipped-list { position: absolute; right: 0; top: calc(100% + 6px); width: 520px; max-height: 60vh;
	overflow: auto; background: #0a1428; border: 1px solid #463714; padding: 8px 12px; display: none; z-index: 5; }
.sklol-batch-skipped.open .sklol-batch-skipped-list { display: block; }
.sklol-batch-skip { padding: 4px 0; border-bottom: 1px solid #1e2328; font-size: 12px; }
.sklol-batch-skip b { color: #f0e6d2; font-weight: 600; }
.sklol-batch-kind { display: inline-block; min-width: 64px; color: #c8aa6e; text-transform: uppercase; font-size: 10px; letter-spacing: 0.06em; }
.sklol-batch-size { position: absolute; right: 6px; bottom: 6px; padding: 2px 6px; background: rgba(1, 10, 19, 0.78);
	color: #f0e6d2; font-size: 11px; line-height: 1.3; border-radius: 2px; pointer-events: none; }
.sklol-batch-size .gain { color: #0ac8b9; font-weight: 700; }
.sklol-batch-step { position: absolute; left: 0; right: 0; bottom: 0; padding: 6px 10px; background: rgba(1, 10, 19, 0.82);
	color: #cdbe91; font-size: 12px; }
.sklol-batch-source { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.6) brightness(0.55); }
.sklol-batch-meta { padding: 0 12px 10px; display: flex; flex-wrap: wrap; gap: 6px; font-size: 11px; }
.sklol-batch-tag { padding: 1px 6px; border: 1px solid #463714; color: #c8aa6e; }
.sklol-batch-warn { padding: 1px 6px; border: 1px solid #c89b3c; color: #f0e6d2; background: rgba(200, 155, 60, 0.15); }
.sklol-gallery button.sklol-batch-warn { padding: 1px 6px; font: inherit; letter-spacing: 0; text-transform: none; border-color: #c89b3c; }
.sklol-batch-compare { position: fixed; inset: 0; z-index: 11; display: flex; align-items: center; justify-content: center;
	background: rgba(1, 10, 19, 0.85); padding: 24px; }
.sklol-batch-compare-box { width: min(1400px, 100%); max-height: 100%; overflow: auto; background: #010a13; border: 1px solid #463714; }
.sklol-batch-compare-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: 16px; padding: 16px; }
.sklol-batch-compare-cell { display: flex; flex-direction: column; gap: 6px; }
.sklol-batch-compare-cell.own .sklol-batch-compare-shot { outline: 2px solid #0ac8b9; }
.sklol-batch-compare-shot { aspect-ratio: 16 / 9; background: #05070b; display: flex; align-items: center;
	justify-content: center; color: #5b5a56; overflow: hidden; }
.sklol-batch-compare-shot img { width: 100%; height: 100%; object-fit: cover; display: block; }
.sklol-batch-compare-note { color: #a09b8c; font-size: 12px; }
.sklol-batch-json { flex: 1; min-height: 0; margin: 0; padding: 12px 16px; background: #05070b; color: #f0e6d2;
	border: 0; resize: none; font: 12px/1.5 Consolas, "Cascadia Mono", monospace; outline: none; }
.sklol-batch-json-error { color: #e84057; }
.sklol-batch-default { display: flex; align-items: center; gap: 6px; color: #cdbe91; cursor: pointer; white-space: nowrap; }
.sklol-batch-anim { display: flex; align-items: center; gap: 10px; padding: 8px 16px; border-bottom: 1px solid #1e2328;
	color: #cdbe91; white-space: nowrap; }
.sklol-batch-anim label { display: flex; align-items: center; gap: 6px; }
.sklol-batch-anim select { max-width: 260px; }
.sklol-batch-anim-time { flex: 1; min-width: 160px; }
.sklol-batch-anim-time input { flex: 1; }
.sklol-batch-anim-clock { min-width: 96px; font-variant-numeric: tabular-nums; color: #f0e6d2; }
.sklol-gallery-card.discarding { opacity: 0.4; pointer-events: none; }
`,Gg=[0.1,0.25,0.5,1,1.5,2],Hg=0.9;async function Jc(e){let t=await createImageBitmap(e),n=document.createElement("canvas");n.width=t.width,n.height=t.height,n.getContext("2d")?.drawImage(t,0,0),t.close();let[i,s]=n.toDataURL("image/webp",Hg).split(",");if(!i.includes("image/webp"))throw Error("o navegador não gera WebP");return new Blob([Uint8Array.from(atob(s),(r)=>r.charCodeAt(0))],{type:"image/webp"})}var Mo=(e)=>e>=1048576?`${(e/1048576).toFixed(1).replace(".",",")} MB`:`${Math.max(1,Math.round(e/1024))} KB`;function Kc(e,t={}){let n=t.width??1280,i=t.height??720,s=t.background,r=e.ownerDocument,a=(C,Q,Y)=>{let ce=r.createElement(C);if(Q)ce.className=Q;if(Y!==void 0)ce.textContent=Y;return ce},o=a("div","sklol-gallery"),l=a("style");l.textContent=bo+zg;let c=a("div","sklol-gallery-head"),h=a("div","sklol-gallery-title"),u=a("div","sklol-gallery-count"),f=a("div","sklol-gallery-progress"),m=a("div","sklol-batch-skipped"),_=a("button"),v=a("div","sklol-batch-skipped-list");m.append(_,v),_.addEventListener("click",()=>m.classList.toggle("open"));let d=a("button",void 0,Ge.next);c.append(h,u,f,m,d);let p=a("div","sklol-gallery-grid");o.append(l,c,p),e.append(o);let w=0,y=null,T=new Map,H=null,S={},A=async()=>{try{let C=await fetch("/api/angles",{cache:"no-store"});if(C.ok)S=await C.json()}catch{}},X=(C,Q)=>{for(let Y of T.values()){if(Y===Q||Y.manual||Y.item.champion!==C||!Y.blob)continue;if(Y.url)URL.revokeObjectURL(Y.url);Y.blob=Y.url=void 0,Y.pose=void 0,Y.saved=!1,Y.error=void 0,O(Y)}P(),ue()},x=!1,b=(C)=>C.item.step==="ready"||C.item.step==="saved",P=()=>{if(!y)return;h.textContent=Ge.title(y.number),u.textContent=Ge.source(y.source);let C=y.items.filter((ce)=>ce.step==="ready"||ce.step==="saved").length,Q=y.items.length-C,Y=Ge.progress(C,y.size,Q);if(y.filling)Y+=` · ${Ge.filling}`;else if(y.exhausted)Y+=` · ${Ge.exhausted}`;if(f.textContent=Y,_.textContent=Ge.skipped(y.skipped.length),v.replaceChildren(...y.skipped.slice().reverse().map((ce)=>{let pe=a("div","sklol-batch-skip");return pe.append(a("span","sklol-batch-kind",Ge.kinds[ce.kind]??ce.kind),a("b",void 0,ce.name||ce.key)),pe.append(r.createTextNode(` · ${ce.reason}`)),pe})),!x){let ce=[...T.values()];d.disabled=ce.length===0||ce.some((pe)=>!b(pe)||!pe.blob),d.textContent=ce.some((pe)=>b(pe)&&!pe.blob)?Ge.nextWaiting:Ge.next}},O=(C)=>{let Q=C.item;C.el.className=`sklol-gallery-card${C.saved?" saved":""}${C.error?" error":""}${Q.guess?" guessed":Q.kind==="other"&&!Z()?" other-kind":""}`;let Y=a("div","sklol-gallery-shot");if(Q.page?.startsWith("https://")){let ae=Q.page;Y.classList.add("sklol-batch-link"),Y.title=Ge.openPage,Y.addEventListener("click",()=>r.defaultView?.open(ae,"_blank","noopener,noreferrer"))}if(C.url){let ae=a("img");ae.src=C.url,Y.append(ae)}else{if(Q.thumbnail){let we=a("img","sklol-batch-source");we.src=Q.thumbnail,we.referrerPolicy="no-referrer",Y.append(we)}let ae=b(C)?C.rendering?Ge.photo:Ge.waitingPhoto:Ge.steps[Q.step];if(ae)Y.append(a("div","sklol-batch-step",ae))}if(b(C)&&Q.before>0){let ae=a("div","sklol-batch-size");if(!Q.modified)ae.textContent=`${Mo(Q.after)} · ${Ge.unchanged}`;else{let we=Q.before>0?Math.round((1-Q.after/Q.before)*100):0;ae.append(r.createTextNode(`${Mo(Q.before)} → ${Mo(Q.after)} `)),ae.append(a("span","gain",we>0?`−${we}%`:we<0?`+${-we}%`:"0%"))}Y.append(ae)}if(C.saved)Y.append(a("div","sklol-gallery-badge","Salvo"));if(Q.guess)Y.append(a("div","sklol-batch-guess-badge",Ge.guessBadge));let ce=a("div","sklol-gallery-info sklol-batch-info"),pe=a("div","sklol-gallery-name",Q.name);pe.title=`${Q.name} · ${Q.champion}${Q.id?` · ${Q.id}`:""}`;let Se=[];if(N(C)){let ae=a("button",void 0,Ge.adjust);ae.disabled=!b(C)||x,ae.addEventListener("click",()=>Ae(C)),Se.push(ae)}let E=le(C);if(!se(C)&&E>0){let ae=a("button",void 0,Ge.cover(C.cover%E+1,E));ae.disabled=!b(C)||x||E<2&&!C.upload,ae.addEventListener("click",()=>{if(C.upload)C.upload=void 0;else C.cover=(C.cover+1)%E;de(C)}),Se.push(ae)}let g=a("button",void 0,C.upload?Ge.uploaded:Ge.upload);g.disabled=!b(C)||x,g.addEventListener("click",()=>{let ae=a("input");ae.type="file",ae.accept="image/png,image/jpeg,image/webp,image/gif,image/bmp",ae.addEventListener("change",()=>{let we=ae.files?.[0];if(!we)return;C.upload=we,de(C)}),ae.click()}),Se.push(g);let V=a("a","sklol-batch-download",Ge.download);if(b(C)&&!x)V.href=`/api/m/${C.item.n}/package`,V.download=`${Q.id??Q.n}.fantome`;else V.setAttribute("aria-disabled","true");if(Se.push(V),!Z()){let ae=a("select","sklol-batch-kind-select");for(let we of Og){let fe=a("option",void 0,Ge.kinds[we]??we);fe.value=we,ae.append(fe)}ae.value=Q.kind??y?.kind??"other",ae.title=Ge.changeKind,ae.disabled=!b(C)||x||C.changingKind===!0,ae.addEventListener("change",()=>void He(C,ae.value)),Se.push(ae)}let ne=a("button",void 0,Ge.json);ne.disabled=!b(C)||x,ne.addEventListener("click",()=>_e(C));let re=a("button",void 0,Ge.discard);re.disabled=!b(C)||x,re.addEventListener("click",()=>void $e(C)),ce.append(pe,...Se,ne,re);let ee=a("div","sklol-batch-meta");if(y?.kind==="all"&&Q.kind)ee.append(a("span","sklol-batch-tag",Ge.kinds[Q.kind]??Q.kind));let Te=[];if(Q.guess&&b(C)){let ae=a("div","sklol-batch-guess");ae.append(a("span",void 0,Ge.guess(Q.guess)));let we=a("button",void 0,Ge.confirm);we.disabled=x||C.changingKind===!0,we.addEventListener("click",()=>void Be(C)),ae.append(we),Te.push(ae)}if(Q.champion)ee.append(a("span","sklol-batch-tag",Q.champion));if(Q.license)ee.append(a("span","sklol-batch-tag",Q.license));let xe=Q.similarTo??[];if(xe.length){let ae=a("button","sklol-batch-warn",Ge.similar(xe.length,xe.some((we)=>we.same)));ae.addEventListener("click",()=>Ue(C)),ee.append(ae)}if(C.el.replaceChildren(Y,ce,ee,...Te),C.error)C.el.append(a("div","sklol-gallery-error",C.error))},se=(C)=>Z()||!!C.item.studio,Z=()=>(y?.kind??"skins")==="skins",le=(C)=>C.item.images?.length??0,N=(C)=>!C.upload&&se(C),K=async(C)=>{if(C.upload)return j(C.upload);let Q=C.item.images??[];if(!Q.length)throw Error(Ge.noImages);let Y=await fetch(`/api/m/${C.item.n}/image/${C.cover%Q.length}`);if(!Y.ok)throw Error(`${Y.status} ${(await Y.text()).trim()}`);return j(await Y.blob())},j=async(C)=>{let Q=await createImageBitmap(C),Y=r.createElement("canvas");Y.width=n,Y.height=i;let ce=Y.getContext("2d");if(!ce)throw Error("sem canvas 2D");let pe=Math.max(n/Q.width,i/Q.height),Se=Q.width*pe,E=Q.height*pe;ce.imageSmoothingQuality="high",ce.drawImage(Q,(n-Se)/2,(i-E)/2,Se,E),Q.close();let[,g]=Y.toDataURL("image/png").split(",");return new Blob([Uint8Array.from(atob(g),(V)=>V.charCodeAt(0))],{type:"image/png"})},de=(C)=>{if(C.url)URL.revokeObjectURL(C.url);C.blob=C.url=void 0,C.saved=!1,C.error=void 0,O(C),P(),ue()},me=(C,Q,Y)=>{if(C.url)URL.revokeObjectURL(C.url);C.blob=Q,C.url=URL.createObjectURL(Q),C.pose=Y,C.saved=!1},Ce=new Set,ge=()=>{for(let C of T.values()){if(!b(C)||C.blob||C.error||N(C)||Ce.has(C.item.n))continue;let{cover:Q,upload:Y}=C;Ce.add(C.item.n),C.rendering=!0,O(C),K(C).then((ce)=>{if(C.cover===Q&&C.upload===Y&&!C.blob)me(C,ce)}).catch((ce)=>{if(C.cover===Q&&C.upload===Y)C.error=ce instanceof Error?ce.message:String(ce)}).finally(()=>{if(Ce.delete(C.item.n),C.rendering=!1,T.get(C.item.n)===C)O(C),ge();P()})}},J=!1,ue=async()=>{if(ge(),J)return;J=!0;try{for(;;){while(H)await H;ge();let C=[...T.values()].find((ce)=>b(ce)&&!ce.blob&&!ce.error&&N(ce));if(!C)return;C.rendering=!0,O(C);let Q=a("div","sklol-gallery-hidden");Q.style.width=`${n}px`,Q.style.height=`${i}px`,o.append(Q);let Y=null;try{Y=Ei(Q,{base:`/api/m/${C.item.n}/`,pose:C.manual?C.pose:void 0,angle:S[C.item.champion],background:s,width:n,height:i});let ce=Y.ready.then(()=>Y.capture("image/png")),pe=await Promise.race([ce,new Promise((Se,E)=>setTimeout(()=>E(Error(Ge.slowPhoto)),Bg))]);if(N(C))me(C,pe,Y.pose())}catch(ce){C.error=ce instanceof Error?ce.message:String(ce)}finally{if(Y?.dispose(),Q.remove(),C.rendering=Ce.has(C.item.n),T.get(C.item.n)===C)O(C);P()}}}finally{J=!1}},ve=()=>{let C;return H=new Promise((Q)=>{C=()=>{H=null,Q()}}),C},Ae=(C)=>{let Q=ve(),Y=a("div","sklol-gallery-editor"),ce=a("div","sklol-gallery-editor-bar"),pe=a("button",void 0,Ge.apply),Se=a("button",void 0,Ge.cancel),E=C.item.champion,g=a("label","sklol-batch-default"),V=a("input");V.type="checkbox",V.checked=!0,g.append(V,r.createTextNode(Ge.championDefault(E)));let ne=a("button",void 0,Ge.clearDefault(E));ne.hidden=!S[E];let re=a("button",void 0,Ge.savePhoto);ce.append(a("div","sklol-gallery-name",C.item.name),a("div",void 0,Ge.hint),g,ne,re,pe,Se);let ee=a("div","sklol-batch-anim"),Te=a("select"),xe=a("label");xe.append(r.createTextNode(Ge.animation),Te);let ae=a("button",void 0,Ge.play),we=a("label","sklol-batch-anim-time"),fe=a("input");fe.type="range",fe.min="0",fe.step="0.001";let Re=a("span","sklol-batch-anim-clock");we.append(r.createTextNode(Ge.time),fe,Re);let Ze=a("select");for(let D of Gg){let G=a("option",void 0,`${D}x`);G.value=String(D),G.selected=D===1,Ze.append(G)}let We=a("label");We.append(r.createTextNode(Ge.speed),Ze),ee.append(xe,ae,we,We);for(let D of[Te,ae,fe,Ze])D.disabled=!0;let Ie=a("div","sklol-gallery-editor-stage");Y.append(ce,ee,Ie),o.append(Y);let De=Ei(Ie,{base:`/api/m/${C.item.n}/`,interactive:!0,pose:C.manual?C.pose:void 0,angle:S[E],background:s,width:n,height:i}),Ke=0,dt=()=>{let D=De.playback();if(fe.max=String(D.duration),r.activeElement!==fe||D.playing)fe.value=String(D.time);Re.textContent=`${D.time.toFixed(2)} / ${D.duration.toFixed(2)} s`,ae.textContent=D.playing?Ge.pause:Ge.play},k=()=>{dt(),Ke=requestAnimationFrame(k)};De.ready.then(()=>{let D=De.playback().id;for(let G of De.animations()){let oe=a("option",void 0,G.name);oe.value=G.id,oe.selected=G.id===D,Te.append(oe)}for(let G of[Te,ae,fe,Ze])G.disabled=!D;k()}).catch(()=>{}),Te.addEventListener("change",async()=>{Te.disabled=!0;try{await De.setAnimation(Te.value)}finally{Te.disabled=!1}}),ae.addEventListener("click",()=>De.setPlaying(!De.playback().playing)),fe.addEventListener("input",()=>{De.setPlaying(!1),De.seek(Number(fe.value))}),Ze.addEventListener("change",()=>De.setSpeed(Number(Ze.value)));let U=()=>{cancelAnimationFrame(Ke),De.dispose(),Y.remove(),Q()};re.addEventListener("click",async()=>{re.disabled=!0;try{let D=URL.createObjectURL(await Jc(await De.capture("image/png"))),G=a("a");G.href=D,G.download=`${C.item.id??C.item.n}.webp`,G.click(),setTimeout(()=>URL.revokeObjectURL(D),1e4)}catch(D){alert(D instanceof Error?D.message:String(D))}finally{re.disabled=!1}}),pe.addEventListener("click",async()=>{pe.disabled=!0,De.setPlaying(!1),me(C,await De.capture("image/png"),De.pose()),C.upload=void 0,C.manual=!0,C.error=void 0;let D=V.checked?De.angle():null;if(U(),O(C),P(),D){let G=await fetch(`/api/angles/${encodeURIComponent(E)}`,{method:"PUT",body:JSON.stringify(D)});if(!G.ok){C.error=`${Ge.championDefault(E)}: ${(await G.text()).trim()}`,O(C);return}S[E]=D,X(E,C)}}),ne.addEventListener("click",async()=>{if(!(await fetch(`/api/angles/${encodeURIComponent(E)}`,{method:"DELETE"})).ok)return;delete S[E],ne.hidden=!0,X(E)}),Se.addEventListener("click",U)},_e=async(C)=>{let Q=ve(),Y=a("div","sklol-gallery-editor"),ce=a("div","sklol-gallery-editor-bar"),pe=a("div","sklol-gallery-name"),Se=a("button",void 0,Ge.save),E=a("button",void 0,Ge.close);ce.append(a("div","sklol-gallery-name",`${C.item.name} · ${C.item.id}.json`),pe,Se,E);let g=a("textarea","sklol-batch-json");g.spellcheck=!1,Y.append(ce,g),o.append(Y);let V=()=>{Y.remove(),Q()};E.addEventListener("click",V);try{let ne=await fetch(`/api/m/${C.item.n}/json`);if(!ne.ok)throw Error((await ne.text()).trim());g.value=await ne.text()}catch(ne){pe.className="sklol-gallery-name sklol-batch-json-error",pe.textContent=ne instanceof Error?ne.message:String(ne)}g.addEventListener("keydown",(ne)=>{if(ne.key==="Tab")ne.preventDefault(),g.setRangeText("\t",g.selectionStart,g.selectionEnd,"end");else if(ne.key==="s"&&(ne.ctrlKey||ne.metaKey))ne.preventDefault(),Se.click()}),Se.addEventListener("click",async()=>{pe.className="sklol-gallery-name";try{JSON.parse(g.value)}catch(ee){pe.className="sklol-gallery-name sklol-batch-json-error",pe.textContent=`JSON inválido: ${ee instanceof Error?ee.message:ee}`;return}let ne=await fetch(`/api/m/${C.item.n}/json`,{method:"PUT",body:g.value});if(!ne.ok){pe.className="sklol-gallery-name sklol-batch-json-error",pe.textContent=(await ne.text()).trim();return}pe.textContent=Ge.jsonSaved;let re=JSON.parse(g.value);if(re.name)C.item.name=re.name;O(C)})},Ue=(C)=>{let Q=a("div","sklol-batch-compare"),Y=a("div","sklol-batch-compare-box"),ce=a("div","sklol-gallery-editor-bar"),pe=a("button",void 0,Ge.discard),Se=a("button",void 0,Ge.close);ce.append(a("div","sklol-gallery-name",Ge.compareTitle(C.item.name)),pe,Se);let E=a("div","sklol-batch-compare-grid"),g=(re,ee,Te,xe=!1)=>{let ae=a("div",xe?"sklol-batch-compare-cell own":"sklol-batch-compare-cell"),we=a("div","sklol-batch-compare-shot");if(re){let fe=a("img");fe.src=re,fe.addEventListener("error",()=>we.replaceChildren(a("span",void 0,Ge.noCover))),we.append(fe)}else we.append(a("span",void 0,Ge.noCover));return ae.append(we,a("div","sklol-gallery-name",ee),a("div","sklol-batch-compare-note",Te)),ae};E.append(g(C.url,C.item.name,Ge.thisOne,!0));for(let re of C.item.similarTo??[]){let ee=re.n?T.get(re.n):void 0,Te=ee?ee.url:`/api/known/${encodeURIComponent(re.id)}/cover`,xe=re.id.includes(":")&&!re.id.startsWith("repo:")?re.id.split(":")[0]:"",ae=ee?Ge.inBatch:re.id.startsWith("repo:")?Ge.official:xe?Ge.otherBatch(xe):Ge.earlier;E.append(g(Te,re.name,`${re.same?Ge.sameName:Ge.similarName} · ${ae} · ${re.id}`))}Y.append(ce,E),Q.append(Y);let V=()=>{Q.remove(),r.removeEventListener("keydown",ne)},ne=(re)=>{if(re.key==="Escape")V()};r.addEventListener("keydown",ne),Q.addEventListener("click",(re)=>{if(re.target===Q)V()}),Se.addEventListener("click",V),pe.disabled=!b(C)||x,pe.addEventListener("click",()=>{V(),$e(C)}),o.append(Q)},Be=async(C)=>{C.changingKind=!0,O(C);try{let Q=await fetch(`/api/m/${C.item.n}/kind/confirm`,{method:"POST"});if(!Q.ok)throw Error((await Q.text()).trim());C.item.guess=void 0}catch(Q){C.error=Q instanceof Error?Q.message:String(Q)}finally{C.changingKind=!1,O(C)}},He=async(C,Q)=>{C.changingKind=!0,C.error=void 0,O(C);try{let Y=await fetch(`/api/m/${C.item.n}/kind`,{method:"POST",body:Q});if(!Y.ok)throw Error((await Y.text()).trim());C.item.kind=Q}catch(Y){C.error=Y instanceof Error?Y.message:String(Y)}finally{C.changingKind=!1,O(C),ut()}},$e=async(C)=>{if(!confirm(Ge.discardConfirm(C.item.name)))return;C.el.classList.add("discarding");let Q=await fetch(`/api/m/${C.item.n}/discard`,{method:"POST"});if(!Q.ok){C.el.classList.remove("discarding"),C.error=(await Q.text()).trim(),O(C);return}nt(C.item.n),ut()},nt=(C)=>{let Q=T.get(C);if(!Q)return;if(Q.url)URL.revokeObjectURL(Q.url);Q.el.remove(),T.delete(C)},L=(C)=>{if(C.number!==w){for(let Y of[...T.keys()])nt(Y);w=C.number}y=C;let Q=new Set(C.items.map((Y)=>Y.n));for(let Y of[...T.keys()])if(!Q.has(Y))nt(Y);for(let Y of C.items){let ce=T.get(Y.n);if(!ce){ce={item:Y,el:a("div"),rendering:!1,saved:!1,pose:Y.pose,manual:!!Y.pose,cover:0},T.set(Y.n,ce),p.append(ce.el),O(ce);continue}if((ce.item.id!==Y.id||!!ce.item.studio!==!!Y.studio)&&ce.blob){if(ce.url)URL.revokeObjectURL(ce.url);ce.blob=ce.url=void 0,ce.saved=!1,ce.upload=void 0,ce.manual=!1,ce.pose=void 0}let pe=ce.item.id!==Y.id||ce.item.guess!==Y.guess||ce.item.studio!==Y.studio||ce.item.step!==Y.step||ce.item.after!==Y.after||ce.item.kind!==Y.kind||JSON.stringify(ce.item.similarTo??[])!==JSON.stringify(Y.similarTo??[]);if(ce.item={...Y},pe)O(ce)}P(),ue()},ut=async()=>{try{let C=await fetch("/api/batch",{cache:"no-store"});if(C.ok)L(await C.json())}catch{}};d.addEventListener("click",async()=>{let C=[...T.values()];if(C.some((Q)=>!Q.blob))return;x=!0,d.disabled=!0;for(let Q of C)O(Q);try{for(let Y=0;Y<C.length;Y++){let ce=C[Y];if(d.textContent=Ge.nextRunning(Y+1,C.length),ce.saved)continue;let pe=await fetch(`/api/m/${ce.item.n}/photo`,{method:"POST",body:ce.blob,headers:{"X-Pose":JSON.stringify(ce.pose??null)}});if(!pe.ok)throw Error(`${ce.item.name}: ${(await pe.text()).trim()}`);let Se=await fetch(`/api/m/${ce.item.n}/photo.webp`,{method:"POST",body:await Jc(ce.blob)});if(!Se.ok)throw Error(`${ce.item.name}: ${(await Se.text()).trim()}`);ce.saved=!0,O(ce)}let Q=await fetch("/api/next",{method:"POST"});if(!Q.ok)throw Error((await Q.text()).trim());x=!1,L(await Q.json()),o.parentElement?.scrollTo({top:0})}catch(Q){alert(Q instanceof Error?Q.message:String(Q))}finally{x=!1;for(let Q of T.values())O(Q);P()}}),A().then(ut),setInterval(()=>{if(!x)ut()},1500)}var Qc=16*Math.PI/180,eh=30,Vg=0.88,Wg=1.25,th=858644,Xg=`
.sklol-card { position: relative; display: inline-block; padding: 2px; line-height: 0;
	background: linear-gradient(180deg, #f0e6d2 0%, #c8aa6e 22%, #a07c3e 60%, #785a28 100%);
	box-shadow: 0 0 0 1px #010a13, 0 4px 14px rgba(0, 0, 0, 0.55);
	transition: box-shadow 0.2s ease, filter 0.2s ease; }
.sklol-card:hover { box-shadow: 0 0 0 1px #010a13, 0 0 12px rgba(200, 170, 110, 0.45), 0 4px 14px rgba(0, 0, 0, 0.55);
	filter: brightness(1.06); }
.sklol-card canvas { display: block; }
.sklol-card-overlay { position: absolute; inset: 2px; pointer-events: none;
	box-shadow: inset 0 0 0 1px #010a13, inset 0 0 18px rgba(1, 10, 19, 0.75); }
.sklol-card-overlay::after { content: ""; position: absolute; inset: 4px; border: 1px solid rgba(200, 170, 110, 0.45); }
.sklol-card-corner { position: absolute; width: 10px; height: 10px; pointer-events: none;
	border-color: #f0e6d2; border-style: solid; border-width: 0; filter: drop-shadow(0 0 2px rgba(200, 170, 110, 0.8)); }
.sklol-card-corner.tl { top: 0; left: 0; border-top-width: 2px; border-left-width: 2px; }
.sklol-card-corner.tr { top: 0; right: 0; border-top-width: 2px; border-right-width: 2px; }
.sklol-card-corner.bl { bottom: 0; left: 0; border-bottom-width: 2px; border-left-width: 2px; border-color: #c8aa6e; }
.sklol-card-corner.br { bottom: 0; right: 0; border-bottom-width: 2px; border-right-width: 2px; border-color: #c8aa6e; }
.sklol-card-gem { position: absolute; left: 50%; bottom: -4px; width: 7px; height: 7px; pointer-events: none;
	transform: translateX(-50%) rotate(45deg); background: linear-gradient(135deg, #f0e6d2, #c8aa6e 50%, #785a28);
	box-shadow: 0 0 0 1px #010a13, 0 0 4px rgba(200, 170, 110, 0.7); }
`;function nh(e,t){let n=e.ownerDocument,i=n.defaultView??window,s=t.fetch??i.fetch.bind(i),r=t.width??150,a=t.height??200,o=t.spin??0.3,l=(N,K)=>K===void 0||K<0?`${t.base}${N}`:`${t.base}${N}?skin=${K}`,c=async(N)=>{let K=await s(N);if(!K.ok)throw Error(`${K.status} ${(await K.text()).trim()}`);return await K.json()},h=async(N,K=!1)=>{let j=await s(N);if(!j.ok)throw Error(`${j.status}`);let de=new Ut(await createImageBitmap(await j.blob(),{imageOrientation:"none"}));if(de.flipY=!1,de.colorSpace=Nn,K)de.wrapS=qt,de.wrapT=qt;return de.needsUpdate=!0,de},u=new ki({antialias:!0,preserveDrawingBuffer:t.capture===!0});u.setPixelRatio(i.devicePixelRatio||1),u.setSize(r,a),u.outputColorSpace=Nn,u.domElement.style.display="block";let f=u.domElement;if(t.frame!==!1){let N=n.createElement("div");N.className="sklol-card";let K=n.createElement("style");K.textContent=Xg;let j=n.createElement("div");j.className="sklol-card-overlay",N.append(K,u.domElement,j);for(let me of["tl","tr","bl","br"]){let Ce=n.createElement("div");Ce.className=`sklol-card-corner ${me}`,N.append(Ce)}let de=n.createElement("div");de.className="sklol-card-gem",N.append(de),f=N}e.append(f);let m=new $n;m.background=new Oe(th),m.add(new bi(16774888,3095080,2.2));let _=new Jn(16773336,1.6);_.position.set(-400,900,500),m.add(_);let v=new Ht(eh,r/a,5,20000),d=new Jt;d.scale.set(-1,1,1),m.add(d);let p=[],w=[],y=null,T={y:100,distance:600},H=Math.PI/5,S=!1,A=!1,X=()=>{let N=Math.cos(Qc)*T.distance;v.position.set(Math.sin(H)*N,T.y+Math.sin(Qc)*T.distance,Math.cos(H)*N),v.lookAt(0,T.y,0)},x=async()=>{let N=await c(l("mapchunk")),K=Uint8Array.from(atob(N.mesh),(J)=>J.charCodeAt(0)),j=new DataView(K.buffer),de=j.getUint32(4,!0),me=j.getUint32(8,!0),Ce=new Pt;Ce.setAttribute("position",new ft(new Float32Array(K.buffer,16,de*3),3)),Ce.setAttribute("uv",new ft(new Float32Array(K.buffer,16+de*12,de*2),2)),Ce.setIndex(new ft(new Uint32Array(K.buffer,16+de*20,me),1));let ge=N.groups.map((J,ue)=>{Ce.addGroup(J.start,J.count,ue);let ve=new Ot({color:16777215,side:Kt,alphaTest:J.alpha?0.4:0});if(J.texture)w.push(h(`${t.base}maptex/${J.texture}.png`,!0).then((Ae)=>{if(S)return Ae.dispose();ve.map=Ae,ve.needsUpdate=!0,p.push(Ae)}).catch(()=>{}));return ve});p.push(Ce,...ge),d.add(new rt(Ce,ge)),m.fog=new Oi(th,N.radius*0.45,N.radius*0.95)},b=async()=>{let N=await c(l("model",t.skin)),K=await s(l("mesh",N.skin));if(!K.ok)throw Error(`${K.status}`);let j=Xi(await K.arrayBuffer(),N.submeshes),de=N.submeshes.map((Be)=>{let He=/^vfx/i.test(Be.name)?new Ot({visible:!1}):new ys({color:16777215,side:Kt,alphaTest:Be.alpha?0.3:0});if(He.visible=He.visible&&!Be.hidden,Be.texture&&He instanceof ys)w.push(h(l(`texture/${Be.texture}.png`,N.skin),!0).then(($e)=>{if(S)return $e.dispose();He.map=$e,He.needsUpdate=!0,p.push($e)}).catch(()=>{}));return He});p.push(j,...de);let me=new Zn(j,de);qi(me,N.joints);let Ce=N.scale||1;me.scale.setScalar(Ce),d.add(me),j.computeBoundingBox();let ge=j.boundingBox,J=ge?(ge.max.y-Math.max(0,ge.min.y))*Ce:200,ue=ge?Math.max(ge.max.x-ge.min.x,ge.max.z-ge.min.z)*Ce:120,ve=Math.tan(eh*Math.PI/360),Ae=ve*(r/a);T={y:J*0.48,distance:Math.max(J/Vg/2/ve,ue/Wg/2/Ae)};let _e=N.animations??[],Ue=_e.find((Be)=>Be.name==="idle1")??_e.find((Be)=>/^idle/.test(Be.name)&&!/_in|_to|run/.test(Be.name))??_e.find((Be)=>Be.name.includes("idle"));if(Ue){let Be=await c(l(`anim/${Ue.id}`,N.skin)),He=new Map(N.joints.map((nt,L)=>[nt.hash>>>0,L]));y=new Mi(me);let $e=y.clipAction(Yi(Ue.name,Be,He));$e.setLoop(gs,Number.POSITIVE_INFINITY),$e.play()}},P=(N)=>{y?.update(N),H+=o*N,X()},O=i.performance.now(),se=0,Z=()=>{if(S)return;se=i.requestAnimationFrame(Z);let N=i.performance.now(),K=Math.min((N-O)/1000,0.1);if(O=N,!A)P(K);u.render(m,v)};return X(),Z(),{ready:Promise.all([x().catch(()=>{}),b()]).then(()=>Promise.all(w)).then(()=>{X()}),async advance(N){A=!0;let K=0.03333333333333333;for(let j=0;j<N;j+=K)P(K)},dispose(){if(S)return;S=!0,i.cancelAnimationFrame(se),y?.stopAllAction();for(let N of p)N.dispose();u.dispose(),f.remove()}}}var Gn=(e,t,n)=>{if(!e)return n.slice();if(e.t?.length&&e.v?.length===e.t.length){let{t:i,v:s}=e;if(t<=i[0])return s[0].slice();let r=i.length-1;if(t>=i[r])return s[r].slice();let a=1;while(i[a]<t)a++;let o=(t-i[a-1])/Math.max(0.000001,i[a]-i[a-1]);return s[a].map((l,c)=>s[a-1][c]+(l-s[a-1][c])*o)}return(e.c??n).slice()},qg=(e,t)=>{let{k:n,v:i}=e;if(t<=n[0])return i[0];for(let s=1;s<n.length;s++)if(t<=n[s])return i[s-1]+(i[s]-i[s-1])*(t-n[s-1])/Math.max(0.000001,n[s]-n[s-1]);return i[i.length-1]},Sn=(e,t,n)=>{let i=Gn(e,t,n);return e?.r?.forEach((s,r)=>{if(s&&r<i.length)i[r]*=qg(s,Math.random())}),i},zn=(e,t)=>typeof e==="number"&&Number.isFinite(e)?e:t,Ss=(e)=>e===!0,Yg=(e)=>Array.isArray(e)?e:void 0,Bt=(e)=>e&&typeof e==="object"&&!Array.isArray(e)?e:void 0,un=Math.PI/180,So=(e)=>e===4||e===3?{blending:Xn,additive:!0}:{blending:Gl,additive:!1},$g=400,Zg=`
attribute vec3 iPos;
attribute vec2 iSize;
attribute vec3 iRot;
attribute vec4 iColor;
attribute float iFrame;
attribute float iErosion;
varying float vErosion;
uniform float uMode;
uniform vec2 uCells;
varying vec2 vUv;
varying vec4 vColor;

mat3 rotation(vec3 r) {
	vec3 c = cos(r), s = sin(r);
	mat3 x = mat3(1.0, 0.0, 0.0, 0.0, c.x, s.x, 0.0, -s.x, c.x);
	mat3 y = mat3(c.y, 0.0, -s.y, 0.0, 1.0, 0.0, s.y, 0.0, c.y);
	mat3 z = mat3(c.z, s.z, 0.0, -s.z, c.z, 0.0, 0.0, 0.0, 1.0);
	return z * y * x;
}

void main() {
	vec2 corner = position.xy * 2.0;
	vColor = iColor;
	vErosion = iErosion;
	float f = floor(iFrame);
	vec2 cell = vec2(mod(f, uCells.x), floor(f / uCells.x));
	vUv = (vec2(corner.x * 0.5 + 0.5, 0.5 - corner.y * 0.5) + cell) / uCells;
	if (uMode > 2.5) {
		// Raio: o lado comprido na direção em que a partícula anda, vista na tela (iRot leva a
		// velocidade). O comprimento é o x do tamanho; a largura, o y.
		vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
		vec4 ahead = modelViewMatrix * vec4(iPos + normalize(iRot + vec3(1e-5)), 1.0);
		vec2 along = ahead.xy - mv.xy;
		along = length(along) > 1e-5 ? normalize(along) : vec2(1.0, 0.0);
		vec2 across = vec2(-along.y, along.x);
		mv.xy += along * corner.x * 0.5 * iSize.x + across * corner.y * 0.5 * iSize.y;
		gl_Position = projectionMatrix * mv;
	} else if (uMode < 0.5) {
		// Virado pra câmera: o canto cresce no espaço da câmera, girado no plano da tela.
		vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
		float a = iRot.z != 0.0 ? iRot.z : iRot.x;
		vec2 c = corner * 0.5 * iSize;
		mv.xy += vec2(c.x * cos(a) - c.y * sin(a), c.x * sin(a) + c.y * cos(a));
		gl_Position = projectionMatrix * mv;
	} else {
		// Com orientação própria (no plano XY) ou no chão (no plano XZ, girando em volta do Y).
		vec3 local = uMode < 1.5
			? rotation(iRot) * vec3(corner * 0.5 * iSize, 0.0)
			: rotation(vec3(0.0, iRot.x + iRot.y, 0.0)) * vec3(corner.x * 0.5 * iSize.x, 0.0, corner.y * 0.5 * iSize.y);
		gl_Position = projectionMatrix * modelViewMatrix * vec4(iPos + local, 1.0);
	}
}`,jg=`
uniform sampler2D uMap;
uniform float uHasMap;
uniform float uAlphaTest;
uniform sampler2D uErosionMap;
uniform float uHasErosion;
uniform vec2 uFeather;
varying vec2 vUv;
varying vec4 vColor;
varying float vErosion;

void main() {
	vec4 texel = uHasMap > 0.5 ? texture2D(uMap, vUv) : vec4(1.0);
	vec4 color = texel * vColor;
	if (uHasErosion > 0.5) {
		vec4 e = texture2D(uErosionMap, vUv);
		float mask = dot(e.rgb, vec3(1.0 / 3.0)) * e.a;
		color.a *= smoothstep(vErosion - uFeather.x, vErosion + uFeather.y, mask);
	}
	if (color.a <= uAlphaTest) discard;
	gl_FragColor = color;
	#include <colorspace_fragment>
}`;class ih{object;geometry;material;capacity=0;arrays;constructor(e,t,n,i){let{additive:s}=So(t);this.material=new xt({vertexShader:Zg,fragmentShader:jg,uniforms:{uMap:{value:null},uHasMap:{value:0},uMode:{value:e},uCells:{value:n},uAlphaTest:{value:i},uErosionMap:{value:null},uHasErosion:{value:0},uFeather:{value:[0.1,0.1]}},transparent:!0,depthWrite:!1,side:Kt,blending:Ws,blendSrc:Na,blendDst:s?Ua:Fa}),this.geometry=new to;let r=new vs(1,1);this.geometry.index=r.index,this.geometry.setAttribute("position",r.getAttribute("position")),this.grow(16),this.object=new rt(this.geometry,this.material),this.object.frustumCulled=!1}setTexture(e){this.material.uniforms.uMap.value=e,this.material.uniforms.uHasMap.value=1}setErosion(e,t){this.material.uniforms.uErosionMap.value=e,this.material.uniforms.uHasErosion.value=1,this.material.uniforms.uFeather.value=t}grow(e){this.capacity=e,this.arrays={pos:new Float32Array(e*3),size:new Float32Array(e*2),rot:new Float32Array(e*3),color:new Float32Array(e*4),frame:new Float32Array(e),erosion:new Float32Array(e)};let t=this.arrays;this.geometry.setAttribute("iPos",new Wn(t.pos,3)),this.geometry.setAttribute("iSize",new Wn(t.size,2)),this.geometry.setAttribute("iRot",new Wn(t.rot,3)),this.geometry.setAttribute("iColor",new Wn(t.color,4)),this.geometry.setAttribute("iFrame",new Wn(t.frame,1)),this.geometry.setAttribute("iErosion",new Wn(t.erosion,1))}draw(e){if(e.length>this.capacity)this.grow(Math.max(e.length,this.capacity*2));let t=this.arrays;e.forEach((n,i)=>{t.pos.set([n.pos.x,n.pos.y,n.pos.z],i*3),t.size.set([n.size[0],n.size[1]],i*2),t.rot.set([n.rot[0]*un,n.rot[1]*un,n.rot[2]*un],i*3),t.color.set(n.color,i*4),t.frame[i]=n.frame,t.erosion[i]=n.erosion});for(let n of["iPos","iSize","iRot","iColor","iFrame","iErosion"])this.geometry.getAttribute(n).needsUpdate=!0;this.geometry.instanceCount=e.length}dispose(){this.geometry.dispose(),this.material.dispose()}}var Jg=`
attribute vec4 color;
varying vec2 vUv;
varying vec4 vColor;
void main() {
	vUv = uv;
	vColor = color;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Kg=`
uniform sampler2D uMap;
uniform float uHasMap;
varying vec2 vUv;
varying vec4 vColor;
void main() {
	vec4 color = (uHasMap > 0.5 ? texture2D(uMap, vUv) : vec4(1.0)) * vColor;
	if (color.a <= 0.0) discard;
	gl_FragColor = color;
	#include <colorspace_fragment>
}`;class sh{camera;tiling;object;geometry=new Pt;material;capacity=0;position;uv;color;constructor(e,t,n){this.camera=t;this.tiling=n;let{additive:i}=So(e);this.material=new xt({vertexShader:Jg,fragmentShader:Kg,uniforms:{uMap:{value:null},uHasMap:{value:0}},transparent:!0,depthWrite:!1,side:Kt,blending:Ws,blendSrc:Na,blendDst:i?Ua:Fa}),this.grow(32),this.object=new rt(this.geometry,this.material),this.object.frustumCulled=!1}setTexture(e){e.wrapS=qt,e.needsUpdate=!0,this.material.uniforms.uMap.value=e,this.material.uniforms.uHasMap.value=1}grow(e){this.capacity=e,this.position=new Float32Array(e*6),this.uv=new Float32Array(e*4),this.color=new Float32Array(e*8);let t=[];for(let n=0;n<e-1;n++){let i=n*2;t.push(i,i+1,i+2,i+1,i+3,i+2)}this.geometry.setIndex(t),this.geometry.setAttribute("position",new ft(this.position,3)),this.geometry.setAttribute("uv",new ft(this.uv,2)),this.geometry.setAttribute("color",new ft(this.color,4))}draw(e,t){if(e.length>this.capacity)this.grow(Math.max(e.length,this.capacity*2));let n=new R,i=new R,s=new R,r=new R(0,1,0),a=0,o=e.reduce((l,c,h)=>h?l+c.pos.distanceTo(e[h-1].pos):0,0)||1;e.forEach((l,c)=>{let h=e[Math.max(0,c-1)].pos,u=e[Math.min(e.length-1,c+1)].pos;if(n.subVectors(u,h),n.lengthSq()<0.00000001)n.set(0,0,1);if(this.camera)i.crossVectors(n,s.subVectors(t,l.pos));else i.crossVectors(n,r);if(i.lengthSq()<0.00000001)i.set(1,0,0);if(i.normalize().multiplyScalar(l.width/2),c>0)a+=l.pos.distanceTo(e[c-1].pos);let f=this.tiling>0?a/this.tiling:a/o;this.position.set([l.pos.x+i.x,l.pos.y+i.y,l.pos.z+i.z],c*6),this.position.set([l.pos.x-i.x,l.pos.y-i.y,l.pos.z-i.z],c*6+3),this.uv.set([f,0,f,1],c*4),this.color.set(l.color,c*8),this.color.set(l.color,c*8+4)});for(let l of["position","uv","color"])this.geometry.getAttribute(l).needsUpdate=!0;this.geometry.setDrawRange(0,Math.max(0,e.length-1)*6)}dispose(){this.geometry.dispose(),this.material.dispose()}}var Qg=new R,e0=(e,t)=>{let n=new Vt().setFromEuler(new fn(t[0]*un,t[1]*un,t[2]*un,"ZYX")),i=new fn().setFromQuaternion(e.clone().multiply(n),"ZYX");return[i.x/un,i.y/un,i.z/un]};class rh{def;host;orient;age=0;emitted=0;carry=1;particles=[];stopped=!1;life;delay;single;attached;blendMode;quads=null;trail=null;texture=null;erosionMap=null;meshGeometry=null;skinnedFactory=null;ready=!1;disposed=!1;group=new Jt;cells;frames;constructor(e,t,n=!1){this.def=e;this.host=t;this.orient=n;let i=e.fields;this.life=typeof i.lifetime==="number"?i.lifetime:Number.POSITIVE_INFINITY,this.delay=zn(i.timeBeforeFirstEmission,0),this.single=Ss(i.isSingleParticle),this.attached=Gn(Bt(i.bindWeight),0,[1])[0]>=0.5&&e.primitive!=="trail",this.blendMode=zn(i.blendMode,4);let s=Yg(i.texDiv);this.cells=s?[Math.max(1,Math.round(1/(s[0]||1))),Math.max(1,Math.round(1/(s[1]||1)))]:[1,1],this.frames=Math.max(1,zn(i.numFrames,this.cells[0]*this.cells[1])),this.load()}async load(){let e=this.def,t=this.blendMode===1?zn(e.fields.alphaRef,0)/255:0;if(e.primitive==="trail"&&e.trail)this.trail=new sh(this.blendMode,e.trail.camera,e.trail.tiling),this.trail.object.renderOrder=zn(e.fields.pass,0),this.group.add(this.trail.object);if(e.primitive==="billboard"||e.primitive==="quad"||e.primitive==="ray"){let n=Ss(e.fields.isGroundLayer),i=e.primitive==="ray"?3:e.primitive==="quad"?n?2:1:n?2:0;this.quads=new ih(i,this.blendMode,this.cells,t),this.quads.object.renderOrder=zn(e.fields.pass,0),this.group.add(this.quads.object)}if(e.texture)this.texture=await this.host.texture(e.texture);if(e.erosion)this.erosionMap=await this.host.texture(e.erosion.texture,!0);if(e.primitive==="mesh"&&e.mesh)this.meshGeometry=await this.host.mesh(e.mesh);if(e.primitive==="skinned"&&e.skinned)this.skinnedFactory=await this.host.skinned(e.skinned);if(this.disposed)return;if(this.texture&&this.quads)this.quads.setTexture(this.texture);if(this.texture&&this.trail)this.trail.setTexture(this.texture.clone());if(this.erosionMap&&this.quads&&e.erosion)this.quads.setErosion(this.erosionMap,[e.erosion.in,e.erosion.out]);this.ready=!0}get done(){return(this.stopped||this.age>this.delay+this.life||this.single&&this.emitted>0)&&this.particles.length===0}stop(){this.stopped=!0}killEndless(){this.particles=this.particles.filter((e)=>{if(Number.isFinite(e.life))return!0;return this.removeObject(e),!1})}update(e,t,n){this.age+=e;let i=this.def.fields,s=this.age-this.delay,r=Number.isFinite(this.life)&&this.life>0?Math.min(1,Math.max(0,s/this.life)):0;if(this.ready&&s>=0&&!this.stopped&&s<=this.life)if(this.single){if(this.emitted===0)this.spawn(r,t)}else{let w=Math.max(0,Sn(Bt(i.rate),r,[1])[0]);this.carry+=w*e;while(this.carry>=1&&this.particles.length<$g)this.carry-=1,this.spawn(r,t)}if(this.stopped||s>this.life)this.killEndless();let a=new R().setFromMatrixPosition(t),o=new Vt().setFromRotationMatrix(t),l=Ss(i.isLocalOrientation)||this.orient,c=Ss(i.isUniformScale),h=Bt(i.Color),u=Bt(i.scale0),f=Bt(i.rotation0),m=zn(i.frameRate,zn(Gn(Bt(i.birthFrameRate),0,[0])[0],0)),_=this.def.erosion?.drive,v=[],d=[],p=this.def.primitive==="ray";if(this.particles=this.particles.filter((w)=>{if(w.age+=e,w.age>=w.life)return this.removeObject(w),!1;let y=Number.isFinite(w.life)?w.age/w.life:0;w.vel.addScaledVector(w.acc,e),w.vel.x*=Math.max(0,1-w.drag.x*e),w.vel.y*=Math.max(0,1-w.drag.y*e),w.vel.z*=Math.max(0,1-w.drag.z*e),w.pos.addScaledVector(w.vel,e);let T=Gn(h,y,[1,1,1,1]),H=w.color.map((le,N)=>le*(T[N]??1)),S=Gn(u,y,[1,1,1]),A=w.scale.map((le,N)=>le*(S[N]??1));if(c)A=[A[0],A[0],A[0]];let X=Gn(f,y,[0,0,0]),x=w.rot.map((le,N)=>le+w.rotVel[N]*w.age+(X[N]??0)*w.age);w.animate?.(e);let b=Gn(Bt(i.particleUVScrollRate),y,[0,0]);w.uv[0]+=(b[0]??0)*e,w.uv[1]+=(b[1]??0)*e;let P=w.pos.clone();if(this.attached){if(l)P.applyQuaternion(o);P.add(a)}let O=l?e0(o,x):x,se=m>0?(w.frame+w.age*m)%this.frames:(w.frame+y*this.frames)%this.frames,Z=Gn(_,y,[0])[0];if(this.trail)d.push({pos:P,width:A[0],color:H});else if(this.quads){let le=l?w.vel.clone().applyQuaternion(o):w.vel,N=p?[le.x/un,le.y/un,le.z/un]:this.def.primitive==="quad"?O:x;v.push({pos:P,size:[A[0],A[1]],rot:N,color:H,frame:se,erosion:Z})}else if(w.object)this.place(w.object,P,A,O,H,s,Z,w.uv);return!0}),this.quads?.draw(v),this.trail){if(d.reverse(),d.length>0&&!this.stopped&&s<=this.life){let H=new R(...Gn(Bt(i.EmitterPosition),r,[0,0,0]));if(l)H.applyQuaternion(o);H.add(a),d.unshift({...d[0],pos:H})}let w=this.def.trail?.cutoff??800,y=0,T=d.length;for(let H=1;H<d.length;H++)if(y+=d[H].pos.distanceTo(d[H-1].pos),y>w){T=H;break}this.trail.draw(d.slice(0,T),n)}}spawn(e,t){let n=this.def.fields;this.emitted++;let i=Sn(Bt(n.particleLifetime),e,[1])[0];if(!(i>0))i=Number.isFinite(this.life)?Math.max(0.05,this.life):Number.POSITIVE_INFINITY;let s=new R(...Sn(Bt(n.EmitterPosition),e,[0,0,0]));if(s.add(this.shapeOffset(e)),!this.attached){if(Ss(n.isLocalOrientation)||this.orient)s.applyQuaternion(new Vt().setFromRotationMatrix(t));s.add(Qg.setFromMatrixPosition(t))}let r=Sn(Bt(n.worldAcceleration),e,[0,0,0]),a=Sn(Bt(n.birthAcceleration),e,[0,0,0]),o=Ss(n.isRandomStartFrame)?Math.floor(Math.random()*this.frames):zn(n.startFrame,0),l={age:0,life:i,pos:s,vel:new R(...Sn(Bt(n.birthVelocity),e,[0,0,0])),acc:new R(r[0]+a[0],r[1]+a[1],r[2]+a[2]),drag:new R(...Sn(Bt(n.birthDrag),e,[0,0,0])),color:Sn(Bt(n.birthColor),e,[1,1,1,1]),scale:Sn(Bt(n.birthScale0),e,[1,1,1]),rot:Sn(Bt(n.birthRotation0),e,[0,0,0]),rotVel:Sn(Bt(n.birthRotationalVelocity0),e,[0,0,0]),frame:o,uv:[0,0]};if(this.def.primitive==="mesh"&&this.meshGeometry)l.object=this.meshObject();if(this.def.primitive==="skinned"&&this.skinnedFactory){let c=this.skinnedFactory(this.material());c.object.renderOrder=zn(this.def.fields.pass,0),l.object=c.object,l.animate=c.update}if(this.def.primitive==="attached")l.object=this.attachedObject()??void 0;if(l.object)this.group.add(l.object);this.particles.push(l)}shapeOffset(e){let t=this.def.shape,n=new R;if(!t)return n;let i=(t.flags??0)&1;switch(t.kind){case"offset":case"legacy":if(t.offset)n.set(...Sn(t.offset,e,[0,0,0]));break;case"box":{let s=t.size??[0,0,0];n.set((Math.random()-0.5)*s[0],(Math.random()-0.5)*s[1],(Math.random()-0.5)*s[2]);break}case"sphere":{n.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),n.multiplyScalar((t.radius??0)*(i?1:Math.cbrt(Math.random())));break}case"cylinder":{let s=Math.random()*Math.PI*2,r=(t.radius??0)*(i?1:Math.sqrt(Math.random()));n.set(Math.cos(s)*r,Math.random()*(t.height??0),Math.sin(s)*r);break}}return n}material(){let{blending:e}=So(this.blendMode),t=new Ot({color:16777215,transparent:!0,depthWrite:!1,side:Kt,blending:e});if(this.texture){let n=this.texture.clone();n.wrapS=qt,n.wrapT=qt;let i=Gn(Bt(this.def.fields.uvScale),0,[1,1]);n.repeat.set(i[0]||1,i[1]||1);let s=Sn(Bt(this.def.fields.birthUVOffset),0,[0,0]);if(n.offset.set(s[0],s[1]),t.userData.uvBase=[s[0],s[1]],n.needsUpdate=!0,t.map=n,this.erosionMap&&this.def.erosion)this.addErosion(t,this.erosionMap,this.def.erosion)}return t}addErosion(e,t,n){let i={value:0};e.userData.erosion=i,e.customProgramCacheKey=()=>"sklol-erosion",e.onBeforeCompile=(s)=>{s.uniforms.uErosionMap={value:t},s.uniforms.uErosion=i,s.uniforms.uFeather={value:[n.in,n.out]},s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uErosionMap;
uniform float uErosion;
uniform vec2 uFeather;`).replace("#include <map_fragment>",["#include <map_fragment>","{","\tvec4 e = texture2D(uErosionMap, vMapUv);","\tfloat mask = dot(e.rgb, vec3(1.0 / 3.0)) * e.a;","\tdiffuseColor.a *= smoothstep(uErosion - uFeather.x, uErosion + uFeather.y, mask);","}"].join(`
`))}}meshObject(){let e=new rt(this.meshGeometry,this.material());return e.renderOrder=zn(this.def.fields.pass,0),e}attachedObject(){let e=this.host.character();if(!e)return null;let t=new Set((this.def.submeshes??[]).map((o)=>o.toLowerCase())),n=e.material,i=new Ot({visible:!1}),s=this.material();s.depthFunc=Hl,s.polygonOffset=!0,s.polygonOffsetFactor=-1;let r=n.map((o)=>t.size===0||t.has(o.name.toLowerCase())?s:i),a=new Zn(e.geometry,r);return a.bind(e.skeleton,e.bindMatrix),a.frustumCulled=!1,a.userData.attached=!0,a}place(e,t,n,i,s,r,a,o){let l=e.material,c=Array.isArray(l)?l.find((h)=>h.visible):l;if(c){if(c.color.setRGB(s[0],s[1],s[2]),c.opacity=Math.min(1,Math.max(0,s[3])),c.userData.erosion)c.userData.erosion.value=a;let h=Gn(Bt(this.def.fields.birthUvScrollRate),0,[0,0]);if(c.map){let u=c.userData.uvBase;c.map.offset.set((u?.[0]??0)+h[0]*r+o[0],(u?.[1]??0)+h[1]*r+o[1])}}if(e.userData.attached)return;e.position.copy(t),e.rotation.set(i[0]*un,i[1]*un,i[2]*un,"ZYX"),e.scale.set(n[0]||1,n[1]||1,n[2]||1)}removeObject(e){if(!e.object)return;this.group.remove(e.object);let t=e.object.material;for(let n of Array.isArray(t)?t:[t])n.map?.dispose(),n.dispose()}dispose(){this.disposed=!0;for(let e of this.particles)this.removeObject(e);this.particles=[],this.quads?.dispose(),this.trail?.dispose(),this.group.removeFromParent()}}var t0=new Je,n0=new Je;class ah{id;anchor;group=new Jt;emitters=[];stopped=!1;loaded=!1;cancelled=!1;constructor(e,t,n,i=!1){this.id=e;this.anchor=t;n.effect(e).then((s)=>{if(this.loaded=!0,!s||this.cancelled)return;for(let r of s.emitters){if(r.fields.disabled===!0||r.distortion)continue;if(!["billboard","quad","mesh","skinned","attached","trail","ray"].includes(r.primitive))continue;let a=new rh(r,n,i);if(this.stopped)a.stop();this.emitters.push(a),this.group.add(a.group)}})}stop(){this.stopped=!0;for(let e of this.emitters)e.stop()}get done(){return this.cancelled||this.loaded&&this.emitters.every((e)=>e.done)}update(e,t,n){let i=this.anchor?t0.multiplyMatrices(t,this.anchor.matrixWorld):n0;for(let s of this.emitters)s.update(e,i,n)}dispose(){this.cancelled=!0;for(let e of this.emitters)e.dispose();this.emitters=[],this.group.removeFromParent()}}class wo{host;runs=new Set;layer=new Jt;parentInverse=new Je;visible=!0;constructor(e){this.host=e;e.parent.add(this.layer)}async preload(e){let t=await this.host.effect(e);if(!t)return;await Promise.all(t.emitters.flatMap((n)=>[n.texture?this.host.texture(n.texture):null,n.erosion?this.host.texture(n.erosion.texture,!0):null,n.primitive==="mesh"&&n.mesh?this.host.mesh(n.mesh):null,n.primitive==="skinned"&&n.skinned?this.host.skinned(n.skinned):null]))}play(e,t,n=!1){let i=new ah(e,t,this.host,n);return this.runs.add(i),this.layer.add(i.group),i}remove(e){e.dispose(),this.runs.delete(e)}update(e){this.layer.visible=this.visible,this.parentInverse.copy(this.host.parent.matrixWorld).invert();let t=new R().setFromMatrixPosition(this.host.camera.matrixWorld).applyMatrix4(this.parentInverse);for(let n of this.runs)if(n.update(e,this.parentInverse,t),n.done)this.remove(n)}clear(){for(let e of this.runs)e.dispose();this.runs.clear()}dispose(){this.clear(),this.layer.removeFromParent()}}var i0=[[],["Neck"],["{S}_UpArm","{S}_Shoulder"],["{S}_Elbow","{S}_ForeArm"],["{S}_Hand","{S}_Wrist"],["{S}_UpArm","{S}_Shoulder"],["{S}_Elbow","{S}_ForeArm"],["{S}_Hand","{S}_Wrist"],["{S}_Hip"],["{S}_KneeUpper","{S}_Knee"],["{S}_Foot","{S}_Ankle"],["{S}_Hip"],["{S}_KneeUpper","{S}_Knee"],["{S}_Foot","{S}_Ankle"],["{S}_Eye"],["{S}_Eye"],["{S}_Ear1","{S}_Ear"],["{S}_Ear1","{S}_Ear"]],s0=["","","R","R","R","L","L","L","R","R","R","L","L","L","R","L","R","L"],r0=[[2,3],[2,6],[3,4],[4,5],[6,7],[7,8],[2,9],[9,10],[10,11],[2,12],[12,13],[13,14],[2,1],[1,15],[15,17],[1,16],[16,18]],oh=[[255,0,0],[255,85,0],[255,170,0],[255,255,0],[170,255,0],[85,255,0],[0,255,0],[0,255,85],[0,255,170],[0,255,255],[0,170,255],[0,85,255],[0,0,255],[85,0,255],[170,0,255],[255,0,255],[255,0,170],[255,0,85]],a0=`
#include <common>
#include <skinning_pars_vertex>
varying vec2 vPassUv;
varying vec3 vPassNormal;
varying float vPassDepth;
void main() {
	vPassUv = uv;
	#include <beginnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	vPassNormal = normalize(transformedNormal);
	vPassDepth = -mvPosition.z;
}
`,o0=`
uniform sampler2D map;
uniform bool useMap;
uniform float alphaCut;
uniform int mode;
uniform float near;
uniform float far;
varying vec2 vPassUv;
varying vec3 vPassNormal;
varying float vPassDepth;
void main() {
	if (useMap && texture2D(map, vPassUv).a < alphaCut) discard;
	if (mode == 0) {
		float d = clamp((far - vPassDepth) / max(far - near, 0.0001), 0.0, 1.0);
		gl_FragColor = vec4(vec3(d), 1.0);
	} else {
		vec3 n = normalize(vPassNormal);
		if (!gl_FrontFacing) n = -n;
		gl_FragColor = vec4(n * 0.5 + 0.5, 1.0);
	}
}
`,Lt={loading:"Carregando...",skin:"Skin",fromMod:"do mod",animations:"Animações",search:"Buscar animação",noAnimations:"Sem animações",play:"Tocar",pause:"Pausar",speed:"Velocidade",parts:"Partes",showHidden:"Mostrar as escondidas",skeleton:"Esqueleto",sources:"Do mod:",nothingFromMod:"nada (é a skin do jogo)",source:{mesh:"malha",skeleton:"esqueleto",bin:"bin"},error:"Não deu pra abrir a skin",skillNoAnimation:"sem animação",camera:"Câmera",cameraGame:"Do jogo",cameraFree:"Livre",effects:"Efeitos",showEffects:"Mostrar os efeitos",persistentAlways:"sempre",persistentCondition:"condição"},l0=`
.sklol-viewer { position: relative; width: 100%; height: 100%; overflow: hidden; background: #010a13;
	color: #a09b8c; font: 12px/1.4 "Beaufort for LOL", "Spiegel", "Segoe UI", sans-serif; outline: none; }
.sklol-viewer canvas { display: block; width: 100%; height: 100%; }
.sklol-viewer-panel { position: absolute; top: 12px; left: 12px; bottom: 12px; width: 240px; display: flex;
	flex-direction: column; gap: 10px; padding: 12px; box-sizing: border-box; background: rgba(1, 10, 19, 0.82);
	border: 1px solid #463714; }
.sklol-viewer-title { color: #f0e6d2; font-size: 15px; font-weight: 700; letter-spacing: 0.04em;
	text-transform: uppercase; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sklol-viewer-sub { color: #a09b8c; margin-top: -8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sklol-viewer-label { color: #c8aa6e; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.sklol-viewer select, .sklol-viewer input[type=search] { width: 100%; box-sizing: border-box; padding: 5px 7px;
	background: #1e2328; color: #f0e6d2; border: 1px solid #463714; font: inherit; outline: none; }
.sklol-viewer select:focus, .sklol-viewer input[type=search]:focus { border-color: #c8aa6e; }
.sklol-viewer-list { flex: 1 1 0; min-height: 60px; overflow-y: auto; display: flex; flex-direction: column; }
.sklol-viewer-list::-webkit-scrollbar { width: 6px; }
.sklol-viewer-list::-webkit-scrollbar-thumb { background: #463714; }
.sklol-viewer-item { flex: 0 0 auto; padding: 3px 6px; cursor: pointer; color: #a09b8c; white-space: nowrap; overflow: hidden;
	text-overflow: ellipsis; border-left: 2px solid transparent; }
.sklol-viewer-item:hover { color: #f0e6d2; background: rgba(200, 170, 110, 0.08); }
.sklol-viewer-item.active { color: #f0e6d2; border-left-color: #c8aa6e; background: rgba(200, 170, 110, 0.14); }
.sklol-viewer-row { display: flex; align-items: center; gap: 8px; }
.sklol-viewer-row input[type=range] { flex: 1; accent-color: #c8aa6e; }
.sklol-viewer button { padding: 5px 12px; background: #1e2328; color: #cdbe91; border: 1px solid #c8aa6e;
	font: inherit; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; }
.sklol-viewer button:hover { background: #2a2f35; color: #f0e6d2; }
.sklol-viewer-check { flex: 0 0 auto; display: flex; align-items: center; gap: 6px; cursor: pointer; white-space: nowrap;
	overflow: hidden; text-overflow: ellipsis; }
.sklol-viewer-check input { accent-color: #c8aa6e; margin: 0; }
.sklol-viewer-parts { max-height: 30%; flex: 0 1 auto; }
.sklol-viewer-muted { opacity: 0.6; }
.sklol-viewer-notes { position: absolute; right: 12px; bottom: 12px; max-width: 360px; padding: 8px 10px;
	background: rgba(1, 10, 19, 0.82); border: 1px solid #463714; color: #a09b8c; }
.sklol-viewer-notes:empty { display: none; }
.sklol-viewer-skills { position: absolute; left: calc(50% + 126px); bottom: 18px; transform: translateX(-50%);
	display: flex; gap: 8px; padding: 8px; background: rgba(1, 10, 19, 0.82); border: 1px solid #463714; }
.sklol-viewer-skills[hidden] { display: none; }
.sklol-viewer-skill { position: relative; width: 52px; height: 52px; padding: 0; border: 2px solid #463714;
	background: #1e2328 center / cover no-repeat; cursor: pointer; transition: border-color 0.1s, filter 0.1s; }
.sklol-viewer-skill:hover { border-color: #c8aa6e; filter: brightness(1.15); }
.sklol-viewer-skill.active { border-color: #f0e6d2; box-shadow: 0 0 10px rgba(200, 170, 110, 0.7); }
.sklol-viewer-skill:disabled { cursor: default; filter: grayscale(1) brightness(0.5); border-color: #1e2328; }
.sklol-viewer-skill span { position: absolute; right: -2px; bottom: -2px; min-width: 16px; padding: 0 3px;
	background: #010a13; border: 1px solid #463714; color: #f0e6d2; font-size: 11px; font-weight: 700; line-height: 16px; }
.sklol-viewer-caption { position: absolute; left: calc(50% + 126px); bottom: 98px; transform: translateX(-50%);
	max-width: 60%; color: #f0e6d2; text-shadow: 0 1px 3px #000; text-align: center; white-space: nowrap;
	overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
.sklol-viewer-caption b { color: #c8aa6e; }
.sklol-viewer-status { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
	color: #c8aa6e; font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; pointer-events: none; }
.sklol-viewer-status:empty { display: none; }
.sklol-viewer-status.error { color: #e84057; text-transform: none; letter-spacing: 0; padding: 0 24px; text-align: center; }
`;function lh(e,t){let n=e.ownerDocument,i=n.defaultView??window,s=t.fetch??i.fetch.bind(i),r=(I,B)=>B===void 0||B<0?`${t.base}${I}`:`${t.base}${I}?skin=${B}`,a=(I,B,F)=>{let z=n.createElement(I);if(B)z.className=B;if(F!==void 0)z.textContent=F;return z},o=a("div","sklol-viewer");o.tabIndex=0;let l=a("style");l.textContent=l0;let c=a("div","sklol-viewer-panel"),h=a("div","sklol-viewer-title"),u=a("div","sklol-viewer-sub"),f=a("select"),m=a("select");for(let[I,B]of[["game",Lt.cameraGame],["free",Lt.cameraFree]]){let F=a("option",void 0,B);F.value=I,m.append(F)}let _=a("input");_.type="search",_.placeholder=Lt.search;let v=a("div","sklol-viewer-list"),d=a("button",void 0,Lt.pause),p=a("input");p.type="range",p.min="0.1",p.max="2",p.step="0.05",p.value="1";let w=a("span",void 0,"1.00x"),y=a("div","sklol-viewer-list sklol-viewer-parts"),T=a("input");T.type="checkbox";let H=a("input");H.type="checkbox",H.checked=!0;let S=a("div","sklol-viewer-list sklol-viewer-parts"),A=a("input");A.type="checkbox";let X=a("div","sklol-viewer-notes"),x=a("div","sklol-viewer-skills"),b=a("div","sklol-viewer-caption"),P=a("div","sklol-viewer-status",Lt.loading),O=(I,B)=>{let F=a("label","sklol-viewer-check");return F.append(I,n.createTextNode(B)),F},se=a("div","sklol-viewer-row");se.append(d,p,w),c.append(h,u,a("div","sklol-viewer-label",Lt.skin),f,a("div","sklol-viewer-label",Lt.camera),m,a("div","sklol-viewer-label",Lt.animations),_,v,se,a("div","sklol-viewer-label",Lt.parts),O(T,Lt.showHidden),y,a("div","sklol-viewer-label",Lt.effects),O(H,Lt.showEffects),S,O(A,Lt.skeleton));let Z=t.shot,le=Z?.background===null,N=new ki({antialias:!0,alpha:le,preserveDrawingBuffer:t.capture===!0});if(N.setPixelRatio(i.devicePixelRatio||1),N.outputColorSpace=Nn,le)N.setClearColor(0,0),o.style.background="transparent";if(o.append(l,N.domElement,c,x,b,X,P),e.append(o),Z&&!Z.controls)for(let I of[c,x,b,X,P])I.style.display="none";let K=new $n;K.background=le?null:new Oe(Z?Z.background??0:68115),K.add(new bi(16777215,2765888,Z?3.4:2.4));let j=new Jn(16774368,1.4);j.position.set(-300,600,500),K.add(j);let de=new Jt,me=new rt(new xs(1,64),new Ot({color:660520,transparent:!0,opacity:0.9})),Ce=new rt(new qr(0.97,1,96),new Ot({color:7887400,transparent:!0,opacity:0.8}));for(let I of[me,Ce])I.rotation.x=-Math.PI/2,de.add(I);Ce.position.y=0.5,de.visible=!Z,K.add(de);let ge=new Ht(35,1,1,20000);if(Z){let I=new Jn(16777215,1.6);I.position.set(0,0.3,1),ge.add(I),K.add(ge)}let J=new Ks(ge,N.domElement);J.enableDamping=!0,J.dampingFactor=0.12;let ue=new Jt;K.add(ue);let ve=null,Ae=null,_e=null,Ue="",Be=null,He=0,$e=[],nt=new Map,L=null,ut=[],C=new Map,Q=new Map,Y=null,ce=0,pe=[],Se=null,E=null,g=!1,V=[],ne=null,re=0,ee=new Map,Te=new Map,xe=new Map,ae=new Map,we=[],fe=new WeakMap,Re=new Map,Ze=!0,We=!1,Ie=!1,De=0,Ke=new Map,dt=(I,B=!1)=>{P.textContent=I,P.classList.toggle("error",B)},k=async(I)=>{let B=await s(I);if(!B.ok)throw Error(`${B.status} ${(await B.text()).trim()}`);return await B.json()},U=async(I)=>{let B=await s(I);if(!B.ok)throw Error(`${B.status}`);let F=await createImageBitmap(await B.blob(),{imageOrientation:"none"}),z=new Ut(F);return z.flipY=!1,z.colorSpace=Nn,z.anisotropy=Math.min(8,N.capabilities.getMaxAnisotropy()),z.needsUpdate=!0,z},D=(I,B)=>{let F=Xi(B,I.submeshes),z=I.submeshes.map((Ee)=>{let st=/^vfx/i.test(Ee.name)?new Ot({color:16777215,side:Kt,transparent:!0,blending:Xn,depthWrite:!1}):new ys({color:16777215,side:Kt,alphaTest:Ee.alpha?0.3:0});return st.name=Ee.name,st.visible=!Ee.hidden,st}),ye=new Zn(F,z);return qi(ye,I.joints),{mesh:ye,materials:z}},G=()=>{He++,Re.clear(),_e=null,Ae?.stopAllAction(),Ae=null,Ke.clear(),L?.dispose(),L=null,ut=[],C.clear(),Q.clear(),Y=null,pe=[];for(let I of V)I.point.removeFromParent();V=[],Se=null,E=null,g=!1,ne=null;for(let I of Te.values())I.then((B)=>B?.dispose());for(let I of xe.values())I.then((B)=>B?.dispose());ee.clear(),Te.clear(),xe.clear(),ae.clear();for(let I of we.splice(0))I.dispose();if(!ve)return;ue.remove(ve.mesh),K.remove(ve.helper),ve.mesh.geometry.dispose();for(let I of ve.materials)I.dispose();for(let I of ve.textures)I.image?.close?.(),I.dispose();ve.helper.dispose(),ve=null},oe=56*Math.PI/180,he=40,Me=2250,Ye=700,Qe=t.camera==="free"||Z?"free":"game";m.value=Qe;let ke=null,ot=()=>{if(Qe==="game"){let I=new R(0,0,0);ge.fov=he,ge.near=10,ge.far=30000,J.target.copy(I),ge.position.set(0,Math.sin(oe),Math.cos(oe)).multiplyScalar(Me).add(I),J.enableRotate=!1,J.enablePan=!1,J.minDistance=Ye,J.maxDistance=Me}else if(ke)ge.fov=35,ge.near=Math.max(0.5,ke.max/1200),ge.far=ke.max*10,J.target.copy(ke.target),ge.position.copy(ke.position),J.enableRotate=!0,J.enablePan=!0,J.minDistance=ke.min,J.maxDistance=ke.max;ge.updateProjectionMatrix(),J.update()},et=(I,B)=>{B.geometry.computeBoundingBox();let F=(B.geometry.boundingBox??new pn).clone(),z=I.scale||1;ue.scale.set(-z,z,z),ue.rotation.y=Math.PI/4,F.min.multiplyScalar(z),F.max.multiplyScalar(z);let ye=F.getSize(new R),Ee=Math.max(ye.y,1),it=Math.max(ye.x,ye.z,Ee*0.6);de.scale.set(it*0.6,1,it*0.6);let st=new R(0,F.min.y+Ee*0.45,0),Mt=Ee*0.62/Math.tan(17.5*Math.PI/180),It=new R(st.x+Mt*0.35,st.y+Ee*0.12,st.z+Mt);if(Z){let je=Z.yaw*Math.PI/180,_t=Z.pitch*Math.PI/180,mt=Mt*Z.zoom;It=new R(st.x+mt*Math.cos(_t)*Math.sin(je),st.y+mt*Math.sin(_t),st.z+mt*Math.cos(_t)*Math.cos(je))}ke={target:st,position:It,min:Ee*0.2,max:Mt*6},ot()},ht=()=>{if(!Z)return;K.updateMatrixWorld(!0);let I=new pn,B=new R;if(K.traverseVisible((_t)=>{let mt=_t;if(!mt.isMesh||mt.isInstancedMesh)return;let tn=mt.geometry.getAttribute("position")?.count??0;if(tn<64)return;if((Array.isArray(mt.material)?mt.material:[mt.material]).every((wn)=>!wn.visible||wn.blending===Xn))return;let Dt=Math.max(1,Math.floor(tn/4000));for(let wn=0;wn<tn;wn+=Dt)mt.getVertexPosition(wn,B),I.expandByPoint(mt.localToWorld(B))}),I.isEmpty())return;let F=I.getCenter(new R),z=I.getSize(new R),ye=Math.tan(ge.fov*Math.PI/360),Ee=ye*ge.aspect,it=Math.max(z.x,z.z),st=Math.max(z.y/2/ye,it/2/Ee)*1.08+it/2,Mt=Z.yaw*Math.PI/180,It=Z.pitch*Math.PI/180,je=st*Z.zoom;J.target.copy(F),ge.position.set(F.x+je*Math.cos(It)*Math.sin(Mt),F.y+je*Math.sin(It),F.z+je*Math.cos(It)*Math.cos(Mt)),ge.near=Math.max(0.5,je/1000),ge.far=je*20,ge.updateProjectionMatrix(),J.update()},qe=async(I)=>{let B=++De;dt(Lt.loading);try{let F=await k(r("model",I)),z=F.skin,ye=await s(r("mesh",z));if(!ye.ok)throw Error(`${ye.status} ${(await ye.text()).trim()}`);let Ee=await ye.arrayBuffer();if(B!==De||We)return;G();let{mesh:it,materials:st}=D(F,Ee),Mt=new ro(it);Mt.visible=A.checked;let It=new Map(F.joints.map((Dt,wn)=>[Dt.hash>>>0,wn]));ve={info:F,mesh:it,materials:st,textures:[],helper:Mt,byHash:It},ue.add(it),K.add(Mt),Ae=new Mi(it),Ae.addEventListener("finished",(Dt)=>Kn(Dt.action)),L=be(z),et(F,it),Ti(F),dt("");let je=new Map;F.submeshes.forEach((Dt,wn)=>{if(!Dt.texture)return;let Pn=je.get(Dt.texture)??[];Pn.push(st[wn]),je.set(Dt.texture,Pn)});for(let[Dt,wn]of je)U(r(`texture/${Dt}.png`,z)).then((Pn)=>{if(B!==De||We||!ve){Pn.dispose();return}Pn.wrapS=Pn.wrapT=qt,Pn.needsUpdate=!0,ve.textures.push(Pn);for(let Ao of wn)Ao.map=Pn,Ao.needsUpdate=!0}).catch((Pn)=>M(`textura ${Dt}: ${Pn}`));let _t=F.animations??[],mt=_t.find((Dt)=>Dt.name===t.animation)??_t.find((Dt)=>Dt.name==="idle1")??_t.find((Dt)=>Dt.name.startsWith("idle"))??_t[0];if(Be=mt??null,mt)await jt(mt);let tn=ci(F);if(t.skill)await tn;let _n=F.skills?.find((Dt)=>Dt.key===t.skill?.toUpperCase());if(_n&&B===De)await Qn(_n)}catch(F){if(B!==De)return;dt(`${Lt.error}: ${F instanceof Error?F.message:F}`,!0)}},St=(I,B,F)=>{let z=Yi(I.name,B,F.byHash);return fe.set(z,{fps:B.fps,events:F.info.animations?.find((ye)=>ye.id===I.id)?.events??[]}),z},Qt=async(I)=>{let B=ve;if(!B)return null;let F=Ke.get(I.id);if(F)return F;try{let z=await k(r(`anim/${I.id}`,B.info.skin));if(B!==ve)return null;let ye=St(I,z,B);return Ke.set(I.id,ye),ye}catch(z){return M(`${I.name}: ${z instanceof Error?z.message:z}`),null}},li=(I,B,F)=>{if(!Ae)return null;let z=Ae.clipAction(I);if(z.reset(),z.setLoop(gs,B),z.clampWhenFinished=!0,z.play(),_e&&_e!==z)_e.crossFadeTo(z,F,!1);return _e=z,As(!0),z},Kn=(I)=>{let B=Re.get(I);Re.delete(I),B?.()},Es=(I)=>new Promise((B)=>Re.set(I,B)),jt=async(I)=>{let B=++He;Ue=I.id,W(),Ts(""),b.replaceChildren();let F=await Qt(I);if(!F||B!==He)return;li(F,Number.POSITIVE_INFINITY,0.15)},Qn=async(I)=>{if(I.steps.length===0||!ve)return;let B=++He;Ts(I.key);let F=await Promise.all(I.steps.map((z)=>Qt({id:z.anim,name:z.name})));if(B!==He)return;ir(I,F,B)},ir=async(I,B,F)=>{let z=(I.effects??[]).map((Ee)=>L?.play(Ee,null)).filter((Ee)=>Ee!==void 0);en(I),Y=I.name,g=!0;let ye=()=>{g=!1;for(let Ee of z)Ee.stop();if(Y===I.name)Y=null};for(let Ee=0;Ee<I.steps.length;Ee++){let it=I.steps[Ee],st=B[Ee];if(!st)continue;Ue=it.anim,W(),Kr(I,Ee);let Mt=li(st,Math.max(1,it.repeat),Ee===0?0.12:0.06);if(!Mt)return ye();if(await Es(Mt),F!==He)return ye()}if(ye(),Ts(""),b.replaceChildren(),Be){Ue=Be.id,W();let Ee=await Qt(Be);if(Ee&&F===He)li(Ee,Number.POSITIVE_INFINITY,0.25)}},Kr=(I,B)=>{b.replaceChildren(),b.append(a("b",void 0,`${I.key} `),n.createTextNode(I.name?`${I.name}: `:"")),I.steps.forEach((F,z)=>{if(z>0)b.append(n.createTextNode(" → "));b.append(z===B?a("b",void 0,F.name):n.createTextNode(F.name))})},Ts=(I)=>{for(let[B,F]of nt)F.classList.toggle("active",B===I)},As=(I)=>{Ze=I,d.textContent=I?Lt.pause:Lt.play},M=(I)=>{let B=a("div",void 0,I);X.append(B)},W=()=>{for(let I of v.children)I.classList.toggle("active",I.dataset.id===Ue)},te=()=>{let I=ve?.info.animations??[],B=_.value.trim().toLowerCase();v.replaceChildren();let F=I.filter((z)=>!B||z.name.toLowerCase().includes(B));if(F.length===0){v.append(a("div","sklol-viewer-item sklol-viewer-muted",Lt.noAnimations));return}for(let z of F){let ye=a("div","sklol-viewer-item",z.name);ye.dataset.id=z.id,ye.title=z.name,ye.addEventListener("click",()=>void jt(z)),v.append(ye)}W()},ie=(I)=>{y.replaceChildren(),I.submeshes.forEach((B,F)=>{let z=a("input");z.type="checkbox",z.checked=!B.hidden,z.addEventListener("change",()=>{if(ve)ve.materials[F].visible=z.checked});let ye=O(z,B.name);if(B.hidden)ye.classList.add("sklol-viewer-muted");ye.title=B.texture?B.name:`${B.name} (sem textura)`,y.append(ye)})},q=(I)=>{for(let F of $e)URL.revokeObjectURL(F);$e=[],nt.clear(),x.replaceChildren();let B=I.skills??[];x.hidden=B.length===0;for(let F of B){let z=a("button","sklol-viewer-skill");if(z.append(a("span",void 0,F.key)),z.title=F.steps.length?`${F.key} · ${F.name}`:`${F.key} · ${F.name} (${Lt.skillNoAnimation})`,z.disabled=F.steps.length===0,z.addEventListener("click",()=>{Qn(F),o.focus()}),nt.set(F.key,z),x.append(z),!F.icon)continue;s(r(`texture/${F.icon}.png`,I.skin)).then((ye)=>ye.ok?ye.blob():null).then((ye)=>{if(!ye||ve?.info!==I)return;let Ee=URL.createObjectURL(ye);$e.push(Ee),z.style.backgroundImage=`url("${Ee}")`}).catch(()=>{})}},be=(I)=>new wo({parent:ue,effect:(B)=>{let F=ee.get(B);if(!F)F=k(r(`effect/${B}`,I)).catch((z)=>(M(`efeito ${B}: ${z instanceof Error?z.message:z}`),null)),ee.set(B,F);return F},texture:(B,F)=>{let z=F?`${B}:data`:B,ye=Te.get(z);if(!ye)ye=U(r(`texture/${B}.png`,I)).then((Ee)=>{if(F)Ee.colorSpace=ec;return Ee}).catch(()=>null),Te.set(z,ye);return ye},mesh:(B)=>{let F=xe.get(B);if(!F)F=s(r(`smesh/${B}`,I)).then((z)=>z.ok?z.arrayBuffer():null).then((z)=>z?Ve(z):null).catch(()=>null),xe.set(B,F);return F},character:()=>ve?.mesh??null,camera:ge,skinned:(B)=>{let F=`${B.mesh}/${B.skeleton}/${B.animation??""}`,z=ae.get(F);if(!z)z=Le(B,I).catch((ye)=>(M(`malha animada ${B.mesh}: ${ye instanceof Error?ye.message:ye}`),null)),ae.set(F,z);return z}}),Le=async(I,B)=>{let F=await k(r(`skinned/${I.mesh}/${I.skeleton}`,B)),z=Uint8Array.from(atob(F.mesh),(st)=>st.charCodeAt(0)),ye=Xi(z.buffer,F.submeshes);we.push(ye);let Ee=new Map(F.joints.map((st,Mt)=>[st.hash>>>0,Mt])),it=I.animation?Yi(I.animation,await k(r(`anim/${I.animation}`,B)),Ee):null;return(st)=>{let Mt=new Zn(ye,st);qi(Mt,F.joints);let It=new Mi(Mt);if(it){let je=It.clipAction(it);je.setLoop(Kl,1),je.clampWhenFinished=!0,je.play()}return{object:Mt,update:(je)=>It.update(je)}}},Ve=(I)=>{let B=new DataView(I).getUint32(4,!0),F=new Pt;return F.setAttribute("position",new ft(new Float32Array(I,16,B*3),3)),F.setAttribute("uv",new ft(new Float32Array(I,16+B*12,B*2),2)),F},ze=(I)=>I!==void 0&&I>=0?ve?.mesh.skeleton.bones[I]??null:null,tt=()=>{if(!L||!_e)return;let I=fe.get(_e.getClip()),B=I?.events??[],F=I?.fps||30;if(_e!==ne){for(let Ee of ut)Ee.run.stop();ut=[],ne=_e,re=-0.0001}let z=_e.time,ye=(Ee)=>z>=re?Ee>re&&Ee<=z:Ee>re||Ee<=z;for(let Ee of B){if(!ye(Ee.frame/F))continue;let it=Ee.bones?.length?Ee.bones.map(ze):[null];for(let st of it){let Mt=L.play(Ee.effect,st);ut.push({run:Mt,end:Ee.end?Ee.end/F:null})}}ut=ut.filter((Ee)=>{if(Ee.end!==null&&ye(Ee.end))return Ee.run.stop(),!1;return!0}),re=z},at=(I)=>!!I&&(/idle/i.test(I)||!!Y&&I.toLowerCase().startsWith(Y.toLowerCase())),Fe=(I)=>{if(!I)return 0;let B=I.children??[];switch(I.kind){case"all":return B.every((F)=>Fe(F)!==0)?1:0;case"any":return B.some((F)=>Fe(F)!==0)?1:0;case"not":return Fe(B[0])!==0?0:1;case"buff":case"stacks":return at(I.spell)?1:0;case"anim":return(ve?.info.animations?.find((z)=>z.id===Ue)?.clips??[]).some((z)=>I.anims?.includes(z))?1:0;case"compare":{let F=Fe(B[0]),z=Fe(B[1]);switch(I.op??0){case 0:return F<z?1:0;case 1:return F<=z?1:0;case 2:return F>=z?1:0;case 3:return F>z?1:0;case 4:return F===z?1:0;default:return F!==z?1:0}}case"number":return I.value??0}return 0},vt=(I)=>{let B=ve?.info.persistent?.[I];if(!B)return!1;return Q.get(I)??(!B.when||Fe(B.when)!==0)},At=()=>{let I=ve?.info.persistent??[],B=S.querySelectorAll("input");I.forEach((F,z)=>{let ye=vt(z),Ee=C.has(z);if(ye&&!Ee&&L)C.set(z,F.effects.map((it)=>L.play(it.effect,ze(it.bone))));else if(!ye&&Ee){for(let it of C.get(z)??[])it.stop();C.delete(z)}if(B[z])B[z].checked=ye})},Ct=100,en=(I)=>{let B=I.missiles?.find((z)=>!z.return),F=I.missiles?.find((z)=>z.return);if(!B||!L)return;if(Qe==="free")yt(B.range);pe.push({at:ce+B.delay,run:()=>{let z=new R(0,Ct,0),ye=new R(0,Ct,B.range);Xe(B,z,ye,()=>{if(F)Xe(F,ye,z)})}})},yt=(I)=>{let B=ge.position.distanceTo(J.target),F=Math.tan(ge.fov*Math.PI/360)*ge.aspect,z=(I*0.9*(ue.scale.y||1)+100)/F;if(z>B)E??=B,Se=z},Xe=(I,B,F,z)=>{if(!L)return;let ye=new Jt;ye.position.copy(B),ye.quaternion.setFromUnitVectors(new R(0,0,1),F.clone().sub(B).normalize()),ue.add(ye),ye.updateMatrixWorld();let Ee=L.play(I.effect,ye,!0);V.push({point:ye,to:F.clone(),speed:I.speed,run:Ee,arrive:z})},An=(I)=>{let B=[];V=V.filter((F)=>{let z=F.to.clone().sub(F.point.position),ye=F.speed*I;if(z.length()<=ye){if(F.point.position.copy(F.to),F.run.stop(),F.arrive)B.push(F.arrive);let Ee=F.point;return pe.push({at:ce+3,run:()=>Ee.removeFromParent()}),!1}return F.point.position.addScaledVector(z.normalize(),ye),!0});for(let F of B)F()},bt=(I)=>{if(E!==null&&!g&&V.length===0)Se=E,E=null;if(Se===null)return;let B=ge.position.clone().sub(J.target),F=B.length(),z=F+(Se-F)*(1-Math.exp(-I*5));if(ge.position.copy(J.target).addScaledVector(B.normalize(),z),J.maxDistance=Math.max(J.maxDistance,z),Math.abs(z-Se)<1)Se=null},gn=()=>{let I=pe.filter((B)=>B.at<=ce);pe=pe.filter((B)=>B.at>ce);for(let B of I)B.run()},ci=async(I)=>{let B=L;if(!B)return;let F=new Set;for(let z of I.skills??[]){for(let ye of z.effects??[])F.add(ye);for(let ye of z.missiles??[])F.add(ye.effect);for(let ye of z.steps){let Ee=I.animations?.find((it)=>it.id===ye.anim);for(let it of Ee?.events??[])F.add(it.effect)}}await Promise.all([...F].map((z)=>B.preload(z).catch(()=>{})))},ln=(I)=>{S.replaceChildren(),(I.persistent??[]).forEach((B,F)=>{let z=a("input");z.type="checkbox",z.addEventListener("change",()=>Q.set(F,z.checked));let ye=O(z,B.condition||(B.when?Lt.persistentCondition:Lt.persistentAlways));ye.title=`${B.effects.length} efeito(s)`,S.append(ye)}),S.hidden=(I.persistent??[]).length===0},Ti=(I)=>{h.textContent=I.champion,h.title=I.champion,u.textContent=I.name,u.title=I.name,f.replaceChildren();for(let F of I.skins??[]){let z=a("option",void 0,F.inMod?`Skin ${F.id} · ${Lt.fromMod}`:`Skin ${F.id}`);z.value=String(F.id),z.selected=F.id===I.skin,f.append(z)}T.checked=!1,te(),ie(I),q(I),ln(I),b.replaceChildren(),X.replaceChildren();let B=Object.entries(I.sources).filter(([,F])=>F==="mod").map(([F])=>Lt.source[F]??F);M(`${Lt.sources} ${B.length?B.join(", "):Lt.nothingFromMod}`);for(let F of I.notes)M(F)};f.addEventListener("change",()=>void qe(Number(f.value))),m.addEventListener("change",()=>{Qe=m.value==="free"?"free":"game",Se=null,E=null,ot()}),_.addEventListener("input",te),d.addEventListener("click",()=>As(!Ze)),p.addEventListener("input",()=>{w.textContent=`${Number(p.value).toFixed(2)}x`}),T.addEventListener("change",()=>{if(!ve)return;let I=y.querySelectorAll("input");ve.info.submeshes.forEach((B,F)=>{if(!B.hidden)return;ve.materials[F].visible=T.checked,I[F].checked=T.checked})}),H.addEventListener("change",()=>{if(L)L.visible=H.checked}),A.addEventListener("change",()=>{if(ve)ve.helper.visible=A.checked}),o.addEventListener("keydown",(I)=>{if(I.target===_||I.ctrlKey||I.altKey||I.metaKey)return;if(I.code==="Space"){I.preventDefault(),As(!Ze);return}let B=/^Key([QWER])$/.exec(I.code)?.[1],F=B?ve?.info.skills?.find((z)=>z.key===B):void 0;if(F)I.preventDefault(),Qn(F)});let Et=()=>{let I=Math.max(1,o.clientWidth),B=Math.max(1,o.clientHeight);N.setSize(I,B,!1),ge.aspect=I/B;let F=Z?0:Math.min(I/4,(c.offsetWidth+12)/2);ge.setViewOffset(I,B,-F,0,I,B),ge.updateProjectionMatrix()},vn=new ResizeObserver(Et);vn.observe(o),Et();let hi=(I)=>{ce+=I,gn(),An(I),bt(I),Ae?.update(I),K.updateMatrixWorld(),tt(),At(),L?.update(I)},dn=new Js,Cn=0,Rn=()=>{if(We)return;Cn=i.requestAnimationFrame(Rn);let I=Math.min(dn.getDelta(),0.1);if(Ze&&!Ie)hi(I*Number(p.value));J.update(),N.render(K,ge)};Rn();let sr=(I)=>{K.updateMatrixWorld(!0);let B=(je)=>je.visible&&je.blending!==Xn,F=[],z=[];K.traverseVisible((je)=>{let _t=je;if(!(_t.isMesh||_t.isPoints||_t.isLine||_t.isSprite))return;let mt=je,tn=mt.isInstancedMesh,_n=_t.isMesh?mt.geometry.getAttribute("position")?.count??0:0,Dt=_t.isMesh?Array.isArray(mt.material)?mt.material:[mt.material]:[];if(_t.isMesh&&!tn&&_n>=64&&Dt.some(B))F.push(mt);else z.push(je)});for(let je of z)je.visible=!1;let ye=ge.getWorldDirection(new R),Ee=new R,it=Number.POSITIVE_INFINITY,st=Number.NEGATIVE_INFINITY;for(let je of F){let _t=je.geometry.getAttribute("position")?.count??0,mt=Math.max(1,Math.floor(_t/4000));for(let tn=0;tn<_t;tn+=mt){je.getVertexPosition(tn,Ee);let _n=je.localToWorld(Ee).sub(ge.position).dot(ye);it=Math.min(it,_n),st=Math.max(st,_n)}}let Mt=F.map((je)=>je.material);for(let je of F){let mt=(Array.isArray(je.material)?je.material:[je.material]).map((tn)=>{let _n=tn,Dt=new xt({vertexShader:a0,fragmentShader:o0,side:Kt,uniforms:{map:{value:_n.map??null},useMap:{value:Boolean(_n.map)&&_n.alphaTest>0},alphaCut:{value:_n.alphaTest},mode:{value:I==="depth"?0:1},near:{value:it},far:{value:st}}});return Dt.visible=B(tn),Dt});je.material=Array.isArray(je.material)?mt:mt[0]}let It=K.background;return K.background=new Oe(I==="depth"?0:8421631),()=>{for(let[je,_t]of F.entries()){for(let mt of Array.isArray(_t.material)?_t.material:[_t.material])mt.dispose();_t.material=Mt[je]}for(let je of z)je.visible=!0;K.background=It}},To=()=>{let I=ve?.mesh.skeleton?.bones;if(!I)return null;K.updateMatrixWorld(!0);let B=new Map(I.map((ye)=>[String(ye.userData.name??"").toLowerCase(),ye])),F=(ye,Ee)=>{for(let it of ye){let st=B.get(it.replace("{S}",Ee).toLowerCase());if(st)return st.getWorldPosition(new R)}return null},z=i0.map((ye,Ee)=>F(ye,s0[Ee]));if(!z[1]&&z[2]&&z[5])z[1]=z[2].clone().add(z[5]).multiplyScalar(0.5);if(z[14]&&z[15])z[0]=z[14].clone().add(z[15]).multiplyScalar(0.5);else z[0]=F(["C_Buffbone_Glb_Head_Loc","Head"],"");return z},hh=(I,B)=>{let F=n.createElement("canvas");F.width=I,F.height=B;let z=F.getContext("2d");if(!z)throw Error("sem canvas 2d");z.fillStyle="#000",z.fillRect(0,0,I,B),ge.updateMatrixWorld();let ye=(To()??[]).map((it)=>{if(!it)return null;let st=it.clone().project(ge);return{x:(st.x+1)/2*I,y:(1-st.y)/2*B}}),Ee=Math.max(2,Math.round(4*Math.max(I,B)/1024));for(let[it,[st,Mt]]of r0.entries()){let It=ye[st-1],je=ye[Mt-1];if(!It||!je)continue;let[_t,mt,tn]=oh[it];z.fillStyle=`rgba(${_t}, ${mt}, ${tn}, 0.6)`,z.beginPath(),z.ellipse((It.x+je.x)/2,(It.y+je.y)/2,Math.hypot(It.x-je.x,It.y-je.y)/2,Ee,Math.atan2(je.y-It.y,je.x-It.x),0,Math.PI*2),z.fill()}for(let[it,st]of ye.entries()){if(!st)continue;let[Mt,It,je]=oh[it];z.fillStyle=`rgb(${Mt}, ${It}, ${je})`,z.beginPath(),z.arc(st.x,st.y,Ee,0,Math.PI*2),z.fill()}return F.toDataURL("image/png").split(",")[1]};return{ready:qe(t.skin),async playSkill(I){let B=ve?.info.skills?.find((F)=>F.key===I.toUpperCase());if(B)await Qn(B)},async advance(I){Ie=!0;let B=0.03333333333333333;for(let F=0;F<I;F+=B)hi(B),await new Promise((z)=>i.setTimeout(z,0));if(Z)ht()},photo(I={}){let{width:B,height:F,refit:z,pass:ye="color",angle:Ee,background:it}=I,st=N.getPixelRatio();if(B&&F)N.setPixelRatio(1),N.setSize(B,F,!1),ge.aspect=B/F,ge.setViewOffset(B,F,0,0,B,F),ge.updateProjectionMatrix();let Mt=Ee&&Z?{position:ge.position.clone(),target:J.target.clone()}:null,It=Ee&&Z?{yaw:Z.yaw,pitch:Z.pitch,zoom:Z.zoom}:null;if(Ee&&Z)Object.assign(Z,Ee);if((z||Ee)&&Z)ht();let je=K.background;if(it!==void 0)K.background=new Oe(it);let _t;if(ye==="pose")_t=hh(B??N.domElement.width,F??N.domElement.height);else{let mt=ye==="color"?null:sr(ye);N.render(K,ge),_t=N.domElement.toDataURL("image/png").split(",")[1],mt?.()}if(K.background=je,It&&Z)Object.assign(Z,It);if(Mt)ge.position.copy(Mt.position),J.target.copy(Mt.target),J.update();if(B&&F)N.setPixelRatio(st),Et();return new Blob([Uint8Array.from(atob(_t),(mt)=>mt.charCodeAt(0))],{type:"image/png"})},hasPose(){let I=To();return Boolean(I?.[2]&&I[5]&&I[8]&&I[11])},dispose(){if(We)return;We=!0,i.cancelAnimationFrame(Cn),vn.disconnect(),G();for(let I of $e)URL.revokeObjectURL(I);J.dispose();for(let I of[me,Ce])I.geometry.dispose(),I.material.dispose();N.dispose(),o.remove()}}}var Tn=document.getElementById("app"),pt=new URLSearchParams(location.search),ws=pt.get("skin"),Eo=pt.get("nobg")==="1"?"grid":"map",oi=/^(\d{2,4})x(\d{2,4})$/.exec(pt.get("size")??""),ch=pt.get("format")==="webp",$i=async(e,t="",n=!1)=>{let i=new URLSearchParams;if(t)i.set("pass",t);if(n)i.set("more","1");let s=await fetch(`/api/capture?${i}`,{method:"POST",body:e});if(!s.ok)throw Error(`${s.status} ${(await s.text()).trim()}`);return(await s.text()).trim()};if(Tn&&pt.get("batch")==="1")Tn.style.overflow="auto",Kc(Tn,{background:Eo,...oi?{width:Number(oi[1]),height:Number(oi[2])}:{}});else if(Tn&&pt.get("gallery")==="1")Tn.style.overflow="auto",jc(Tn,{background:Eo});else if(Tn&&pt.get("studio")==="1"){let e=pt.get("auto")==="1",t=Ei(Tn,{base:"/api/",skin:ws===null?void 0:Number(ws),interactive:!e,onCapture:$i,...oi?{width:Number(oi[1]),height:Number(oi[2])}:{},skip:pt.get("skip")?.split(",")??[],background:Eo,angle:pt.get("angle")?JSON.parse(pt.get("angle")):void 0,pose:pt.get("pose")?JSON.parse(pt.get("pose")):void 0,scene:pt.get("scene")==="1"});if(e)t.capture(ch?"image/webp":"image/png",ch?0.9:void 0).then($i).then(()=>{}).catch((n)=>fetch("/api/capture-error",{method:"POST",body:`${n instanceof Error?n.message:n}`}))}else if(Tn&&pt.get("full")!=="1"&&pt.get("shot")!=="1"){let e=Math.max(1,Number(pt.get("zoom")??1)),t=document.createElement("div");t.style.cssText=`position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(${e});image-rendering:pixelated;`,Tn.append(t);let n=nh(t,{base:"/api/",skin:ws===null?void 0:Number(ws),capture:pt.get("capture")==="1"}),i=Number(pt.get("advance"));if(i>0)n.ready.then(()=>n.advance(i))}else if(Tn){let e=lh(Tn,{base:"/api/",skin:ws===null?void 0:Number(ws),animation:pt.get("anim")??void 0,skill:pt.get("skill")??void 0,camera:pt.get("camera")==="free"?"free":"game",capture:pt.get("capture")==="1",shot:pt.get("shot")==="1"?{background:pt.get("bg")==="none"?null:Number.parseInt(pt.get("bg")??"808080",16),yaw:Number(pt.get("yaw")??0),pitch:Number(pt.get("pitch")??0),zoom:Number(pt.get("zoom")??1),controls:pt.get("auto")!=="1"}:void 0}),t=pt.get("bg")==="none";if(t)document.documentElement.style.background=document.body.style.background="transparent";let n=pt.get("shot")==="1"&&pt.get("auto")!=="1"?0:Number(pt.get("advance")),i=e.ready.then(()=>n>0?e.advance(n):void 0),s=[0,45,90,180,-90,-45],r=async(a)=>{let o=oi?{width:Number(oi[1]),height:Number(oi[2])}:{},l=await $i(e.photo({...o,refit:a}),"",!0);if(await $i(e.photo({...o,pass:"depth"}),"depth",!0),await $i(e.photo({...o,pass:"normal"}),"normal",!0),e.hasPose())await $i(e.photo({...o,pass:"pose"}),"pose",!0);for(let[c,h]of s.entries()){let u=e.photo({width:1024,height:1024,angle:{yaw:h,pitch:0,zoom:1},background:8421504});await $i(u,`ref${c+1}`,c<s.length-1)}return l};if(pt.get("shot")==="1"&&pt.get("auto")==="1")i.then(()=>r(!0)).catch((a)=>fetch("/api/capture-error",{method:"POST",body:String(a)}));else if(pt.get("shot")==="1"){if(t)document.body.style.background="repeating-conic-gradient(#3a3f47 0 25%, #2b2f36 0 50%) 0 0 / 24px 24px";let a=document.createElement("button");a.textContent="Salvar PNG",a.style.cssText="position:fixed;right:16px;top:16px;z-index:10;padding:10px 18px;font:600 14px sans-serif;color:#f0e6d2;background:#1e2328;border:1px solid #c8aa6e;cursor:pointer";let o=document.createElement("div");o.style.cssText="position:fixed;right:16px;top:62px;z-index:10;max-width:300px;text-align:right;font:13px sans-serif;color:#f0e6d2;text-shadow:0 1px 2px #000",o.textContent="Arraste pra girar, roda pra zoom, botão direito pra mover; o painel pausa e muda a velocidade",a.onclick=async()=>{a.disabled=!0;try{o.textContent="Gravando...",o.textContent=`Gravada: ${await r(!1)} (com os mapas e as referências)`}catch(l){o.textContent=`Erro: ${l}`}finally{a.disabled=!1}},i.then(()=>document.body.append(a,o))}}

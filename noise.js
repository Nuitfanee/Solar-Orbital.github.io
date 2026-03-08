window.Noise=(function(){
    const perm=new Uint8Array(512);
    const p=new Uint8Array(256);
    for(let i=0;i<256;i++)p[i]=i;
    for(let i=0;i<256;i++){
      let r=Math.floor(Math.random()*(256-i))+i;
      let t=p[i];p[i]=p[r];p[r]=t;
    }
    for(let i=0;i<512;i++)perm[i]=p[i&255];

    function fade(t){return t*t*t*(t*(t*6-15)+10);}
    function lerp(t,a,b){return a+t*(b-a);}
    function grad(hash,x,y,z){
      const h=hash&15;
      const u=h<8?x:y,v=h<4?y:h===12||h===14?x:z;
      return((h&1)===0?u:-u)+((h&2)===0?v:-v);
    }
    function perlin3(x,y,z){
      const X=Math.floor(x)&255, Y=Math.floor(y)&255, Z=Math.floor(z)&255;
      x-=Math.floor(x);y-=Math.floor(y);z-=Math.floor(z);
      const u=fade(x),v=fade(y),w=fade(z);
      const A=perm[X]+Y,AA=perm[A]+Z,AB=perm[A+1]+Z,
            B=perm[X+1]+Y,BA=perm[B]+Z,BB=perm[B+1]+Z;
      return lerp(w,lerp(v,lerp(u,grad(perm[AA],x,y,z),grad(perm[BA],x-1,y,z)),
                           lerp(u,grad(perm[AB],x,y-1,z),grad(perm[BB],x-1,y-1,z))),
                     lerp(v,lerp(u,grad(perm[AA+1],x,y,z-1),grad(perm[BA+1],x-1,y,z-1)),
                           lerp(u,grad(perm[AB+1],x,y-1,z-1),grad(perm[BB+1],x-1,y-1,z-1))));
    }
    return{
      perlin3,
      fbm:function(x,y,z,octaves=4){
        let t=0,amp=1,freq=1,max=0;
        for(let i=0;i<octaves;i++){
          t+=perlin3(x*freq,y*freq,z*freq)*amp;
          max+=amp;amp*=0.5;freq*=2;
        }
        return t/max;
      }
    };
  })();

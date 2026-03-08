(function(){
  const BODY_DEFS=[];
  const add=o=>BODY_DEFS.push(o);

/* === Solar system bodies === */
add({id:"sun",name:"太阳",enName:"Sun",type:"star",parentId:null,orbitMode:"circle",
  aAU:0,eccentricity:0,size:18,color:"#ffb000",
  orbitalPeriodDays:1e9,rotationPeriodHours:609.12,radiusKm:695700,mass10e24kg:1988500,meanTempK:5772});

add({id:"mercury",name:"水星",enName:"Mercury",type:"planet",parentId:"sun",orbitMode:"ellipse",
  aAU:0.387098,eccentricity:0.205630,inclinationDeg:7.005,
  lonNodeDeg:48.331,argPeriDeg:29.124,meanAnomaly0Deg:174.796,
  size:3.2,color:"#9ab0b2",
  orbitalPeriodDays:87.969,rotationPeriodHours:1407.6,radiusKm:2439.7,mass10e24kg:0.330,meanTempK:440});

add({id:"venus",name:"金星",enName:"Venus",type:"planet",parentId:"sun",orbitMode:"ellipse",
  aAU:0.723332,eccentricity:0.006772,inclinationDeg:3.394,
  lonNodeDeg:76.680,argPeriDeg:54.884,meanAnomaly0Deg:50.416,
  size:5.5,color:"#d8b27d",
  orbitalPeriodDays:224.701,rotationPeriodHours:-5832.5,radiusKm:6051.8,mass10e24kg:4.867,meanTempK:737});

add({id:"earth",name:"地球",enName:"Earth",type:"planet",parentId:"sun",orbitMode:"ellipse",
  aAU:1.000000,eccentricity:0.016708,inclinationDeg:0,
  lonNodeDeg:-11.260,argPeriDeg:114.207,meanAnomaly0Deg:357.517,
  size:5.8,color:"#4da3ff",
  orbitalPeriodDays:365.256,rotationPeriodHours:23.934,radiusKm:6378.1,mass10e24kg:5.972,meanTempK:288});

add({id:"mars",name:"火星",enName:"Mars",type:"planet",parentId:"sun",orbitMode:"ellipse",
  aAU:1.523679,eccentricity:0.093400,inclinationDeg:1.850,
  lonNodeDeg:49.558,argPeriDeg:286.502,meanAnomaly0Deg:19.373,
  size:4.0,color:"#d36b4b",
  orbitalPeriodDays:686.98,rotationPeriodHours:24.623,radiusKm:3396.2,mass10e24kg:0.642,meanTempK:210});

add({id:"jupiter",name:"木星",enName:"Jupiter",type:"planet",parentId:"sun",orbitMode:"ellipse",
  aAU:5.20260,eccentricity:0.048498,inclinationDeg:1.303,
  lonNodeDeg:100.464,argPeriDeg:273.867,meanAnomaly0Deg:20.020,
  size:13.5,color:"#d2b48c",
  orbitalPeriodDays:4332.59,rotationPeriodHours:9.925,radiusKm:71492,mass10e24kg:1898,meanTempK:120});

add({id:"saturn",name:"土星",enName:"Saturn",type:"planet",parentId:"sun",orbitMode:"ellipse",
  aAU:9.5549,eccentricity:0.055508,inclinationDeg:2.485,
  lonNodeDeg:113.665,argPeriDeg:339.392,meanAnomaly0Deg:317.020,
  size:11.5,color:"#e0c38a",
  orbitalPeriodDays:10759,rotationPeriodHours:10.656,radiusKm:60268,mass10e24kg:568,meanTempK:95});

add({id:"uranus",name:"天王星",enName:"Uranus",type:"planet",parentId:"sun",orbitMode:"ellipse",
  aAU:19.2184,eccentricity:0.046381,inclinationDeg:0.773,
  lonNodeDeg:74.006,argPeriDeg:96.998,meanAnomaly0Deg:142.238,
  size:9.5,color:"#9de3e6",
  orbitalPeriodDays:30688.5,rotationPeriodHours:-17.24,radiusKm:25559,mass10e24kg:86.8,meanTempK:60});

add({id:"neptune",name:"海王星",enName:"Neptune",type:"planet",parentId:"sun",orbitMode:"ellipse",
  aAU:30.1104,eccentricity:0.009456,inclinationDeg:1.770,
  lonNodeDeg:131.784,argPeriDeg:273.187,meanAnomaly0Deg:256.228,
  size:9.2,color:"#4b7bff",
  orbitalPeriodDays:60182,rotationPeriodHours:16.11,radiusKm:24764,mass10e24kg:102,meanTempK:55});

const plutoOmega=110.30347,plutoVarpi=224.06676,plutoL=238.92881;
add({id:"pluto",name:"冥王星",enName:"Pluto",type:"dwarf",parentId:"sun",orbitMode:"ellipse",
  aAU:39.48168677,eccentricity:0.24880766,inclinationDeg:17.14175,
  lonNodeDeg:plutoOmega,argPeriDeg:(plutoVarpi-plutoOmega),meanAnomaly0Deg:(plutoL-plutoVarpi),
  size:3.0,color:"#c7c2b0",
  orbitalPeriodDays:90560,rotationPeriodHours:-153.3,radiusKm:1188.3,mass10e24kg:0.013,meanTempK:44});

add({id:"ceres",name:"谷神星",enName:"Ceres",type:"dwarf",parentId:"sun",orbitMode:"ellipse",
  aAU:2.7675,eccentricity:0.0758,inclinationDeg:10.6,
  lonNodeDeg:80.3,argPeriDeg:73.6,meanAnomaly0Deg:95.9,
  size:2.4,color:"#b9b5a9",orbitalPeriodDays:1680,rotationPeriodHours:9.1,radiusKm:473,mass10e24kg:0.00094});

add({id:"vesta",name:"灶神星",enName:"Vesta",type:"asteroid",parentId:"sun",orbitMode:"ellipse",
  aAU:2.361,eccentricity:0.089,inclinationDeg:7.14,
  lonNodeDeg:103.85,argPeriDeg:150.99,meanAnomaly0Deg:151.2,
  size:1.8,color:"#a39b8e",orbitalPeriodDays:1325,rotationPeriodHours:5.34,radiusKm:262.7,mass10e24kg:0.00026});

add({id:"pallas",name:"智神星",enName:"Pallas",type:"asteroid",parentId:"sun",orbitMode:"ellipse",
  aAU:2.773,eccentricity:0.231,inclinationDeg:34.84,
  lonNodeDeg:173.09,argPeriDeg:310.15,meanAnomaly0Deg:42.6,
  size:1.7,color:"#9f9789",orbitalPeriodDays:1686,rotationPeriodHours:7.8,radiusKm:256,mass10e24kg:0.00021});

add({id:"hygiea",name:"健神星",enName:"Hygiea",type:"asteroid",parentId:"sun",orbitMode:"ellipse",
  aAU:3.141,eccentricity:0.117,inclinationDeg:3.84,
  lonNodeDeg:283.3,argPeriDeg:312.3,meanAnomaly0Deg:209.4,
  size:1.6,color:"#8f8a7a",orbitalPeriodDays:2030,rotationPeriodHours:13.8,radiusKm:215,mass10e24kg:0.000086});

add({id:"eris",name:"阋神星",enName:"Eris",type:"dwarf",parentId:"sun",orbitMode:"ellipse",
  aAU:67.997,eccentricity:0.43697,inclinationDeg:43.869,
  lonNodeDeg:36.027,argPeriDeg:150.728,meanAnomaly0Deg:211.457,
  size:3.1,color:"#d5d2d0",orbitalPeriodDays:557*365.25,rotationPeriodHours:25.9,radiusKm:1163,mass10e24kg:1.66});

add({id:"haumea",name:"妊神星",enName:"Haumea",type:"dwarf",parentId:"sun",orbitMode:"ellipse",
  aAU:43.13,eccentricity:0.195,inclinationDeg:28.2,
  lonNodeDeg:121.8,argPeriDeg:240.6,meanAnomaly0Deg:214.6,
  size:2.8,color:"#e6e0d8",orbitalPeriodDays:284*365.25,rotationPeriodHours:3.92,radiusKm:816,mass10e24kg:0.0040});

add({id:"makemake",name:"鸟神星",enName:"Makemake",type:"dwarf",parentId:"sun",orbitMode:"ellipse",
  aAU:45.79,eccentricity:0.159,inclinationDeg:29.0,
  lonNodeDeg:79.6,argPeriDeg:294.8,meanAnomaly0Deg:166.6,
  size:2.7,color:"#e0d0c2",orbitalPeriodDays:306*365.25,rotationPeriodHours:7.77,radiusKm:715,mass10e24kg:0.003});

add({id:"halley",name:"哈雷彗星",enName:"1P/Halley",type:"comet",parentId:"sun",orbitMode:"ellipse",
  aAU:17.8,eccentricity:0.967,inclinationDeg:162,
  lonNodeDeg:58.4,argPeriDeg:111.3,meanAnomaly0Deg:38.4,
  size:2.2,color:"#ffcf7a",orbitalPeriodDays:75.5*365.25,rotationPeriodHours:52.8,radiusKm:5.5});

add({id:"encke",name:"恩克彗星",enName:"2P/Encke",type:"comet",parentId:"sun",orbitMode:"ellipse",
  aAU:2.215,eccentricity:0.848,inclinationDeg:11.8,
  lonNodeDeg:334.6,argPeriDeg:186.5,meanAnomaly0Deg:160.0,
  size:1.6,color:"#ffe3a0",orbitalPeriodDays:3.30*365.25,rotationPeriodHours:11,radiusKm:2.4});

add({id:"tempel1",name:"坦普尔一号",enName:"9P/Tempel 1",type:"comet",parentId:"sun",orbitMode:"ellipse",
  aAU:3.12,eccentricity:0.52,inclinationDeg:10.5,
  lonNodeDeg:68.9,argPeriDeg:178.8,meanAnomaly0Deg:120.0,
  size:1.7,color:"#ffd8a0",orbitalPeriodDays:5.52*365.25,rotationPeriodHours:41,radiusKm:3});

add({id:"hale-bopp",name:"海尔-波普彗星",enName:"C/1995 O1",type:"comet",parentId:"sun",orbitMode:"ellipse",
  aAU:186.0304,eccentricity:0.9951,inclinationDeg:89.430,
  lonNodeDeg:282.471,argPeriDeg:130.589,meanAnomaly0Deg:0.0,
  size:2.5,color:"#ffe8c0",orbitalPeriodDays:2533*365.25,rotationPeriodHours:11,radiusKm:20});

add({id:"67p",name:"楚留莫夫-格拉西缅科",enName:"67P/Churyumov–Gerasimenko",type:"comet",parentId:"sun",orbitMode:"ellipse",
  aAU:3.464,eccentricity:0.640,inclinationDeg:7.0,
  lonNodeDeg:50.1,argPeriDeg:12.8,meanAnomaly0Deg:0.0,
  size:1.5,color:"#ffd0a0",orbitalPeriodDays:6.45*365.25,rotationPeriodHours:12.4,radiusKm:2.0});

add({id:"swift-tuttle",name:"斯威夫特-塔特尔",enName:"109P/Swift–Tuttle",type:"comet",parentId:"sun",orbitMode:"ellipse",
  aAU:26.1,eccentricity:0.963,inclinationDeg:113.5,
  lonNodeDeg:139.4,argPeriDeg:152.9,meanAnomaly0Deg:0.0,
  size:2.2,color:"#ffddb0",orbitalPeriodDays:133*365.25,rotationPeriodHours:15,radiusKm:13});

const moon=(id,name,enName,parentId,aAU,periodDays,e=0.02,size=1.2,tidallyLocked=true)=>{
  add({id,name,enName,type:"moon",parentId,orbitMode:e>0.12?"ellipse":"circle",
    aAU,eccentricity:e,size,color:"#b7bcc5",
    orbitalPeriodDays:periodDays,rotationPeriodHours:periodDays*24,tidallyLocked});
};
moon("moon","月球","Moon","earth",0.00257,27.32,0.055,1.6,true);
moon("phobos","火卫一","Phobos","mars",0.000063,0.319,0.015,1.0,true);
moon("deimos","火卫二","Deimos","mars",0.000157,1.263,0.0003,0.9,true);
moon("io","木卫一","Io","jupiter",0.00282,1.769,0.004,1.2,true);
moon("europa","木卫二","Europa","jupiter",0.00449,3.551,0.009,1.1,true);
moon("ganymede","木卫三","Ganymede","jupiter",0.00716,7.155,0.001,1.3,true);
moon("callisto","木卫四","Callisto","jupiter",0.0126,16.69,0.007,1.2,true);
moon("himalia","木卫六","Himalia","jupiter",0.076,250.6,0.16,0.9,true);

[
  ["mimas","土卫一","Mimas",0.00124,0.942,0.02,0.9],
  ["enceladus","土卫二","Enceladus",0.00159,1.37,0.005,0.9],
  ["tethys","土卫三","Tethys",0.00197,1.89,0.0001,0.95],
  ["dione","土卫四","Dione",0.00252,2.74,0.002,0.95],
  ["rhea","土卫五","Rhea",0.00352,4.52,0.001,1.0],
  ["titan","土卫六","Titan",0.00816,15.95,0.028,1.2],
  ["iapetus","土卫八","Iapetus",0.0236,79.3,0.028,1.0],
].forEach(m=>moon(m[0],m[1],m[2],"saturn",m[3],m[4],m[5],m[6],true));

[
  ["miranda","天卫五","Miranda",0.00086,1.41,0.001,0.7],
  ["ariel","天卫一","Ariel",0.00127,2.52,0.001,0.8],
  ["umbriel","天卫二","Umbriel",0.00178,4.14,0.003,0.8],
  ["titania","天卫三","Titania",0.00291,8.71,0.001,0.9],
  ["oberon","天卫四","Oberon",0.00389,13.46,0.001,0.9],
].forEach(m=>moon(m[0],m[1],m[2],"uranus",m[3],m[4],m[5],m[6],true));

moon("triton","海卫一","Triton","neptune",0.00237,5.88,0.00002,0.9,true);
moon("nereid","海卫二","Nereid","neptune",0.037,360.1,0.75,0.8,true);
moon("charon","冥卫一","Charon","pluto",0.00131,6.39,0.0,1.1,true);

for(let i=0;i<260;i++){
  const aAU=2.1+Math.random()*1.4;
  const e=0.02+Math.random()*0.15;
  add({id:`mba${1001+i}`,name:`主带小行星 #${1001+i}`,enName:`MBA-${1001+i}`,
    type:"asteroid",parentId:"sun",orbitMode:"ellipse",
    aAU,eccentricity:e,inclinationDeg:Math.random()*10,
    lonNodeDeg:Math.random()*360,argPeriDeg:Math.random()*360,meanAnomaly0Deg:Math.random()*360,
    size:0.65+Math.random()*0.45,color:"#777c85",
    orbitalPeriodDays:365.25*Math.sqrt(aAU*aAU*aAU),
    rotationPeriodHours:2+Math.random()*10,
    radiusKm:2+Math.random()*60});
}

  window.BODY_DEFS=BODY_DEFS;
})();

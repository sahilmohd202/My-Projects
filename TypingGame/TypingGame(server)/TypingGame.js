const http=require('http');
const server=http.createServer((request,response)=>{
     const url=request.url;
     response.setHeader('Access-Control-Allow-Origin', '*');
     response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
     response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
     const str=url.slice(url.indexOf('difficulty'),url.length);
     let text="";
     switch(str.split("=")[1].trim())
     {
          case "easy":{ text=getNextEasyText(); };break;
          case "hard":{ text=getNextHardText();  };break;
          default:{ text=getEasyText(); };
     }
     text=text.trim();
     response.end(text);
     
});
server.listen(8000);



const getNextEasyText=()=>{
       textcounter+=1;
       if(textcounter>=easytexts.length)
        textcounter=0;
       return easytexts[textcounter];
};

const getNextHardText=()=>{
       textcounter+=1;
       if(textcounter>=easytexts.length)
       textcounter=0;
     return hardtexts[textcounter];
};



let textcounter=-1;  // initially , it maintain the text line that has to be send to client.


const easytexts="The world is a vast and complex place, full of wonders and mysteries waiting to be discovered From the depths of the ocean to the farthest reaches of space, there is always something new and exciting. to learn Whether you are interested in history, science, art, or literature, there is a wealth of knowledge out there waiting to be explored But with so much information available, it can be difficult to know where to start. One way to approach learning is to focus on a specific area of interest and then gradually expand your knowledge from there. For example, if you are interested in history, you could begin by studying a particular time period or region and then gradually branch out to other areas Another approach is to take a more .interdisciplinary approach and explore how different fields intersect and relate to one another For example, you could study the intersection of art and science, or .the relationship between literature and history No matter how you choose to approach learning, the key is to stay curious and keep an open mind. With dedication and persistence, you can unlock the secrets of the world and gain a deeper understanding of the people, places, and ideas that shape our world".split('.');

// all lines have same number of words.

const hardtexts="Most of the air pollution takes place due to the incomplete burning of fossil fuels These include coal, oil, and .gasoline to produce energy for electricity or transportation The release of CO at a high level indicates how much fossil fuel is burned. This also emits other toxic pollutants like nitrogen oxides into the air Inhaling air induced with .pollutants due to the burning of natural gas and fossil fuel reduces the heart’s ability to pump enough oxygen Hence causing .one to suffer from various respiratory and heart illnesses Furthermore, the nitrogen oxides are responsible for acid rain and the formation of smog".split(".");

// all lines have same number of words.


export const getCards =()=>{
  return new Promise((resolve,reject)=>{
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", ()=>{
      console.log(this.cards) // this.responseText = to the cards:{[...]}
      resolve(this.cards);
    });
    oReq.open("GET", "/api"); //with proxy in the package.json , dont need to define location by "get"
    oReq.send();
  });
};

//postCards 
export const postCard =(addCard)=>{
  console.log('POSTCARD');
  return new Promise((resolve,reject) =>{
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function (){ // fat arrow give you the content of the parent scope, so ned to use function
      console.log('test this.card: ', JSON.parse(this.responseText)) // this.responseText = to the cards:{[...]}
      resolve(JSON.parse(this.responseText));
    });
    oReq.open("POST", "/api");
    oReq.setRequestHeader('Content-Type', 'application/json'); // need to define a header type for POST to work
    oReq.send(JSON.stringify(addCard)); // need to send data as a JSON for server to read data
  });
};
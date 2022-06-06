window.addEventListener('load', ()=>{
const sendBtn = document.querySelector('.sendBtn')
const inputName = document.querySelector('.inputName')
const messageText = document.querySelector('.messageText')
const messages = document.querySelector('.message')
const messageList = document.querySelector('.messageList')
//const inputBtn = document.querySelector('.inputBtn')

let message = {
    messageId : null,
    time : null,
    author : null,
    message : null
}

sendBtn.addEventListener('click', () =>{
    let date =  new Date();
    message.messageId = Date.now();
    message.time = date.toLocaleTimeString();
    message.author = inputName.value;
    message.message = messageText.value;
    // messages.textContent +=  message.time+ '---'+ message.author + ':' +message.message;
    
    let liFirst = document.createElement('ol');
    liFirst.innerHTML = message.time+ '---'+ message.author + ':' +message.message;
    messageList.append(liFirst);

    console.log(message);
} )
// inputBtnn.addEventListener('click', () =>{
//     console.log("ok")
// } )
})
window.addEventListener('load', ()=>{
const sendBtn = document.querySelector('.sendBtn')
const inputName = document.querySelector('.inputName')
const messageText = document.querySelector('.messageText')
const messages = document.querySelector('.message')
const messageList = document.querySelector('.messageList')
const renameBtn = document.querySelector('.renameBtn')
//const inputBtn = document.querySelector('.inputBtn')

let message = {
    messageId : null,
    time : null,
    author : null,
    message : null
}

sendBtn.addEventListener('click', () =>{
    inputName.disabled = true;
    
    let date =  new Date();
    message.messageId = Date.now();
    message.time = date.toLocaleTimeString();
    message.author = inputName.value;
    message.message = messageText.value;
    // messages.textContent +=  message.time+ '---'+ message.author + ':' +message.message;
    
    let liFirst = document.createElement('p');
    liFirst.innerHTML = '<p class=timeStyle>'+message.time+'</p>'+ '<b>'+message.author+ ': </b>' +message.message;
    messageList.append(liFirst);
    messageText.value="";
} )
renameBtn.addEventListener('click', () =>{
    inputName.disabled = false;
})
})
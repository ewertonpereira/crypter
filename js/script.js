 const btn_encode = document.getElementById('btn-encode');
 const btn_decode = document.getElementById('btn-decode');
 const massage = document.getElementById('message');
 var clear = document.getElementById('clear').hidden=false;

 
 const text = document.getElementById('text');
 
 var newText = ''

 const encode = {
     'e': 'enter',
     'i': 'imes',
     'a': 'ai',
     'o': 'ober',
     'u': 'ufat'
 };

 const decode = {
     'enter': 'e',
     'imes': 'i',
     'ai': 'a',
     'ober': 'o',
     'ufat': 'u'
 };



 btn_encode.addEventListener('click', () => {

     newText = text.value.replace(/e|i|a|o|u/g, matched => encode[matched]);
     message.textContent = newText;
     message.style.fontSize = "2em";
     document.getElementById('information').hidden=true;
     if (text.value != '') {
        clear.activade
        clear.hidden=false;
     } 
     
    
    //  console.log(text.value); 
    //  console.log(newText); 
 });

 btn_decode.addEventListener('click', () => {
     
     newText = text.value.replace(/enter|imes|ai|ober|ufat/g, matched => decode[matched]);
     message.textContent = newText;

    //  console.log(text.value); 
    //  console.log(newText); 
 });

 /* 
 
 referências
 
 replace ->  https://muhimasri.com/blogs/how-to-replace-multiple-words-and-characters-in-javascript/

 */

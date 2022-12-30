 const btn_encode = document.getElementById('btn-encode');
 const btn_decode = document.getElementById('btn-decode');
 const message = document.getElementById('message');
 const btn_copy = document.getElementById('btn-copy');
 const btn_clear = document.getElementById('btn-clear');
 const text = document.getElementById('text');
 const information = document.getElementById('information');
 
 var newText = '';
 var phase = 'Digite um texto que você deseja criptografar ou descriptografar.';

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

 btn_copy.hidden=true;
 btn_clear.hidden=true;

 function hidden () {
    information.hidden=true;
    btn_copy.hidden=false;
    btn_clear.hidden=false;
    message.style.height='75%';
    message.style.overflow='scroll';
    message.style.borderRadius='10px';
    message.style.boxShadow='-5px -7px 9px #fff inset, 5px 11px 17px -13px #000 inset';
 }

 function show () {
    information.hidden=false;
    btn_copy.hidden=true;
    btn_clear.hidden=true;
    message.textContent = phase;
    message.style.fontSize = "14px";
    message.style.height='0';
    message.style.overflow='hidden';
    message.style.borderRadius='none';
    message.style.boxShadow='none';
 }

btn_encode.addEventListener('click', () => {
    newText = text.value.replace(/e|i|a|o|u/g, matched => encode[matched]);
    message.textContent = newText;
    message.style.fontSize = "2em";
    hidden();
});

 btn_decode.addEventListener('click', () => {
     newText = text.value.replace(/enter|imes|ai|ober|ufat/g, matched => decode[matched]);
     message.textContent = newText;
     message.style.fontSize = "2em";
     hidden();
 });

 btn_copy.addEventListener('click', () => {
    navigator.clipboard.writeText(newText);
 });

 btn_clear.addEventListener('click', () => {
    text.value = '';
    show();
 })

 /* 
 
 referências
 
 replace ->  https://muhimasri.com/blogs/how-to-replace-multiple-words-and-characters-in-javascript/

 */

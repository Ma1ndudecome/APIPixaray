export default {Givestyle, deactivatedStyle, insertHtml, clearMarking}
import dirs from './dirs.js'
function Givestyle(button, spiner){
    button.style.paddingLeft = '25px';
    spiner.classList.add('loading');
}
function deactivatedStyle(button, spiner){
    button.style.paddingLeft = '10px';
    spiner.classList.remove('loading');
}
function insertHtml(marking){
    dirs.containerToAdd.insertAdjacentHTML('beforeend', marking)
}

function clearMarking(marking){
    marking.innerHTML = ''
}
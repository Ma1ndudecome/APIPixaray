import marking from './Marking.js';
import fatchs from './Api-request.js';
import dirs from './dirs.js';
import baseFunction from './baseFunction.js';
dirs.form.addEventListener('submit', Apirequest);

let page = 1;
let whatFind = '';
function Apirequest(e){
    e.preventDefault();
    baseFunction.clearMarking(dirs.containerToAdd);
    page = 1;
    baseFunction.Givestyle(e.submitter, dirs.spiner);

    page+=1;
    const inputValue = e.currentTarget.elements.input.value;
    whatFind = inputValue;
    
    fatchs(inputValue, page)
    .then(({hits})=>{
        hits.forEach(image=>{
            baseFunction.insertHtml(marking(image.largeImageURL));
        })
        baseFunction.deactivatedStyle(e.submitter, dirs.spiner);
        
       
    })
    .catch(console.log);
    dirs.buttonShowMore.classList.add('shows');
}
dirs.buttonShowMore.addEventListener('click',secondApirequest );


function secondApirequest(){
    page+=1;
    baseFunction.Givestyle(dirs.buttonShowMore, dirs.secondspiner);
    fatchs(whatFind, page) 
    .then(({hits})=>{
        hits.forEach(image=>{
            baseFunction.insertHtml(marking(image.largeImageURL));
            baseFunction.deactivatedStyle(dirs.buttonShowMore, dirs.secondspiner);
        })
    })
    .catch(console.log);
   
}
dirs.containerToAdd.addEventListener('click', deligiter)

function deligiter(e){
    if(e.target.closest('.border-image')){
       const el =  e.target.closest('.border-image')
       const somes = e.target.src
       el.addEventListener('click', (e)=>{
        functionBackdrop(somes)
       })
        return
    }
    
}
function markingmodal(imageUrl){
    return `
    <div class="backdrop">
    <div class="main-border">
    <img src="${imageUrl}" src="ErrorImage">
    </div>
    </div>
    `
}


function addBackdrop(marking){
    dirs.containerbackdrop.insertAdjacentHTML('afterbegin', marking)
}
function functionBackdrop(somes){
    addBackdrop(markingmodal(somes))
    const backdrop = document.querySelector('.backdrop');
    backdrop.addEventListener('click', ()=>{
    backdrop.classList.add('none')
    dirs.containerbackdrop.innerHTML = ''
})

}
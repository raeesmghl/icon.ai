




let popupNav = document.getElementById('popup-navmenu');

let navItems = document.querySelectorAll('#nav-items a');

function toggleFunction() {
    popupNav.classList.toggle('hidden')
} 

navItems.forEach((el)=>{
    el.addEventListener('click',()=>{
        popupNav.classList.toggle('hidden');
    })
})













const initialTranslateLTR = -20*4;
const initialTranslateRTL = 20*4;




function setupIntersectionObserver(element,isLTR,speed) {
    

    const intersectionCallback = (enteries)=>{
        const isIntersecting = enteries[0].isIntersecting;

        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler)
        }else{
            document.removeEventListener('scroll',scrollHandler)
        }

    }


    const intersectionObserver = new IntersectionObserver(intersectionCallback)


    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight = element.getBoundingClientRect().top)*speed;

        
        let totalTranslate = 0;

        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        }else{
            totalTranslate = -(translateX + initialTranslateRTL)
        }

        element.style.transform = `translateX(${totalTranslate}px)`

    }
}





const line1 = document.getElementById('companies-icons-row-1');
const line2 = document.getElementById('companies-icons-row-2');
const line3 = document.getElementById('companies-icons-row-3');


let theLine = document.getElementById('the-line');



setupIntersectionObserver(line1,true,.15);
setupIntersectionObserver(line2,false,.15);
setupIntersectionObserver(line3,true,.15);
setupIntersectionObserver(theLine,true,.5);


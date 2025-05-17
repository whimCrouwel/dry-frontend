import {animate} from "animejs"

export function toggleScrollLock(){
    if(document.body.style.overflow === "hidden"){
        document.body.style.overflow = "visible"
    }else{
        document.body.style.overflow = "hidden"
    }
}


export function onScrollTriggerOnce(
    target: HTMLElement,
    offset: number,
    callback: () => void
) {
    let runOnce = false;
    
    function onScroll() {
        if (runOnce) return; // move this inside to avoid early return on setup

        const targetTop = target.getBoundingClientRect().top + window.scrollY + offset;
        const screenBottom = window.scrollY + window.innerHeight;

        if (screenBottom >= targetTop) {
            callback();
            runOnce = true;
            window.removeEventListener('scroll', onScroll);
        }
    }

    window.addEventListener('scroll', onScroll);
}

export function scrollToTarget(target: HTMLElement){
    const targetY = target.getBoundingClientRect().top + window.scrollY

    animate(document.scrollingElement || document.documentElement, {
        scrollTop: targetY,
        duration: 800,
        easing: "easeInOutQuad" // correct easing name
    })
}

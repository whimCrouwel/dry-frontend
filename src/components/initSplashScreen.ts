import {animate, AnimationParams} from "animejs"

type AnimationType = "fade" | "shrink" | "left" | "up"
type AnimationMap = {
    [key in AnimationType]: AnimationParams
}

export function initSplashScreen(
    animationType: AnimationType = "fade",
    bgColor: string = "#fff",
    duration: number = 500
){
    const screen = document.querySelector('[data-component="splash-screen"]') as HTMLElement
    if(!screen){
        console.log('[data-component="splash-screen"] is missing for makeSplashScreen.');
        return
    }


    screen.setAttribute('style', `
        position: fixed;
        top:0;right:0;bottom:0;left:0;
        z-index: 9999;
        display:flex;
        justify-content: center;
        align-items: center;
        background: ${bgColor};
    `)

    const animations: AnimationMap = {
        "fade": {
            opacity: 0,
            delay: 1000,
            ease: "inOutCubic"
        },
        "shrink": {
            scale: 0,
            delay: 1000,
            ease: "inOutCubic",
        },
        "up": {
            bottom: "100%",
            top: "-100%",
            delay: 1000
        },
        "left": {
            right: "100%",
            left: "-100%",
            delay: 1000
        }
    }

    //animate, animation type
    animate(screen, {
        ...animations[animationType],
        duration,
        onComplete: () => screen.remove()
    }) 
}
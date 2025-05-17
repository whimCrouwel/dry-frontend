import { animate } from "animejs"

export function parallax(
    target: HTMLElement,
    parallaxStrength: number = 0.05
){
    let currentY = 0
    updateParallax()

    function updateParallax(){
        const scrollY = window.scrollY
        const targetY = scrollY * parallaxStrength * -1

        //smooth interplation
        currentY += (targetY - currentY) * 0.1

        animate(target, {
            translateY: currentY,
            duration: 0
        })
        requestAnimationFrame(updateParallax)
    }
}
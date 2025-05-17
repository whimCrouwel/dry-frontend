import { animate } from "animejs";

export function bob(
    target:HTMLElement,
    bobValue:number = 10,
    bobDuration: number= 1500
){
    animate(target, {
        translateY: [0, bobValue],
        loop: true,
        duration: bobDuration,
        ease: "inOutSine",
        alternate: true
    })
}
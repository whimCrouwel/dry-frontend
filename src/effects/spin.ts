import { animate } from "animejs"
export function spin(
    target:HTMLElement,
    spinDuration: number = 5000,
    direction: "left" | "right" = "right"
){
    animate(target, {
        rotate: direction === "right" ? "360deg" : "-360deg",
        loop: true,
        duration: spinDuration,
        ease: "linear"
    })
}
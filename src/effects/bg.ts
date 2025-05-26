import { animate } from "animejs"
import { onScrollTriggerOnce } from "../functions"
import { createElm } from "../utils"

export function scaleBgImageOnScroll(){
    const targets = document.querySelectorAll('[data-effect="scale-bg-image"]')
    
    if(!targets.length) return
    targets.forEach((target:HTMLElement) => {

        const parent = target.parentElement
        console.log(parent)

        const container = createElm("div", {
            styles: {
                display: "block",
                overflow: "hidden",
                position: "relative"
            },
        })

        target.setAttribute("style", `
            width: 100%;
            height: 100%;
            object-fit: cover;
        `)

        parent.insertBefore(container, target)
        container.appendChild(target)
        
        onScrollTriggerOnce(target, 100, () => {
        
        })
    })
}
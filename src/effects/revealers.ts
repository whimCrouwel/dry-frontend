import {animate} from "animejs"
import { createElm } from "../utils"
import { onScrollTriggerOnce } from "../functions"

export function createBoxRevealer(
    direction: "left" | "right" = "left"
){
    const targets = document.querySelectorAll<HTMLElement>(".dry-revealer.box")
    targets.forEach(container => {
        const imgSrc = container.dataset['img-src']
        const maskColor = container.dataset['mask-color'] ?? "#fff"

        if(!imgSrc) throw new Error("data-img-src is required by crateBoxRevealer.")
        
        //1. Setup HTML
        container.setAttribute("style", "position: relative;")
        const mask = createElm("div", {
            styles: {
                backgroundColor: maskColor,
                position: "absolute",
                transformOrigin: `${direction} center`,
                top: "0", right: "0", bottom: "0", left: "0",
                zIndex: "2"
            } 
        })

        const img = createElm("img", {
            attributes: {
                src: imgSrc
            },
            styles: {
                display: "block",
                width: "100%",
                position: "relative",
                zIndex: "1"
            }
        })
        container.append(mask)
        container.append(img)

        //2. Reveal
        onScrollTriggerOnce(container, 100, () => {
            animate(mask, {
                scaleX: [1, 0],
                duration: 1000,
                easing: "easeInOutCubic"
            })
        })

    })
}


import { animate, stagger, Timeline } from "animejs"


export function revealChars(
    target: HTMLElement,
    trigger: (startAnimation: () => void) => void,
    staggerValue: number = 50,
    duration: number = 500
){
    //wrap all except br tag by span
    Array.from(target.childNodes).forEach(node => {
        if (node.nodeType === 3 && node.textContent.trim() !== '') {
            const chars = node.textContent.split('');
            const fragment = document.createDocumentFragment();
        
            chars.forEach(char => {
                const span = document.createElement('span');
                span.textContent = char;
                fragment.appendChild(span);
            });
        
            target.insertBefore(fragment, node);
            target.removeChild(node);
        }
    });

    const tl = new Timeline({autoplay: true, duration: 3000})
    const spans = target.querySelectorAll('span')
    tl.set(spans, {opacity: 0})

    trigger(() => {
        tl.add(spans, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: duration,
            delay: stagger(staggerValue)
        })
    })
}



export function initHorizontalTextSlide() {
    const targets = document.querySelectorAll('[data-effect="horizontalTextSlide"]');
    if (!targets.length) return;

    targets.forEach((target: HTMLElement) => {
        const inner = target.firstElementChild;
        const direction = target.dataset['direction'] ?? "right";
        const fontSize = target.dataset['font-size'] ?? "4rem";
        const duration = Number(target.dataset['duration'] ?? "10000");

        if (!inner) return;

        target.setAttribute('style', `
        display: block;
        width: 100%;
        overflow: hidden;
        font-size: ${fontSize};
        `);
        inner.setAttribute('style', `
        display: inline-block;
        white-space: nowrap;
        `);

        // Duplicate until it covers twice the parent width
        while (inner.scrollWidth < target.offsetWidth * 2) {
            inner.innerHTML += " " + inner.innerHTML;
        }

        const singleWidth = inner.scrollWidth / 2;

        animate(inner, {
            translateX: direction === "left" ? [0, -singleWidth] : [-singleWidth, 0],
            duration,
            loop: true,
            ease: "linear"
        });
    });
}
  





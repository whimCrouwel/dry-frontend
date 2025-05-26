import { createElm } from "../utils"
/**
 * Replaces an existing placeholder element (with data-component="hamburger")
 * with a functional hamburger button, and attaches a click callback.
 *
 * @param onClick - The function to run when the hamburger is clicked. Receives the button element.
 */
export function makeHamburger(
    onClick: (button: HTMLButtonElement) => void,
) {
    const hamburger = document.querySelector('[data-component="hamburger"]') as HTMLElement;
    if (!hamburger) {
        console.log('[data-component="hamburger"] is missing for makeHamburger.');
        return;
    }
    const bgColor = hamburger.dataset.bg || "#fff";
    const barColor = hamburger.dataset.barColor || "#000";
    const containerRadius = hamburger.dataset.radius || "0px";
    const containerWidth = hamburger.dataset.width || "fit-content";
    const containerHeight = hamburger.dataset.height || "auto";
    const barWidth = hamburger.dataset.barWidth || "40px";
    const barHeight = hamburger.dataset.barHeight || "2px";
    const barMargin = hamburger.dataset.barMargin || "6px";
    
    // Calculate the exact distance between bar centers
    // In a flex column with margins, the distance between centers is:
    // margin + barHeight + margin = 2 * margin + barHeight
    const barSpacing = 2 * parseFloat(barMargin) + parseFloat(barHeight);
    
    const commonBarStyle = {
        display: "block",
        width: barWidth,
        height: barHeight,
        background: barColor,
        margin: `${parseFloat(barMargin)}px 0`, // Explicit top/bottom margins only
        transition: "0.3s",
        transformOrigin: "center",
    };
    const bar1 = createElm('div', { styles: { ...commonBarStyle } });
    const bar2 = createElm('div', { styles: { ...commonBarStyle } });
    const bar3 = createElm('div', { styles: { ...commonBarStyle } });
    const bars = createElm('div', {
        styles: {
            height: containerHeight,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
        },
        children: [bar1, bar2, bar3]
    });
    const button = createElm('div', {
        styles: {
            backgroundColor: bgColor,
            width: containerWidth,
            borderRadius: containerRadius,
        },
        children: [bars]
    }) as HTMLButtonElement;
    button.classList.add("closed");
    
    // Define styles for toggle
    const applyOpenStyle = () => {
        bar1.style.transform = `translateY(${barSpacing}px) rotate(45deg)`;
        bar2.style.opacity = "0";
        bar3.style.transform = `translateY(-${barSpacing}px) rotate(-45deg)`;
    };
    const applyClosedStyle = () => {
        bar1.style.transform = "none";
        bar2.style.opacity = "1";
        bar3.style.transform = "none";
    };
    button.addEventListener('click', () => {
        const isClosed = button.classList.contains("closed");
        button.classList.toggle("closed");
        button.classList.toggle("open");
        if (isClosed) {
            applyOpenStyle();
        } else {
            applyClosedStyle();
        }
        onClick(button);
    });
    hamburger.replaceWith(button);
}
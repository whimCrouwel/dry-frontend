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
    const hamburger = document.querySelector('[data-component="hamburger"]');

    if (!hamburger) {
        console.log('[data-component="hamburger"] is missing for makeHamburger.');
        return;
    }

    const commonBarStyle = {
        display: "block",
        height: "2px",
        background: "black",
        transition: "0.3s"
    }

    const bars = createElm('div', {
        styles: {
            width: "40px",
            height: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer"
        },
        children: [
            createElm('div', {
                styles: {
                    ...commonBarStyle
                }
            }),
            createElm('div', {
                styles: {
                    ...commonBarStyle     
                }
            }),
            createElm('div', {
                styles: {
                    ...commonBarStyle
                }
            })
        ]
    });

    const button = createElm('div', {
        styles: {
            padding: "4px 8px",
            backgroundColor: "white",
            width: "fit-content"
        },
        children: [bars]
    }) as HTMLButtonElement;

    hamburger.replaceWith(button);

    button.addEventListener('click', () => {
        onClick(button);
        //toggleClass?
    });
}

/**
 * Creates an HTML element with optional class, text, attributes, styles, and children.
 *
 * @param tag - The HTML tag name to create.
 * @param options - Optional settings: className, textContent, attributes, styles, children.
 * @returns The created HTMLElement.
 *
 * @example
 * const div = createElm('div', {
 *   className: 'box',
 *   textContent: 'Hello!',
 *   attributes: { id: 'myDiv' },
 *   styles: { backgroundColor: 'yellow' },
 *   children: [child1, child2]
 * });
 */
export function createElm(
    tag: string,
    options?: {
        className?: string;
        textContent?: string;
        attributes?: Record<string, string>;
        styles?: Partial<CSSStyleDeclaration>;
        children?: HTMLElement[];
    }
): HTMLElement {
    const el = document.createElement(tag);

    if (options?.className) el.className = options.className;
    if (options?.textContent) el.textContent = options.textContent;

    if (options?.attributes) {
        for (const [key, value] of Object.entries(options.attributes)) {
            el.setAttribute(key, value);
        }
    }

    if (options?.styles) {
        Object.assign(el.style, options.styles);
    }

    if (options?.children) {
        el.append(...options.children);
    }

    return el;
}

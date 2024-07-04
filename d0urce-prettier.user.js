// ==UserScript==
// @name         prettier-d0urce
// @version      1.6.4
// @description  Get a prettier s0urce.io environment! Template made by Xen0o2.
// @author       d0t
// @match        https://s0urce.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=s0urce.io
// @downloadURL  https://raw.githubusercontent.com/d0t3k1/d0t-s0urce-prettier/main/d0urce-prettier.js
// @updateURL    https://raw.githubusercontent.com/d0t3k1/d0t-s0urce-prettier/main/d0urce-prettier.js
// @grant        none
// ==/UserScript==

const VERSION = "1.6.4"

const themes = {
    "No Theme": ":root{--color-terminal:#85ff49;--color-darkgreen:#85ff492f} .window:has(img[src='icons/terminal.svg']){border-color: #85ff49} #section-code{background: linear-gradient(180deg, #000000 3%, #85ff4940 123%)} #themes{border: 1px solid #85ff49} .target-bar{outline: 1px solid #85ff49 !important}",
    "Atom One": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#b270ff;}.hljs-comment,.hljs-quote{color:#b270ff;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#b270ff}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#b270ff}.hljs-literal{color:#b270ff}.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#b270ff}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#b270ff}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#b270ff}.hljs-built_in,.hljs-class .hljs-title,.hljs-title.class_{color:#b270ff}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}:root{--color-terminal:#b270ff;--color-darkgreen:#b270ff2f} .window:has(img[src='icons/terminal.svg']){border-color: #b270ff} #section-code{background: linear-gradient(180deg, #000000 3%, #b270ff40 123%)} #themes{border: 1px solid #b270ff} .target-bar{outline: 1px solid #b270ff !important}",
    "Monokai": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#ff3838}.hljs-subst,.hljs-tag{color:#ff3838}.hljs-emphasis,.hljs-strong{color:#ff3838}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ff3838}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#ff3838}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#ff3838}.hljs-attribute,.hljs-symbol{color:#ff3838}.hljs-class .hljs-title,.hljs-params,.hljs-title.class_{color:#ff3838}.hljs-addition,.hljs-built_in,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#ff3838}.hljs-comment,.hljs-deletion,.hljs-meta{color:#ff3838}:root{--color-terminal:#ff3838;--color-darkgreen:#ff38382f} .window:has(img[src='icons/terminal.svg']){border-color: #ff3838} #section-code{background: linear-gradient(180deg, #000000 3%, #ff383840 123%)} #themes{border: 1px solid #ff3838} .target-bar{outline: 1px solid #ff3838 !important}",
    "The Deep": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#3d8566}.hljs-keyword{color:#3d8566;font-style:italic}.hljs-built_in{color:#3d8566;font-style:italic}.hljs-type{color:#3d8566}.hljs-literal{color:#3d8566}.hljs-number{color:#3d8566}.hljs-regexp{color:#3d8566}.hljs-string{color:#3d8566}.hljs-subst{color:#3d8566}.hljs-symbol{color:#3d8566}.hljs-class{color:#3d8566}.hljs-function{color:#3d8566}.hljs-title{color:#3d8566;font-style:italic}.hljs-params{color:#3d8566}.hljs-comment{color:#3d8566;font-style:italic}.hljs-doctag{color:#3d8566}.hljs-meta,.hljs-meta .hljs-keyword{color:#3d8566}.hljs-meta .hljs-string{color:#3d8566}.hljs-section{color:#3d8566}.hljs-attr,.hljs-name,.hljs-tag{color:#3d8566}.hljs-attribute{color:#3d8566}.hljs-variable{color:#3d8566}.hljs-bullet{color:#3d8566}.hljs-code{color:#3d8566}.hljs-emphasis{color:#3d8566;font-style:italic}.hljs-strong{color:#3d8566;font-weight:700}.hljs-formula{color:#3d8566}.hljs-link{color:#3d8566}.hljs-quote{color:#3d8566;font-style:italic}.hljs-selector-tag{color:#3d8566}.hljs-selector-id{color:#3d8566}.hljs-selector-class{color:#3d8566;font-style:italic}.hljs-selector-attr,.hljs-selector-pseudo{color:#3d8566;font-style:italic}.hljs-template-tag{color:#3d8566}.hljs-template-variable{color:#3d8566}.hljs-addition{color:#3d8566;font-style:italic}.hljs-deletion{color:#3d8566;font-style:italic}:root{--color-terminal:#3d8566;--color-darkgreen:#3d85662f} .window:has(img[src='icons/terminal.svg']){border-color: #3d8566} #section-code{background: linear-gradient(180deg, #000000 3%, #3d856640 123%)} #themes{border: 1px solid #3d8566} .target-bar{outline: 1px solid #3d8566 !important}",
    "Light Mode": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#ffffff}.hljs-keyword{color:#ffffff;font-style:italic}.hljs-built_in{color:#ffffff;font-style:italic}.hljs-type{color:#ffffff}.hljs-literal{color:#ffffff}.hljs-number{color:#ffffff}.hljs-regexp{color:#ffffff}.hljs-string{color:#ffffff}.hljs-subst{color:#ffffff}.hljs-symbol{color:#ffffff}.hljs-class{color:#ffffff}.hljs-function{color:#ffffff}.hljs-title{color:#ffffff;font-style:italic}.hljs-params{color:#ffffff}.hljs-comment{color:#ffffff;font-style:italic}.hljs-doctag{color:#ffffff}.hljs-meta,.hljs-meta .hljs-keyword{color:#ffffff}.hljs-meta .hljs-string{color:#ffffff}.hljs-section{color:#ffffff}.hljs-attr,.hljs-name,.hljs-tag{color:#ffffff}.hljs-attribute{color:#ffffff}.hljs-variable{color:#ffffff}.hljs-bullet{color:#ffffff}.hljs-code{color:#ffffff}.hljs-emphasis{color:#ffffff;font-style:italic}.hljs-strong{color:#ffffff;font-weight:700}.hljs-formula{color:#c792ea}.hljs-link{color:#ffffff}.hljs-quote{color:#ffffff;font-style:italic}.hljs-selector-tag{color:#ffffff}.hljs-selector-id{color:#ffffff}.hljs-selector-class{color:#ffffff;font-style:italic}.hljs-selector-attr,.hljs-selector-pseudo{color:#ffffff;font-style:italic}.hljs-template-tag{color:#ffffff}.hljs-template-variable{color:#ffffff}.hljs-addition{color:#ffffff;font-style:italic}.hljs-deletion{color:#ffffff;font-style:italic}:root{--color-terminal:#ffffff;--color-darkgreen:#ffffff2f} .window:has(img[src='icons/terminal.svg']){border-color: #ffffff} #section-code{background: linear-gradient(180deg, #000000 3%, #ffffff40 123%)} #themes{border: 1px solid #ffffff} .target-bar{outline: 1px solid #ffffff !important}",
    "Mythic Myer": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#05a8ff;}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#05a8ff}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#05a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#05a8ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#05a8ff}.hljs-built_in,.hljs-symbol{color:#05a8ff}.hljs-code,.hljs-comment,.hljs-formula{color:#05a8ff}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#05a8ff}.hljs-subst{color:#05a8ff}.hljs-section{color:#05a8ff;font-weight:700}.hljs-bullet{color:#05a8ff}.hljs-emphasis{color:#05a8ff;font-style:italic}.hljs-strong{color:#05a8ff;font-weight:700}.hljs-addition{color:#05a8ff;background-color:#05a8ff}.hljs-deletion{color:#05a8ff;background-color:#05a8ff}:root{--color-terminal:#05a8ff;--color-darkgreen:#05a8ff2f} .window:has(img[src='icons/terminal.svg']){border-color: #05a8ff} #section-code{background: linear-gradient(180deg, #000000 3%, #05a8ff40 123%)} #themes{border: 1px solid #05a8ff} .target-bar{outline: 1px solid #05a8ff !important}",
    "Ethereal Enjoyer": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#ffb74e}.hljs-subst,.hljs-tag{color:#ffb74e}.hljs-emphasis,.hljs-strong{color:#ffb74e}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ffb74e}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#ffb74e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#ffb74e}.hljs-attribute,.hljs-symbol{color:#ffb74e}.hljs-class .hljs-title,.hljs-params,.hljs-title.class_{color:#ffb74e}.hljs-addition,.hljs-built_in,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#ffb74e}.hljs-comment,.hljs-deletion,.hljs-meta{color:#ffb74e}:root{--color-terminal:#ffb74e;--color-darkgreen:#ffb74e2f} .window:has(img[src='icons/terminal.svg']){border-color: #ffb74e} #section-code{background: linear-gradient(180deg, #000000 3%, #ffb74e40 123%)} #themes{border: 1px solid #ffb74e} .target-bar{outline: 1px solid #ffb74e !important}:root{--color-terminal:#ffb74e;--color-darkgreen:#ffb74e2f} .window:has(img[src='icons/terminal.svg']){border-color: #ffb74e} #section-code{background: linear-gradient(180deg, #000000 3%, #ffb74e40 123%)} #themes{border: 1px solid #ffb74e} .target-bar{outline: 1px solid #ffb74e !important}",
}

class Component {
	prepend;
	element;
	constructor(type, options) {
		this.prepend = options.prepend;
		const element = document.createElement(type);
		if (options.classList)
			element.classList.add(...options.classList);
		
		for (let attribute of Object.keys(options.style || {}))
			element.style[attribute] = options.style[attribute];

		if (options.id)
			element.id = options.id;
		if (options.src)
			element.src = options.src;
		if (options.type)
			element.type = options.type;
		if (options.innerText)
			element.innerText = options.innerText
		if (options.innerHTML)
			element.innerHTML = options.innerHTML;
		if (options.placeholder)
			element.placeholder = options.placeholder;
		if (options.value)
			element.value = options.value;
		if (options.onclick)
			element.onclick = options.onclick;
		if (options.onchange)
			element.onchange = options.onchange;
		if (options.selected)
			element.selected = options.selected;
		if (options.onfocusout)
			element.onfocusout = options.onfocusout;
		if (options.onblur)
			element.onblur = options.onblur;
		if (options.onmouseenter)
			element.onmouseenter = options.onmouseenter;
		if (options.onmouseleave)
			element.onmouseleave = options.onmouseleave;

		options.children?.forEach(child => {
			child.prepend ? element.prepend(child.element) : element.append(child.element)
		})
		this.element = element;
		return this;
	}
}

const removeContextMenu = (removeSelection) => {
    document.querySelector(".context-menu-container")?.remove();
    const selectedItem = document.querySelectorAll(".item-selected")
    selectedItem.forEach(item => {
        item.style.outline = null;
        item.classList.remove("item-selected")
    })
    if (removeSelection)
        player.selectedItems = [];
}

class Popup {
    #popup;
    #dimensions = {
        width: 150,
        height: 0,
    }
    #pointer;
    constructor (pointer) {
        this.#pointer = pointer;
        const popup = new Component("div", {
            classList: ["context-menu", "context-menu-container"],
            style: {
                position: "absolute", width: `${this.#dimensions.width}px`,
                backgroundColor: "#000000E6", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "5px", zIndex: "1000", padding: "5px",
                boxShadow: "5px 5px 15px 5px #000000",
                border: "1px solid #ffffff66"
            },
            children: [
                new Component("div", {
                    classList: ["context-menu", "context-menu-title"],
                    style: { color: "var(--color-lightgrey)", padding: "7px", order: 1, fontSize: "10px", borderTop: "1px solid var(--color-lightgrey)", display: "none" }
                })
            ]
        })
        this.#popup = popup.element;
        return this;
    }

    #getPosition = (pointer, dimensions) => {
        const finalPosition = {...pointer};
        const windowDimensions = { height: document.body.clientHeight, width: document.body.clientWidth };
        
        if (pointer.clientY > windowDimensions.height - (dimensions.height + 20))
            finalPosition.clientY -= (dimensions.height + 10);
        else
            finalPosition.clientY += 10;
        if (pointer.clientX > windowDimensions.width - (dimensions.width + 20))
            finalPosition.clientX -= (dimensions.width + 10);
        else
            finalPosition.clientX += 10;
        return finalPosition;
    }

    setTitle(text) {
        this.#popup.querySelector(".context-menu-title").innerText = text;
        this.#popup.querySelector(".context-menu-title").style.display = "flex";
    }

    addAction(text, action, option = {isDangerous: false, selectionLimit: 0}) {
        const component = new Component("div", {
            classList: [
                "context-menu",
                "context-menu-option",
                "context-menu-option-" + (this.#dimensions.height / 40 + 1),
                "context-menu-option-limit-" + option.selectionLimit,
            ],
            innerText: text,
            style: { width: "100%", borderRadius: "4px", padding: "5px", cursor: "pointer", color: option.isDangerous ? "var(--color-red)" : "white" },
            onmouseenter: (e) => e.target.style.backgroundColor = "#5be22e66",
            onmouseleave: (e) => e.target.style.backgroundColor = "unset",
            onclick: async () => {
                removeContextMenu();
                if (action)
                    await action();
                player.selectedItems = [];
            },
        })
        this.#popup.appendChild(component.element);
        this.#dimensions.height += 40;
        return this;
    }

    create() {
        const position = this.#getPosition(this.#pointer, this.#dimensions);
        this.#popup.style.top = `${position.clientY}px`;
        this.#popup.style.left = `${position.clientX}px`,
        document.body.appendChild(this.#popup);
    }
}

const windowNames = [
    "Filament",
    "Inventory",
    "Item Seller",
    "Computer",
]

const lootRarity = [
    { name: "common",    color: "linear-gradient(211deg, #585d66 0%, #7d848f 100%)" },
    { name: "uncommon",  color: "linear-gradient(211deg, #007c37 0%, #83b200 100%)" },
    { name: "rare",      color: "linear-gradient(211deg, #00427c 0%, #0092ed 100%)" },
    { name: "epic",      color: "linear-gradient(211deg, #5c045a 0%, #a90052 100%)" },
    { name: "legendary", color: "linear-gradient(112deg, #a95300 4%, #ff9605 34%, #a95300 66%, #ff9605 100%)" },
    { name: "mythic",    color: "linear-gradient(112deg, #40f5ff 4%, #05a8ff 34%, #40f5ff 66%, #05a8ff 100%)" },
    { name: "ethereal",    color: "linear-gradient(112deg, #ffb74e 4%, #ffe6a2 34%, #ffb74e 66%, #ffe6a2 100%)" },
];

const raritiesVariables = {
    "var(--color-SSS)": "ethereal",
    "var(--color-SS)": "mythic",
    "var(--color-S)" : "legendary",
    "var(--color-A)" : "epic",
    "var(--color-B)" : "rare",
    "var(--color-C)" : "uncommon",
    "var(--color-D)" : "common"
}

const lootButtons = {
    "take" : "button > img[src='icons/inventory.svg']",
    "sell" : "button > img[src='icons/btc.svg']",
    "shred": "button > img[src='icons/filament.svg']"
}

const player = {
    username: document.querySelector("img[src='icons/online.svg']")?.parentNode?.innerText?.trim(),
    hacksInProgress: [],
    currentlyHacking: null,
    lastHacked: null,
    configuration: {
        openInSilent: [],
        displayCustomFilament: "ethereal",
        currentTheme: localStorage.getItem("prettier-currentTheme") || Object.keys(themes)[0],
        codeSyntaxing: !!localStorage.getItem("prettier-codeSyntaxing")
    },
    input: {
        isShiftDown: false,
    },
    selectedItems: [],
    autoloot: localStorage.getItem("prettier-autoloot") ? 
        JSON.parse(localStorage.getItem("prettier-autoloot")) :
        {
            common: "take",
            uncommon: "take",
            rare: "take",
            epic: "take",
            legendary: "take",
            mythic: "take",
        },
}

const stats = {
	cpu: [
        { hack: [8, 18], trueDam: [0, 0], pen: [0, 0], chance: [0, 0], dam: [0, 0] },
        { hack: [18.5, 33.5], trueDam: [0, 10], pen: [0, 5], chance: [0, 2.5], dam: [1, 5] },
        { hack: [34, 54], trueDam: [0, 20], pen: [0, 15], chance: [2.5, 3.25], dam: [5, 7.5] },
        { hack: [55, 64.25], trueDam: [0, 30], pen: [0, 20], chance: [4, 6.25], dam: [8.25, 15] },
        { hack: [68.75, 84.75], trueDam: [0, 40], pen: [13, 25], chance: [6.5, 7.5], dam: [17, 25] },
        { hack: [91, 105], trueDam: [43, 50], pen: [19.5, 30], chance: [8.25, 10], dam: [19.5, 30] },
        { hack: [125.5,135.5], trueDam: [55,60], pen: [32.5,35], chance: [11.25,12.5], dam: [32.5,35] }
    ],
	firewall: [
        { hp: [22,62], rd: [0,0], regen: [0,0], medium: [0,0], long: [0,0] },
        { hp: [64,114], rd: [0,7.5], regen: [0,2.5], medium: [0,0], long: [0,0] },
        { hp: [116,166], rd: [0,10], regen: [0,5], medium: [0,30], long: [0,0] },
        { hp: [172,217], rd: [0,12.5], regen: [0,7.5], medium: [22,40], long: [0,25] },
        { hp: [234,269], rd: [0,15], regen: [8,10], medium: [34,0], long: [22,30] },
        { hp: [285,320], rd: [11.5,15], regen: [10.75,12.5], medium: [65,47.5], long: [28,35] },
        { hp: [372,397], rd: [16.25,17.5], regen: [13.75,15], medium: [80,70], long: [37.5,45] }
    ],
	gpu: [
        { idle: [0.000010,0.000014], bart: [0,0], crip: [0,0], },
        { idle: [0.000011,0.000024], bart: [0,10], crip: [2.5,10], },
        { idle: [0.000016,0.000033], bart: [0,12.5], crip: [2.5,12.5], },
        { idle: [0.0000223,0.000043], bart: [0,15], crip: [6,15], },
        { idle: [0.0000348,0.000054], bart: [0,20], crip: [10,20], },
        { idle: [0.0000516,0.000074], bart: [16.25,25], crip: [16.25,25], },
        { idle: [0.000077,0.000094], bart: [22.5,30], crip: [22.5,30], }
    ],
    psu: [
        { boost: [1, 5], },
        { boost: [5, 10], },
        { boost: [10, 15], },
        { boost: [16, 25], },
        { boost: [27, 35], },
        { boost: [36.5, 40], },
        { boost: [50, 55], },
    ],	
	port: [
		{ hp: 1000+3*60, rd: 0 },
		{ hp: 1000+3*114, rd: 3*0.075 },
		{ hp: 1000+3*166, rd: 3*0.1 },
		{ hp: 1000+3*217, rd: 3*0.125 },
		{ hp: 1000+3*269, rd: 3*0.15 },
		{ hp: 1000+3*320, rd: 3*0.15 },
        { hp: 1000+3*397, rd: 3*0.175}
    ],
    cputerm: [
        3, 3.5, 4, 4.25, 4.75, 5, 5.5
    ],
	fireterm: [
	    12, 14, 16, 17, 19, 20, 22
    ],
	gpu_term: [
	    0.0000042*0.6, 0.0000042*0.7, 0.0000042*0.8, 0.0000042*0.85, 0.0000042*0.95, 0.0000042, 0.0000042*1.1
    ],
	psu_term: [
    	1.2, 1.4, 1.6, 1.7, 1.9, 2, 2.2
    ],
    // Last updated as of 7/4/2024
    filament_price: [
        0.01, 0.03, 0.1, 0.3, 1.5, 4.5, 67.5
    ],
};

(function() {
    'use strict';

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const editProgressBar = () => {
        const progressBar = (document.querySelectorAll(".topbar-value") || [])[2]
        if (!progressBar)
            return;
        progressBar.style.resize = "horizontal";
    }

    const prettierLoadFails = (code) => {
        alert(`Prettier-s0urce loading failed, please contact Xen0o2 on Discord (error code: ${code})`);
    }

    const sendLog = async (HTMLContent) => {
        const wrapper = document.querySelector("#wrapper.svelte-182ewru");
        if (!wrapper)
            return;

        const message = new Component("div", {
            innerHTML: HTMLContent,
            style: { padding: "5px 0" },
            classList: ["message"],
        })

        const separator = new Component("div", {
            style: { margin: "10px 0" },
            classList: ["line", "svelte-182ewru"]
        })
        
        wrapper.append(message.element);
        wrapper.append(separator.element);
        await sleep(100);
        wrapper.scrollTop = wrapper.scrollHeight;
    }
    
    const manageMessagesToDelete = (message) => {
        const deleteSample = [
            "Hack successful",
            "to reach level",
            "earned",
        ]
        if (deleteSample.some(sample => message.innerText.includes(sample)))
            message.remove();
    }

    const colorizeTerminal = async () => {
        const codeElement = document.querySelector("#code-list");
        const codeSection = document.querySelector("#section-code");
        if (!codeElement || !codeSection) return;
        document.querySelector("#highlighted")?.remove();

        codeElement.style.display = "none";
        const codeContent = codeElement.innerHTML
            .replace(/<br(\/)?>/g, "\n")
            .replace(/<span style="margin-left: 30px;">/g, "\t");

        const highlighted = new Component("pre", {
            id: "highlighted",
            children: [
                new Component("code", {
                    innerHTML: codeContent,
                    classList: ["language-python"],
                    style: { tabSize: "30px" }
                })
            ]
        })
        codeSection.appendChild(highlighted.element);
        hljs.highlightAll();
        await sleep(100);
        codeSection.scrollTop = codeSection.scrollHeight;
    }

    const customTerminal = () => {
        const wrapper = document.querySelector("#section-target > div");
        if (!wrapper) return;

        const component = new Component("div", {
            classList: ["svelte-1fdvo7g"],
            style: { height: "30px", width: "59%", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" },
            children: [
                new Component("span", {
                    innerText: "Theme",
                }),
                new Component("div", {
                    id: "themes",
                    style: { textAlign: "left", position: "relative", height: "100%", width: "200px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid var(--color-terminal)", borderRadius: "2px", fontFamily: "var(--font-family-2)", color: "var(--color-terminal)", fontWeight: 500 },
                    children: [
                        new Component("div", {
                            style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "85%" },
                            children: [
                                new Component("span", {
                                    id: "selected-theme",
                                    innerText: player.configuration.currentTheme,
                                }),
                                new Component("img", {
                                    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png",
                                    style: { height: "10px", opacity: "0.8" }
                                }),
                            ]
                        }),
                        new Component("select", {
                            style: { position: "absolute", left: 0, height: "100%", width: "100%", opacity: "0" },
                            onchange: (e) => {
                                player.configuration.currentTheme = e.target.value;
                                localStorage.setItem("prettier-currentTheme", e.target.value);
                                document.querySelector("#selected-theme").innerText = e.target.value;
                                updateThemeStyle();
                            },
                            children: Object.keys(themes).map(theme => {
                                return new Component("option", {
                                    value: theme,
                                    innerText: theme,
                                    selected: theme === player.configuration.currentTheme
                                })
                            })
                        })
                    ]
                })
            ]
        })
        wrapper.appendChild(component.element);
    }
    
    const counterHack = (hackInProgress) => {
        hackInProgress.footer?.remove();
        const terminalProgressBar = document.querySelector(".target-bar-progress");
        const wrapper = document.querySelector("#wrapper.svelte-182ewru");
        if (!terminalProgressBar || !wrapper)
            return;

        const counterLabel = new Component("span", {
            innerText: "Counter hack progression (0%)",
        })
        const counterProgressBar = new Component("div", {
            style: { width: "100%", height: "15px", background: "var(--color-grey)", borderRadius: "4px", margin: "5px 0", display: "flex", justifyContent: "space-between", alignItems: "center" },
        })

        const counterProgressBarValue = new Component("div", {
            style: { width: terminalProgressBar.style.width, height: "15px", background: "var(--color-terminal)", borderRadius: "4px", transitionDuration: "0.3s" }
        })
    
        hackInProgress.message?.append(counterLabel.element);
        hackInProgress.message?.append(counterProgressBar.element);
        counterProgressBar.element.append(counterProgressBarValue.element);

        wrapper.scrollTop = wrapper.scrollHeight;
    
        hackInProgress.counterLabel = counterLabel.element;
        hackInProgress.counterProgressBar = counterProgressBar.element;
        hackInProgress.counterProgressBarValue = counterProgressBarValue.element;
    
        const hackObserver = new MutationObserver(function(mutations) {
            const value = parseInt(mutations[0].target.style.width.slice(0, -1));
            counterLabel.element.innerText = counterLabel.element.innerText.replace(/\d{1,3}%/, value + "%");
            counterProgressBarValue.element.style.width = value + "%";
        });
        hackObserver.observe(terminalProgressBar, { attributes: true, attributeFilter: ["style"] });
        hackInProgress.hackObserver = hackObserver;
    }
    
    const manageBeingHacked = (message) => {
        const hacker = message.querySelectorAll(".tag")[0]?.innerText || (message.innerText.match(/by .+ on/) || [])[0]?.slice(3, -3);
        const port = (message.innerText.match(/on port \d+\./) || [])[0]?.slice(8, -1);
        const already = player.hacksInProgress.find(e => e.hacker == hacker);
        const progression = parseInt((message.innerText.match(/\d{1,3}(\.\d{1,2})?%/) || ["100%"])[0].slice(0, -1));
        if (already) {
            if (progression == 100) {
                already.separator?.remove();
                already.message?.remove();
                player.hacksInProgress.splice(player.hacksInProgress.indexOf(already), 1);
            } else {
                already.hackLabel.innerText = already.hackLabel.innerText.replace(/\d+%/, progression + "%");
                already.progressBarValue.style.width = progression + "%";
            }
            message.remove();
        } else if (port) {
            const redButtons = message.querySelectorAll(".tag");
            redButtons[0].remove();
            message.innerText = ""
    
            const iconElement = new Component("img", {
                src: "icons/hack-red.svg",
                classList: ["icon"],
                style: { marginRight: "9px" }
            })
            const hackLabel = new Component("span", {
                innerText: `${hacker} is hacking you (${progression}%) on port ${port}`,

            })
            const progressBar = new Component("div", {
                style: { width: "100%", height: "15px", background: "var(--color-grey)", borderRadius: "4px", margin: "5px 0", display: "flex", justifyContent: "space-between", alignItems: "center" },

            })
            const progressBarValue = new Component("div", {
                style: { width: `${progression}%`, height: "15px", background: "var(--color-red)", borderRadius: "4px", transitionDuration: "0.3s" },
            })
            const separator = new Component("div", {
                style: { margin: "10px 0" },
                classList: ["line", "svelte-182ewru"]
            })
            
            message.append(iconElement.element);
            message.append(hackLabel.element);
            message.append(progressBar.element);
            progressBar.element.append(progressBarValue.element);
    
            const alreadyCounterHacking = hacker == player.currentlyHacking;
            if (alreadyCounterHacking) {
                player.hacksInProgress.push({
                    hacker: hacker,
                    counterButton: redButtons[1],
                    message,
                    hackLabel: hackLabel.element,
                    progression,
                    progressBar: progressBar.element,
                    progressBarValue: progressBarValue.element,
                    separator: separator.element,
                })
                counterHack(player.hacksInProgress[player.hacksInProgress.length - 1])
            } else {
                const footer = new Component("span", {
                    innerText: "Click to counter",
                    style: { fontSize: "0.7rem", color: "var(--color-lightgrey)" }
                })
                message.append(footer.element);
    
                player.hacksInProgress.push({
                    hacker: hacker,
                    counterButton: redButtons[1],
                    message,
                    hackLabel: hackLabel.element,
                    progression,
                    progressBar: progressBar.element,
                    progressBarValue: progressBarValue.element,
                    separator: separator.element,
                    footer: footer.element
                })
            }
    
            message.parentNode.append(separator.element);
    
            message.style.cursor = "pointer";
            message.style.padding = " 5px 5px 5px 0";
            message.style.borderRadius = "4px";
            message.onclick = async () => {
                redButtons[1].click();
                await sleep(300);
                counterHack(message);
            };
            message.onmouseenter = () => message.style.backgroundColor = "#ffffff1a";
            message.onmouseleave = () => message.style.backgroundColor = "transparent";
        }
    }

    const hasBeenHacked = (window) => {

        const username = window.querySelector("#wrapper > div > div > span")?.innerText;
        const message = window.querySelector("#message")?.innerText;
        const ascii = window.querySelector(".code")?.innerText;
        if (!username || !message || !ascii)
            return;
        window.remove();
        document.querySelector(".taskbar-item > img[src='icons/hack.svg']")?.parentNode?.remove();

        const hackedWindow = new Component("div", {
			id: "hacked-window",
			classList: ["window", "svelte-1hjm43z", "window-selected"],
			style: { zIndex: "56", top: "60px", right: "10px" },
			children: [
				new Component("div", {
					id: "to-drag",
					classList: ["window-title", "svelte-1hjm43z"],
					innerText: "Hacked",
					children: [
						new Component("img", {
							prepend: true,
							src: "icons/hack-red.svg",
							classList: ["icon", "icon-in-text"]
						}),
						new Component("button", {
							onclick: () => document.getElementById("hacked-window")?.remove(),
							classList: ["window-close", "svelte-1hjm43z"],
							children: [
								new Component("img", {
									src: "icons/close.svg",
									classList: ["icon"]
								})
							]
						})
					]
				}),
				new Component("div", {
					classList: ["window-content", "svelte-1hjm43z"],
					style: { width: "calc(300px)", height: "calc(350px)", padding: "10px" },
					children: [
						new Component("div", {
							id: "content",
							style: { display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" },
                            children: [
                                new Component("div", {
                                    innerText: username,
                                    style: { fontSize: "14px", marginBottom: "4px", fontFamily: "var(--font-family-2)", fontWeight: "500" },
                                }),
                                new Component("div", {
                                    id: "message",
                                    innerText: message,
                                    classList: ["svelte-w2dcq9"],
                                    style: { fontFamily: "var(--font-family-2)" }
                                }),
                                new Component("div", {
                                    id: "monitor",
                                    style: { width: "100%" },
                                    classList: ["svelte-w2dcq9"],
                                    children: [
                                        new Component("div", {
                                            id: "bezel",
                                            style: { position: "relative", height: "100%", width: "100%" },
                                            children: [
                                                new Component("div", {
                                                    id: "crt",
                                                    classList: ["off", "svelte-w2dcq9"],
                                                    style: { height: "100%" },
                                                    children: [
                                                        new Component("div", {
                                                            classList: ["scanline", "svelte-w2dcq9"]
                                                        }),
                                                        new Component("div", {
                                                            classList: ["terminal", "svelte-w2dcq9"],
                                                            children: [
                                                                new Component("div", {
                                                                    id: "ascii",
                                                                    classList: ["svelte-w2dcq9"],
                                                                    children: [
                                                                        new Component("pre", {
                                                                            children: [
                                                                                new Component("div", {
                                                                                    style: { fontSize: "8px" },
                                                                                    classList: ["code", "svelte-1uaaqnw"],
                                                                                    innerText: ascii
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
						})
					]
				}),
                new Component("div", {
                    id: "hacked-progress",
                    style: { position: "absolute", backgroundColor: "var(--color-terminal)", height: "3px", width: "100%", borderRadius: "4px", transform: "translateY(-1px)", transitionDuration: "0.3s" }
                })
			]
		})

		document.querySelector("main").append(hackedWindow.element);

        const duration = 5000;
        const interval = 50;
        let loop;
        loop = setInterval(() => {
            const progressbar = document.getElementById("hacked-progress");
            if (!progressbar) return;
            const current = progressbar.style.width.slice(0, -1);
            progressbar.style.width = (current - 100 / (duration / interval)).toFixed(1) + "%";
            if (progressbar.style.width.slice(0, -1) <= 0) {
                hackedWindow.element.remove();
                if (loop)
                    clearInterval(loop);
            }
        }, interval);
    }
    
    const logObserver = new MutationObserver(function(mutations) {
        const messages = mutations.filter(e => 
            e.target.id == "wrapper"
            && (!e.nextSibling || !e.nextSibling[0])
            && e.addedNodes
            && e.addedNodes[0]?.classList?.contains("message"))
        if (!messages.length)
            return;
        messages.forEach(messageElement => {
            const message = messageElement.addedNodes[0];
            manageMessagesToDelete(message);
            if (message.innerText.includes("being hacked") || message.innerText.includes("been hacked"))
                manageBeingHacked(message);
        })
    });
    
    const windowCloseObserver = new MutationObserver(async function(mutations) {
        const windowClosed = mutations.find(e => {
            return e.target == document.querySelector("main") &&
                e.removedNodes.length == 1 &&
                e.removedNodes[0]?.classList?.contains("window", "svelte-1hjm43z")
        })
        if (!windowClosed)
            return;

        const isLogWindow = windowClosed.removedNodes[0].querySelector(".window-title > img[src='icons/log.svg']")
        if (isLogWindow)
            logObserver.disconnect();

        const wasHackingSomeone = windowClosed.removedNodes[0].querySelector(".window-title > img[src='icons/terminal.svg']");
        if (wasHackingSomeone) {
            const currentHackingBy = player.hacksInProgress.find(e => e.hacker == player.currentlyHacking);
            if (currentHackingBy) {
                const footer = new Component("span", {
                    innerText: "Click to counter",
                    style: { fontSize: "0.7rem", color: "var(--color-lightgrey)" }
                })

                currentHackingBy.counterLabel?.remove();
                currentHackingBy.counterProgressBar?.remove();
                currentHackingBy.message.append(footer.element);
                currentHackingBy.footer = footer.element;
            }
            player.lastHacked = player.currentlyHacking
            player.currentlyHacking = null;
        }
    })

    const firewallEncryption = (hp, rd, regen, ad, ms) => {
    	rd /= 100;
        const cShort = [3.7027,100];
        const cMed = [8.2857,ad*3];
        const cLong = [13.421,ms*3];
	    return [1000+hp*3, rd*3, regen*3*.3, (cShort[0]*cShort[1]+cMed[0]*cMed[1]+cLong[0]*cLong[1])/(cShort[1]+cMed[1]+cLong[1])];
    }

    const penTest = (port, cpu, aTPH) => {
        var t = 0;
        while (1) {
            const damage = cpu[0]*(1+cpu[1]-port[1])+cpu[2];
            if (port[0] - damage + port[2]*aTPH <= 0) {
                return t + aTPH*(port[0]+port[2]*aTPH)/damage;
            } else {
                port[0] -= damage;
                port[0] += port[2]*aTPH;
                t += aTPH;
            }
        }
    }

    const netBTCperHour = (idle, barter, crypto) => {
        const npcsPerHour = 27.69;
        // Based on 1 Hour of Grinding returns
        idle *= 3600;
        // Maximum bartering benefit is selling uncommons, assuming it is used:
        barter /= 100;
        barter = ((1+barter)*0.00864000-0.00864000) * npcsPerHour;
        // Hack bonus, similar to bartering
        crypto /= 100;
        crypto = ((1+crypto)*0.00180000-0.00180000) * npcsPerHour;
        return idle + barter + crypto;
    }

    const dPS = (dTI,level,rarity,type) => {
        var basePrice = stats.filament_price[rarity];
        const value = (level-1)*3*basePrice + basePrice;
        if (type != "cpu" && type != "router") basePrice /= 2
        console.log(basePrice)
        if (rarity < 5) {
            if (dTI < 7) return (value).toFixed(4);
            else if (dTI < 8) return "~" + (value + (dTI-7)*basePrice/3).toFixed(4);
            else if (dTI < 9) return "~" + (value + (dTI-8)*basePrice/3*2 + basePrice/3).toFixed(4);
            else if (dTI < 9.9) return "~" + (value + (dTI-9)*basePrice + basePrice).toFixed(4);
        } else if (rarity < 6) {
            if (dTI < 5) return (value).toFixed(4);
            else if (dTI < 6) return "~" + (value + (dTI-5)*basePrice/3).toFixed(4);
            else if (dTI < 7) return "~" + (value + (dTI-6)*basePrice/3*2 + basePrice/3).toFixed(4);
            else if (dTI < 8) return "~" + (value + (dTI-7)*basePrice + basePrice).toFixed(4);
            else if (dTI < 9) return "~" + (value + (dTI-7)*basePrice*5/3 + basePrice*2).toFixed(4);
            else if (dTI < 9.7) return "~" + (value + (dTI-7)*basePrice*10/3 + basePrice*11/3).toFixed(4);
        } else {
            if (dTI < 5) return (value).toFixed(4);
            //else if (dTI < 5) return "~" + (value + (dTI-4)*basePrice/6).toFixed(4);
            else if (dTI < 6) return "~" + (value + (dTI-5)*basePrice/3).toFixed(4);
            else if (dTI < 7) return "~" + (value + (dTI-6)*basePrice/2 + basePrice/3).toFixed(4);
            else if (dTI < 8) return "~" + (value + (dTI-7)*basePrice + basePrice*5/6).toFixed(4);
            else if (dTI < 9) return "~" + (value + (dTI-8)*basePrice*2 + basePrice*11/6).toFixed(4);
            else if (dTI < 9.5) return "~" + (value + (dTI-8)*basePrice*5 + basePrice*23/6).toFixed(4);
        }
        // If there's no estimated price for it, chances are it's worth a lot
        return "Invaluable";
    }

    const dGI = (idle,barter,crypto,level,rarity) => {
        const item = stats.gpu[rarity];
        const bestGPU = netBTCperHour(item.idle[1]+stats.gpu_term[rarity]*level,item.bart[1],item.crip[1]);
        const worstGPU = netBTCperHour(item.idle[0]+stats.gpu_term[rarity]*level,item.bart[0],item.crip[0]);
        const actualGPU = netBTCperHour(idle,barter,crypto);
        const qualityRange = bestGPU - worstGPU;
        const actualRange = actualGPU - worstGPU;
        var gpuRank = 1+((actualRange/qualityRange)*9);
        if (gpuRank < 1) gpuRank = 1;
        return gpuRank;
    }

    const boostBTCperHour = (boost,rarity) => {
        var idle = stats.gpu[rarity].idle[1]+stats.gpu_term[rarity]
        idle *= 3600
        boost /= 100
        return idle*(1+boost) - idle
    }

    const dPI = (boost,level,rarity) => {
        const item = stats.psu[rarity];
        const bestPSU = boostBTCperHour(item.boost[1]+stats.psu_term[rarity]*level,rarity)
        const worstPSU = boostBTCperHour(item.boost[0]+stats.psu_term[rarity]*level,rarity)
        const actualPSU = boostBTCperHour(boost,rarity)
        const qualityRange = bestPSU - worstPSU
        const actualRange = actualPSU - worstPSU
        var psuRank = 1+((actualRange/qualityRange)*9)
        if (psuRank < 1) psuRank = 1
        return psuRank
    }

    const dFI = (hp, rd, rg, enc, level, rarity) => {
        const item = stats.firewall[rarity];
        const cpu = stats.cpu[rarity];
        const cpuV = hackPower(cpu.hack[1]+stats.cputerm[rarity]*(level-1), cpu.trueDam[1], cpu.pen[1], cpu.chance[1], cpu.dam[1]);
        const cpsAverage = 5;
        const bestPort = firewallEncryption(item.hp[1]+stats.fireterm[rarity]*(level-1),item.rd[1],item.regen[1],item.medium[1],item.long[1]);
        const worstPort = firewallEncryption(item.hp[0]+stats.fireterm[rarity]*(level-1),item.rd[0],item.regen[0],item.medium[0],item.long[0]);
        const bestHoldout = penTest(bestPort, cpuV, bestPort[3]/cpsAverage+.3);
        const worstHoldout = penTest(worstPort, cpuV, worstPort[3]/cpsAverage+.3);
        const actualHoldout = penTest([hp,rd,rg],cpuV,enc/cpsAverage+.3);
        const qualityRange = worstHoldout - bestHoldout;
        const qualityActually = worstHoldout - actualHoldout;
        var fireRank = 1+(qualityActually/qualityRange*9);
        if (fireRank < 1) fireRank = 1;
        return fireRank;
    }
	
    const hackPower = (hack, trueDam, pen, chance, dam) => {
        pen /= 100;
        chance /= 100;
        dam /= 100;
        return [(100+hack)+(0.05+chance)*(100+hack)*(0.3+dam), pen, trueDam]
    }

    const dCI = (raw, pen, trueDam, level, rarity) => {
        const item = stats.cpu[rarity];
        const port = stats.port[rarity];
        const bestHackPower = hackPower(item.hack[1]+stats.cputerm[rarity]*(level-1), item.trueDam[1], item.pen[1], item.chance[1], item.dam[1]);
        const worstHackPower = hackPower(item.hack[0]+stats.cputerm[rarity]*(level-1), item.trueDam[0], item.pen[0], item.chance[0], item.dam[0]);
        const best = port.hp/(bestHackPower[0]*(1+bestHackPower[1]-port.rd)+bestHackPower[2])
        const worst = port.hp/(worstHackPower[0]*(1+worstHackPower[1]-port.rd)+worstHackPower[2])
        const actual = port.hp/(raw*(1+pen-port.rd) + trueDam)
        const qualityRange = worst - best;
        const qualityActually = worst - actual;
        var cpuRank = 1+((qualityActually/qualityRange)*9);
        if (cpuRank < 1) cpuRank = 1;
        return cpuRank;
    }
    // hack = Hack Damage
    // trueDam = True Damage
    // pen = Hack Armor Penetration
    // chance = Hack Critical Damage Chance
    // dam = Hack Critical Damage Bonus
    const getItemGrade = (type, level, index, effects) => {
        switch(type) {
            case "cpu":
                const hack = effects["Hack Damage"];
                const trueDam = effects["True Damage"] || 0;
                const pen = effects["Hack Armor Penetration"] || 0;
                const chance = effects["Hack Critical Damage Chance"] || 0;
                const dam = effects["Hack Critical Damage Bonus"] || 0;
                const [raw, penV, trueDamV] = hackPower(hack, trueDam, pen, chance, dam);
                return dCI(raw, penV, trueDamV, level, index).toFixed(4);
            case "gpu":
                const idle = effects["Idle Crypto Mining"]
                const bart = effects["More Crypto Reward"] || 0
                const crip = effects["Better Barter"] || 0
                return dGI(idle, bart, crip, level, index).toFixed(4);
            case "psu":
                const boost = effects["Crypto Mining Power"]
                return dPI(boost, level, index).toFixed(4)
            case "router":
                const hp = effects["Firewall Health"];
                const rd = effects["Firewall Damage Reduction"] || 0;
                const rg = effects["Firewall Regeneration"] || 0;
                const ad = effects["Firewall Advanced Encryption"] || 0;
                const ms = effects["Firewall Master Encryption"] || 0;
                const [hpP, rdP, rgP, encryption] = firewallEncryption(hp,rd,rg,ad,ms);
                return dFI(hpP, rdP, rgP, encryption, level, index).toFixed(4);
	    default:
                return -1;
        }
    }

    const rarities = ["common", "uncommon", "rare", "epic", "legendary", "mythic", "ethereal"];
    const itemHoverObserver = new MutationObserver(function(mutations) {
		const description = mutations.find(e => {
			return e.addedNodes.length == 1 && e.addedNodes[0].id == "desc"
				&& e.addedNodes[0].classList?.contains("svelte-181npts")
		})?.addedNodes[0]
		if (!description)
			return;

		const type = (description.querySelector("img")?.src?.match(/[^\/]+\.webp/) || [])[0]?.slice(0, -5);
		const rarity = description.querySelector(".rarity")?.innerText;
		const level = (description.querySelector(".level")?.innerText.match(/\d+/) || [])[0];
		const effects = {};
        Array.from(description.querySelectorAll(".effect")).forEach(effect => {
            effect.style.width = "100%";
            const name = effect.querySelector("div > div")?.innerText.split("  ")[1].trim();
            const value = effect.querySelector("div > span > span")?.innerText;
            effects[name] = Number(value);
        });
        if (!type || !level || effects.length == 0)
            return;

        const index = rarities.indexOf(rarity.toLowerCase());
        const grade = getItemGrade(type, level, index, effects);
        if (grade == -1)
            return

        const unitiesByType = {
            "cpu": "dCI",
            "gpu": "dGI",
            "psu": "dPI",
            "router": "dFI",
        }
         
        const gradeComponent = new Component("div", {
            id: "grade",
            classList: ["attribute", "svelte-181npts"],
            innerText: `${grade} / 10 ${unitiesByType[type]}`,
            style: { paddingBlock: "4px", paddingInline: "9px", borderRadius: "2px", backgroundColor: "black" }
        })
        description.querySelector(".level")?.parentNode.insertBefore(gradeComponent.element, description.querySelector(".effect"));
        description.style.width = "300px";

        const price = dPS(grade,level,index,type)
        description.querySelector(".level")?.parentNode.insertBefore(gradeComponent.element, description.querySelector(".effect"));
        description.style.width = "300px";
        var priceStandard = new Component("div", {
            id: "price",
            classList: ["attribute", "svelte-181npts"],
            innerHTML: `<img class="icon icon-in-text" src="icons/btc.svg" alt="Bitcoin Icon">${price}`,
            style: { paddingBlock: "4px", paddingInline: "9px", borderRadius: "2px", background: "linear-gradient(112deg, #edca3d 4%, #ffdf81 34%, #edca3d 66%, #ffdf81 100%)" }
        })
        description.querySelector(".level")?.parentNode.insertBefore(priceStandard.element, description.querySelector(".effect"));
        description.style.width = "300px";
    });
    
    let manageLoot = async () => {
        let item = document.querySelector(".window-loot > div > div > div > div > div > .item")
        if (item) {
            let background = item.style.background
            let rarity = raritiesVariables[background];
            if (!rarity) rarity = raritiesVariables[background + ")"];
            let color = getComputedStyle(item).getPropertyValue(background.toString().slice(4, background.endsWith(")") ? -1 : background.length))
            if (rarity){
                await sleep(200);
                if (player.autoloot[rarity] === "nothing")
                    return;
                if (player.autoloot[rarity] === "take")
                    await openWindow("Inventory", true);
                const button = document.querySelector(lootButtons[player.autoloot[rarity]])
                button?.click();
                sendLog(`
                    <img class="icon" src="icons/check.svg"/>
                    Successfully ${player.autoloot[rarity]} a
                    <span style='background: ${color}; border-radius: 5px; padding: 2px 5px 2px 5px;'>${rarity}</span>
                    item
                `);
                await sleep(100);
                closeWindow("Inventory", true);
                await sleep(500);
            }
        }
    }
    
    const windowOpenObserver = new MutationObserver(async function(mutations) {
        const newWindow = mutations.find(e => {
            return e.target == document.querySelector("main") &&
                e.addedNodes.length == 1 &&
                e.addedNodes[0]?.classList?.contains("window", "svelte-1hjm43z")
        })
        if (!newWindow)
            return;

        const src = newWindow.addedNodes[0].querySelector(".window-title > img").src
        const name = src.split("/")[src.split("/").length - 1].slice(0, -4);
        if (player.configuration.openInSilent.includes(name)) {
            newWindow.addedNodes[0].style.display = "none";
            newWindow.addedNodes[0].classList.add("openInSilent");
        }
        const isItem = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/loot.svg']")
        if (isItem)
            await manageLoot();

        const isFilamentWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/filament.svg']")?.parentNode?.parentNode;
        if (isFilamentWindow) {
            const upgrader = isFilamentWindow.querySelectorAll("h3")[1];
            if (!upgrader)
                return;
            const isAnyGreen = Array.from(isFilamentWindow.querySelectorAll("button.green:not(.cantClick)")).slice(1).length
            const container = new Component("a", {
                style: { width: "311px", display: "inline-block", margin: "0", marginTop: "10px", flex: "0 1 auto" },
                children: [
                    new Component("button", {
                        innerText: "Trade all",
                        classList: ["green", "svelte-ec9kqa", (isAnyGreen ? "can" : "cantClick")],
                        style: { height: "auto", padding: "6px 14px", fontFamily: "var(--font-family-1)", fontSize: "16px", boxShadow: "0 10px 15px var(--color-shadow)" }
                    })
                ],
                onclick: async () => {
                    for (let i = 0; i < 6; i++) {
                        let button = Array.from(isFilamentWindow.querySelectorAll("button.green")).filter(e => e.innerText == "Max")[i];
                        button?.click();
                        await sleep(100);
                    }
                }
            })

            upgrader.after(container.element);
        }

        const isTerminalWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/terminal.svg']");
        if (isTerminalWindow) {
            const terminalProgressBar = document.querySelector(".target-bar-progress");
            if (!terminalProgressBar) return
            customTerminal();
            if (player.configuration.currentTheme !== Object.keys(themes)[0]){
                const hackObserver = new MutationObserver(function(_) {
                    colorizeTerminal();
                });
                hackObserver.observe(terminalProgressBar, { attributes: true, attributeFilter: ["style"] });
            }
        }

        const isParamWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/settings.svg']")?.parentNode?.parentNode;
        if (isParamWindow) {
            let currImage = localStorage.getItem("prettier-backgroundImage");
            const wrapper = isParamWindow.querySelector(".window-content > div");
            const shredder = wrapper.querySelector("div:nth-child(4)");
            shredder.querySelectorAll("button.green").forEach(button => button.click());
            shredder.style.display = "none";
            wrapper.querySelector("div:nth-child(1)").innerHTML = wrapper.querySelector("div:nth-child(1)").innerHTML.replace(/You're currently logged in as .+\./, "");
            wrapper.querySelector("div:nth-child(1) > div > div").style.marginTop = 0;
            wrapper.querySelector("button.red").style.height = "30px"

            function updateBackground() {
                document.querySelector("body").style.backgroundImage = currImage || "url(../../../img/bg-tile.png),radial-gradient(at center bottom,#273541,#0b0b0c)";
                if (currImage)
                    localStorage.setItem("prettier-backgroundImage", currImage)
                else
                    localStorage.removeItem("prettier-backgroundImage")
            }

            const backgroundSetting = new Component("div", {
                classList: ["el", "svelte-176ijne"],
                children: [
                    new Component("h4", {
                        innerText: "Edit background image",
                    }),
                    new Component("div", {
                        style: { marginTop: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px" },
                        children: [
                            new Component("button", {
                                innerText: "Upload",
                                classList: ["grey", "svelte-ec9kqa"],
                                style: { height: "35px", width: "85px" },
                                onclick: () => {
                                    const input = new Component("input", {
                                        type: "file",
                                        onchange: (e) => {
                                            const file = e.target.files[0];
                                            const fileReader = new FileReader();
                                            fileReader.onload = function() {
                                                currImage = `url(${fileReader.result})`;
                                                document.querySelector("body").style.backgroundSize = "cover";
                                                updateBackground();
                                            }
                                            fileReader.readAsDataURL(file)
                                        }
                                    })
                                    input.element.click();
                                }
                            }),
                            new Component("div", {
                                innerText: "or"
                            }),
                            new Component("input", {
                                type: "text",
                                placeholder: "Import from url",
                                style: { width: "200px", padding: "10px", borderRadius: "2px", textAlign: "left", backgroundColor: "var(--color-grey)", boxShadow: "0 10px 20px var(--color-shadow) inset", border: "1px solid var(--color-lightgrey)", fontFamily: "var(--font-family-2)", zIndex: "60" },
                                onblur: (e) => {
                                    currImage = `url(${e.target.value})`;
                                    e.target.value = "";
                                    document.querySelector("body").style.backgroundSize = "cover";
                                    updateBackground();
                                }
                            }),
                            new Component("button", {
                                innerText: "Reset",
                                classList: ["red", "svelte-ec9kqa"],
                                style: { height: "35px", width: "85px" },
                                onclick: () => {
                                    currImage = null;
                                    document.querySelector("body").style.backgroundSize = "auto";
                                    updateBackground();
                                }
                            })
                        ]
                    })
                ]
            })

            const autolootSetting = new Component("div", {
                classList: ["el", "svelte-176ijne"],
                children: [
                    new Component("h4", {
                        innerText: "Auto loot"
                    }),
                    new Component("div", {
                        style: { display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" },
                        children: lootRarity.filter(e => e.name !== "ethereal").map(rarity => {
                            return new Component("div", {
                                style: { display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "30px", fontFamily: "var(--font-family-2)", fontSize: "12px" },
                                children: [
                                    new Component("p", {
                                        innerText: rarity.name[0].toUpperCase() + rarity.name.slice(1),
                                        style: { background: rarity.color, width: "85px", fontWeight: "bold", padding: "6px", borderRadius: "5px", fontSize: "12px" }
                                    }),
                                    new Component("div", {
                                        style: { display: "flex", border: "1px solid #91aabd", borderRadius: "3px" },
                                        children: [
                                            new Component("div", {
                                                classList: ["button-autoloot-" + rarity.name, "button-take"],
                                                innerText: "Take",
                                                style: { width: "60px", backgroundColor: (player.autoloot[rarity.name] == "take" ? "#91aabd4d" : "transparent"), padding: "5px", cursor: "pointer" },
                                                onmouseenter: (e) => {if (player.autoloot[rarity.name] != "take") e.target.style.background = "#91aabd2d";},
                                                onmouseleave: (e) => {if (player.autoloot[rarity.name] != "take") e.target.style.background = "transparent";},
                                                onclick: (e) => {
                                                    player.autoloot[rarity.name] = "take";
                                                    document.querySelectorAll(".button-autoloot-" + rarity.name).forEach(button => button.style.backgroundColor = "transparent");
                                                    e.target.style.backgroundColor = "#91aabd4d";
                                                    localStorage.setItem("prettier-autoloot", JSON.stringify(player.autoloot))
                                                }
                                            }),
                                            new Component("div", {
                                                classList: ["button-autoloot-" + rarity.name, "button-sell"],
                                                innerText: "Sell",
                                                style: { width: "60px", backgroundColor: (player.autoloot[rarity.name] == "sell" ? "#91aabd4d" : "transparent"), padding: "5px", cursor: "pointer" },
                                                onmouseenter: (e) => {if (player.autoloot[rarity.name] != "sell") e.target.style.background = "#91aabd2d";},
                                                onmouseleave: (e) => {if (player.autoloot[rarity.name] != "sell") e.target.style.background = "transparent";},
                                                onclick: (e) => {
                                                    player.autoloot[rarity.name] = "sell";
                                                    document.querySelectorAll(".button-autoloot-" + rarity.name).forEach(button => button.style.backgroundColor = "transparent");
                                                    e.target.style.backgroundColor = "#91aabd4d";
                                                    localStorage.setItem("prettier-autoloot", JSON.stringify(player.autoloot))
                                                }
                                            }),
                                            new Component("div", {
                                                classList: ["button-autoloot-" + rarity.name, "button-shred"],
                                                innerText: "Shred",
                                                style: { width: "60px", backgroundColor: (player.autoloot[rarity.name] == "shred" ? "#91aabd4d" : "transparent"), padding: "5px", cursor: "pointer" },
                                                onmouseenter: (e) => {if (player.autoloot[rarity.name] != "shred") e.target.style.background = "#91aabd2d";},
                                                onmouseleave: (e) => {if (player.autoloot[rarity.name] != "shred") e.target.style.background = "transparent";},
                                                onclick: (e) => {
                                                    player.autoloot[rarity.name] = "shred";
                                                    document.querySelectorAll(".button-autoloot-" + rarity.name).forEach(button => button.style.backgroundColor = "transparent");
                                                    e.target.style.backgroundColor = "#91aabd4d";
                                                    localStorage.setItem("prettier-autoloot", JSON.stringify(player.autoloot))
                                                }
                                            }),
                                            new Component("div", {
                                                classList: ["button-autoloot-" + rarity.name, "button-nothing"],
                                                innerText: "Nothing",
                                                style: { width: "65px", backgroundColor: (player.autoloot[rarity.name] == "nothing" ? "#91aabd4d" : "transparent"), padding: "5px", cursor: "pointer" },
                                                onmouseenter: (e) => {if (player.autoloot[rarity.name] != "nothing") e.target.style.background = "#91aabd2d";},
                                                onmouseleave: (e) => {if (player.autoloot[rarity.name] != "nothing") e.target.style.background = "transparent";},
                                                onclick: (e) => {
                                                    player.autoloot[rarity.name] = "nothing";
                                                    document.querySelectorAll(".button-autoloot-" + rarity.name).forEach(button => button.style.backgroundColor = "transparent");
                                                    e.target.style.backgroundColor = "#91aabd4d";
                                                    localStorage.setItem("prettier-autoloot", JSON.stringify(player.autoloot))
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })

            wrapper.insertBefore(backgroundSetting.element, wrapper.querySelector("div:nth-child(2)"));
            wrapper.insertBefore(autolootSetting.element, wrapper.querySelector("div:nth-child(2)"));
        }


        const hasBeenHackedWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/hack.svg']") && newWindow.addedNodes[0].querySelector(".window-title")?.innerText?.trim() == "Hacked"
        if (hasBeenHackedWindow)
            hasBeenHacked(newWindow.addedNodes[0]);

        const isLogWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/log.svg']")
        if (isLogWindow) {
            editWelcomeMessage();
            logObserver.observe(isLogWindow?.closest(".window.svelte-1hjm43z")?.querySelector(".window-content > #wrapper"), {attributes: false, childList: true, characterData: false, subtree: true});
        }


        const isHackingSomeoneWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/terminal.svg']")?.parentNode?.parentNode
        if (isHackingSomeoneWindow) {
            const hacked = isHackingSomeoneWindow.querySelector(".username")?.innerText;
            if (hacked)
                player.currentlyHacking = hacked;
            const isHackingYou = player.hacksInProgress.find(e => e.hacker == hacked);
            if (!isHackingYou)
                return;
            counterHack(isHackingYou);
        }

        const hasHackedSomeoneWindow = newWindow.addedNodes[0].querySelectorAll(".window-content > div > .el").length == 4;
        if (hasHackedSomeoneWindow) {
            const hacked = newWindow.addedNodes[0].querySelector(".window-content > div > .el:nth-child(1) > .wrapper > .username")?.innerText
            const wasHackingYou = player.hacksInProgress.find(e => e.hacker === hacked);
            if (!wasHackingYou)
                return;
            wasHackingYou.hackLabel.innerText = "Successfully counter " + wasHackingYou.hackLabel.innerText.replace(/is hacking you \(\d+%\) on port \d+/, "")
            wasHackingYou.message.style.backgroundColor = "transparent";
            wasHackingYou.message.onclick = null;
            wasHackingYou.message.onmouseenter = null;
            wasHackingYou.message.onmouseleave = null;
            player.hacksInProgress.splice(player.hacksInProgress.indexOf(wasHackingYou), 1);
            wasHackingYou.progressBar.remove();
            wasHackingYou.counterLabel.remove();
            wasHackingYou.counterProgressBar.remove();
            wasHackingYou.counterProgressBarValue.remove();
            wasHackingYou.footer.remove();
            wasHackingYou.hackObserver.disconnect();
        }
    });

    const editWelcomeMessage = () => {
        const message = document.querySelector(".window-title > img[src='icons/log.svg']").parentNode.parentNode.querySelector("#wrapper > div");
        if (!message)
            return;
        message.innerHTML = message.innerHTML
            .replace("System started.<br>", "")
            .replace("s0urceOS 2023", "✨ Prettier d0urceOS V1.6 ✨")
            .replace(">.", ">. <br><span style='font-size: 0.8rem; color: var(--color-lightgrey);'>Expanded by <span style='color: chartreuse; text-shadow: 0 0 3px chartreuse'>d0t</span> 😍.</span>")
            .replace(">.", `>. <br><span style='font-size: 0.8rem; color: var(--color-lightgrey);'>Template made with ❤️ by <span style='color: pink; text-shadow: 0 0 3px pink'>Xen0o2</span>.</span>`);
        sendLog(`
            <a href="https://www.buymeacoffee.com/doteki">Buy me a <span style='color: chartreuse; text-shadow: 0 0 3px chartreuse'>dCoffee</span> 😉</a>
        `)
        sendLog(`
            <div style="color: #52e7f7; text-shadow: 0 0 2px #0fa, 0 0 3px #52e7f7; letter-spacing: 0.3px; font-weight: lighter">
                <img class="icon" src="https://www.svgrepo.com/show/523341/cpu.svg" style="filter: drop-shadow(50px 0px 100px #52e7f7) invert(96%) sepia(95%) saturate(7486%) hue-rotate(143deg) brightness(100%) contrast(94%);">
                <img class="icon" src="https://www.svgrepo.com/show/532313/firewall.svg" style="filter: drop-shadow(50px 0px 100px #52e7f7) invert(96%) sepia(95%) saturate(7486%) hue-rotate(143deg) brightness(100%) contrast(94%);">
                <img class="icon" src="https://www.svgrepo.com/show/533150/power-bank.svg" style="filter: drop-shadow(50px 0px 100px #52e7f7) invert(96%) sepia(95%) saturate(7486%) hue-rotate(143deg) brightness(100%) contrast(94%);">
                Running d0t's Indexes (dTI)
            </div>
        `)
    }

    const filamentObserver = new MutationObserver(function(mutations) {
        if (mutations.length == 1 && !mutations[0].target.id && player.configuration.displayCustomFilament != "default")
            updateFilaments();
    })

    const formulas = {
        "common"   : "cf",
        "uncommon" : "uf + (cf / 3)",
        "rare"     : "rf + (uf / 3) + (cf / 9)",
        "epic"     : "ef + (rf / 3) + (uf / 9) + (cf / 27)",
        "legendary": "lf + (ef / 5) + (rf / 15) + (uf / 45) + (cf / 135)",
        "mythic"   : "mf + (lf / 3) + (ef / 15) + (rf / 45) + (uf / 145) + (cf / 405)",
        "ethereal" : "etf + (mf / 5) + (lf / 15) + (ef / 75) + (rf / 225) + (uf / 675) + (cf / 2025)",
    }

    const updateFilaments = () => {
        try {
            const filaments = document.querySelectorAll(".filament-el");
            const [cf, uf, rf, ef, lf, mf, etf] = Array.from(filaments).map(e => parseInt(e.innerText.trim()));
            const total = eval(formulas[player.configuration.displayCustomFilament]).toFixed(4);
            const element = document.querySelector("#customFilament");
            if (element)
                element.innerHTML = element.innerHTML.replace(/^\d+\.\d+/, total);
            return total;
        } catch(e) {
            console.log(e);
            prettierLoadFails("7");
        }

    }

    const editFilaments = () => {
        try {
            const filaments = document.querySelectorAll(".filament-el");
            const parent = filaments[0].parentNode;
            const container = parent.parentNode;
            container.style.rowGap = null;
            container.style.position = "relative";
            filaments.forEach(e => e.style.display = "none");
    
            const total = updateFilaments();
            const totalFilament = new Component("div", {
                id: "customFilament",
                innerText: total.toString(),
                classList: ["filament-el", "svelte-1azjldn"],
                style: { height: "100%", width: "auto", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", fontSize: "1.5rem", paddingLeft: "10px" },
                children: [
                    new Component("img", {
                        src: `icons/filament-${player.configuration.displayCustomFilament}.svg`,
                        classList: ["icon", "icon-in-text", "totalFilamentIcon"],
                        style: { transform: "translateY(-1px)" }
                    })
                ]
            })

            const select = new Component("select", {
                style: { position: "absolute", height: "100%", width: "100%", opacity: 0 },
                children: ["Default", "Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "Ethereal"].map(rarity => (
                    new Component("option", {
                        value: rarity.toLowerCase(),
                        innerText: rarity,
                        selected: player.configuration.displayCustomFilament === rarity.toLowerCase(),
                    })
                )),
                onchange: (e) => {
                    player.configuration.displayCustomFilament = e.target.value;
                    console.log(e.target.value);
                    if (e.target.value === "default") {
                        totalFilament.element.style.display = "none";
                        filaments.forEach(e => e.style.display = "block");
                    } else {
                        totalFilament.element.style.display = "flex";
                        filaments.forEach(e => e.style.display = "none");
                        document.querySelector(".totalFilamentIcon").src = `icons/filament-${e.target.value}.svg`
                        updateFilaments();
                    }
                }
            })
            
            container.append(totalFilament.element);
            container.append(select.element);

            filamentObserver.disconnect();
            filamentObserver.observe(container, { subtree: true, characterData: true, childList: true });
        } catch(e) {
            console.log(e);
            prettierLoadFails("6")
        }
    }

    const loadingScreen = (action) => {
        switch (action) {
            case "create":
                const display = new Component("div", {
                    id: "display-delete",
                    style: { position: "absolute", zIndex: "100", top: "0", height: "100vh", width: "100vw", backgroundColor: "black", opacity: "0.8", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    children: [
                        new Component("span", {
                            innerText: "Prettier d0urce",
                            style: { color: "cornflowerblue", textShadow: "0 0 3px blue", fontFamily: "var(--font-family-2)", fontWeight: "500", fontSize: "3rem", opacity: "1" }
                        }),
                        new Component("span", {
                            innerText: "Running Version " + VERSION,
                            style: { color: "var(--color-lightgrey)", fontFamily: "var(--font-family-2)", fontWeight: "500", fontSize: "2rem", marginTop: "20px" }
                        })
                    ]
                })
        
                document.querySelector("html").append(display.element);
                break;
            case "delete":
                document.getElementById("display-delete")?.remove();
                break;
        }
    }

    const createObserver = async () => {
        while (1) {
            try {
                const logWindow = document.querySelector(".window-title > img[src='icons/log.svg']")?.closest(".window.svelte-1hjm43z")?.querySelector(".window-content > #wrapper");
                logObserver.observe(logWindow, {attributes: false, childList: true, characterData: false, subtree: true});
                windowOpenObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
                windowCloseObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
                itemHoverObserver.observe(document.querySelector("main"), {attributes: false, childList: true, characterData: false, subtree: true});
                break
            }
            catch {
                await sleep(5000)
            }
        }
    }

    const updateThemeStyle = () => {
        const styleElement = document.getElementById('customStyles');
        const css = themes[localStorage.getItem("prettier-currentTheme") || Object.keys(themes)[0]];
        if (styleElement) {
            styleElement.textContent = css;
        } else {
            const newStyleElement = document.createElement('style');
            newStyleElement.id = 'customStyles';
            newStyleElement.textContent = css;
            document.head.appendChild(newStyleElement);
        }
    }

    const loadLocalStorage = () => {
        if (localStorage.getItem("prettier-backgroundImage")) {
            document.querySelector("body").style.backgroundImage = localStorage.getItem("prettier-backgroundImage");
            document.querySelector("body").style.backgroundSize = "cover";
        } else
            document.querySelector("body").style.backgroundSize = "auto";
        document.querySelector("body").style.backgroundAttachment = "fixed";
        document.querySelector("body").style.backgroundPosition = "center";

        if (!localStorage.getItem("prettier-autoloot"))
            localStorage.setItem("prettier-autoloot", JSON.stringify(player.autoloot))
        if (!localStorage.getItem("prettier-currentTheme"))
            localStorage.setItem("prettier-currentTheme", Object.keys(themes)[0])
    }

    const loadScripts = async () => {
        const scripts = [
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/languages/python.min.js"
        ];
        for (let script of scripts) {
            await new Promise((resolve) => {
                fetch(script)
                    .then(response => response.text())
                    .then(scriptText => {
                        const scriptElement = document.createElement('script');
                        scriptElement.textContent = scriptText;
                        document.head.appendChild(scriptElement);
                        resolve();
                    })
                    .finally(() => resolve());
            })   
        }
    }

    const openWindow = async (windowName, openInSilent = false) => {
        if (!windowNames.includes(windowName)) return;
        if (openInSilent && !player.configuration.openInSilent.includes(windowName.split(/ /g).map((e, i) => i == 0 ? e.toLowerCase() : e).join("")))
            player.configuration.openInSilent.push(windowName.split(/ /g).map((e, i) => i == 0 ? e.toLowerCase() : e).join(""))
        const desktopIcon = document.querySelector(`img[alt='${windowName} Desktop Icon']`);
        desktopIcon?.click();

        await sleep(200);
        const window = document.querySelector(`.window-title > img[src='icons/${windowName.split(/ /g).map((e, i) => i == 0 ? e.toLowerCase() : e).join("")}.svg']`)?.parentNode.parentNode;
        return window;
    }

    const closeWindow = (windowName, onlyIfSilent = false) => {
        if (!windowNames.includes(windowName)) return;
        const index = player.configuration.openInSilent.indexOf(windowName.split(/ /g).map((e, i) => i == 0 ? e.toLowerCase() : e).join(""));
        if (index >= 0) player.configuration.openInSilent.splice(index, 1);

        const windowToClose = document.querySelector(`.window-title > img[src='icons/${windowName.split(/ /g).map((e, i) => i == 0 ? e.toLowerCase() : e).join("")}.svg']`)?.parentNode.parentNode;
        if (!windowToClose) return;

        if (onlyIfSilent && windowToClose.classList.contains("openInSilent"))
            windowToClose.querySelector(".window-close")?.click();
        else if (!onlyIfSilent)
            windowToClose.querySelector(".window-close")?.click();
            
    }

    const moveItem = async (item, slot) => {  
        item.dispatchEvent(new MouseEvent("mousedown"));
        item.parentNode.dispatchEvent(new MouseEvent("dragstart"));
        slot.parentNode.dispatchEvent(new MouseEvent("drop"));
        await sleep(50);
    }

    const shredFromContextMenu = async () => {
        const rarities = player.selectedItems.map(item => raritiesVariables[item.style.background] || raritiesVariables[item.style.background + ")"]);
        if (
            rarities.some(rarity => ["legendary", "mythic", "ethereal"].includes(rarity)) &&
            !confirm(`You're about to shred a Legendary, Mythic or Ethereal item ! Are you sure about that ?`)
        ) return;
        const filamentWindow = await openWindow("Filament", true);
        if (!filamentWindow) return;
        for (let index in player.selectedItems) {
            const item = player.selectedItems[index];
            const background = item.style.background;
            const rarity = raritiesVariables[background] || raritiesVariables[background + ")"];
            const slot = filamentWindow.querySelectorAll(".item-slot")[index % 5];
            const color = lootRarity.find(e => e.name === rarity)?.color;
            await moveItem(item, slot);
            sendLog(`
                <img class="icon" src="icons/check.svg"/>
                Successfully shred a
                <span style='background: ${color}; border-radius: 5px; padding: 2px 5px 2px 5px;'>${rarity}</span>
                item
            `);
            if ((Number(index) + 1) % 5 == 0) {
                filamentWindow.querySelector("button.green")?.click();
                await sleep(200);
            }
        }
        await sleep(200);
        filamentWindow.querySelector("button.green")?.click();
        closeWindow("Filament", true);
    }
    
    const sellFromContextMenu = async (item) => {
        const rarities = player.selectedItems.map(item => raritiesVariables[item.style.background] || raritiesVariables[item.style.background + ")"]);
        if (
            rarities.some(rarity => ["legendary", "mythic", "ethereal"].includes(rarity)) &&
            !confirm(`You're about to sell a Legendary, Mythic or Ethereal item ! Are you sure about that ?`)
        ) return;
        const itemSellerWindow = await openWindow("Item Seller", true);
        if (!itemSellerWindow) return;
        for (let item of player.selectedItems) {
            const slot = itemSellerWindow.querySelector(".item-slot");
            await moveItem(item, slot);
            await sleep(100);
            itemSellerWindow.querySelector("button.green")?.click();
            await sleep(400);
        }
        closeWindow("Item Seller", true);
    }

    const unequipItem = async (item) => {
        await openWindow("Inventory", true);
        item.parentNode.dispatchEvent(new MouseEvent("dblclick"));
        await sleep(100);
        closeWindow("Inventory", true);
    }
    
    const equipBasicItem = async (item) => {
        await openWindow("Computer", true);
        item.parentNode.dispatchEvent(new MouseEvent("dblclick"));
        await sleep(100);
        closeWindow("Computer", true);
    }

    const manageRightClickOnItem = (item, pointer) => {
        const src = item.closest(".window").querySelector(".window-title > img")?.src
        const windowName = src?.split("/")[src.split("/").length - 1].slice(0, -4);
        if (!windowName) return;

        if (!player.selectedItems.includes(item)) {
            removeContextMenu();
            player.selectedItems = [item]
        }

        item.parentNode.parentNode.classList.add("item-selected");
        item.parentNode.parentNode.style.outline = "3px solid var(--color-terminal)";
        const popup = new Popup(pointer);
        const type = (item.querySelector("img")?.src?.match(/[^\/]+\.webp/) || [])[0]?.slice(0, -7);
        if (player.selectedItems.length > 1)
            popup.setTitle(`${player.selectedItems.length} items selected`)
        if (["cpu", "gpu", "psu"].includes(type) && player.selectedItems.length == 1) {
            if (windowName === "computer")
                popup.addAction("Unequip", () => unequipItem(item), {selectionLimit: 1});
            else
                popup.addAction("Equip", () => equipBasicItem(item), {selectionLimit: 1});
        }
        const tradeWindow = document.querySelector(".window:has(.window-title > img[src='icons/trade.svg']");
        if (tradeWindow) {
            const alreadyInTrade = tradeWindow.querySelector(".offer-wrapper")?.querySelectorAll(".item").length;
            popup.addAction("Trade", async () => {
                const slots = tradeWindow.querySelector(".offer-wrapper").querySelectorAll(".item-slot:not(.item-slot-hasitem");
                for (let index in player.selectedItems) {
                    const item = player.selectedItems[index];
                    const slot = slots[index];
                    moveItem(item, slot);
                    await sleep(1000);
                }
            }, {selectionLimit: 6 - alreadyInTrade});
        }
        popup
            .addAction("Shred", shredFromContextMenu, {isDangerous: true})
            .addAction("Sell", sellFromContextMenu, {isDangerous: true})
            .create();
    }

    const manageRightClickOnDesktop = (pointer) => {
        new Popup(pointer)
        .addAction("Edit background", async () => {
            document.querySelectorAll(".topbar-clickable")[1].click()
            await sleep(150);
            const settings = document.querySelector(".window-title > img[src='icons/settings.svg']").parentNode.parentNode;
            settings.querySelector(".window-content > div").scrollTop = 300
        })
        .create();
    }

    const manageRightClickOnPlayer = (player, pointer) => {
        new Popup(pointer)
        .addAction("Send message", async () => {
            player.click();
            await sleep(100);
            document.querySelector("button.blue")?.click();
            document.querySelector(".window-title > img[src='icons/target.svg']")?.parentNode.querySelector(".window-close")?.click();
        })
        .addAction("Trade", async () => {
            player.click();
            await sleep(100);
            document.querySelector("button.yellow")?.click();
            document.querySelector(".window-title > img[src='icons/target.svg']")?.parentNode.querySelector(".window-close")?.click();
        })
        .create();
    }

    const manageRightClick = (target, pointer) => {
        if (document.querySelector(".context-menu"))
            removeContextMenu();
        const windowClicked = target.closest(".window")
        if (target.parentNode
            && target.parentNode.classList.contains("item")
            && ["Computer", "Inventory", "Trade"].includes(windowClicked?.querySelector(".window-title > img")?.alt))
                manageRightClickOnItem(target.parentNode, pointer);
        if (target.id == "desktop-container" || target.classList.contains("empty"))
            manageRightClickOnDesktop(pointer);
        if (target.classList.contains("message-name"))
            manageRightClickOnPlayer(target, pointer);
    }

    const manageItemSelection = (item) => {
        if (player.input.isShiftDown) {
            player.selectedItems.push(item);
            document.querySelectorAll(`.context-menu-option-limit-${player.selectedItems.length + 1}`).forEach(e => e.remove());
    
            if (document.querySelector(".context-menu")) {
                document.querySelector(".context-menu-title").innerText = `${player.selectedItems.length} items selected`;
                document.querySelector(".context-menu-title").style.display = "flex";
            }
        } else player.selectedItems = [item]
        item.parentNode.parentNode.classList.add("item-selected");
        item.parentNode.parentNode.style.outline = "3px solid var(--color-terminal)";
        player.selectedItems.sort((b, a) => {
            return  ([...a.parentNode?.parentNode?.parentNode?.parentNode.children].indexOf(a.parentNode?.parentNode?.parentNode) || 0) - 
                    ([...b.parentNode?.parentNode?.parentNode?.parentNode.children].indexOf(b.parentNode?.parentNode?.parentNode) || 0)
        })
    }

    const loadUserInputManager = () => {
        document.body.addEventListener("mousedown", (e) => {
            if (e.buttons != 1) return;
            const windowClicked = e.target.closest(".window");
            if (!e.target.classList.contains("context-menu") && !player.input.isShiftDown)
                removeContextMenu();
            if (e.target.parentNode
                && e.target.parentNode.classList.contains("item")
                && ["Computer", "Inventory", "Trade"].includes(windowClicked?.querySelector(".window-title > img")?.alt)
            )
                manageItemSelection(e.target.parentNode);
                
        })
        document.body.oncontextmenu = (e) => {
            e.preventDefault();
            manageRightClick(e.target, { clientX: e.clientX, clientY: e.clientY });
        }
        document.body.onkeydown = (e) => {
            if (e.key === "Shift")
                player.input.isShiftDown = true;
        }
        document.body.onkeyup = (e) => {
            if (e.key === "Shift")
                player.input.isShiftDown = false;
        }
    }

    (async () => {
        while (document.querySelector("#login-top") || window.location.href !== "https://s0urce.io/")
            await sleep(500);
        while (1) {
            try {
                editWelcomeMessage();
                loadingScreen("create");
                editFilaments();
                customTerminal();
                createObserver();
                editProgressBar();
                loadLocalStorage();
                updateThemeStyle();
                await loadScripts();
                loadUserInputManager();
                await sleep(1000);
                loadingScreen("delete");
                break;
            } catch {await sleep(1000);}
        }
    })();
})();

// Page Break

var send=WebSocket.prototype.send, inboundLog=true, outboundLog=true

function traverse(obj,fn){
    let keys=Object.keys(obj)
    for(let i=0;i<keys.length;i++){
      let part=obj[keys[i]]
      if(part && typeof part==="object") traverse(part,fn);
      fn(part)
    }
}

WebSocket.prototype.send=function(d){
    try{
      let index=d.indexOf('[')
      let x=JSON.parse(d.substr(index))
      if(!x || typeof x!=="object") throw "skip";
      traverse(x,function(o){
        if(o.username) o.username=o.username.split(' ')[0];
      })
      d=d.substring(0,index)+JSON.stringify(x)
    }catch{}
    if(outboundLog) console.warn(d);
    return send.bind(this)(d);
  }
  function listen(fn){
    fn = fn || console.log;
  
    let property = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data");
    
    const data = property.get;
  
    // wrapper that replaces getter
    function lookAtMessage() {
  
      let socket = this.currentTarget instanceof WebSocket;
  
      if (!socket) {
        return data.call(this);
      }
  
      let msg = data.call(this);
  
      Object.defineProperty(this, "data", { value:msg, writable:true } ); //anti-loop
      fn({ data: msg, socket:this.currentTarget, event:this });
      return this.data;
    }
    
    property.get = lookAtMessage;
    
    Object.defineProperty(MessageEvent.prototype, "data", property);
  }
  
  
  listen( ({data,socket,event}) => {
    window.SOCK=socket
    let index=data.indexOf('[')
    try{var x=JSON.parse(data.substr(index))}
    catch{return data}
    if(typeof x!=="object") return console.log(data);
    
    traverse(x,function(o){
      if(o?.btc) o.username+=` (₿${parseFloat(o.btc).toFixed(2)})`;
    })
    if(x[1]?.event==="gotGlobalRoomLogs"){
      x[1].arguments[0]=x[1].arguments[0].map(a=>{
        a=JSON.parse(a)
        let o=a.sender
        if(o.btc)
            o.username += ` (₿${parseFloat(o.btc).toFixed(2)})`;
        return JSON.stringify(a)
      })
    }
    
    data=data.substring(0,index)+JSON.stringify(x)
    event.data=data
    if(inboundLog) console.log(data);
  })
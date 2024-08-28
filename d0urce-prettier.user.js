// ==UserScript==
// @name         prettier-d0urce
// @version      1.8.0
// @description  Get a prettier s0urce.io environment! Template made by Xen0o2.
// @author       d0t
// @match        https://s0urce.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=s0urce.io
// @downloadURL  https://raw.githubusercontent.com/d0t3k1/d0t-s0urce-prettier/main/d0urce-prettier.js
// @updateURL    https://raw.githubusercontent.com/d0t3k1/d0t-s0urce-prettier/main/d0urce-prettier.js
// @grant        none
// ==/UserScript==

const VERSION = "1.8.0"

const themes = {
    "No Theme": ":root{--color-terminal:#85ff49;--color-darkgreen:#85ff492f} .window:has(img[src='icons/terminal.svg']){border-color: #85ff49} #section-code{background: linear-gradient(180deg, #000000 3%, #85ff4940 123%)} #themes{border: 1px solid #85ff49} .target-bar{outline: 1px solid #85ff49 !important} .window-title.svelte-1hjm43z {background: linear-gradient(200deg, #85ff49 0%, #427f24 100%)}",
    "Atom One": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#b270ff;}.hljs-comment,.hljs-quote{color:#b270ff;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#b270ff}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#b270ff}.hljs-literal{color:#b270ff}.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#b270ff}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#b270ff}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#b270ff}.hljs-built_in,.hljs-class .hljs-title,.hljs-title.class_{color:#b270ff}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}:root{--color-terminal:#b270ff;--color-darkgreen:#b270ff2f} .window:has(img[src='icons/terminal.svg']){border-color: #b270ff} #section-code{background: linear-gradient(180deg, #000000 3%, #b270ff40 123%)} #themes{border: 1px solid #b270ff} .target-bar{outline: 1px solid #b270ff !important} .window-title.svelte-1hjm43z {background: linear-gradient(200deg, #b270ff 0%, #59387f 100%)}",
    "Monokai": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#ff3838}.hljs-subst,.hljs-tag{color:#ff3838}.hljs-emphasis,.hljs-strong{color:#ff3838}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ff3838}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#ff3838}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#ff3838}.hljs-attribute,.hljs-symbol{color:#ff3838}.hljs-class .hljs-title,.hljs-params,.hljs-title.class_{color:#ff3838}.hljs-addition,.hljs-built_in,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#ff3838}.hljs-comment,.hljs-deletion,.hljs-meta{color:#ff3838}:root{--color-terminal:#ff3838;--color-darkgreen:#ff38382f} .window:has(img[src='icons/terminal.svg']){border-color: #ff3838} #section-code{background: linear-gradient(180deg, #000000 3%, #ff383840 123%)} #themes{border: 1px solid #ff3838} .target-bar{outline: 1px solid #ff3838 !important} .window-title.svelte-1hjm43z {background: linear-gradient(200deg, #ff3838 0%, #7f1c1c 100%)}",
    "The Deep": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#3d8566}.hljs-keyword{color:#3d8566;font-style:italic}.hljs-built_in{color:#3d8566;font-style:italic}.hljs-type{color:#3d8566}.hljs-literal{color:#3d8566}.hljs-number{color:#3d8566}.hljs-regexp{color:#3d8566}.hljs-string{color:#3d8566}.hljs-subst{color:#3d8566}.hljs-symbol{color:#3d8566}.hljs-class{color:#3d8566}.hljs-function{color:#3d8566}.hljs-title{color:#3d8566;font-style:italic}.hljs-params{color:#3d8566}.hljs-comment{color:#3d8566;font-style:italic}.hljs-doctag{color:#3d8566}.hljs-meta,.hljs-meta .hljs-keyword{color:#3d8566}.hljs-meta .hljs-string{color:#3d8566}.hljs-section{color:#3d8566}.hljs-attr,.hljs-name,.hljs-tag{color:#3d8566}.hljs-attribute{color:#3d8566}.hljs-variable{color:#3d8566}.hljs-bullet{color:#3d8566}.hljs-code{color:#3d8566}.hljs-emphasis{color:#3d8566;font-style:italic}.hljs-strong{color:#3d8566;font-weight:700}.hljs-formula{color:#3d8566}.hljs-link{color:#3d8566}.hljs-quote{color:#3d8566;font-style:italic}.hljs-selector-tag{color:#3d8566}.hljs-selector-id{color:#3d8566}.hljs-selector-class{color:#3d8566;font-style:italic}.hljs-selector-attr,.hljs-selector-pseudo{color:#3d8566;font-style:italic}.hljs-template-tag{color:#3d8566}.hljs-template-variable{color:#3d8566}.hljs-addition{color:#3d8566;font-style:italic}.hljs-deletion{color:#3d8566;font-style:italic}:root{--color-terminal:#3d8566;--color-darkgreen:#3d85662f} .window:has(img[src='icons/terminal.svg']){border-color: #3d8566} #section-code{background: linear-gradient(180deg, #000000 3%, #3d856640 123%)} #themes{border: 1px solid #3d8566} .target-bar{outline: 1px solid #3d8566 !important} .window-title.svelte-1hjm43z {background: linear-gradient(200deg, #3d8566 0%, #1e4233 100%)}",
    "Light Mode": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#ffffff}.hljs-keyword{color:#ffffff;font-style:italic}.hljs-built_in{color:#ffffff;font-style:italic}.hljs-type{color:#ffffff}.hljs-literal{color:#ffffff}.hljs-number{color:#ffffff}.hljs-regexp{color:#ffffff}.hljs-string{color:#ffffff}.hljs-subst{color:#ffffff}.hljs-symbol{color:#ffffff}.hljs-class{color:#ffffff}.hljs-function{color:#ffffff}.hljs-title{color:#ffffff;font-style:italic}.hljs-params{color:#ffffff}.hljs-comment{color:#ffffff;font-style:italic}.hljs-doctag{color:#ffffff}.hljs-meta,.hljs-meta .hljs-keyword{color:#ffffff}.hljs-meta .hljs-string{color:#ffffff}.hljs-section{color:#ffffff}.hljs-attr,.hljs-name,.hljs-tag{color:#ffffff}.hljs-attribute{color:#ffffff}.hljs-variable{color:#ffffff}.hljs-bullet{color:#ffffff}.hljs-code{color:#ffffff}.hljs-emphasis{color:#ffffff;font-style:italic}.hljs-strong{color:#ffffff;font-weight:700}.hljs-formula{color:#c792ea}.hljs-link{color:#ffffff}.hljs-quote{color:#ffffff;font-style:italic}.hljs-selector-tag{color:#ffffff}.hljs-selector-id{color:#ffffff}.hljs-selector-class{color:#ffffff;font-style:italic}.hljs-selector-attr,.hljs-selector-pseudo{color:#ffffff;font-style:italic}.hljs-template-tag{color:#ffffff}.hljs-template-variable{color:#ffffff}.hljs-addition{color:#ffffff;font-style:italic}.hljs-deletion{color:#ffffff;font-style:italic}:root{--color-terminal:#ffffff;--color-darkgreen:#ffffff2f} .window:has(img[src='icons/terminal.svg']){border-color: #ffffff} #section-code{background: linear-gradient(180deg, #000000 3%, #ffffff40 123%)} #themes{border: 1px solid #ffffff} .target-bar{outline: 1px solid #ffffff !important} .window-title.svelte-1hjm43z {background: linear-gradient(200deg, #ffffff 0%, #7f7f7f 100%)}",
    "Mythic Myer": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#05a8ff;}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#05a8ff}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#05a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#05a8ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#05a8ff}.hljs-built_in,.hljs-symbol{color:#05a8ff}.hljs-code,.hljs-comment,.hljs-formula{color:#05a8ff}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#05a8ff}.hljs-subst{color:#05a8ff}.hljs-section{color:#05a8ff;font-weight:700}.hljs-bullet{color:#05a8ff}.hljs-emphasis{color:#05a8ff;font-style:italic}.hljs-strong{color:#05a8ff;font-weight:700}.hljs-addition{color:#05a8ff;background-color:#05a8ff}.hljs-deletion{color:#05a8ff;background-color:#05a8ff}:root{--color-terminal:#05a8ff;--color-darkgreen:#05a8ff2f} .window:has(img[src='icons/terminal.svg']){border-color: #05a8ff} #section-code{background: linear-gradient(180deg, #000000 3%, #05a8ff40 123%)} #themes{border: 1px solid #05a8ff} .target-bar{outline: 1px solid #05a8ff !important} .window-title.svelte-1hjm43z {background: linear-gradient(200deg, #05a8ff 0%, #02547f 100%)}",
    "Ethereal Enjoyer": "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#ffb74e}.hljs-subst,.hljs-tag{color:#ffb74e}.hljs-emphasis,.hljs-strong{color:#ffb74e}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ffb74e}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#ffb74e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#ffb74e}.hljs-attribute,.hljs-symbol{color:#ffb74e}.hljs-class .hljs-title,.hljs-params,.hljs-title.class_{color:#ffb74e}.hljs-addition,.hljs-built_in,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#ffb74e}.hljs-comment,.hljs-deletion,.hljs-meta{color:#ffb74e}:root{--color-terminal:#ffb74e;--color-darkgreen:#ffb74e2f} .window:has(img[src='icons/terminal.svg']){border-color: #ffb74e} #section-code{background: linear-gradient(180deg, #000000 3%, #ffb74e40 123%)} #themes{border: 1px solid #ffb74e} .target-bar{outline: 1px solid #ffb74e !important}:root{--color-terminal:#ffb74e;--color-darkgreen:#ffb74e2f} .window:has(img[src='icons/terminal.svg']){border-color: #ffb74e} #section-code{background: linear-gradient(180deg, #000000 3%, #ffb74e40 123%)} #themes{border: 1px solid #ffb74e} .target-bar{outline: 1px solid #ffb74e !important} .window-title.svelte-1hjm43z {background: linear-gradient(200deg, #ffb74e 0%, #7f5b27 100%)}",
};

class Component {
	prepend;
	element;
	constructor(type, options) {
		this.prepend = options.prepend;
		const element = document.createElement(type);
		if (options.classList)
			element.classList.add(...options.classList);

        const propertiesToAssign = {
            ...options
        };
        delete propertiesToAssign.children;
        delete propertiesToAssign.style;
        delete propertiesToAssign.classList;
        Object.assign(element, propertiesToAssign);
        Object.assign(element.style, options.style);

		options.children?.filter(child => child).forEach(child => {
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
                    style: { color: "white", padding: "7px", order: 0, fontSize: "16px", fontWeight: 600, borderBottom: "1px solid var(--color-lightgrey)", display: "none" }
                }),
                new Component("div", {
                    classList: ["context-menu", "context-menu-footer"],
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
        return this;
    }

    setFooter(text) {
        this.#popup.querySelector(".context-menu-footer").innerText = text;
        this.#popup.querySelector(".context-menu-footer").style.display = "flex";
        return this;
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
            style: { width: "100%", borderRadius: "4px", padding: "5px", cursor: "pointer", color: option.isDangerous ? "var(--color-red)" : "#ffffffe6" },
            onmouseenter: (e) => e.target.style.backgroundColor = "var(--color-midgreen)",
            onmouseleave: (e) => e.target.style.backgroundColor = "unset",
            onclick: async (e) => {
				removeContextMenu();
                if (action)
                    await action(e);
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
    "Settings"
]

const rarities = ["common", "uncommon", "rare", "epic", "legendary", "mythic", "ethereal"];

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

const defaultColors = {
    windowBorder: "#91aabd3b",
    windowTabLight: "#1f1e23",
    windowTabDark: "#131317",
}

const player = {
    username: document.querySelector("img[src='icons/online.svg']")?.parentNode?.innerText?.trim(),
    hacksInProgress: [],
    currentlyHacking: null,
    lastHacked: null,
    configuration: {
        openInSilent: [],
        displayCustomFilament: "ethereal",
        desktopIconColor: localStorage.getItem("prettier-desktopIconColor") || "#ffffff",
        currentTheme: localStorage.getItem("prettier-currentTheme") || Object.keys(themes)[0],
        codeSyntaxing: !!localStorage.getItem("prettier-codeSyntaxing"),
        windowColors: localStorage.getItem("prettier-windowColors") ?
            JSON.parse(localStorage.getItem("prettier-windowColors")) :
            defaultColors
    },
    input: {
        isShiftDown: false,
    },
    selectedItems: [],
    autoloot: localStorage.getItem("prettier-autoloot") ? 
        JSON.parse(localStorage.getItem("prettier-autoloot")) :
        {
            common:     { cpu: "take", gpu: "take", psu: "take", firewall: "take", other: "take" },
            uncommon:   { cpu: "take", gpu: "take", psu: "take", firewall: "take", other: "take" },
            rare:       { cpu: "take", gpu: "take", psu: "take", firewall: "take", other: "take" },
            epic:       { cpu: "take", gpu: "take", psu: "take", firewall: "take", other: "take" },
            legendary:  { cpu: "take", gpu: "take", psu: "take", firewall: "take", other: "take" },
            mythic:     { cpu: "take", gpu: "take", psu: "take", firewall: "take", other: "take" },
        },
    tradePricing: localStorage.getItem("prettier-tradePricing") ? 
        JSON.parse(localStorage.getItem("prettier-tradePricing")) :
        {
            common:     { cpu: 0.01, gpu: 0.01, psu: 0.01, firewall: 0.01, other: 0.01 },
            uncommon:   { cpu: 0.03, gpu: 0.03, psu: 0.03, firewall: 0.03, other: 0.03 },
            rare:       { cpu: 0.1, gpu: 0.1, psu: 0.1, firewall: 0.1, other: 0.1 },
            epic:       { cpu: 0.3, gpu: 0.3, psu: 0.3, firewall: 0.3, other: 0.3 },
            legendary:  { cpu: 1.5, gpu: 1.5, psu: 1.5, firewall: 1.5, other: 1.5 },
            mythic:     { cpu: 4.5, gpu: 4.5, psu: 4.5, firewall: 4.5, other: 4.5 },
            ethereal:   { cpu: 67.5, gpu: 67.5, psu: 67.5, firewall: 67.5, other: 67.5 },
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
    cpu_dPM: [
        [1.0, 1.1, 1.2, 1.29, 1.39, 1.49, 1.59, 1.68, 1.78, 1.88, 1.97, 2.07, 2.17, 2.26, 2.36, 2.46, 2.55, 2.65, 2.74, 2.84, 2.93, 3.03, 3.12, 3.22, 3.31, 3.41, 3.5, 3.59, 3.69, 3.78, 3.87, 3.97, 4.06, 4.15, 4.25, 4.34, 4.43, 4.52, 4.61, 4.7, 4.79, 4.89, 4.98, 5.07, 5.16, 5.25, 5.34, 5.43, 5.52, 5.61, 5.7, 5.79, 5.88, 5.97, 6.06, 6.14, 6.23, 6.32, 6.41, 6.5, 6.59, 6.67, 6.76, 6.85, 6.93, 7.02, 7.11, 7.2, 7.29, 7.37, 7.46, 7.55, 7.63, 7.72, 7.8, 7.89, 7.98, 8.07, 8.15, 8.24, 8.32, 8.41, 8.49, 8.58, 8.66, 8.75, 8.83, 8.92, 9.0, 9.08, 9.17, 9.25, 9.34, 9.42, 9.5, 9.59, 9.67, 9.75, 9.83, 9.92, 10.0], 
        [1.11, 2.53, 2.86, 3.09, 3.27, 3.42, 3.55, 3.67, 3.78, 3.87, 3.97, 4.05, 4.13, 4.21, 4.29, 4.36, 4.42, 4.49, 4.55, 4.62, 4.68, 4.73, 4.79, 4.84, 4.9, 4.95, 5.0, 5.05, 5.1, 5.15, 5.19, 5.24, 5.28, 5.33, 5.37, 5.42, 5.46, 5.5, 5.55, 5.59, 5.63, 5.67, 5.71, 5.75, 5.79, 5.83, 5.87, 5.91, 5.95, 5.99, 6.03, 6.07, 6.11, 6.15, 6.19, 6.23, 6.27, 6.3, 6.34, 6.38, 6.42, 6.46, 6.5, 6.54, 6.58, 6.62, 6.67, 6.71, 6.75, 6.79, 6.83, 6.88, 6.92, 6.97, 7.01, 7.06, 7.1, 7.15, 7.2, 7.25, 7.3, 7.35, 7.4, 7.45, 7.51, 7.56, 7.62, 7.69, 7.75, 7.81, 7.89, 7.96, 8.04, 8.12, 8.21, 8.32, 8.43, 8.57, 8.74, 8.98, 9.79],
        [1.1, 2.69, 3.08, 3.35, 3.55, 3.73, 3.88, 4.01, 4.13, 4.23, 4.33, 4.43, 4.51, 4.6, 4.67, 4.75, 4.82, 4.88, 4.95, 5.01, 5.07, 5.13, 5.19, 5.24, 5.3, 5.35, 5.4, 5.45, 5.5, 5.54, 5.59, 5.64, 5.68, 5.73, 5.77, 5.81, 5.86, 5.9, 5.94, 5.98, 6.02, 6.06, 6.1, 6.14, 6.18, 6.22, 6.26, 6.3, 6.34, 6.38, 6.42, 6.46, 6.49, 6.53, 6.57, 6.61, 6.65, 6.68, 6.72, 6.76, 6.8, 6.84, 6.87, 6.91, 6.95, 6.99, 7.03, 7.07, 7.11, 7.14, 7.18, 7.22, 7.26, 7.31, 7.35, 7.39, 7.43, 7.48, 7.52, 7.56, 7.61, 7.66, 7.71, 7.75, 7.8, 7.86, 7.91, 7.97, 8.03, 8.09, 8.16, 8.23, 8.3, 8.38, 8.46, 8.56, 8.67, 8.8, 8.95, 9.18, 9.89], 
        [1.13, 2.56, 2.91, 3.17, 3.38, 3.56, 3.72, 3.86, 3.99, 4.12, 4.23, 4.34, 4.44, 4.53, 4.62, 4.71, 4.79, 4.88, 4.95, 5.03, 5.1, 5.17, 5.24, 5.3, 5.37, 5.43, 5.49, 5.54, 5.6, 5.66, 5.71, 5.76, 5.82, 5.87, 5.91, 5.96, 6.01, 6.06, 6.1, 6.15, 6.19, 6.24, 6.28, 6.32, 6.36, 6.4, 6.45, 6.49, 6.53, 6.57, 6.61, 6.64, 6.68, 6.72, 6.76, 6.8, 6.84, 6.88, 6.92, 6.96, 7.0, 7.04, 7.08, 7.12, 7.16, 7.2, 7.24, 7.28, 7.32, 7.37, 7.41, 7.45, 7.5, 7.54, 7.59, 7.64, 7.68, 7.73, 7.78, 7.83, 7.88, 7.93, 7.98, 8.03, 8.09, 8.14, 8.2, 8.26, 8.32, 8.38, 8.44, 8.51, 8.58, 8.65, 8.73, 8.82, 8.91, 9.02, 9.15, 9.31, 9.86],
        [1.23, 2.65, 3.01, 3.25, 3.45, 3.61, 3.75, 3.88, 4.0, 4.11, 4.21, 4.31, 4.4, 4.48, 4.56, 4.64, 4.72, 4.79, 4.86, 4.93, 4.99, 5.05, 5.11, 5.17, 5.23, 5.29, 5.35, 5.4, 5.46, 5.51, 5.57, 5.62, 5.67, 5.72, 5.77, 5.82, 5.87, 5.92, 5.96, 6.01, 6.06, 6.11, 6.15, 6.2, 6.25, 6.29, 6.34, 6.38, 6.43, 6.47, 6.52, 6.56, 6.6, 6.65, 6.69, 6.74, 6.78, 6.82, 6.87, 6.91, 6.95, 6.99, 7.03, 7.08, 7.12, 7.16, 7.2, 7.24, 7.28, 7.33, 7.37, 7.41, 7.45, 7.5, 7.54, 7.58, 7.63, 7.67, 7.72, 7.76, 7.81, 7.86, 7.9, 7.95, 8.0, 8.06, 8.11, 8.16, 8.22, 8.28, 8.34, 8.4, 8.47, 8.54, 8.62, 8.7, 8.8, 8.91, 9.04, 9.23, 9.86],
        [1.24, 2.48, 2.76, 2.96, 3.12, 3.25, 3.37, 3.47, 3.57, 3.65, 3.74, 3.82, 3.89, 3.96, 4.03, 4.1, 4.16, 4.22, 4.28, 4.34, 4.4, 4.45, 4.51, 4.56, 4.62, 4.67, 4.72, 4.77, 4.82, 4.87, 4.92, 4.96, 5.01, 5.05, 5.1, 5.15, 5.19, 5.24, 5.29, 5.33, 5.38, 5.42, 5.47, 5.51, 5.56, 5.6, 5.65, 5.69, 5.74, 5.78, 5.83, 5.87, 5.91, 5.96, 6.0, 6.05, 6.09, 6.13, 6.18, 6.22, 6.26, 6.31, 6.35, 6.4, 6.44, 6.49, 6.53, 6.57, 6.62, 6.66, 6.71, 6.76, 6.8, 6.85, 6.89, 6.94, 6.99, 7.04, 7.09, 7.14, 7.19, 7.24, 7.29, 7.35, 7.4, 7.46, 7.52, 7.58, 7.64, 7.71, 7.78, 7.85, 7.93, 8.02, 8.11, 8.2, 8.31, 8.44, 8.6, 8.83, 9.69], 
        [1.24, 2.52, 2.8, 3.0, 3.16, 3.29, 3.41, 3.51, 3.6, 3.69, 3.77, 3.84, 3.91, 3.98, 4.05, 4.11, 4.16, 4.22, 4.28, 4.33, 4.38, 4.43, 4.48, 4.53, 4.58, 4.63, 4.67, 4.72, 4.76, 4.81, 4.85, 4.89, 4.93, 4.98, 5.02, 5.06, 5.1, 5.14, 5.18, 5.22, 5.26, 5.3, 5.33, 5.37, 5.41, 5.45, 5.49, 5.52, 5.56, 5.6, 5.64, 5.68, 5.71, 5.75, 5.79, 5.83, 5.86, 5.9, 5.94, 5.98, 6.02, 6.06, 6.1, 6.13, 6.17, 6.21, 6.25, 6.29, 6.33, 6.38, 6.42, 6.46, 6.5, 6.55, 6.59, 6.63, 6.68, 6.73, 6.77, 6.82, 6.87, 6.92, 6.98, 7.03, 7.08, 7.14, 7.2, 7.26, 7.32, 7.39, 7.46, 7.54, 7.62, 7.71, 7.81, 7.91, 8.04, 8.18, 8.36, 8.62, 9.62]
    ],
    // Mythic GPU distribution fixed as of 8/21/2024 
    gpu_dPM: [
        [1.252e-05, 1.256e-05, 1.26e-05, 1.264e-05, 1.268e-05, 1.272e-05, 1.276e-05, 1.28e-05, 1.284e-05, 1.288e-05, 1.292e-05, 1.296e-05, 1.3e-05, 1.304e-05, 1.308e-05, 1.312e-05, 1.316e-05, 1.32e-05, 1.324e-05, 1.328e-05, 1.332e-05, 1.336e-05, 1.34e-05, 1.344e-05, 1.348e-05, 1.352e-05, 1.356e-05, 1.36e-05, 1.364e-05, 1.368e-05, 1.372e-05, 1.376e-05, 1.38e-05, 1.384e-05, 1.388e-05, 1.392e-05, 1.396e-05, 1.4e-05, 1.404e-05, 1.408e-05, 1.412e-05, 1.416e-05, 1.42e-05, 1.424e-05, 1.428e-05, 1.432e-05, 1.436e-05, 1.44e-05, 1.444e-05, 1.448e-05, 1.452e-05, 1.456e-05, 1.46e-05, 1.464e-05, 1.468e-05, 1.472e-05, 1.476e-05, 1.48e-05, 1.484e-05, 1.488e-05, 1.492e-05, 1.496e-05, 1.5e-05, 1.504e-05, 1.508e-05, 1.512e-05, 1.516e-05, 1.52e-05, 1.524e-05, 1.528e-05, 1.532e-05, 1.536e-05, 1.54e-05, 1.544e-05, 1.548e-05, 1.552e-05, 1.556e-05, 1.56e-05, 1.564e-05, 1.568e-05, 1.572e-05, 1.576e-05, 1.58e-05, 1.584e-05, 1.588e-05, 1.592e-05, 1.596e-05, 1.6e-05, 1.604e-05, 1.608e-05, 1.612e-05, 1.616e-05, 1.62e-05, 1.624e-05, 1.628e-05, 1.632e-05, 1.636e-05, 1.64e-05, 1.644e-05, 1.648e-05, 1.652e-05], 
        [1.394e-05, 1.407e-05, 1.42e-05, 1.433e-05, 1.446e-05, 1.459e-05, 1.472e-05, 1.485e-05, 1.498e-05, 1.511e-05, 1.524e-05, 1.537e-05, 1.55e-05, 1.563e-05, 1.575e-05, 1.588e-05, 1.602e-05, 1.614e-05, 1.627e-05, 1.641e-05, 1.654e-05, 1.667e-05, 1.68e-05, 1.693e-05, 1.705e-05, 1.718e-05, 1.731e-05, 1.744e-05, 1.757e-05, 1.771e-05, 1.783e-05, 1.797e-05, 1.81e-05, 1.823e-05, 1.836e-05, 1.849e-05, 1.862e-05, 1.875e-05, 1.888e-05, 1.9e-05, 1.913e-05, 1.926e-05, 1.939e-05, 1.952e-05, 1.965e-05, 1.978e-05, 1.991e-05, 2.004e-05, 2.017e-05, 2.03e-05, 2.043e-05, 2.057e-05, 2.07e-05, 2.083e-05, 2.096e-05, 2.109e-05, 2.122e-05, 2.135e-05, 2.147e-05, 2.161e-05, 2.173e-05, 2.186e-05, 2.199e-05, 2.212e-05, 2.225e-05, 2.238e-05, 2.251e-05, 2.264e-05, 2.277e-05, 2.29e-05, 2.303e-05, 2.316e-05, 2.329e-05, 2.342e-05, 2.355e-05, 2.368e-05, 2.381e-05, 2.394e-05, 2.407e-05, 2.42e-05, 2.433e-05, 2.447e-05, 2.46e-05, 2.473e-05, 2.486e-05, 2.499e-05, 2.511e-05, 2.524e-05, 2.537e-05, 2.55e-05, 2.563e-05, 2.576e-05, 2.589e-05, 2.602e-05, 2.615e-05, 2.628e-05, 2.641e-05, 2.654e-05, 2.668e-05, 2.681e-05, 2.694e-05], 
        [1.936e-05, 1.953e-05, 1.97e-05, 1.987e-05, 2.004e-05, 2.021e-05, 2.038e-05, 2.054e-05, 2.072e-05, 2.088e-05, 2.105e-05, 2.122e-05, 2.14e-05, 2.157e-05, 2.174e-05, 2.191e-05, 2.208e-05, 2.225e-05, 2.242e-05, 2.26e-05, 2.276e-05, 2.293e-05, 2.311e-05, 2.328e-05, 2.344e-05, 2.362e-05, 2.379e-05, 2.396e-05, 2.413e-05, 2.43e-05, 2.447e-05, 2.464e-05, 2.481e-05, 2.498e-05, 2.514e-05, 2.531e-05, 2.548e-05, 2.566e-05, 2.583e-05, 2.599e-05, 2.617e-05, 2.633e-05, 2.65e-05, 2.667e-05, 2.684e-05, 2.701e-05, 2.718e-05, 2.735e-05, 2.752e-05, 2.768e-05, 2.785e-05, 2.802e-05, 2.819e-05, 2.836e-05, 2.853e-05, 2.87e-05, 2.887e-05, 2.904e-05, 2.921e-05, 2.939e-05, 2.955e-05, 2.972e-05, 2.989e-05, 3.006e-05, 3.023e-05, 3.04e-05, 3.057e-05, 3.074e-05, 3.091e-05, 3.108e-05, 3.125e-05, 3.142e-05, 3.159e-05, 3.176e-05, 3.193e-05, 3.21e-05, 3.227e-05, 3.244e-05, 3.261e-05, 3.278e-05, 3.295e-05, 3.312e-05, 3.329e-05, 3.346e-05, 3.363e-05, 3.38e-05, 3.397e-05, 3.414e-05, 3.431e-05, 3.448e-05, 3.466e-05, 3.483e-05, 3.499e-05, 3.517e-05, 3.534e-05, 3.551e-05, 3.568e-05, 3.585e-05, 3.602e-05, 3.619e-05, 3.636e-05], 
        [2.587e-05, 2.608e-05, 2.628e-05, 2.65e-05, 2.67e-05, 2.691e-05, 2.711e-05, 2.732e-05, 2.753e-05, 2.773e-05, 2.794e-05, 2.814e-05, 2.835e-05, 2.856e-05, 2.877e-05, 2.897e-05, 2.918e-05, 2.938e-05, 2.959e-05, 2.979e-05, 3e-05, 3.02e-05, 3.041e-05, 3.062e-05, 3.083e-05, 3.103e-05, 3.124e-05, 3.144e-05, 3.165e-05, 3.185e-05, 3.206e-05, 3.227e-05, 3.248e-05, 3.269e-05, 3.289e-05, 3.31e-05, 3.331e-05, 3.351e-05, 3.372e-05, 3.393e-05, 3.414e-05, 3.435e-05, 3.456e-05, 3.476e-05, 3.497e-05, 3.518e-05, 3.538e-05, 3.559e-05, 3.58e-05, 3.6e-05, 3.621e-05, 3.642e-05, 3.663e-05, 3.683e-05, 3.704e-05, 3.725e-05, 3.745e-05, 3.766e-05, 3.787e-05, 3.807e-05, 3.828e-05, 3.849e-05, 3.869e-05, 3.89e-05, 3.91e-05, 3.931e-05, 3.952e-05, 3.973e-05, 3.993e-05, 4.014e-05, 4.035e-05, 4.055e-05, 4.076e-05, 4.096e-05, 4.117e-05, 4.138e-05, 4.159e-05, 4.18e-05, 4.201e-05, 4.221e-05, 4.242e-05, 4.263e-05, 4.283e-05, 4.304e-05, 4.325e-05, 4.346e-05, 4.366e-05, 4.387e-05, 4.408e-05, 4.428e-05, 4.449e-05, 4.47e-05, 4.491e-05, 4.511e-05, 4.532e-05, 4.553e-05, 4.574e-05, 4.594e-05, 4.615e-05, 4.636e-05, 4.657e-05], 
        [4.119e-05, 4.135e-05, 4.153e-05, 4.17e-05, 4.186e-05, 4.203e-05, 4.22e-05, 4.237e-05, 4.254e-05, 4.271e-05, 4.287e-05, 4.304e-05, 4.321e-05, 4.338e-05, 4.355e-05, 4.371e-05, 4.388e-05, 4.405e-05, 4.422e-05, 4.439e-05, 4.455e-05, 4.472e-05, 4.489e-05, 4.506e-05, 4.522e-05, 4.539e-05, 4.556e-05, 4.573e-05, 4.589e-05, 4.606e-05, 4.623e-05, 4.64e-05, 4.656e-05, 4.673e-05, 4.69e-05, 4.707e-05, 4.724e-05, 4.74e-05, 4.757e-05, 4.774e-05, 4.791e-05, 4.807e-05, 4.824e-05, 4.841e-05, 4.858e-05, 4.875e-05, 4.892e-05, 4.909e-05, 4.925e-05, 4.942e-05, 4.959e-05, 4.976e-05, 4.993e-05, 5.01e-05, 5.027e-05, 5.043e-05, 5.06e-05, 5.077e-05, 5.094e-05, 5.111e-05, 5.128e-05, 5.144e-05, 5.161e-05, 5.178e-05, 5.195e-05, 5.211e-05, 5.228e-05, 5.245e-05, 5.262e-05, 5.279e-05, 5.296e-05, 5.313e-05, 5.329e-05, 5.346e-05, 5.363e-05, 5.379e-05, 5.396e-05, 5.413e-05, 5.43e-05, 5.446e-05, 5.463e-05, 5.48e-05, 5.497e-05, 5.513e-05, 5.53e-05, 5.547e-05, 5.564e-05, 5.581e-05, 5.598e-05, 5.614e-05, 5.631e-05, 5.647e-05, 5.664e-05, 5.681e-05, 5.697e-05, 5.714e-05, 5.731e-05, 5.748e-05, 5.765e-05, 5.782e-05, 5.799e-05], 
        [5.580e-05, 5.603e-05, 5.625e-05, 5.648e-05, 5.671e-05, 5.693e-05, 5.716e-05, 5.738e-05, 5.761e-05, 5.784e-05, 5.806e-05, 5.829e-05, 5.852e-05, 5.874e-05, 5.897e-05, 5.919e-05, 5.942e-05, 5.965e-05, 5.987e-05, 6.010e-05, 6.033e-05, 6.055e-05, 6.078e-05, 6.100e-05, 6.123e-05, 6.146e-05, 6.168e-05, 6.191e-05, 6.214e-05, 6.236e-05, 6.259e-05, 6.281e-05, 6.304e-05, 6.327e-05, 6.349e-05, 6.372e-05, 6.395e-05, 6.417e-05, 6.440e-05, 6.462e-05, 6.485e-05, 6.508e-05, 6.530e-05, 6.553e-05, 6.576e-05, 6.598e-05, 6.621e-05, 6.643e-05, 6.666e-05, 6.689e-05, 6.711e-05, 6.734e-05, 6.757e-05, 6.779e-05, 6.802e-05, 6.824e-05, 6.847e-05, 6.870e-05, 6.892e-05, 6.915e-05, 6.938e-05, 6.960e-05, 6.983e-05, 7.005e-05, 7.028e-05, 7.051e-05, 7.073e-05, 7.096e-05, 7.119e-05, 7.141e-05, 7.164e-05, 7.186e-05, 7.209e-05, 7.232e-05, 7.254e-05, 7.277e-05, 7.300e-05, 7.322e-05, 7.345e-05, 7.367e-05, 7.390e-05, 7.413e-05, 7.435e-05, 7.458e-05, 7.481e-05, 7.503e-05, 7.526e-05, 7.548e-05, 7.571e-05, 7.594e-05, 7.616e-05, 7.639e-05, 7.662e-05, 7.684e-05, 7.707e-05, 7.729e-05, 7.752e-05, 7.775e-05, 7.797e-05, 7.820e-05],
        [8.162e-05, 8.179e-05, 8.196e-05, 8.213e-05, 8.23e-05, 8.247e-05, 8.264e-05, 8.281e-05, 8.298e-05, 8.315e-05, 8.332e-05, 8.349e-05, 8.366e-05, 8.383e-05, 8.4e-05, 8.418e-05, 8.434e-05, 8.451e-05, 8.468e-05, 8.485e-05, 8.502e-05, 8.519e-05, 8.537e-05, 8.553e-05, 8.57e-05, 8.587e-05, 8.604e-05, 8.621e-05, 8.638e-05, 8.655e-05, 8.671e-05, 8.689e-05, 8.706e-05, 8.723e-05, 8.74e-05, 8.757e-05, 8.774e-05, 8.791e-05, 8.808e-05, 8.824e-05, 8.841e-05, 8.858e-05, 8.875e-05, 8.892e-05, 8.909e-05, 8.926e-05, 8.943e-05, 8.96e-05, 8.977e-05, 8.994e-05, 9.011e-05, 9.028e-05, 9.045e-05, 9.062e-05, 9.079e-05, 9.096e-05, 9.113e-05, 9.13e-05, 9.147e-05, 9.164e-05, 9.181e-05, 9.198e-05, 9.215e-05, 9.232e-05, 9.249e-05, 9.267e-05, 9.284e-05, 9.301e-05, 9.318e-05, 9.335e-05, 9.352e-05, 9.369e-05, 9.385e-05, 9.403e-05, 9.42e-05, 9.436e-05, 9.454e-05, 9.47e-05, 9.487e-05, 9.504e-05, 9.521e-05, 9.539e-05, 9.556e-05, 9.573e-05, 9.59e-05, 9.607e-05, 9.624e-05, 9.641e-05, 9.658e-05, 9.675e-05, 9.692e-05, 9.709e-05, 9.726e-05, 9.744e-05, 9.76e-05, 9.777e-05, 9.794e-05, 9.812e-05, 9.829e-05, 9.845e-05, 9.862e-05]
    ],
    psu_dPM: [
        1.0, 1.09, 1.18, 1.27, 1.36, 1.45, 1.54, 1.63, 1.72, 1.81, 1.9, 1.99, 2.08, 2.17, 2.26, 2.36, 2.45, 2.54, 2.63, 2.72, 2.81, 2.9, 2.99, 3.08, 3.17, 3.25, 3.34, 3.43, 3.52, 3.61, 3.7, 3.79, 3.88, 3.97, 4.06, 4.15, 4.24, 4.33, 4.42, 4.51, 4.6, 4.69, 4.78, 4.87, 4.96, 5.05, 5.14, 5.23, 5.32, 5.41, 5.5, 5.59, 5.68, 5.77, 5.86, 5.95, 6.04, 6.13, 6.22, 6.31, 6.4, 6.49, 6.58, 6.67, 6.76, 6.85, 6.94, 7.03, 7.12, 7.21, 7.3, 7.39, 7.48, 7.57, 7.66, 7.75, 7.84, 7.93, 8.02, 8.11, 8.2, 8.29, 8.38, 8.47, 8.56, 8.65, 8.74, 8.83, 8.92, 9.01, 9.1, 9.19, 9.28, 9.37, 9.46, 9.55, 9.64, 9.73, 9.82, 9.91, 10.0
    ],
    fire_dPM: [
        [1.0, 1.09, 1.18, 1.27, 1.36, 1.45, 1.54, 1.63, 1.72, 1.81, 1.9, 1.99, 2.08, 2.17, 2.26, 2.35, 2.44, 2.53, 2.62, 2.71, 2.8, 2.89, 2.98, 3.07, 3.16, 3.25, 3.34, 3.43, 3.52, 3.61, 3.7, 3.79, 3.88, 3.96, 4.05, 4.14, 4.24, 4.33, 4.42, 4.51, 4.6, 4.69, 4.78, 4.87, 4.96, 5.05, 5.14, 5.23, 5.32, 5.4, 5.49, 5.58, 5.68, 5.76, 5.86, 5.95, 6.04, 6.13, 6.21, 6.3, 6.39, 6.48, 6.57, 6.66, 6.75, 6.84, 6.93, 7.02, 7.11, 7.2, 7.29, 7.38, 7.47, 7.56, 7.65, 7.74, 7.83, 7.92, 8.01, 8.1, 8.2, 8.29, 8.38, 8.47, 8.56, 8.64, 8.73, 8.82, 8.92, 9.01, 9.1, 9.19, 9.28, 9.37, 9.46, 9.55, 9.64, 9.73, 9.82, 9.91, 10.0], 
        [1.01, 1.62, 1.84, 1.99, 2.12, 2.24, 2.34, 2.44, 2.53, 2.62, 2.7, 2.77, 2.85, 2.92, 2.99, 3.05, 3.12, 3.18, 3.24, 3.3, 3.36, 3.41, 3.47, 3.52, 3.58, 3.63, 3.68, 3.73, 3.78, 3.83, 3.88, 3.93, 3.98, 4.03, 4.08, 4.14, 4.19, 4.24, 4.29, 4.36, 4.41, 4.47, 4.52, 4.57, 4.63, 4.68, 4.73, 4.79, 4.84, 4.9, 4.95, 5.01, 5.06, 5.12, 5.17, 5.23, 5.28, 5.34, 5.4, 5.45, 5.51, 5.57, 5.63, 5.68, 5.74, 5.8, 5.86, 5.92, 5.98, 6.04, 6.1, 6.16, 6.22, 6.28, 6.34, 6.4, 6.46, 6.53, 6.59, 6.66, 6.73, 6.8, 6.87, 6.95, 7.05, 7.13, 7.21, 7.3, 7.39, 7.48, 7.58, 7.68, 7.8, 7.91, 8.04, 8.18, 8.33, 8.51, 8.72, 9.01, 9.88], 
        [1.08, 1.97, 2.2, 2.37, 2.52, 2.64, 2.76, 2.86, 2.96, 3.05, 3.13, 3.21, 3.28, 3.36, 3.43, 3.49, 3.56, 3.62, 3.68, 3.74, 3.8, 3.85, 3.91, 3.96, 4.01, 4.06, 4.11, 4.16, 4.21, 4.25, 4.3, 4.35, 4.39, 4.43, 4.48, 4.52, 4.56, 4.6, 4.64, 4.69, 4.73, 4.77, 4.81, 4.85, 4.89, 4.93, 4.97, 5.01, 5.04, 5.08, 5.12, 5.16, 5.2, 5.24, 5.28, 5.32, 5.36, 5.4, 5.44, 5.48, 5.52, 5.57, 5.61, 5.65, 5.69, 5.74, 5.78, 5.83, 5.87, 5.92, 5.97, 6.02, 6.07, 6.12, 6.17, 6.22, 6.28, 6.33, 6.39, 6.45, 6.51, 6.57, 6.63, 6.69, 6.76, 6.83, 6.9, 6.97, 7.04, 7.12, 7.21, 7.3, 7.39, 7.49, 7.6, 7.73, 7.86, 8.03, 8.24, 8.53, 9.64], 
        [1.18, 2.19, 2.4, 2.55, 2.68, 2.78, 2.88, 2.96, 3.04, 3.11, 3.18, 3.25, 3.31, 3.37, 3.42, 3.48, 3.53, 3.58, 3.63, 3.68, 3.73, 3.77, 3.82, 3.86, 3.9, 3.95, 3.99, 4.03, 4.07, 4.11, 4.15, 4.18, 4.22, 4.26, 4.3, 4.33, 4.37, 4.41, 4.44, 4.48, 4.52, 4.55, 4.59, 4.63, 4.67, 4.7, 4.74, 4.77, 4.81, 4.85, 4.89, 4.92, 4.96, 5.0, 5.04, 5.08, 5.12, 5.16, 5.19, 5.23, 5.28, 5.32, 5.36, 5.4, 5.45, 5.49, 5.53, 5.58, 5.62, 5.67, 5.72, 5.77, 5.82, 5.87, 5.92, 5.97, 6.02, 6.08, 6.14, 6.19, 6.25, 6.31, 6.37, 6.44, 6.5, 6.57, 6.64, 6.72, 6.79, 6.88, 6.96, 7.05, 7.15, 7.25, 7.37, 7.49, 7.64, 7.82, 8.02, 8.31, 9.64], 
        [1, 1.45, 1.6, 1.71, 1.8, 1.87, 1.93, 2.0, 2.05, 2.11, 2.16, 2.21, 2.26, 2.31, 2.36, 2.41, 2.46, 2.51, 2.57, 2.62, 2.67, 2.73, 2.78, 2.84, 2.9, 2.96, 3.02, 3.08, 3.14, 3.2, 3.26, 3.32, 3.37, 3.43, 3.48, 3.53, 3.59, 3.64, 3.7, 3.75, 3.81, 3.86, 3.92, 3.98, 4.03, 4.09, 4.15, 4.21, 4.27, 4.33, 4.39, 4.45, 4.52, 4.58, 4.65, 4.72, 4.79, 4.86, 4.94, 5.01, 5.09, 5.16, 5.24, 5.32, 5.4, 5.48, 5.55, 5.62, 5.69, 5.76, 5.83, 5.9, 5.97, 6.04, 6.11, 6.19, 6.26, 6.33, 6.41, 6.49, 6.57, 6.65, 6.74, 6.82, 6.91, 7.0, 7.1, 7.19, 7.29, 7.39, 7.49, 7.6, 7.7, 7.8, 7.9, 8.01, 8.14, 8.28, 8.45, 8.69, 9.57], 
        [1.08, 2.01, 2.23, 2.39, 2.51, 2.61, 2.71, 2.79, 2.86, 2.94, 3.01, 3.08, 3.15, 3.23, 3.31, 3.4, 3.48, 3.55, 3.63, 3.7, 3.77, 3.84, 3.9, 3.97, 4.03, 4.09, 4.15, 4.21, 4.27, 4.32, 4.37, 4.42, 4.46, 4.5, 4.55, 4.59, 4.63, 4.67, 4.71, 4.75, 4.78, 4.82, 4.86, 4.9, 4.94, 4.98, 5.02, 5.06, 5.1, 5.14, 5.18, 5.22, 5.26, 5.3, 5.34, 5.38, 5.42, 5.46, 5.5, 5.54, 5.59, 5.63, 5.67, 5.71, 5.75, 5.79, 5.83, 5.88, 5.92, 5.96, 6.01, 6.05, 6.1, 6.14, 6.19, 6.23, 6.28, 6.33, 6.38, 6.42, 6.48, 6.53, 6.58, 6.63, 6.69, 6.75, 6.81, 6.87, 6.93, 7.0, 7.07, 7.14, 7.22, 7.31, 7.4, 7.51, 7.63, 7.77, 7.94, 8.2, 9.19], 
        [1.06, 2.32, 2.6, 2.8, 2.96, 3.09, 3.21, 3.31, 3.4, 3.49, 3.57, 3.65, 3.72, 3.79, 3.85, 3.91, 3.97, 4.03, 4.09, 4.14, 4.19, 4.24, 4.29, 4.34, 4.39, 4.43, 4.48, 4.52, 4.57, 4.61, 4.66, 4.7, 4.74, 4.78, 4.82, 4.86, 4.9, 4.94, 4.98, 5.02, 5.06, 5.1, 5.14, 5.18, 5.22, 5.26, 5.29, 5.33, 5.37, 5.41, 5.45, 5.49, 5.52, 5.56, 5.6, 5.64, 5.68, 5.72, 5.76, 5.8, 5.84, 5.88, 5.92, 5.96, 6.0, 6.04, 6.08, 6.12, 6.16, 6.2, 6.25, 6.29, 6.34, 6.38, 6.43, 6.47, 6.52, 6.57, 6.62, 6.67, 6.72, 6.78, 6.83, 6.89, 6.95, 7.01, 7.08, 7.14, 7.21, 7.29, 7.37, 7.45, 7.54, 7.64, 7.75, 7.87, 8.01, 8.18, 8.39, 8.69, 9.91]
    ],
    // Last updated as of 7/19/2024
    filament_price: [
        0.01, 0.03, 0.1, 0.3, 1.5, 4.5, 45
    ],
};

const halfColor = (hexColor) => {
    return "#" + hexColor.match(/[^#]{2}/g).map(e => ('00' + (Math.floor(parseInt(e, 16) / 2).toString(16))).slice(-2)).join("")
}

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
        if (progressBar.querySelector("div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"))
            progressBar.querySelector("div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").style.background = "var(--color-darkgreen)";
    }

    const prettierLoadFails = (code) => {
        alert(`Prettier-d0urce loading failed, please contact d0t on Discord (error code: ${code})`);
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
        if (!codeElement || !codeSection || !player.configuration.codeSyntaxing) return;
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
                style: { width: `${progression}%`, height: "15px", background: "var(--color-terminal)", borderRadius: "4px", transitionDuration: "0.3s" },
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

    const editTradeWindow = (tradeWindow) => {
        const button = new Component("button", {
            innerText: "Auto",
            classList: ["green", "svelte-ec9kqa"],
            style: { height: "36.5px", padding: "6px 14px", fontSize: "16px", boxShadow: "0 10px 15px var(--color-shadow)" },
            onclick: async () => {
                const items = Array.from(tradeWindow.querySelectorAll(".offer-wrapper")[1].querySelectorAll(".item"));
                const price = items.reduce((a, item) => {
                    const background = item.style.background;
                    const rarity = raritiesVariables[background] || raritiesVariables[background + ")"];    
                    const type = (item.querySelector("img")?.src?.match(/[^\/]+\.webp/) || [])[0]?.slice(0, -7);
                    const lvl = item.outerText.split("lvl ")[1] * 1 || 1
                    return a + (player.tradePricing[rarity][type] || player.tradePricing[rarity]["other"]) + (lvl-1) * 3 * (player.tradePricing[rarity][type] || player.tradePricing[rarity]["other"]);
                }, 0)
                const currentBTC = Number(document.querySelector(".topbar-value > div").textContent.slice(0, -4));
                if (currentBTC < price)
                    return sendLog(`<div style="color: var(--color-red);">You don't have enough BTC !</div>`)
                tradeWindow.querySelector("button.grey")?.click();
                await sleep(200);
                const input = tradeWindow.querySelector("input");
                input.value = price.toString();
                input.dispatchEvent(new Event("input"));
                await sleep(200);
                tradeWindow.querySelectorAll("button.green")[1]?.click();
                await sleep(200);
            }
        })

        tradeWindow.querySelector("#wrapper").parentNode.append(button.element);
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

    const dPS = (dPM,level,rarity) => {
        var basePrice = stats.filament_price[rarity];
        const value = (level-1)*3*basePrice + basePrice;
        //console.log(dPM,rarity)
        switch (rarity) {
            case 5:
                if (dPM > 50) return (value).toFixed(2) + "~" + (value*2).toFixed(2);
                else if (dPM > 1) return (value + basePrice*3 - 1.928 * (dPM - 1) ** (1/2)).toFixed(2) + "~" + (value * 2 + basePrice + basePrice * 2 * 4 - 3 * (dPM - 1) ** (2/3)).toFixed(2);
                else if (dPM > 0) return (value * 2 + basePrice * 8).toFixed(2) + "+"
            case 6:
                if (dPM == 100) return (value).toFixed(4);
                else if (dPM > 50) return (value + basePrice*0.5 + 0.5 - 1.7 * (dPM - 50) ** (2/3)).toFixed(2) + "~" + (basePrice*1.5).toFixed(2);
                else if (dPM > 1) return (value + basePrice*3 - 16 * (dPM - 1) ** (1/2)).toFixed(2) + "~" + (value/45*68 + basePrice/45*68 * 4 - 20.3 * (dPM - 1) ** (2/3)).toFixed(2);
                else if (dPM > 0) return (value/45*68 + basePrice/45*68 * 4 - 20.3 * (dPM - 1) ** (2/3)).toFixed(2);
            default:
                if (dPM > 30) return (value).toFixed(4) + "~" + (value*2).toFixed(4);
                else if (dPM > 1) return (value + basePrice - 4.3 * basePrice / 30 * (dPM - 1) ** (1/2)).toFixed(4) + "~" + (value*2 + basePrice*2 - 4.3 * basePrice / 30 * (dPM - 1) ** (2/3)).toFixed(4);
                else if (dPM > 0) return (value*2 + basePrice*2 - 4.3 * basePrice / 30 * (dPM - 1) ** (2/3)).toFixed(4) + "+";
                // If there's no estimated price for it, chances are it's worth a lot
                else return "Invaluable";
        }
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

    const percentile = (query, dist) => {
        //console.log(query, dist)
        var p = 100;
        for (var i = 0; i < dist.length; i++) {
            if (query <= dist[i+1]) break;
            else p--; 
        }
        return p;
    }

    const dPM = (grade,rarity,type) => {
        switch(type) {
            case "cpu": return percentile(grade, stats.cpu_dPM[rarity])
            case "gpu": return percentile(grade, stats.gpu_dPM[rarity])
            case "psu": return percentile(grade, stats.psu_dPM)
            case "router": return percentile(grade, stats.fire_dPM[rarity])
        }
    }

    const getItemGrade = (type, level, index, effects, dPM_flag=false) => {
        switch(type) {
            case "cpu":
                const hack = !dPM_flag ? effects["Hack Damage"] : effects["Hack Damage"] - stats.cputerm[index]*(level-1);
                if (dPM_flag) level = 1
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
                const boost = !dPM_flag ? effects["Crypto Mining Power"] : effects["Crypto Mining Power"] - stats.psu_term[index]*(level-1);
                if (dPM_flag) level = 1
                return dPI(boost, level, index).toFixed(4)
            case "router":
                if (dPM_flag) level = 1
                const hp = !dPM_flag ? effects["Firewall Health"] : effects["Firewall Health"] - stats.fireterm[index]*(level-1);
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
        if (grade == -1) return

        const standardGrade = type != 'gpu' ? getItemGrade(type, level, index, effects, true) : effects["Idle Crypto Mining"]-stats.gpu_term[index]*(level-1);

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
    
        const percentile = dPM(standardGrade,index,type);
        if (percentile == 3 || (percentile > 20 && percentile % 10 == 3)) description.querySelector(".rarity").innerText = percentile+"rd Percentile"; 
        else if (percentile == 2 || (percentile > 20 && percentile % 10 == 2)) description.querySelector(".rarity").innerText = percentile+"nd Percentile";
        else if (percentile == 1 || (percentile > 20 && percentile % 10 == 1)) description.querySelector(".rarity").innerText = percentile+"st Percentile";
        else description.querySelector(".rarity").innerText = percentile+"th Percentile";

        const price = dPS(percentile,level,index,type)
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
        const item = document.querySelector(".window-loot > div > div > div > div > div > .item")
        let type = (item.querySelector("img")?.src?.match(/[^\/]+\.webp/) || [])[0]?.slice(0, -7).replace("router", "firewall");
        if (item && type) {
            let background = item.style.background
            let rarity = raritiesVariables[background];
            if (!rarity) rarity = raritiesVariables[background + ")"];
            if (!player.autoloot[rarity][type]) type = "other";
            let color = getComputedStyle(item).getPropertyValue(background.toString().slice(4, background.endsWith(")") ? -1 : background.length))
            if (rarity){
                await sleep(200);
                const action = player.autoloot[rarity][type];
                if (action === "nothing")
                    return;
                if (action === "take")
                    await openWindow("Inventory", true);
                const button = document.querySelector(lootButtons[player.autoloot[rarity][type]])
                button?.click();
                sendLog(`
                    <img class="icon" src="icons/check.svg"/>
                    Successfully ${action.replace("take", "took").replace("sell", "sold").replace("shred", "shredded")} ${["uncommon", "epic", "ethereal"].includes(rarity) ? "an" : "a"}
                    <span style='background: ${color}; border-radius: 5px; padding: 2px 5px 2px 5px;'>${rarity}</span>
                    item
                `);
                await sleep(100);
                closeWindow("Inventory", true);
                await sleep(500);
            }
        }
    }

    const allEqual = (array) => {
        return array.every(value => value === array[0]);
    }

    const getItemRarityScore = (item) => {
        const background = item.style.background;
        return rarities.indexOf(raritiesVariables[background] || raritiesVariables[background + ")"]);
    }

    const getItemNameScore = (item) => {
        return item.textContent.trim().charCodeAt(0);
    }
    
    const getItemPrice = async (item) => {
        await item.dispatchEvent(new MouseEvent("mouseover"));
        await sleep(100);
        const price = Number(document.querySelector(".estimated-price")?.textContent.trim().split("~")[0].replace("+","") || 0)
        await item.dispatchEvent(new MouseEvent("mouseleave"));
        return price;
    }
    const getItemdTI = async (item) => {
        await item.dispatchEvent(new MouseEvent("mouseover"));
        await sleep(100);
        const price = Number(document.querySelector("#grade")?.textContent.split(" / ")[0] || 0)
        await item.dispatchEvent(new MouseEvent("mouseleave"));
        return price;
    }
    
    const getItemTypeScore = (item) => {
        const types = ["cpu", "gpu", "psu", "router"]
        const type = (item.querySelector("img")?.src?.match(/[^\/]+\.webp/) || [])[0]?.slice(0, -7);
        const score = types.indexOf(type);
        return score == -1 ? types.length : score;
    }
    
    const getItemToMove = async (order, scores) => {
        const inventoryWindow = document.querySelector(".window-title > img[src='icons/inventory.svg']").closest(".window");
        const inventory = Array.from(inventoryWindow.querySelectorAll(".item"))
        return inventory.find((_, index) => (order === "asc" ? scores[index] > scores[index + 1] : scores[index] < scores[index + 1]))
    }

    const sortItem = async (item, itemSellerWindow) => {
        const slot = itemSellerWindow.querySelector(".item-slot");
        moveItem(item, slot);
        await sleep(110);
        itemSellerWindow.querySelector(".item")?.parentNode.dispatchEvent(new MouseEvent("dblclick"));
    }

    const sortInventory = async (order, getScore) => {
        const itemSellerWindow = await openWindow("Item Seller", true);
        const inventoryWindow = document.querySelector(".window-title > img[src='icons/inventory.svg']").closest(".window");
        let inventory = Array.from(inventoryWindow.querySelectorAll(".item"))
		const scores = [];
		for (let item of inventory) {
			const result = await getScore(item);
			scores.push(result);
		}
        let nextItem = await getItemToMove(order, scores);
        while (nextItem) {
            await sortItem(nextItem, itemSellerWindow);
			inventory = Array.from(inventoryWindow.querySelectorAll(".item"))
			const index = inventory.indexOf(nextItem);
			scores.push(scores[index]);
			scores.splice(index, 1);
            await sleep(110);
            nextItem = await getItemToMove(order, scores);
        }
        closeWindow("Item Seller");
    }

    const customSort = async () => {
        const inventory = await openWindow("Inventory");
        const items = Array.from(inventory.querySelectorAll(".item"));
        items.forEach((item, index) => item.id = `inventory${index}`);
        let mode = "insert";
        const e = new Component("div", {
            id: "customSort",
            style: {
                position: "absolute",
                zIndex: 1000,
                height: "100vh",
                width: "100vw",
                top: 0,
                left: 0,
                backgroundColor: "#000000cc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
            },
            children: [
                new Component("h1", {
                    innerText: "Drag to sort"
                }),
                new Component("div", {
                    style: { display: "flex", border: "1px solid var(--color-terminal)", borderRadius: "8px", fontSize: "20px", fontFamily: "var(--font-family-2)"},
                    children: [
                        new Component("span", {
                            classList: ["customSort-insert"],
                            style: { width: "200px", padding: "5px 15px", color: "white", backgroundColor: "var(--color-midgreen)", borderRadius: "8px", textAlign: "center", cursor: "pointer"},
                            innerText: "Insert",
                            onclick: (e) => {
                                mode = "insert";
                                e.target.style.backgroundColor = "var(--color-midgreen)";
                                document.querySelector(".customSort-replace").style.backgroundColor = "unset";
                            }
                        }),
                        new Component("span", {
                            classList: ["customSort-replace"],
                            style: { width: "200px", padding: "5px 15px", color: "white", borderRadius: "8px", textAlign: "center", cursor: "pointer"},
                            innerText: "Replace",
                            onclick: (e) => {
                                mode = "replace";
                                e.target.style.backgroundColor = "var(--color-midgreen)";
                                document.querySelector(".customSort-insert").style.backgroundColor = "unset";
                            }
                        }),
                    ]
                }),
                new Component("ul", {
                    id: "draggable-menu",
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        padding: 0,
                        listStyleType: "none",
                        overflow: "auto",
                        height: "70vh",
                        // width: "90%",
                        width: (325 * Math.ceil(items.length / 15)) + "px",
                        flexWrap: "wrap",
                        alignItems: "center",
                    },
                    children: items.map((item, index) => (
                        new Component("div", {
                            style: { display: "flex", gap: "10px", alignItems: "center" },
                            children: [
                                (items.length > 15 && new Component("span", {
                                    classList: ["indexes"],
                                    innerText: (Number(index) + 1).toString() + ".",
                                    style: { width: "20px" }
                                })),
                                new Component("li", {
                                    classList: ["draggable"],
                                    draggable: true,
                                    style: {
                                        width: "290px",
                                        height: "35px",
                                        minHeight: "35px",
                                        backgroundColor: "red",
                                        cursor: "move",
                                        borderRadius: "3px",
                                        overflow: "hidden"
                                    },
                                    innerHTML: item.parentNode.innerHTML,
                                    onmouseenter: async (e) => {
                                        e.target.style.outline = "1px solid white";
                                        const item = document.querySelector(`#${e.target.querySelector(".item").id}`);
                                        item.dispatchEvent(new MouseEvent("mouseover"))
                                        await sleep(20);
                                        const hoverWindow = document.querySelector("#desc");
                                        if (hoverWindow) {
                                            hoverWindow.style.top = (e.clientY < 450 ? 450 : e.clientY) + "px";
                                            hoverWindow.style.left = (e.clientX + 20) + "px";
                                        }
                                    },
                                    onmouseleave: (e) => {
                                        e.target.style.outline = "unset";
                                        item.dispatchEvent(new MouseEvent("mouseleave"))
                                    },
                                })
                            ]
                        })
                    ))
                }),
                new Component("div", {
                    style: { display: "flex", gap: "20px" },
                    children: [
                        new Component("button", {
                            style: { width: "100px", height: "40px", fontSize: "20px"},
                            classList: ["red", "svelte-ec9kqa"],
                            innerText: "Cancel",
                            onclick: () => document.querySelector("#customSort")?.remove(),
                        }),
                        new Component("button", {
                            style: { width: "100px", height: "40px", fontSize: "20px"},
                            classList: ["green", "svelte-ec9kqa"],
                            innerText: "Sort",
                            onclick: async () => {
                                const list = Array.from(document.querySelectorAll(".draggable > div"))
                                document.querySelector("#customSort")?.remove();
                                await sortInventory("asc", (item) => list.findIndex(e => e.id == item.id));
                            }
                        }),
                    ]
                })
            ]
        })

        document.body.append(e.element);
        await sleep(100);

        let dragSrcEl = null;
        let insertIndicator = document.createElement('div');
        insertIndicator.className = 'insert-indicator';
        function dragStart(e) {
            document.getElementById("desc")?.remove();
            this.style.opacity = '0.5';
            dragSrcEl = this;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        };

        function dragEnter(e) {
            Array.from(document.querySelectorAll(".over")).forEach(el => el.classList.remove("over"));
            if (mode == "insert")
                this.parentNode.parentNode.insertBefore(insertIndicator, this.parentNode);
            else
                this.classList.add('over');
        }

        function dragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            return false;
        }

        function dragDrop(e) {
            e.stopPropagation();
            if (dragSrcEl != this) {
                if (mode == "insert") {
                    let list = document.getElementById('draggable-menu');
                    let items = Array.from(list.querySelectorAll('.draggable'));
            
                    let draggedIndex = items.indexOf(dragSrcEl);
                    let targetIndex = items.indexOf(this);
            
                    if (draggedIndex < targetIndex)
                        this.parentNode.insertAdjacentElement('afterend', dragSrcEl.parentNode);
                    else
                        this.parentNode.insertAdjacentElement('beforebegin', dragSrcEl.parentNode);
                    Array.from(document.querySelectorAll(".indexes")).forEach((e, index) => e.innerText = (Number(index) + 1) + ".")
                } else {
                    dragSrcEl.innerHTML = this.innerHTML;
                    this.innerHTML = e.dataTransfer.getData('text/html');
                }
            }
            return false;
        }

        function dragEnd() {
            const listItems = Array.from(document.querySelectorAll('.draggable'));
            listItems.forEach(item => {
                item.classList.remove('over');
                item.style.opacity = '1';
                document.querySelector(".insert-indicator")?.remove();
            });
        }

        const addEventsDragAndDrop = (el) => {
            el.addEventListener('dragstart', dragStart, false);
            el.addEventListener('dragenter', dragEnter, false);
            el.addEventListener('dragover', dragOver, false);
            el.addEventListener('drop', dragDrop, false);
            el.addEventListener('dragend', dragEnd, false);
        }

        Array.from(document.querySelectorAll('.draggable')).forEach((item) => addEventsDragAndDrop(item));
    }
    
    const editInventoryWindow = (inventoryWindow = document.querySelector(".window-title > img[src='icons/inventory.svg']")?.closest(".window")) => {
        if (!inventoryWindow) return;
        const sortButton = new Component("button", {
            classList: ["green", "svelte-ec9kqa"],
            style: { padding: "10px", fontSize: "16px", width: "35px" },
            children: [
                new Component("img", {
                    src: "https://www.svgrepo.com/show/2287/sort.svg",
                    style: { filter: "invert(1)" },
                    classList: ["icon"]
                })
            ],
            onclick: (e) => {
                const position = e.target.getBoundingClientRect();
                new Popup({clientY: position.y, clientX: position.x})
                .setTitle("Sort by (WIP)")
                .addAction("Custom", customSort)
                .addAction("Type", async () => await sortInventory("asc", getItemTypeScore))
                .addAction("Rarity", async () => {
                    new Popup({clientY: position.y, clientX: position.x})
                    .setTitle("Rarity")
                    .addAction("Descendant", async () => await sortInventory("desc", getItemRarityScore))
                    .addAction("Ascendant", async () => await sortInventory("asc", getItemRarityScore))
                    .create();
                })
                .addAction("Price", async () => {
                    new Popup({clientY: position.y, clientX: position.x})
                    .setTitle("Price")
                    .addAction("Descendant", async () => await sortInventory("desc", getItemPrice))
                    .addAction("Ascendant", async () => await sortInventory("asc", getItemPrice))
                    .create();
                })
                .addAction("dTI", async () => {
                    new Popup({clientY: position.y, clientX: position.x})
                    .setTitle("dTI")
                    .addAction("Descendant", async () => await sortInventory("desc", getItemdTI))
                    .addAction("Ascendant", async () => await sortInventory("asc", getItemdTI))
                    .create();
                })
                .addAction("Alphabet", async () => {
                    new Popup({clientY: position.y, clientX: position.x})
                    .setTitle("Alphabet")
                    .addAction("A - Z", async () => await sortInventory("asc", getItemNameScore))
                    .addAction("Z - A", async () => await sortInventory("desc", getItemNameScore))
                    .create();
                })
                .create();
            }
        })

        const div = inventoryWindow.querySelector(".window-content > div > div:not([id])");
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        div.style.alignItems = "center";
        div.append(sortButton.element);
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

        const isProfile = newWindow.addedNodes[0].querySelector(".window-title").innerText == "Target"
        var currentStore = null
        if (isProfile) {
                try {
                while (1) {
                    var added = false
                    for (var i = 0; i < playerData.length; i++) {
                        try {
                            if (i == 0) newWindow.addedNodes[0].querySelector("#top-wrapper > div > div:nth-child(2) > div:nth-child(4)").style.color = "white"
                            if (playerData[i].username == newWindow.addedNodes[0].querySelector("#top-wrapper > div > div:nth-child(2) > div:nth-child(2) > div").innerText) {
                                //console.log(newWindow.addedNodes[0].querySelector("#top-wrapper > div > div:nth-child(2) > div:nth-child(4)"))
                                newWindow.addedNodes[0].querySelector("#top-wrapper > div > div:nth-child(2) > div:nth-child(4)").innerHTML = playerData[i].btc.toFixed(4) + ' \n<img class="icon icon-in-text" src="icons/btc.svg" alt="Bitcoin Icon">'
                                added = true
                            }
                        }
                        catch {
                            newWindow.addedNodes[0].querySelector("#top-wrapper > div > div:nth-child(2) > div:nth-child(3)").style.color = "white"
                            newWindow.addedNodes[0].querySelector("#top-wrapper > div > div:nth-child(2) > div:nth-child(3)").innerHTML = '0.0000 \n<img class="icon icon-in-text" src="icons/btc.svg" alt="Bitcoin Icon">'    
                            added = true
                        }
                    }
                    const details = document.querySelector("#description").innerText
                    const padlet = details.split("https://padlet.com/")[1] || details.split("padlet.com/")[1] || null
                    
                    if (currentStore && currentStore != newWindow.addedNodes[0].querySelector("#top-wrapper > div > div:nth-child(2) > div:nth-child(2) > div").innerText) {
                        newWindow.addedNodes[0].querySelector("div.window-title.svelte-1hjm43z > button").click()
                    }

                    if (padlet && details) {
                        currentStore = newWindow.addedNodes[0].querySelector("#top-wrapper > div > div:nth-child(2) > div:nth-child(2) > div").innerText
                        document.querySelector("#description").innerHTML = details.split("https://padlet.com/")[0].split("Browse Shop")[0] + 
                        `<button id="` + padlet + `" onclick="openPadlet()" class="green svelte-ec9kqa" style="margin-left: 20%;width: 60%;height: 40px;">Browse Shop</button>`
                    }

                    if (!added) {
                        try {newWindow.addedNodes[0].querySelector("#top-wrapper > div > div:nth-child(2) > div:nth-child(4)").innerHTML = '0.0000 \n<img class="icon icon-in-text" src="icons/btc.svg" alt="Bitcoin Icon">'}
                        catch {newWindow.addedNodes[0].querySelector("#top-wrapper > div > div:nth-child(2) > div:nth-child(3)").innerHTML = '0.0000 \n<img class="icon icon-in-text" src="icons/btc.svg" alt="Bitcoin Icon">'}
                    }
                    if (!newWindow) break
                    else await sleep(100)
                }
            } catch {return}
        }

        const isItem = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/loot.svg']")
        if (isItem)
            await manageLoot();

        const isInventoryWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/inventory.svg']")?.parentNode?.parentNode;
        if (isInventoryWindow)
            editInventoryWindow(isInventoryWindow);

        const isTradeWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/trade.svg']")?.parentNode?.parentNode;
        if (isTradeWindow)
            editTradeWindow(isTradeWindow);

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
            isParamWindow.querySelector(".slider[min='70']").onchange = (e) => 
                localStorage.setItem("prettier-desktopIconSize", e.target.value);
            isParamWindow.querySelector(".window-content").style.width = "600px"
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
                if (currImage && currImage !== "url()")
                    localStorage.setItem("prettier-backgroundImage", currImage)
                else
                    localStorage.removeItem("prettier-backgroundImage")
            }

            const borderColor = "transparent"
            const autolootSetting = new Component("table", {
                classList: ["item-manager-content"],
                children: [
                    new Component("thead", {
                        children: [
                            new Component("th", {
                                innerText: "",
                                style: { borderBottom: `1px solid ${borderColor}` }
                            }),
                            ...["cpu", "gpu", "psu", "firewall", "other"].map((type, index) => (
                                new Component("th", {
                                    style: { width: "100px" },
                                    children: [
                                        new Component("div", {
                                            innerText: type.toUpperCase(),
                                            style: { 
                                                textAlign: "center", fontSize: "14px", fontWeight: 600, backgroundColor: "#ffffff33", padding: "3px",
                                                borderTopLeftRadius: index == 0 ? "5px" : 0,
                                                borderBottomLeftRadius: index == 0 ? "5px" : 0
                                            },
                                        })
                                    ]
                                })
                            )),
                            new Component("th", {
                                style: { width: "100px" },
                                children: [
                                    new Component("div", {
                                        innerText: "ALL",
                                        style: { 
                                            textAlign: "center", fontSize: "14px", fontWeight: 600, backgroundColor: "#ffffff33", padding: "3px",
                                            borderTopRightRadius: "5px",
                                            borderBottomRightRadius: "5px",
                                        },
                                    })
                                ]
                            })
                        ]
                    }),
                    new Component("tbody", {
                        children: lootRarity.slice(0, -1).map(rarity => (
                            new Component("tr", {
                                children: [
                                    new Component("th", {
                                        style: { borderBottom: `1px solid ${borderColor}` },
                                        children: [
                                            new Component("div", {
                                                innerText: rarity.name[0].toUpperCase() + rarity.name.slice(1),
                                                style: { background: rarity.color, color: "white", fontWeight: 600, padding: "5px", borderRadius: "5px", fontSize: "12px", textAlign: "center" }
                                            })
                                        ]
                                    }),
                                    ...["cpu", "gpu", "psu", "firewall", "other"].map(type => (
                                        new Component("td", {
                                            style: { position: "relative", borderBottom: `1px solid ${borderColor}`, cursor: "pointer" },
                                            onmouseenter: () => document.querySelector(`.${rarity.name}${type}`).style.backgroundColor = "#ffffff33",
                                            onmouseleave: () => document.querySelector(`.${rarity.name}${type}`).style.backgroundColor = "#ffffff11",
                                            children: [
                                                new Component("select", {
                                                    classList: [`${rarity.name}${type}select`],
                                                    style: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%", opacity: 0 },
                                                    onchange: (e) => {
                                                        player.autoloot[rarity.name][type] = e.target.value;
                                                        document.querySelector(`.${rarity.name}${type}`).innerText = e.target.value;
                                                        document.querySelector(`.${rarity.name}all`).innerText = allEqual(Object.values(player.autoloot[rarity.name])) ? player.autoloot[rarity.name].cpu : "-";
                                                        player.autoloot[rarity.name][type] = e.target.value;
                                                        save("prettier-autoloot", player.autoloot);
                                                    },
                                                    children: ["take", "shred", "sell", "nothing"].map(action => (
                                                        new Component("option", {
                                                            value: action,
                                                            innerText: action,
                                                            selected: action === player.autoloot[rarity.name][type]
                                                        })
                                                    ))
                                                }),
                                                new Component("div", {
                                                    classList: [`${rarity.name}${type}`],
                                                    innerText: player.autoloot[rarity.name][type],
                                                    style: { textAlign: "center", fontSize: "14px", fontWeight: 400, padding: "4px", backgroundColor: "#ffffff11", borderRadius: "5px" },
                                                }),
                                            ]
                                        })
                                    )),
                                    new Component("td", {
                                        style: { position: "relative", borderBottom: `1px solid ${borderColor}`, borderLeft: "2px solid #ffffff33" },
                                        onmouseenter: () => document.querySelector(`.${rarity.name}all`).style.backgroundColor = "#ffffff33",
                                        onmouseleave: () => document.querySelector(`.${rarity.name}all`).style.backgroundColor = "#ffffff11",
                                        children: [
                                            new Component("select", {
                                                style: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%", opacity: 0 },
                                                value: "take",
                                                onchange: (e) => {
                                                    for (let type of ["cpu", "gpu", "psu", "firewall", "other"]) {
                                                        document.querySelector(`.${rarity.name}${type}select`).value = e.target.value;
                                                        document.querySelector(`.${rarity.name}${type}`).innerText = e.target.value;
                                                        document.querySelector(`.${rarity.name}all`).innerText = e.target.value;
                                                        player.autoloot[rarity.name][type] = e.target.value;
                                                        save("prettier-autoloot", player.autoloot);
                                                    }
                                                },
                                                children: ["take", "shred", "sell", "nothing"].map(action => (
                                                    new Component("option", {
                                                        value: action,
                                                        innerText: action,
                                                        selected: allEqual(Object.values(player.autoloot[rarity.name])) && action === player.autoloot[rarity.name].cpu
                                                    })
                                                ))
                                            }),
                                            new Component("div", {
                                                innerText: allEqual(Object.values(player.autoloot[rarity.name])) ? player.autoloot[rarity.name].cpu : "-",
                                                classList: [`${rarity.name}all`],
                                                style: { textAlign: "center", fontSize: "14px", fontWeight: 400, padding: "4px", backgroundColor: "#ffffff11", borderRadius: "5px" }
                                            }),
                                        ]
                                    })
                                ]
                            })
                        ))
                    })
                ]
            })
            
            const tradePriceSetting = new Component("table", {
                classList: ["item-manager-content"],
                children: [
                    new Component("thead", {
                        children: [
                            new Component("th", {
                                innerText: "",
                                style: { borderBottom: `1px solid ${borderColor}` }
                            }),
                            ...["cpu", "gpu", "psu", "firewall", "other"].map((type, index) => (
                                new Component("th", {
                                    style: { width: "100px" },
                                    children: [
                                        new Component("div", {
                                            innerText: type.toUpperCase(),
                                            style: { 
                                                textAlign: "center", fontSize: "14px", fontWeight: 600, backgroundColor: "#ffffff33", padding: "3px",
                                                borderTopLeftRadius: index == 0 ? "5px" : 0,
                                                borderBottomLeftRadius: index == 0 ? "5px" : 0
                                            },
                                        })
                                    ]
                                })
                            )),
                            new Component("th", {
                                style: { width: "100px" },
                                children: [
                                    new Component("div", {
                                        innerText: "ALL",
                                        style: { 
                                            textAlign: "center", fontSize: "14px", fontWeight: 600, backgroundColor: "#ffffff33", padding: "3px",
                                            borderTopRightRadius: "5px",
                                            borderBottomRightRadius: "5px",
                                        },
                                    })
                                ]
                            })
                        ]
                    }),
                    new Component("tbody", {
                        children: lootRarity.map(rarity => (
                            new Component("tr", {
                                children: [
                                    new Component("th", {
                                        style: { borderBottom: `1px solid ${borderColor}` },
                                        children: [
                                            new Component("div", {
                                                innerText: rarity.name[0].toUpperCase() + rarity.name.slice(1),
                                                style: { background: rarity.color, color: "white", fontWeight: 600, padding: "5px", borderRadius: "5px", fontSize: "12px", textAlign: "center" }
                                            })
                                        ]
                                    }),
                                    ...["cpu", "gpu", "psu", "firewall", "other"].map(type => (
                                        new Component("td", {
                                            style: { borderBottom: `1px solid ${borderColor}`, width: "100px" },
                                            children: [
                                                new Component("input", {
                                                    classList: [`${rarity.name}${type}`],
                                                    style: { padding: "4px", borderRadius: "5px", backgroundColor: "var(--color-grey)", boxShadow: "0 10px 20px var(--color-shadow) inset", border: "1px solid var(--color-lightgrey)", fontFamily: "var(--font-family-2)", width: "70px"},
                                                    value: player.tradePricing[rarity.name][type],
                                                    onblur: (e) => {
                                                        let value = e.target.value;
                                                        if (value == "")
                                                            return e.target.style.border = "1px solid var(--color-red)"
                                                        if (isNaN(Number(value)) || Number(value) < 0 || Number(value) > 100000)
                                                            return e.target.style.border = "1px solid var(--color-red)"
                                                        if (value.includes(".")) {
                                                            const before = value.split(".")[0];
                                                            const after = value.split(".")[1];
                                                            if (after.length > 5)
                                                                value = `${before}.${after.slice(0, 4)}${after.split("").find(e => e != "0")}`;
                                                        }
                                                        e.target.value = value;
                                                        player.tradePricing[rarity.name][type] = Number(value);
                                                        save("prettier-tradePricing", player.tradePricing);
                                                        e.target.style.border = "1px solid var(--color-lightgrey)";

                                                        if (allEqual(Object.values(player.tradePricing)))
                                                            document.querySelector(`.${rarity.name}all`).value = value;
                                                        else 
                                                            document.querySelector(`.${rarity.name}all`).value = "";

                                                    }
                                                })
                                            ]
                                        })
                                    )),
                                    new Component("td", {
                                        style: { borderBottom: `1px solid ${borderColor}`, borderLeft: "2px solid #ffffff33" },
                                        children: [
                                            new Component("input", {
                                                classList: [`${rarity.name}all`],
                                                style: { padding: "4px", borderRadius: "5px", backgroundColor: "var(--color-grey)", boxShadow: "0 10px 20px var(--color-shadow) inset", border: "1px solid var(--color-lightgrey)", fontFamily: "var(--font-family-2)", width: "70px"},
                                                value: allEqual(Object.values(player.tradePricing[rarity.name])) ? player.tradePricing[rarity.name].cpu.toString() : "",
                                                onblur: (e) => {
                                                    let value = e.target.value;
                                                    if (value == "")
                                                        return e.target.style.border = "1px solid var(--color-red)"
                                                    if (isNaN(Number(value)) || Number(value) < 0 || Number(value) > 100000)
                                                        return e.target.style.border = "1px solid var(--color-red)"
                                                    if (value.includes(".")) {
                                                        const before = value.split(".")[0];
                                                        const after = value.split(".")[1];
                                                        if (after.length > 5)
                                                            value = `${before}.${after.slice(0, 4)}${after.split("").find(e => e != "0")}`;
                                                    }
                                                    e.target.value = value;
                                                    for (let type of ["cpu", "gpu", "psu", "firewall", "other"]){
                                                        player.tradePricing[rarity.name][type] = Number(value);
                                                        document.querySelector(`.${rarity.name}${type}`).value = value;
                                                    }
                                                    save("prettier-tradePricing", player.tradePricing);
                                                    e.target.style.border = "1px solid var(--color-lightgrey)";
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ))
                    })
                ]
            })

            const itemManager = new Component("div", {
                classList: ["el", "svelte-176ijne"],
                style: { display: "flex", flexDirection: "column", gap: "10px" },
                children: [
                    new Component("h4", {
                        innerText: "Item Manager"
                    }),
                    new Component("div", {
                        classList: ["item-manager-tabs"],
                        style: { display: "flex", justifyContent: "center", position: "relative" },
                        children: [
                            new Component("div", {
                                classList: ["tab-slider"],
                                style: { position: "absolute", bottom: 0, left: 0, height: "2px", width: "50%", backgroundColor: "white", transitionDuration: "0.3s", transform: "translateX(0)" }
                            }),
                            new Component("span", {
                                innerText: "Auto Loot",
                                classList: ["item-manager-loot"],
                                style: { padding: "7px", width: "100%", cursor: "pointer", borderBottom: "2px solid #ffffff33" },
                                onmouseenter: (e) => e.target.style.backgroundColor = "#ffffff33",
                                onmouseleave: (e) => e.target.style.backgroundColor = null,
                                onclick: (e) => {
                                    const slider = document.querySelector(".tab-slider");
                                    if (slider.style.transform === "translateX(0)") return
                                    slider.style.transform = "translateX(0)";
                                    document.querySelector(".item-manager-content")?.remove();
                                    document.querySelector(".item-manager-body")?.append(autolootSetting.element);
                                }
                            }),
                            new Component("span", {
                                innerText: "Trade Pricing",
                                classList: ["item-manager-pricing"],
                                style: { padding: "7px", width: "100%", cursor: "pointer", borderBottom: "2px solid #ffffff33" },
                                onmouseenter: (e) => e.target.style.backgroundColor = "#ffffff33",
                                onmouseleave: (e) => e.target.style.backgroundColor = null,
                                onclick: (e) => {
                                    const slider = document.querySelector(".tab-slider");
                                    if (slider.style.transform === "translateX(100%)") return
                                    slider.style.transform = "translateX(100%)";
                                    document.querySelector(".item-manager-content")?.remove();
                                    document.querySelector(".item-manager-body")?.append(tradePriceSetting.element);
                                }
                            })
                        ]
                    }),
                    new Component("div", {
                        classList: ["item-manager-body"],
                        children: [ autolootSetting ]
                    })
                ]
            })
            
            const tabColorSetting = new Component("div", {
                classList: ["el", "svelte-176ijne"],
                style: { display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" },
                children: [
                    new Component("h4", {
                        innerText: "Window Color",
                    }),
                    new Component("div", {
                        style: { marginTop: "10px", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" },
                        children: [
                            new Component("input", {
                                type: "color",
                                classList: ["tab-color-picker"],
                                style: { height: "35px", width: "60px", border: "none", borderRadius: "2px", cursor: 'pointer', paddingInline: "2px" },
                                value: player.configuration.windowColors.windowTabLight,
                                onchange: async (e) => {
                                    document.querySelector(".tab-color-input").value = e.target.value;
                                    player.configuration.windowColors = {
                                        windowBorder: e.target.value,
                                        windowTabLight: e.target.value,
                                        windowTabDark: halfColor(e.target.value),
                                    }
                                    save("prettier-windowColors", player.configuration.windowColors);
                                    loadStyle();
                                }
                            }),
                            new Component("input", {
                                type: "text",
                                classList: ["tab-color-input"],
                                placeholder: "Ex: #ffffff",
                                value: player.configuration.windowColors.windowTabLight,
                                style: { width: "150px", padding: "10px", borderRadius: "2px", textAlign: "left", backgroundColor: "var(--color-grey)", boxShadow: "0 10px 20px var(--color-shadow) inset", border: "1px solid var(--color-lightgrey)", fontFamily: "var(--font-family-2)", zIndex: "60" },
                                onblur: (e) => {
                                    if (!e.target.value.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))
                                        return
                                    document.querySelector(".tab-color-picker").value = e.target.value;
                                    player.configuration.windowColors = {
                                        windowBorder: e.target.value,
                                        windowTabLight: e.target.value,
                                        windowTabDark: halfColor(e.target.value),
                                    }
                                    save("prettier-windowColors", player.configuration.windowColors);
                                    loadStyle();
                                }
                            }),
                        ]
                    }),
                    new Component("button", {
                        innerText: "Reset",
                        classList: ["red", "svelte-ec9kqa"],
                        style: { height: "35px", width: "85px" },
                        onclick: () => {
                            player.configuration.windowColors = defaultColors;
                            save("prettier-windowColors", player.configuration.windowColors);
                            document.querySelector(".tab-color-picker").value = defaultColors.windowTabLight;
                            document.querySelector(".tab-color-input").value = defaultColors.windowTabLight;
                            loadStyle();
                        }
                    })
                ]
            })

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
                                    if (e.target.value === "") return;
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

            wrapper.insertBefore(backgroundSetting.element, wrapper.querySelector("div:nth-child(2)"));
            wrapper.insertBefore(tabColorSetting.element, wrapper.querySelector("div:nth-child(2)"));
            wrapper.insertBefore(itemManager.element, wrapper.querySelector("div:nth-child(1)"));
            // wrapper.insertBefore(autolootSetting.element, wrapper.querySelector("div:nth-child(2)"));
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
            .replace("s0urceOS 2023", "🔥 Prettier d0urceOS V"+VERSION+" 🔥")
            .replace(">.", ">. <br><span style='font-size: 0.8rem; color: var(--color-lightgrey);'>Expanded by <span style='color: chartreuse; text-shadow: 0 0 3px chartreuse'>d0t</span> 😍.</span>")
            .replace(">.", `>. <br><span style='font-size: 0.8rem; color: var(--color-lightgrey);'>Template made by <span style='color: pink; text-shadow: 0 0 3px pink'>Xen0o2</span>.</span>`);
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
            //console.log(e);
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
            //console.log(e);
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
                        }),
                        new Component("img", {
                            src: "https://media.tenor.com/aaEMtGfZFbkAAAAi/rat-spinning.gif",
                            alt: "spinning rat"
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

    const createObserver = () => {
        const logWindow = document.querySelector(".window-title > img[src='icons/log.svg']")?.closest(".window.svelte-1hjm43z")?.querySelector(".window-content > #wrapper");
        if (logWindow) {
            logObserver.observe(logWindow, {
                attributes: false,
                childList: true,
                characterData: false,
                subtree: true
            });
        }
        windowOpenObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
        windowCloseObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
        itemHoverObserver.observe(document.querySelector("main"), {attributes: false, childList: true, characterData: false, subtree: true});
    
        // Observe logWindow and ignore messages from muted players
        const logObserverCallback = (mutationsList) => {
            mutationsList.forEach(mutation => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            const playerNameElement = node.querySelector('.message-name');
                            const playerName = playerNameElement?.textContent.trim();
                            if (isPlayerMuted(playerName)) {
                                node.style.display = 'none'; // Hide the message from muted player
                            }
                        }
                    });
                }
            });
        };
    
        if (logWindow) {
            const logObserver = new MutationObserver(logObserverCallback);
            logObserver.observe(logWindow, { childList: true, subtree: true });
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

    const save = (key, value, isJson = true) => localStorage.setItem(key, isJson ? JSON.stringify(value) : value)

    const loadLocalStorage = () => {
        if (localStorage.getItem("prettier-backgroundImage")) {
            document.querySelector("body").style.backgroundImage = localStorage.getItem("prettier-backgroundImage");
            document.querySelector("body").style.backgroundSize = "cover";
        } else
            document.querySelector("body").style.backgroundSize = "auto";
        document.querySelector("body").style.backgroundAttachment = "fixed";
        document.querySelector("body").style.backgroundPosition = "center";

        if (!localStorage.getItem("prettier-autoloot"))
            save("prettier-autoloot", player.autoloot)
        if (!localStorage.getItem("prettier-windowColors"))
            save("prettier-windowColors", player.configuration.windowColors)
        if (!localStorage.getItem("prettier-currentTheme"))
            localStorage.setItem("prettier-currentTheme", Object.keys(themes)[0])
    }

    const addMutedPlayer = async (username) => {
        let mutedPlayers = JSON.parse(localStorage.getItem('mutedPlayers') || '[]');
        if (!mutedPlayers.includes(username)) {
            mutedPlayers.push(username);
            localStorage.setItem('mutedPlayers', JSON.stringify(mutedPlayers));
            document.querySelector("body > div > main > div.window.svelte-1hjm43z.window-selected > div.window-content.svelte-1hjm43z > div > div:nth-child(2) > form > div > div > div.textarea.svelte-81yxrq").innerText = "/mute " + username.replace(":","")
            document.querySelector("body > div > main > div.window.svelte-1hjm43z.window-selected > div.window-content.svelte-1hjm43z > div > div:nth-child(2) > form > a > button").click()
        }
    }
    
    const removeMutedPlayer = async (username) => {
        let mutedPlayers = JSON.parse(localStorage.getItem('mutedPlayers') || '[]');
        mutedPlayers = mutedPlayers.filter(player => player !== username);
        localStorage.setItem('mutedPlayers', JSON.stringify(mutedPlayers));
        document.querySelector("body > div > main > div.window.svelte-1hjm43z.window-selected > div.window-content.svelte-1hjm43z > div > div:nth-child(2) > form > div > div > div.textarea.svelte-81yxrq").innerText = "/unmute " + username.replace(":","")
        document.querySelector("body > div > main > div.window.svelte-1hjm43z.window-selected > div.window-content.svelte-1hjm43z > div > div:nth-child(2) > form > a > button").click()
    }
    
    const isPlayerMuted = (username) => {
        const mutedPlayers = JSON.parse(localStorage.getItem('mutedPlayers') || '[]');
        return mutedPlayers.includes(username);
    }    

    const loadScripts = async () => {
        const scripts = [
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/languages/python.min.js",
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
        if (openInSilent && !player.configuration.openInSilent.includes(windowName.split(" ").map((e, i) => i == 0 ? e.toLowerCase() : e).join("")))
            player.configuration.openInSilent.push(windowName.split(" ").map((e, i) => i == 0 ? e.toLowerCase() : e).join(""))
        if (windowName === "Settings") {
            document.querySelector("button.topbar-clickable")?.click();
        } else {
            const desktopIcon = document.querySelector(`.${windowName.replace(/ /g, "-")}-Desktop-Icon`);
            desktopIcon?.click();
        }

        await sleep(300);
        const window = document.querySelector(`.window-title > img[src='icons/${windowName.split(" ").map((e, i) => i == 0 ? e.toLowerCase() : e).join("")}.svg']`)?.parentNode.parentNode;
        return window;
    }

    const closeWindow = (windowName, onlyIfSilent = false) => {
        if (!windowNames.includes(windowName)) return;
        const index = player.configuration.openInSilent.indexOf(windowName.split(" ").map((e, i) => i == 0 ? e.toLowerCase() : e).join(""));
        if (index >= 0) player.configuration.openInSilent.splice(index, 1);

        const windowToClose = document.querySelector(`.window-title > img[src='icons/${windowName.split(" ").map((e, i) => i == 0 ? e.toLowerCase() : e).join("")}.svg']`)?.parentNode.parentNode;
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
            await sleep(50);
            sendLog(`
                <img class="icon" src="icons/check.svg"/>
                Successfully shredded ${["uncommon", "epic", "ethereal"].includes(rarity) ? "an" : "a"}
                <span style='background: ${color}; border-radius: 5px; padding: 2px 5px 2px 5px;'>${rarity}</span>
                item
            `);
            if ((Number(index) + 1) % 5 == 0) {
                filamentWindow.querySelector("button.green")?.click();
                await sleep(300);
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
            popup.setFooter(`${player.selectedItems.length} items selected`)
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
        const username = player.textContent.trim();
        const isMuted = isPlayerMuted(username);
    
        const popup = new Popup(pointer)
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
            });
    
        if (isMuted) {
            popup.addAction("Unmute", async () => removeMutedPlayer(username));
        } else {
            popup.addAction("Mute", async () => addMutedPlayer(username));
        }
    
        popup.create();
    }

    const manageRightClick = (target, pointer) => {
        if (document.querySelector(".context-menu"))
            removeContextMenu();
        const windowClicked = target.closest(".window")
        if (target.parentNode
            && target.parentNode.classList.contains("item")
            && ["Computer", "Inventory"].includes(windowClicked?.querySelector(".window-title > img")?.alt))
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
                document.querySelector(".context-menu-footer").innerText = `${player.selectedItems.length} items selected`;
                document.querySelector(".context-menu-footer").style.display = "flex";
            }
        } else player.selectedItems = [item]
        item.parentNode.parentNode.classList.add("item-selected");
        item.parentNode.parentNode.style.outline = "3px solid var(--color-terminal)";
        player.selectedItems.sort((b, a) => {
            return  ([...a.parentNode?.parentNode?.parentNode?.parentNode.children].indexOf(a.parentNode?.parentNode?.parentNode) || 0) - 
                    ([...b.parentNode?.parentNode?.parentNode?.parentNode.children].indexOf(b.parentNode?.parentNode?.parentNode) || 0)
        })
    }

    const sumPx = (a, b) => {
        return Number((a.match(/\d+px/) || [""])[0].slice(0, -2)) + Number((b.match(/\d+px/) || [""])[0].slice(0, -2));
    }

    const pxToInt = (a) => {
        return (a.match(/\d+/) || [])[0];
    }

    const findClosestValue = (arr, target) => {
        return arr.reduce((closest, num) => 
            Math.abs(num - target) < Math.abs(closest - target) ? num : closest
        );
    }

    const manageWindowDragged = () => {
        const windowDragged = document.querySelector(".window-selected");
        const content = windowDragged?.querySelector(".window-content");
        if (!windowDragged || !content) return;

        if (windowDragged.querySelector(".window-title > img[src='icons/settings.svg']"))
            windowDragged.querySelector(".window-content").style.width = "600px";
    
        const getPxValue = (style) => Number(style.match(/\d+/)[0]);
        const top = getPxValue(windowDragged.style.top);
        const bottom = sumPx(windowDragged.style.top, content.style.height) + 41;
        const left = getPxValue(windowDragged.style.left);
        const right = sumPx(windowDragged.style.left, content.style.width) + 2;
    
        const allPositions = Array.from(document.querySelectorAll(".window"))
            .filter(e => e !== windowDragged)
            .map(e => {
                const content = e.querySelector(".window-content");
                return {
                    name: e.querySelector(".window-title").textContent,
                    top: getPxValue(e.style.top),
                    bottom: sumPx(e.style.top, content.style.height) + 42,
                    left: getPxValue(e.style.left),
                    right: sumPx(e.style.left, content.style.width) + 1,
                };
            });
    
        const sensitivity = 10;
        const findMatching = (pos, key1, key2) =>
            allPositions.find(e =>
                (pos >= e[key1] - sensitivity && pos <= e[key1] + sensitivity) ||
                (pos >= e[key2] - sensitivity && pos <= e[key2] + sensitivity)
            );
    
        const topMatching = findMatching(top, 'top', 'bottom');
        const bottomMatching = findMatching(bottom, 'top', 'bottom');
        const rightMatching = findMatching(right, 'right', 'left');
        const leftMatching = findMatching(left, 'right', 'left');
    
        const createLine = (style) => {
            const line = new Component("div", {
                classList: ["sticky-line"],
                style: {
                    position: "absolute", backgroundColor: "var(--color-terminal)", zIndex: 1000, ...style
                }
            });
            document.body.append(line.element);
        };
    
        document.querySelectorAll(".sticky-line").forEach(e => e.remove());
    
        if (topMatching) {
            const value = findClosestValue([topMatching.top, topMatching.bottom], top);
            windowDragged.style.top = `${value}px`;
            createLine({ top: `${value}px`, height: "2px", width: "100vw" });
        }
        if (bottomMatching) {
            const value = findClosestValue([bottomMatching.top, bottomMatching.bottom], bottom);
            windowDragged.style.top = `${value - pxToInt(content.style.height) - 42}px`;
            createLine({ top: `${value}px`, height: "2px", width: "100vw" });
        }
        if (rightMatching) {
            const value = findClosestValue([rightMatching.right, rightMatching.left], right);
            windowDragged.style.left = `${value - pxToInt(content.style.width) - 2}px`;
            createLine({ top: "0px", height: "100vh", width: "2px", left: `${value}px` });
        }
        if (leftMatching) {
            const value = findClosestValue([leftMatching.right, leftMatching.left], left);
            windowDragged.style.left = `${value}px`;
            createLine({ top: "0px", height: "100vh", width: "2px", left: `${value}px` });
        }
    };

    const loadUserInputManager = () => {
        document.body.addEventListener("mousedown", (e) => {
            if (e.buttons != 1) return;
            const windowClicked = e.target.closest(".window");
            if ((e.target.classList.contains("window-close") || e.target.parentNode?.classList.contains("window-close")) && windowClicked.querySelector(".window-title").textContent.trim() == "Settings")
                windowClicked.querySelector(".window-close")?.click();
            if (!e.target.classList.contains("context-menu") && !player.input.isShiftDown)
                removeContextMenu();
            if (e.target.parentNode
                && e.target.parentNode.classList.contains("item")
                && ["Computer", "Inventory", "Trade"].includes(windowClicked?.querySelector(".window-title > img")?.alt)
            )
                manageItemSelection(e.target.parentNode);
            if (e.target.classList.contains("window-title"))
                window.addEventListener("mousemove", manageWindowDragged);
        })
        document.body.addEventListener("mouseup", () => {
            document.querySelectorAll(".sticky-line").forEach(e => e.remove());
            window.removeEventListener("mousemove", manageWindowDragged);
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

    const loadStyle = () => {
        const css = `
            .over {transform: scale(1.1, 1.1); border: 2px solid var(--color-terminal);}
            .insert-indicator {height: 3px;background-color: var(--color-terminal);width: 320px;margin-left:15px;border-radius:10px;}
            ${player.configuration.windowColors.windowTabDark != defaultColors.windowTabDark && `
                .message.svelte-pu3iit {background: ${player.configuration.windowColors.windowTabDark} !important;}
                .svelte-81yxrq {background: ${halfColor(player.configuration.windowColors.windowTabDark)} !important;}
                .svelte-1ff1jo {background: ${player.configuration.windowColors.windowTabDark} !important;}
                .search-tag.svelte-1ff1jo {background: ${player.configuration.windowColors.windowTabLight} !important;}
                .svelte-1p12gtw:not(.npc):not(.timer) {background-color: unset !important;}
                .section.svelte-1ti1fiv {background: linear-gradient(188deg, ${player.configuration.windowColors.windowTabDark} 60%, ${halfColor(player.configuration.windowColors.windowTabDark)} 100%) !important;}
                .window:not(:has(.window-title > img[src='icons/terminal.svg'])) {
                    border-color: ${player.configuration.windowColors.windowTabLight} !important;
                    background: linear-gradient(200deg, #000000 0%, ${halfColor(player.configuration.windowColors.windowTabLight)} 100%) !important;
                }
                .window-title:not(:has(img[src='icons/terminal.svg'])) {border-top-left-radius: 2px !important; border-top-right-radius: 2px !important; background: linear-gradient(200deg, ${player.configuration.windowColors.windowTabLight} 0%, ${player.configuration.windowColors.windowTabDark} 100%) !important;}
                `
            }
        `;
        const already = document.getElementById("globalCustomStyles")
        if (already)
            already.textContent = css;
        else {
            const newStyleElement = document.createElement('style');
            newStyleElement.id = 'globalCustomStyles';
            newStyleElement.textContent = css;
            document.head.appendChild(newStyleElement);
        }
    }
    
    (async () => {
        while (document.querySelector("#login-top") || window.location.href !== "https://s0urce.io/")
            await sleep(500);
        loadingScreen("create", "Prettier s0urce");
        editFilaments();
        customTerminal();
        createObserver();
        editProgressBar();
        loadLocalStorage();
        updateThemeStyle();
        loadStyle();
        await loadScripts();
        editWelcomeMessage();
        loadUserInputManager();
        editInventoryWindow();
        await sleep(Math.random()*2000+500);
        loadingScreen("delete");
    })();
})();

// Padlet handler:

async function openPadlet() {
    document.querySelector('#desktop-container > div:nth-child(14)').click();
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await sleep(300)
    const inputFields = document.querySelectorAll('#wrapper > input');
    var inputField = null 
    for (var i = 0; i < inputFields.length; i++) {
        inputField = inputFields[i].placeholder == "" ? inputFields[i] : inputField
    }
    //console.log(inputField,document.querySelector("#description").innerHTML)
    inputField.value = "https://padlet.com/" + document.querySelector("#description").innerHTML.split("id=\"")[1].split("\"")[0];
    inputField.dispatchEvent(new Event('input', { bubbles: true }));
    document.querySelector("body > div > main > div.window.svelte-1hjm43z.window-selected > div.window-content.svelte-1hjm43z > div > form > a > button").click();
    await sleep(1000)
    document.querySelector("body > div > main > div.window.svelte-1hjm43z.window-selected > div.window-content.svelte-1hjm43z > div > form > a > button").click();
}

// Page Break

// Backup original WebSocket send method
var originalSend = WebSocket.prototype.send;

// Log settings
var inboundLog = true;
var outboundLog = true;

// Helper function to traverse and modify an object
function traverse(obj, fn) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let part = obj[keys[i]];
        if (part && typeof part === "object") traverse(part, fn);
        fn(part);
    }
}

// Override WebSocket send method
WebSocket.prototype.send = function(data) {
    try {
        let index = data.indexOf('[');
        let payload = JSON.parse(data.substring(index));
        if (!payload || typeof payload !== "object") throw "skip";
        traverse(payload, function(item) {
            if (item && item.username) item.username = item.username.split(' ')[0];
        });
        data = data.substring(0, index) + JSON.stringify(payload);
    } catch (e) {
        // Ignoring errors silently
    }
    if (outboundLog) console.warn(data);
    return originalSend.call(this, data);
}

const playerData = []

// Listen for WebSocket messages
function listen(fn = console.log) {
    let property = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data");
    const originalGet = property.get;

    function wrappedGetter() {
        let socket = this.currentTarget instanceof WebSocket;
        if (!socket) return originalGet.call(this);

        let msg = originalGet.call(this);
        Object.defineProperty(this, "data", { value: msg, writable: true });
        fn({ data: msg, socket: this.currentTarget, event: this });
        return this.data;
    }

    property.get = wrappedGetter;
    Object.defineProperty(MessageEvent.prototype, "data", property);
}

listen(({ data, socket, event }) => {
    window.SOCK = socket;
    let index = data.indexOf('[');
    try {
        var payload = JSON.parse(data.substring(index));
    } catch (e) {
        return data;
    }

  if (typeof payload !== "object") return console.log(data);

    traverse(payload, function(item) {
        if (item && item.btc) {
            playerData.push(item)
            //item.username += ` (₿${parseFloat(item.btc).toFixed(2)})`;
        }
    });

    if (payload[1]?.event === "gotGlobalRoomLogs") {
        payload[1].arguments[0] = payload[1].arguments[0].map(log => {
            let logObject = JSON.parse(log);
            let sender = logObject.sender;
            if (sender.btc) sender.username += ` (₿${parseFloat(sender.btc).toFixed(2)})`;
            return JSON.stringify(logObject);
        });
    }

    data = data.substring(0, index) + JSON.stringify(payload);
    event.data = data;
    if (inboundLog) console.log(data);
});
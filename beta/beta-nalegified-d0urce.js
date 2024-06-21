// ==UserScript==
// @name         beta-nalegified-d0urce
// @version      b2024-06-21
// @description  Nalegified d0urce, even more unstable !
// @author       Naleg
// @originator   d0t & Xen0o2
// @match        https://s0urce.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=s0urce.io
// @downloadURL  https://raw.githubusercontent.com/NalegFR/nalegified-d0urce/main/beta/beta-nalegified-d0urce.js
// @updateURL    https://raw.githubusercontent.com/NalegFR/nalegified-d0urce/main/beta/beta-nalegified-d0urce.js
// @grant        none
// ==/UserScript==

// i cannot thank chatgpt enough for this
function formatString(template, values) {
    return template.replace(/{{(.*?)}}/g, (match, key) => values[key.trim()] || '');
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
		if (options.onclick)
			element.onclick = options.onclick;

		options.children?.forEach(child => {
			child.prepend ? element.prepend(child.element) : element.append(child.element)
		})
		this.element = element;
		return this;
	}
}

const player = {
    username: document.querySelector("img[src='icons/online.svg']")?.parentNode?.innerText?.trim(),
    hacksInProgress: [],
    currentlyHacking: null,
    lastHacked: null,
    countryWars: {
        countryPoint: 0,
        playerPoint: 0
    },
    currentCountry: {
        code: null,
        name: null
    },
    configuration: {
        displayCustomFilament: true
    }
}

const stats = {
	cpu: [
        {
            hack: [8, 18],
            trueDam: [0, 0],
            pen: [0, 0],
            chance: [0, 0],
            dam: [0, 0]
        },
        {
            hack: [18.5, 33.5],
            trueDam: [0, 10],
            pen: [0, 5],
            chance: [0, 2.5],
            dam: [1, 5]
        },
        {
            hack: [34, 54],
            trueDam: [0, 20],
            pen: [0, 15],
            chance: [2.5, 3.25],
            dam: [5, 7.5]
        },
        {
            hack: [55, 64.25],
            trueDam: [0, 30],
            pen: [0, 20],
            chance: [4, 6.25],
            dam: [8.25, 15]
        },
        {
            hack: [68.75, 84.75],
            trueDam: [0, 40],
            pen: [13, 25],
            chance: [6.5, 7.5],
            dam: [17, 25]
        },
        {
            hack: [91, 105],
            trueDam: [43, 50],
            pen: [19.5, 30],
            chance: [8.25, 10],
            dam: [19.5, 30]
        },
        {
            hack: [125.5,135.5],
            trueDam: [55,60],
            pen: [32.5,35],
            chance: [11.25,12.5],
            dam: [32.5,35]
        }
    ],
	firewall: [
        {
            hp: [22,62],
            rd: [0,0],
            regen: [0,0],
            medium: [0,0],
            long: [0,0]
        },
        {
            hp: [64,114],
            rd: [0,7.5],
            regen: [0,2.5],
            medium: [0,0],
            long: [0,0]
        },
        {
            hp: [116,166],
            rd: [0,10],
            regen: [0,5],
            medium: [0,30],
            long: [0,0]
        },
        {
            hp: [172,217],
            rd: [0,12.5],
            regen: [0,7.5],
            medium: [22,40],
            long: [0,25]
        },
        {
            hp: [234,269],
            rd: [0,15],
            regen: [8,10],
            medium: [34,0],
            long: [22,30]
        },
        {
            hp: [285,320],
            rd: [11.5,15],
            regen: [10.75,12.5],
            medium: [65,47.5],
            long: [28,35]
        },
        {
            hp: [372,397],
            rd: [16.25,17.5],
            regen: [13.75,15],
            medium: [70,80],
            long: [37.5,45]
        }
    ],
	gpu: [
        {
            idle: [0.000010,0.000014],
            bart: [0,0],
            crip: [0,0],
        },
        {
            idle: [0.000011,0.000024],
            bart: [0,10],
            crip: [2.5,10],
        },
        {
            idle: [0.000016,0.000033],
            bart: [0,12.5],
            crip: [2.5,12.5],
        },
        {
            idle: [0.0000223,0.000043],
            bart: [0,15],
            crip: [6,15],
        },
        {
            idle: [0.0000372,0.000054],
            bart: [0,20],
            crip: [11.25,20],
        },
        {
            idle: [0.0000644,0.000074],
            bart: [21.25,25],
            crip: [21.25,25],
        },
        {
            idle: [0.000077,0.000094],
            bart: [22.5,30],
            crip: [22.5,30],
        }
    ],
    psu: [
        {
            boost: [1, 5],
        },
        {
            boost: [5, 10],
        },
        {
            boost: [10, 15],
        },
        {
            boost: [16, 25],
        },
        {
            boost: [28, 35],
        },
        {
            boost: [38.5, 40]
        },
        {
            boost: [50, 55]
        }
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
};

(function() {
    'use strict';
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let hideOnOpen = false;

    const icons = {
        VALID: "icons/check.svg",
        HACK: "icons/hack-red.svg"
    }

    const sendLog = async (HTMLContent, toDelete) => {
        const wrapper = document.querySelector("#wrapper.svelte-182ewru");
        if (!wrapper)
            return;

        const message = document.createElement("div")
        const separator = document.createElement("div")

        message.innerHTML = HTMLContent
        message.style.padding = "5px 0 5px 0"
        message.classList.add("message")

        separator.classList.add("line", "svelte-182ewru")
        separator.style.margin = "10px 0px";

        wrapper.append(message);
        wrapper.append(separator);
        await sleep(100);
        wrapper.scrollTop = wrapper.scrollHeight;

        if (toDelete)
            setTimeout(() => {
                message?.remove();
                separator?.remove();
            }, 60 * 1000);
    }

    const manageMessagesToDelete = (message) => {
        const deleteSample = [
            "Hack successful",
            "to reach level"
        ]
        if (deleteSample.some(sample => message.innerText.includes(sample)))
            message.remove();
    }

    const counterHack = (hackInProgress) => {
        hackInProgress.footer?.remove();
        const inalProgressBar = document.querySelector(".target-bar-progress");
        const wrapper = document.querySelector("#wrapper.svelte-182ewru");
        if (!inalProgressBar || !wrapper)
            return;
        const counterLabel = document.createElement("span");
        const counterProgressBar = document.createElement("div");
        const counterProgressBarValue = document.createElement("div");

        counterLabel.innerText = "Counter hack progression (0%)";

        counterProgressBar.style.width = "100%";
        counterProgressBar.style.height = "15px";
        counterProgressBar.style.background = "var(--color-grey)";
        counterProgressBar.style.borderRadius = "4px";
        counterProgressBar.style.margin = "5px 0 5px 0";
        counterProgressBar.style.display = "flex";
        counterProgressBar.style.justifyContent = "space-between";
        counterProgressBar.style.alignItems = "center";

        counterProgressBarValue.style.width = inalProgressBar.style.width;
        counterProgressBarValue.style.height = "15px";
        counterProgressBarValue.style.background = "var(--color-red)";
        counterProgressBarValue.style.borderRadius = "4px";
        counterProgressBarValue.style.transitionDuration = "0.3s";

        hackInProgress.message?.append(counterLabel);
        hackInProgress.message?.append(counterProgressBar);
        counterProgressBar.append(counterProgressBarValue);

        wrapper.scrollTop = wrapper.scrollHeight;

        hackInProgress.counterLabel = counterLabel;
        hackInProgress.counterProgressBar = counterProgressBar;
        hackInProgress.counterProgressBarValue = counterProgressBarValue;

        const hackObserver = new MutationObserver(function(mutations) {
            const value = parseInt(mutations[0].target.style.width.slice(0, -1));
            counterLabel.innerText = counterLabel.innerText.replace(/\d{1,3}%/, value + "%");
            counterProgressBarValue.style.width = value + "%";
        });
        hackObserver.observe(inalProgressBar, { attributes: true, attributeFilter: ["style"] });
        hackInProgress.hackObserver = hackObserver;
    }

    const manageBeingHacked = (message) => {
        console.log(message.querySelectorAll(".tag"));
        console.log(message.innerText);
        const hacker = message.querySelectorAll(".tag")[0]?.innerText || message.innerText.match(/by .+ on/)[0].slice(3, -3);
        const port = message.innerText.match(/on port \d+\./)[0].slice(8, -1);
        const already = player.hacksInProgress.find(e => e.hacker == hacker);
        const progression = parseInt((message.innerText.match(/\d{1,3}(\.\d{1,2})?%/) || ["100%"])[0].slice(0, -1));
        if (already) {
            if (progression == 100) {
                already.hackLabel.innerText = already.hackLabel.innerText.replace(/is hacking you \(\d+%\) on port \d+/, "has hacked you")
                already.message.style.backgroundColor = "transparent";
                already.message.onclick = null;
                already.message.onmouseenter = null;
                already.message.onmouseleave = null;
                player.hacksInProgress.splice(player.hacksInProgress.indexOf(already), 1);
                already.progressBar.remove();
                already.counterLabel?.remove();
                already.counterProgressBar?.remove();
                already.footer.remove();
            } else {
                already.hackLabel.innerText = already.hackLabel.innerText.replace(/\d+%/, progression + "%");
                already.progressBarValue.style.width = progression + "%";
            }

            message.remove();
        } else {
            const redButtons = message.querySelectorAll(".tag");
            redButtons[0].remove();
            message.innerText = ""

            const iconElement = document.createElement("img");
            const hackLabel = document.createElement("span");
            const progressBar = document.createElement("div");
            const progressBarValue = document.createElement("div");
            const separator = document.createElement("div");

            iconElement.classList.add("icon")
            iconElement.style.marginRight = "9px"
            iconElement.src = icons.HACK

            hackLabel.innerText = hacker + " is hacking you (" + progression + "%) on port " + port

            progressBar.style.width = "100%";
            progressBar.style.height = "15px";
            progressBar.style.background = "var(--color-grey)";
            progressBar.style.borderRadius = "4px";
            progressBar.style.margin = "5px 0 5px 0";
            progressBar.style.display = "flex";
            progressBar.style.justifyContent = "space-between";
            progressBar.style.alignItems = "center";

            progressBarValue.style.width = progression + "%";
            progressBarValue.style.height = "15px";
            progressBarValue.style.background = "var(--color-red)";
            progressBarValue.style.borderRadius = "4px";
            progressBarValue.style.transitionDuration = "0.3s";


            separator.classList.add("line", "svelte-182ewru")
            separator.style.margin = "10px 0px";

            message.append(iconElement);
            message.append(hackLabel);
            message.append(progressBar);
            progressBar.append(progressBarValue);

            const alreadyCounterHacking = hacker == player.currentlyHacking;
            if (alreadyCounterHacking) {
                player.hacksInProgress.push({
                    hacker: hacker,
                    counterButton: redButtons[1],
                    message,
                    hackLabel,
                    progression,
                    progressBar,
                    progressBarValue
                })
                counterHack(player.hacksInProgress[player.hacksInProgress.length - 1])
            } else {
                const footer = document.createElement("span");
                footer.innerText = "Click to counter";
                footer.style.fontSize = "0.7rem";
                footer.style.color = "var(--color-lightgrey)";
                message.append(footer);

                player.hacksInProgress.push({
                    hacker: hacker,
                    counterButton: redButtons[1],
                    message,
                    footer,
                    hackLabel,
                    progression,
                    progressBar,
                    progressBarValue
                })
            }

            message.parentNode.append(separator);

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
                                                            classList: ["inal", "svelte-w2dcq9"],
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
                    style: { position: "absolute", backgroundColor: "var(--color-green)", height: "3px", width: "100%", borderRadius: "4px", transform: "translateY(-1px)", transitionDuration: "0.3s" }
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

    const manageCountryWarPoints = (message) => {
        const pointGained = (message.innerText.match(/\d+/) || [0])[0];
        player.countryWars.countryPoint += parseInt(pointGained);
        player.countryWars.playerPoint += parseInt(pointGained);
        updateCountryWarsPoint(pointGained);
        message.remove();
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
            if (message.innerText.includes("earned"))
                manageCountryWarPoints(message);
        })
    });

    const targetObserver = new MutationObserver(function(mutations) {
        const botAvailable = mutations.find(e =>
            e.removedNodes.length == 1 &&
            e.removedNodes[0]?.classList?.contains("timer") &&
            e.target.textContent.includes("NPC  "))
        if (!botAvailable)
            return;
        sendLog(`
            <div style="color: #fdd81f">
                <img class="icon" src="icons/loot.svg" style="filter: brightness(0) saturate(100%) invert(90%) sepia(93%) saturate(2593%) hue-rotate(334deg) brightness(100%) contrast(99%);">
                New
                <div class='badge'>NPC</div>
                appeared
            </div>
        `)
    });

    const windowCloseObserver = new MutationObserver(async function(mutations) {
        const windowClosed = mutations.find(e => {
            return e.target == document.querySelector("main") &&
                e.removedNodes.length == 1 &&
                e.removedNodes[0]?.classList?.contains("window", "svelte-1hjm43z")
        })
        if (!windowClosed)
            return;

        const isVPNWindow = windowClosed.removedNodes[0].querySelector(".window-title > img[src='icons/vpn.svg']")
        if (isVPNWindow && !hideOnOpen) {
            vpnChangeObserver.disconnect();
            await getCountryWarsPlayerInformation();
            updateCountryWarsPoint();
        }

        const isLogWindow = windowClosed.removedNodes[0].querySelector(".window-title > img[src='icons/log.svg']")
        if (isLogWindow)
            logObserver.disconnect();

        const isTargetWindow = windowClosed.removedNodes[0].querySelector(".window-title > img[src='icons/targetList.svg']")
        if (isTargetWindow)
            targetObserver.disconnect();

        const wasHackingSomeone = windowClosed.removedNodes[0].querySelector(".window-title > img[src='icons/inal.svg']");
        if (wasHackingSomeone) {
            const currentHackingBy = player.hacksInProgress.find(e => e.hacker == player.currentlyHacking);
            if (currentHackingBy) {
                const footer = document.createElement("span");
                footer.innerText = "Click to counter";
                footer.style.fontSize = "0.7rem";
                footer.style.color = "var(--color-lightgrey)";
                currentHackingBy.counterLabel?.remove();
                currentHackingBy.counterProgressBar?.remove();
                currentHackingBy.message.append(footer);
                currentHackingBy.footer = footer;
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
            return
		// console.log(Array.from(effects).map(effect => {
		// 	const name = effect.querySelector("div > div")?.innerText.split("  ")[1].trim();
		// 	const value = effect.querySelector("div > span > span")?.innerText;
		// 	return name + " : " + value;
		// }).join("\n"))

        const index = rarities.indexOf(rarity.toLowerCase());
        const grade = getItemGrade(type, level, index, effects);
        if (grade == -1)
            return
        switch(type) {
            case "cpu":
                var gradeComponent = new Component("div", {
                    id: "grade",
                    classList: ["attribute", "svelte-181npts"],
                    innerText: `${grade} / 10 dCI`,
                    style: { paddingBlock: "4px", paddingInline: "9px", borderRadius: "2px", backgroundColor: "black" }
                })
                description.querySelector(".level")?.parentNode.insertBefore(gradeComponent.element, description.querySelector(".effect"));
                description.style.width = "300px";
                break;
            case "gpu":
                var gradeComponent = new Component("div", {
                    id: "grade",
                    classList: ["attribute", "svelte-181npts"],
                    innerText: `${grade} / 10 dGI`,
                    style: { paddingBlock: "4px", paddingInline: "9px", borderRadius: "2px", backgroundColor: "black" }
                })
                description.querySelector(".level")?.parentNode.insertBefore(gradeComponent.element, description.querySelector(".effect"));
                description.style.width = "300px";
                break;
            case "psu":
                var gradeComponent = new Component("div", {
                    id: "grade",
                    classList: ["attribute", "svelte-181npts"],
                    innerText: `${grade} / 10 dPI`,
                    style: { paddingBlock: "4px", paddingInline: "9px", borderRadius: "2px", backgroundColor: "black" }
                })
                description.querySelector(".level")?.parentNode.insertBefore(gradeComponent.element, description.querySelector(".effect"));
                description.style.width = "300px";
                break;
            case "router":
                var gradeComponent = new Component("div", {
                        id: "grade",
                        classList: ["attribute", "svelte-181npts"],
                        innerText: `${grade} / 10 dFI`,
                        style: { paddingBlock: "4px", paddingInline: "9px", borderRadius: "2px", backgroundColor: "black" }
                })
                description.querySelector(".level")?.parentNode.insertBefore(gradeComponent.element, description.querySelector(".effect"));
                description.style.width = "300px";
                break;
            default:
                return -1;
        }
    });

    const updateCountryWarsCountry = () => {
        const countryName = document.querySelector("#countryName");
        countryName.innerHTML = countryName.innerHTML
            .replace(/\/\w+\.svg/, `/${player.currentCountry.code}.svg`)
            .replace(/>.+$/, `>${player.currentCountry.name}`);
    }

    const updateCountryWarsPoint = async (pointGained) => {
        await sleep(200);
        const countryPoint = document.querySelector("#countryPoint");
        countryPoint.innerHTML = countryPoint.innerHTML.replace(/\d+$/, player.countryWars.countryPoint);

        const playerPoint = document.querySelector("#playerPoint");
        playerPoint.innerHTML = playerPoint.innerHTML.replace(/\d+$/, player.countryWars.playerPoint);

        if (pointGained) {
            const lastHackName = document.querySelector("#lastHackName");
            lastHackName.innerHTML = lastHackName.innerHTML.replace(/>.+$/, `>${player.currentlyHacking}`);

            const lastHackPoint = document.querySelector("#lastHackPoint");
            lastHackPoint.innerHTML = lastHackPoint.innerHTML.replace(/\d+$/, pointGained);
        }
    }

    const vpnChangeObserver = new MutationObserver(function(mutations) {
        const [code, name] = document.querySelector(".element > div:nth-child(2) > div:nth-child(2)")?.innerText?.split(" • ") || [];
        if (!code || !name)
            return;
        player.currentCountry.code = code;
        player.currentCountry.name = name;
        updateCountryWarsCountry();
    })

    const windowOpenObserver = new MutationObserver(async function(mutations) {
        const newWindow = mutations.find(e => {
            return e.target == document.querySelector("main") &&
                e.addedNodes.length == 1 &&
                e.addedNodes[0]?.classList?.contains("window", "svelte-1hjm43z")
        })
        if (!newWindow)
            return;

        const isFilamentWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/filament.svg']")?.parentNode?.parentNode;
        if (isFilamentWindow) {
            console.log("is filament window")
            const upgrader = isFilamentWindow.querySelectorAll("h3")[1];
            if (!upgrader)
                return;
            const container = document.createElement("a");
            container.style.width = "311px";
            container.style.display = "inline-block";
            container.style.margin = "0px";
            container.style.marginTop = "10px";
            container.style.flex = "0 1 auto";

            const button = document.createElement("button");
            const isAnyGreen = Array.from(isFilamentWindow.querySelectorAll("button.green:not(.cantClick)")).slice(1).length
            button.innerText = "Trade all"
            button.classList.add("green", "svelte-ec9kqa");
            if (!isAnyGreen)
                button.classList.add("cantClick");
            button.style.height = "auto";
            button.style.padding = "6px 14px";
            button.style.fontFamily = "var(--font-family-1)";
            button.style.fontSize = "16px";
            button.style.boxShadow = "0 10px 15px var(--color-shadow)";

            container.onclick = async () => {
                for (let i = 0; i < 5; i++) {
                    let button = Array.from(isFilamentWindow.querySelectorAll("button.green")).filter(e => e.innerText == "Max")[i];
                    button?.click();
                    await sleep(100);
                }
            }

            container.append(button);
            upgrader.after(container);
        }

        const isCountryWarsWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/countryWars.svg']")
        if (isCountryWarsWindow && hideOnOpen)
            isCountryWarsWindow.parentNode.parentNode.style.display = "none";

        const isVPNWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/vpn.svg']")
        const target = document.querySelector(".element > div:nth-child(2) > div");
        if (isVPNWindow && hideOnOpen)
            isVPNWindow.parentNode.parentNode.style.display = "none";
        if (isVPNWindow && target && !hideOnOpen)
            vpnChangeObserver.observe(target, { attributes: true, childList: true, characterData: false, subtree: true });

        const hasBeenHackedWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/hack.svg']") && newWindow.addedNodes[0].querySelector(".window-title")?.innerText?.trim() == "Hacked"
        if (hasBeenHackedWindow)
            hasBeenHacked(newWindow.addedNodes[0]);

        const isLogWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/log.svg']")
        if (isLogWindow)
            logObserver.observe(isLogWindow?.closest(".window.svelte-1hjm43z")?.querySelector(".window-content > #wrapper"), {attributes: false, childList: true, characterData: false, subtree: true});

        const isTargetWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/targetList.svg']")
        if (isTargetWindow)
            targetObserver.observe(isTargetWindow.closest(".window.svelte-1hjm43z")?.querySelector(".window-content > div > #list"), { attributes: false, childList: true, characterData: false, subtree: true });


        const isHackingSomeoneWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/inal.svg']")?.parentNode?.parentNode
        if (isHackingSomeoneWindow) {
            const hacked = isHackingSomeoneWindow.querySelector(".username")?.innerText;
            if (hacked)
                player.currentlyHacking = hacked;
            const isHackingYou = player.hacksInProgress.find(e => e.hacker == hacked);
            if (!isHackingYou)
                return;
            console.log("you're countering")
            counterHack(isHackingYou);
        }

        const isParamWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/settings.svg']")?.parentNode?.parentNode;
        console.log(isParamWindow)
        if (isParamWindow) {
            var currImage = localStorage.getItem("bg_image")
            var currColor = JSON.parse(localStorage.getItem("bg_color"))

            void function updateBackground() {
                addOrUpdateStyle(`
        /* Modify background image */
        body {
            background-image: url(${currImage}), ${formatString(currColor["effect"], currColor)} !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            background-position: center !important;
        }`)
                localStorage.setItem("bg_image", currImage)
                localStorage.setItem("bg_color", JSON.stringify(currColor))
            }

            const backgroundThingy = document.createElement("div")
            backgroundThingy.className = "el svelte-176ijne"
            backgroundThingy.innerHTML = `<h4>Edit background image</h4>
            <div style="font-size: 14px;">Upload a file</div>
            <div style="display: flex; gap: 5px; justify-content: center; margin-top: 4px;">
            </div>
            <div style="font-size: 14px; margin-top: 4px;"> Or import from URL</div>
            <div style="display: flex; gap: 5px; justify-content: center; margin-top: 4px;">
            </div>
            <div style="display: flex; gap: 5px; justify-content: center; margin-top: 4px;">
            </div>`
            // <div style="display: flex; gap: 5px; justify-content: center; margin-top: 4px;">

            const uploadButton = document.createElement("BUTTON");
            uploadButton.innerHTML = "Upload"
            uploadButton.className = "grey svelte-ec9kqa"
            uploadButton.style = "height: auto; padding: 6px 14px; font-family: var(--font-family-1); font-size: 15px; box-shadow: 0 10px 15px var(--color-shadow);"
            uploadButton.onclick = () => {
                var input = document.createElement('input');
                input.type = 'file';

                input.onchange = e => {
                    var file = e.target.files[0];

                    var fileReader = new FileReader();
                    fileReader.onload = function() {
                        var readResult = fileReader.result
                        currImage = readResult
                        updateBackground()
                    }
                    fileReader.readAsDataURL(file)

                }

                input.click();
            }
            //backgroundThingy.children[1].appendChild(uploadButton)

            const resetBgButton = document.createElement("BUTTON");
            resetBgButton.innerHTML = "Reset background"
            resetBgButton.className = "red svelte-ec9kqa"
            resetBgButton.style = "height: auto; padding: 6px 14px; font-family: var(--font-family-1); font-size: 15px; box-shadow: 0 10px 15px var(--color-shadow);"
            resetBgButton.onclick = () => {
                currImage = ""
                updateBackground()
            };
            backgroundThingy.children[2].innerHTML = backgroundThingy.children[2].innerHTML + '<a style="width: auto; display: inline-block; margin: 0px; flex: 0 1 auto;"></a>'
            backgroundThingy.children[2].children[0].appendChild(uploadButton)
            backgroundThingy.children[5].innerHTML = backgroundThingy.children[4].innerHTML + '<a style="width: auto; display: inline-block; margin: 0px; flex: 0 1 auto;"></a>'
            backgroundThingy.children[5].children[0].appendChild(resetBgButton)

            const urlInput = document.createElement("INPUT")
            urlInput.className = "svelte-16rukbq"
            urlInput.style = "width: 100%; height: 100%; padding: 6px 10px; font-family: var(--font-family-2); background-color: var(--color-grey);"
            urlInput.type = "url"
            urlInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.keyCode === 13) {
                    var readResult = fileReader.result
                    currImage = urlInput.value
                    updateBackground()
                }
            });
            backgroundThingy.children[4].appendChild(urlInput)

            const paramsContent = isParamWindow.getElementsByClassName("window-content")[0]
            paramsContent.style.overflowY = "scroll"
            paramsContent.firstChild.appendChild(backgroundThingy)
        }

        const hasHackedSomeoneWindow = newWindow.addedNodes[0].querySelectorAll(".window-content > div > .el").length == 4;
        if (hasHackedSomeoneWindow) {
            const hacked = newWindow.addedNodes[0].querySelector(".window-content > div > .el:nth-child(1) > .wrapper > .username")?.innerText
        // Naleg clutch (it ain't me that says it, it's d0t)
            const wasHackingYou = player.hacksInProgress.find(e => e.hacker === hacked.split(' ')[0]);
            if (!wasHackingYou)
                return;
            console.log("bro was hacking you")
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

    const editProgressBar = () => {
        const progressBar = (document.querySelectorAll(".topbar-value") || [])[2]
        if (!progressBar)
            return;
        progressBar.style.resize = "horizontal";
    }

    const getCountryPlayerInformation = () => {
        return new Promise(async resolve => {
            hideOnOpen = true;
            const vpnButton = document.querySelector("#desktop-container > div > div > div > img[src='icons/vpn.svg']")?.parentNode?.parentNode?.parentNode
            if (!vpnButton)
                return;
            vpnButton.click();
            await sleep(200);
            const [code, name] = document.querySelector(".element > div:nth-child(2) > div:nth-child(2)")?.innerText?.split(" • ") || [];
            if (!code || !name)
                return;
            player.currentCountry.code = code;
            player.currentCountry.name = name;
            document.querySelector(".window-title > img[src='icons/vpn.svg']")?.parentNode?.querySelector(".window-close")?.click()
            hideOnOpen = false;
            resolve();
        })
    }

    const prettierLoadFails = (code) => {
        hideOnOpen = false;
        alert(`Prettier-s0urce loading failed, please contact Xen0o2 on Discord (error code: ${code})`);
    }

    const getCountryWarsPlayerInformation = () => {
        return new Promise(async resolve => {
            hideOnOpen = true;
            await sleep(200);
            const countryWarsButton = document.querySelector("#desktop-container > div > div > div > img[src='icons/countryWars.svg']")?.parentNode?.parentNode?.parentNode
            if (!countryWarsButton)
                return prettierLoadFails("1");
            countryWarsButton.click();
            await sleep(300);
            const countryTab = document.querySelectorAll(".selection")[0];
            if (!countryTab)
                return prettierLoadFails("2");
            countryTab.click();
            await sleep(500);
            const countryLine = document.querySelector(`.list > div > div > div:nth-child(2) > img[src='flags/${player.currentCountry.code}.svg']`)?.parentNode?.parentNode;
            const countryPoint = countryLine?.querySelector("div > img[src='icons/countryWars.svg']")?.parentNode?.innerText || "0";
            if (!countryPoint)
                return prettierLoadFails("3");
            player.countryWars.countryPoint = parseInt(countryPoint);
            const playerTab = document.querySelectorAll(".selection")[1];
            if (!playerTab)
                return prettierLoadFails("4");
            playerTab.click();
            await sleep(500);
            let playerPoint = document.querySelectorAll(".username")[20]?.parentNode?.querySelector("span > img")?.parentNode?.innerText
            if (!playerPoint) {
                if (!player.username) {
                    await sleep(500);
                    player.username = document.querySelector("img[src='icons/online.svg']")?.parentNode?.innerText?.trim();
                }
                console.log(player.username);
                const players = document.querySelectorAll(".username");
                console.log(players);
                let playerIndex = Array.from(players).findIndex(e => e.innerText.trim() == player.username);
                if (playerIndex == -1) playerIndex = Array.from(players).findIndex(e => e.innerText.trim() == player.username + " (you)");
                console.log(playerIndex);
                playerPoint = players[playerIndex]?.parentNode?.querySelector("span > img")?.parentNode?.innerText || 0;
                if (playerPoint == undefined)
                    return prettierLoadFails("5");
            }
            player.countryWars.playerPoint = parseInt(playerPoint);
            document.querySelector(".window-title > img[src='icons/countryWars.svg']")?.parentNode?.querySelector(".window-close")?.click()
            hideOnOpen = false;
            resolve();
        })
    }

    const editCountryWarWindow = async () => {
        await getCountryPlayerInformation();
        await getCountryWarsPlayerInformation();
        const window = document.querySelector("body > div > main > div:nth-child(4)");
        if (!window)
            return;
        window.classList.add("window", "svelte-1hjm43z");
        window.style.overflow = "auto";
        window.style.height = "380px";
        window.style.resize = "both";
        window.style.padding = null;

        const countryWarTitle = window.querySelector("div");
        if (!countryWarTitle)
            return;
        countryWarTitle.classList.add("window-title", "svelte-1hjm43z");

        const countryWarChart = window.querySelector("div:nth-child(2)");
        if (!countryWarChart)
            return;
        countryWarChart.style.height = "200px";
        countryWarChart.style.borderLeftWidth = null;
        countryWarChart.style.borderLeftStyle = null;
        countryWarChart.style.borderLeftColor = null;
        countryWarChart.style.borderBottomWidth = null;
        countryWarChart.style.borderBottomStyle = null;
        countryWarChart.style.borderBottomColor = null;

        const separator = document.createElement("div");
        separator.classList.add("line");
        separator.style.width = "90%";
        separator.style.margin = "5%";
        window.append(separator);

        const infoContainer = document.createElement("div");
        infoContainer.style.fontFamily = "IBM Plex Mono,monospace";
        infoContainer.style.display = "flex";
        infoContainer.style.flexDirection = "column";
        infoContainer.style.margin = "10px";
        infoContainer.style.gap = "15px";

        const countryInfo = document.createElement("div");
        const countryName = document.createElement("div");
        const countryIcon = document.createElement("img");
        const playerInfo = document.createElement("div");
        const playerName = document.createElement("div");
        const playerIcon = document.createElement("img");
        const lastHackInfo = document.createElement("div");
        const lastHackName = document.createElement("div");
        const lastHackIcon = document.createElement("img");

        countryIcon.src = `flags/${player.currentCountry.code}.svg`;
        countryIcon.style.height = "13px";
        countryIcon.style.marginInline = "2px 5px";
        playerIcon.src = `icons/countryWars.svg`;
        playerIcon.style.height = "20px";
        playerIcon.style.marginRight = "3px";
        lastHackIcon.src = `icons/hack-red.svg`;
        lastHackIcon.style.height = "16px";
        lastHackIcon.style.marginInline = "2px 6px";

        countryInfo.innerText = player.countryWars.countryPoint;
        countryInfo.id = "countryPoint";
        countryInfo.style.color = "var(--color-lightgrey)";
        countryInfo.style.display = "flex";
        countryInfo.style.justifyContent = "space-between";
        countryName.innerText = player.currentCountry.name;
        countryName.id = "countryName";
        countryName.style.fontWeight = "bold";
        countryName.style.display = "flex";
        countryName.style.alignItems = "center";

        playerInfo.innerText = player.countryWars.playerPoint;
        playerInfo.id = "playerPoint";
        playerInfo.style.color = "var(--color-lightgrey)";
        playerInfo.style.display = "flex";
        playerInfo.style.justifyContent = "space-between";
        playerName.innerText = player.username;
        playerName.style.fontWeight = "bold";
        playerName.style.display = "flex";
        playerName.style.alignItems = "center";

        lastHackInfo.innerText = `+0`;
        lastHackInfo.id = `lastHackPoint`;
        lastHackInfo.style.color = "var(--color-midgreen)";
        lastHackInfo.style.display = "flex";
        lastHackInfo.style.justifyContent = "space-between";
        lastHackName.innerText = `No hack yet`;
        lastHackName.id = `lastHackName`;
        lastHackName.style.fontWeight = "bold";
        lastHackName.style.display = "flex";
        lastHackName.style.alignItems = "center";

        countryName.prepend(countryIcon);
        countryInfo.prepend(countryName);
        playerName.prepend(playerIcon);
        playerInfo.prepend(playerName);
        lastHackName.prepend(lastHackIcon);
        lastHackInfo.prepend(lastHackName);

        infoContainer.append(countryInfo);
        infoContainer.append(playerInfo);
        infoContainer.append(lastHackInfo);

        window.append(infoContainer);
    }

    const editWelcomeMessage = () => {
        const message = document.querySelector(".window-title > img[src='icons/log.svg']").parentNode.parentNode.querySelector("#wrapper > div");
        if (!message)
            return;
        message.innerHTML = message.innerHTML
            .replace("System started.<br>", "")
            .replace("s0urceOS 2023", "✨ Prettier d0urceOS V1.5 ✨")
	    .replace(">.", ">. <br><span style='font-size: 0.8rem; color: var(--color-lightgrey);'>Tweaked by <span style='color: yellow; text-shadow: 0 0 3px yellow'>Naleg</span> 👀.</span>")
            .replace(">.", ">. <br><span style='font-size: 0.8rem; color: var(--color-lightgrey);'>Expanded by <span style='color: chartreuse; text-shadow: 0 0 3px chartreuse'>d0t</span> 😍.</span>")
            .replace(">.", `>. <br><span style='font-size: 0.8rem; color: var(--color-lightgrey);'>Template made with ❤️ by <span style='color: pink; text-shadow: 0 0 3px pink'>Xen0o2</span>.</span>`);
        sendLog(`
            <a href="https://www.buymeacoffee.com/doteki">Buy d0t a <span style='color: chartreuse; text-shadow: 0 0 3px chartreuse'>dCoffee</span> 😉</a>
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
        if (mutations.length == 1 && !mutations[0].target.id)
            updateMythicOnly();
    })

    const updateMythicOnly = () => {
        try {
            const filaments = document.querySelectorAll(".filament-el");
            const [cf, uf, rf, ef, lf, mf, ethf] = Array.from(filaments).map(e => parseInt(e.innerText.trim()));
            const mythics = ((cf + (uf * 3) + (rf * 9) + (ef * 27) + (lf * 135) + (mf * 405) + (ethf * 2025)) / 60750 * 30).toFixed(4);
            const element = document.querySelector("#mythicOnly");
            if (element)
                element.innerHTML = element.innerHTML.replace(/^\d+\.\d+/, mythics);
            return mythics;
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
            filaments.forEach(e => e.style.display = "none");

            const mythics = updateMythicOnly();
            const mythicOnly = document.createElement("div");
            const mythicIcon = document.createElement("img");

            mythicOnly.innerText = mythics;
            mythicOnly.id = "mythicOnly";
            mythicOnly.classList.add("filament-el","svelte-1azjldn");
            mythicOnly.style.height = "100%";
            mythicOnly.style.width = "auto";
            mythicOnly.style.display = "flex";
            mythicOnly.style.justifyContent = "center";
            mythicOnly.style.alignItems = "center";
            mythicOnly.style.gap = "5px";
            mythicOnly.style.fontSize = "1.5rem";
            mythicOnly.style.paddingLeft = "10px";

            mythicIcon.src = "icons/filament-ethereal.svg"
            mythicIcon.classList.add("icon", "icon-in-text");
            mythicIcon.style.transform = "translateY(-1px)";

            mythicOnly.append(mythicIcon);
            container.append(mythicOnly);

            container.onclick = () => {
                if (player.configuration.displayCustomFilament) {
                    mythicOnly.style.display = "none";
                    filaments.forEach(e => e.style.display = "block");
                } else {
                    mythicOnly.style.display = "flex";
                    filaments.forEach(e => e.style.display = "none");
                }
                player.configuration.displayCustomFilament = !player.configuration.displayCustomFilament;
            }

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
                            style: { color: "cornflowerblue", textShadow: "0 0 3px pink", fontFamily: "var(--font-family-2)", fontWeight: "500", fontSize: "3rem", opacity: "1" }
                        }),
                        new Component("span", {
                            innerText: "Running Version 1.5.1",
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

    (async () => {
        console.log("Sleeping before load...")
        await sleep(1500);
        console.log("Script loaded.")
        start();
    })()

    const start = async () => {
        while (document.querySelector("#login-top"))
            await sleep(500);
        while (window.location.href.toLowerCase().includes("rules"))
            await sleep(500);
        if (document.querySelector("#login-top")) {
            start()
            return;
        }
        loadingScreen("create");
        while (1) {
            var i = 1
            try {
                const logWindow = document.querySelector(".window-title > img[src='icons/log.svg']").closest(".window.svelte-1hjm43z").querySelector(".window-content > #wrapper");
                logObserver.observe(logWindow, {attributes: false, childList: true, characterData: false, subtree: true});
                windowOpenObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
                windowCloseObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
                itemHoverObserver.observe(document.querySelector("main"), {attributes: false, childList: true, characterData: false, subtree: true});
                editFilaments();
                editProgressBar();
                await editCountryWarWindow();
                editWelcomeMessage();
                loadingScreen("delete");
                break
            }
            catch {
                if (i) {
                    i--;
                    loadingScreen("delete");
                }
                await sleep(5000)
            }
        }
    }
})();


// Page Break!

function addOrUpdateStyle(css) {
        const styleElement = document.getElementById('customStyles');
        if (styleElement) {
            styleElement.textContent = css;
        } else {
            const newStyleElement = document.createElement('style');
            newStyleElement.id = 'customStyles';
            newStyleElement.textContent = css;
            document.head.appendChild(newStyleElement);
        }
    }

    // Add custom CSS
    // Insert the saved image
    var backgroundImage = localStorage.getItem("bg_image")
    var backgroundColor = localStorage.getItem("bg_color")
    if (!backgroundImage) {
        localStorage.setItem("bg_image", "")
        backgroundImage = localStorage.getItem("bg_image")
    }
    if (!backgroundColor) {
        localStorage.setItem("bg_color", '{"primary": "rgb(0, 0, 17)", "secondary": "rgb(0, 0, 140)", "angle": 180, "balance": "100%", "effect": "linear-gradient({{angle}}deg, {{primary}}, {{secondary}})"}')
        backgroundColor = localStorage.getItem("bg_color")
    }
    backgroundColor = JSON.parse(backgroundColor)
    addOrUpdateStyle(`
        /* Modify background image */
        body {
            background-image: url(${backgroundImage}), ${formatString(backgroundColor["effect"], backgroundColor)} !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            background-position: center !important;
        }`)

var send=WebSocket.prototype.send, inboundLog=true, outboundLog=true
function traverse(obj,fn){
  let keys=Object.keys(obj)
  for(let i=0;i<keys.length;i++){
    let part=obj[keys[i]]
    if(part && typeof part==="object") traverse(part,fn);
    fn(part)
  }
}

// Page Break!

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
    if(o?.btc) o.username+=` (${parseFloat(o.btc).toFixed(3)} btc)`;
  })
  if(x[1]?.event==="gotGlobalRoomLogs"){
    x[1].arguments[0]=x[1].arguments[0].map(a=>{
      a=JSON.parse(a)
      let o=a.sender
      if(o.btc)
        o.username+=` (${parseFloat(o.btc).toFixed(3)} btc)`;
      return JSON.stringify(a)
    })
  }

  data=data.substring(0,index)+JSON.stringify(x)
  event.data=data
  if(inboundLog) console.log(data);
})

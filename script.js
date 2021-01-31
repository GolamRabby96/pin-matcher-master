function getPin() {
	const random = Math.random() * 10000;
	const pin = (random + "").split(".")[0];
	if (pin.length === 4) {
		return pin;
	} else {
		return getPin();
	}
}
function generatePin() {
	document.getElementById("pin").value = getPin();
}
// calculator button event
const buttonContainer = document.getElementById("digit-container");
buttonContainer.addEventListener("click", (event) => {
	const digit = event.target.innerText;
	if (isNaN(digit)) {
		// handle backspance and handle clear
		if (digit === "C") {
			document.getElementById("typed-pin").value = "";
		}
		if (digit === "<") {
			const cutNumber = document.getElementById("typed-pin").value;
			let convert = "";
			for (i = 0; i < cutNumber.length - 1; i++) {
				convert = convert + cutNumber[i];
			}
			document.getElementById("typed-pin").value = convert;
		}
	} else {
		const typedInput = document.getElementById("typed-pin");
		typedInput.value = typedInput.value + digit;
	}
});

function matchPin() {
	let maxTry = document.getElementById("max-try").innerText;
	console.log(maxTry);
	const pin = document.getElementById("pin").value;
    const typePin = document.getElementById("typed-pin").value;
    
	if (pin == typePin) {
		displayUpdate("block", "none");
	} else {
        let maxTryCount = parseInt(maxTry);
        maxTryCount = maxTryCount -1;

		if (maxTryCount == 0) {
            document.getElementById("submitHide").style.display = "none";
            document.getElementById("max-try").innerText = maxTryCount;
		} else {
			document.getElementById("max-try").innerText = maxTryCount;
        }
        document.getElementById("typed-pin").value='';
        displayUpdate("none", "block");
        
	}
}

function displayUpdate(display, nonDisplay) {
	document.getElementById("ok-match").style.display = display;
	document.getElementById("not-match").style.display = nonDisplay;
}

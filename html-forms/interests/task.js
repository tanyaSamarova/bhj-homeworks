'use strict';

const checkInterest = document.querySelectorAll(".interest__check");

for (let interest of checkInterest) {
    const subInterests = interest.closest(".interest").querySelectorAll(".interest__check");
    interest.addEventListener("change", () => {
        if (interest.checked) {
            if (subInterests) {
                for (let subInterest of subInterests) {
                    subInterest.checked = true;
                }
            }
        } else {
            if (subInterests) {
                for (let subInterest of subInterests) {
                    subInterest.checked = false;
                }
            }
        }
    }
    );
}
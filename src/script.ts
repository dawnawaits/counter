class Counter {
    private count: number;

    constructor() {
        this.count = 0;
    }

    /**
     * Reset Counter Value
     */
    public reset = () => {
        this.count = 0;
        return this.count;
    };
    /**
     * Increase counter value
     */
    public increase = () => {
        return ++this.count;
    };

    /**
     * Decrease counter value
     */
    public decrease = () => {
        return --this.count;
    };
}

function updateDisplay(callback?: () => number) {
    let count = document.querySelector("#count") as HTMLElement;
    count.textContent = callback!().toString();
}

window.onload = function () {
    let count = new Counter();

    let decBtn = document.querySelector("#dec-btn") as HTMLElement;
    let incBtn = document.querySelector("#inc-btn") as HTMLElement;
    let resetBtn = document.querySelector("#reset-btn") as HTMLElement;

    decBtn.addEventListener("click", () => updateDisplay(count.decrease));
    incBtn.addEventListener("click", () => updateDisplay(count.increase));
    resetBtn.addEventListener("click", () => updateDisplay(count.reset));
};

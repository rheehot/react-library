export default class Rotate {

    private static readonly VIBRATE_INTERVAL: number = 20;

    private rotateDom: HTMLElement;
    private timeoutId: number = 0;
    private intervalId: number = 0;

    constructor(dom: HTMLElement) {

        if (dom) {
            this.rotateDom = dom;

        } else {

            throw new TypeError("dom이 유효하지 않습니다. dom이 렌더링 되어있는지 확인해주세요.");
        }
    }

    rotate(timeout: number = 800, interval: number = 50, rotateAngle = 10, onTerminated: Function | undefined = undefined) {

        let deg = rotateAngle;

        this.intervalId = window.setInterval(() => {

            deg = (-1) * deg;
            this.rotateDom.style.transform = `rotate(${deg}deg)`;

        }, interval);

        this.timeoutId = window.setTimeout(() => {

            window.clearInterval(this.intervalId);
            window.clearTimeout(this.timeoutId);
            this.rotateDom.style.transform = `rotate(0deg)`;

            if (onTerminated) onTerminated();

        }, timeout);
    }
}

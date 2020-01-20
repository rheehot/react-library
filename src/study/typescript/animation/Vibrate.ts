export default class Vibrate {

    private static readonly VIBRATE_INTERVAL: number = 20;
    private static readonly VIBRATE_DISTANCE: number = 2;

    private vibrateDom: HTMLElement;
    private timeoutId: number = 0;
    private intervalId: number = 0;

    constructor(dom: HTMLElement) {

        if (dom) {
            this.vibrateDom = dom;
            this.vibrateDom.style.position = "relative";

        } else {

            throw new TypeError("dom이 유효하지 않습니다. dom이 렌더링 되어있는지 확인해주세요.");
        }
    }

    vibrate(timeout = 1000, vibrateDistance: number = Vibrate.VIBRATE_DISTANCE, onTerminated: Function | undefined = undefined) {

        let px = vibrateDistance;

        this.intervalId = window.setInterval(() => {

            px = (-1) * px;
            this.vibrateDom.style.left = `${px}px`;

        }, Vibrate.VIBRATE_INTERVAL);

        this.timeoutId = window.setTimeout(() => {

            window.clearInterval(this.intervalId);
            window.clearInterval(this.timeoutId);

            if (onTerminated) onTerminated();

        }, timeout);
    }

}

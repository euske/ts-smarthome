export interface Bulb {
    turnOn(): void
    turnOff(): void
}

export interface Switch {
    isOn(): boolean
}

export class SmartHome {
    constructor(bulb: Bulb, swt: Switch) {
        // TODO
    }

    run() {
        // TODO
    }
}

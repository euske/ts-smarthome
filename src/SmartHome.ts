export interface Bulb {
    turnOn(): void
    turnOff(): void
}

export interface Switch {
    isOn(): boolean
}

export class SmartHome {
    run(bulb: Bulb, swt: Switch) {
    }
}

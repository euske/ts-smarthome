import { Bulb, Switch, SmartHome } from "./SmartHome"

// AlwaysOnSwitch: つねにオンを返すスイッチ。
class AlwaysOnSwitch implements Switch {
    isOn(): boolean {
        return true
    }
}

// SpyBulb: ついたかどうかを記録するだけの電球。
class SpyBulb implements Bulb {
    turnOn_wasCalled = false
    turnOff_wasCalled = false

    turnOn() {
        // TODO
    }

    turnOff() {
        // TODO
    }
}

describe('SmartHome', () => {

    test('スイッチがonのとき、電球をonにする', () => {
        // 準備
        const bulb = new SpyBulb()
        const swt = new AlwaysOnSwitch()

        // 実行
        new SmartHome(bulb, swt).run()

        // 結果の確認
        expect(bulb.turnOn_wasCalled).toBe(true)
        expect(bulb.turnOff_wasCalled).toBe(false)
    })

    test('スイッチがoffのとき、電球をoffにする', () => {
        // TODO
    })
})

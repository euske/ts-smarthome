import { SmartHome } from "./SmartHome"

describe('SmartHome', () => {

    test('switchがオンであればbulbをオンにする', () => {
        // 準備
        const bulb = new SpyBulb()
        const swt = new AlwaysOnSwitch()

        // 実行
        new SmartHome().run(bulb, swt)

        // 結果の確認
        expect(bulb.turnOn_wasCalled).toBe(true)
        expect(bulb.turnOff_wasCalled).toBe(false)
    })
})

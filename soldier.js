const soldier = {
    name: 'Arc Warden',
    hp: 10,
    weapon: {
        gunName: 'ПП',
        ammuAmount: 30,
    },
    supply: 3,

    fire() {
        this.weapon.ammuAmount--
        console.log(`Пиу-Пиу ${this.weapon.ammuAmount} / 30`)
        if (this.weapon.ammuAmount === 0) {
            console.log('обойма пуста. Перезаредитесь')
        }
    },

    reload() {
        this.weapon.ammuAmount = 30
        this.supply--
        console.log(`перезарядка... припасов осталось ${this.supply} / 3`)
        if (this.supply === 0) {
            console.log('не осталось припасов, доставай нож')
        }
    },

    hurt() {
        this.hp--
        console.log(`Здоровье ${this.hp} / 10`)
        if (this.hp === 0) {
            console.log('Ты проиграл')
        }
    },
}
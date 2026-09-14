import powers from '../data/powers'

export class Hero {
    constructor(
        public name: string,
        public powerID: number,
        public age: number
    ){}

    get power(): string {
        return powers.find( power => power.id === this.powerID)?.desc || 'not found'
    }
}

export class Hero2 {}

export class Hero3 {}

export const miNombre = 'Hugo'

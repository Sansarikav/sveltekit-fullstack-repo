import { 
    SmartContract, 
    assert, 
    method, 
    prop 
} 
from 'scrypt-ts'

export class Multiply extends SmartContract {
    @prop()
    num1: bigint

    @prop()
    num2: bigint

    constructor(inp_1: bigint, inp_2: bigint) {
        super(...arguments)
        this.num1 = inp_1
        this.num2 = inp_2
    }

    @method()
    public unlock(multiply: bigint) {
        assert(multiply == this.num1 * this.num2, 'incorrect inputs')
    }
}
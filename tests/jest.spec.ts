class Calculator {
    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    };

    operationSum() {
        return this.num1 + this.num2
    }

    operationMultiply() {
        return this.num1 * this.num2
    }

    operationDividing() {
        return this.num1 / this.num2
    }

    operationSubtraction() {
        return this.num1 - this.num2
    }
    operationSumMultiply() {
        return (this.num1 + this.num2) * (this.num1 + this.num2)
    }
}

describe ("Positive Tests", () => {
    beforeEach(() => {
       console.log("Next Test Case")
    });

    test ("Check Sum Positive 1", ()=> {
        let summaryPositive1 = new Calculator(2, 1).operationSum();
        expect(summaryPositive1).toBe(3);
    });

    test ("Check Sum Positive 2", ()=> {
        let summaryPositive2 = new Calculator(5, 5).operationSum();
        expect(summaryPositive2).toBe(10);
    });

    test ("Check Multiply Positive 1", ()=> {
        let multiplyPositive1 = new Calculator(6, 6).operationMultiply();
        expect(multiplyPositive1).toBe(36);
    });

    test ("Check Multiply Positive 2", ()=> {
        let multiplyPositive2 = new Calculator(8, 8).operationMultiply();
        expect(multiplyPositive2).toBe(64);
    });

    test ("Check Dividing Positive 1", ()=> {
        let dividingPositive1 = new Calculator(21, 7).operationDividing();
        expect(dividingPositive1,).toBe(3);
    });

    test ("Check Dividing Positive 2", ()=> {
        let dividingPositive2 = new Calculator(44, 11).operationDividing();
        expect(dividingPositive2).toBe(4);
    });

    test ("Check Subtraction Positive 1", ()=> {
        let subtractionPositive1 = new Calculator(100, 50).operationSubtraction();
        expect(subtractionPositive1).toBe(50);
    });

    test ("Check Subtraction Positive 2", ()=> {
        let subtractionPositive2 = new Calculator(100, 70).operationSubtraction();
        expect(subtractionPositive2).toBe(30);
    });

    test ("Check sumMultiply Positive 1", ()=> {
        let sumMultiplyPositive1 = new Calculator(10, 20).operationSumMultiply();
        expect(sumMultiplyPositive1).toBe(900);
    });

    test ("Check sumMultiply Positive 2", ()=> {
        let sumMultiplyPositive2 = new Calculator(5, 10).operationSumMultiply();
        expect(sumMultiplyPositive2).toBe(225);
    });
});


describe ("Negative Tests", () => {
    beforeEach(() => {
        console.log("Next Test Case")
    });

    test ("Check Sum Negative 1", ()=> {
        let summaryNegative1 = new Calculator(20, 10).operationSum();
        expect(summaryNegative1).toBe(40);
    });

    test ("Check Sum Negative 2", ()=> {
        let summaryNegative2 = new Calculator(50, 50).operationSum();
        expect(summaryNegative2).toBe(30);
    });

    test ("Check Multiply Negative 1", ()=> {
        let multiplyNegative1 = new Calculator(6, 6).operationMultiply();
        expect(multiplyNegative1).toBe(26);
    });

    test ("Check Multiply Negative 2", ()=> {
        let multiplyNegative2 = new Calculator(8, 8).operationMultiply();
        expect(multiplyNegative2).toBe(56);
    });

    test ("Check Dividing Negative 1", ()=> {
        let dividingNegative1 = new Calculator(21, 7).operationDividing();
        expect(dividingNegative1).toBe(5);
    });

    test ("Check Dividing Negative 2", ()=> {
        let dividingNegative2 = new Calculator(44, 11).operationDividing();
        expect(dividingNegative2).toBe(6);
    });

    test ("Check Subtraction Negative 1", ()=> {
        let subtractionNegative1 = new Calculator(100, 50).operationSubtraction();
        expect(subtractionNegative1).toBe(40);
    });

    test ("Check Subtraction Negative 2", ()=> {
        let subtractionNegative2 = new Calculator(100, 70).operationSubtraction();
        expect(subtractionNegative2).toBe(50);
    });

    test ("Check sumMultiply Negative 1", ()=> {
        let sumMultiplyNegative1 = new Calculator(10, 20).operationSumMultiply();
        expect(sumMultiplyNegative1).toBe(800);
    });

    test ("Check sumMultiply Negative 2", ()=> {
        let sumMultiplyNegative2 = new Calculator(5, 10).operationSumMultiply();
        expect(sumMultiplyNegative2).toBe(205);
    });
});
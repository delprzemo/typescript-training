import { expect } from 'chai';




describe('Variables and functions - exercise 1', () => {

    it('Variables and functions - exercise 1', () => {
        expect(GetPersonPenaltyPoints('9001281173', [1, 3, 5, 6], 20).message)
            .to.equal('9001281173 has less than 26. Points: 15');

        expect(GetPersonPenaltyPoints('9001281173', [1, 3, 5, 6, 20], 28).message)
            .to.equal('9001281173 has more than 26. Points: 35');

        expect(GetPersonPenaltyPoints('9001281173', [], 16).message)
            .to.equal('9001281173 has less than 26. Points: 0');

        expect(GetPersonPenaltyPoints('9001281173', [], 16).points)
            .to.equal(0);

        expect(GetPersonPenaltyPoints('9001281173', [2, 3], 16).points)
            .to.equal(5);

        expect(GetPersonPenaltyPoints('9001281173', [2, 3], 16).identificationNumber)
            .to.equal('9001281173');

        expect(GetPersonPenaltyPoints('9001281173', [2, 3], 16, "No more details", 22).additional)
            .to.deep.equal(["No more details", 22]);
    });
})

function GetPersonPenaltyPoints(identificationNumber: string, penaltyPoints: number[], age: number, ...args: any )
    :{message: string, points: number, identificationNumber: string, additional: any} {

    let getPointsSum = (points: number[]) => {
        let sum = 0;
        for(let item of points) {
            sum = sum + item;
        }
        return sum;
    }

    return {
        message: `${identificationNumber} has ${age >= 26 ? 'more' : 'less'} than 26. `
            + `Points: ${getPointsSum(penaltyPoints)}`,
        points: getPointsSum(penaltyPoints),
        identificationNumber: identificationNumber,
        additional: [...args]
    }
}

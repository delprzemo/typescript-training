import { expect } from 'chai';

describe('Interfaces and classes - deeper', () => {

    it('Exercise 2', () => {
        let list = new MyList();
        expect(list.length).to.equal(0);

        list.add("Element1");
        list.add("Element2");
        list.add("Element3");

        expect(list.length).to.equal(3);
        expect(list.first()).to.equal("Element1");
        expect(list.first()).to.equal(list.getAll()[0]);

        list.remove("Element2");
        expect(list.length).to.equal(2);

        let listNextInstance = new MyList(list);
        expect(listNextInstance.length).to.equal(2);

        expect(list.add('NewElement').getAll().length).to.equal(3);

    });
})


class MyList {
    private list: string[];

    constructor(myList: MyList = null) {
        if (myList) 
            this.list = myList.list 
        else 
            this.list = [];
    }

    get length(): number {
        return this.list.length;
    }

    first(): string {
        return this.list[0];
    }

    add(element: string) {
        this.list.push(element);
        return this;
    }

    getAll(): string[] {
        return this.list;
    }

    remove(element: string) {
        const index = this.list.findIndex(item => item === element);
        this.list.splice(index, 1);
        return this;
    }
}
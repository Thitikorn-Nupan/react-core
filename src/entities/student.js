export class Student {
    #sid
    #fullname
    #age

    constructor(sid, fullname, age) {
        this.#sid = sid;
        this.#fullname = fullname;
        this.#age = age;
        this._sid = sid;
        this._fullname = fullname;
        this._age = age;
    }

    get sid() {
        return this._sid;
    }

    set sid(value) {
        this._sid = value;
    }

    get fullname() {
        return this._fullname;
    }

    set fullname(value) {
        this._fullname = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}
class Demo {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Demo("hello dell666");
        }
        return this.instance;
    }
    static aa() {
        console.log(this.instance);
    }
}
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);

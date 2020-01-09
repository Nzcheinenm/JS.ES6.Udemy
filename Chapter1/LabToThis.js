/**
 * THIS.
 */

const rectangle = {
    width: 10,
    heigth: 20,
    getSquare() {
        return this.width * this.heigth;
    }
}
console.log(rectangle.getSquare());


const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount() {
        return ((100 - parseInt(this.discount)) / 100) * this.price;
    }
}
console.log(price.getPriceWithDiscount());




const obj = {
    heigth: 20,
    setHeigthOne() {
        this.heigth = this.heigth + 1;
    }
}
obj.heigth;
obj.setHeigthOne();
console.log(obj.heigth);



const numerator = {
    value: 1,
    double: function() {
        this.value = this.value * 2;
        return this;
    },
    plusOne: function() {
        this.value = this.value + 1;
        return this;
    },
    minusOne: function() {
        this.value = this.value - 1;
        return this;
    }
}
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);





const product = {
    price: 25,
    count: 4,
    getAvgSum() {
        return this.count * this.price;
    }
}
console.log(product.getAvgSum());

const details = {
    price: 7,
    count: 19
}

details.getAvgSum = product.getAvgSum;
console.log(details.getAvgSum());


let sizes = {
    width: 5,
    heigth: 10
}
getSquare = function() {
    return this.width * this.heigth;
}
console.log(getSquare.call(sizes));




let element = {
    heigth: 25,
    getHeigth: function() {
        return this.heigth;
    }
}

let getElementHeigth = element.getHeigth.bind(element);
console.log(getElementHeigth());
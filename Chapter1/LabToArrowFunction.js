 sum = (...args) => {
     const params = Array.prototype.slice.call(args);

     const arrReduce = (prev, next) => prev + next;

     if (!params.length) return 0;

     return params.reduce(arrReduce);

 }

 console.log(sum(1, 2, 3, 4));
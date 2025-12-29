var cancellable = function(fn, args, t) {
    const timerId = setTimeout(() => {
        fn(...args);
    },t);

    const cancelfn = () => {
        clearTimeout(timerId)
    };

    return cancelfn;
};

const cancelTimeMs = 50;

const cancelFn = cancellable((x)=> x*5, [2], 20);

console.log(setTimeout(cancelFn, cancelTimeMs))
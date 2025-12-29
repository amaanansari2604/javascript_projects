
const cancallable = (fn, args, t) => {
    fn(...args);

    const timerid = setInterval(() => {
        fn(...args);
    }, t)

    const cancelfn = () => {
        clearInterval(timerid)
    }

    return cancelfn;
}

const cancelIntervalMs = 120;

const cancelFn = cancallable((x)=> x*5, [2], 30);

setTimeout(cancelFn, cancelIntervalMs);
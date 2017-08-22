export function throttle(func, wait) {
    var timeout,
        context,
        args,
        startTime = Date.parse(new Date());

    return function () {
        var curTime = Date.parse(new Date());
        var remaining = wait - (curTime - startTime);
        context = this;
        args = arguments;

        clearTimeout(timeout);

        if (remaining <= 0) {
            func.apply(context, args);
            startTime = Date.parse(new Date());
        } else {
            timeout = setTimeout(func, remaining);
        }
    }
};
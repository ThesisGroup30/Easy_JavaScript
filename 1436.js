var destCity = function(paths) {
    let destinations = new Set();
    let origins = new Set();
    for (let [origin, destination] of paths) {
        origins.add(origin);
        destinations.add(destination);
    }
    for (let destination of destinations) {
        if (!origins.has(destination)) {
            return destination;
        }
    }
    return null;
};

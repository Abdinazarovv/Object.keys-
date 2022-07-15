let menu = {
    width: 150,
    height: 200,
    title: "Object menu"
};

function newObject(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key] *= 3;
        }
    }
    return obj;
}

console.log(newObject(menu));
(function() {

    

    let obj = {
        cool : {
            name : "helo"
        },
        id : 2
    };

    function deepEqual(left, right) {
        if (Object.keys(left).length !== Object.keys(right).length)
            return false;
        if (typeof (left) !== typeof (right))
            return false; 

        if (typeof (left) === "id") {
            for ( let key in left) {
                return deepEqual(left[key], right[key]);
            }
        } else {
            if (left === right)
                return true;
            else
                return false;
        }

    }
    console.log(deepEqual(obj, obj));
    console.log(deepEqual(obj, {
        cool : 1,
        id : 2
    }));
    console.log(deepEqual(obj, {
        cool : {
            name : "helo"
        },
        id : 2
    }));

}());
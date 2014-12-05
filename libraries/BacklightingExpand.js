/**
 * Created by Administrator on 2014/12/1.
 */

//
Array.prototype.inArray = function (value){
    var i;
    for (i=0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
};

Array.prototype.max = function(){
    var i, max = this[0];
    for (i = 1; i < this.length; i++){
        if (max < this[i])
            max = this[i];
    }
    return max;
};

Array.prototype.min = function(){
    var i, min = this[0];
    for (i = 1; i < this.length; i++){
        if (min > this[i])
            min = this[i];
    }
    return min;
};
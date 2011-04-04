var Type = require("./index").Type;

//Number Types

var numberDefaults = {
    allowNull : true,
    primaryKey : false,
    foreignKey : false,
    "default" : null,
    unique : false,
    unsigned : false,
    description : ""
};

var setNumberType = function(cmpFun, parse) {
    return function(val) {
        if (typeof val != "number") {
            val = parse(val);
        }
        cmpFun && cmpFun(val);
        return val;
    }
};
var checkNumberType = function(type, cmpFun) {
    return function(val) {
        if (typeof val != "number" || isNaN(val)) {
            throw new Error(type + " requires a number");
        }
        cmpFun && cmpFun(val);
    }
};


exports.NUMBER = (exports.INT = function(options) {
    var ops = util.merge({}, numberDefaults, {type : "INT"}, options || {});
    var cmpFun = function(val) {
        if (ops.unsigned) {
            if (val < 0 || val > 4294967295) throw new Error("Int out of range");
        } else {
            if (val < -2147483648 || val > 2147483647) throw new Error("Int out of range");
        }
    };
    ops.setSql = setNumberType(checkNumberType(ops.type, cmpFun), parseInt);
    ops.checkType = checkNumberType(ops.type, cmpFun);
    return new Type(ops);
});


exports.TINYINT = function(options) {
    var ops = util.merge({}, numberDefaults, {type : "TINYINT"}, options || {});
    var cmpFun = function(val) {
        if (ops.unsigned) {
            if (val < 0 || val > 255) throw new Error("tinyint out of range");
        } else {
            if (val < -128 || val > 127) throw new Error("tinyInt out of range");
        }
    };

    ops.setSql = setNumberType(checkNumberType(ops.type, cmpFun), parseInt);
    ops.checkType = checkNumberType(ops.type, cmpFun);
    return new Type(ops);
};

exports.SMALLINT = function(options) {
    var ops = util.merge({}, numberDefaults, {type : "SMALLINT"}, options || {});
    var cmpFun = function(val) {
        if (ops.unsigned) {
            if (val < 0 || val > 65535) throw new Error("smallint out of range");
        } else {
            if (val < -32768 || val > 32767) throw new Error("smallint out of range");
        }
    };
    ops.setSql = setNumberType(checkNumberType(ops.type, cmpFun), parseInt);
    ops.checkType = checkNumberType(ops.type, cmpFun);
    return new Type(ops);
};


exports.MEDIUMINT = function(options) {
    var ops = util.merge({}, numberDefaults, {type : "MEDIUMINT"}, options || {});
    var cmpFun = function(val) {
        if (ops.unsigned) {
            if (val < 0 || val > 16777215) throw new Error("mediumint out of range");
        } else {
            if (val < -8388608 || val > 8388607) throw new Error("mediumint out of range");
        }
    };
    ops.setSql = setNumberType(checkNumberType(ops.type, cmpFun), parseInt);
    ops.checkType = checkNumberType(ops.type, cmpFun);
    return new Type(ops);
};


exports.BIGINT = function(options) {
    var ops = util.merge({}, numberDefaults, {type : "BIGINT"}, options || {});
    var cmpFun = function(val) {
        if (ops.unsigned) {
            if (val < 0 || val > 18446744073709551615) throw new Error("bigint out of range");
        } else {
            if (val < -9223372036854775808 || val > 9223372036854775807) throw new Error("bigint out of range");
        }
    };
    ops.setSql = setNumberType(checkNumberType(ops.type, cmpFun), parseInt);
    ops.checkType = checkNumberType(ops.type, cmpFun);
    return new Type(ops);
};

exports.FLOAT = function(options) {
    var ops = util.merge({}, numberDefaults, {type : "FLOAT"}, options || {});
    ops.setSql = setNumberType(checkNumberType(ops.type), parseInt);
    ops.checkType = checkNumberType(ops.type);
    return new Type(ops);
};


exports.DOUBLE = function(options) {
    var ops = util.merge({}, numberDefaults, {type : "DOUBLE"}, options || {});
    ops.setSql = setNumberType(checkNumberType(ops.type), parseInt);
    ops.checkType = checkNumberType(ops.type);
    return new Type(ops);
};


exports.DECIMAL = function(options) {
    var ops = util.merge({}, numberDefaults, {type : "DECIMAL"}, options || {});
    ops.setSql = setNumberType(checkNumberType(ops.type), parseInt);
    ops.checkType = checkNumberType(ops.type);
    return new Type(ops);
};
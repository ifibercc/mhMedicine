var mongodb = require('./mongodb');

var Schema = mongodb.mongoose.Schema;
var MedicineSchema = new Schema({
    materias : Array,
    three : String,
    quality : Number,
    createDate : {type : Date, default : Date.now}
});
var Medicine = mongodb.mongoose.model('Medicine', MedicineSchema);
var MedicineDAO = function(){};

MedicineDAO.prototype.save = function(obj, callback) {
    var instance = new Medicine(obj);
    instance.save(function(err){
        callback(err);
    });
};

module.exports = new MedicineDAO();
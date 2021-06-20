const Test = require('../../models/estore.model')
const base = require('./base.controller')

exports.getAllTests = base.getAll(Test)
exports.getTest = base.getOne(Test)
exports.createTest = base.createOne(Test)
exports.updateTest = base.updateOne(Test)
exports.deleteTest = base.deleteOne(Test)
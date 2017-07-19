const User = require('./model/user');
const co = require('co');
const _ = require('lodash');


// create
co(function* () {
    let arrFields = { firstName: 'John ', lastName: 'senior engineer'};
    let result = yield User.create(arrFields, {'raw': true});
    // console.log(result);
    console.log(result)
    console.log(result.dataValues);
    return result;
    // console.log(result.get({'plain': true})); // 获得干净的对象，如save、update、destroy
}); 
 
// batch create
co(function* () {
    let arrFieldsList = [
        { firstName: 'sll', lastName: 'shen' },
        { firstName: 'xxx', lastName: 'sss' }
    ]
    let list = yield User.bulkCreate(arrFieldsList);
    // console.log(list.getDataValue);
    // let result = [];
    // list.forEach(function(temp) {
    //     result.push(temp.get({'plain': true}))
    // })
    console.log(_.map(list,"dataValues"));
})   
 
// update
co(function* () {
    let arrFields = { firstName: "小白"};
    let result = yield User.update(arrFields, { where: {id: 2} }) // 返回更新的条数
    if (result[0] === 1) {
        console.log("success");
    }
    console.log(result);
})  

// delete
co(function* () {
    let result = yield User.destroy({ where: {id: 4} }); // 返回删除的条数
    console.log(result);
}) 

// batch delete 
co(function* () {
    let result = yield User.destroy( { where: { id: [4, 5, 6] } })
    console.log(result)
}) 

// findOne
co(function* () {
    let where = {id: 2}
    let result2 = yield User.findOne({"where": where, raw: true}); // raw:true可解决产生dataValues的问题
    console.log(result2);
}); 

// findAll
co(function* () {
    let result = yield User.findAll({raw: true});
    console.log(result);
})
 

// 多表 


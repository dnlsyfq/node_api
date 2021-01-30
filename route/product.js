const express = require('express');
const router = express.Router();

const data = [
    {id:1,number:'A',valor:19.3,enStock:true, createdOn: new Date()},
    {id:2,number:'B',valor:206.3,enStock: false, createdOn: new Date()}
];

router.get('/',(req,res)=>{
    res.status(200).json(data);
});

router.get('/:id',(req,res)=>{
    let found = data.find(item => { return item.id === parseInt(req.params.id)})

    if(found){
        res.status(200).json(found)
    } else {
        res.sendStatus(404);
    }
});

router.post('/',(req,res)=>{
   let itemIds = data.map(item => item.id);

   let newId = itemIds.length > 0 ? Math.max.apply(Math,itemIds) + 1: 1;

   let newItem = {
       id:newId,
       number:req.body.number,
       valor:req.body.valor,
       enStock:false,
       createdOn: new Date()
   }

   data.push(newItem);

   res.status(201).json(newItem);
});

module.exports = router;
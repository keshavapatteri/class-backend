
const ProductModel = require('../models/products');

//add new product
const addProduct =async(req, res, next)=>{

    const data = req.body
    const saveData = new ProductModel(data);
    if(!saveData)throw new error(400,'Insert all data')
    await saveData.save();
    res.status(201).send({message:`data saved successfully`})


};


//get allproduct

const getAllProduct =async(req, res, next)=>{

    const allData = await ProductModel.find({})

    res.status(200).send({data:allData,message:`ok`})
};


//get by id -single data

const getProductById =async(req, res, next)=>{
    const id =req.params.id

    const data = await ProductModel.findById(id)

    res.status(200).send({data:data,message:`ok`})
};

//delete

const deleteProduct =async(req, res, next)=>{
    const id =req.params.id

    const data = await ProductModel.findByIdAndDelete(id)

    res.status(200).send({data:data,message:`ok`})
};

//update

const updateProduct =async(req, res, next)=>{
    const id =req.params.id
    const newData =req.body

    const data = await ProductModel.findByIdAndUpdate(id,newData)

    res.status(200).send({data:data,message:`ok`})
};



module.exports ={addProduct,getAllProduct,getProductById,deleteProduct,updateProduct}
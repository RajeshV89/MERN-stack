const express = require('express');
const Content = require('../model/content.models.js');
const { default: mongoose } = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
  
  try {
    const content = await Content.find();
    // Use res.status(200) and then res.json to send the response together
    res.status(200).json({ success: true, data: content });
  } catch (error) {
    // Use res.status(500) and then res.json to send the error response
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

router.post('/', async (req, res) => {
  const content = req.body;
  if (!content.title || !content.context || !content.imgUrl) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }
  const newContent = new Content(content);
  try {
    await newContent.save();
    // Use res.status(201) to set the status and res.json to send the response
    res.status(201).json({ success: true, data: newContent });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    // Use res.status(500) for server errors
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

router.put('/:id', async (req, res) => {

  const { id } = req.params;
  const content = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Product Id" });
  }
  try {
    const updatedContent = await Content.findByIdAndUpdate(id, content, { new: true });
    res.status(200).json({ success: true, data: updatedContent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
router.delete('/:id',async (req,res) =>{
  const {id} =req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.send(404).json({success: false ,message :"Invalid Product Id"})
  }
  try {
    const deleteContent = await Content.findByIdAndDelete(id);
    res.status(200).json({success:true, deletedData: deleteContent});
  } catch (error) {
    res.send(500).json({ success: false, message: "Server Error" });
  }
});
module.exports = router;

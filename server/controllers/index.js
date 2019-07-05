import {data} from '../model';

require('dotenv').config();

var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: process.env.CLOUDNARY_NAME, 
    api_key: process.env.CLOUDNARY_API_KEY, 
    api_secret: process.env.CLOUDNARY_API_SECRET 
  });

export const getItemById = (req, res) => {
    const {id} = req.params
    let selected = data.find(item => item.id == id);
    res.status(200).json(selected);
}

export const getAllItems = (req, res) => {
    res.status(200).json(data);
}

export const addItem = (req, res) => {
    const {body} = req;
    data.push(body);

    res.status(201).json({
        status: 201,
        message: 'Created!',
        data: body
    })
}

export const addImageToCloudnary = (req, res) => {
    const imageFile = req.files.image.path;
    const {body} = req;
    cloudinary.uploader.upload(imageFile, function(error, result) {
        if(!error){
            // console.log("body =>"+JSON.stringify(body));
            // console.log("let's see URI =>"+ result.url);
            let _r = {...body,url: result.url};
            res.status(200).json(_r);
        }
        res.status(200).json(error);
    });
}

export const index = (req, res) => {}
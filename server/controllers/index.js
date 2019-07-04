import {data} from '../model';


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

export const index = (req, res) => {}
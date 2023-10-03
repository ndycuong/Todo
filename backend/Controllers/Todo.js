import Todo from '../models/Todo.js';
// import Project from '../models/Project.js';

export const  CreateTodo = async (req, res, next) => {
    try {
        const { text, day, time, checked, projectName } = req.body;

        const Task = new Todo({ text, day, time, checked, projectName });
        
        const saveTask = await Task.save();
        return res.status(201).json({Task: saveTask})
        
    } catch (error) {
        if (error.code === 11000 ) {
            return res.status(400).json({ message: 'Todo with this name already exists' });
    }
    next(error);
}
}

export const  UpdateTodo = async (req, res, next) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findByIdAndUpdate(id, {...req.body}, {new: true});
        return res.status(201).json({todo})
    } catch (error) {
        if (error.code === 11000 ) {
            // Mongoose error code 11000 indicates a duplicate key error
            return res.status(400).json({ message: 'Todo with this name already exists' });
    }
        next(error);
    }
}

export const  GetTodo = async (req, res, next) => {
    try {
        const {id} = req.params
        const todo = await Todo.findById(id)
        return res.status(201).json({todo})
      } catch (err) {
        next(err);
      }  
}
export const  GetTodos = async (req, res, next) => {
    try {
       
        const todo = await Todo.find({})
        return res.status(201).json({todo})
      } catch (err) {
        next(err);
      }  
}

export const DeleteTodo= async (req, res, next) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findByIdAndDelete(id);
        return res.status(201).json({ todo });
    } catch (error) {
      next(error);
    }
  };
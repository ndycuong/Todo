import Project from '../models/Project.js';
export const  CreateProject = async (req, res, next) => {
    try {
        const { projectName } = req.body;

    // Attempt to create a new project
        const project = new Project({ projectName });
        
        // const project = new Project({...req.body});
        const saveProject = await project.save();
        return res.status(201).json({project: saveProject})
        
    } catch (error) {
        if (error.code === 11000 ) {
            // Mongoose error code 11000 indicates a duplicate key error
            return res.status(400).json({ message: 'Project with this name already exists' });
    }
    next(error);
}
}

export const  UpdateProject = async (req, res, next) => {
    try {
        const {id} = req.params;
        const project = await Project.findByIdAndUpdate(id, {...req.body}, {new: true});
        return res.status(201).json({project})
    } catch (error) {
        if (error.code === 11000 ) {
            // Mongoose error code 11000 indicates a duplicate key error
            return res.status(400).json({ message: 'Project with this name already exists' });
    }
        next(error);
    }
}

export const  GetProject = async (req, res, next) => {
    try {
        const {id} = req.params
        const project = await Project.findById(id)
        return res.status(201).json({project})
      } catch (err) {
        next(err);
      }  
}
export const  GetProjects = async (req, res, next) => {
    try {
       
        const project = await Project.find({})
        return res.status(201).json({project})
      } catch (err) {
        next(err);
      }  
}

export const DeleteProject= async (req, res, next) => {
    try {
      const { id } = req.params;
      const project = await Project.findByIdAndDelete(id);
        return res.status(201).json({ project });
    } catch (error) {
      next(error);
    }
  };
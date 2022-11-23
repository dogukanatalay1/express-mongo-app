import todo from '../models/todoModel.js';

export const addTodo = async (req, res) => {
  try {
    const todoToAdd = todo(req.body);

    await todoToAdd.save()
      .then(() => res.status(201).json(todoToAdd))
      .catch((error) => res.status(400).json({
        success: false,
        message: `There have been an error ${error}`,
      }));
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Todo have not been added: ${error}`,
    });
  }
};

export const deleteTodo = async (req, res) => {
  console.log('delete');
}

// src/routes/tasks.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const taskController = require('../controllers/taskController');

// @route GET /api/tasks
// @desc  Get all tasks for logged in user
// @access Private
router.get('/', auth, taskController.getTasks);

// @route POST /api/tasks
// @desc  Create a new task
// @access Private
router.post(
  '/',
  auth,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('priority', 'Priority must be low, medium, or high').optional().isIn(['low', 'medium', 'high']),
    check('deadline', 'Deadline must be a valid date').optional().isISO8601()
  ],
  taskController.createTask
);

// @route PUT /api/tasks/:id
// @desc  Update a task
// @access Private
router.put('/:id', auth, taskController.updateTask);

// @route DELETE /api/tasks/:id
// @desc  Delete a task
// @access Private
router.delete('/:id', auth, taskController.deleteTask);

module.exports = router;

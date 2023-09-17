const express = require('express')
const blogController = require('../controller/blogController');
const router = express.Router();

//blogs routes
router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post)

//sending the form
router.get('/create', blogController.blog_create_get);


//viewing a single blog
router.get('/:id', blogController.blog_details)

router.delete('/:id', blogController.blog_delete)


module.exports = router
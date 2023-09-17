//blog_index: to get all the blog posts
//blog_details: to get a single blog post
//blog_create_get: to send the blog post (create a blog post)
//blog_create_post: to send the blog post (add a new blog post)
//blog_delete: to delete a blog post
const Blog = require('../models/blog')


const blog_index = (req, res) => {
   Blog.find().sort({ createdAt: -1 })
      .then((result) => {
         res.render('blogs/index', { title: 'All Blogs', blogs: result });

      })
      .catch((err) => {
         res.status(500).send(err.message)
      });
}

const blog_details = (req, res) => {
   const id = req.params.id;
   Blog.findById(id).then((result) => {
      res.render('blogs/details', { blog: result, title: "Blog Details" })
   })
      .catch((error) => {
         console.log(error);
      });
}

const blog_create_get = (req, res) => {
   res.render('blogs/create', { title: 'Create Blog' });
}

const blog_create_post = (req, res) => {
   const blog = new Blog(req.body);

   blog.save()
      .then((response) => {
         res.redirect('/');
      })
      .catch((err) => {
         console.log(err);
      });
};

const blog_delete = (req, res) => {
   const id = req.params.id;
   Blog.findByIdAndDelete(id).then((result) => {
      res.json({ redirect: '/blogs' });
   })
      .catch((err) => {
         console.log(err);
      });
};

module.exports = { blog_index, blog_details, blog_create_get, blog_create_post, blog_delete };
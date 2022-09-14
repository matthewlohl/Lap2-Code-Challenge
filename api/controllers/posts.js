const Post = require('../models/Post')

async function index (req, res) {

  try {
    const posts = await Post.all;
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json({err})
  }

}

async function show (req, res) {

  try {
    const post = await Post.findById(parseInt(req.params.id));
    res.status(200).json(dog)

  } catch (err) {
    res.status(404).json({err})
  }
}

async function create (req, res) {

  try {
    const post = await Post.create(req.body);
    res.send(201).json(post)
  } catch (err) {
    res.status(422).json({err})
  }
}

async function update (req, res) {

  try {
    const post = await Post.findById(parseInt(req.params.id));
    const updatePost = await post.update(req.body.title, req.body.author, req.body.body)
    res.status(202).json({post: updatePost})
  } catch (err) {
    res.status(500).json({err})
  }
}

async function destroy (req, res) {

  try {
    const post = await Post.findById(parseInt(req.params.id));
    const resp = await post.destroy;
    res.status(204).end()
  } catch (err) {
    res.status(404).json({err})
  }
}

module.exports = {index, show, create, update, destroy}

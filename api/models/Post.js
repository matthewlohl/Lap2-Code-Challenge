const db = require ('../dbConfig/init');

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.author = data.author
        this.body = data.body
    }

    static get all() {
        return new Promise (async (res, rej) => {
            try{
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(d => new Post(d))
                res(posts);
            } catch (err){
                rej(`Error retrieving dogs: ${err}`)
            }
        })
    }

    static findById (id){
        return new Promise (async(res, rej)=> {
            try{

                let postsData = await db.query(`SELECT * FROM posts WHERE posts.id = $1;`, [id]);
                let post = new Post(postsData.rows[0])

                res(post);
            }catch(err){
                rej(`Error retrieving post with id ${id}- Error: ${err}`)
            }
        })
    }

    static create(title, author, body){
        return new Promise (async (res, rej) => {
            try{
                let postsData = await db.query(`INSERT INTO posts (title, author, body) VALUES ($1, $2, $3) RETURNING *;`, [title, author, body])
                // let newPost = new Post (postsData.rows[0])
                res (postsData.rows[0]);

            } catch(err){
                reject(`Error creating post- Error:${err}`)
            }
        })
    }

    update() {
        return new Promise (async (res, rej) => {
            try{
                let updatedPostData = await db.query(`UPDATE posts WHERE id = $1 RETURNING *;`,[this.id]);
                let updatedPost = new Post(updatedPostData.rows[0])
                res(updatedPost);
            }catch (err){
                rej(`Error updating post: ${err}`);
            }
        })
    }

    delete() {
        return new Promise (async(res, rej) => {
            try{
                await db.query(`DELETE FROM posts WHERE id = $1;`, [this.id]);
                res('Post was deleted')
            } catch (err){
                rej(`Error deleting post: ${err}`)
            }
        })
    }
}

module.exports = Post;

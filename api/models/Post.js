const db = require ('../dbConfig/init');

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.pseudonym = data.pseudonym
        this.body = data.body
    }

    static get all() {
        return new Promise (async (res, rej) => {
            try{
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(d => new Post(d))
                res(posts);
            } catch (err){
                rej (`Error retrieving dogs: ${err}`)
            }
        })
    }

    static findByTitle (title){
        return new Promise (async(res, rej)=> {
            try{
                let postsData = await db.query(`SELECT * FROM posts WEHRE title = $1`, [title]);
                const posts = postsData.row.map(d => new Post(d))
                resolve(posts);
            }catch(err){
                rej(`Error retrieving post with title ${title}- Error: ${err}`)
            }
        })
    }
}

async function getAll(category) {
  
  try {
    const response = await fetch(`http://localhost:3000/${category}`)
    const data = await response.json()
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function getItem(category,index) {

  try {
    const response = await fetch(`http://localhost:3000/${category}/${index}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err)
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', createPost)

async function createPost(e) {
  e.preventDefault()
  // const entryData{
  //   title: e.target.title.value,
  //   author: e.target.author.value,
  //   content: e.target.author.value
  // };

  try {
    var title = document.getElementById('title').textContent
    var author = document.getElementById('author').textContent
    var content = document.getElementById('content').textContent
    
    const entryData = {
      title: title,
      author: author,
      body: content
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(entryData),
      headers: {"Content-Type": "application/json"}
      
      }

    const response = await fetch('http://localhost:3000/posts', options);
    const r = await response.json();

    if(err){
      throw Error(err)
    } else {
      window.location.hash = `#posts/${id}`
    }
  } catch (err) {
      console.warn(err)
  }
}

async function deletePost (id) {
  try {
    const options = { method: 'DELETE'}

    await fetch(`http://localhost:3000/books/${id}`, options);
    window.location.hash = `#posts`
  } catch (err) {
    console.warn(err)
  }
}

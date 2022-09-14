async function getAll() {
  
  try {
    const response = await fetch(`http://localhost:3000/posts`)
    const data = await response.json()
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function getItem(index) {

  try {
    const response = await fetch(`http://localhost:3000/posts/${index}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err)
  }
}

async function createPost(e) {
  e.preventDefault()
  try {
    const options = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

    const response = await fetch('http://localhost:3000/posts', options);
    const { id, err } = await response.json();

    if(err){
      throw Error(err)
    } else {
      window.location.hash = `#posts/${id}`
    }
  } catch (err) {
    
  }
}

// function updatePost (id, ) {
//   const options = {
//     method: 'PATCH'
//   };
//   fetch(`http://localhost:3000/posts/${id}`, options)
//   .then(r => r.json())
//   .then(data => {
//     const {post} = data
//     tr.querySe
//   })
// }

async function deletePost (id) {
  try {
    const options = { method: 'DELETE'}

    await fetch(`http://localhost:3000/books/${id}`, options);
    window.location.hash = `#posts`
  } catch (err) {
    console.warn(err)
  }
}

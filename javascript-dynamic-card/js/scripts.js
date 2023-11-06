// dummy data 
// const posts = [
//     {
//         title: "This is Title 1",
//         body: "This is body 1",
//     },
//     {
//         title: "This is Title 2",
//         body: "This is body 2",
//     },
//     {
//         title: "This is Title 3",
//         body: "This is body 3",
//     },
//     {
//         title: "This is Title 4",
//         body: "This is body 4",
//     },
//     {
//         title: "This is Title 5",
//         body: "This is body 5",
//     },
//     {
//         title: "This is Title 6",
//         body: "This is body 6",
//     },
//     {
//         title: "This is Title 7",
//         body: "This is body 7",
//     },
//     {
//         title: "This is Title 8",
//         body: "This is body 8",
//     },
//     {
//         title: "This is Title 9",
//         body: "This is body 9",
//     },
//     {
//         title: "This is Title 10",
//         body: "This is body 10",
//     },

// ];



/* <div class="post">
<h4 class="post-title">Post Title 1</h4>
<p class="post-description">Post Description 1</p>
</div> */


//=========== fetch data ===============

const fatchData = async (config) => {

    

    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("Data is not found.");
    }


   

}

fatchData("https://jsonplaceholder.typicode.com/posts");



const postsElement = document.querySelector(".posts");

const loadAllData = async () => {

    const posts = await fatchData("https://jsonplaceholder.typicode.com/posts");

    posts.map((post) => {
  
     const postElement = document.createElement("div");
     postElement.classList.add("post");

     postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-description">${post.body}</p>
     `;

     postsElement.appendChild(postElement);

    }); 
    
};

loadAllData();
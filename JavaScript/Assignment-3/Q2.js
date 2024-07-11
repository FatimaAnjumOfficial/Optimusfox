/* Define a function named fetchPosts that uses the JSONPlaceholder API (https://jsonplaceholder.typicode.com) to fetch a list of posts
and returns a promise that resolves to an array of post objects. Use the axios library to make the API call and the data property to parse
the response. Use the filter method to filter out the posts that do not have a title. Use the sort method to sort the remaining posts by
their ID in ascending order. Write code to test this function by calling it and logging the result.*/

const axios = require('axios'); // imports the Axios library for making HTTP requests. 

//client jese hi url ko http browser pe dale ga tw response me usko posts visible hon
async function fetchPosts()
{
    const url = "https://jsonplaceholder.typicode.com/posts"; //JSONPlaceholder API

    try
    {
        const response = await axios.get(url); //client ne request send ki url k through (get(url)) http browser ko (axios.get(url)) or wait kr rha h response ka (await)
        const posts = response.data; // Axios response data property to parse JSON

        //arrow function, array bcz filter method array pe use hota h
        const filterPosts = posts.filter((post) => post.title); //filter out mtlb remove krde ga un posts ko jin k title nhi hain
        //pr hme sort unko krna h jin k titles hain tw hm filter k through un posts ko nikal k layn hain jin k titles hain
        
        
        const sortFilterPosts = filterPosts.sort((a, b) => a.id - b.id); //array, arrow function to sort filterposts by id.

        return sortFilterPosts;
    }
    catch (error)
    {
        console.error('Error fetching posts:', error);
        throw error; // control provides a default handler
    }

    fetchPosts() //calls a function that returns a promise to fetch posts
        .then(posts => console.log('Posts:', posts)) //agr promise return kre ga posts (successfully) tw wo console me visible ho jyn gi
        .catch(error => console.error('Error:', error)); //error code or rejected 
}

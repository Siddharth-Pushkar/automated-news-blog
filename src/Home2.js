import { useState } from "react";

const Home2 = () => {

    const [blogs , setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum...", author: "Siddharth", id: 1},
        {title: "Welcome party!", body: "lorem ipsum...", author: "Siddharth", id: 2},
        {title: "Web dev top tips", body: "lorem ipsum...", author: "Siddharth", id: 3}
    ]);
    
    
    return ( 

        <div className="home"> 
        
            <h1>All Blogs</h1>
            {blogs.map((blog) => (
                // here we have used map function to loop through the blogs array and display each blog in a div. We have also used the key prop to give each div a unique key. This is important for React to keep track of the elements in the DOM and update them efficiently.
                <div className="blog-preview">
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>Author: {blog.author}</p>
                        <br />
                    </div>
                </div>    
            ))}
        </div>

     );
}
 
export default Home2;

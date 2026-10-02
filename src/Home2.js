import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home2 = () => {

    const [blogs , setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum...", author: "Siddharth", id: 1},
        {title: "Welcome party!", body: "lorem ipsum...", author: "Siddharth", id: 2},
        {title: "Web dev top tips", body: "lorem ipsum...", author: "Siddharth", id: 3}
    ]);


    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        // Here we are using the filter method to create a new array of blogs that does not include the blog with the id that was passed in. We then use the setBlogs function to update the state with the new array of blogs. This will cause the component to re-render and display the updated list of blogs.
        // The filter method is a built-in JavaScript method that creates a new array with all elements that pass the test implemented by the provided function. In this case, we are testing if the blog's id is not equal to the id that was passed in. If it is not equal, it will be included in the new array. If it is equal, it will be excluded from the new array.
        // This is a common pattern in React for updating state when you want to remove an item from an array. You create a new array that does not include the item you want to remove, and then you update the state with that new array. This is because state should be treated as immutable, meaning you should not directly modify the existing state, but instead create a new version of it with the changes you want to make.
        // Here we can use the id to delete the blog from the database or state. For now, we will just log the id to the console.
    }
    
    
    return ( 

        <div className="home"> 
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* Here we used props to use the blogs card everywhere, but to pass the data from this file to the coming component, we use props. */}

            <BlogList blogs={blogs.filter((blog) => blog.id > 2)} title="Recent Blogs" />

                {/* Here we are using the same component in the same place for different purposes. */}
                {/* Just adding filters to the data being feeded into the component. */}
        </div>

     );
}
 
export default Home2;

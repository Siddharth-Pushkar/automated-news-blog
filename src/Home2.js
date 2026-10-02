import { useState } from "react";
import BlogList from "./BlogList";

const Home2 = () => {

    const [blogs , setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum...", author: "Siddharth", id: 1},
        {title: "Welcome party!", body: "lorem ipsum...", author: "Siddharth", id: 2},
        {title: "Web dev top tips", body: "lorem ipsum...", author: "Siddharth", id: 3}
    ]);
    
    
    return ( 

        <div className="home"> 
            <BlogList blogs={blogs} title="All Blogs!" />
            {/* Here we used props to use the blogs card everywhere, but to pass the data from this file to the coming component, we use props. */}

            <BlogList blogs={blogs.filter((blog) => blog.id > 2)} title="Recent Blogs" />

                {/* Here we are using the same component in the same place for different purposes. */}
                {/* Just adding filters to the data being feeded into the component. */}
        </div>

     );
}
 
export default Home2;

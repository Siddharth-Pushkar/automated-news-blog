const BlogList = ({ blogs, title, handleDelete}) => {

    // Here we have used props to pass the data from the parent component (Home2) to the child component (BlogList). We have destructured the props object to get the blogs and title properties. This is a common pattern in React to make the code more readable and maintainable.


    return ( 

        <div className="blog-list">

            <h1>{title}</h1>
            {blogs.map((blog) => (
                // here we have used map function to loop through the blogs array and display each blog in a div. We have also used the key prop to give each div a unique key. This is important for React to keep track of the elements in the DOM and update them efficiently.
                <div className="blog-preview">
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>Author: {blog.author}</p>
                        <button onClick={() => {handleDelete(blog.id)}}>Delete</button> 
                        <br />
                    </div>
                </div>    
            ))}
        </div>
    );
}
export default BlogList;
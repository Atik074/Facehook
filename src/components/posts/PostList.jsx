import PostCard from "./PostCard";

/* eslint-disable react/prop-types */
const PostList = ({posts}) => {
    return (
        <div>
            
        {    posts && posts.map((post) =><PostCard 
             key={post.id} 
            post={post}/>
        
        ) }
            
        </div>
    );
};

export default PostList;
import React from 'react';
import { useSelector } from 'react-redux';
import SinglePost from './SinglePost';

const PostView = () => {
    const posts = useSelector(state => state.postReducer.posts)
    // console.log(posts);

    return (
        <div className='post_view_section'>
            <h2 className='post-title'>Lists of Posts</h2>
            {
                posts && posts.map((post) => <SinglePost post={post} key={post.id}></SinglePost>)
                // posts && posts.map((post, index) => <SinglePost post={post} key={index}></SinglePost>)
            }
        </div>
    );
};

export default PostView;
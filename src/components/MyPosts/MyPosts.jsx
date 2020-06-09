import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'two post', likesCount: 11},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;
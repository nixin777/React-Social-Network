import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://storage.needpix.com/thumbs/user-2517432_1280.png'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;
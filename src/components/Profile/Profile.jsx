import React from 'react';
import s from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return(
        <div>
            <div>
                <img src='https://avatars.mds.yandex.net/get-pdb/907231/09738fd8-6068-4d90-902f-c3c2733bfa6d/s1200?webp=false'/>
            </div>
            <div> ava + desc </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
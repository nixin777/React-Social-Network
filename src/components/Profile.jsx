import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src='https://avatars.mds.yandex.net/get-pdb/907231/09738fd8-6068-4d90-902f-c3c2733bfa6d/s1200?webp=false'/>
            </div>
            <div> ava + desc </div>
            <div>
                my post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>post 1</div>
                    <div className='item'>post 2</div>
                </div>
            </div>
            {/*<img src='https://avatars.mds.yandex.net/get-pdb/1784982/abd35d61-1bab-418f-b2da-196c290e3d45/s1200?webp=false'/>*/}

        </div>
    );
}

export default Profile;
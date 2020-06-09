import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src='https://avatars.mds.yandex.net/get-pdb/907231/09738fd8-6068-4d90-902f-c3c2733bfa6d/s1200?webp=false'/>
            </div>
            <div className={s.descriptionBlock}> ava + desc </div>
        </div>
    );
}

export default ProfileInfo;
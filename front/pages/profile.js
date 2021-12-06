import React from'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = ()=>{
    const followerList = [{nickname: '오리'},{nickname : '다이어트'},{nickname : '오피셜'}]
    const followingList = [{nickname: '오리'},{nickname : '다이어트'},{nickname : '오피셜'}]
    return(
    <>
        <Head>
            <title>내 프로필 / NodeBird</title>
        </Head>    
    <AppLayout>
        <NicknameEditForm/>
        <FollowList header="팔로잉 목록"  data={followingList}/>
        <FollowList header="팔로워 목록" data={followerList}/>


        
    </AppLayout>
    </>
    );
};

export default Profile; 
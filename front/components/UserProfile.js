import { Avatar, Card, Button } from 'antd';
import React,{useCallback} from 'react'
const UserProfile  = ({setIsLoggedin}) =>{
    
    const onLogout = useCallback(()=>{ // 컴포넌트에 넣기 때문에 useCallback을 사용함.
        setIsLoggedin(false);
    },[])

    return (
        <Card 
            actions={[ 
                <div key="twit">짹짹<br/>0</div>,  /*리액트에서 배열로 jsx를 사용하기 위해서는 key를 사용해야함.*/
                <div key="followings">팔로잉<br/>0</div>,
                <div key="follower">팔로잉수<br/>0</div>,
            ]}>
            <Card.Meta
                avatar={<Avatar>Duck</Avatar>}
                title="Duck-98"
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile;
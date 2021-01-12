import React, { useEffect, useState } from 'react';
import {Route,BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import MenuContainer from '../MenuContainer';
import RoomListContainer from '../RoomListContainer';
import PagingList from '../PagingList';
import Loading from '../Loading';
function RealTimeChat(props){
    const [content,setContent]=useState('')
    
    useEffect(()=>{
        callRoomApi()
        .then(res=>{
            setContent(res)
        })
        .then(err=>console.log(err));
    })

    const pageItemClick=pageItem=>{
        this.callRoomApi(pageItem)
        .then(res=>{
            setContent(res)
        })
        .then(err=>console.log(err));
    }

    const callRoomApi=async(args)=>{
        
        if(args==undefined){
            args=1;
        }
        const response=await fetch("/api/v1/rooms"+"?page="+args);
        const body=await response.json();
        return body;
    }

    return (
        <div class="container">
            <MenuContainer></MenuContainer>
            {
                content.data == null ? (<Loading />) : ('')
            }
            <Switch>
                <Route exact path="/realtimechat">
                    <RoomListContainer rooms={content.data}></RoomListContainer>
                    <PagingList pagingList={content.pageList} pageItemClicked={pageItemClick}></PagingList>
                </Route>

            </Switch>
        </div>

    )
}

export default RealTimeChat
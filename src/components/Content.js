import React,{Component} from 'react';
import MenuContainer from './MenuContainer';
import RoomListContainer from './RoomListContainer';
import PagingList from './PagingList';

class Content extends Component{
    render(){
        return(
            <div class="container">
                <MenuContainer></MenuContainer>
                <RoomListContainer></RoomListContainer>
                <PagingList></PagingList>
            </div>
        );
    }
}

export default Content
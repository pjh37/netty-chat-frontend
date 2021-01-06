import React,{Component} from 'react';
import {Route,Router,BrowserRouter,Switch} from 'react-router-dom';
import MenuContainer from './MenuContainer';
import RoomListContainer from './RoomListContainer';
import PagingList from './PagingList';
import Loading from './Loading';

class Content extends Component{

    constructor(props){
        super(props);
        this.state={
            content:""
        }
        
        this.pageItemClick=this.pageItemClick.bind(this);
    }

    pageItemClick=pageItem=>{
        //this.setState({content:this.callRoomApi(pageItem)})
        
        this.callRoomApi(pageItem)
        .then(res=>{
            
            this.setState({content:res})
            
        })
        .then(err=>console.log(err));
    }

    componentDidMount(){
       
        this.callRoomApi()
        .then(res=>{
            
            this.setState({content:res})
            
        })
        .then(err=>console.log(err));
    }

    callRoomApi=async(args)=>{
        
        if(args==undefined){
            args=1;
        }
        const response=await fetch("/api/v1/rooms"+"?page="+args);
        const body=await response.json();
        return body;
    }

    render(){
        return(
            <div class="container">
                <MenuContainer></MenuContainer>
                {
                    this.state.content.data==null ? (<Loading/>) :('')
                }
                <Switch>
                    <Route exact path="/">
                        <RoomListContainer rooms={this.state.content.data}></RoomListContainer>
                        <PagingList pagingList={this.state.content.pageList} pageItemClicked={this.pageItemClick}></PagingList>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Content
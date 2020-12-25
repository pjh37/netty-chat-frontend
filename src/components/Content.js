import React,{Component} from 'react';
import MenuContainer from './MenuContainer';
import RoomListContainer from './RoomListContainer';
import PagingList from './PagingList';




class Content extends Component{

    constructor(props){
        super(props);
        this.state={
            content:""
        }
        console.log('constructor')
        this.pageItemClick=this.pageItemClick.bind(this);
    }

    pageItemClick=pageItem=>{
        //this.setState({content:this.callRoomApi(pageItem)})
        console.log("pageItem clicked! "+pageItem);
        this.callRoomApi(pageItem)
        .then(res=>{
            console.log('componentDidMount setstate')
            this.setState({content:res})
            
        })
        .then(err=>console.log(err));
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.callRoomApi()
        .then(res=>{
            console.log('componentDidMount setstate')
            this.setState({content:res})
            
        })
        .then(err=>console.log(err));
    }

    callRoomApi=async(args)=>{
        console.log("args "+args)
        if(args==undefined){
            args=1;
        }
        const response=await fetch("http://localhost:8080/api/v1/rooms"+"?page="+args);
        const body=await response.json();
        return body;
    }

    render(){
        console.log('render')
        
        return(
            <div class="container">
                <MenuContainer></MenuContainer>
                <RoomListContainer rooms={this.state.content.data}></RoomListContainer>
                <PagingList pagingList={this.state.content.pageList} pageItemClicked={this.pageItemClick}></PagingList>
            </div>
        );
    }
}

export default Content
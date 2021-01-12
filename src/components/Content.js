import React,{Component} from 'react';
import {Route,BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import '../css/Content.css';  
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
                <div class="row">
                    <div class="col-sm-6">
                        <Link to={"/job"} class="card content-item">
                            <div class="card-body">
                                <h5 class="card-title">채용사이트 모음</h5>
                                <p class="card-text">개발자들이 주로보는 채용사이트 모음입니다.</p>

                            </div>
                        </Link>
                    </div>
                    <div class="col-sm-6">
                        <Link to={"/algorithm"} class="card content-item">
                            <div class="card-body">
                                <h5 class="card-title">알고리즘 문제 사이트 모음</h5>
                                <p class="card-text">실제 채용때 코딩테스트 플랫폼으로 이용되는 사이트및 문제를 풀 수 있는 사이트 모음</p>
                                
                            </div>
                        </Link>
                    </div>
                    <div class="col-sm-6">
                        <Link to={"/realtimechat"} class="card content-item">
                            <div class="card-body">
                                <h5 class="card-title">채팅서비스</h5>
                                <p class="card-text">유저들끼리 방을 만들어 실시간 채팅을 할 수 있으며 URL만을 공유해 원하는 사람들끼리만 채팅할 수 있습니다.</p>
                                
                            </div>
                        </Link>
                    </div>
                    <div class="col-sm-6">
                        <Link to={"/board"} class="card content-item">
                            <div class="card-body">
                                <h5 class="card-title">게시판</h5>
                                <p class="card-text">궁금한점 혹은 Q/A등은 이곳에서 해주세요</p>
                                
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content
import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import '../../css/Board.css'; 

let fetching=false;
const BoardItem=({item})=>(
    <div class="board-item">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.content}</p>
                <div>
                    <span>{item.author}</span>
                    <span>{item.createDate}</span>
                </div>
            </div>
        </div>
    </div>
)

function Board(props){
    const [boardList,setBoardList]=useState([])
    const [loading,setLoading]=useState(false)
    const [page,setPage]=useState(1)

    useEffect(()=>{
        console.log("useEffect")
        window.addEventListener('scroll',handleScroll)
    },[])

    useEffect(()=>{
        console.log("useEffect page: "+page)
        fetchMorePage()
    },[page])
    

    const fetchMorePage=()=>{
        setLoading(true)
        boardListCallApi().then(boardItems=>{
            if(boardItems.length==0){
                setLoading(false);
                return;
            }
            const mergedData=boardList.concat(...boardItems)
            console.log(mergedData)
            fetching=false;
            setBoardList(mergedData)
            setLoading(false)
            
        })
    }

    const boardListCallApi=async ()=>{
        const response=await fetch("/api/v1/boards?"+"page="+page)
        const body=await response.json()
        return body;
    }

    const handleScroll = (e) => {
        if (window.scrollY >= 
        document.querySelector('.board-container').scrollHeight-
        window.innerHeight&&fetching==false) {
            fetching=true;
            console.log("page: "+page)
            setPage(prevPage=>prevPage+1)
        }
    }

    return (
        <div class="container" >
            <div>
                검색
            </div>
            <div class="board-container" onScroll={handleScroll}>
                게시판 목록
                {
                    boardList == null ? (<Loading />) : boardList.map(boardItem => (
                        <BoardItem key={boardItem.id} item={boardItem}></BoardItem>
                    ))
                }
                {
                    loading == true ? (<Loading />) : ('')
                }
            </div>
        </div>

    )
}

export default Board
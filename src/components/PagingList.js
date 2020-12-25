import React,{Component} from 'react';
import "../css/PagingList.css";

class PagingList extends Component{
    constructor(props){
        super(props);
        this.state={
            pagingList:""
        }
    }
    pageItemClicked=(page)=>{
        this.props.pageItemClicked(page);
    }
    render(){
        this.state.pagingList=this.props.pagingList;
        return(
            <div class="paging-list">
                <div class="row w-100 paging-list">
                    <nav aria-label="Page navigation" id="pageNav">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0);" data-page='1' aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            
                            <div id="pageList">
                                {
                                    this.state.pagingList ? this.state.pagingList.map(page=>{
                                        return(
                                            <PageItem key={page} pageNumber={page} pageItemClicked={this.pageItemClicked}></PageItem>
                                        )
                                    }) : "Loading"
                                }
                            </div>

                            <li class="page-item">
                                <a class="page-link" id="lastPage" href="javascript:void(0);" data-page='1' aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
class PageItem extends Component{
    clicked=()=>{
        this.props.pageItemClicked(this.props.pageNumber);
    }
    render() {
        return (
            <li class="page-item">
                <a class={'page-link'} href="javascript:void(0);" data-page={this.props.pageNumber} onClick={this.clicked}>{this.props.pageNumber}</a>
            </li>
        )
    }
}
export default PagingList
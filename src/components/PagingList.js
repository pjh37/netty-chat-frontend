import React,{Component} from 'react';
import "../css/PagingList.css";

class PagingList extends Component{
    render(){
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
                            {/* ajax를 통해 pageList 호출 */}
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

export default PagingList
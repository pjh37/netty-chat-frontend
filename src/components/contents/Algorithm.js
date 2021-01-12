import React from 'react';

function Algorithm(props){
    
    return (
        <div class="container">
            <div class="row">
                    <div class="col-sm-6">
                        <a href="https://www.acmicpc.net/" class="card content-item">
                            <div class="card-body">
                                <h5 class="card-title">백준</h5>
                                <p class="card-text">대표적인 알고리즘 문제풀이 사이트로 많은 문제를 보유하고 있으며 
                                solved와 연계하여 자신의 등급을 브실골플등으로 알 수 있습니다. </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <a href="https://programmers.co.kr/learn/challenges" class="card content-item">
                            <div class="card-body">
                                <h5 class="card-title">프로그래머스</h5>
                                <p class="card-text">현재 기업들의 코딩테스트 플랫폼으로 가장 많이 선택 되는 플랫폼으로 
                                꼭 여기서 한 번쯤 연습해보기를 추천합니다.
                                그리고 코딩테스트 고득점kit,SQL 고득점 kit등 시간이 부족할때 빠르게 연습할 수 있습니다.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <a href="https://leetcode.com/problemset/all/" class="card content-item">
                            <div class="card-body">
                                <h5 class="card-title">leet code</h5>
                                <p class="card-text">해외 유명 기업들의 코딩 테스트 문제들을 풀 수 있으며 shell,sql문제등도 수록 되있습니다.
                                더불어 다른 사람의 해결방법을 백준과 달리 바로 볼 수 있고 자신이 푼 방식의 시간,공간 효율성의 순위가 나오므로 유용합니다. </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <a href="https://level.goorm.io/" class="card content-item">
                            <div class="card-body">
                                <h5 class="card-title">Goorm</h5>
                                <p class="card-text">프로그래머스 처럼 많은 기업은 아니지만 어느정도의 기업들의 코딩 테스트 플랫폼으로서
                                이용하고 있으며 인터페이스가 조금 햇갈릴 수 있으니 기업 코딩 테스트를 대비해 연습하실것을 추천합니다. 
                                단, 검색해도 해설이 나오지 않는 경우가 많으니 주의하세요</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <a href="https://swexpertacademy.com/main/main.do" class="card content-item">
                            <div class="card-body">
                                <h5 class="card-title">SWEA(삼성 익스퍼트 아카데미)</h5>
                                <p class="card-text">삼성에 입사하길 희망하시는 분들은 여기서 코딩 테스트를 연습하고 강의도 공짜로 들으면 됩니다.
                                문제 수도 많은 편입니다. </p>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-sm-6">
                        <a href="https://www.hackerrank.com/dashboard" class="card content-item">
                            <div class="card-body">
                                <h5 class="card-title">해커랭크</h5>
                                <p class="card-text">단순 알고리즘 테스트 뿐만 아니라 DB,Linux shell,수학,Regex등 다양한 문제를 풀 수 있다는 것이
                                해커랭크의 최고 장점입니다. 그리고 다른 사람의 문제풀이도 바로 볼 수 있습니다.</p>
                            </div>
                        </a>
                    </div>
            </div>
        </div>

    )
}

export default Algorithm
import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: "https://api.hnpwa.com/v0",
   // users: []
};

// 2. API 함수들을 정리
function fetchNewsList(){
    //return axios.get(config.baseUrl + "/news/1.json")
    return axios.get(`${config.baseUrl}/news/1.json`);
          //      .then(response => config.users = response.data)
          //      .catch();

}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}/jobs/1.json`);
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}/ask/1.json`);
}

function fetchList(pageName){
    return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

function fetchUserInfo(usernmae){
    return axios.get(`${config.baseUrl}/user/${usernmae}.json`);
}

async function fetchItemInfo(itemname){
    try {
        return await axios.get(`${config.baseUrl}/item/${itemname}.json`);  // 얘도가능
    } catch(error){
        console.log(error);
    }
}



export {
    fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList
}
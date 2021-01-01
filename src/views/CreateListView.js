import ListView from './ListView.vue';
import Bus from '../utils/bus.js';

export default function createListView(rname){
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: 'HOC_Component',
        created() {
           // console.log(rname);
            //console.log("1111");
            
            //const name = this.$route.name;
            /*
            let patchNm = '';
            if(name === "news"){
            patchNm = 'FETCH_NEWS';

            } else if(name === "jobs") {
                patchNm = 'FETCH_JOBS';

            } else if(name === "ask") {
                patchNm = 'FETCH_ASKS';

            }
            */
            //console.log("버스시작");
            
            Bus.$emit('start:spinner');
            
            setTimeout(() => {
                // #1
                this.$store.dispatch('FETCH_LIST', rname) // 코드의 제어가 넘어감
                    .then(() => {
                        //console.log("fetched");
                        // #5
                        console.log(5);   // 비동기의 순서가 보장되어있찌 않고 먼저 찍힘
                        //Bus.$emit('end:spinner');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }, 0);
            
            //this.$router.dispatch(actionName)
        },
        destroyed(){
            //this.$store.dispatch('RESET_STATE');
        },
        render(createElement){
            return createElement(ListView);
        }
    }
}
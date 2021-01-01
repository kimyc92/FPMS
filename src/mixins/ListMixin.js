// mixin
export default {
    // 재사용할 컴포넌트 옵션 & 로직
    created() {
        Bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_LIST', rname) // 코드의 제어가 넘어감
                    .then(() => {
                        //console.log("fetched");
                        Bus.$emit('end:spinner');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        }, 1000);
    }
}


import dayjs from 'dayjs';

export default {
//     路由跳转
    methods: {
        // 获取token;
        getTokenStr(){
            const token = uni.getStorageSync("token");
            return token||null;
        },
        // 获取在线用户信息
        getUserInfo() {
            const user = uni.getStorageSync("currentUser");
            return user || null;
        },
        // 路由跳转
        goPages(pages) {
            if (pages) {
                uni.navigateTo({
                    url: pages
                })
            } else {
                uni.showToast({
                    title: "暂未开放", icon: "error",
                })
            }
        }, /*时间格式化*/
        timeFormat(value) {
            value = value * 1000
            return value ? dayjs(value).format("YYYY-MM-DD hh:mm:ss") : value;
        }
    },
}

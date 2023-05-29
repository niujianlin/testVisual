import { defineStore } from 'pinia'

export const TestData = defineStore("test", {

    state: () => ({
        myarr: [{age1:true,age2:2,age3:3,age4:4,age5:5},{age6:true,age7:7,age8:true,age9:9,age10:10}],
        // myarr2: [{eage1:1,eage2:2,eage3:3,eage4:4,eage5:5},{eage6:6,eage7:7,eage8:8,eage9:9,eage10:10}],
    }),
    actions: {
        // 打印串
        consoleMyarr(state){
            console.log(this.myarr)
        },
        // 改第一个json串
        changeMyarrfirst(state) {
            // // 改所有
            // for(let i=1; i<Object.keys(this.myarr[0]).length; i++){
            //     this.myarr[0][`age${i}`] = !this.myarr[0][`age${i}`]
            // }
            this.myarr[0].age3 = !this.myarr[0].age3
        },
        // 改第二个json串
        changeMyarrSecond(state) {
            this.myarr[this.myarr.length-1].age8 = !this.myarr[this.myarr.length-1].age8
        },
        // 增加数据，同时第一个和第二个json串
        mutiMyArrfist(state) {
            for(let i=0; i<this.myarr.length; i++){
                for(let j=11; j<500; j++){
                    this.myarr[i][`age${j}`] =  true

                }
            }
        },

        // -------------------------

        // 删除第一个json中的某个数据
        deleteFirst() {
            // 删除某个的元素，该元素绑定对应的页面
            delete this.myarr[0].age3

        },
        // 删除第二个json中的某个数据（删除）
        deleteSecond() {
            // 删除某个的元素，该元素绑定对应的页面
            delete this.myarr[1].age8
    
        },
        // 添加第一个json数据的一条属性和值
        addFirst(){
            this.myarr[0].age3 = 99
        },
        // 添加第二个json数据的一条属性和值
        addSecond(){
            this.myarr[1].age8 = 99
        },
        // 修改第一个json数据的某个数据
        editFirst() {
            this.myarr[0].age3 = 9999
        },
        // 修改第一个json数据的某个数据
        editSecond() {
            this.myarr[1].age8 = 9999
        },

        // -------------------------

        // 删除数组中的第一个json串
        deleFirstJson() {
            this.myarr.shift()
        },
        // 删除数组中的第二个json串
        deleSecondJson() {
            this.myarr.pop()
        },
        // -------------------------------
        // 增添数组中的json串
        addArrLength() {
            let newval = {newval1:true,newval2:2,newval3:3,newval4:4,newval5:5}
            this.myarr.push(newval)

        }



        
        
    },
    getters: {
        // 类似于计算属性，不修改原有值

    }

})

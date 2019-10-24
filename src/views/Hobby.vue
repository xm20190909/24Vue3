<template>
    <div class="login">
        <h2>问卷调查表填写</h2>
        <div v-show="showErr1">
        <p>请问您的性别是：</p>
        <p>
        <input type="radio" v-model="sex" value="男"/><label>男</label>
        <input type="radio" v-model="sex" value="女"/><label>女</label>
        <input type="radio" v-model="sex" value="保密"/><label>保密</label>
        </p>
        <p>
            <button @click="next1()">下一步</button>
            <button @click="cz1()">重置</button>
        </p>
        </div>

        <div v-show="showErr2">
            <p>请选择你的兴趣爱好：</p>
            <p>
                <input type="checkbox" v-model="ah" value="看书" name=""/><label>看书</label>
                <input type="checkbox" v-model="ah" value="跑步" name=""/><label>跑步</label>
                <input type="checkbox" v-model="ah" value="游戏" name=""/><label>游戏</label>
                <input type="checkbox" v-model="ah" value="看电影" name=""/><label>看电影</label>
                <input type="checkbox" v-model="ah" value="听音乐" name=""/><label>听音乐</label>
                <input type="checkbox" v-model="ah" value="动漫" name=""/><label>动漫</label>
            </p>
            <p>
                <button @click="next2()">上一步</button>
                <button @click="next3()">下一步</button>
                <button @click="cz2()">重置</button>
            </p>
        </div>
        <div v-show="showErr3">
            <p>请介绍一下你自己：</p>
            <p>
               <textarea v-model="js" style="width: 300px"></textarea>
            </p>
            <p>
                <button @click="next1()">上一步</button>
                <button @click="next4()">提交</button>
                <button @click="cz3()">重置</button>
            </p>
        </div>


    </div>



</template>

<script>
    export default {
        name: "Hobby",
    data(){
        return {
            sex:'',
            ah:[],
            showErr1:true,
            showErr2:false,
            showErr3:false,
            js:'',
        }
    },
        methods:{

            cz1(){
                this.sex=''
            },
            cz2(){
                this.ah=''
            },
            cz3(){
                this.js=''
            },
            next1(){
                this.showErr1=false;
                this.showErr2=true;
                this.showErr3=false;
            },
            next2(){
                this.showErr1=true;
                this.showErr2=false;
                this.showErr3=false;
            },
            next3(){
                this.showErr1=false;
                this.showErr2=false;
                this.showErr3=true;
            },
            next4(){
                this.$store.commit("addHobby",{sex:this.sex,hobby:this.ah.toString(),js:this.js});
                let found = this.$store.state.hobby.find(
                    (obj)=>{return ((obj.sex == this.sex) && (obj.hobby == this.ah.toString()) && (obj.js == this.js))}
                );

                if (found!=undefined)
                    this.$router.push(
                        {name:'success',params:{sex:found.sex,hobby:found.hobby,js:found.js}}
                    );
            }
        }
    }
</script>

<style scoped>

</style>
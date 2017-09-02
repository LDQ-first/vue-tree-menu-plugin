<template>
    <div class="show">
        <header>
            <h1>Vue Tree Menu Plugin</h1>
        </header>
        <article>
                <div  class="slotList">   
                    <section  class="section-one">
                        <div class="ui">
                            <h2>Panel</h2>
                            <ripple class="ripPanel" children="one">
                                <div slot="children" class="panel children">
                                    <header>
                                        <h3>This is a Panel</h3>
                                    </header>
                                    <div class="content">
                                        <p>Panel</p>
                                        <ul class="list">
                                            <treeMenu :list="list" name="new" addText="create"
                                            :addbtn="true" :deletebtn="true" :add="true"></treeMenu>
                                        </ul>
                                    </div>
                                </div>
                            </ripple>
                        </div>
                        <div class="code" v-hljs>
                            <pre><code>{{codeOne.html}}</code></pre>
                            <pre><code>{{codeOne.data}}</code></pre>
                        </div>
                    </section>
                </div>
           <section class="section-first">
                <div class="ui">
                    <h2>Use</h2>
                    <p class="remind">
                         <span class="keypoint">
                            <img class="remind-img" src="../assets/icon/resume.svg">
                            <strong>You should restart vue after finishing install vue-tree-menu</strong>
                        </span>
                         <span class="keypoint">
                            <img class="remind-img" src="../assets/icon/resume.svg">
                            <strong>List must be an Object</strong>
                        </span>
                    </p>
                </div>
                <div class="code" v-hljs>
                    <pre><code>{{codeFirst.npm}}</code></pre>
                    <pre><code>{{codeFirst.js}}</code></pre>
                </div>
            </section>
        </article>
        <footer>
            <p>Copyright {{copyRightYear}} © by <a href="https://github.com/LDQ-first">LDQ-first</a> (◕ᴗ◕)</p>
            <p>
                demo source code in Github => 
                <a href="https://github.com/LDQ-first/vue-tree-menu-plugin" title="click me">
                    <img class="github-img" src="../assets/icon/github.svg" >
                </a>
            </p>
            <p>
                vue plugin source code in Github => 
                <a href="https://github.com/LDQ-first/vue-tree-menu" title="click me">
                    <img class="github-img" src="../assets/icon/github.svg" >
                </a>
            </p>
        </footer>
        
    </div>
    </pull-refresh>
</template>

<script>
 /*   const pullRefresh = resolve => require(['../components/pullRefreshs.vue'], resolve)*/
   /* import treeMenu from '../components/treeMenu.vue'*/
    export default {
        data () { 
            return {
                codeFirst: {
                    npm: '',
                    js: ''
                },
                copyRightYear: '',
                isInline: true,
                codeOne: {
                    html: ''
                },
                codeTwo: {
                    html: '',
                    data: '',
                },
                list: {
                    root: true,
                    name: 'My Tree',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' },
                        {
                        name: 'child folder',
                        children: [
                            {
                                name: 'child folder',
                                children: [
                                    { name: 'hello' },
                                    { name: 'wat' }
                                ]
                            },
                            { name: 'hello' },
                            { name: 'wat' },
                            {
                                name: 'child folder',
                                children: [
                                    { name: 'hello' },
                                    { name: 'wat' }
                                ]
                            }
                        ]
                        }
                    ]
                },

                
            }
        },
        components: {
           /* pullRefresh*/
         /*  treeMenu*/
        },
        created () {
            this.setCode()
            this.setYear()
        },
        methods: {
            setYear () {
                const year = new Date().getFullYear()
                if(year === 2017) {
                     this.copyRightYear = 2017
                } else {
                    this.copyRightYear = 2017 + ' - ' + year
                }
                
            },
            setCode () {
                this.codeFirst.npm =
    `
    /*-- npm --*/
    npm install --save vue-tree-menu
    `
                    this.codeFirst.js = 
    `
    /*-- main.js --*/
    import Vue from 'vue'
    import VueTreeMenu from 'vue-tree-menu'
    Vue.use(VueTreeMenu)
    `
                    this.codeOne.html = 
    ` 
    <!--html-->
    <ul class="list">
        <treeMenu :list="list" name="new" addText="create"
        :addbtn="true" :deletebtn="true" :add="true"></treeMenu>
    </ul>
   
    `
                    this.codeOne.data =
`
<!--data-->
list: {
    root: true,
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
        name: 'child folder',
        children: [
            {
                name: 'child folder',
                children: [
                    { name: 'hello' },
                    { name: 'wat' }
                ]
            },
            { name: 'hello' },
            { name: 'wat' },
            {
                name: 'child folder',
                children: [
                    { name: 'hello' },
                    { name: 'wat' }
                ]
            }
        ]
        }
    ]
}

`
                
            }

        }
     }
</script>

<style lang="scss" scoped>
    h1, h2, h3, p{
        margin: 10px 0;
    }
    section, footer {
        margin: 50px 0;
    }
    strong {
        margin: 0 20px;
    }
    .remind {
        width: 80%;
        min-width: 320px;
        max-width: 800px;
        box-sizing: border-box;
        margin: 20px auto;
        border: 2px solid #8BE388; 
        padding: 20px 4px;
        background: #EEE;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
            margin: 10px 0;
        }
        .keypoint  {
            .remind-img {
                margin: 0 20px;
                vertical-align: middle;
            }
        }
        
    } 
    .github-img {
        width: 30px;
        vertical-align: bottom;
        margin: 0 10px;
        animation: sway 2s ease-in-out infinite alternate;
        transform-origin: 50% 100%;
    }
    @keyframes sway {
        0% {
            transform: rotate(-35deg)
        }
        100% {
            transform: rotate(35deg)
        }
    }
    .code {
        width: 80%;
        max-width: 768px;
        margin: 0 auto;
    }
    .content {
        width: 100%;
        background: rgba(255, 255, 255, 0.5);
    }
    .list {
        text-align: left;
        box-shadow: 0 1px 6px rgba(0,0,0,.4),
                    0 1px 4px rgba(0,0,0,.2); 
    }
     @mixin panel {
        border: 2px solid #8BE388; 
        padding: 0.8em;
        background: #EEE;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        header {
            width: 100%;
            text-align: left;
        } 
        .content {
            margin: 20px 0;
            padding: 0.5em;
            box-sizing: border-box;
        }
    }
    .section-one{
        .ripPanel.rippleWrapper {
            width: 60%;
            min-width: 320px;
            max-width: 600px;
            margin: 20px auto;
        }
        .panel {
             @include panel
        }
        .br {
            width: 88px;
            height: 88px;
        }
        .des {
            margin: 0 10px;
        }
    }
    
</style>

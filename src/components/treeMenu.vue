<template>
    <li  v-if="!isEmptyObj(list)">
        <div>
            <ripple>
                <button slot="pure" class="item-btn" :class="{parent: isFolder}"
                 @click="toggle" >
                    <span class="name">{{list.name}}</span>
                    <div class="constrol">
                        <span @click.stop="changeType" class="addChild">{{AddText}}</span>
                        <span @click.stop="deleteChild" class="deleteChild">{{DeleteText}}</span>
                        <span v-if="isFolder">[{{spread ? '-' : '+'}}]</span>
                    </div>
                </button>
            </ripple>
        </div>
        <ul v-show="spread" v-if="isFolder" class="list">
            <treeMenu v-for="(list, index) in list.children" 
            key="index"  class="item"  :list="list" :name="name" :addText="addText" :deleteText="deleteText"></treeMenu>
            <ripple :isInline="true" class="addripple" bg="#F35286" speed="1">
                <li slot="pure" class="add" @click="addChild"> + </li>
            </ripple>
        </ul>
    </li>
</template>

<script>
    import Vue from 'vue'
    export default {
        props: {
            list: {
                type: Object,
                required: true
            },
            name: {
                type: String,
                required: false
            },
            addText:{
                type: String,
                required: false
            },
            deleteText: {
                type: String,
                required: false
            },
        },
        data () {
            return {
                spread: false,
                AddText: this.addText || 'add',
                DeleteText: this.deleteText || 'delete'
            }
        },
        computed: {
            isFolder () {
                return this.list.children && this.list.children.length
            }
        },
        methods: {
            toggle () {
                console.log('toggle')
                if (this.isFolder) {
                    this.spread = !this.spread
                }
            },
            changeType () {
                if(!this.isFolder) {
                    Vue.set(this.list, 'children', [])
                    this.addChild()
                    this.spread = true
                }
            },
            addChild () {
                console.log(this.name)
                this.list.children.push({
                    name: this.name || 'new item'
                })
            },
            deleteChild () {
                for(let key in this.list) {
                    Vue.delete(this.list, key)
                }
            },
            isEmptyObj (obj) {
                for(let e in obj) {
                    return false
                }
                return true
            }
        }
    }
    
</script>

<style lang="scss" scoped>
    .list {
        min-height: 40px;
        flex-flow: column wrap;
        overflow: hidden;
        background: #FFF;
        transition: all .4s cubic-bezier(.25,.8,.25,1);
        .item {
             padding-left: 1em;
        }
    }
    .parent {
        font-weight: bold;
    }
    .addripple {
        margin: 16px;
        .add {
            background: #CCC;
            width: 20px;
            line-height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            cursor: pointer;
            box-shadow: 0 1px 6px rgba(0,0,0,.4),
                        0 1px 4px rgba(0,0,0,.2); 
        }
    }   
    
    .item-btn {
        cursor: pointer;
        border: none;
        outline: none;
        -webkit-appearance: none;
        color: #000;
        overflow: hidden;
        background: #FFF;
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        border-radius: 0;
        min-width: 88px;
        width: 100%;
        box-shadow: 0 1px 6px rgba(0,0,0,.4),
                    0 1px 4px rgba(0,0,0,.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:hover {
            background: rgba(77, 175, 229, 0.2);
            .addChild {
                display: inline-block;
            }
            .deleteChild {
                display: inline-block;
            }
        }
        .constrol  {

        }
        .addChild {
            display: none;
        }
        .deleteChild {
            display: none;
        }
       
    }
</style>
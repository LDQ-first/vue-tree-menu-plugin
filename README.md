# vue-tree-menu-plugin

> A Tree Menu Plugin of Vue.js 

[Demo](http://ldqblog.me/vue-tree-menu-plugin/dist/#/)

[more detail of use](https://github.com/LDQ-first/vue-tree-menu-plugin/tree/master/src/views/show.vue)


## Use

``` javascript
/*-- npm --*/
npm install --save vue-tree-menu
```
             
``` javascript
/*-- main.js --*/
import Vue from 'vue'
import VueTreeMenu from 'vue-tree-menu'
Vue.use(VueTreeMenu)
```
               
``` 
<!--html-->
<ul class="list">
    <treeMenu :list="list"></treeMenu>
</ul>
```
                    
``` javascript
<!--data-->
list: {
    root: true,       //whether or not to delete root menu item 
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

```

## Param

```
/*
    an Object for tree menu
*/
list: {
    type: Object,
    required: true
},
/*
     name of a new menu item
*/
name: {
    type: String,
    required: false
},
/*
    name of addChild button
*/
addText:{
    type: String,
    required: false
},
/*
    name of delete button
*/
deleteText: {
    type: String,
    required: false
},
/*
    whether or not to show add button
*/
add: {
    type: Boolean,
    required: false
},
/*
    whether or not to show delete button
*/
deletebtn: {
    type: Boolean,
    required: false
},
/*
    whether or not to show addChild button
*/
addbtn: {
    type: Boolean,
    required: false
}
```


## Dependencies

* SASS
* vue-useripple



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

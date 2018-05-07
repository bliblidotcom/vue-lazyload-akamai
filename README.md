# vue-lazyload-akamai

> Vue.js lazy load image directive with akamai image converter

## 💅 Demo Page

https://bliblidotcom.github.io/vue-lazyload-akamai/

or via forked version here: https://mazipan.github.io/vue-lazyload-akamai/

## 🛠 Install with NPM/Yarn

```
npm install vue-lazyload-akamai
// OR
yarn add vue-lazyload-akamai
```

## 🚀 Usage Guide

Add plugins in `main.js`

```js
import VueLazyloadAkamai from 'vue-lazyload-akamai'
Vue.use(VueLazyloadAkamai)
```

Using in your Vue components:

```html
<img v-lazyimg
    src="{placeholder image}"
    data-src="{original image}"
    data-err="{fallback image}">
```

Attribute explanations:

| Attribute Name | Description        |
| ---------------|--------------------|
| `src`          | Use as placeholder/loading image before original image was loaded. |
| `data-src`     | Original image that we want to load after user scroll to it's sections |
| `data-err`     | Image as fallback when original image failed to load (404 response) |



Copyright © 2018 by [Blibli.com Tech Team](https://github.com/bliblidotcom) - Released Under MIT License

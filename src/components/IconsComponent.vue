<template>
 <div class = "imageContainer"> 
           <img class ="companyLogoImg" :src="getImgUrl(item.img_src)" >
         
            <table class="icons">
              <tr>
              <td :width="(Math.floor(100/item.icons.length))+'%'" class = "icon" v-for="(icon, icon_index) in item.icons" :key="icon_index">
                <img class ="icon_img" :src="getIcoUrl(icon)" >
              </td>
              </tr>
            </table>
        </div>
</template>


<script>
export default {
  name: 'IconsComponent',
  props: ['item'],
  methods:
  {
    getImgUrl(img) {
      var images = require.context('../assets/imgs/', false, /\.png$/)
      return images('./' + img + ".png")
    },
    getIcoUrl(img) {
      var images = require.context('../assets/imgs/iconset', false, /\.png$/)
      return images('./' + img + ".png")
    },
  }
  
}
</script>


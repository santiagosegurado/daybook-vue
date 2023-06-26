<template>
  <button class="btn" :class="btnColor">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props:{
    icon:{
      type: String,
      required: false,
      default: "fa-plus",
    },
    btnColor:{
      type: String,
      required: false,
      default: "btn-primary",
    }
  }
}
</script>

<style lang="scss" scoped>
button{
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
}
</style>
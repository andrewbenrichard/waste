<template>
     <div class="header-right-content">
          <router-link to="/donate" class="main-btn">Donate Now</router-link>
                         

    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  },
    
}
</script>
<style >
.theme-3 .main-btn {
    padding: 12px 10px;
}  
.main-btn {
    display: inline-block;
    background: #FFD857;
    color: #191919;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: capitalize;
    padding: 14px 28px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 5px;
    -webkit-transition: .3s;
    transition: .3s;
}
a.cart-btn {
    color: #333;
    margin-top: 8px;
    border-radius: 23px;
    padding: 3px;
    font-size: 16px;
}
i.fa.fa-shopping-cart {
    color: #333;
}
a.cart-btn>span {
    color: #333;
}
</style>
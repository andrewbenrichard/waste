<template>
     <div class="header-right-content">
          <router-link to="/donate" class="main-btn">Donate Now</router-link>
                          <router-link to="/cart" class="cart-btn">
                          
 <i class="fa fa-shopping-cart"></i>  
 <span>{{cartItemCount}}</span>   
                      </router-link>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters({
        cartItemCount:"cartItemCount"
    })
    
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
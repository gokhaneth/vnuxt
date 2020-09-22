<template>
<div>

  <carousel />
  <timer />
  <speakers :object=pass /> 
  <workshops />
  <Speaches />
  <Subscribtion /> 
</div>
</template>

<script>
import carousel from '~/components/Carousel';
import timer from '~/components/Timer';
import speakers from '~/components/Instructors';
import workshops from '~/components/Workshops';
import Speaches from '~/components/Speaches';
import Subscribtion from '~/components/Subscribtion';
import firebase from 'firebase';

export default {
  // beforeCreate(){
  //   let user = firebase.auth().currentUser;

  //   if(!user){
  //     this.$router.push({
  //         path: '/login'
  //     })
    
  //   }
  // },
  data(){
        return{
            pass:{
                 number: 3 ,
                 all: false
            }
        }
    },
  components:{
      carousel,
      timer,
      speakers,
      workshops,
      Speaches,
      Subscribtion,
  }
}
</script>

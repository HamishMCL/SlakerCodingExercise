Vue.component('user-widget', {
    data: function () {
        return {
          postsHidden: true,
          postss: []
        }
      },
    props: ['user'],
    template: `
    <div class="user-widget" >
        <div>
            <div id="image"></div>
            <p id="name"> {{user.name}} </p>  
        </div>
        <p v-show="postsHidden" class="pointer" v-on:click="changeSetting(user.id)" > Show Posts</p>   
        <p v-show="!postsHidden" class="pointer" v-on:click="hidePosts" > Hide Posts</p>       
    </div> 
    `,  methods: {
        changeSetting(value) {
            this.$parent.GetPosts(value)
            this.postsHidden = false
      
        },
        hidePosts(){
          this.$parent.showPosts = false
          this.postsHidden = true
          this.$parent.showPost = false
        },  

      },
      

  })

var app = new Vue({  
    el: '#app',
    data () {
        return {
           users: [],
           posts: [],
           post: [],
           showPosts: false,
           showPost : false
        }
    }, 
    created () {
    
        axios
          .get(' https://jsonplaceholder.typicode.com/users ')
          .then(response => (this.users = response.data))
  
      },
   
     methods: {
            GetPosts: function (id) {
                axios
                .get('https://jsonplaceholder.typicode.com/posts?userId='+id)
                .then(response => (this.posts = response.data))
                
                 this.post = ['']
                 this.showPosts = true
                 this.showPost = false
                 $('#posts').appendTo('#'+id)
                 $('#post').appendTo('#'+id)
              },
              GetPost: function (postid) {
                axios
                .get('https://jsonplaceholder.typicode.com/posts?id='+postid)
                .then(response => (this.post = response.data))
                this.showPost = true
                $('#post').appendTo('#'+postid+'post')
            
              }
        },
      
      

 

});

Vue.component('user-widget', {
    props: ['user'],
    template: `
    <div class="user-widget " >
        <ul>  
        <button class="pointer btn btn-primary"  v-on:click="changeSetting(user.id)" >{{user.name}}</button>   
        </ul>            
    </div> 
    `,  methods: {
        changeSetting(value) {
            this.$parent.GetPosts(value);
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
           username : ""
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
                 this.username = this.posts[0].name
               
              },
              GetPost: function (postid) {
                console.log('https://jsonplaceholder.typicode.com/posts?id='+postid)
                axios
                .get('https://jsonplaceholder.typicode.com/posts?id='+postid)
                .then(response => (this.post = response.data))
                
              
              }
        },
      
      

 

});

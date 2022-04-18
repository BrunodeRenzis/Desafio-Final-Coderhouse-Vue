<template>
  <body>
      <div class="col-md-4 col-md-offset-4" id="register">
						<section id="inner-wrapper" class="register">
							
								<form v-on:submit.prevent="onInput">
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-envelope"> </i></span>
											<input type="text" class="form-control" name="username" v-model="user.username" placeholder="username" required>
										</div>
									</div>
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-envelope"> </i></span>
											<input type="email" class="form-control" placeholder="Email Address" name="email" v-model="user.email" required>
										</div>
									</div>
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-key"> </i></span>
											<input type="password" class="form-control" name="password" v-model="user.password" placeholder="Password"  required>
										</div>
									</div>
									<div class="form-group">
										<div class="input-group selectRol">
											<select name="rol" id="rol" v-model="user.role" required>
												<option value="ADMIN" selected>ADMIN</option>
												<option value="USER">USER</option>
											</select>
										</div>
									</div>
                                     <button type="submit" class="btn btn-success btn-block">Submit</button>
								</form>
							
						</section></div>
  </body>
</template>

<script>
import axios from 'axios';
export default {
    name:'RegisterView',
	data(){
		return{
			user:{
				username: '',
				email:'',
				password:'',
				role:['USER','ADMIN']
			},
            submited:false,
		}
	},
	

	methods:{
		onInput(event,inputName){
			this.submited = true;
			this[inputName]=event.target.value;
			axios.post("https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/usuarios",this.user)
			.then(this.$router.push("/"))
        },		
	}
}
</script>

<style scoped>

body{
    background:white
}
#register {
	-webkit-perspective: 1000px;
	-moz-perspective: 1000px;
	perspective: 1000px;
	margin-top:50px;
	margin-left:33%;
    background-color:white;
    color: #333;

}
.register {
	font-family: 'Josefin Sans', sans-serif;
	-webkit-transition: .5s;
	-moz-transition: .5s;
	transition: .5s;
	-webkit-transform: rotateY(40deg);
	-moz-transform: rotateY(40deg);
	transform: rotateY(40deg);
}
.register:hover  {
	-webkit-transform: rotate(0);
	-moz-transform: rotate(0);
	transform: rotate(0);
}

.register .form-group {
	margin-bottom:17px;
}
.register .form-control,
.register .btn {
	border-radius:0;
}

.register .btn {
	text-transform:uppercase;
	letter-spacing:3px;
}
.input-group-addon {
	border-radius:0;
	color:#fff;
	background:#f3aa0c;
	border:#f3aa0c;
}
.forgot {
	font-size:16px;
}
.forgot a {
	color:#333;
}
.forgot a:hover {
	color:#5cb85c;
}

input[type=text],input[type=password],input[type=email] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

#inner-wrapper, #contact-us .contact-form, #contact-us .our-address {
    color: #1d1d1d;
    font-size: 19px;
    line-height: 1.7em;
    font-weight: 300;
    padding: 50px;
    background: rgba(165, 167, 148, 0.4);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    margin-bottom: 100px;
}
.input-group-addon {
    border-radius: 0;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    color: #fff;
    background: #f3aa0c;
    border: #f3aa0c;
        border-right-color: rgb(243, 170, 12);
        border-right-style: none;
        border-right-width: medium;
}

.selectRol{
	width: min-content;
    border: 2px solid white;
	background-color: white;
}
</style>
const http = new EasyHTTP;

const user1 = {
  name: "Jane Doe", 
  username: 'janedoe',
  email: "janedoe@gmail.com",
  usertype: "user"
};



// ? POST/ADD Users
http.post('https://raw.githubusercontent.com/jmjaro-dev/DevLift-Project/master/db/users/', user1)
.then(data => console.log(data))
.catch(err => console.log(err));
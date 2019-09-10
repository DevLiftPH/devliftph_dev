// Make a HTTP POST Request

class EasyHTTP {
  async post(url, data) {
    const response = await fetch(url, 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body : JSON.stringify(data)
    });
  
    const resData = await response.json();
    return resData;
  }
}

const user1 = {
  name: "Jane Doe", 
  username: 'janedoe',
  email: "janedoe@gmail.com",
  usertype: "user"
};

const http = new EasyHTTP;

// ? POST/ADD Users
http.post('https://raw.githubusercontent.com/jmjaro-dev/DevLift-Project/master/db/users/', user1)
.then(data => console.log(data))
.catch(err => console.log(err));
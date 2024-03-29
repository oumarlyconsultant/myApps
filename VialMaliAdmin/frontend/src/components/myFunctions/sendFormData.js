//Author: Oumar Ly
//Date: May 21 2023
//Version: v1
//Change Description: Create original code.
import axios from "axios";

function sendFormData(formData,endpoint){

//1.Create var that will contain the data
let obj = {}

//2.Create csrftoken
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');


//3.Make a post request using axios
axios.post(endpoint,formData,{headers:{"X-CSRFToken":csrftoken}})
.then((response) => {if(Object.keys(response.data).length > 0) console.log("SUCCESS! data sent")})
.catch(function(error){
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("ERROR! data not sent")
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
})

//4.return true if obj was successfully sent, false otherwise
console.log(obj)
}

export default sendFormData;
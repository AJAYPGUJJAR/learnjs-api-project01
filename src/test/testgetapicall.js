import axios from "axios";
axios({
    method:'get',
    url: 'http://localhost:8080/fruits'
})
.then(function(resp){
    console.log(resp.data);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){

});

axios({
    method:'get',
    url: 'http://localhost:8080/fruits-count'
})
.then(function(resp){
    console.log(resp.data);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){

});

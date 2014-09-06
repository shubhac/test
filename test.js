/**
 * Created by sbkloaner-sbktech on 7/17/14.
 */

var userAge = prompt("What's your age, user?");
var yesNo;

console.log(typeof(userAge));

yesNo = confirm("Is your age " + userAge + "?");

console.log(yesNo)

hello(yesNo);

function hello (param){
    alert("inside hello");
    param(6);
}
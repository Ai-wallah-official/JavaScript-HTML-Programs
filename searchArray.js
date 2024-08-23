// old way to search in array
/*const arr = [1,2,3];
let newArr=[];
function searchValue(src,key) {
    for (let index = 0; index < src.length; index++) {
        if(src[index]===key){ return("value is present in array")}
    }
    return ("not find value ")
        
    }
     

let f = searchValue(arr,"2");
console.log(f)

// new method 
const search = (array, key)=>{
        return array.some((v)=>{return v===key})
}
let findd = search(arr,8)
console.log(findd);
*/
// for leap year
/*
const leapYear =(year)=>
{
if ((year%4==0 && year%100!==0)|| year%400==0) {
    return year+" is laep year";
}
else{
    return year+" is not laep year"
}
}
let year= leapYear(1700);
console.log(year) 
*/
 /*function f(mul, ...oth){
    return oth.map((num)=>{return mul * num}).reduce((t,v)=>{return t+=v})

}
console.log(f(4,2,3))
*/
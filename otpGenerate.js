function generateOtp(l)
{
    let OTP ="";
    for(let i =0;i<l;i++)
    {
        let Rno=math.floor(Math.random()*10);
        // let Rno= Number.parseInt(Math.random()*10);
        OTP=OTP+Rno;
    } 
    return OTP;
}
console.log(generateOtp(6));
console.log(generateOtp(4));
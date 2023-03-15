// Code your solution in this file!
const distanceFromHqInBlocks=(blocks)=>{
    const distanceHq=42;
    if(blocks>distanceHq){
        return blocks-distanceHq
    }else{
        return 50-distanceHq

    }
    

}
const distanceFromHqInFeet = (someValue)=>{
    // distanceFromHqInBlocks(someValue);
    const distanceInFeet= distanceFromHqInBlocks(someValue)
    
    return distanceInFeet*264;


}
const distanceTravelledInFeet =(start , destination)=>{
    const distanceFeet= 264;
    const blockLength = Math.abs(destination-start);
    const feetDistance= blockLength* distanceFeet;
    return feetDistance;
}
const calculatesFarePrice=(start, destination)=>{
    const distance= distanceTravelledInFeet(start, destination);
    let price;
    if(distance<=400){
        price=0;
    }else if(distance>400 && distance<2000){
        price = (distance-400) *0.02;
    }else if(distance>2001 && distance<=2500){
        price=  25;
    }else{
        price= 'cannot travel that far';
    }
    return price;
}
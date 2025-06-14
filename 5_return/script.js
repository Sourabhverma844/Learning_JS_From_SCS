 // hindi me samjte he return work kese karta heai as we know ki js me code ek ke bad ek line chalata he to jese code ki 10vi line me ek function a gya to hum kya to hmara code ka flow 10vi line ko me apne flow ko us function me le jaega or wah ka code execute hoga ab fir us function me last me return likha hoga to iska matlub ki wahi chale jao wapas jaha se aye the , jese 10th line se aye the na to wapas usi line pe jao or return me jo bhi retun ke sath hoga wo ap leke jao 

 // return ka matlub hua jaha par bhi retun lagega uske age jo bhi likhoge wo jaega jaha par function call hua tha , return fucntions ke ander lagtt hai

 function val1(){
    return 12;
 }
 console.log(val1());
 // output ayega 12

function val2(){
    return ;
}
 console.log(val2());
 // output me undefined ayega
 // jab bhi kuch nahi likhenge return ke age to undefined ayega

 // a point to remember ki har function undefined return karta he
 // jese me console pe ja ke 
 // console.log("hey"); likhu to 
 // output me 
 // hey or agli line me undefined likha ayega

 // jese me console pe ja ke 
 // clear(); likhu to 
 // as we know clear sab clear kar deta he to 
 // output me 
 // sab clear ho jaega or agli line me undefined

 // undefined is a value - ye value tab di jati he jab variable ko koi value na mili he iska matlub ise hum ek garbage bvalue ki trha treat karte he or ise default value bhi kah skte he
 // not defined is an error - let supose hamne a nahi bnaya or console.log(a) kar dia to wo eror ayega not defined

 // null is also a value - jese insta pe username search kia jo ho hi na to null ayega , matlub kisi cheez ko dhunda ab wo exist hi nahi karta he to null
 
let stopwatch = document.getElementById('stopwatch');
let second = document.getElementById('seconds');
let min = document.getElementById('min');
let hour = document.getElementById('hour');
let count=0;
let minints=0;
let seconds=0;
let hours=0;
const start = () => {
    let stopwatch = document.getElementById('stopwatch');
let second = document.getElementById('seconds');
let min = document.getElementById('min');
let hour = document.getElementById('hour');
let count=0;
let minints=0;
let seconds=0;
let hours=0;
setInterval(() => {
     stopwatch.innerText=count;
     count++;
if(count==100){
    second.innerText=++seconds;
    if(seconds==60){
     min.innerText=++minints;
     if(minints==60){
         hour.innerText=++hours;
         if(hours==24){
            hours=0;
         }
         minints=0;
     }
        seconds=0;
    }
    count=0;
}
},0);
 }
// setInterval(() => {
//      stopwatch.innerText=count;
//      count++;
// if(count==100){
//     second.innerText=++seconds;
//     if(seconds==60){
//      min.innerText=++minints;
//      if(minints==60){
//          hour.innerText=++hours;
//          if(hours==60){
//             hours==0;
//          }
//          minints=0;
//      }
//         seconds=0;
//     }
//     count=0;
// }
// },0);
// // setInterval(() => {
// //      stopwatch.innerText=count;
// //      count++;
// // if(count==10){
// //     second.innerText=++seconds;
// //     if(seconds==6){
// //      min.innerText=++minints;
// //      if(minints==6){
// //          hour.innerText=++hours;
// //          if(hours==3){
// //             hours=0;
// //          }
// //          minints=0;
// //      }
// //         seconds=0;
// //     }
// //     count=0;
// // }
// // },0);
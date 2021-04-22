import "./css/index.css";


const ball1 = document.querySelector('.ball1')
const ball2 = document.querySelector('.ball2')
const ball3 = document.querySelector('.ball3')
// callback 用法的 demo
      // function move(ball, target, cb) {
        // TODO
      
      //   setTimeout(function(){
      //     var  marginLeft=parseInt(ball.style.marginLeft,10);
      //     if(marginLeft ===target){
      //       cb && cb()
      //     }else{
      //       if(marginLeft<target){
      //         marginLeft ++;
      //       }else{
      //         marginLeft --;
      //       }
      //       ball.style.marginLeft=marginLeft+'px';
      //       move(ball, target, cb)
      //     }
      //   },10)
      // }
      // move(ball1,150,function(){
      //   move(ball2,150,function(){
      //     move(ball3,150,function(){
            
      //     })
      //   })
      // })

      // Promise 用法的 demo
      var Promise=window.Promise;
      function move(ball, target) {
         // TODO
        return new Promise(function(resolve,reject){
          function _animate() {
            setTimeout(function () {
                    var marginLeft = parseInt(ball.style.marginLeft, 10)
                    if (marginLeft === target) {
                        resolve(ball, target)
                    } else {
                        if (marginLeft < target) {
                            marginLeft++;
                        } else {
                            marginLeft--;
                        }
                        ball.style.marginLeft = marginLeft+'px'
                        _animate();
                    }
                 }, 10)
              }
              _animate();
        });
    }
  move(ball1,150)
        .then(function () {
            return move(ball2,150)
        })
        .then(function () {
            return move(ball3,150)
        })

      

      // async/await 用法的 demo
    //   async function go(ball,target) {
    //     // TODO
    //     return new Promise(function(resolve,reject){
    //       function _animate() {
    //         setTimeout(function () {
    //                 var marginLeft = parseInt(ball.style.marginLeft, 10)
    //                 if (marginLeft === target) {
    //                     resolve(ball, target)
    //                 } else {
    //                     if (marginLeft < target) {
    //                         marginLeft++;
    //                     } else {
    //                         marginLeft--;
    //                     }
    //                     ball.style.marginLeft = marginLeft+'px'
    //                     _animate();
    //                 }
    //              }, 10)
    //           }
    //           _animate();
    //     });
    // }
    // async function m(){
    //     await  go(ball1, 150);
    //     await  go(ball2, 150);
    //     await  go(ball3, 150);
    // }
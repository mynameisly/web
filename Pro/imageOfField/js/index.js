   window.requestAFrame = (function () {  
          return window.requestAnimationFrame ||  
                  window.webkitRequestAnimationFrame ||  
                  window.mozRequestAnimationFrame ||  
                  window.oRequestAnimationFrame ||  
                  // if all else fails, use setTimeout  
                  function (callback) {  
                      return window.setTimeout(callback, 1000 / 1000); // shoot for 60 fps  
                  };  
      })();  
    
      // handle multiple browsers for cancelAnimationFrame()  
      window.cancelAFrame = (function () {  
          return window.cancelAnimationFrame ||  
                  window.webkitCancelAnimationFrame ||  
                  window.mozCancelAnimationFrame ||  
                  window.oCancelAnimationFrame ||  
                  function (id) {  
                      window.clearTimeout(id);  
                  };  
      })();
 
 var canvas = document.createElement('canvas');
        var height = canvas.height = window.innerHeight;
        var height = canvas.height = 500;
        var width = canvas.width = window.innerWidth;
        var ctx = canvas.getContext('2d');
        $('#top').append(canvas);

        function random(min,max)
        {
            return Math.random()*(max-min+1)+min;
        }

        function range_map(value,in_min, in_max, out_min, out_max) {
          return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }

        var word_arr = [];
        var txt_min_size = 1;
        var txt_max_size = 18;
        var keypress = false;
        var acclerate = 10;
        for (var i = 0; i < 6; i++) {
          word_arr.push({
            x : random(0,width),
            y : random(0,height),
            text : 'YUANYE',
            size : random(txt_min_size,txt_max_size)
          });
          word_arr.push({
            x : random(0,width),
            y : random(0,height),
            text : 'TRAVEL',
            size : Math.floor(random(txt_min_size,txt_max_size))
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : 'PHOTO'
          });
          word_arr.push({
            x : random(0,width),
            y : random(0,height),
            text : '三亚',
            size : random(txt_min_size,txt_max_size)
          });
          word_arr.push({
            x : random(0,width),
            y : random(0,height),
            text : '厦门',
            size : random(txt_min_size,txt_max_size)
          });
          word_arr.push({
            x : random(0,width),
            y : random(0,height),
            text : '海口',
            size : random(txt_min_size,txt_max_size)
          });
          word_arr.push({
            x : random(0,width),
            y : random(0,height),
            text : 'HAIKOU',
            size : random(txt_min_size,txt_max_size)
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '丽江'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : 'LIJIANG'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '大理'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : 'DALI'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '香格里拉'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '青海'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '香港'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : 'HONGKONG'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '北海'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '琼海'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '巴厘岛'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : 'BALI'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '济州岛'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : 'JEJU'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '马尔代夫'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : 'MALDIVES'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : '帕劳'
          });
          word_arr.push({x : random(0,width),y : random(0,height),size : random(txt_min_size,txt_max_size),
            text : 'PALAU'
          });
        }
        
 function render()
        {
          ctx.fillStyle = "rgba(255,255,255,1)";
          ctx.fillRect(0,0,width,height);

          ctx.fillStyle = "#e2e2e2";
          for (var i = 0; i < word_arr.length; i++) {
            ctx.font = word_arr[i].size+"px sans-serif";
            var w = ctx.measureText(word_arr[i].text);
            ctx.fillText(word_arr[i].text,word_arr[i].x,word_arr[i].y);

            if(keypress)
            {
              word_arr[i].x += range_map(word_arr[i].size,txt_min_size,txt_max_size,2,4) * acclerate;
            }
            else {
              word_arr[i].x += range_map(word_arr[i].size,txt_min_size,txt_max_size,0.5,1);
            }

            if(word_arr[i].x >= width)
            {
              word_arr[i].x = -w.width*2;
              word_arr[i].y = random(0,height);
              word_arr[i].size =  Math.floor(random(txt_min_size,txt_max_size));

            }
          }

          ctx.fill();

          requestAnimationFrame(render);
        }
        render();
        window.addEventListener('keydown',function(){
          keypress = true;
        },true);
        window.addEventListener('keyup',function(){
          keypress = false;
        },true);
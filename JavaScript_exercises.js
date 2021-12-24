//Some answers to string questions

//#1 finding leangth of same letter forexample(e)

   function test(str){
                  console.log((str.match(/e/gi)).length);
                }
             test("Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae quibusdam aliquid maxime error distinctio veniam mollitia pariatur corporis alias repellendus nisi iusto magnam eveniet quisquam, veritatis dolorem ex architecto?")
             test('webbrain academy')

//#2 finding odd numbers in function with 'if else'

              function app(num1,num2){
                     if (num1 %2 === 0) console.log('juft raqam');
                     else console.log('toq raqam');
                     if(num2 %2 === 0) console.log('juft raqam');
                     else console.log('toq raqam');     
              }
              app(3,4)
             
//#3 capitalizing first letter of the given string

                function app(str){
                  var capitalize = str.replace(/\b\w/g, str => str.toUpperCase());
                   console.log(capitalize);
               }
               app('hello java script class')
3 + "4" // output:- "34"
[] + '' //  output:- ''
'' + [] //  output:- ''
{} + ''//  output:-0
'' + {} //  output:- '[object Object]'
{} + {} //  output:- '[object Object]'
[] + []  // ''
3 - '3' // 0
[] - '' // 0
'' - [] // 0
{} - ''// -0
[] - [] // 0 
{} - {} // NaN

test = 10;
console.log(test) // output:- 10

undefined = 10;
console.log(undefined) // output:- undefined but there's no error
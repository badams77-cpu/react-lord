
let maps = {

checkerboard: {
  base: 'checker',
  map: [
     [ 0,1,0,1,0,1,0,1 ],
     [ 1,0,1,0,1,0,1,0 ],
     [ 0,1,0,1,0,1,0,1 ],
     [ 1,0,1,0,1,0,1,0 ],
     [ 0,1,0,1,0,1,0,1 ],
     [ 1,0,1,0,1,0,1,0 ],
     [ 0,1,0,1,0,1,0,1 ],
     [ 1,0,1,0,1,0,1,0 ],
]},

room0: {
  base: 'desert',
  sprites: [
    {
      spriteName: 'virus',
      xpos: 16,
      ypos: 16
    }
  ],
  map:
[[5,6,6,6,7,29,29,29,29,29,29,29,29,29,29,29],

       [13,14,14,14,15,29,29,29,29,29,29,29,29,31,29,29],
       [21,22,22,22,23,29,29,29,29,29,29,1,29,29,29,29],
       [5,0,1,2,29,30,29,29,29,1,1,1,1,1,2,29],
       [29,16,17,18,29,29,29,29,29,9,17,17,17,20,10,29],
       [29,29,29,29,29,29,31,29,29,9,24,25,26,8,10,29],
       [29,29,29,29,39,29,29,29,29,9,32,33,34,8,10,29],
       [29,45,29,5,6,6,6,7,29,9,40,41,42,8,10,29],
       [29,29,29,13,3,4,14,15,29,9,9,9,9,9,10,29],
       [29,29,29,13,11,12,14,15,29,29,29,29,29,29,29,29],
       [29,29,46,21,22,22,22,23,29,29,29,29,29,29,29,29],
       [29,29,29,29,29,29,29,29,29,29,22,29,29,29,29,29],
       [29,29,29,29,29,29,29,29,29,29,29,5,6,6,7,29],
       [29,29,29,29,29,29,31,29,29,29,29,13,14,14,15,29],
       [29,29,31,29,29,29,29,29,29,29,29,21,22,22,23,29],
       [29,29,29,29,29,29,29,45,29,29,29,29,29,29,29,29]]
}};

export default maps;


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
      spriteName: 'grey_bowl',
      xpos: 7,
      ypos: 10
    },
    {
      spriteName: 'purple_testtube',
      xpos: 5,
      ypos: 5
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
 },
 room_8_5: {
     base: 'island',
     sprites: [
       {
         spriteName: 'grey_bowl',
         xpos: 6,
         ypos: 5,
       },
       {
         spriteName: 'purple_testtube',
         xpos: 2,
         ypos: 2,
       },
       {
         spriteName: 'purple_testtube',
         xpos: 10,
         ypos: 5,
       }
     ],map: [
       [264,264,264,264,264,264,264,264,264,264,264,269],
       [0,0,0,0,0,0,0,0,0,0,0,273],
       [0,274,0,189,191,191,191,191,193,278,0,273],
       [190,190,190,182,225,226,224,244,175,0,0,273],
       [219,219,219,219,196,217,218,234,175,0,0,273],
       [219,219,219,219,226,226,226,230,175,0,0,273],
       [210,210,210,172,238,206,242,243,175,275,0,273],
       [7,7,8,0,171,212,171,171,213,0,0,273],
       [17,17,18,0,279,0,0,276,0,0,0,273],
       [0,0,0,0,270,264,264,264,264,264,264,266],
       [110,110,110,100,100,110,110,110,110,110,101,84],
       [139,139,139,139,139,139,139,139,139,139,139,139]
     ]
 },

  room_8_4: {
    base: 'island',
    sprites: [
      {
        spriteName: 'grey_bowl',
        xpos: 7,
        ypos: 9
      },
      {
        spriteName: 'purple_testtube',
        xpos: 5,
        ypos: 5
      }
    ],
    map: [
[264,264,264,264,264,271,248,270,264,264,264,264],
[0,0,0,0,276,0,0,0,0,0,278,0],
[0,274,0,0,0,0,0,277,0,0,0,0],
[181,181,181,181,181,181,181,181,181,181,181,191],
[220,221,222,220,220,221,219,220,220,220,220,214],
[225,226,226,227,225,221,219,220,226,226,226,221],
[212,212,212,212,212,212,212,212,212,212,212,212],
[0,6,7,7,7,7,7,7,7,7,7,7],
[0,16,17,17,17,17,17,17,26,17,17,17],
[99,112,0,279,0,276,0,0,275,0,0,0],
[106,99,109,109,109,109,109,109,109,109,109,110],
[83,138,139,139,139,139,139,139,139,139,139,139]
    ]
  },
room_8_3: {
base: 'island',
    sprites: [
      {
        spriteName: 'purple_testtube',
        xpos: 4,
        ypos: 4
      },
      {
        spriteName: 'purple_testtube',
        xpos: 8,
        ypos: 8,
      }
    ],
    map: [
      [264,264,264,264,264,264,264,264,264,264,264,264],
      [0,0,0,0,0,0,274,0,0,0,0,0],
      [0,0,279,0,0,0,0,0,274,0,0,0],
      [181,181,181,181,181,181,181,181,181,181,181,191],
      [220,221,222,220,220,221,219,220,220,220,220,214],
      [225,226,226,227,225,221,219,220,226,226,226,221],
      [212,212,212,212,212,212,212,212,212,212,212,212],
      [0,0,0,0,0,0,0,0,0,6,7,7],
      [0,0,0,0,278,0,0,0,0,16,111,111],
      [0,0,275,0,0,0,0,275,108,101,133,136],
      [109,109,109,109,109,109,109,109,101,156,142,115],
      [83,138,139,139,139,139,139,139,139,105,105,105]
    ]
},
room_8_2: {
    base: 'island',
    sprites: [
      {
        spriteName: 'grey_bowl',
        xpos: 5,
        ypos: 3,
      },
      {
        spriteName: 'purple_testtube',
        xpos: 8,
        ypos: 7,
      }
    ],
    map: [
        [264,264,266,247,265,264,264,271,247,270,264,264],
        [0,0,0,0,0,0,274,0,0,0,0,0],
        [0,278,0,0,0,0,0,0,275,0,0,0],
        [181,181,181,181,181,181,181,181,181,181,181,191],
        [220,221,222,220,220,221,219,220,220,220,220,214],
        [225,226,226,227,225,221,219,220,226,226,226,221],
        [212,212,212,212,212,212,212,212,212,212,212,212],
        [0,0,0,276,0,0,0,277,0,0,0,0],
        [109,112,0,0,278,0,0,0,0,0,0,0],
        [137,99,193,0,0,0,0,0,0,274,0,0],
        [142,116,99,109,109,109,110,110,110,110,110,110],
        [142,142,142,142,142,142,142,139,139,105,105,105]
    ]
},
room_8_1: {
        base: 'island',
        sprites: [
          {
            spriteName: 'grey_bowl',
            xpos: 3,
            ypos: 8,
          },
          {
            spriteName: 'purple_testtube',
            xpos: 3,
            ypos: 2,
          },
          {
            spriteName: 'purple_testtube',
            xpos: 9,
            ypos: 3,
          }
        ],
  map: [
        [150,117,39,13,204,239,174,198,0,0,0,0],
        [150,117,39,13,204,239,174,198,0,0,276,0],
        [150,117,39,13,204,239,228,198,274,0,0,0],
        [150,117,16,18,204,239,228,180,181,181,181,191],
        [150,117,0,0,204,239,228,220,220,220,220,214],
        [150,117,0,0,204,206,206,206,226,226,226,221],
        [150,117,132,0,209,212,212,212,212,212,212,212],
        [150,99,100,193,0,0,278,0,0,0,0,0],
        [150,142,160,99,0,0,0,108,109,110,110,110],
        [137,142,142,160,99,17,100,101,136,141,141,141],
        [142,116,142,142,142,142,142,142,143,141,142,142],
        [142,142,142,142,142,142,142,139,139,105,105,105]
  ]
},
room_7_1: {
        base: 'island',
        sprites: [
          {
            spriteName: 'grey_bowl',
            xpos: 5,
            ypos: 6,
          },
          {
            spriteName: 'purple_testtube',
            xpos: 5,
            ypos: 3,
          },
          {
            spriteName: 'purple_testtube',
            xpos: 6,
            ypos: 10,
          }
        ],
        map: [
           [150,117,39,13,204,178,174,198,0,0,0,273],
           [150,117,39,13,204,178,174,198,275,0,0,273],
           [150,117,39,13,204,178,202,198,0,0,0,273],
           [150,117,11,13,204,178,202,208,0,6,8,273],
           [150,117,11,13,204,178,202,208,0,34,13,273],
           [150,117,11,13,204,178,202,208,0,16,18,273],
           [150,117,11,13,204,178,202,208,0,0,0,273],
           [150,127,11,13,204,178,202,208,274,0,0,273],
           [150,127,11,13,204,178,202,208,0,0,0,273],
           [137,127,11,13,204,178,202,208,0,0,0,273],
           [142,127,11,13,204,178,202,208,0,276,0,273],
           [142,127,11,13,204,178,202,198,0,0,0,273]
        ]
},
room_6_1: {
        base: 'island',
        sprites: [
          {
            spriteName: 'grey_bowl',
            xpos: 7,
            ypos: 8,
          },
          {
            spriteName: 'purple_testtube',
            xpos: 6,
            ypos: 3,
          },
          {
            spriteName: 'purple_testtube',
            xpos: 10,
            ypos: 6,
          }
        ],
        map: [
            [150,117,39,13,204,178,174,198,0,0,270,266],
            [150,117,39,13,204,178,174,198,278,0,0,0],
            [150,117,16,18,204,178,202,198,0,0,0,0],
            [150,117,0,0,204,178,202,208,0,0,274,0],
            [150,117,276,0,204,178,202,180,191,191,191,191],
            [150,117,0,0,204,178,202,195,186,186,186,186],
            [150,127,0,0,204,178,202,205,166,166,166,166],
            [150,99,112,274,204,178,202,170,212,212,212,212],
            [150,89,132,0,204,178,202,208,0,0,0,0],
            [137,127,0,0,204,178,202,208,0,0,0,0],
            [142,127,6,8,204,178,202,208,0,0,0,0],
            [142,127,11,13,204,178,202,198,0,0,270,269]

        ]
},
room_6_2: {
    base: 'island',
    sprites: [
              {
                spriteName: 'grey_bowl',
                xpos: 6,
                ypos: 6,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 3,
                ypos: 5,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 9,
                ypos: 6,
              }
            ],
    map: [
      [264,264,264,264,269,247,268,264,264,264,264,264],
      [0,0,0,0,265,264,266,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,276,0,0],
      [0,275,0,0,0,0,0,0,0,0,0,0],
      [191,191,191,191,191,191,191,191,191,191,191,191],
      [196,196,196,196,196,196,196,196,186,186,186,186],
      [206,206,206,206,206,206,206,206,166,166,166,166],
      [171,171,171,171,171,171,171,171,171,212,212,212],
      [0,0,0,0,0,0,0,279,0,0,0,0],
      [0,0,0,274,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [264,264,264,264,264,264,264,264,264,264,264,264],

    ]
},
room_6_3: {
    base: 'island',
    sprites: [
              {
                spriteName: 'grey_bowl',
                xpos: 7,
                ypos: 7,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 4,
                ypos: 6,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 8,
                ypos: 5,
              }
            ],
map: [
  [264,264,264,264,264,264,264,264,264,264,264,264],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,279,0,0,0,0,0,0,0,276,0],
  [0,0,0,189,190,190,190,190,193,0,0,0],
  [191,191,191,182,183,222,223,218,180,191,191,191],
  [196,196,196,196,196,196,196,196,186,186,186,186],
  [206,206,206,206,168,168,168,168,166,166,166,166],
  [171,171,171,172,206,206,206,206,170,212,212,212],
  [0,0,0,0,210,210,210,210,0,0,0,0],
  [0,274,0,0,0,0,0,0,0,278,0,0],
  [0,0,0,0,268,264,269,0,0,0,0,0],
  [264,264,264,264,266,247,265,264,264,264,264,264]
  ],
},
room_6_4: {
    base: 'island',
    sprites: [
              {
                spriteName: 'grey_bowl',
                xpos: 6,
                ypos: 6,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 3,
                ypos: 5,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 9,
                ypos: 6,
              }
            ],
  map: [
    [264,264,264,264,264,264,264,264,264,264,264,264],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,278,0,0,0,276,0,0,0,279,0],
    [0,0,0,189,190,190,190,190,193,0,0,0],
    [191,191,191,101,159,144,139,160,99,192,191,191],
    [196,196,170,91,84,84,84,84,89,172,186,186],
    [206,206,180,101,84,84,84,84,99,182,166,166],
    [171,171,171,91,157,84,84,163,89,171,212,212],
    [0,0,0,0,210,210,210,210,0,0,0,0],
    [0,245,0,0,0,274,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [264,264,264,264,264,264,264,264,264,264,264,264]
  ]
},
room_6_5: {
    base: 'island',
    sprites: [
              {
                spriteName: 'grey_bowl',
                xpos: 3,
                ypos: 5,
              },
              {
                spriteName: 'grey_bowl',
                xpos: 7,
                ypos: 8,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 4,
                ypos: 5,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 8,
                ypos: 6,
              }
            ],
  map: [
    [264,264,264,264,264,264,264,264,264,264,264,264],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,274,0,0,101,99,0,0,0,247,0,0],
    [0,0,0,0,91,89,0,0,0,0,0,0],
    [191,191,191,191,191,191,191,191,191,192,191,191],
    [196,196,196,196,196,196,196,196,196,196,186,186],
    [206,206,166,166,166,166,166,166,166,166,166,166],
    [171,171,171,211,211,211,211,211,211,171,212,212],
    [0,247,0,0,0,0,182,180,0,0,0,0],
    [0,0,0,0,0,0,172,170,0,0,279,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [264,264,264,264,264,264,264,264,264,264,264,264],
  ]
},

room_6_6: {
    base: 'island',
    sprites: [
              {
                spriteName: 'grey_bowl',
                xpos: 5,
                ypos: 5,
              },
              {
                spriteName: 'grey_bowl',
                xpos: 8,
                ypos: 5,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 4,
                ypos: 6,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 9,
                ypos: 5,
              }
            ],
  map: [
    [264,264,264,264,264,264,264,264,264,264,264,264],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,247,0,0,0,0,0,0,0,275,0],
    [0,0,0,189,191,191,191,193,0,0,0,0],
    [191,191,191,182,217,220,218,180,191,192,191,191],
    [196,196,196,196,196,196,196,196,196,196,186,186],
    [206,206,166,166,166,166,166,166,166,166,166,166],
    [171,171,171,211,211,211,211,211,211,171,212,212],
    [0,0,274,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,279,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [264,271,0,0,0,0,0,0,0,0,0,0],
  ]
},
room_6_7: {
    base: 'island',
    sprites: [
              {
                spriteName: 'grey_bowl',
                xpos: 5,
                ypos: 5,
              },
              {
                spriteName: 'grey_bowl',
                xpos: 8,
                ypos: 8,
              },
              {
                spriteName: 'grey_bowl',
                xpos: 8,
                ypos: 5,
              },
              {
                spriteName: 'grey_bowl',
                xpos: 5,
                ypos: 8,
              }
            ],
  map: [
    [264,264,264,271,247,92,92,247,270,264,264,264],
    [0,0,0,0,96,92,92,122,0,0,0,0],
    [0,0,247,0,96,92,92,122,0,0,275,0],
    [0,0,0,189,101,124,162,99,193,0,0,0],
    [191,191,191,182,217,220,223,218,180,192,191,191],
    [196,196,196,196,196,196,196,196,196,196,186,186],
    [206,206,166,166,166,166,166,166,166,166,166,166],
    [171,171,171,172,217,220,223,218,170,171,212,212],
    [0,0,274,0,91,115,115,89,0,0,0,0],
    [0,0,0,0,96,92,92,94,0,279,0,0],
    [0,0,0,0,96,92,92,94,0,0,0,0],
    [264,264,264,271,247,92,97,247,270,264,264,264]
  ]
},

room_6_8: {
    base: 'island',
    sprites: [
              {
                spriteName: 'purple_testtube',
                xpos: 5,
                ypos: 5,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 8,
                ypos: 8,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 8,
                ypos: 5,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 5,
                ypos: 8,
              }
            ],
  map: [
    [264,264,264,264,264,264,264,264,264,271,247,119],
    [0,0,0,276,0,0,0,0,0,0,113,119],
    [0,0,0,0,0,0,0,0,0,275,113,119],
    [0,0,0,0,0,0,0,0,0,0,113,119],
    [191,191,191,191,191,191,191,193,0,0,113,119],
    [196,196,196,196,196,196,197,198,0,0,113,119],
    [206,206,166,166,166,164,202,198,0,0,113,119],
    [171,171,171,171,172,200,202,198,0,0,113,119],
    [0,0,0,0,199,200,202,198,0,274,113,119],
    [0,0,248,0,199,200,202,94,0,0,113,119],
    [0,0,0,0,199,200,202,94,0,0,113,119],
    [264,271,0,0,199,200,202,198,0,0,247,119]
  ]
},
room_7_8: {
    base: 'island',
    sprites: [
              {
                spriteName: 'purple_testtube',
                xpos: 3,
                ypos: 5,
              },
              {
                spriteName: 'grey_bowl',
                xpos: 7,
                ypos: 7,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 9,
                ypos: 4,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 4,
                ypos: 8,
              }
            ],
  map: [
    [268,271,0,0,204,200,202,208,0,0,248,119],
    [273,0,0,0,204,200,202,208,0,0,113,119],
    [273,0,274,0,204,200,202,208,0,0,113,119],
    [273,0,0,0,204,200,202,208,0,278,113,119],
    [273,0,6,8,204,200,202,208,0,0,113,119],
    [273,0,11,13,204,200,202,198,0,0,113,119],
    [273,0,11,13,204,200,202,198,0,0,113,119],
    [273,0,16,18,204,200,202,198,0,0,113,119],
    [273,0,0,0,199,200,202,198,0,0,113,119],
    [273,0,0,0,199,200,202,94,275,0,113,119],
    [273,276,0,0,199,200,202,94,0,0,113,119],
    [273,0,0,0,199,200,202,198,0,0,247,119]
  ]
},
room_8_8: {
    base: 'island',
    sprites: [
              {
                spriteName: 'purple_testtube',
                xpos: 3,
                ypos: 4,
              },
              {
                spriteName: 'grey_bowl',
                xpos: 7,
                ypos: 7,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 4,
                ypos: 8,
              },
              {
                spriteName: 'purple_testtube',
                xpos: 8,
                ypos: 8,
              }
            ],
  map: [
     [273,0,0,0,204,200,202,208,0,0,248,119],
     [273,0,0,0,204,200,202,208,0,0,113,119],
     [265,271,274,0,204,200,202,208,0,0,113,119],
     [0,0,0,0,204,200,202,208,0,278,113,119],
     [191,191,191,191,182,200,202,208,0,0,113,119],
     [186,186,186,186,186,168,202,198,0,0,113,119],
     [206,206,206,206,206,206,207,198,0,0,113,119],
     [211,211,211,211,211,211,211,213,0,0,113,119],
     [0,0,0,0,0,0,0,0,0,0,113,119],
     [0,0,0,0,0,0,0,0,0,0,113,119],
     [109,109,109,109,109,109,109,109,109,109,101,119],
     [105,105,105,105,105,105,105,105,105,105,105,119]
  ]
  },
 room_8_7: {
     base: 'island',
     sprites: [
               {
                 spriteName: 'purple_testtube',
                 xpos: 4,
                 ypos: 4,
               },
               {
                 spriteName: 'purple_testtube',
                 xpos: 4,
                 ypos: 8,
               },
               {
                 spriteName: 'purple_testtube',
                 xpos: 8,
                 ypos: 4,
               },
               {
                 spriteName: 'purple_testtube',
                 xpos: 8,
                 ypos: 8,
               }
             ],
   map: [
      [0,0,0,0,0,0,0,0,0,0,0,272],
      [0,0,0,0,0,0,0,0,0,0,0,272],
      [0,0,279,0,0,0,0,0,0,279,270,266],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [191,191,191,191,191,191,191,191,191,191,191,191],
      [186,186,186,186,186,186,186,186,186,186,186,186],
      [206,206,206,206,206,206,206,206,206,206,206,206],
      [211,211,211,211,211,211,211,211,211,211,211,211],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,279,0,0,0,0,0,0,279,0,0],
      [109,109,109,109,109,109,109,109,109,110,110,110],
      [105,105,105,105,105,105,105,105,105,105,105,119]
   ]
 },

 room_7_7: {
     base: 'island',
     sprites: [
               {
                 spriteName: 'red_bowl',
                 xpos: 5,
                 ypos: 5,
               },
               {
                 spriteName: 'red_bowl',
                 xpos: 7,
                 ypos: 7,
               },
               {
                 spriteName: 'red_bowl',
                 xpos: 5,
                 ypos: 7,
               },
               {
                 spriteName: 'red_bowl',
                 xpos: 7,
                 ypos: 5,
               }
             ],
   map: [
     [264,264,264,271,247,92,92,247,270,264,264,264],
     [0,0,0,0,96,92,92,122,0,0,0,0],
     [0,0,0,0,96,92,92,122,0,0,0,0],
     [0,0,275,189,101,124,162,99,193,0,278,0],
     [0,0,0,96,114,115,115,116,94,0,278,0],
     [0,0,0,96,102,83,83,98,94,0,278,0],
     [0,0,0,96,92,83,83,88,94,0,0,0],
     [0,0,0,96,124,85,85,126,94,0,0,0],
     [0,0,0,0,130,90,90,130,0,0,0,0],
     [0,276,0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,247,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0,0,267],
   ]
 },
room_8_6: {
     base: 'island',
     sprites: [
               {
                 spriteName: 'purple_testtube',
                 xpos: 6,
                 ypos: 3,
               },
               {
                 spriteName: 'purple_testtube',
                 xpos: 6,
                 ypos: 7,
               },
               {
                 spriteName: 'purple_testtube',
                 xpos: 9,
                 ypos: 6,
               },
               {
                 spriteName: 'red_bowl',
                 xpos: 3,
                 ypos: 8,
               }
             ],
  map: [
    [273,0,0,0,177,178,174,175,0,0,0,0],
    [273,0,276,0,177,178,174,175,0,275,0,0],
    [273,0,0,0,177,178,174,175,0,0,0,0],
    [273,0,276,0,177,178,174,175,0,0,0,0],
    [273,0,0,0,177,239,243,180,191,191,191,191],
    [273,0,276,0,177,186,186,186,186,186,186,186],
    [273,0,0,0,177,206,206,206,206,206,206,206],
    [273,0,276,0,45,211,211,211,211,211,211,211],
    [273,0,0,0,0,0,0,0,0,0,0,0],
    [273,0,276,0,276,0,276,0,276,0,276,0],
    [247,109,109,109,109,109,109,109,109,110,110,110],
    [105,105,105,105,105,105,105,105,105,105,105,119],
  ]
},
room_7_6: {
     base: 'island',
     sprites: [
               {
                 spriteName: 'purple_testtube',
                 xpos: 5,
                 ypos: 4,
               },
               {
                 spriteName: 'purple_testtube',
                 xpos: 3,
                 ypos: 8,
               },
               {
                 spriteName: 'purple_testtube',
                 xpos: 9,
                 ypos: 3,
               },
               {
                 spriteName: 'purple_testtube',
                 xpos: 8,
                 ypos: 8,
               }
             ],
  map: [
    [264,264,264,264,264,264,264,264,264,264,264,264],
    [0,0,0,0,0,0,0,0,0,0,0,0]
    [0,0,274,0,0,0,0,0,0,274,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [181,181,181,181,181,181,191,193,0,0,0,0],
    [186,186,186,186,186,186,197,208,0,0,0,0],
    [206,206,206,206,206,201,174,208,0,0,0,0],
    [211,211,211,211,172,200,202,208,0,0,0,0],
    [0,0,0,0,199,200,202,208,0,0,274,0],
    [0,275,0,0,199,200,202,208,0,0,0,0],
    [0,0,0,0,199,200,202,208,0,0,0,0],
    [264,271,0,0,199,200,202,208,0,0,0,0]
  ]
},

room_7_5: {
       base: 'island',
       sprites: [
                 {
                   spriteName: 'purple_testtube',
                   xpos: 3,
                   ypos: 3,
                 },
                 {
                   spriteName: 'purple_testtube',
                   xpos: 3,
                   ypos: 9,
                 },
                 {
                   spriteName: 'purple_testtube',
                   xpos: 8,
                   ypos: 3,
                 },
                 {
                   spriteName: 'purple_testtube',
                   xpos: 9,
                   ypos: 9,
                 }
               ],
  map: [
    [264,264,264,264,264,264,264,264,264,264,264,264],
    [0,0,0,0,0,0,0,274,0,0,0,0],
    [0,0,6,7,8,0,0,0,0,0,0,0],
    [0,0,16,17,18,0,0,0,0,275,0,0],
    [181,181,181,181,181,181,181,181,181,181,181,181],
    [186,186,186,186,186,186,186,186,186,186,186,186],
    [206,206,206,206,206,201,206,206,206,206,206,206],
    [211,211,211,211,171,171,171,171,171,171,171,171],
    [0,278,0,0,0,0,0,6,7,8,0,0],
    [0,0,0,0,276,0,0,16,17,18,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [264,264,264,264,264,264,264,264,264,264,264,264]
  ]

},
room_7_4: {
         base: 'island',
         sprites: [
                   {
                     spriteName: 'purple_testtube',
                     xpos: 6,
                     ypos: 3,
                   },
                   {
                     spriteName: 'purple_testtube',
                     xpos: 7,
                     ypos: 3,
                   },
                   {
                     spriteName: 'purple_testtube',
                     xpos: 6,
                     ypos: 9,
                   },
                   {
                     spriteName: 'purple_testtube',
                     xpos: 7,
                     ypos: 9,
                   }
                 ],
  map: [
    [264,264,264,264,264,264,264,264,264,264,264,264],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,101,99,0,0,0,0,0,274,0,0],
    [0,0,91,89,189,191,191,193,0,0,0,0],
    [181,181,181,181,182,217,218,180,181,181,181,181],
    [186,186,186,186,186,186,186,186,186,186,186,186],
    [206,206,206,206,206,201,206,206,206,206,206,206],
    [211,211,211,211,172,217,218,170,171,171,171,171],
    [0,0,0,0,209,171,171,213,101,99,0,0],
    [0,275,0,0,0,0,0,0,91,89,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [264,264,264,264,264,264,264,264,264,264,264,264]
  ]
},
room_7_3: {
         base: 'island',
         sprites: [
                   {
                     spriteName: 'purple_testtube',
                     xpos: 4,
                     ypos: 4,
                   },
                   {
                     spriteName: 'purple_testtube',
                     xpos: 7,
                     ypos: 4,
                   },
                   {
                     spriteName: 'purple_testtube',
                     xpos: 4,
                     ypos: 7,
                   },
                   {
                     spriteName: 'purple_testtube',
                     xpos: 7,
                     ypos: 7,
                   }
                 ],
  map: [
    [264,264,264,264,264,264,264,264,264,264,264,264],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,275,0,0,0],
    [181,193,0,25,181,191,191,181,193,0,0,0],
    [214,180,181,182,217,220,220,218,180,181,181,181],
    [186,186,186,186,186,186,186,186,186,186,186,186],
    [206,206,206,206,206,201,206,206,206,206,206,206],
    [214,170,211,172,217,226,226,218,170,171,171,171],
    [211,213,0,209,171,171,171,171,213,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,274,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [264,264,264,264,264,264,264,264,264,264,264,264]
  ]
},
room_7_2: {
     base: 'island',
     sprites: [
               {
                 spriteName: 'red_bowl',
                 xpos: 3,
                 ypos: 5,
               },
               {
                 spriteName: 'red_bowl',
                 xpos: 6,
                 ypos: 5,
               },
               {
                 spriteName: 'red_bowl',
                 xpos: 3,
                 ypos: 8,
               },
               {
                 spriteName: 'red_bowl',
                 xpos: 6,
                 ypos: 8,
               }
             ],
  map: [
    [268,264,264,264,264,264,264,264,264,264,264,264],
    [267,0,0,0,0,0,0,0,0,0,0,0],
    [267,0,0,0,0,0,0,0,275,0,0,0],
    [267,0,0,108,100,100,112,0,189,181,181,181],
    [267,0,108,101,114,116,99,112,177,220,220,220],
    [267,0,96,83,83,87,93,94,177,186,186,186],
    [267,0,96,83,83,87,93,94,177,206,206,206],
    [267,0,128,91,83,87,89,132,177,220,220,220],
    [267,0,0,128,130,130,132,0,209,211,211,211],
    [267,0,0,0,0,0,0,0,0,0,274,0],
    [267,0,0,0,0,0,0,0,0,0,0,0],
    [265,264,264,264,264,264,264,264,264,264,264,264]
  ]
},

room_5_1: {
  base: 'island',
  sprites: [
    {
      spriteName: 'brown_testtube',
      xpos: 3,
      ypos: 2,
    },
    {
      spriteName: 'brown_testtube',
      xpos: 3,
      ypos: 11,
    },
    {
      spriteName: 'red_bowl',
      xpos: 6,
      ypos: 6,
    }
  ],

  map: [
    [150,117,39,13,204,178,174,198,0,0,0,273],
    [150,117,39,13,204,178,174,198,0,0,0,273],
    [150,117,16,18,204,178,202,198,275,0,0,273],
    [150,99,112,0,204,178,202,208,0,0,0,273],
    [150,93,94,0,204,178,202,208,0,0,0,273],
    [150,93,94,0,204,178,202,208,0,0,0,273],
    [150,93,94,0,204,178,202,208,0,0,274,273],
    [150,93,94,0,204,178,202,208,0,0,0,273],
    [150,89,132,276,204,178,202,208,0,0,0,273],
    [137,127,0,0,204,178,202,208,0,0,0,273],
    [142,127,6,8,204,178,202,208,0,279,0,273],
    [142,127,11,13,204,178,202,198,0,0,0,273]
  ]
},
room_4_1: {
    base: 'island',
    sprites: [
      {
        spriteName: 'brown_testtube',
        xpos: 3,
        ypos: 4,
      },
      {
        spriteName: 'brown_testtube',
        xpos: 3,
        ypos: 10,
      },
      {
        spriteName: 'red_bowl',
        xpos: 7,
        ypos: 5,
      },
      {
        spriteName: 'red_bowl',
        xpos: 7,
        ypos: 6,
      }
    ],
  map: [
    [150,117,39,13,204,178,174,198,0,0,0,273],
    [150,117,16,18,204,178,174,198,0,0,0,273],
    [150,99,112,0,204,178,202,198,0,0,0,273],
    [150,93,94,0,204,178,202,208,276,0,0,273],
    [150,93,94,0,204,178,202,180,193,0,0,273],
    [150,93,94,0,204,178,174,215,175,0,0,273],
    [150,93,94,274,204,178,202,216,175,0,278,273],
    [150,93,94,0,204,178,202,170,213,0,0,273],
    [150,93,94,279,204,178,202,208,0,0,0,273],
    [137,89,132,0,204,178,202,208,0,275,0,273],
    [142,127,0,0,204,178,202,208,0,0,0,273],
    [142,127,6,8,204,178,202,198,0,0,0,273],
  ]
},
room_3_1: {
    base: 'island',
    sprites: [
      {
        spriteName: 'brown_testtube',
        xpos: 2,
        ypos: 2,
      },
      {
        spriteName: 'brown_testtube',
        xpos: 4,
        ypos: 10,
      },
      {
        spriteName: 'red_bowl',
        xpos: 8,
        ypos: 4,
      },
      {
        spriteName: 'red_bowl',
        xpos: 8,
        ypos: 8,
      }
    ],
  map: [
    [150,117,16,18,204,178,174,198,0,0,0,273],
    [150,117,0,0,204,178,174,198,0,0,0,273],
    [150,94,0,0,204,178,202,198,0,0,0,273],
    [150,99,29,279,204,178,202,208,0,274,0,273],
    [150,93,99,112,204,178,202,208,0,0,0,273],
    [150,93,133,122,204,178,174,208,0,0,0,273],
    [150,93,135,122,199,178,202,208,0,0,0,273],
    [150,93,89,132,199,200,174,208,247,0,0,273],
    [93,89,132,279,204,178,202,208,0,0,0,273],
    [137,94,0,0,204,178,202,208,0,0,0,273],
    [142,127,6,8,204,178,202,208,276,0,0,273],
    [142,127,34,30,204,178,202,198,0,0,0,273],
  ]
},
room_2_1: {
    base: 'island',
    sprites: [
      {
        spriteName: 'brown_testtube',
        xpos: 3,
        ypos: 4,
      },
      {
        spriteName: 'brown_testtube',
        xpos: 3,
        ypos: 7,
      },
      {
        spriteName: 'red_bowl',
        xpos: 5,
        ypos: 4,
      },
      {
        spriteName: 'red_bowl',
        xpos: 7,
        ypos: 8,
      }
    ],
  map: [
    [150,117,11,13,204,178,174,198,0,0,0,273],
    [150,117,11,13,204,178,174,198,0,0,0,273],
    [150,94,16,18,204,178,202,198,279,0,0,273],
    [150,99,100,112,204,178,202,208,0,0,0,273],
    [150,89,130,132,204,178,202,208,0,0,0,273],
    [150,94,275,0,204,178,174,208,0,276,0,273],
    [150,94,0,276,199,178,202,208,0,0,0,273],
    [150,99,110,112,199,200,174,208,0,0,0,273],
    [93,89,130,132,204,178,202,208,0,0,0,273],
    [137,94,6,8,204,178,202,208,0,279,0,273],
    [142,127,11,13,204,178,202,208,0,0,0,273],
    [142,127,34,30,204,178,202,198,0,0,0,273],
  ]
}

 };

export default maps;

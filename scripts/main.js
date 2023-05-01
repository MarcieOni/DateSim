// business logic


// string
let myVariable = "My name is Emilyyy";
const myOtherVariable = " N I'm Emilyy";
// number
let mynum = 69
let myothernum = 420
// boolean
let mybool = true;
let myotherbool = false;
// array
let myArray = [
  "emily", 
  "kether", 
  "miqothekitty"
]
// object
let myObject = {
  name: "Marceline Yuri",
  gender: "F",
  pronouns: "She/Her",
  age: 22,
  race: "Miqo'te, Seekers of the Sun",
  occupation: "Courtesan",
  rp: "SFW/NSFW",
  sexualOrientation: "Bisexual",
  role: "Sub",
}

let string = "This is a string."

let step = 0
let blockStep = 0
let optionStep = 0

const scene1 = {
  blocks: [
    [
      "Ah, the venue. The thudding beats of DJ Paully, the shuffle of feet on the dance floor. You scan the room wondering... will tonight be the night I find love?",
      "suddenly from the corner of ur eye u notice a miqo approaching.",  
      "o.o",
      "\"heyy c:\"",
    ],[
      "\"Welcome to 'The Boiler Room' I am emilyy c:\"",

    ]
  ],
  options: [
    {
      simp: {
        answer: "OMGG UR HOT",
        response: [
          "\"ur gross x.x\"",
        ],
      },
      dom: { 
        answer: "hey there cute kityy. wanna come sit on my lap",
        response: [
          "her eyes widen n she blushes",
          "\"yes sir\""
        ]
      },
      sub: {
        answer: "heyy cuutie ♥",
        response: [
          "she lets out a soft giggle as she blushes",
          "\"heyy there :3\""
        ]
      },
      troll: {
        answer: "SHEEEEEEESSHHH",
        response: [
          "adkfvjhakjhfkhdlksjh"
        ]
      }
    }
  ]
}

const storyTxt = [
  "Ah, the venue. The thudding beats of DJ Paully, the shuffle of feet on the dance floor. You scan the room wondering... will tonight be the night I find love?",
  "suddenly from the corner of ur eye u notice a miqo approaching.",  
  "o.o",
  "heyy c:",
]

function typewriter(words, delay=300) {
  setTimeout(function() {
    let array = words.split("")
    array.forEach(function(letter, index) {
        setTimeout(function() {
            $(".box1").append(letter)
        }, 20*index)
    })
  }, delay)
}


// interface logic

$(document).ready(function() {
  typewriter(scene1.blocks[0][0], 6150)
  
  $(".txtbox").click(function() {
    $(".miqo").addClass("sneaky")

    
    step++
    $(".box1").empty()
    if ( step == 2 ) {
      $("#surprise").removeClass("sneaky")
    } else if ( step == 3 ) {
      $("#wave").removeClass("sneaky")
    } else if ( step == 4 ) {
      $("#think").removeClass("sneaky")
      $(".box1").addClass("hideBox")
      $(".options").addClass("optionShow")
      $("#simp").html("<span>" + scene1.options[0].simp.answer + "</span>")
      $("#dom").html("<span>" + scene1.options[0].dom.answer + "</span>")
      $("#sub").html("<span>" + scene1.options[0].sub.answer + "</span>")
      $("#troll").html("<span>" + scene1.options[0].troll.answer + "</span>")
    }
    
    typewriter(scene1.blocks[blockStep][step])
  })
});









/*
    





















oh yea rite i 4got x.x
yea
ok i got it
sryy im a lil slow rn x.x
ok
wait am i supposed 2 do sumthing



    not rlyy x.x


    ok what nxt

    im lost x.x


    so liike u mean 

    business logc is liike 

    let string = "blah"
    n stuff liike that 

    oh
    ok nvm




    ok so how do we make it liike
    yea
    
    no idk what u mean x.x
    im lost



  // business logic

  // interface logic









































wait
what did u just do x.x
ok whateverrr idcc
x.x

afdskhgvdfkahbjk

just leave it alone
stop

ok well

here is the thing x.x i dont rlyy like this rp cuz it is liike half of sum1 talking, half of not 
liike this should b 





"Ah, the venue. The thudding beats of DJ Paully, the shuffle of feet on the dance floor."
"



*/

document.getElementById("text").innerHTML = "hellooo";

var quotes = ['The ocean is made of drops.',
'Not quite my tempo.',
'Hell is made for people like you.',
'Live as if you were to die tomorrow. Learn as if you were to live forever.',
'That which does not kill us makes us stronger.',
'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
'We must not allow other people’s limited perceptions to define us.',
'Do what you can, with what you have, where you are.',
'Be yourself; everyone else is already taken.',
'This above all: to thine own self be true.',
'If you cannot do great things, do small things in a great way.',
'If opportunity doesn’t knock, build a door.'
];
var authors = ['Moana',
'Whiplash',
'Friends',
'Moana',
'Mahatma Gandhi',
'Friedrich Nietzsche',
'Bernard M. Baruch',
'Virginia Satir',
'Theodore Roosevelt',
'Oscar Wilde',
'William Shakespeare',
'Napoleon Hill',
'Milton Berle'
];
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

var rand = 1;

document.querySelector("#new-quote").addEventListener('click', () => {
  document.getElementById("text").innerHTML = 1;
})

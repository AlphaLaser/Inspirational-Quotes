var quotes = ['The Way Get Started Is TO Quit Talking And Begin Doing. -Walt Disney',
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty.',
    'Don\'t Let Yesterday Take Up Too Much Of Today. -Will Rogers',
    'you Learn From Failure Than From Success. Don \t Let It Stop You. Failure Builds Character.- Unknown',
    'It\'s Not Whether You Get Knocked Down, It \'s Whether You Get Up.- Vince Lombardi',
    'If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You.- Steve Jobs',
    'people Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.- Rob Siltanen',
    'Failure Kill Never Overtake Me If My Determination To Succeed Is Strong Enough.- Og mandino',
    'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That\'s The Classic Entrepreneur.',
    'We may Encounter Many Defeats But We h\'st Not Be Defeated.- Maya Angelou'
]


window.onload = function() {
       var item = quotes[Math.floor(Math.random()*quotes.length)];

   	   document.getElementById('output').innerHTML=item;
};


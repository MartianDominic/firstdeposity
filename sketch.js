/*

Officer: 1733667
CaseNum: 101-3-55818768-1733667

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Sienna filled rectangle with a Medium Spring Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Dark Blue filled
rectangle with a Goldenrod outline around him.

Identify the man reading the newspaper by drawing a Lawn Green filled rectangle
with a Pale Violet Red outline around him.

Identify the woman with the dog by drawing a Magenta filled rectangle with a
Lime outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    fill(160,82,45);
    stroke(0,250,154);
    rect(740,306,295,600);
    
    fill(0,0,139);
    stroke(218,165,32);
    rect(1081,471,200,260);
    
    fill(124,252,0);
    stroke(219,112,147);
    rect(72,369,160,320);
    
    fill(255,0,255);
    stroke(0,255,0);
    rect(1360,304,170,380);

}

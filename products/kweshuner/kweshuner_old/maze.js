var map=[[255,255,255,255,255,255,255,255],[162,8,3,248,0,0,0,17],[136,162,235,251,254,237,221,213],[187,190,10,170,162,68,136,149],[136,130,186,170,171,86,170,181],[238,250,130,0,10,68,136,149],[130,130,30,255,250,238,221,213],[186,190,248,128,2,137,17,21],[168,32,2,42,174,187,119,117],[139,239,235,170,226,34,68,69],[250,40,32,170,42,190,255,213],[130,234,182,162,170,138,0,21],[170,136,34,62,170,34,255,253],[168,191,168,160,131,234,162,35],[175,160,170,175,170,14,186,233],[168,42,42,234,170,224,130,37],[163,171,162,0,34,63,187,181],[190,34,63,127,254,138,160,133],[162,234,160,16,34,40,189,85],[138,170,175,213,226,238,165,125],[248,162,40,84,34,8,8,37],[130,43,171,85,163,235,251,169],[175,234,33,20,130,9,1,15],[160,66,173,246,174,253,125,97],[191,94,32,162,32,5,69,45],[162,75,234,43,238,213,21,105],[168,106,42,238,2,17,68,37],[175,202,130,2,171,95,95,141],[168,154,254,190,171,113,18,213],[130,2,0,128,2,4,70,5],[255,255,255,255,255,255,255,255]];var aspect=[];var view=[];var exitx=24,exity=57,xpos,ypos,dir,mapon,steps,cheats;function start(){xpos=1;ypos=1;dir=2;steps=0;cheats=0;setTimeout("draw()",100)}function getGrid(a,b){if(a<0||a>30||b<0||b>63){return true}if(((map[a][Math.floor(b/8)])&(128>>>(b%8)))>0){return true}return false}function render(b,a,d){var c;for(c=0;c<14;++c){view[c]=view[c].substr(0,b)+d[c]+view[c].substr(b+a,27-b-a)}}function draw(){var e;mapon=false;switch(dir){case 0:aspect=[getGrid(xpos,ypos-1),getGrid(xpos,ypos+1),getGrid(xpos-1,ypos-1),getGrid(xpos-1,ypos),getGrid(xpos-1,ypos+1),getGrid(xpos-2,ypos-1),getGrid(xpos-2,ypos),getGrid(xpos-2,ypos+1),getGrid(xpos-3,ypos-1),getGrid(xpos-3,ypos),getGrid(xpos-3,ypos+1),getGrid(xpos-4,ypos)];e=(xpos==exitx+1&&ypos==exity);break;case 1:aspect=[getGrid(xpos-1,ypos),getGrid(xpos+1,ypos),getGrid(xpos-1,ypos+1),getGrid(xpos,ypos+1),getGrid(xpos+1,ypos+1),getGrid(xpos-1,ypos+2),getGrid(xpos,ypos+2),getGrid(xpos+1,ypos+2),getGrid(xpos-1,ypos+3),getGrid(xpos,ypos+3),getGrid(xpos+1,ypos+3),getGrid(xpos,ypos+4)];e=(xpos==exitx&&ypos==exity-1);break;case 2:aspect=[getGrid(xpos,ypos+1),getGrid(xpos,ypos-1),getGrid(xpos+1,ypos+1),getGrid(xpos+1,ypos),getGrid(xpos+1,ypos-1),getGrid(xpos+2,ypos+1),getGrid(xpos+2,ypos),getGrid(xpos+2,ypos-1),getGrid(xpos+3,ypos+1),getGrid(xpos+3,ypos),getGrid(xpos+3,ypos-1),getGrid(xpos+4,ypos)];e=(xpos==exitx-1&&ypos==exity);break;case 3:aspect=[getGrid(xpos+1,ypos),getGrid(xpos-1,ypos),getGrid(xpos+1,ypos-1),getGrid(xpos,ypos-1),getGrid(xpos-1,ypos-1),getGrid(xpos+1,ypos-2),getGrid(xpos,ypos-2),getGrid(xpos-1,ypos-2),getGrid(xpos+1,ypos-3),getGrid(xpos,ypos-3),getGrid(xpos-1,ypos-3),getGrid(xpos,ypos-4)];e=(xpos==exitx&&ypos==exity+1);break}view=["\\                         /","  \\                     /  ","    \\                 /    ","      \\             /      ","        \\         /        ","          \\     /          ","            \\ /            ","            / \\            ","          /     \\          ","        /         \\        ","      /             \\      ","    /                 \\    ","  /                     \\  ","/                         \\"];if(!aspect[0]){render(0,3,["   ","==\\","..|","..|","..|","..|","..|","..|","..|","..|","..|","..|","==/","   "])}if(!aspect[1]){render(24,3,["   ","/==","|..","|..","|..","|..","|..","|..","|..","|..","|..","|..","\\==","   "])}if(!aspect[2]){render(2,5,["     ","\\    ","|    ","|===\\","|...|","|...|","|...|","|...|","|...|","|...|","|===/","|    ","/    ","     "])}if(!aspect[4]){render(20,5,["     ","    /","    |","/===|","|...|","|...|","|...|","|...|","|...|","|...|","\\===|","    |","    \\","     "])}if(aspect[3]){render(2,23,["                       ","=======================",".......................",".......................",".......................",".......................",".......................",".......................",".......................",".......................",".......................",".......................","=======================","                       "])}else{if(!aspect[5]){render(6,3,["   ","   ","   ","\\  ","|=\\","|.|","|.|","|.|","|.|","|=/","/  ","   ","   ","   "])}if(!aspect[7]){render(18,3,["   ","   ","   ","  /","/=|","|.|","|.|","|.|","|.|","\\=|","  \\","   ","   ","   "])}if(aspect[6]){if(e){render(6,15,["               ","               ","               ","===============",".             .",". *********** .",". THE WAY OUT .",". *********** .",".             .",".             .","===============","               ","               ","               "])}else{render(6,15,["               ","               ","               ","===============","...............","...............","...............","...............","...............","...............","===============","               ","               ","               "])}}else{if(!aspect[8]){render(8,3,["   ","   ","   ","   ","\\  ","|=\\","|.|","|.|","|=/","/  ","   ","   ","   ","   "])}if(!aspect[10]){render(16,3,["   ","   ","   ","   ","  /","/=|","|.|","|.|","\\=|","  \\","   ","   ","   ","   "])}if(aspect[9]){render(8,11,["           ","           ","           ","           ","===========","...........","...........","...........","...........","===========","           ","           ","           ","           "])}else{if(aspect[11]){render(10,7,["       ","       ","       ","       ","       ","=======",".......",".......","=======","       ","       ","       ","       ","       "])}}}}var b="";var a;for(a=0;a<14;++a){b=b+"  "+view[a]+"  \n"}if(document.layers){document.layers.viewport.document.open();document.layers.viewport.document.write("<pre>"+b+"</pre>");document.layers.viewport.document.close()}else{viewport.innerHTML="<pre>"+b+"</pre>"}var d=Math.floor(Math.sqrt((xpos-exitx)*(xpos-exitx)+(ypos-exity)*(ypos-exity)));var c=", exit lies "+d+" steps to ";if(xpos>exitx){c+="north"}if(xpos<exitx){c+="south"}if(ypos>exity){c+="west"}if(ypos<exity){c+="east"}if(document.layers){document.layers.readout.document.open();document.layers.readout.document.write("Facing "+["north","east","south","west"][dir]+c);document.layers.readout.document.close()}else{readout.innerHTML="Facing "+["north","east","south","west"][dir]+c}}function turn(a){dir+=a;if(dir<0){dir=3}if(dir>3){dir=0}draw()}function move(){if(!aspect[3]){switch(dir){case 0:xpos--;break;case 1:ypos++;break;case 2:xpos++;break;case 3:ypos--;break}steps++;draw();if(xpos==exitx&&ypos==exity){alert("Well done! you reached the exit in "+steps+" steps,\nand you looked at the map "+cheats+" times.\nPress OK to see if you can do any better.");start()}}}function cheat(){if(mapon){draw()}else{var a,c,b="";for(a=xpos-10;a<xpos+10;++a){for(c=ypos-10;c<ypos+10;++c){if(getGrid(a,c)){b=b+"X"}else{if(a==xpos&&c==ypos){if(document.layers){b=b+"*"}else{b=b+["↑","→","↓","←"][dir]}}else{if(a==exitx&&c==exity){if(document.layers){b=b+"@"}else{b=b+"θ"}}else{b=b+" "}}}}b=b+"\n"}if(document.layers){document.layers.viewport.document.open();document.layers.viewport.document.write("<pre>"+b+"</pre>");document.layers.viewport.document.close()}else{viewport.innerHTML="<pre>"+b+"</pre>"}mapon=true;cheats++}}start();
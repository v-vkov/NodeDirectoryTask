const {createFolder, createStudent, picsAdd} = require('./funcs');

createFolder("jscx-1800");
createStudent("jscx-1800", "KovalenkoV", "First name: Viktoria; Second name: Kovalenko; age:23; city: Lviv");
createStudent("jscx-1800", "BakunY", "First name: Yulia; Second name: Bakun; age:22; city: Lviv");
createStudent("jscx-1800", "ShvetsO", "First name: Olena; Second name: Shvets; age:24; city: Lviv");

createFolder("jscx-2000");
createStudent("jscx-2000", "PidhirniakO", "First name: Oleh; Second name: Pidhirniak; age:23; city: Lviv");
createStudent("jscx-2000", "BlablaM", "First name: Maria; Second name: Blabla; age:30; city: Kyiv");
createStudent("jscx-2000", "ButsD", "First name: Daria; Second name: Buts; age:70; city: Lviv");

picsAdd(`./photos/kov.jpg`, `./jscx-1800/KovalenkoV/kov.jpg`);
picsAdd(`./photos/bakun.jpg`, `./jscx-1800/BakunY/bakun.jpg`);
picsAdd(`./photos/blabla.jpg`, `./jscx-2000/BlablaM/blabla.jpg`);

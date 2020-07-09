# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Land.create([
	{ name: "Eastern Kingdoms", description: "The Eastern Kingdoms (occasionally called Azeroth[1][2][3][4][5][6][7] or the Old World[8]) are the eastern continents on the world of Azeroth.[9] The Eastern Kingdoms is made up from a group of smaller continents (Azeroth, Khaz Modan and Lordaeron) formed from the original continent of Kalimdor following the Great Sundering. The Eastern Kingdoms lie to the east of the Great Sea and to the west of the Forbidding Sea. The central part of the Eastern Kingdoms is dominated by the mountains of Khaz Modan and the Redridge Mountains. Both cover several zones. The Eastern Kingdom's western counterpart is the continent of Kalimdor." },
	{ name: "Kalimdor", description: "Kalimdor [ˈkælɪmdɔɹ] (Titan and Darnassian for land of eternal starlight)[1] is one of the main continents of Azeroth. It is located to the west of the Eastern Kingdoms, southwest of Northrend and northwest of Pandaria. The Great Sea lies in between the continents. Kalimdor is home to the night elves, orcs, tauren, trolls, and draenei. Other races present include the ogres, centaur, naga, demons, and other, more minor races."},
	{ name: "Northrend", description: "Northrend is the northern, icy continent of the world of Azeroth, and the source of the evil Scourge. It is also the home of Icecrown Citadel, the seat of the malevolent Lich King."},
	{ name: "Pandaria", description: "Pandaria ([pɛnˈdɑɹiə], pronunciation with pandaren accent) is the homeland of the pandaren and birthplace of their ancient empire. Located in the southern part of Azeroth,[1] Pandaria was shrouded by a magical mist by its last emperor after the Great Sundering ten thousand years ago, and thus disappeared into myth and legend. Only those pandaren who left their homeland on the back of the great turtle Shen-zin Su, including the renowned pandaren brewmasters,[3] have been seen outside of their homeland since; some even came to the aid of the other races during the Third War." },
	{ name: "The Broken Isles", description: "The Broken Isles are a chain of islands located northeast of the raging Maelstrom. Littered with ancient elven ruins, they contain notably the mighty nightborne city of Suramar as well as the long-lost Tomb of Sargeras. The third invasion of the Burning Legion commenced when the sealed portal inside the Tomb was opened again by Gul'dan from the alternate universe." }
	])
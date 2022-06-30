DROP TABLE IF EXISTS project;

      CREATE TABLE project (
        `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        `type` VARCHAR(200) NOT NULL,
        `sector` VARCHAR(200) NOT NULL,
        `city` VARCHAR(50) NOT NULL,
        `description` TEXT NOT NULL,
        `tech1` VARCHAR(50) NOT NULL,
        `tech2` VARCHAR(50) NOT NULL,
        `tech3` VARCHAR(50) NOT NULL
      );

INSERT INTO project(name, type, sector, city, description, tech1, tech2, tech3) 
VALUES
('Rocket League', 'Mobile App', 'Bank', 'Lyon','Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for Microsoft Windows and PlayStation 4 in July 2015, with ports for Xbox One and Nintendo Switch being released later on.', 'JavaScript', 'React', 'Node'),
('Rasta Rocket', 'Website', 'Bank', 'Amsterdam', 'Cool Runnings is a 1993 American sports film directed by Jon Turteltaub and starring Leon Robinson, Doug E. Doug, Malik Yoba, and John Candy (in his last movie released during his lifetime). It is loosely based on the true story of the Jamaica national bobsleigh teams debut in competition during the 1988 Winter Olympics.', 'Java', 'JavaScript', 'React'),
('Team Rocket', 'Data dashboard', 'Industry', 'Strasbourg', 'Team Rocket/Neo Team Rocket (ロケット団, Roketto-dan, Rocket Gang) is the crime syndicate in Kanto and Johto. In Pokémon Red, Blue, Green and Yellow and their remakes, Pokémon FireRed, LeafGreen, Lets Go, Pikachu! and Lets Go, Eevee!, they desire to exploit Pokémon to further their goal of world domination. In Pokémon Gold, Silver and Crystal and their remakes, Pokémon HeartGold and SoulSilver, they seek to find and bring Giovanni back to lead. In the Pokémon Adventures manga, they seek to create Arceus to complete their goals.', 'JavaScript', 'React', 'Java'),
('Rocket of tennis', 'Responsive app', 'Sport', 'Paris', 'A racket, or racquet,[1] is a sports implement used for striking a ball or shuttlecock in games such as squash, tennis, racquetball, badminton and padel. In the strictest sense a racket consists of a handled frame with an open hoop across which a network of strings is stretched tightly. Some rackets may have a solid or perforated hitting surface instead of a network of strings. Such rackets may be called a paddle or bat. Collectively, these games are known as racket sports.', 'Java', 'PHP', 'JavaScript'),
('Rocket 🥬', 'Software', 'Agro', 'Nantes', 'Eruca vesicaria is an annual plant growing to 20 to 100 centimetres (8 to 40 inches) in height. The pinnate leaves are deeply lobed with four to ten small lateral lobes and a large terminal lobe. The flowers are 2 to 4 cm (3⁄4 to 1+1⁄2 in) in diameter, arranged in a corymb, with the typical Brassicaceae flower structure. The petals are creamy white with purple veins, and the stamens yellow. The fruit is a siliqua (pod) 12 to 25 mm (1⁄2 to 1 in) long with an apical beak, containing several seeds (which are edible). The species has a chromosome number of 2n = 22', 'PHP', 'JavaScript', 'Java');
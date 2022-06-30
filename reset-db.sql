DROP TABLE IF EXISTS technosProject;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS technos;


        CREATE TABLE technos (
        `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
        `name` VARCHAR(100) NOT NULL
      );

      CREATE TABLE project (
        `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        `type` VARCHAR(200) NOT NULL,
        `sector` VARCHAR(200) NOT NULL,
        `city` VARCHAR(50) NOT NULL,
        `description` TEXT NOT NULL
      );


        CREATE TABLE technosProject (
        `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
        `technos_id` INTEGER NOT NULL,
        `project_id` INTEGER NOT NULL,
        FOREIGN KEY (technos_id) REFERENCES technos(id),
        FOREIGN KEY (project_id) REFERENCES project(id)
      );

INSERT INTO technos(name) 
VALUES
('JavaScript'),
('Python'),
('Java'),
('C++'),
('React'),
('PHP'),
('Vue'),
('Angular'),
('Symfony'),
('GitHub'),
('Firebase'),
('Node'),
('Amazon');


INSERT INTO project(name, type, sector, city, description) 
VALUES
('Rocket League', 'Mobile App', 'Bank', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam mi, lobortis nec luctus sit amet, semper vitae mi. Vestibulum non dignissim metus. Sed vel tortor dui. Praesent sit amet velit neque. Donec ullamcorper, diam quis aliquet dapibus, risus velit lacinia ipsum, vel ultricies augue felis et augue. Cras eleifend felis in ligula consectetur'),
('Rasta Rocket', 'Website', 'Bank', 'Amsterdam', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam mi, lobortis nec luctus sit amet, semper vitae mi. Vestibulum non dignissim metus. Sed vel tortor dui. Praesent sit amet velit neque. Donec ullamcorper, diam quis aliquet dapibus, risus velit lacinia ipsum, vel ultricies augue felis et augue. Cras eleifend felis in ligula consectetur'),
('Team Rocket', 'Data dashboard', 'Industry', 'Strasbourg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam mi, lobortis nec luctus sit amet, semper vitae mi. Vestibulum non dignissim metus. Sed vel tortor dui. Praesent sit amet velit neque. Donec ullamcorper, diam quis aliquet dapibus, risus velit lacinia ipsum, vel ultricies augue felis et augue. Cras eleifend felis in ligula consectetur'),
('Rocket of tennis', 'Responsive app', 'Sport', 'Paris', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam mi, lobortis nec luctus sit amet, semper vitae mi. Vestibulum non dignissim metus. Sed vel tortor dui. Praesent sit amet velit neque. Donec ullamcorper, diam quis aliquet dapibus, risus velit lacinia ipsum, vel ultricies augue felis et augue. Cras eleifend felis in ligula consectetur'),
('Rocket 🥬', 'Software', 'Agro', 'Nantes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam mi, lobortis nec luctus sit amet, semper vitae mi. Vestibulum non dignissim metus. Sed vel tortor dui. Praesent sit amet velit neque. Donec ullamcorper, diam quis aliquet dapibus, risus velit lacinia ipsum, vel ultricies augue felis et augue. Cras eleifend felis in ligula consectetur');


INSERT INTO technosProject(project_id, technos_id) 
VALUES
('1', '1'),
('1', '5'),
('1', '12'),
('2', '2'),
('2', '1'),
('2', '13'),
('3', '4'),
('3', '5'),
('3', '11'),
('3', '7'),
('4', '8'),
('4', '3'),
('4', '11'),
('4', '9'),
('5', '6'),
('5', '4'),
('5', '10'),
('5', '7');
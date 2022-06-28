DROP TABLE IF EXISTS posts;
      CREATE TABLE posts (
        `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
        `content` VARCHAR(255) NOT NULL,
        `date` VARCHAR(20),
        `hour` VARCHAR(20)
      );

INSERT INTO posts(content, date, hour) 
VALUES
('consectetur adipiscing elit. Mauris ornare, nunc nec rhoncus iaculis, sem lorem vestincidunt ut nibh at blandit. Sed et enim sollic.', '25/02/2020', '15:40'),
('Lorem ipsum dolor sit amet', '25/02/2020', '15:45'),
('Praesent lacinia facilisis elit, at dapibus diam ullamcorper nec. Vivamus ac tincidunt tortor', '25/02/2020', '15:47'),
('Aenean ullamcorper lorem ullamcorper scelerisque elementum. Ut at est sed dui sollicitudin finibus. Fusce vel risus dolor. Aenean ac nisl ', '25/02/2020', '15:50'),
('Fusce ac tincidunt est. In ac lobortis orci, vel accumsan diam.', '25/02/2020', '15:52'),
('Sed porttitor neque purus, vel tincidun', '25/02/2020', '15:53'),
('Aenean', '26/02/2020', "09:20"),
('Sed porttitor neque purus, vel tincidunt ex vestibulum hendrerit. Aliquam', '26/02/2020', "09:25"),
('ornare condimentum tincidunt. Fusce', '26/02/2020', "09:30"),
('dolor. Nulla cursus efficitur dignissim. Nam porttitor posuere gravida. Maecenas nec porttitor felis', '26/02/2020', "09:35"),
('Fusce ac tincidunt est', '26/02/2020', "09:40"),
('Lorem ipsum dolor efficitur dignissim. Nam porttitor posuere gravida', '26/02/2020', "09:45");
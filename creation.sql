DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS updates;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(150) NOT NULL
);

CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    description VARCHAR(300) NOT NULL,
    author INT NOT NULL REFERENCES users(id),
    start_date VARCHAR(200) NOT NULL,
    budget VARCHAR(200) NOT NULL,
    FOREIGN KEY (author) REFERENCES users(id)
);

CREATE TABLE updates(
    id SERIAL PRIMARY KEY,
    project_id INT REFERENCES projects(id),
    title VARCHAR(150) NOT NULL,
    update_details VARCHAR(1500) NOT NULL,
    author INT REFERENCES users(id),
    update_date VARCHAR(200) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (author) REFERENCES users(id)
);

INSERT INTO users(name, email, password) VALUES ('Kayvia', 'email@email.com', 'password');
INSERT INTO users (name, email, password)
VALUES
  ('John Smith', 'johnsmith@example.com', 'password123'),
  ('Jane Doe', 'janedoe@example.com', 'password456'),
  ('Michael Johnson', 'michaeljohnson@example.com', 'password789'),
  ('Emily Davis', 'emilydavis@example.com', 'passwordabc'),
  ('David Wilson', 'davidwilson@example.com', 'passworddef'),
  ('Sarah Thompson', 'sarahthompson@example.com', 'passwordghi'),
  ('Robert Martinez', 'robertmartinez@example.com', 'passwordjkl'),
  ('Jennifer Clark', 'jenniferclark@example.com', 'passwordmno'),
  ('Daniel Lee', 'daniellee@example.com', 'passwordpqr'),
  ('Jessica Wright', 'jessicawright@example.com', 'passwordstu');

INSERT INTO projects (title, description, author, start_date, budget)
VALUES
  ('Carbon Dioxide Waste Management Project', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1, '2022-01-01', '$100,000'),
  ('Renewable Energy Research Project', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 2, '2022-03-15', '$150,000'),
  ('Sustainable Agriculture Initiative', 'Integer vel convallis velit. Vivamus eu eleifend metus.', 3, '2022-02-10', '$80,000'),
  ('Clean Water Supply Project', 'Quisque et semper augue, nec dignissim justo.', 4, '2022-04-20', '$120,000'),
  ('Waste Recycling Program', 'Fusce pharetra elit sed iaculis auctor.', 5, '2022-06-05', '$90,000'),
  ('Green Building Construction', 'Sed auctor felis id arcu rhoncus, sed finibus enim venenatis.', 6, '2022-07-12', '$200,000'),
  ('Forest Conservation Initiative', 'Nulla consequat, lacus sed consequat laoreet, est urna luctus lorem, a pharetra dolor risus nec libero.', 7, '2022-05-18', '$150,000'),
  ('Air Pollution Control Project', 'Donec rhoncus faucibus lorem, vel lacinia ante mattis sit amet.', 8, '2022-08-30', '$100,000'),
  ('Eco-Friendly Transportation System', 'Proin fermentum mi at metus convallis, vitae sollicitudin dui gravida.', 9, '2022-09-25', '$180,000'),
  ('Biodiversity Conservation Program', 'Vivamus sem ex, dapibus sed augue vel, consequat maximus neque.', 10, '2022-07-01', '$130,000');

INSERT INTO projects (title, description, author, start_date, budget)
VALUES
  ('Carbon Dioxide Waste Management Project', 'Developing a state-of-the-art waste management system to capture and recycle carbon dioxide emissions from industrial sources.', 1, '2022-01-01', '$100,000'),
  ('Renewable Energy Research Project', 'Conducting research on new renewable energy sources such as solar and wind power to identify efficient and sustainable solutions for clean energy generation.', 2, '2022-03-15', '$150,000'),
  ('Sustainable Agriculture Initiative', 'Implementing sustainable farming practices and technologies to minimize environmental impact and promote long-term food security.', 3, '2022-02-10', '$80,000'),
  ('Clean Water Supply Project', 'Improving access to clean and safe drinking water by implementing water treatment and distribution systems in underserved communities.', 4, '2022-04-20', '$120,000'),
  ('Waste Recycling Program', 'Establishing a comprehensive waste recycling program to reduce landfill waste and promote recycling and waste management practices in the community.', 5, '2022-06-05', '$90,000'),
  ('Green Building Construction', 'Constructing energy-efficient and environmentally friendly buildings that incorporate sustainable materials, renewable energy systems, and efficient resource usage.', 6, '2022-07-12', '$200,000'),
  ('Forest Conservation Initiative', 'Preserving and protecting vulnerable forest ecosystems through measures such as reforestation, biodiversity conservation, and sustainable forest management practices.', 7, '2022-05-18', '$150,000'),
  ('Air Pollution Control Project', 'Implementing strategies and technologies to reduce air pollution levels and improve air quality in urban areas through emissions control and pollution monitoring.', 8, '2022-08-30', '$100,000'),
  ('Eco-Friendly Transportation System', 'Developing and promoting sustainable transportation options such as electric vehicles, public transit systems, and cycling infrastructure to reduce carbon emissions and congestion.', 9, '2022-09-25', '$180,000'),
  ('Biodiversity Conservation Program', 'Preserving and restoring biodiversity by protecting endangered species, conserving habitats, and promoting sustainable practices that ensure the long-term survival of diverse ecosystems.', 10, '2022-07-01', '$130,000');


INSERT INTO updates (project_id, title, update_details, author, update_date) VALUES (1, 'Milestone: Successful Prototype Testing', 'We have successfully completed testing of the carbon dioxide capture prototype, demonstrating its efficiency and effectiveness in capturing emissions from industrial sources.', 1, '2022-02-15'),
  (1, 'Budget Update: Additional Funding Secured', 'We are pleased to announce that we have secured additional funding from a grant program, enabling us to expand the scope of our project and accelerate its implementation.', 1, '2022-03-22'),
  (2, 'Research Findings: Solar Energy Potential', 'Our research team has identified several promising locations for solar energy installations, with an estimated solar potential of up to 5 megawatts in the selected sites.', 2, '2022-04-10'),
  (2, 'Project Collaboration: Partnership with Research Institute', 'We are excited to announce a new partnership with a renowned research institute that will enhance our research capabilities and contribute valuable expertise to our renewable energy project.', 2,  '2022-04-10');

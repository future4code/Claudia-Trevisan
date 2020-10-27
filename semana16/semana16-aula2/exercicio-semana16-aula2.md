### Exercicio 1
a) altera a tabela Actor "derrubando" a coluna salary.  
b) altera a tabela Actor mudando a declaração da coluna gender para sex + o tipo que permaneceu o mesmo.  
c) altera a tabela Actor mudando a declaração da coluna gender para nome (que permaneceu o mesmo) + VARCHAR(255) (alterando apenas o tipo - o limite de caracteres - no caso).  
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);  

### Exercicio 2
a) UPDATE actor SET name = "Giulia Gum", birth_date = "1979-09-12" WHERE id = "003";  
b) UPDATE actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes";  
UPDATE actor SET name = "Juiana Paes" WHERE name = "JULIANA PÃES";  
c) UPDATE actor SET name = "Ricardo Tozzi", salary = 150000, birth_date = "1982-02-22", gender = "male" WHERE id = "005"; 
d) UPDATE actor SET name = "Luluzinha" WHERE id = "111"; Não retorna nenhum erro apenas informa que nenhuma linha foi afetada pois o id não foi encontrado.  

### Exercicio 3
a) DELETE FROM actor WHERE name = "Fernanda Montenegro";  
b) DELETE FROM actor WHERE gender = "male" AND salary > 1000000;  

### Exercicio 4
a) SELECT MAX(salary) FROM actor;  
b) SELECT MIN(salary) FROM actor WHERE gender = "female";  
c) SELECT COUNT(*) FROM actor WHERE gender = "female";  
d) SELECT SUM(salary) FROM actor;  

### Exercicio 5
a) ele solicita a media dos salarios e os generos, agrupados por genero .  
b) SELECT id, name FROM actor ORDER BY name DESC; 
c) SELECT * FROM actor ORDER BY salary;   
d) SELECT * FROM actor ORDER BY salary DESC LIMIT 3;  
e) SELECT AVG(salary), gender FROM actor GROUP BY gender;  

### Exercicio 6
a) ALTER TABLE movies ADD playing_limit_date DATE;  
b) ALTER TABLE movies CHANGE rate rate FLOAT NOT NULL;  
c) UPDATE movies SET playing_limit_date = "2020-10-31" WHERE title = "Dona flor e seus dois maridos"; UPDATE movies SET playing_limit_date = "2019-10-31" WHERE title = "Se eu fosse você";  
d) DELETE FROM movies WHERE id = 4; UPDATE movies SET sinopse = "lalalalala" WHERE id = 4; Não apresentou erro apenas informou que nenhuma linha foi afetada.  

### Exercicio 7
a) SELECT COUNT(*) FROM movies WHERE rate > 7.5;  
b) SELECT AVG(rate) FROM movies;  
c) SELECT COUNT(*) FROM movies WHERE playing_limit_date > CURDATE();  
d) SELECT COUNT(*) FROM movies WHERE date_release > CURDATE();  
e) SELECT MAX(rate) FROM movies;  
f) SELECT MIN(rate) FROM movies;  

### Exercicio 8
a) SELECT * FROM movies ORDER BY title;  
b) SELECT * FROM movies ORDER BY title DESC LIMIT 5;  
c) SELECT * FROM movies ORDER BY date_release DESC LIMIT 3;  
d) SELECT * FROM movies ORDER BY rate DESC LIMIT 3;  


 
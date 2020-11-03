### Exercicio 1
a) Uma PRIMARY KEY pertencente a outra tabela que é usada para se vincular à que "visita".  
b) INSERT INTO rating VALUES ("A", "Achei muito divertido mas um pouco elitista pois senti falta de pessoas pretas, no minimo...", 6.2, 1);  
c) Ele retorna que não pode realizar a ação pois a chave estrangeira "falhou" em ser localizada.  
d) ALTER TABLE movies DROP COLUMN rate;  
e) Não permite pois existe uma restrição de chave estrangeira que impede a deleção, estando o filme relacionado a outra tabela.  

### Exercicio 2
a) Se trata de uma tabela de junção e é feita para representar a relação entre muitos de uma tabela (movies) e muitos de outra tabela (actor).  
b) INSERT INTO MovieCast VALUES
	(1, "001"), (1, "002"), (2, "003"), (3, "004");  
c) Informa que não foi possivel realizar a ação pois a chave estrangeira não foi encontrada.  
d) Não é permitido pois a chave estrangeira restringe quando um esta relacionado com alguma oura tabela.  

### Exercicio 3
a) seleciona tudo da tabela Movie e da tabela Rating relacionando-as onde na tabela Movie, a coluna id é igual, na tabela Rating, à coluna movie_id (no caso, os valores das linhas contidas nas colunas especificadas).  
b) SELECT movies.title, movies.id, Rating.rate FROM movies
JOIN Rating ON movies.id = Rating.movie_id; 

### Exercicio 4   
a) SELECT movies.title, movies.id, Rating.rate, Rating.comment FROM movies LEFT JOIN Rating ON movies.id = Rating.id;  
b) SELECT movies.id, movies.title, MovieCast.actor_id FROM movies RIGHT JOIN MovieCast ON MovieCast.movie_id = movies.id;  
c) SELECT AVG(Rating.rate), movies.id, movies.title FROM movies LEFT JOIN Rating ON movies.id = Rating.movie_id
GROUP BY (movie.id);

### Exercicio 5
a) porque se trata de 3 tabelas sendo que uma une as duas.  
b) SELECT m.id as movie_id, m.title as title, a.id as actor_id, a.name as name FROM movies m LEFT JOIN MovieCast mc ON m.id = mc.movie_id JOIN actor a ON a.id = mc.actor_id;  
c) coluna m desconhecida.  
d) SELECT m.title as title, a.name as name, r.rate, r.comment
FROM movies m 
LEFT JOIN MovieCast mc 
ON m.id = mc.movie_id 
JOIN actor a 
ON a.id = mc.actor_id
RIGHT JOIN Rating r
ON r.movie_id = m.id;

### Exercicio 6
a) Acredito que seja 1:N (---Vi as dicas depois e percebi que errei essa questão e consquentemente a forma como criei a tabela---).  
b) CREATE TABLE Premiere (
	id INT(11),
	movie_id INT(11),
	name_oscar VARCHAR(255),
    date_win DATE,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);  
c) INSERT INTO Premiere VALUES
(123, 1, "Melhor direção", "2013-03-12"), (456, 1, "Melhor roteiro", "2013-03-12"),
(789, 2, "Melhor sonoplastia", "1998-05-11"), (321, 2, "Melhor caracterização", "1998-05-11"),
(654, 3, "Melhor roteiro", "2002-04-13"), (987, 3, "Melhor sonoplastia", "2002-04-13");  
d) SELECT m.title as title, p.name_oscar as oscar, p.date_win as date
FROM movies m
LEFT JOIN Premiere p
ON m.id = p.movie_id;
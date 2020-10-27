### Exercicio 1
a) o VARCHAR representa uma sring, Primary Key um elemento not null e não repetido. NOT NULL um elemento que não pode estar em branco, deve sempre ter um valor, DATE representa tipo data.  
B) O SHOW DATABASES mostrou os bancos de dados que estou acessando e o SHOW TABLES mostrou a tabela que acabei de criar, actor.  
c) Mostrou a descrição da tabela, com nome das colunas, tipos, se é nulo ou não e se é PK ou não.

### Exercicio 2
b) Entrada duplicada para a coluna de chave primaria. O erro aconteceu por se tratar de um valor tipo primary key, onde nunca deve se repetir na tabela.  
c) A quantidade de colunas não combina com a quantidade descrita na linha 1. POis na linha 1 contem apenas 3 colunas e a tabela contem 5.  
d) reclama que o item name não pode ser nulo.  
e) reclama pois o tipo do item não corresponde ao inserido, o tipo declarado é VARCHAR e o inserido é INT(?)

### Exercicio 3
a) SELECT * FROM actor WHERE gender = "female"  
b) SELECT salary FROM actor WHERE name = "Tony Ramos"  
c) SELECT * FROM actor WHERE gender = "invalid". Retornou a tabela vazia pois todos as informações da coluna gender são validos.  
d) SELECT id, name, salary FROM actor WHERE salary <= 500000.  
e) aconteceu porquê a coluna nome é desconhecida para o banco de dados. SELECT id, name from Actor WHERE id = "002"

### Exercicio 4
a) Foi usado operadores logicos para buscar um resultado especifico onde a primeira letra do nome deve ser A ou J e o salario menor que 300.000.  
b) SELECT * FROM actor WHERE name NOT LIKE "A%" AND salary > 350000.  
c) SELECT * FROM actor WHERE name LIKE "%G%" OR "%g%"  
d) SELECT * FROM actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000

### Exercicio 5
a) CREATE TABLE movies (  
	id INT PRIMARY KEY,  
    title VARCHAR(255) NOT NULL,  
    sinopse TEXT NOT NULL,  
    date_release DATE NOT NULL,  
    rate TINYINT NOT NULL
)  Nessa query criei uma tabela com 5 colunas, onde a primeira é um id do tipo numeral inteiro e primary key (ou seja, não se repete nunca), a segunda coluna é o titulo do tipo string com no maximo 255 caracteres, a terceira sinopse do tipo text que não tem limite de caracteres, data de lançamento do tipo date e avaliação do tipo numero pequeno. Todos not null pois são campos que requeridos.

### Exercicio 6
a) SELECT id, title, rate FROM movies WHERE id = 002  
b) SELECT * FROM movies WHERE title = "Bicho de sete cabeças"  
c) SELECT id, title, sinopse FROM movies WHERE rate >= 7

### Exercicio 7
a) SELECT * FROM movies WHERE title LIKE "%vida%"  
b) SELECT * FROM movies WHERE title LIKE "%vida%" or sinopse LIKE "%vida%"  
c) SELECT * FROM movies WHERE date_release < CURDATE()  
d)SELECT * FROM movies WHERE date_release < CURDATE() AND (title LIKE "%vida%" or sinopse LIKE "%vida%") AND rate > 7
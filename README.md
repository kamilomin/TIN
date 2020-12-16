TIN

Definicja projektu i diagram klas znajduje się w TIN_MP1

Pełna wersja strony znajduje się w tin_projekt_krogowski_s17911

	Uruchomienie:
	
	1. Włączyć bazę danych np w dockerze przechodząc do tin_projekt_krogowski_s17911/backend i poleceniem docker-compose up uruchomić kontener.
	2. Włączyć aplikacje, w powershellu przejść do głównego folderu projektu (tin_projekt_krogowski_s17911) wpisać polecenie npm start.
	3. Otwórz w przeglądarce stronę http://localhost:3000/


## Uruchomienie
Przejdź do katalogu backend 
```
$ cd ../tin_projekt_krogowski_s17911/backend
```
Uruchom kontener dockera
```
$ docker-compose up
```
Zamiast dockera możesz użyć po prostu bazy danych MySql na porcie 3306, jeżeli występują problemy sprawdź czy na pewno masz stworzony schemat bazy o nazwie tin-example-sequelize
nazwa: root hasło: toor
Możesz je zmienić w: cd ../tin_projekt_krogowski_s17911/backend/config/sequelize

Przejdź do katalogu głównego projektu
```
$ cd ../tin_projekt_krogowski_s17911
```
Zainstaluj npm
```
$ npm install
```
Uruchom npm
```
$ npm start
```

Przejdź do strony 
http://localhost:3000/



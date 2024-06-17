# Symulator Kasyna Internetowego - Praca inyznierska

Ten projekt jest symulatorem kasyna internetowego, zbudowanym w ramach pracy inżynierskiej. Aplikacja składa się z front-endu opracowanego w Vue.js oraz back-endu zbudowanego przy użyciu Node.js, Express.js oraz baza danych w MongoDB. Poniżej znajdują się instrukcje dotyczące konfiguracji i uruchomienia obu części aplikacji.

## Wymagania Wstępne
- Zainstalowany Node.js
- Zainstalowany NPM
- Zainstalowany MongoDB

## Instrukcja instalacji
### Baza danych
Zainstaluj MongoDB, następnie odpal proces

### Back-end
Przejdź do katalogu "backend" i zainstaluj zależności:

```sh
cd ./backend
npm install
```

### Front-end
Przejdź do katalogu "frontend" i zainstaluj zależności:

```sh
cd ./frontend
npm install
```
## Instrukcja odpalenia
### Back-end
Przejdź do katalogu "backend" i odpal:

```sh
cd ./backend
node server.js
```
Server będzie dostępny pod adresem: http://localhost:3000

### Front-end
Przejdź do katalogu "frontend" i odpal:

```sh
cd ./frontend
npm run serve
```
Aplikacja będzie dostępny pod adresem: http://localhost:8080

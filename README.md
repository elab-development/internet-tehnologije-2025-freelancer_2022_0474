# Freelancer Platform "UPWORK"

Web aplikacija za povezivanje frilensera i klijenata.

## Tehnologije

### Frontend
- React (Vite)
- React Router
- Axios
- Formik & Yup
- CSS

### Backend
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT autentifikacija
- Multer (upload slika)
- Helmet & CORS zaštita
- Swagger API dokumentacija

## Api dokumentacija

Swagger dokumentacija dostupna na: 
https://localhost:5000/api-docs

## Pokretanje projekta

### Kloniranje
git clone https://github.com/elab-development/internet-tehnologije-2025-freelancer_2022_0474.git

### Backend
-cd freelancer-platform-backend
-npm install
-Kreirati .env.local fajl:
    JWT_SECRET=tajna123
    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASSWORD=root123
    DB_NAME=freelancer_platform
    DB_PORT=3306
-Kreirati .env fajl:
    JWT_SECRET=tajna123

-npm run dev

### Frontend
cd freelancer-platform-frontend
npm install
npm run dev

### Pokretanje preko Docker-a
-docker compose up

## Funkcionalnosti
- Registracija i prijava korisnika
- Objavljivanje poslova
- Objavljivanje freelancer profila
- Brisanje poslova
- Brisanje freelancer profila
- Filtrirana pretraga poslova
- Filtrirana pretraga freelancer-a
- Upload slika
- Admin panel
- Newsletter pretplata
- Contact forma
- Contact socials


## Buduća unapređenja

- ocenjivanje freelancera
- chat između korisnika
- deploy na cloud
- statistika i grafovi

## Autori
- Stefan Mikic
- Ognjen Kalicanin
- Aleksa Lovic
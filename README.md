# Moment 3 Backend #

Backendapplikation för att spara, hämta och ta bort uppgifter om arbetslivserfarenhet. Skapad med hjälp av cors för att hantera CORS-headers, express som ramverk och nodemon som npm-paket för att starta om servern automatiskt vid ändringar. 

## Databas ##

MongoDB har använts som databashanterare och mongoose som npm-paket för att hantera anslutning till databasen.

## API och versionshantering ##

Thunderclient i Visual Studio Code har använts för att testköra kommandon till API. GitHub har använts för versionshantering. 
Länk till api på localhost: mongodb://127.0.0.1:27017/jobs
Kommando och ändpunkt för att hämta poster: GET. /jobs
Kommando och ändpunkt för att lägga till post: POST. /jobs
Kommando och ändpunkt för att radera post: PUT. /jobs/:id
Kommando och ändpunkt för att radera post: DELETE. /jobs/:id
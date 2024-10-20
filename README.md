Projektarbete - E-wallet
Exempel på wireframe: https://studentportal.nackademin.se/pluginfile.php/131417/mod_assign/intro/Wireframe%20-%20E-wallet.png

Beskrivning: Du ska skapa en applikation där användaren kan hantera olika betalkort. Tekniker du ska använda i denna app är följande:

● React

● React Router

● Redux (VG)

Applikationen ska ha följande routes (du får ändra namnet på dessa om du vill):

/ (startsida)

● ~~Lista ut samtliga kort användaren har. Användaren kan ha max 4 kort.~~

● ~~Det ska finnas en Add new card-knapp, som routar användaren vidare till /addcard.~~

● ~~(Endast G) Samtliga inaktiva kort ska ha en delete-knapp som tar bort korten~~

● ~~(VG) Högst upp ska du visa ett aktivt kort. Övriga kort ska vara inaktiva.~~

● ~~(VG) Användaren ska kunna klicka på ett kort för att navigera till /card/:id (med id för det valda kortet).~~

/addcard
● ~~Ett nytt kort ska kunna läggas till med följande information: Kortutgivare, card number, cardholder, expire month, expire year, CCV. (Se bild nedan).~~

● ~~För kortutgivare ska du hårdkoda in minst tre alternativ man kan välja mellan. Namnet för vad kortutgivare ska stå på kortet (t.ex. Mastercard, Visa, American Express etc. Eller om ni vill hitta på något roligare!).~~

● ~~Högst upp ska en förhandsvisning av kortet finnas, som uppdateras automatiskt när användare fyller i informationen.~~

● Följande validering för korten ska finnas:

~~Fältet kortnummer måste innehålla 16 siffror.~~

Utgångsdatum får inte vara ett datum som redan passerat.

~~Namnet får inte innehålla siffror.~~

~~Varje kortutgivare ska ge kortet olika utseenden i form av kortets färg + namn eller logotyp för kortutgivaren.~~

/card/:id (VG)
Visa all kortinformation för valt kort.

Användare ska kunna redigera kortinformationen om det är inaktivt.

Användare ska kunna aktivera kortet om det är inaktivt.

Användare ska kunna radera kortet om det är inaktivt.

Det ska inte vara möjligt att göra ändringar/radera kortet om det är aktivt.

/settings (VG)

Användare ska kunna välja mellan minst 3 olika teman som ändrar utseende på appen (till exempel dark/light/green).

Användare ska kunna radera samtliga inaktiva kort.

Funktionella krav

För att få Godkänt ska du:
● Ha använt React och React-router för att lösa uppgiften.

● Lagt till grundläggande funktionalitet som att visa ut samtliga kort, ta bort kort och lägga till nya kort.

För att få Väl Godkänt ska du även:
● Använda Redux.

Wirerframe för E-wallet

FRÅGOR:

– validera var? funktionen i utils/helper men valideringen och addCardPage?
– Button as Link – styla en div som button? Eller använda navigate? Svar: det går att styla länken
– Upprepning i AddCardPage
– Namnge pages
– Features ska inte innehålla Pages, visst?

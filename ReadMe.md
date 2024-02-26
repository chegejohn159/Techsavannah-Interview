# Instructions to have the system up and running

# Database

Import the sql dumps from the files.
To create a database, you may use the docker compose attached in the database folder (mariadb:11.2).

# Backend

To run spring boot, Run the following commands:
1. `./gradlew createDB -PdbName=fineract_tenants`
2. `./gradlew createDB -PdbName=fineract_default`
3. `./gradlew bootRun`

# Frontend

To Run Angular, Run the following commands:
1. `npm install -g @angular/cli@14.2.12`
2. `npm install`
3. `ng serve`

Once you have it up and running use below credentials to access the system

`Username - mifos` <br/>
`Password - password`

### NB:
I am available in case of any support required, Thank you!


il faut que vous aillez une instance postgres qui run. Remplacer le connection string dans .env par le votre.

ensuite il va falloir mettre le schema dedans en faisant `npm install`, `npx prisma init` et `npx migrate dev` dans le dossier server et ensuite `npm start`

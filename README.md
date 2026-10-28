# Verse Atelier
Base du site vitrine de Verse Atelier : HTML, CSS et JavaScript natifs, sans dépendance ni étape de compilation.

## Contenu
- Accueil et présentation du cabinet.
- Rubriques Projets, Services et Contact.
- Navigation mobile accessible, liens d’ancrage et rubrique contact.
- Illustrations SVG et compositions CSS locales, sans service tiers ni suivi.

## Prévisualiser
Ouvrir `index.html` dans un navigateur ou, depuis la racine :
```sh
python3 -m http.server 8000
```
Puis ouvrir http://localhost:8000.

## Personnaliser
- Textes et coordonnées : `index.html`.
- Palette, typographies et responsive : `styles.css`.
- Menu mobile : `script.js`.
- Visuels : `assets/`.

Les visuels actuels sont des compositions illustratives, pas des photographies de réalisations. Les trois rubriques projets sont explicitement en préparation : remplacer les illustrations par des photographies autorisées, ajouter les fiches projets et leurs crédits avant de présenter le portfolio comme finalisé. La rubrique contact est prête à recevoir une adresse professionnelle publique, un téléphone et des réseaux après confirmation. Aucune adresse e-mail personnelle n’est incluse.

## Mise en ligne
Le dossier peut être servi par tout hébergeur statique. Pour GitHub Pages, sélectionner la branche `main` et le dossier racine dans Settings → Pages. Aucun domaine, hébergement ou déploiement automatique n’est configuré par cette base.

## Vérification manuelle
Vérifier l’affichage à 375, 768 et 1440 px, la navigation au clavier, le menu mobile (ouverture, fermeture, Échap), les ancres et la rubrique contact. Sans JavaScript, les liens de navigation restent visibles.

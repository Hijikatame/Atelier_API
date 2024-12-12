export const rulesData = {
    partie1 : {
        name: 'Partie 1 création de votre Héro',
        chapitre: {
            chapitre1 : {
                name: 'Statistiques',
                reference: [
                    {
                        titre: 'Caractéristiques et talents',
                        content: `La Force (FOR) :
Mesure la puissance physique et musculaire.
Utilisée pour les attaques au contact (ATC).
	Talent associé :
- Athlétisme : effectuer un effort physique, soulever quelque chose, tirer une charge, effectuer un bras de fer.

La Dextérité (DEX) :
Évalue l'agilité, les réflexes et l'adresse.
Utilisée pour les attaques à distance (ATD) et détermine l'initiative.
	Talent associés :
- Acrobatie : roulade, tenir en équilibre, faire un saut, se balancer depuis une corde. 
- Arts manuels : dessiner, peindre, sculpter, etc. 
- Discrétion : passer inaperçu, être discret, se cacher.
- Équitation : diriger une monture.
- Habilité : crocheter une serrure, effectuer un tour de passe passe, vol à la tire, dépecer la fourrure d’un animal. 

La Constitution (CON) :
Représente la santé et l'endurance. Elle détermine vos PV et vos Points de Fatigue.
	Talent associé :
- Endurance : courir sur une longue distance, nager longtemps, résister aux intempéries, au sommeil inconfortable.

L'Intelligence (INT) :
Représente les capacités d'apprentissage et de raisonnement.
Permet l'utilisation de la magie par canalisation.
	Talent associés :
- Arcane : connaissance sur la magie générale.
- Artisanat : fabriquer un objet complexe.
- Bricolage : assembler un objet, réparer, construire des outils ou petits objets, faire fonctionner ou comprendre un mécanisme.
- Chimie : créer une concoction, fabriquer de la poudre, cuisiner.
- Connaissance : connaissance générale et culturelle, connaissances sur les sujets historiques et géographiques, langues anciennes.
- Identification : identifier un objet, déterminer sa valeur, et ses caractéristiques.
- Investigation : recherche et récolte d'indices et d’information, trouver un lieu.
- Médecine : identifier une blessure, une maladie, un empoisonnement, et connaissance d’une méthode pour les soigner.
- Nature : connaissance sur les sujets naturels (plantes, animaux …).
- Navigation : conduire un bateau, aéronef, maintenir un cap.
- Orientation : trouver son chemin, lire une carte.
- Religion : connaissance sur les sujets religieux.

La Sagesse (SAG) :
Représente la perception du monde, la volonté et l'intuition.
Utilisée pour utiliser la magie par serment et déterminer l'initiative.
	Talent associés :
- Calme :  résister à la peur et garder son calme.
- Discernement : déceler un mensonge, une hypocrisie, une personne fausse ou malveillante, sentir la peur.
- Perception : voir, entendre ou sentir quelque chose.
- Survie : trouver un abri, de quoi manger. 

Le Charisme (CHA) :
Traduit la force de persuasion, la présence et la compétence à commander.
Permet l'utilisation de la magie par fascination.
	Talent associés :
- Charme : séduire, apaiser les tensions, obtenir des services.
- Commandement : donner un ordre, commander, maintenir le moral de ses troupes.
- Domptage : apaiser un animal, tenter d'apprivoiser un animal.
- Intimidation : tenter de faire peur à quelqu’un, menacer.
- Performance : chanter, utiliser sa voix, jouer d'un instrument , danser, se donner en spectacle.
- Persuasion : persuader de quelque chose, marchander, mentir.

Détermination des valeurs des caractéristiques :
Vous disposez de 15 points à répartir entre FOR, DEX, CON, INT, SAG, et CHA sans dépasser 4 points dans une même caractéristique à la création.
Les valeurs modifient l'indice de réussite des tests de caractéristiques associées.

Indices de réussite par rapport aux caractéristiques :
1 à 2 = 6+
3 à 5 = 5+
6 à 10 = 4+
11 à 15 = 3+
16 ou plus = 2+ 

Caractéristique à 0 :
Si une créature doit effectuer un test dans une caractéristique alors qu'elle possède une valeur de 0, le test est automatiquement un échec. 

Talents :
Les talents peuvent être inférieur, non appris, appris ou supérieur.
- Inférieur : Vous êtes désavantagé sur tous les tests liés au talent.  
- Non appris : Le talent ne vous octroie aucun bonus.   
- Appris : Vous lancez 1 dé supplémentaire pour tous les tests liés à ce talent.
- Supérieur : Vous lancez 2 dé supplémentaires pour tous les tests liés à ce talent.   

Apprendre un talent : 
Quand vous avez la possibilité d’apprendre un talent, vous choisissez le talent qui vous intéresse et vous l'améliorez en suivant cet ordre : 
	Inférieur -> Non appris -> Appris -> Supérieur
De base tous les talents sont “Non appris”.

Choisir un talent : 
Vous pouvez choisir 1 talent au choix à la création de votre personnage. 

Exemple pour Sairani Arkhan :
Caractéristiques : FOR = 4, DEX = 4, CON = 3, INT = 2, SAG = 3, CHA = 1.
Talent : Endurance`,
                    },
                    {
                        titre: 'Point de vie',
                        content: `Les points de vie (PV) représentent la quantité de dommages qu'une créature peut encaisser avant d'être mise hors-combat. 

Votre personnage possède 3 + 2 fois sa CON PV.
Vous obtenez 2 PV supplémentaires à chaque fois que vous gagnez 1 de CON.

Exemple pour Sairani Arkhan :
Elle a une constitution (CON) de 3. Ainsi, elle commence le jeu avec 9 PV (3 + 3  2 PV).
`,
                    },
                    {
                        titre: 'Défense',
                        content: `La défense représente la capacité à résister aux attaques. Plus elle est élevée, plus les créatures qui vous attaquent auront du mal à obtenir des réussites pour vous infliger des DM.

Votre personnage sans armure commence avec 1 de DEF + 1 tous les 4 points de CON. 
Ce calcule est remplacé par celui indiqué par l'armure que vous portez.

Exemple pour Sairani Arkhan : 
Elle possède une Armure de Plume qui lui octroie une DEF de 1.
`,
                    },
                    {
                        titre: 'Attaques',
                        content: `Lors d’une attaque, les caractéristiques d’attaque au contact (ATC), attaque à distance (ATD) et attaque magique (ATM) sont comparées à la DEF de la cible.

- Si la valeur d'attaque est inférieure à la DEF, alors l'indice d'attaque est empiré d'un.
- Si la valeur d'attaque est égale à la DEF, alors l'indice d'attaque reste le même.
- Si la valeur d'attaque est supérieure à la DEF, alors l'indice d'attaque est amélioré d'un.

Attaque au contact (ATC) : 
S’utilise avec une arme de contact, épée, lance, masse, main nue etc.
La valeur de votre ATC est égale à la moitié de votre FOR + modifieurs.

Attaque à distance (ATD) : 
S’utilise avec une arme à distance, arc, arbalète, pétoire, javelot, boomerang etc.
La valeur de votre ATD est égale à la moitié de votre DEX + modifieurs.

Attaque magique (ATM) :  
S’utilise avec un sort d’attaque.
La valeur de votre ATM est égale à la moitié de votre caractéristique de lancer de sort + modifieurs.
Si vous ne connaissez pas de type de magie, votre ATM est égale à 0.

Exemple pour Sairani Arkhan : 
ATC = 2, ATD 3, ATM = 0 car se n’est pas une lanceuse de sorts.
`,
                    },
                ]
            }
        }
    }
};
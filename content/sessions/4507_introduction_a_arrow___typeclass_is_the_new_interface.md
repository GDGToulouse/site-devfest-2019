---
id: 4507
title: Introduction à Arrow - Typeclass is the new interface
language: Français
complexity: Intermédiaire
tags:
  - Languages
presentation: >-
  https://firebasestorage.googleapis.com/v0/b/devfesttoulouse-2018.appspot.com/o/presentation%2F4507-TalkTypeclasses-AlexandreDelattre.pdf?alt=media&token=d773b637-537b-4e08-9cf1-c1a1441a6a33
videoId: uiLimq64zJI
speakers:
  - alexandre_delattre
  - guillaume_andrieu
talkType: Conférence

---

Introduction à Arrow - `Typeclass` is the new `interface`
===

La programmation fonctionnelle, c'est à la mode ! Et pour de bonnes raisons: l'industrie impose des architectures de plus en plus distribuées. Code facilement composable, immutabilité, contrôle des effets de bord: l'application de ces concepts rend le code plus sûr et efficace.

*"Mais qu'est-ce que ça m'apporte vraiment ?"*, demande le programmeur pragmatique. En plus d'offrir des structures de données et opérateurs vraiment utiles, la notion de `typeclass` nous permet de rajouter des comportements/interfaces sur n'importe quel type de données.

Pour illustrer cette notion, nous nous appuierons sur la librairie `Arrow` en `Kotlin`. `Kotlin` est un langage de plus en plus populaire qui mixe plusieurs paradigmes. À défaut d'être un langage fonctionnel "pur", il dispose de nombreuses caractéristiques "fonctionnelles", et permet d'émuler des `typeclasses`.

Cette présentation, accessible sans connaissance de programmation fonctionnelle, permettra de se familiariser avec `Arrow` et les `typeclasses`.

*(😸 Aucune monade ne sera maltraitée durant ce talk. 😸)*

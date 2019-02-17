---
id: 4509
title: Comprendre le théorème de CAP avec Apache Kafka
language: Français
complexity: Intermédiaire
tags:
  - Cloud
presentation: >-
  https://firebasestorage.googleapis.com/v0/b/devfesttoulouse-2018.appspot.com/o/presentation%2F4509-UnderstandingtheCAPtheoremwithApacheKafka-Se%CC%81bastienGuilloux.pdf?alt=media&token=e26a3b33-ec28-409e-9b5f-e02df89c484b
videoId: yLp0crdThzQ
speakers:
  - sebastien_guilloux
talkType: Conférence

---

Durant cette présentation, nous nous pencherons sur le théorème de CAP (choix entre consistence, disponibilité et partition pour tout système distribué). Quand s'applique-t'il? Quels sont les choix qu'il propose?

Nous prendrons pour exemple Apache Kafka, afin de comprendre comment ce théorème s'applique en pratique. Nous étudierons les scénarios catastrophe potentiels en cas de crash d'un ou plusieurs noeuds. Quel est le niveau de garantie de délivrance d'un message? Que se passe-t'il quand le leader du cluster tombe? Comment est assurée la réplication des données? Quand et comment est-il possible d'ajuster le curseur entre consistence et disponibilité?

Il n'est pas nécessaire de connaitre Kafka pour pouvoir suivre cette présentation.

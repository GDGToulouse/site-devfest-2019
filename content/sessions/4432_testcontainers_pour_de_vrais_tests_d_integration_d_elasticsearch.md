---
id: 4432
title: Testcontainers pour de vrais tests d'intégration d'Elasticsearch
language: Français
complexity: Intermédiaire
tags:
  - Method & Tools
presentation: 'https://github.com/dadoonet/elasticsearch-integration-tests'
videoId: KgcV15lCDk4
speakers:
  - david_pilato
talkType: Quickie

---

Les tests d'intégration peuvent devenir un cauchemar lorsqu'ils sont lancés depuis la même JVM que votre code:

* Conflit de JARs (JAR Hell)
* Security Manager
* Effets de bord

De plus, tester avec un produit qui est lancé de façon différente de la façon dont il est lancé en production, ne garantira jamais que les tests d'intégration sont sincères.

Aussi, après avoir découvert le projet [TestContainers](https://www.testcontainers.org/) qui lance des conteneurs Docker depuis, j'ai décidé d'écrire une implémentation pour Elasticsearch: [testcontainers-java-module-elasticsearch](https://github.com/dadoonet/testcontainers-java-module-elasticsearch).
Je vous propose de découvrir tout cela pendant ce quickie.

/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export default {
  common_empty_state: {
    progress: {
      title: "Er zijn nog geen voortgangscijfers om te tonen.",
      description: "Vul eigenschappen in bij work items om hier voortgangscijfers te zien.",
    },
    updates: {
      title: "Nog geen updates.",
      description: "Zodra projectleden updates plaatsen, verschijnen ze hier",
    },
    search: {
      title: "Geen overeenkomende resultaten.",
      description: "Niets gevonden. Probeer je zoekopdracht aan te passen.",
    },
    not_found: {
      title: "Oeps! Er lijkt iets mis te zijn",
      description: "We kunnen je Plane-account op dit moment niet ophalen. Mogelijk is er een netwerkprobleem.",
      cta_primary: "Opnieuw laden",
    },
    server_error: {
      title: "Serverfout",
      description: "We kunnen geen verbinding maken met onze server om gegevens op te halen. Geen zorgen, we zijn ermee bezig.",
      cta_primary: "Opnieuw laden",
    },
  },
  project_empty_state: {
    no_access: {
      title: "Je lijkt geen toegang te hebben tot dit project",
      restricted_description: "Vraag een beheerder om toegang, dan kun je hier verder.",
      join_description: "Klik op de knop hieronder om deel te nemen.",
      cta_primary: "Deelnemen aan project",
      cta_loading: "Deelnemen aan project",
    },
    invalid_project: {
      title: "Project niet gevonden",
      description: "Het project dat je zoekt bestaat niet.",
    },
    work_items: {
      title: "Begin met je eerste work item.",
      description: "Work items zijn de bouwstenen van je project — wijs eigenaren toe, stel prioriteiten in en volg de voortgang moeiteloos.",
      cta_primary: "Maak je eerste work item",
    },
    cycles: {
      title: "Groepeer je werk in cycles met een vast tijdvak.",
      description: "Deel werk op in blokken met een vaste doorlooptijd, reken terug vanaf je projectdeadline om datums te bepalen en boek als team zichtbare voortgang.",
      cta_primary: "Maak je eerste cycle",
    },
    cycle_work_items: {
      title: "Geen work items om te tonen in deze cycle",
      description: "Maak work items aan om de voortgang van je team deze cycle te volgen en je doelen op tijd te halen.",
      cta_primary: "Work item aanmaken",
      cta_secondary: "Bestaand work item toevoegen",
    },
    modules: {
      title: "Koppel je projectdoelen aan modules en volg ze eenvoudig.",
      description: "Modules bestaan uit work items die met elkaar samenhangen. Ze helpen je de voortgang per projectfase te volgen, elk met eigen deadlines en analytics die laten zien hoe dicht je bij het einde van die fase bent.",
      cta_primary: "Maak je eerste module",
    },
    module_work_items: {
      title: "Geen work items om te tonen in deze module",
      description: "Maak work items aan om deze module te gaan volgen.",
      cta_primary: "Work item aanmaken",
      cta_secondary: "Bestaand work item toevoegen",
    },
    views: {
      title: "Sla eigen views op voor je project",
      description: "Views zijn opgeslagen filters waarmee je snel bij de informatie komt die je het vaakst gebruikt. Werk moeiteloos samen doordat teamgenoten views delen en naar hun eigen wensen aanpassen.",
      cta_primary: "View aanmaken",
    },
    no_work_items_in_project: {
      title: "Nog geen work items in het project",
      description: "Voeg work items toe aan je project en deel je werk met views op in behapbare stukken.",
      cta_primary: "Work item toevoegen",
    },
    work_item_filter: {
      title: "Geen work items gevonden",
      description: "Je huidige filter leverde geen resultaten op. Probeer de filters aan te passen.",
      cta_primary: "Work item toevoegen",
    },
    pages: {
      title: "Leg alles vast — van notities tot PRD's",
      description: "Met pagina's leg je informatie vast en orden je die op één plek. Schrijf notulen, projectdocumentatie en PRD's, voeg work items in en geef alles structuur met kant-en-klare componenten.",
      cta_primary: "Maak je eerste pagina",
    },
    archive_pages: {
      title: "Nog geen gearchiveerde pagina's",
      description: "Archiveer pagina's die je even niet nodig hebt. Je vindt ze hier terug wanneer het zover is.",
    },
    intake_sidebar: {
      title: "Leg intake-verzoeken vast",
      description: "Dien nieuwe verzoeken in om ze te laten beoordelen, prioriteren en volgen binnen de workflow van je project.",
      cta_primary: "Intake-verzoek aanmaken",
    },
    intake_main: {
      title: "Kies een intake-work item om de details te zien",
    },
  },
  workspace_empty_state: {
    archive_work_items: {
      title: "Nog geen gearchiveerde work items",
      description: "Handmatig of automatisch kun je work items archiveren die zijn afgerond of geannuleerd. Zodra ze gearchiveerd zijn, vind je ze hier.",
      cta_primary: "Automatisering instellen",
    },
    archive_cycles: {
      title: "Nog geen gearchiveerde cycles",
      description: "Archiveer afgeronde cycles om je project overzichtelijk te houden. Zodra ze gearchiveerd zijn, vind je ze hier.",
    },
    archive_modules: {
      title: "Nog geen gearchiveerde modules",
      description: "Archiveer afgeronde of geannuleerde modules om je project overzichtelijk te houden. Zodra ze gearchiveerd zijn, vind je ze hier.",
    },
    home_widget_quick_links: {
      title: "Houd belangrijke bronnen, documenten of verwijzingen bij de hand",
    },
    inbox_sidebar_all: {
      title: "Updates over de work items die je volgt verschijnen hier",
    },
    inbox_sidebar_mentions: {
      title: "Vermeldingen bij je work items verschijnen hier",
    },
    your_work_by_priority: {
      title: "Nog geen work item toegewezen",
    },
    your_work_by_state: {
      title: "Nog geen work item toegewezen",
    },
    views: {
      title: "Nog geen views",
      description: "Voeg work items toe aan je project en gebruik views om moeiteloos te filteren, sorteren en de voortgang te volgen.",
      cta_primary: "Work item toevoegen",
    },
    drafts: {
      title: "Halfgeschreven work items",
      description: "Wil je het proberen? Begin met een work item en laat het halverwege staan, of maak hieronder je eerste concept. 😉",
      cta_primary: "Concept-work item aanmaken",
    },
    projects_archived: {
      title: "Geen gearchiveerde projecten",
      description: "Het lijkt erop dat al je projecten nog actief zijn — goed bezig!",
    },
    analytics_projects: {
      title: "Maak projecten aan om hier projectcijfers te zien.",
    },
    analytics_work_items: {
      title: "Maak projecten aan met work items en toegewezen mensen om hier prestaties, voortgang en de impact van je team te volgen.",
    },
    analytics_no_cycle: {
      title: "Maak cycles aan om werk in afgebakende periodes te organiseren en de voortgang over sprints heen te volgen.",
    },
    analytics_no_module: {
      title: "Maak modules aan om je werk te organiseren en de voortgang over verschillende fases te volgen.",
    },
    analytics_no_intake: {
      title: "Richt intake in om binnenkomende verzoeken te beheren en te volgen welke worden geaccepteerd en afgewezen",
    },
  },
  settings_empty_state: {
    estimates: {
      title: "Nog geen inschattingen",
      description: "Bepaal hoe je team werk inschat en houd dat consistent bij over alle work items.",
      cta_primary: "Inschattingssysteem toevoegen",
    },
    labels: {
      title: "Nog geen labels",
      description: "Maak eigen labels om je work items overzichtelijk in te delen en te beheren.",
      cta_primary: "Maak je eerste label",
    },
    exports: {
      title: "Nog geen exports",
      description: "Je hebt op dit moment geen exports. Zodra je gegevens exporteert, verschijnen ze hier allemaal.",
    },
    tokens: {
      title: "Nog geen persoonlijk token",
      description: "Genereer veilige API-tokens om je workspace te koppelen aan externe systemen en applicaties.",
      cta_primary: "API-token toevoegen",
    },
    webhooks: {
      title: "Nog geen webhook toegevoegd",
      description: "Stuur automatisch meldingen naar externe diensten wanneer er iets in een project gebeurt.",
      cta_primary: "Webhook toevoegen",
    },
  },
} as const;

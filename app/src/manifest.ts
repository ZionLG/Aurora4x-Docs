export interface VersionInfo {
  version: string;
  label: string;
  date: string;
}

export interface Category {
  id: string;
  label: string;
}

export interface HistoryEntry {
  version: string;
  file: string;
  notes?: string;
  /** Classification: 'update' (default) = feature/change, 'bugfix' = bug fix (collapsed by default in UI) */
  kind?: 'update' | 'bugfix';
  /** Extract only these **bold title** sections from the file. If omitted, loads the full file. */
  sections?: string[];
  /**
   * Mark specific **bold title** sections in THIS entry as outdated.
   * Each entry maps section title → version that replaced it.
   * The renderer will show a "superseded by vX.Y.Z" banner on those sections.
   *
   * Example: { "Forced Labour Camps": "2.0.0" }
   */
  deprecated?: Record<string, string>;
  /**
   * Maps section titles in THIS entry to section titles in the BASE (oldest) entry
   * that they replace. The old section becomes collapsible, and this section takes its place.
   *
   * Example: { "Forced Labour Camps": "Civilian Camps" }
   */
  replaces?: Record<string, string>;
  /**
   * Maps section titles in THIS entry to section titles in the base entry
   * that they should be inserted after. Used for positioning patches within the base document.
   *
   * Example: { "Engine Tech": "Engine Design" }
   */
  insertAfter?: Record<string, string>;
}

export interface Topic {
  id: string;
  title: string;
  category: string;
  history: HistoryEntry[];
}

export interface DocsManifest {
  versions: VersionInfo[];
  categories: Category[];
  topics: Topic[];
}

export const manifest: DocsManifest = {
  versions: [
    { version: "1.10.0", label: "v1.10.0 — Major Update", date: "2020-05-27" },
    { version: "1.9.5", label: "v1.9.5 — Bug Fixes", date: "2020-05-06" },
    { version: "1.9.0", label: "v1.9.0 — Minor Changes", date: "2020-04-28" },
    { version: "1.0.0", label: "v1.0.0 — Launch", date: "2020-04-12" },
  ],

  categories: [
    { id: "economy", label: "Economy & Colonies" },
    { id: "ships", label: "Ships & Design" },
    { id: "fleet", label: "Fleet & Operations" },
    { id: "combat", label: "Combat" },
    { id: "galaxy", label: "Galaxy & Exploration" },
    { id: "diplomacy", label: "Diplomacy & Intelligence" },
    { id: "personnel", label: "Personnel" },
    { id: "setup", label: "Game Setup & UI" },
  ],

  topics: [
    // Economy & Colonies
    {
      id: "planetary-installations",
      title: "Planetary Installations",
      category: "economy",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Unused Construction Capacity"],
          insertAfter: { "Unused Construction Capacity": "Conventional Industry" },
        },
        { version: "1.0.0", file: "v1.0.0/02-planetary-installations.md" },
      ],
    },
    {
      id: "shipyards",
      title: "Shipyards",
      category: "economy",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Ship Design Fixes", "Scrap and Refit Display"],
          insertAfter: { "Ship Design Fixes": "Shipbuilding Changes", "Scrap and Refit Display": "Auto Refit Tasks" },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Prototypes", "Class Deletion", "Refit Dropdown", "Refit Tasks"],
          insertAfter: {
            "Prototypes": "Shipbuilding Changes",
            "Class Deletion": "Shipyard Worker Requirements",
            "Refit Dropdown": "Auto Refit Tasks",
            "Refit Tasks": "Refit Size",
          },
        },
        { version: "1.0.0", file: "v1.0.0/03-shipyards.md" },
      ],
    },
    {
      id: "colonies",
      title: "Colonies",
      category: "economy",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Population and Colony Fixes"],
          insertAfter: { "Population and Colony Fixes": "Delete Empty Colonies" },
        },
        { version: "1.0.0", file: "v1.0.0/06-colonies.md" },
      ],
    },
    {
      id: "civilians",
      title: "Civilians",
      category: "economy",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Civilian Shipping Fixes"],
          insertAfter: { "Civilian Shipping Fixes": "Shipping Lines" },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Civilian Colony Ships"],
          insertAfter: { "Civilian Colony Ships": "Civilian Destinations" },
        },
        { version: "1.0.0", file: "v1.0.0/07-civilians.md" },
      ],
    },
    {
      id: "wealth-and-mining",
      title: "Wealth & Mining",
      category: "economy",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Sorium Depletion Event"],
          insertAfter: { "Sorium Depletion Event": "Mineral Search Flag" },
        },
        { version: "1.0.0", file: "v1.0.0/34-wealth-and-mining.md" },
      ],
    },

    // Ships & Design
    {
      id: "engines",
      title: "Engines",
      category: "ships",
      history: [
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Engine Tech"],
          insertAfter: { "Engine Tech": "Engine Technology Progression" },
        },
        { version: "1.0.0", file: "v1.0.0/12-engines.md" },
      ],
    },
    {
      id: "ship-components",
      title: "Ship Components",
      category: "ships",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Hangar and Parasite Fix"],
          insertAfter: { "Hangar and Parasite Fix": "Fuel Storage Costs" },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Fire Control Range"],
          insertAfter: { "Fire Control Range": "Prototype Components" },
        },
        {
          version: "1.9.0", file: "v1.9.0/01-minor-changes.md",
          sections: ["Conventional Reactor"],
          insertAfter: { "Conventional Reactor": "Fuel Storage Costs" },
        },
        { version: "1.0.0", file: "v1.0.0/15-ship-components.md" },
      ],
    },
    {
      id: "sensors-and-contacts",
      title: "Sensors & Contacts",
      category: "ships",
      history: [
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["DSTS Display", "Buoy Design"],
          insertAfter: {
            "DSTS Display": "Ground Forces Detection",
            "Buoy Design": "Transponders",
          },
        },
        { version: "1.0.0", file: "v1.0.0/14-sensors-and-contacts.md" },
      ],
    },
    {
      id: "direct-fire-weapons",
      title: "Direct Fire Weapons & Power Plants",
      category: "ships",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Railgun Point Defence", "Fire Control Fixes", "Hit Chance Fix"],
          insertAfter: {
            "Railgun Point Defence": "Gauss Cannon Research Changes",
            "Fire Control Fixes": "Turret Update",
            "Hit Chance Fix": "Weapon Failure",
          },
        },
        {
          version: "1.0.0",
          file: "v1.0.0/13-direct-fire-weapons-and-power-plants.md",
        },
      ],
    },
    {
      id: "missiles-and-launchers",
      title: "Missiles & Launchers",
      category: "ships",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Fire Control Fixes"],
          insertAfter: { "Fire Control Fixes": "Ship Ordnance Templates" },
        },
        { version: "1.0.0", file: "v1.0.0/16-missiles-and-launchers.md" },
      ],
    },
    {
      id: "space-stations",
      title: "Space Stations & Orbital Habitats",
      category: "ships",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Overhaul and Station Fixes"],
        },
        {
          version: "1.0.0",
          file: "v1.0.0/23-space-stations-and-orbital-habitats.md",
        },
      ],
    },

    // Fleet & Operations
    {
      id: "naval-organization",
      title: "Naval Organization",
      category: "fleet",
      history: [
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["PPV Display"],
          insertAfter: { "PPV Display": "Naval Organization" },
        },
        { version: "1.0.0", file: "v1.0.0/08-naval-organization.md" },
      ],
    },
    {
      id: "fleet-movement",
      title: "Fleet Movement & Orders",
      category: "fleet",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Land on Assigned Mothership as Sub-Fleet", "Fleet Order Fixes"],
          insertAfter: {
            "Land on Assigned Mothership as Sub-Fleet": "Standing Orders",
            "Fleet Order Fixes": "Fleet Order Templates",
          },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Passenger Liner", "Colony Fleets", "Fleet Window"],
          insertAfter: {
            "Passenger Liner": "Fleet Maximum Speed",
            "Colony Fleets": "Standing Orders",
            "Fleet Window": "Fleet Distance and Time",
          },
        },
        {
          version: "1.9.0", file: "v1.9.0/01-minor-changes.md",
          sections: ["Order Delay"],
          insertAfter: { "Order Delay": "Fleet Order Templates" },
        },
        { version: "1.0.0", file: "v1.0.0/22-fleet-movement-and-orders.md" },
      ],
    },
    {
      id: "logistics",
      title: "Logistics",
      category: "fleet",
      history: [
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Underway Replenishment", "Load Orders"],
          insertAfter: {
            "Underway Replenishment": "Resupply Changes",
            "Load Orders": "Load & Unload Cargo",
          },
        },
        { version: "1.0.0", file: "v1.0.0/04-logistics.md" },
      ],
    },
    {
      id: "crew-and-commanders",
      title: "Crew, Commanders & Control Systems",
      category: "fleet",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Commander Fixes"],
          insertAfter: { "Commander Fixes": "Academy Commandants" },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Rank Requirements", "SM Add Commanders"],
          insertAfter: {
            "Rank Requirements": "Academy Commandants",
            "SM Add Commanders": "Commander Careers",
          },
        },
        {
          version: "1.0.0",
          file: "v1.0.0/09-crew-commanders-and-control-systems.md",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance",
      category: "fleet",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Maintenance Report Additions"],
          insertAfter: { "Maintenance Report Additions": "Abandon Overhaul" },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Maintenance Failure"],
          insertAfter: { "Maintenance Failure": "New Maintenance Rules" },
        },
        { version: "1.0.0", file: "v1.0.0/10-maintenance.md" },
      ],
    },
    {
      id: "deployment-life-support",
      title: "Deployment & Life Support",
      category: "fleet",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Deployment Fix"],
          insertAfter: { "Deployment Fix": "Deployment Clock" },
        },
        {
          version: "1.0.0",
          file: "v1.0.0/17-deployment-overcrowding-under-manning-and-life-support-failures.md",
        },
      ],
    },

    // Combat
    {
      id: "combat-mechanics",
      title: "Combat Setup & Mechanics",
      category: "combat",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Hit Chance Fix"],
          insertAfter: { "Hit Chance Fix": "Fire Delay" },
        },
        { version: "1.0.0", file: "v1.0.0/24-combat-setup-and-mechanics.md" },
      ],
    },
    {
      id: "ground-forces",
      title: "Ground Forces",
      category: "combat",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Queued Ground Formation Training Tasks", "Ground Formation Fixes"],
          insertAfter: {
            "Queued Ground Formation Training Tasks": "Ground Forces: Part 2 - Formation Templates",
            "Ground Formation Fixes": "Ground Formation Element Transfer UI",
          },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Ground Combat Fixes", "Formation Templates", "New Formations", "Ground Force Capture"],
          insertAfter: {
            "Ground Combat Fixes": "Ground Force Fortification",
            "Formation Templates": "Ground Forces: Part 2 - Formation Templates",
            "New Formations": "Setting Ground Formation Support",
            "Ground Force Capture": "Genetically Enhanced Soldiers",
          },
        },
        {
          version: "1.9.0", file: "v1.9.0/01-minor-changes.md",
          sections: ["Civilian Ground Forces Toggle"],
          insertAfter: { "Civilian Ground Forces Toggle": "Ground Forces: Part 2 - Formation Templates" },
        },
        { version: "1.0.0", file: "v1.0.0/19-ground-forces.md" },
      ],
    },
    {
      id: "ground-combat",
      title: "Ground Combat",
      category: "combat",
      history: [
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Ground Combat Fixes"],
          insertAfter: { "Ground Combat Fixes": "Base Ground Combat Rules" },
        },
        { version: "1.0.0", file: "v1.0.0/26-ground-combat.md" },
      ],
    },
    {
      id: "ground-support-fighters",
      title: "Ground Support Fighters",
      category: "combat",
      history: [
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Ground Combat Fixes"],
          insertAfter: { "Ground Combat Fixes": "Ground-based AA Fire" },
        },
        { version: "1.0.0", file: "v1.0.0/27-ground-support-fighters.md" },
      ],
    },
    {
      id: "surface-to-orbit",
      title: "Surface-to-Orbit Combat",
      category: "combat",
      history: [
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["STO Availability"],
          insertAfter: { "STO Availability": "Surface-to-Orbit Weapons" },
        },
        { version: "1.0.0", file: "v1.0.0/29-surface-to-orbit-combat.md" },
      ],
    },
    {
      id: "boarding-combat",
      title: "Boarding Combat",
      category: "combat",
      history: [{ version: "1.0.0", file: "v1.0.0/32-boarding-combat.md" }],
    },
    {
      id: "damage-control",
      title: "Damage Control",
      category: "combat",
      history: [{ version: "1.0.0", file: "v1.0.0/28-damage-control.md" }],
    },

    // Galaxy & Exploration
    {
      id: "systems-and-bodies",
      title: "Systems & Bodies",
      category: "galaxy",
      history: [{ version: "1.0.0", file: "v1.0.0/18-systems-and-bodies.md" }],
    },
    {
      id: "terraforming",
      title: "Terraforming",
      category: "galaxy",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Terraforming Fix"],
          insertAfter: { "Terraforming Fix": "Terraforming Update" },
        },
        { version: "1.0.0", file: "v1.0.0/11-terraforming.md" },
      ],
    },
    {
      id: "ruins",
      title: "Ruins & Ancient Constructs",
      category: "galaxy",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Ancient Constructs"],
          insertAfter: { "Ancient Constructs": "Ruins in Sol" },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Anomalies"],
          insertAfter: { "Anomalies": "Chance of Ruins" },
        },
        { version: "1.0.0", file: "v1.0.0/20-ruins.md" },
      ],
    },
    {
      id: "star-system-design",
      title: "Star System Design",
      category: "galaxy",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Random Stars Fix", "Sector and System Fixes"],
          insertAfter: {
            "Random Stars Fix": "Star System Design Part 2: Adding Stars",
            "Sector and System Fixes": "Star System Design Part 4: Deleting Stars and System Bodies",
          },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Random Stars", "Planet Minerals"],
          insertAfter: {
            "Random Stars": "Star System Design Part 2: Adding Stars",
            "Planet Minerals": "Star System Design Part 5: Adding Planets, Comets and Asteroid Belts",
          },
        },
        { version: "1.0.0", file: "v1.0.0/37-star-system-design.md" },
      ],
    },
    {
      id: "aether-rifts",
      title: "Aether Rifts",
      category: "galaxy",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Aether Rifts"],
        },
      ],
    },

    // Diplomacy & Intelligence
    {
      id: "diplomacy",
      title: "Diplomacy",
      category: "diplomacy",
      history: [{ version: "1.0.0", file: "v1.0.0/35-diplomacy.md" }],
    },
    {
      id: "intelligence-gathering",
      title: "Intelligence Gathering",
      category: "diplomacy",
      history: [
        { version: "1.0.0", file: "v1.0.0/31-intelligence-gathering.md" },
      ],
    },
    {
      id: "alien-races",
      title: "Alien Races & Species Attributes",
      category: "diplomacy",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["NPR Design Variety"],
          insertAfter: { "NPR Design Variety": "Human NPRs" },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["Alien Class Renaming"],
          insertAfter: { "Alien Class Renaming": "New Spoiler Race" },
        },
        {
          version: "1.0.0",
          file: "v1.0.0/33-alien-races-and-species-attributes.md",
        },
      ],
    },

    // Personnel
    {
      id: "medals-and-achievements",
      title: "Medals & Achievements",
      category: "personnel",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Medal Import"],
          insertAfter: { "Medal Import": "Ship Achievements" },
        },
        { version: "1.0.0", file: "v1.0.0/30-medals-and-achievements.md" },
      ],
    },

    // Game Setup & UI
    {
      id: "new-game-setup",
      title: "New Game Setup",
      category: "setup",
      history: [{ version: "1.0.0", file: "v1.0.0/21-new-game-setup.md" }],
    },
    {
      id: "nomenclature",
      title: "Nomenclature",
      category: "setup",
      history: [{ version: "1.0.0", file: "v1.0.0/05-nomenclature.md" }],
    },
    {
      id: "user-interface",
      title: "User Interface Updates",
      category: "setup",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Hot Keys", "Faster Save", "UI Display Improvements"],
          insertAfter: {
            "Hot Keys": "Survey Site List",
            "Faster Save": "Survey Site List",
            "UI Display Improvements": "Linked Windows",
          },
        },
        {
          version: "1.9.5", file: "v1.9.5/01-bug-fixes.md", kind: "bugfix",
          sections: ["PPV Display", "Select Name", "Task Completion Time"],
          insertAfter: {
            "PPV Display": "Assigned Mothership Display",
            "Select Name": "Save Button",
          },
        },
        {
          version: "1.9.0", file: "v1.9.0/01-minor-changes.md",
          sections: ["Tactical Map Events", "Fighter Construction Event", "New Events", "Distance Measuring", "Multiple Window Option", "Low G Habitable Worlds"],
          insertAfter: {
            "Tactical Map Events": "Tactical Map in Background",
            "Distance Measuring": "Tactical Map Popup Menu",
            "Low G Habitable Worlds": "Race Comparison Window",
          },
          replaces: {
            "Multiple Window Option": "Multiple Window Instances",
          },
        },
        { version: "1.0.0", file: "v1.0.0/36-user-interface-updates.md" },
      ],
    },
    {
      id: "automatic-research",
      title: "Automatic Research",
      category: "setup",
      history: [
        {
          version: "1.10.0", file: "v1.10.0/01-patch-notes.md",
          sections: ["Automatic Research"],
        },
      ],
    },
    {
      id: "text-summaries",
      title: "Text Summaries",
      category: "setup",
      history: [{ version: "1.0.0", file: "v1.0.0/38-text-summaries.md" }],
    },
  ],
};

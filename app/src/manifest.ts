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
  supersedes?: string[];
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
    { version: "1.0.0", label: "v1.0.0 — Launch", date: "2026-02-27" },
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
        { version: "1.0.0", file: "v1.0.0/02-planetary-installations.md" },
      ],
    },
    {
      id: "shipyards",
      title: "Shipyards",
      category: "economy",
      history: [{ version: "1.0.0", file: "v1.0.0/03-shipyards.md" }],
    },
    {
      id: "colonies",
      title: "Colonies",
      category: "economy",
      history: [{ version: "1.0.0", file: "v1.0.0/06-colonies.md" }],
    },
    {
      id: "civilians",
      title: "Civilians",
      category: "economy",
      history: [{ version: "1.0.0", file: "v1.0.0/07-civilians.md" }],
    },
    {
      id: "wealth-and-mining",
      title: "Wealth & Mining",
      category: "economy",
      history: [{ version: "1.0.0", file: "v1.0.0/34-wealth-and-mining.md" }],
    },

    // Ships & Design
    {
      id: "engines",
      title: "Engines",
      category: "ships",
      history: [{ version: "1.0.0", file: "v1.0.0/12-engines.md" }],
    },
    {
      id: "ship-components",
      title: "Ship Components",
      category: "ships",
      history: [{ version: "1.0.0", file: "v1.0.0/15-ship-components.md" }],
    },
    {
      id: "sensors-and-contacts",
      title: "Sensors & Contacts",
      category: "ships",
      history: [
        { version: "1.0.0", file: "v1.0.0/14-sensors-and-contacts.md" },
      ],
    },
    {
      id: "direct-fire-weapons",
      title: "Direct Fire Weapons & Power Plants",
      category: "ships",
      history: [
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
        { version: "1.0.0", file: "v1.0.0/16-missiles-and-launchers.md" },
      ],
    },
    {
      id: "space-stations",
      title: "Space Stations & Orbital Habitats",
      category: "ships",
      history: [
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
      history: [{ version: "1.0.0", file: "v1.0.0/08-naval-organization.md" }],
    },
    {
      id: "fleet-movement",
      title: "Fleet Movement & Orders",
      category: "fleet",
      history: [
        { version: "1.0.0", file: "v1.0.0/22-fleet-movement-and-orders.md" },
      ],
    },
    {
      id: "logistics",
      title: "Logistics",
      category: "fleet",
      history: [{ version: "1.0.0", file: "v1.0.0/04-logistics.md" }],
    },
    {
      id: "crew-and-commanders",
      title: "Crew, Commanders & Control Systems",
      category: "fleet",
      history: [
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
      history: [{ version: "1.0.0", file: "v1.0.0/10-maintenance.md" }],
    },
    {
      id: "deployment-life-support",
      title: "Deployment & Life Support",
      category: "fleet",
      history: [
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
        { version: "1.0.0", file: "v1.0.0/24-combat-setup-and-mechanics.md" },
      ],
    },
    {
      id: "ground-forces",
      title: "Ground Forces",
      category: "combat",
      history: [{ version: "1.0.0", file: "v1.0.0/19-ground-forces.md" }],
    },
    {
      id: "ground-combat",
      title: "Ground Combat",
      category: "combat",
      history: [{ version: "1.0.0", file: "v1.0.0/26-ground-combat.md" }],
    },
    {
      id: "ground-support-fighters",
      title: "Ground Support Fighters",
      category: "combat",
      history: [
        { version: "1.0.0", file: "v1.0.0/27-ground-support-fighters.md" },
      ],
    },
    {
      id: "surface-to-orbit",
      title: "Surface-to-Orbit Combat",
      category: "combat",
      history: [
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
      history: [{ version: "1.0.0", file: "v1.0.0/11-terraforming.md" }],
    },
    {
      id: "ruins",
      title: "Ruins",
      category: "galaxy",
      history: [{ version: "1.0.0", file: "v1.0.0/20-ruins.md" }],
    },
    {
      id: "star-system-design",
      title: "Star System Design",
      category: "galaxy",
      history: [{ version: "1.0.0", file: "v1.0.0/37-star-system-design.md" }],
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
        { version: "1.0.0", file: "v1.0.0/36-user-interface-updates.md" },
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

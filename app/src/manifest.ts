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
    { version: "1.13.0", label: "v1.13.0 — Major Update", date: "2021-04-21" },
    { version: "1.12.0", label: "v1.12.0 — Major Update", date: "2020-10-11" },
    { version: "1.11.0", label: "v1.11.0 — Bug Fixes", date: "2020-05-29" },
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
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Assign New Labs"],
          insertAfter: { "Assign New Labs": "Conventional Industry" },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Repair Yards", "Shipyard Repair Capacity Fix", "Commercial Shipyard Repair Fix", "Shipyard Class Lock Fix", "Instant Build to Carriers"],
          insertAfter: {
            "Repair Yards": "Shipyard Worker Requirements",
            "Shipyard Repair Capacity Fix": "Shipyard Worker Requirements",
            "Commercial Shipyard Repair Fix": "Shipyard Worker Requirements",
            "Shipyard Class Lock Fix": "Shipbuilding Changes",
            "Instant Build to Carriers": "Shipbuilding Changes",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Shipyard Slipway Destruction Fix", "Fire Control Refit Fix", "Refit Overhead Display Fix", "Refit Ordnance Adjustment", "Shipyard Scrap Fix", "Scrapping Wealth Fix"],
        },
        {
          version: "1.11.0", file: "v1.11.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Shipyard Retool Error Fix"],
          insertAfter: { "Shipyard Retool Error Fix": "Shipbuilding Changes" },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Colony Governor Protection Fix", "Colony Importance Error Fix", "Colony Governor Event Fix", "Sector Governor Bonus Fix", "Surrender Strength Fix", "Orbital Habitat Capacity Fix", "Population Ground Units"],
          insertAfter: {
            "Colony Governor Protection Fix": "Population Capacity",
            "Colony Importance Error Fix": "Population Capacity",
            "Colony Governor Event Fix": "Population Capacity",
            "Sector Governor Bonus Fix": "Population Capacity",
            "Surrender Strength Fix": "Population Capacity",
            "Orbital Habitat Capacity Fix": "Population Capacity",
            "Population Ground Units": "Automatic Pop Selection from Galactic Map",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Change Capital Population", "Resurrecting Population Fix", "Gas Giant Colony Fix", "Delete Empty Populations Fix", "Occupation Strength and Police Modifiers"],
          insertAfter: {
            "Change Capital Population": "Population Capacity",
            "Resurrecting Population Fix": "Population Capacity",
            "Gas Giant Colony Fix": "Potential Colony Locations",
            "Delete Empty Populations Fix": "Delete Empty Colonies",
            "Occupation Strength and Police Modifiers": "Automatic Pop Selection from Galactic Map",
          },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Civilian Harvester Fix"],
          insertAfter: { "Civilian Harvester Fix": "Shipping Lines" },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Miscellaneous Components", "Fractional Capacitors", "Boat Bay Size Change", "Armour Repair in Hangars", "Automated Hangar Resupply", "Carrier Operations Bonus", "Distance Travelled", "Component Development Cost Changes", "Cloak Research Fix", "Boat Bay Design Fix", "Jump Drive Cost Fix", "Obsolete Component Button Fix", "Insufficient Power Alert", "Class Function Display", "Spinal Weapon Fix"],
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Negative Spare Berths Fix", "Single System Multiples Fix", "Spinal Weapon Type Fix", "C&C Disassembly Fix"],
        },
        {
          version: "1.11.0", file: "v1.11.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Cloaking Device Size Fix", "Stabilisation Module Fix"],
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Short Name Contact Grouping Fix", "Buoy Orbit Fix", "Tracking Station Range Fix", "Tractor Link Fix"],
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["ELINT Passive Sensor Fix", "Passive Sensor Buoy Fix"],
          insertAfter: {
            "ELINT Passive Sensor Fix": "Ground Forces Detection",
            "Passive Sensor Buoy Fix": "Transponders",
          },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Reduced Shot Railguns", "Single Weapon Fire Controls", "Beam FC Option Fix", "Spinal Railgun Removal", "Zero Hit Chance Beam Fix"],
          insertAfter: {
            "Reduced Shot Railguns": "Gauss Cannon Research Changes",
            "Single Weapon Fire Controls": "Turret Update",
            "Beam FC Option Fix": "Turret Update",
            "Spinal Railgun Removal": "Gauss Cannon Research Changes",
            "Zero Hit Chance Beam Fix": "Weapon Failure",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Auto Assign FC ECCM Fix"],
          insertAfter: { "Auto Assign FC ECCM Fix": "Turret Update" },
        },
        {
          version: "1.11.0", file: "v1.11.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Auto Assign FC ECCM Fix"],
          insertAfter: { "Auto Assign FC ECCM Fix": "Turret Update" },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Random Second Stage Targeting", "Missile Launcher Ammo Check Fix", "Geosurvey Missile Option Fix"],
          insertAfter: {
            "Random Second Stage Targeting": "Missile Updates",
            "Missile Launcher Ammo Check Fix": "Missile Launcher Changes",
            "Geosurvey Missile Option Fix": "Missile Updates",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Second-Stage Missile Magazine Fix", "Missile Shipyard Target Fix", "Missile Project Creation Fix", "Missile PD Mode Fix", "Missile FC AMM Launch"],
          insertAfter: {
            "Second-Stage Missile Magazine Fix": "Magazine Design",
            "Missile Shipyard Target Fix": "Launch Ready Ordnance",
            "Missile Project Creation Fix": "Launch Ready Ordnance",
            "Missile PD Mode Fix": "Tracking Time Bonus vs Missiles",
            "Missile FC AMM Launch": "Launch Ready Ordnance",
          },
        },
        {
          version: "1.11.0", file: "v1.11.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Reduced-Size Missile Launcher Fix"],
          insertAfter: { "Reduced-Size Missile Launcher Fix": "Missile Launcher Changes" },
        },
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
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Station No Armour Fix"],
        },
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
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Parasites on Transported Items", "Required Power Display Fix"],
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Sorium Gas Giant Survey Fix", "Set Specific Threat Fix", "Refuel Resupply Overhaul Standing Order Fix", "Fleet Window UI Additions", "Fleet Creation Location Fix", "Hide Fleets in Orbit", "Fleet Name in Events"],
          insertAfter: {
            "Sorium Gas Giant Survey Fix": "Standing Orders",
            "Set Specific Threat Fix": "Standing Orders",
            "Refuel Resupply Overhaul Standing Order Fix": "Standing Orders",
            "Fleet Window UI Additions": "Fleet Distance and Time",
            "Fleet Creation Location Fix": "Fleet Order Templates",
            "Hide Fleets in Orbit": "Fleet Distance and Time",
            "Fleet Name in Events": "Fleet Distance and Time",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: [
            "Fleet Escort Orders", "Move Fleet to Waypoint", "Load All Minerals Until Full",
            "Pickup Nearest Lifepod", "Deployment Exceeded Condition", "Repeat Orders X Times",
            "Refuel, Resupply and Overhaul Conditional Order", "Survey Next Three Bodies or Locations",
            "Lagrange Point Order Display Fix", "Tug Fuel Consumption Fix", "Wreck Salvage Display Fix",
          ],
          insertAfter: {
            "Fleet Escort Orders": "Standing Orders",
            "Move Fleet to Waypoint": "Fleet Order Templates",
            "Load All Minerals Until Full": "Fleet Order Templates",
            "Pickup Nearest Lifepod": "Standing Orders",
            "Deployment Exceeded Condition": "Standing Orders",
            "Repeat Orders X Times": "Fleet Order Templates",
            "Refuel, Resupply and Overhaul Conditional Order": "Standing Orders",
            "Survey Next Three Bodies or Locations": "Standing Orders",
            "Lagrange Point Order Display Fix": "Fleet Distance and Time",
            "Tug Fuel Consumption Fix": "Fleet Maximum Speed",
            "Wreck Salvage Display Fix": "Fleet Distance and Time",
          },
        },
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
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Resupply from Stationary Supply Ship", "SM Partial Refuel Fix", "Underway Replenishment Reset Fix", "Unload Max Items Fix", "Cargo Shuttle Maintenance Fix", "Fighter Cargo Loading"],
          insertAfter: {
            "Resupply from Stationary Supply Ship": "Resupply Changes",
            "SM Partial Refuel Fix": "Load & Unload Cargo",
            "Underway Replenishment Reset Fix": "Resupply Changes",
            "Unload Max Items Fix": "Load & Unload Cargo",
            "Cargo Shuttle Maintenance Fix": "Resupply Changes",
            "Fighter Cargo Loading": "Load & Unload Cargo",
          },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Removal of Ground Combat Command Bonus", "Commander Abbreviations", "Destroyed Colony Commander Fix", "C&C Disassembly Fix"],
          insertAfter: {
            "Removal of Ground Combat Command Bonus": "Ground Commander Bonuses",
            "Commander Abbreviations": "Ship Commander Rank",
            "Destroyed Colony Commander Fix": "Commander Careers",
            "C&C Disassembly Fix": "Command & Control Rules",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Commander Search Fix", "Automated Assignment for Colony Governors", "Commander Assignment Priority", "Admin Command Deletion Fix"],
          insertAfter: {
            "Commander Search Fix": "Auto-Assignment of Naval Commanders",
            "Automated Assignment for Colony Governors": "Academy Commandants",
            "Commander Assignment Priority": "Auto-Assignment of Naval Commanders",
            "Admin Command Deletion Fix": "Commander Careers",
          },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Commercial Overhaul Penalty Fix"],
          insertAfter: { "Commercial Overhaul Penalty Fix": "Abandon Overhaul" },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Overhaul No Maintenance Fix", "Maintenance Explosion Fix", "Overhaul Fleet Position Fix"],
          insertAfter: {
            "Overhaul No Maintenance Fix": "Abandon Overhaul",
            "Maintenance Explosion Fix": "New Maintenance Rules",
            "Overhaul Fleet Position Fix": "Abandon Overhaul",
          },
        },
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
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Deployment Exceeded Condition"],
          insertAfter: { "Deployment Exceeded Condition": "Deployment Clock" },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Fire At Will", "Fire Delay for Point Defence"],
          insertAfter: {
            "Fire At Will": "Automated Weapon Assignment",
            "Fire Delay for Point Defence": "Fire Delay",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Area PD Multi-Fire Fix", "Area PD Impact Display Fix", "Fire Delay Fix"],
          insertAfter: {
            "Area PD Multi-Fire Fix": "Point Defence",
            "Area PD Impact Display Fix": "Point Defence",
            "Fire Delay Fix": "Fire Delay",
          },
        },
        {
          version: "1.11.0", file: "v1.11.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Hit Chance Display Fix"],
          insertAfter: { "Hit Chance Display Fix": "Fire Delay" },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Ordinal Numbers for Ground Formation Templates", "Ground Unit Series Creation Fix", "Ground Unit Series Deletion Fix", "Ground Force Mothership Display", "Parasite Ship Measurement Fix"],
          insertAfter: {
            "Ordinal Numbers for Ground Formation Templates": "Ground Forces: Part 2 - Formation Templates",
            "Ground Unit Series Creation Fix": "Ground Forces: Part 2 - Formation Templates",
            "Ground Unit Series Deletion Fix": "Ground Forces: Part 2 - Formation Templates",
            "Ground Force Mothership Display": "Ground Formation Element Transfer UI",
            "Parasite Ship Measurement Fix": "Ground Formation Element Transfer UI",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Ground Forces Replacements", "Ground Force Queue Fix", "Inherent Supply Fire Rate Fix", "Ground Unit Capability Fix", "Inherent Supply Replenishment Fix", "Auto Queue Ground Construction", "Ground Survey Speed Fix"],
          insertAfter: {
            "Ground Forces Replacements": "Ground Forces: Part 2 - Formation Templates",
            "Ground Force Queue Fix": "Ground Forces: Part 2 - Formation Templates",
            "Inherent Supply Fire Rate Fix": "Ground Force Logistics",
            "Ground Unit Capability Fix": "Ground Forces: Part 1 - Unit Design",
            "Inherent Supply Replenishment Fix": "Ground Force Logistics",
            "Auto Queue Ground Construction": "Ground Forces: Part 2 - Formation Templates",
            "Ground Survey Speed Fix": "Ground-based Geological Survey",
          },
        },
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
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Ground Combat Intel Fix"],
          insertAfter: { "Ground Combat Intel Fix": "Base Ground Combat Rules" },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md", kind: "bugfix",
          sections: ["STO Fighter Fix"],
          insertAfter: { "STO Fighter Fix": "Ground-based AA Fire" },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Foreign Fighter Ground Support Fix"],
          insertAfter: { "Foreign Fighter Ground Support Fix": "Ground-based AA Fire" },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md", kind: "bugfix",
          sections: ["STO Fighter Fix", "STO Target Dropdown Fix", "STO Weapon Error Fix"],
          insertAfter: {
            "STO Fighter Fix": "Surface-to-Orbit Weapons",
            "STO Target Dropdown Fix": "Surface-to-Orbit Weapons",
            "STO Weapon Error Fix": "Surface-to-Orbit Weapons",
          },
        },
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
      history: [
        {
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Boarding Hostile Act Fix", "Captured Ship Class Lock Fix"],
        },
        { version: "1.0.0", file: "v1.0.0/32-boarding-combat.md" },
      ],
    },
    {
      id: "damage-control",
      title: "Damage Control",
      category: "combat",
      history: [
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Repair Damage Control Fix"],
        },
        { version: "1.0.0", file: "v1.0.0/28-damage-control.md" },
      ],
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
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Change to Greenhouse Gas and Dust Mechanics"],
          insertAfter: { "Change to Greenhouse Gas and Dust Mechanics": "Terraforming Update" },
        },
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
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["SM Random Ruins Fix"],
          insertAfter: { "SM Random Ruins Fix": "Chance of Ruins" },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Constellation Names", "Minerva Trojan Naming Fix", "Trojan Asteroid Orbit Fix", "Sector Assignment Fix"],
          insertAfter: {
            "Constellation Names": "Star System Design Part 1: Modifying Stars",
            "Minerva Trojan Naming Fix": "Star System Design Part 6: Adding Moons and Lagrange Points",
            "Trojan Asteroid Orbit Fix": "Star System Design Part 6: Adding Moons and Lagrange Points",
            "Sector Assignment Fix": "Star System Design Part 1: Modifying Stars",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Small Comet Orbit Fix", "Moon Numbering Fix", "Dust and Radiation Editing"],
          insertAfter: {
            "Small Comet Orbit Fix": "Star System Design Part 5: Adding Planets, Comets and Asteroid Belts",
            "Moon Numbering Fix": "Star System Design Part 6: Adding Moons and Lagrange Points",
            "Dust and Radiation Editing": "Star System Design Part 3: Modifying System Bodies",
          },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["NPR Generation of Spoilers"],
        },
        {
          version: "1.11.0", file: "v1.11.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Aether Rift Save Fix"],
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["NPR Random Ship Names", "Fighter Search and Destroy Fix"],
          insertAfter: {
            "NPR Random Ship Names": "Human NPRs",
            "Fighter Search and Destroy Fix": "Human NPRs",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["AI Point Defence Estimate Fix", "AI Ram Fix", "SM Race Customization", "AI System Withdrawal", "NPR Active Sensors", "Rakhas Generation Change"],
          insertAfter: {
            "AI Point Defence Estimate Fix": "Human NPRs",
            "AI Ram Fix": "Human NPRs",
            "SM Race Customization": "New Spoiler Race",
            "AI System Withdrawal": "Human NPRs",
            "NPR Active Sensors": "Human NPRs",
            "Rakhas Generation Change": "New Spoiler Race",
          },
        },
        {
          version: "1.11.0", file: "v1.11.0/01-patch-notes.md", kind: "bugfix",
          sections: ["AI Repair Function Fix"],
          insertAfter: { "AI Repair Function Fix": "Human NPRs" },
        },
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Export Medals"],
          insertAfter: { "Export Medals": "Ship Achievements" },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Medal Save Fix", "Medal Deletion Fix"],
          insertAfter: {
            "Medal Save Fix": "Manual Medal Awards",
            "Medal Deletion Fix": "Manual Medal Awards",
          },
        },
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
      history: [
        {
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Death Spiral Luna Fix"],
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Earth Death Spiral", "New Game Exit Fix"],
        },
        { version: "1.0.0", file: "v1.0.0/21-new-game-setup.md" },
      ],
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
          version: "1.13.0", file: "v1.13.0/01-patch-notes.md",
          sections: ["Import and Export Event Colours", "Disassemble Refresh", "Low Gravity Habitable World Display Fix", "Survey Percentage Display Fix", "Waypoint Name Fix", "Paused Research Change", "Obsolete Class Copy Fix", "Mass Driver Error Fix"],
          insertAfter: {
            "Import and Export Event Colours": "Survey Site List",
            "Disassemble Refresh": "Survey Site List",
            "Low Gravity Habitable World Display Fix": "Race Comparison Window",
            "Survey Percentage Display Fix": "Survey Site List",
            "Waypoint Name Fix": "Survey Site List",
            "Paused Research Change": "Survey Site List",
            "Obsolete Class Copy Fix": "Save Button",
            "Mass Driver Error Fix": "Survey Site List",
          },
        },
        {
          version: "1.12.0", file: "v1.12.0/01-patch-notes.md",
          sections: ["Tactical Map Events", "Cycle Previous Locations", "Popup Menu Fix", "Species Temperature Display Fix", "SM Fill Ship Fix", "Galactic Map Position Fix", "Turret Research Project Fix", "Non-Active Research Fix"],
          insertAfter: {
            "Tactical Map Events": "Tactical Map in Background",
            "Cycle Previous Locations": "Tactical Map Popup Menu",
            "Popup Menu Fix": "Tactical Map Popup Menu",
            "Species Temperature Display Fix": "Race Comparison Window",
            "SM Fill Ship Fix": "Save Button",
            "Galactic Map Position Fix": "Survey Site List",
            "Turret Research Project Fix": "Survey Site List",
            "Non-Active Research Fix": "Survey Site List",
          },
        },
        {
          version: "1.11.0", file: "v1.11.0/01-patch-notes.md", kind: "bugfix",
          sections: ["Alt-F4 Hot Key Fix"],
          insertAfter: { "Alt-F4 Hot Key Fix": "Survey Site List" },
        },
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

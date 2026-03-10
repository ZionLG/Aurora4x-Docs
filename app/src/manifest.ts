export interface VersionInfo {
  version: string;
  label: string;
  date: string;
  file?: string;
}

export interface Category {
  id: string;
  label: string;
}

export interface Topic {
  id: string;
  title: string;
  category: string;
  base?: string;
}

export interface SectionRoute {
  topic: string;
  after?: string;
  replaces?: string;
  kind?: 'update' | 'bugfix';
}

export interface DocsManifest {
  versions: VersionInfo[];
  categories: Category[];
  topics: Topic[];
  sectionMap: Record<string, SectionRoute | SectionRoute[]>;
  versionTopics: Record<string, string[]>;
}

export const manifest: DocsManifest = {
  versions: [
    { version: "2.0.0", label: "v2.0.0 — Major Update", date: "2022-08-06", file: "v2.0.0/01-patch-notes.md" },
    { version: "1.13.0", label: "v1.13.0 — Major Update", date: "2021-04-21", file: "v1.13.0/01-patch-notes.md" },
    { version: "1.12.0", label: "v1.12.0 — Major Update", date: "2020-10-11", file: "v1.12.0/01-patch-notes.md" },
    { version: "1.11.0", label: "v1.11.0 — Bug Fixes", date: "2020-05-29", file: "v1.11.0/01-patch-notes.md" },
    { version: "1.10.0", label: "v1.10.0 — Major Update", date: "2020-05-27", file: "v1.10.0/01-patch-notes.md" },
    { version: "1.9.5", label: "v1.9.5 — Bug Fixes", date: "2020-05-06", file: "v1.9.5/01-bug-fixes.md" },
    { version: "1.9.0", label: "v1.9.0 — Minor Changes", date: "2020-04-28", file: "v1.9.0/01-minor-changes.md" },
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
    { id: "planetary-installations", title: "Planetary Installations", category: "economy", base: "v1.0.0/02-planetary-installations.md" },
    { id: "shipyards", title: "Shipyards", category: "economy", base: "v1.0.0/03-shipyards.md" },
    { id: "colonies", title: "Colonies", category: "economy", base: "v1.0.0/06-colonies.md" },
    { id: "civilians", title: "Civilians", category: "economy", base: "v1.0.0/07-civilians.md" },
    { id: "wealth-and-mining", title: "Wealth & Mining", category: "economy", base: "v1.0.0/34-wealth-and-mining.md" },

    // Ships & Design
    { id: "engines", title: "Engines", category: "ships", base: "v1.0.0/12-engines.md" },
    { id: "ship-components", title: "Ship Components", category: "ships", base: "v1.0.0/15-ship-components.md" },
    { id: "sensors-and-contacts", title: "Sensors & Contacts", category: "ships", base: "v1.0.0/14-sensors-and-contacts.md" },
    { id: "direct-fire-weapons", title: "Direct Fire Weapons & Power Plants", category: "ships", base: "v1.0.0/13-direct-fire-weapons-and-power-plants.md" },
    { id: "missiles-and-launchers", title: "Missiles & Launchers", category: "ships", base: "v1.0.0/16-missiles-and-launchers.md" },
    { id: "space-stations", title: "Space Stations & Orbital Habitats", category: "ships", base: "v1.0.0/23-space-stations-and-orbital-habitats.md" },

    // Fleet & Operations
    { id: "naval-organization", title: "Naval Organization", category: "fleet", base: "v1.0.0/08-naval-organization.md" },
    { id: "fleet-movement", title: "Fleet Movement & Orders", category: "fleet", base: "v1.0.0/22-fleet-movement-and-orders.md" },
    { id: "logistics", title: "Logistics", category: "fleet", base: "v1.0.0/04-logistics.md" },
    { id: "crew-and-commanders", title: "Crew, Commanders & Control Systems", category: "fleet", base: "v1.0.0/09-crew-commanders-and-control-systems.md" },
    { id: "maintenance", title: "Maintenance", category: "fleet", base: "v1.0.0/10-maintenance.md" },
    { id: "deployment-life-support", title: "Deployment & Life Support", category: "fleet", base: "v1.0.0/17-deployment-overcrowding-under-manning-and-life-support-failures.md" },

    // Combat
    { id: "combat-mechanics", title: "Combat Setup & Mechanics", category: "combat", base: "v1.0.0/24-combat-setup-and-mechanics.md" },
    { id: "ground-forces", title: "Ground Forces", category: "combat", base: "v1.0.0/19-ground-forces.md" },
    { id: "ground-combat", title: "Ground Combat", category: "combat", base: "v1.0.0/26-ground-combat.md" },
    { id: "ground-support-fighters", title: "Ground Support Fighters", category: "combat", base: "v1.0.0/27-ground-support-fighters.md" },
    { id: "surface-to-orbit", title: "Surface-to-Orbit Combat", category: "combat", base: "v1.0.0/29-surface-to-orbit-combat.md" },
    { id: "boarding-combat", title: "Boarding Combat", category: "combat", base: "v1.0.0/32-boarding-combat.md" },
    { id: "damage-control", title: "Damage Control", category: "combat", base: "v1.0.0/28-damage-control.md" },

    // Galaxy & Exploration
    { id: "systems-and-bodies", title: "Systems & Bodies", category: "galaxy", base: "v1.0.0/18-systems-and-bodies.md" },
    { id: "terraforming", title: "Terraforming", category: "galaxy", base: "v1.0.0/11-terraforming.md" },
    { id: "ruins", title: "Ruins & Ancient Constructs", category: "galaxy", base: "v1.0.0/20-ruins.md" },
    { id: "star-system-design", title: "Star System Design", category: "galaxy", base: "v1.0.0/37-star-system-design.md" },
    { id: "aether-rifts", title: "Aether Rifts", category: "galaxy" }, // no base

    // Diplomacy & Intelligence
    { id: "diplomacy", title: "Diplomacy", category: "diplomacy", base: "v1.0.0/35-diplomacy.md" },
    { id: "intelligence-gathering", title: "Intelligence Gathering", category: "diplomacy", base: "v1.0.0/31-intelligence-gathering.md" },
    { id: "alien-races", title: "Alien Races & Species Attributes", category: "diplomacy", base: "v1.0.0/33-alien-races-and-species-attributes.md" },

    // Personnel
    { id: "medals-and-achievements", title: "Medals & Achievements", category: "personnel", base: "v1.0.0/30-medals-and-achievements.md" },

    // Game Setup & UI
    { id: "new-game-setup", title: "New Game Setup", category: "setup", base: "v1.0.0/21-new-game-setup.md" },
    { id: "nomenclature", title: "Nomenclature", category: "setup", base: "v1.0.0/05-nomenclature.md" },
    { id: "user-interface", title: "User Interface Updates", category: "setup", base: "v1.0.0/36-user-interface-updates.md" },
    { id: "automatic-research", title: "Automatic Research", category: "setup" }, // no base
    { id: "text-summaries", title: "Text Summaries", category: "setup", base: "v1.0.0/38-text-summaries.md" },
  ],

  sectionMap: {
    // ── Planetary Installations ──
    "Assign New Labs": { topic: "planetary-installations", after: "Conventional Industry" },
    "Unused Construction Capacity": { topic: "planetary-installations", after: "Conventional Industry" },

    // ── Shipyards ──
    "Repair Yards": { topic: "shipyards", after: "Shipyard Worker Requirements" },
    "Shipyard Repair Capacity Fix": { topic: "shipyards", after: "Shipyard Worker Requirements" },
    "Commercial Shipyard Repair Fix": { topic: "shipyards", after: "Shipyard Worker Requirements" },
    "Shipyard Class Lock Fix": { topic: "shipyards", after: "Shipbuilding Changes" },
    "Instant Build to Carriers": { topic: "shipyards", after: "Shipbuilding Changes" },
    "Shipyard Slipway Destruction Fix": { topic: "shipyards" },
    "Fire Control Refit Fix": { topic: "shipyards" },
    "Refit Overhead Display Fix": { topic: "shipyards" },
    "Refit Ordnance Adjustment": { topic: "shipyards", kind: "bugfix" },
    "Shipyard Scrap Fix": { topic: "shipyards" },
    "Scrapping Wealth Fix": { topic: "shipyards" },
    "Shipyard Retool Error Fix": { topic: "shipyards", after: "Shipbuilding Changes" },
    "Ship Design Fixes": { topic: "shipyards", after: "Shipbuilding Changes" },
    "Scrap and Refit Display": { topic: "shipyards", after: "Auto Refit Tasks", kind: "bugfix" },
    "Prototypes": { topic: "shipyards", after: "Shipbuilding Changes", kind: "bugfix" },
    "Class Deletion": { topic: "shipyards", after: "Shipyard Worker Requirements", kind: "bugfix" },
    "Refit Dropdown": { topic: "shipyards", after: "Auto Refit Tasks", kind: "bugfix" },
    "Refit Tasks": { topic: "shipyards", after: "Refit Size", kind: "bugfix" },

    // ── Colonies ──
    "Colony Governor Protection Fix": { topic: "colonies", after: "Population Capacity" },
    "Colony Importance Error Fix": { topic: "colonies", after: "Population Capacity" },
    "Colony Governor Event Fix": { topic: "colonies", after: "Population Capacity" },
    "Sector Governor Bonus Fix": { topic: "colonies", after: "Population Capacity" },
    "Surrender Strength Fix": { topic: "colonies", after: "Population Capacity" },
    "Orbital Habitat Capacity Fix": { topic: "colonies", after: "Population Capacity" },
    "Population Ground Units": { topic: "colonies", after: "Automatic Pop Selection from Galactic Map" },
    "Change Capital Population": { topic: "colonies", after: "Population Capacity" },
    "Resurrecting Population Fix": { topic: "colonies", after: "Population Capacity" },
    "Gas Giant Colony Fix": { topic: "colonies", after: "Potential Colony Locations" },
    "Delete Empty Populations Fix": { topic: "colonies", after: "Delete Empty Colonies" },
    "Occupation Strength and Police Modifiers": { topic: "colonies", after: "Automatic Pop Selection from Galactic Map" },
    "Population and Colony Fixes": { topic: "colonies", after: "Delete Empty Colonies" },

    // ── Civilians ──
    "Civilian Harvester Fix": { topic: "civilians", after: "Shipping Lines" },
    "Civilian Shipping Fixes": { topic: "civilians", after: "Shipping Lines" },
    "Civilian Colony Ships": { topic: "civilians", after: "Civilian Destinations", kind: "bugfix" },

    // ── Wealth & Mining ──
    "Sorium Depletion Event": { topic: "wealth-and-mining", after: "Mineral Search Flag" },

    // ── Engines ──
    "Engine Tech": { topic: "engines", after: "Engine Technology Progression", kind: "bugfix" },

    // ── Ship Components ──
    "Miscellaneous Components": { topic: "ship-components" },
    "Fractional Capacitors": { topic: "ship-components" },
    "Boat Bay Size Change": { topic: "ship-components" },
    "Armour Repair in Hangars": { topic: "ship-components" },
    "Automated Hangar Resupply": { topic: "ship-components" },
    "Carrier Operations Bonus": { topic: "ship-components" },
    "Distance Travelled": { topic: "ship-components" },
    "Component Development Cost Changes": { topic: "ship-components" },
    "Cloak Research Fix": { topic: "ship-components" },
    "Boat Bay Design Fix": { topic: "ship-components" },
    "Jump Drive Cost Fix": { topic: "ship-components" },
    "Obsolete Component Button Fix": { topic: "ship-components" },
    "Insufficient Power Alert": { topic: "ship-components" },
    "Class Function Display": { topic: "ship-components" },
    "Spinal Weapon Fix": { topic: "ship-components" },
    "Negative Spare Berths Fix": { topic: "ship-components" },
    "Single System Multiples Fix": { topic: "ship-components" },
    "Spinal Weapon Type Fix": { topic: "ship-components" },
    "C&C Disassembly Fix": [
      { topic: "ship-components" },
      { topic: "crew-and-commanders", after: "Command & Control Rules" },
    ],
    "Cloaking Device Size Fix": { topic: "ship-components" },
    "Stabilisation Module Fix": { topic: "ship-components" },
    "Hangar and Parasite Fix": { topic: "ship-components", after: "Fuel Storage Costs" },
    "Fire Control Range": { topic: "ship-components", after: "Prototype Components", kind: "bugfix" },
    "Conventional Reactor": { topic: "ship-components", after: "Fuel Storage Costs" },

    // ── Sensors & Contacts ──
    "Short Name Contact Grouping Fix": { topic: "sensors-and-contacts" },
    "Buoy Orbit Fix": { topic: "sensors-and-contacts" },
    "Tracking Station Range Fix": { topic: "sensors-and-contacts" },
    "Tractor Link Fix": { topic: "sensors-and-contacts" },
    "ELINT Passive Sensor Fix": { topic: "sensors-and-contacts", after: "Ground Forces Detection" },
    "Passive Sensor Buoy Fix": { topic: "sensors-and-contacts", after: "Transponders" },
    "DSTS Display": { topic: "sensors-and-contacts", after: "Ground Forces Detection", kind: "bugfix" },
    "Buoy Design": { topic: "sensors-and-contacts", after: "Transponders", kind: "bugfix" },

    // ── Direct Fire Weapons ──
    "Reduced Shot Railguns": { topic: "direct-fire-weapons", after: "Gauss Cannon Research Changes" },
    "Single Weapon Fire Controls": { topic: "direct-fire-weapons", after: "Turret Update" },
    "Beam FC Option Fix": { topic: "direct-fire-weapons", after: "Turret Update" },
    "Spinal Railgun Removal": { topic: "direct-fire-weapons", after: "Gauss Cannon Research Changes" },
    "Zero Hit Chance Beam Fix": { topic: "direct-fire-weapons", after: "Weapon Failure" },
    "Auto Assign FC ECCM Fix": { topic: "direct-fire-weapons", after: "Turret Update" },
    "Railgun Point Defence": { topic: "direct-fire-weapons", after: "Gauss Cannon Research Changes" },
    "Fire Control Fixes": [
      { topic: "direct-fire-weapons", after: "Turret Update" },
      { topic: "missiles-and-launchers", after: "Ship Ordnance Templates" },
    ],
    "Hit Chance Fix": [
      { topic: "direct-fire-weapons", after: "Weapon Failure" },
      { topic: "combat-mechanics", after: "Fire Delay" },
    ],

    // ── Missiles & Launchers ──
    "Random Second Stage Targeting": { topic: "missiles-and-launchers", after: "Missile Updates" },
    "Missile Launcher Ammo Check Fix": { topic: "missiles-and-launchers", after: "Missile Launcher Changes" },
    "Geosurvey Missile Option Fix": { topic: "missiles-and-launchers", after: "Missile Updates" },
    "Second-Stage Missile Magazine Fix": { topic: "missiles-and-launchers", after: "Magazine Design" },
    "Missile Shipyard Target Fix": { topic: "missiles-and-launchers", after: "Launch Ready Ordnance" },
    "Missile Project Creation Fix": { topic: "missiles-and-launchers", after: "Launch Ready Ordnance" },
    "Missile PD Mode Fix": { topic: "missiles-and-launchers", after: "Tracking Time Bonus vs Missiles" },
    "Missile FC AMM Launch": { topic: "missiles-and-launchers", after: "Launch Ready Ordnance" },
    "Reduced-Size Missile Launcher Fix": { topic: "missiles-and-launchers", after: "Missile Launcher Changes" },

    // ── Space Stations ──
    "Station No Armour Fix": { topic: "space-stations" },
    "Overhaul and Station Fixes": { topic: "space-stations" },

    // ── Naval Organization ──
    "Parasites on Transported Items": { topic: "naval-organization" },
    "Required Power Display Fix": { topic: "naval-organization" },
    "PPV Display": [
      { topic: "naval-organization", after: "Naval Organization", kind: "bugfix" },
      { topic: "user-interface", after: "Assigned Mothership Display", kind: "bugfix" },
    ],

    // ── Fleet Movement ──
    "Sorium Gas Giant Survey Fix": { topic: "fleet-movement", after: "Standing Orders" },
    "Set Specific Threat Fix": { topic: "fleet-movement", after: "Standing Orders" },
    "Refuel Resupply Overhaul Standing Order Fix": { topic: "fleet-movement", after: "Standing Orders" },
    "Fleet Window UI Additions": { topic: "fleet-movement", after: "Fleet Distance and Time" },
    "Fleet Creation Location Fix": { topic: "fleet-movement", after: "Fleet Order Templates" },
    "Hide Fleets in Orbit": { topic: "fleet-movement", after: "Fleet Distance and Time" },
    "Fleet Name in Events": { topic: "fleet-movement", after: "Fleet Distance and Time" },
    "Fleet Escort Orders": { topic: "fleet-movement", after: "Standing Orders" },
    "Move Fleet to Waypoint": { topic: "fleet-movement", after: "Fleet Order Templates" },
    "Load All Minerals Until Full": { topic: "fleet-movement", after: "Fleet Order Templates" },
    "Pickup Nearest Lifepod": { topic: "fleet-movement", after: "Standing Orders" },
    "Deployment Exceeded Condition": [
      { topic: "fleet-movement", after: "Standing Orders" },
      { topic: "deployment-life-support", after: "Deployment Clock" },
    ],
    "Repeat Orders X Times": { topic: "fleet-movement", after: "Fleet Order Templates" },
    "Refuel, Resupply and Overhaul Conditional Order": { topic: "fleet-movement", after: "Standing Orders" },
    "Survey Next Three Bodies or Locations": { topic: "fleet-movement", after: "Standing Orders" },
    "Lagrange Point Order Display Fix": { topic: "fleet-movement", after: "Fleet Distance and Time" },
    "Tug Fuel Consumption Fix": { topic: "fleet-movement", after: "Fleet Maximum Speed" },
    "Wreck Salvage Display Fix": { topic: "fleet-movement", after: "Fleet Distance and Time" },
    "Land on Assigned Mothership as Sub-Fleet": { topic: "fleet-movement", after: "Standing Orders" },
    "Fleet Order Fixes": { topic: "fleet-movement", after: "Fleet Order Templates" },
    "Passenger Liner": { topic: "fleet-movement", after: "Fleet Maximum Speed", kind: "bugfix" },
    "Colony Fleets": { topic: "fleet-movement", after: "Standing Orders", kind: "bugfix" },
    "Fleet Window": { topic: "fleet-movement", after: "Fleet Distance and Time", kind: "bugfix" },
    "Order Delay": { topic: "fleet-movement", after: "Fleet Order Templates" },

    // ── Logistics ──
    "Resupply from Stationary Supply Ship": { topic: "logistics", after: "Resupply Changes" },
    "SM Partial Refuel Fix": { topic: "logistics", after: "Load & Unload Cargo" },
    "Underway Replenishment Reset Fix": { topic: "logistics", after: "Resupply Changes" },
    "Unload Max Items Fix": { topic: "logistics", after: "Load & Unload Cargo" },
    "Cargo Shuttle Maintenance Fix": { topic: "logistics", after: "Resupply Changes" },
    "Fighter Cargo Loading": { topic: "logistics", after: "Load & Unload Cargo" },
    "Underway Replenishment": { topic: "logistics", after: "Resupply Changes", kind: "bugfix" },
    "Load Orders": { topic: "logistics", after: "Load & Unload Cargo", kind: "bugfix" },

    // ── Crew & Commanders ──
    "Removal of Ground Combat Command Bonus": { topic: "crew-and-commanders", after: "Ground Commander Bonuses" },
    "Commander Abbreviations": { topic: "crew-and-commanders", after: "Ship Commander Rank" },
    "Destroyed Colony Commander Fix": { topic: "crew-and-commanders", after: "Commander Careers" },
    "Commander Search Fix": { topic: "crew-and-commanders", after: "Auto-Assignment of Naval Commanders" },
    "Automated Assignment for Colony Governors": { topic: "crew-and-commanders", after: "Academy Commandants" },
    "Commander Assignment Priority": { topic: "crew-and-commanders", after: "Auto-Assignment of Naval Commanders" },
    "Admin Command Deletion Fix": { topic: "crew-and-commanders", after: "Commander Careers" },
    "Commander Fixes": { topic: "crew-and-commanders", after: "Academy Commandants" },
    "Rank Requirements": { topic: "crew-and-commanders", after: "Academy Commandants", kind: "bugfix" },
    "SM Add Commanders": { topic: "crew-and-commanders", after: "Commander Careers", kind: "bugfix" },

    // ── Maintenance ──
    "Commercial Overhaul Penalty Fix": { topic: "maintenance", after: "Abandon Overhaul" },
    "Overhaul No Maintenance Fix": { topic: "maintenance", after: "Abandon Overhaul" },
    "Maintenance Explosion Fix": { topic: "maintenance", after: "New Maintenance Rules" },
    "Overhaul Fleet Position Fix": { topic: "maintenance", after: "Abandon Overhaul" },
    "Maintenance Report Additions": { topic: "maintenance", after: "Abandon Overhaul" },
    "Maintenance Failure": { topic: "maintenance", after: "New Maintenance Rules", kind: "bugfix" },

    // ── Deployment & Life Support ──
    "Deployment Fix": { topic: "deployment-life-support", after: "Deployment Clock" },

    // ── Combat Mechanics ──
    "Fire At Will": { topic: "combat-mechanics", after: "Automated Weapon Assignment" },
    "Fire Delay for Point Defence": { topic: "combat-mechanics", after: "Fire Delay" },
    "Area PD Multi-Fire Fix": { topic: "combat-mechanics", after: "Point Defence" },
    "Area PD Impact Display Fix": { topic: "combat-mechanics", after: "Point Defence" },
    "Fire Delay Fix": { topic: "combat-mechanics", after: "Fire Delay" },
    "Hit Chance Display Fix": { topic: "combat-mechanics", after: "Fire Delay" },

    // ── Ground Forces ──
    "Ordinal Numbers for Ground Formation Templates": { topic: "ground-forces", after: "Ground Forces: Part 2 - Formation Templates" },
    "Ground Unit Series Creation Fix": { topic: "ground-forces", after: "Ground Forces: Part 2 - Formation Templates" },
    "Ground Unit Series Deletion Fix": { topic: "ground-forces", after: "Ground Forces: Part 2 - Formation Templates" },
    "Ground Force Mothership Display": { topic: "ground-forces", after: "Ground Formation Element Transfer UI" },
    "Parasite Ship Measurement Fix": { topic: "ground-forces", after: "Ground Formation Element Transfer UI" },
    "Ground Forces Replacements": { topic: "ground-forces", after: "Ground Forces: Part 2 - Formation Templates" },
    "Ground Force Queue Fix": { topic: "ground-forces", after: "Ground Forces: Part 2 - Formation Templates" },
    "Inherent Supply Fire Rate Fix": { topic: "ground-forces", after: "Ground Force Logistics" },
    "Ground Unit Capability Fix": { topic: "ground-forces", after: "Ground Forces: Part 1 - Unit Design" },
    "Inherent Supply Replenishment Fix": { topic: "ground-forces", after: "Ground Force Logistics" },
    "Auto Queue Ground Construction": { topic: "ground-forces", after: "Ground Forces: Part 2 - Formation Templates" },
    "Ground Survey Speed Fix": { topic: "ground-forces", after: "Ground-based Geological Survey" },
    "Queued Ground Formation Training Tasks": { topic: "ground-forces", after: "Ground Forces: Part 2 - Formation Templates" },
    "Ground Formation Fixes": { topic: "ground-forces", after: "Ground Formation Element Transfer UI" },
    "Ground Combat Fixes": [
      { topic: "ground-forces", after: "Ground Force Fortification" },
      { topic: "ground-combat", after: "Base Ground Combat Rules" },
      { topic: "ground-support-fighters", after: "Ground-based AA Fire" },
    ],
    "Formation Templates": { topic: "ground-forces", after: "Ground Forces: Part 2 - Formation Templates", kind: "bugfix" },
    "New Formations": { topic: "ground-forces", after: "Setting Ground Formation Support", kind: "bugfix" },
    "Ground Force Capture": { topic: "ground-forces", after: "Genetically Enhanced Soldiers", kind: "bugfix" },
    "Civilian Ground Forces Toggle": { topic: "ground-forces", after: "Ground Forces: Part 2 - Formation Templates" },

    // ── Ground Combat ──
    "Ground Combat Intel Fix": { topic: "ground-combat", after: "Base Ground Combat Rules" },

    // ── Ground Support Fighters ──
    "STO Fighter Fix": [
      { topic: "ground-support-fighters", after: "Ground-based AA Fire" },
      { topic: "surface-to-orbit", after: "Surface-to-Orbit Weapons" },
    ],
    "Foreign Fighter Ground Support Fix": { topic: "ground-support-fighters", after: "Ground-based AA Fire" },

    // ── Surface-to-Orbit ──
    "STO Target Dropdown Fix": { topic: "surface-to-orbit", after: "Surface-to-Orbit Weapons" },
    "STO Weapon Error Fix": { topic: "surface-to-orbit", after: "Surface-to-Orbit Weapons" },
    "STO Availability": { topic: "surface-to-orbit", after: "Surface-to-Orbit Weapons", kind: "bugfix" },

    // ── Boarding Combat ──
    "Boarding Hostile Act Fix": { topic: "boarding-combat" },
    "Captured Ship Class Lock Fix": { topic: "boarding-combat" },

    // ── Damage Control ──
    "Repair Damage Control Fix": { topic: "damage-control" },

    // ── Terraforming ──
    "Change to Greenhouse Gas and Dust Mechanics": { topic: "terraforming", after: "Terraforming Update" },
    "Terraforming Fix": { topic: "terraforming", after: "Terraforming Update" },

    // ── Ruins ──
    "SM Random Ruins Fix": { topic: "ruins", after: "Chance of Ruins" },
    "Ancient Constructs": { topic: "ruins", after: "Ruins in Sol" },
    "Anomalies": { topic: "ruins", after: "Chance of Ruins", kind: "bugfix" },

    // ── Star System Design ──
    "Constellation Names": { topic: "star-system-design", after: "Star System Design Part 1: Modifying Stars" },
    "Minerva Trojan Naming Fix": { topic: "star-system-design", after: "Star System Design Part 6: Adding Moons and Lagrange Points" },
    "Trojan Asteroid Orbit Fix": { topic: "star-system-design", after: "Star System Design Part 6: Adding Moons and Lagrange Points" },
    "Sector Assignment Fix": { topic: "star-system-design", after: "Star System Design Part 1: Modifying Stars" },
    "Small Comet Orbit Fix": { topic: "star-system-design", after: "Star System Design Part 5: Adding Planets, Comets and Asteroid Belts" },
    "Moon Numbering Fix": { topic: "star-system-design", after: "Star System Design Part 6: Adding Moons and Lagrange Points" },
    "Dust and Radiation Editing": { topic: "star-system-design", after: "Star System Design Part 3: Modifying System Bodies" },
    "Random Stars Fix": { topic: "star-system-design", after: "Star System Design Part 2: Adding Stars" },
    "Sector and System Fixes": { topic: "star-system-design", after: "Star System Design Part 4: Deleting Stars and System Bodies" },
    "Random Stars": { topic: "star-system-design", after: "Star System Design Part 2: Adding Stars", kind: "bugfix" },
    "Planet Minerals": { topic: "star-system-design", after: "Star System Design Part 5: Adding Planets, Comets and Asteroid Belts", kind: "bugfix" },

    // ── Aether Rifts ──
    "NPR Generation of Spoilers": { topic: "aether-rifts" },
    "Aether Rift Save Fix": { topic: "aether-rifts" },
    "Aether Rifts": { topic: "aether-rifts" },

    // ── Alien Races ──
    "NPR Random Ship Names": { topic: "alien-races", after: "Human NPRs" },
    "Fighter Search and Destroy Fix": { topic: "alien-races", after: "Human NPRs" },
    "AI Point Defence Estimate Fix": { topic: "alien-races", after: "Human NPRs" },
    "AI Ram Fix": { topic: "alien-races", after: "Human NPRs" },
    "SM Race Customization": { topic: "alien-races", after: "New Spoiler Race" },
    "AI System Withdrawal": { topic: "alien-races", after: "Human NPRs" },
    "NPR Active Sensors": { topic: "alien-races", after: "Human NPRs" },
    "Rakhas Generation Change": { topic: "alien-races", after: "New Spoiler Race" },
    "AI Repair Function Fix": { topic: "alien-races", after: "Human NPRs" },
    "NPR Design Variety": { topic: "alien-races", after: "Human NPRs" },
    "Alien Class Renaming": { topic: "alien-races", after: "New Spoiler Race", kind: "bugfix" },

    // ── Medals & Achievements ──
    "Export Medals": { topic: "medals-and-achievements", after: "Ship Achievements" },
    "Medal Save Fix": { topic: "medals-and-achievements", after: "Manual Medal Awards" },
    "Medal Deletion Fix": { topic: "medals-and-achievements", after: "Manual Medal Awards" },
    "Medal Import": { topic: "medals-and-achievements", after: "Ship Achievements" },

    // ── New Game Setup ──
    "Death Spiral Luna Fix": { topic: "new-game-setup" },
    "Earth Death Spiral": { topic: "new-game-setup" },
    "New Game Exit Fix": { topic: "new-game-setup" },

    // ── User Interface ──
    "Import and Export Event Colours": { topic: "user-interface", after: "Survey Site List" },
    "Disassemble Refresh": { topic: "user-interface", after: "Survey Site List" },
    "Low Gravity Habitable World Display Fix": { topic: "user-interface", after: "Race Comparison Window" },
    "Survey Percentage Display Fix": { topic: "user-interface", after: "Survey Site List" },
    "Waypoint Name Fix": { topic: "user-interface", after: "Survey Site List" },
    "Paused Research Change": { topic: "user-interface", after: "Survey Site List" },
    "Obsolete Class Copy Fix": { topic: "user-interface", after: "Save Button" },
    "Mass Driver Error Fix": { topic: "user-interface", after: "Survey Site List" },
    "Tactical Map Events": { topic: "user-interface", after: "Tactical Map in Background" },
    "Cycle Previous Locations": { topic: "user-interface", after: "Tactical Map Popup Menu" },
    "Popup Menu Fix": { topic: "user-interface", after: "Tactical Map Popup Menu" },
    "Species Temperature Display Fix": { topic: "user-interface", after: "Race Comparison Window" },
    "SM Fill Ship Fix": { topic: "user-interface", after: "Save Button" },
    "Galactic Map Position Fix": { topic: "user-interface", after: "Survey Site List" },
    "Turret Research Project Fix": { topic: "user-interface", after: "Survey Site List" },
    "Non-Active Research Fix": { topic: "user-interface", after: "Survey Site List" },
    "Alt-F4 Hot Key Fix": { topic: "user-interface", after: "Survey Site List" },
    "Hot Keys": { topic: "user-interface", after: "Survey Site List" },
    "Faster Save": { topic: "user-interface", after: "Survey Site List" },
    "UI Display Improvements": { topic: "user-interface", after: "Linked Windows" },
    "Select Name": { topic: "user-interface", after: "Save Button", kind: "bugfix" },
    "Task Completion Time": { topic: "user-interface", kind: "bugfix" },
    "Fighter Construction Event": { topic: "user-interface" },
    "New Events": { topic: "user-interface" },
    "Distance Measuring": { topic: "user-interface", after: "Tactical Map Popup Menu" },
    "Multiple Window Option": { topic: "user-interface", replaces: "Multiple Window Instances" },
    "Low G Habitable Worlds": { topic: "user-interface", after: "Race Comparison Window" },

    // ── Automatic Research ──
    "Automatic Research": { topic: "automatic-research" },

    // ═══════════════════════════════════════════
    // v2.0.0 sections
    // ═══════════════════════════════════════════

    // ── v2 Planetary Installations ──
    "Scrapping Installations": { topic: "planetary-installations", after: "Planetary Installations" },

    // ── v2 Colonies ──
    "Colony Cost Projection": { topic: "colonies", after: "Automatic Pop Selection from Galactic Map" },
    "Deep Space Populations": { topic: "colonies", after: "Automatic Pop Selection from Galactic Map" },
    "Population Changes and Ark Modules": { topic: "colonies", after: "Automatic Pop Selection from Galactic Map" },
    "Automated Refuel Option for Colonies": { topic: "colonies", after: "Automatic Pop Selection from Galactic Map" },
    "Stockpile Transfers": { topic: "colonies", after: "Automatic Pop Selection from Galactic Map" },
    "Additional Conventional Systems": { topic: "colonies", after: "Automatic Pop Selection from Galactic Map" },

    // ── v2 Civilians ──
    "Civilian Contracts": { topic: "civilians", after: "C# Civilian Mining Check" },
    "Highlighted Civilian Mining Colonies": { topic: "civilians", after: "C# Civilian Mining Check" },
    "Commercial Jumps": { topic: "civilians", after: "C# Civilian Mining Check" },

    // ── v2 Wealth & Mining ──
    "Wealth History": { topic: "wealth-and-mining", after: "Mineral Search Flag" },

    // ── v2 Engines ──
    "Minimum Jump Engine Size": { topic: "engines", after: "Engine Technology Progression" },
    "Engine Technology Naming": { topic: "engines", after: "Engine Technology Progression" },

    // ── v2 Ship Components ──
    "Automatic Bridge": { topic: "ship-components", after: "Researching Prototypes" },
    "Small Craft Refuelling System": { topic: "ship-components", after: "Researching Prototypes" },
    "Hull Numbers": { topic: "ship-components", after: "Researching Prototypes" },
    "Class Design Highlighting": { topic: "ship-components", after: "Researching Prototypes" },
    "Cargo Holds Required": { topic: "ship-components", after: "Researching Prototypes" },
    "Mobile Repair Bays": { topic: "ship-components", after: "Researching Prototypes" },

    // ── v2 Sensors & Contacts ──
    "Re-Establish Ship Contact": { topic: "sensors-and-contacts", after: "Transponders" },

    // ── v2 Space Stations ──
    "Changes to Commercial Hangar Repairs": { topic: "space-stations", after: "Orbital Habitats" },

    // ── v2 Naval Organization ──
    "Sub Fleet View": { topic: "naval-organization", after: "Assignment of Ships to Populations" },
    "Squadrons": { topic: "naval-organization", after: "Assignment of Ships to Populations" },
    "Admin Command Required Ranks": { topic: "naval-organization", after: "Assignment of Ships to Populations" },
    "Automated Assignment for Naval Admin Commands": { topic: "naval-organization", after: "Assignment of Ships to Populations" },

    // ── v2 Fleet Movement ──
    "Fleet Active Sensor Button": { topic: "fleet-movement", after: "Survey Speed" },
    "Overhauls and Movement Orders": [
      { topic: "fleet-movement", after: "Survey Speed" },
      { topic: "maintenance", after: "Abandon Overhaul" },
    ],
    "Jump Shock": { topic: "fleet-movement", after: "Survey Speed" },
    "Default Movement Actions": { topic: "fleet-movement", after: "Survey Speed" },
    "Fleet Interception Interrupt": { topic: "fleet-movement", after: "Survey Speed" },
    "Launch All": { topic: "fleet-movement", after: "Survey Speed" },
    "Contacts as Move Destination": { topic: "fleet-movement", after: "Survey Speed" },
    "Fleet Raise Shields Button": { topic: "fleet-movement", after: "Survey Speed" },
    "Transfer Fleet to Alien Race": { topic: "fleet-movement", after: "Survey Speed" },

    // ── v2 Logistics ──
    "Loss of Cargo": { topic: "logistics", after: "Logistics Reports" },
    "Logistics and Cargo Handling": { topic: "logistics", after: "Logistics Reports" },
    "Non-Combat Resupply": { topic: "logistics", after: "Logistics Reports" },
    "Cargo Transfers": { topic: "logistics", after: "Logistics Reports" },

    // ── v2 Crew & Commanders ──
    "Academy Commandant Display": { topic: "crew-and-commanders", after: "Change Scientist Research Field" },
    "Retired/Dead Commanders": { topic: "crew-and-commanders", after: "Change Scientist Research Field" },
    "Changes to Crew Training / Fleet Training": { topic: "crew-and-commanders", after: "Change Scientist Research Field" },
    "Academy Training Rates": { topic: "crew-and-commanders", after: "Change Scientist Research Field" },
    "On-Demand Promotions": { topic: "crew-and-commanders", after: "Change Scientist Research Field" },
    "Commander Bonuses": { topic: "crew-and-commanders", after: "Change Scientist Research Field" },
    "Starting Commanders": { topic: "crew-and-commanders", after: "Change Scientist Research Field" },
    "No Officers Option": { topic: "crew-and-commanders", after: "Change Scientist Research Field" },
    "Limited Research Administration": { topic: "crew-and-commanders", after: "Change Scientist Research Field" },
    "Reduced Crew for Short Deployments": { topic: "crew-and-commanders", after: "Change Scientist Research Field" },

    // ── v2 Combat Mechanics ──
    "Collateral Damage": { topic: "combat-mechanics", after: "Point Defence Fire Control" },
    "Cloaks and Combat": { topic: "combat-mechanics", after: "Point Defence Fire Control" },
    "Cease Fire All Ships": { topic: "combat-mechanics", after: "Point Defence Fire Control" },
    "One Second Sub Pulses": { topic: "combat-mechanics", after: "Point Defence Fire Control" },
    "Detailed Combat Events": { topic: "combat-mechanics", after: "Point Defence Fire Control" },
    "Fleet Point Defence Summary": { topic: "combat-mechanics", after: "Point Defence Fire Control" },

    // ── v2 Ground Forces ──
    "Rename Alien Ground Units": { topic: "ground-forces", after: "Genetically Enhanced Soldiers" },
    "Scrapping Ground Unit Formations": { topic: "ground-forces", after: "Genetically Enhanced Soldiers" },

    // ── v2 Ground Combat ──
    "Dominant Terrain Change": { topic: "ground-combat", after: "Ground Combat Events" },
    "New Planetary Terrains": { topic: "ground-combat", after: "Ground Combat Events" },
    "Combat Capabilities vs Planetary Terrain": { topic: "ground-combat", after: "Ground Combat Events" },

    // ── v2 Surface-to-Orbit ──
    "STO Targeting": { topic: "surface-to-orbit", after: "Planetary Bombardment" },

    // ── v2 Systems & Bodies ──
    "Twin Planets": { topic: "systems-and-bodies", after: "Player Race Banned Bodies" },
    "Eccentric Orbits": { topic: "systems-and-bodies", after: "Player Race Banned Bodies" },
    "Gas Giant Effects": { topic: "systems-and-bodies", after: "Player Race Banned Bodies" },
    "Water without Atmosphere": { topic: "systems-and-bodies", after: "Player Race Banned Bodies" },
    "Hydrosphere Changes": { topic: "systems-and-bodies", after: "Player Race Banned Bodies" },
    "Sol Bodies with Water": { topic: "systems-and-bodies", after: "Player Race Banned Bodies" },
    "Black Holes": { topic: "systems-and-bodies", after: "Player Race Banned Bodies" },
    "Mass Modifier for Jump Points": { topic: "systems-and-bodies", after: "Player Race Banned Bodies" },

    // ── v2 Terraforming ──
    "Terraforming Installations Update": { topic: "terraforming", after: "Terraforming Update" },

    // ── v2 Ruins ──
    "Alien Artifacts": { topic: "ruins", after: "Ruins in Sol" },

    // ── v2 Star System Design ──
    "Regenerate Jump Points and Minerals": { topic: "star-system-design", after: "Star System Design Part 7: Deleting Asteroids and Lagrange Points" },

    // ── v2 Aether Rifts ──
    "Aether Raiders": { topic: "aether-rifts" },

    // ── v2 Diplomacy ──
    "Hostility Modifier": { topic: "diplomacy", after: "Diplomacy Part 8: Diplomatic Ships" },

    // ── v2 Alien Races ──
    "Starting Tech Points for NPRs and Spoilers": { topic: "alien-races", after: "New Species Attributes" },
    "AI Threat Assessment Changes": { topic: "alien-races", after: "New Species Attributes" },
    "System AI Update": { topic: "alien-races", after: "New Species Attributes" },
    "AI Ground Offensives": { topic: "alien-races", after: "New Species Attributes" },

    // ── v2 New Game Setup ──
    "Minimum Player Systems for Spoilers": { topic: "new-game-setup", after: "Starting Financial Centres" },

    // ── v2 User Interface ──
    "Events for All Player Races on Tactical Map": { topic: "user-interface", after: "Survey Site List" },
    "Single Orbit View": { topic: "user-interface", after: "Survey Site List" },
    "Largest Planet Selected": { topic: "user-interface", after: "Survey Site List" },
    "Galactic Map Restricted Distance": { topic: "user-interface", after: "Survey Site List" },
    "Bug Fixes": { topic: "user-interface", after: "Survey Site List" },
    "Minor Changes": { topic: "user-interface", after: "Survey Site List" },
  },

  versionTopics: {
    "2.0.0": [
      "aether-rifts", "alien-races", "civilians", "colonies",
      "combat-mechanics", "crew-and-commanders", "diplomacy",
      "engines", "fleet-movement", "ground-combat", "ground-forces",
      "logistics", "naval-organization", "new-game-setup",
      "planetary-installations", "ruins", "sensors-and-contacts",
      "ship-components", "space-stations", "star-system-design",
      "surface-to-orbit", "systems-and-bodies", "terraforming",
      "user-interface", "wealth-and-mining",
    ],
    "1.13.0": [
      "aether-rifts", "alien-races", "boarding-combat", "civilians",
      "colonies", "combat-mechanics", "crew-and-commanders", "direct-fire-weapons",
      "fleet-movement", "ground-forces", "ground-support-fighters", "maintenance",
      "medals-and-achievements", "missiles-and-launchers", "new-game-setup",
      "sensors-and-contacts", "ship-components", "shipyards",
      "star-system-design", "surface-to-orbit", "user-interface",
    ],
    "1.12.0": [
      "alien-races", "colonies", "combat-mechanics", "crew-and-commanders",
      "damage-control", "deployment-life-support", "direct-fire-weapons",
      "fleet-movement", "ground-combat", "ground-forces", "ground-support-fighters",
      "logistics", "maintenance", "medals-and-achievements", "missiles-and-launchers",
      "naval-organization", "new-game-setup", "planetary-installations", "ruins",
      "sensors-and-contacts", "ship-components", "shipyards", "space-stations",
      "star-system-design", "terraforming", "user-interface",
    ],
    "1.11.0": [
      "aether-rifts", "alien-races", "combat-mechanics", "direct-fire-weapons",
      "missiles-and-launchers", "ship-components", "shipyards", "user-interface",
    ],
    "1.10.0": [
      "aether-rifts", "alien-races", "automatic-research", "civilians",
      "colonies", "combat-mechanics", "crew-and-commanders", "deployment-life-support",
      "direct-fire-weapons", "fleet-movement", "ground-forces", "maintenance",
      "medals-and-achievements", "missiles-and-launchers", "planetary-installations",
      "ruins", "ship-components", "shipyards", "space-stations",
      "star-system-design", "terraforming", "user-interface", "wealth-and-mining",
    ],
    "1.9.5": [
      "alien-races", "civilians", "crew-and-commanders", "engines",
      "fleet-movement", "ground-combat", "ground-forces", "ground-support-fighters",
      "logistics", "maintenance", "naval-organization", "ruins",
      "sensors-and-contacts", "ship-components", "shipyards",
      "star-system-design", "surface-to-orbit", "user-interface",
    ],
    "1.9.0": [
      "fleet-movement", "ground-forces", "ship-components", "user-interface",
    ],
  },
};

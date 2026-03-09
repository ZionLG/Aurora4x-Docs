**Base Ground Combat Rules**

Ground combat is conducted after the naval combat phase of each increment. One combat round will be performed for every eight hours that passed in the increment. Combat potentially takes place on any system body where populations exist from two or more hostile powers. If only one side has ground forces present, there may be a conquest (rules and code TBD). If ground forces are present from two or more hostile powers, ground combat will take place.

Ground forces can be assigned one of four field positions; front line attack, front line defence, support and rear echelon. Units in support and rear echelon positions cannot directly attack hostile forces but if they possess elements with bombardment weapons they may be assigned to support a front line formation. Support and rear echelon formations can also potentially provide anti-air cover (more in a rules post on ground-space interaction) and supply to front line units. Only formations with all elements supplied can be placed in front line attack mode. Formations placed in front line attack mode lose any fortification bonus.

Each race involved in a combat on a system body creates a list of its own formations on that system body (even if in multiple populations), plus a list of hostile alien formations, even if they are from multiple alien races in multiple populations. Hostile formations are checked for their weighted size. This is based on actual size for front line size, 25% for support and 5% for rear-echelon. Each hostile formation is given a range for potential selection, based on its weighted size.

Each front line friendly formation randomly targets a hostile formation. Friendly units with front line defence can target hostile front line formations. Friendly units with front line attack can target any hostile formation, although support and rear echelon are less likely given their smaller weighted size. In fact, the more formations that are pushed into front line positions, the less likely it is that rear areas will be attacked.

Support and Rear Echelon formations that contain formation elements with bombardment weapons can be assigned to support front line formations that are part of the same organisation. Formations in a support position with light bombardment weapons will fire with the front line formations (see next paragraph). Formations in a support position with medium/heavy bombardment weapons or formations in a rear echelon position with heavy bombardment weapons will fire in a subsequent phase - see below.

Once a front line formation (or a light bombardment element in the Support position) has been matched against a hostile formation, each friendly individual unit (a soldier or vehicle) in that formation engages a random element in the hostile formation, with the randomisation based on the relative size of the hostile formation elements. The targeting on an individual unit level represents that the different elements in a front line formation will generally be attacking in conjunction (infantry supporting tanks, etc.).

Once all front line attacks have been concluded, each unit in each element providing supporting bombardment will engage either the hostile formation being targeted by the friendly formation they are supporting, or one of the hostile formation’s own supporting elements (counter-battery fire). If the hostile formation is targeted, each unit in the supporting artillery element engages a random element in the hostile formation, with the randomisation based on the relative size of the hostile formation elements (the same as front-line vs front-line). If a hostile supporting element is targeted, all fire is directed against that element. This represents the difference between providing supporting fire in a combined arms front-line battle and targeting specific hostile artillery for counter-battery fire. The decision to target the hostile front-line formation vs hostile support elements is based on the relative sizes.

Supporting medium artillery will choose between hostile forces in Front-Line or Support field positions (and will ignore any elements in Rear Echelon field position for purposes of relative size), while heavy artillery can select targets in any field position. In other words, if the enemy has supporting heavy artillery in a rear echelon position, you will only be able to target those elements with your own heavy artillery (or ground support fighters, or orbital bombardment support).

Once all the initial combat is complete, there is a chance for a breakthrough. Each defending formation is checked according to the following procedure:

1.  A Cohesion Damage value is determined for each formation element using the following formula: Element Class Size \* Units Destroyed in Combat Phase \* (100 / Element Morale)
    
2.  The total Cohesion Damage is summed for all elements in the formation and compared to the formation size. This value, from 0 to 100%, is the Formation Cohesion Rating
    
3.  For each front line formation that attacked the defending formation, a Breakthrough Value is determined for each formation element
    
4.  Static elements have zero Breakthrough Value. Vehicle elements use the following formula: Element Class Size \* Element Units \* (Element Morale / 100). Infantry elements use the same formula as vehicles with a further modifier of 0.5.
    
5.  The total Breakthrough Value is summed for all elements in the attacking formation and compared to the formation size. The value is multiplied by 2 if the formation has a field position of Front Line Attack. This value, from 0 to 200%, is the Formation Breakthrough Rating
    
6.  A Breakthrough Potential value is determined for the attacking formation by multiplying the defending Formation Cohesion Rating by the attacking Formation Breakthrough Rating. If this value is equal to or greater than 30%, a breakthrough has occurred for that attacking formation.
    
7.  Each formation that creates a breakthrough mounts a second attack. This attack does not benefit from supporting artillery or fighter support. However, it functions as if the attacking formation has a field position of Front Line Attack, which means all hostile formations are potential targets, not just those on the front line.
    

The breakthrough rules mean that defending formations that suffer casualties may allow attacking formations to penetrate their lines and conduct a second attack. This is more likely under the following circumstances: A single defending formation is attacked by multiple attacking formations, the defender suffers a high casualty percentage in a single ground combat round (potentially because the formation is small in size), the defender suffers disproportionate casualties to elements with larger unit classes, the defender is low morale, the attacker is primarily vehicle-based, the attacker is on front-line attack, the attacker is high morale.

When a formation element is engaged in combat against a hostile formation element, supply is checked. If supply is not available, the number of units firing will be 25% of normal. Each attacking unit uses the following process:

1.  The To Hit Chance is determined. The base chance is 20% multiplied by the ‘Dominant Terrain To Hit Modifier’, the firing element morale / 100 and, if the target is not fortified, the base to hit chance for the target element unit class.
    
2.  The Fortification Modifier for the target element is determined, which is the current fortification level of the target multiplied by the ‘Dominant Terrain Fortification Modifier’. If the target is not fortified, the Fortification Modifier is 1.
    
3.  The Environment Modifier is calculated, taking into account gravity, pressure and temperature and whether the firing element has capabilities in those environments. Each environment for which the element is not trained has a x2 modifier.
    
4.  The Terrain Capability Modifier is calculated. If the element is trained to fight in the dominant terrain, the modifier is 0.5.
    
5.  The Final Chance to Hit is calculated as To Hit Chance / (Fortification Modifier \* Environment Modifier \* Terrain Capability Modifier)
    
6.  The unit fires each weapon it has (except for non-bombardment weapons on units bombarding from support and rear-echelon field positions). If the to-hit roll is equal or less than the final chance to hit, the weapon has struck the target.
    
7.  If a hit is scored, the armour-piercing (AP) value of the weapon is checked against the armour of the target. If AP is equal or greater than armour, the shot has penetrated. If AP is less than armour, the percentage chance to penetrate armour is (AP / Armour)^2.
    
8.  If the shot penetrates armour, the percentage chance of destroying the target is equal to (Weapon Damage / Target Hit Points)^2.
    
9.  If a target is destroyed, the firing element gains morale and the target element suffers a loss of morale. This morale gain/loss is doubled if the firing unit is in front-line attack mode.
    

All combat is conducted simultaneously and losses are applied once all firing is completed. Because of the way the above is structured, multi-way conflicts with multiple races on each side are possible.

  

**Ground Force Logistics**

Ground Units have two separate logistics requirements. The first is Maintenance, which applies to all units at all times and has a wealth cost equal to 12.5% of Ground Unit cost per annum. The second is Ground Supply Points (GSP), which applies only to combat units during ground combat.

The GSP requirement for a weapon component is equal to Penetration Value \* Damage Value \* Shots. For example, Personal Weapons is (1 x 1 x 1) = 1. Crew Served Anti-personnel is (1 x 1 x 6) = 6. Medium Anti-Vehicle is (4 x 6 x 1) = 24. Heavy Bombardment is (2 x 6 x 3) = 36.

The GSP requirement for a Ground Unit Class is the sum of its weapon components. For example, a tank with a Medium Anti-Vehicle component and a Crew Served Anti-personnel component would have a GSP requirement of 30. The GSP requirement for a Formation Element is the GSP for the Ground Unit Class in the element multiplied by the number of units. The GSP requirement for a Formation is the sum of the GSP for its constituent Formation Elements. In all these cases, that is the GSP cost to provide sufficient supply for ten combat rounds.

Two new ground unit components have been added; the Logistics Module, which is Size 50 and provides 500 GSP, and the Logistics Module - Small, which is Size 10 and provides 100 GSP. The standard module is available for light vehicle and infantry base types, while the small module is only available to infantry. Here is an example of a light vehicle with the Logistics Module.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/d2cd0d2579eef64110a45df7d7917c356f6ccf9e.png)

Ground units with either logistics module can be added to any level of the ground force hierarchy, either embedded with the front line combat formations or held at a superior formation, such as a headquarters.

Each Ground Unit has sufficient inherent supply points to fight ten rounds of combat (currently one round takes place every eight hours). After that point, only one quarter of units in a formation element that is out of supply will fire in each round. In addition, a formation with out of supply elements cannot use a field position of ‘Front Line Attack’ (more on this when I publish the full ground combat rules). However, if units with logistics modules are available, ground units can draw supply to both fight the current combat round and replenish supplies used in previous combat rounds.

Ground Units will attempt to draw supply from the formation that sits highest in their hierarchy and is at the same population. If no supply is available, they will move down the hierarchy to their own parent formation, checking at each stage. However, when drawing supply from outside their own formation, units can only draw on logistic modules mounted on light vehicles. Logistics modules with an infantry base type can only supply their own formation.

For example, a formation element of 10 tanks engaged in combat is part of an armoured formation with a brigade HQ formation above it and a division HQ formation above that. The tanks will check for a vehicle-based logistics element within the division formation first, then a vehicle-based logistics element within the brigade formation and finally either type of logistic element within their own parent formation. If no logistic elements are available, the tanks will use their inherent supply, although they can only use that inherent supply for ten combat rounds, unless resupplied. If a unit does not require a full resupply (for example, it still has sufficient inherent supply for eight combat rounds), it will only draw an appropriate fraction of its normal GSP requirement (in this case 20%).

When a formation element of logistics units provides supply, a number of units will be consumed based on the supply required. For example, assume the 10 tanks above each have a GSP requirement of 100, which is 1000 for the whole element. If they draw on a logistics element using light vehicles with normal logistics modules (which have 500 GSP each), two of those logistics vehicles would be consumed. When the GSP requirement does not neatly fit into the 500 point granularity, there is a chance of an additional logistics vehicle being consumed. This chance is dependent on the fraction of supplies required. For example, if there were 12 tanks with a requirement of 1200, then two logistic vehicles would be consumed and there is 40% chance (200 / 500) than a third vehicle will be consumed. This adds an element of uncertainty, as supplies may be consumed faster or slower than normal (although it will average out over time), plus it avoids any tracking of partial supplies per vehicle.

Below is an example of a Formation Template for a Brigade Headquarters that includes 50 Supply Vehicles.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/061d99d0101c15bd6fa2037e5971f4e6d1e19969.png)

Below is an order of battle for a divisional formation. At the divisional level are 240 Supply Vehicles, indicated by LOG 120k (120,000 supply points) in the Formation Attributes column, with smaller numbers within each brigade headquarters formation. The GSP column shows the resupply requirement for each formation or formation element. The total divisional organisation requires 40,338 GSP for a complete resupply and there are sufficient supply vehicles (410) in that organisation to resupply five times. With the inherent supply as well, the entire division can stay in combat for sixty rounds before additional supply vehicles are required.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/38c7ccedbbda2f14f241292e3d1e4076e83312ab.jpeg)

Finally here is a view of a single population, with the order of battle tab in Location mode.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/3b15eab13179133c12b87fb029f0fa65bdf3b709.jpeg)

  

**Orbital Bombardment Support**

Ships equipped with energy weapons can provide support to ground unit formations during ground combat.

To be eligible, a fleet with energy weapons is given an order to “Provide Orbital Bombardment Support” with a friendly population as the destination. This order functions in a similar way to a ‘Follow’ order, with the order remaining in place until removed by the player. On the Ground Combat Window, eligible fleets (those in orbit and with this order) appear under their own section of the tree view for each population, with a parent node of “Orbital Bombardment Support”. The ships in those fleets can be dragged and dropped on to formations in the same way as ground support fighters. Fleets with this order can still be targeted in normal naval combat or by STO weapons (they do not have the same protection as fighters on ground support missions).

In combat, the orbital bombardment ships attack at the same time as bombardment elements and have the same target selection options as heavy bombardment. Orbital bombardment ships have the same chance to hit as ground units, although they are not affected by any negative environmental modifiers (such as high gravity or extreme temperatures). Each ship fires its weapons once per ground combat phase. Each ship’s to hit chance is affected by its crew grade and morale, plus 100% of the ground support bonus of the tactical officer and 50% of the ground support bonus of the ships commander.

The damage in ground combat for an energy weapon is equal to 20x the square root of its point blank damage in ship-to-ship combat. Armour penetration is equal to half the damage. Fractions are retained. For example, the AP/Damage ratings would be 10/20 for a 10cm railgun round or gauss cannon, 17.3/34.6 for a 10cm laser, 40/80 for a 25cm laser. Weapons roll for failure in the same way as in naval combat.

Ships cannot perform orbital bombardment in the ground combat phase if they fired in the preceding naval combat phase of the same increment.

Each Forward Fire Direction (FFD) component in a formation allows support from a single ship in orbit or up to six ground support fighters. If a ship is providing orbital bombardment support and the formation loses its FFD capability, the ship will try to find another formation at the same population with available FFD.

Orbital bombardment is a powerful aid to any ground combat, although the ships will be vulnerable to hostile STO weapons and require fire direction from the surface. Ships conducting Orbital Bombardment Support will be firing far less than often than a ship conducting general planetary bombardment, but will do so with more accuracy. This is because the ship will be firing on specific targets as directed by ground-based controllers when the right opportunity arises.

  

**Collateral Damage**

When ground combat takes place, it may cause collateral damage to the populations involved. This is based on attacks, rather than hits. For example, if you use heavy bombardment weapons, it will have an impact on the population regardless of whether you hit any hostile units. Collateral damage is caused by any weapon that affects ground combat, including close air support and orbital bombardment support.

Collateral damage is not linear with ground combat damage. The effect on the population increases exponentially for ground combat weapons with higher damage. The ‘base component damage value’ (before modification for weapon technology) of each weapon that fires is cubed, then the total damage is divided by 10,000. For example:

An infantryman with personal weapons would generate 0.0001 collateral damage per combat round (damage 1, shots 1)  
Light anti-vehicle (damage 2, shots 1) is 0.008  
Light bombardment (damage 2, shots 3) is 0.0024  
Medium anti-vehicle (damage 4, shots 1) is 0.0 64  
Medium bombardment (damage 4, shots 3) is 0.0192  
Heavy anti-vehicle (damage 6, shots 1) is 0.0216  
Heavy bombardment (damage 6, shots 3) is 0.0648

Putting that in terms of regiments, 1000 infantrymen would generate 0.1 collateral damage per combat round while 50 heavy tanks (about the same size but 2x cost) would generate 1.2 collateral damage, assuming HAV and HCAP. Over ten combat rounds, that will become 1 and 11.2 respectively. To put that in perspective, vs energy weapon fire a construction factory has 20 HP and a research facility has 400 HP.

Once the total damage to a population is calculated, it is allocated as a series of 2-point energy weapon attacks. This is because infrastructure has 2 hit points. A construction factory (20 HP) would have a 10% chance of being destroyed, etc.. In addition to the installation damage, the collateral (energy) damage increases the dust level by 5% of the damage amount and inflicts civilian casualties at the rate of 2,000 per point of damage.

As populations suffer collateral damage, a track is kept of the total size of destroyed installations. Future collateral damage is reduced by (Total Size of Intact Installations / Total Size of Intact and Destroyed Installations). This is to simulate that fighting in the rubble does not cause further collateral damage.

As ground support fighters are involved in close combat, Fighter Pods have a ‘base damage’, equal to their normal damage divided by the weapon tech at the time of creation, which is used for ‘base component damage value’ in the above collateral damage calculation. This brings them in line with ground forces.

Orbital bombardment support is less discriminatory and the base values do not change over time. For example, a higher tech tank will inflict more damage but a 10cm laser is always a 10cm laser. Therefore orbital bombardment support uses 20% of the normal damage vs ground forces as the ‘base component damage value’. Consequently, orbital bombardment will generally cause more much more collateral damage than an equivalent amount of damage from ground-based weapons or ground support fighters.

If attacking forces wish to minimise collateral damage, they will need to restrict the use of heavy weapons and orbital bombardment support. Note that the base component damage value is used on the assumption that higher tech ground units are more destructive but also more precise in their targeting.

  

**Ground Combat Events**

Ground combat in C# is very detailed with many things happening in each combat round. There are a number of new events at varying levels of detail to serve as combat reports. Note that a formation (such as an Imperial Guard Regiment) consists of several formation elements, each containing one or more units of a single ground unit class.

1.  Element vs GUC: This is the most granular and reports the results of attacks from one formation element against one type of hostile ground unit class, providing number of shots, hits, armour penetrations and kills. If a formation element engages in combat against five types of enemies, that element will have five Element vs GUC reports
    
2.  Ship vs GUC. This is similar to the above and reports the results of attacks from a single ship against one type of hostile ground unit class, providing number of shots, hits, armour penetrations and kills. If a ship attacks five types of enemies, that ship will have five Ship vs GUC reports
    
3.  GUC vs GUC Summary: A summary of the results of attacks from one type friendly ground unit class against one type of hostile ground unit class, providing number of shots, hits, armour penetrations and kills. For example, if there are five friendly types of ground unit class, each of which attack five types of hostile ground unit class, there will be twenty-five reports of this type. This is useful if you want to see how well certain types match-up - are your AT Guns able to knock out hostile tanks for example.
    
4.  Attack vs GUC Summary: A summary of the results of attacks from all friendly ground forces against one type of hostile ground unit class, providing number of shots, hits, armour penetrations and kills. For example, if six types of hostile types of ground unit class have been attacked by ground forces there will be six reports of this type.
    
5.  Orbital vs GUC Summary: A summary of the results of attacks from all friendly ships against one type of hostile ground unit class, providing number of shots, hits, armour penetrations and kills. For example, if six types of hostile types of ground unit class have been attacked by ships there will be six reports of this type.
    
6.  Formation Attack Summary: A list of the type and number of hostile units destroyed by a specific friendly formation
    
7.  Ground Attack Summary: A list of the type and number of hostile units destroyed by all friendly surface and orbit forces
    
8.  Element Loss Summary: Reports the results of enemy attacks against a single friendly formation element, providing number of shots, hits, armour penetrations and kills.\[
    
9.  Formation Loss Summary: A list of the type and number of friendly units lost in a specific formation
    
10.  Ground Defence Summary: A list of the type and number of friendly units in all formations destroyed by all hostile forces
     
11.  Breakthrough Achieved: Reports that a specific formation achieved a breakthrough
     

There may be other events as a result of more play-testing. The above may be too granular for some players so you can filter out the events you don’t want to see, or you can see very granular detail for role-playing and AAR purposes.

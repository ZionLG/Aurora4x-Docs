**Surface-to-Orbit Weapons**

A ground unit class has an option to mount a surface-to-orbit component. If this option is selected, the class must also select a weapon type. The weapon can be of any type researched by the owning race, including turrets and spinal weapons. Additional systems will be automatically added based on the weapon chosen, creating an integrated component (similar in concept to CIWS). These systems include:

**Beam Fire Control:** For normal weapons, this will be created using options for 4x Racial Fire Control Range and 1x Racial Tracking Speed. If the Point Defence Weapon checkbox is clicked, the fire control will be created using options for 1x Racial Fire Control Range and 4x Racial Tracking Speed. In all cases, the beam fire control will have a 25% range bonus vs a ship-mounted equivalent. The cost and size of the fire control will be 50% of the ship version due to its dedication to a single weapon.

**Active Sensor:** This sensor will be resolution 1 and have range at least equal to the maximum range of the weapon. The minimum size will be 5 tons. The sensor is fully functional and will detect targets in general, not just for the weapon. Size and cost are normal.

**Reactor:** This component will be designed to generate sufficient power for the weapons capacitor. Size and cost are normal.

**ECCM:** This is optional and can be added by checking Include ECCM checkbox. Size is 50 tons and cost is half normal to reflect the dedication to a single weapon.

Those ground elements containing units with STO capability can set a number of different targeting options. For the moment, targeting and firing is handled automatically although I may add a manual targeting option as well. For those targeting options directed at ships, the player may also select the number of weapons per target, with zero being all weapons. When a number other than zero is chosen, the targets are cycled until all weapons are fired. Targets must be detected, hostile and in range to be eligible.

The target settings are as follows:

*   Do Not Fire
    
*   Target Random Ship: Eligible Ships are given a random order and the targeting cycles though them (or targets the first if number of weapons is zero). The targets will be cycled through multiple times if required for all weapons to fire.
    
*   Target Largest Ship: Eligible Ships are arranged in descending order of size
    
*   Target Smallest Ship: Eligible Ships are arranged in ascending order of size
    
*   Target Fastest Ship: Eligible Ships are arranged in descending order of speed
    
*   Target Slowest Ship: Eligible Ships are arranged in ascending order of speed
    
*   Target Easiest Ship: Eligible Ships are arranged in descending order of chance to hit
    
*   Target Shipyards: The largest eligible shipyard contact is targeted
    
*   Target Populations: The largest eligible population contact is targeted. Populations on the same system body as the STO element cannot be targeted.
    
*   Target Ground Forces: The largest eligible ground forces contact is targeted. Ground forces on the same system body as the STO element cannot be targeted.
    
*   Target STO Ground Forces: The largest eligible STO ground forces contact is targeted. STO ground forces on the same system body as the STO element cannot be targeted.
    
*   Final Defensive Fire: When a salvo is about to hit a target within range of the STO weapon, the element will be eligible for point defence fire in the same way as a ship. This allows the STO element to protect itself and other ground forces, any populations on the surface, orbital shipyards and any nearby ships.
    
*   Final Defensive Fire (Surface Only): Same as Final Defensive Fire except that only salvos attacking surface targets will be intercepted
    
*   Area Point Defence: The STO units will shoot at any hostile missiles currently in range.
    

When an STO element targets missiles, it will only fire until the missiles are destroyed. For the purposes of tracking weapon fire and recharging, each STO unit within the element is tracked separately.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/cb3271d9f1335f438b756133e8f23d0b3642a90a.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/c608733c43ef95f0153841fe94ff4611ecadf6b9.png)

  

**Naval Bombardment of Ground Forces in Naval Combat Phase**

Ground forces can be bombarded by naval forces as part of normal naval combat. Note this is not the same as Orbital Bombardment Support, which involves ships in orbit working in conjunction with ground forces to deliver precision energy weapon strikes:

Instead, Naval Bombardment of Ground Forces (NBG) is a mass bombardment of ground-based sensor contacts using either missile weapons or energy weapons, which does not require friendly ground forces on the target body or fire direction support and is an adjunct to Planetary Bombardment:

For the purposes of bombarding ground forces, each weapon type on each ship is treated separately for targeting purposes. For example, a ship with both 10cm and 15cm railguns would make two separate rolls to select a target formation, one for each weapon type, and therefore target all weapons of the same type on the same formation. Target formations are selected based on a weighted random roll, with the weighting based on formation size. Once a formation is selected as a target, each shot against that formation selects a random element within the formation, again using a weighted random roll.

Ship using energy weapons for NBG have one third of the chance to hit compared to using Orbital Bombardment Support (as in the latter case they are being directed by FFD units) and do not benefit from any ground support bonus from the ship commander or tactical officer. Their to-hit chance is the base ground combat to hit chance (20%), reduced by two thirds, multiplied by the to-hit modifier of the planet’s dominant terrain and divided by both the fortification of the target formation elements the and fortification modifiers of the planet’s dominant terrain. In summary, blind-firing energy weapons at general concentrations of enemy forces is not a very effective way of destroying them, especially in difficult terrain, although it can be done given sufficient patience and maintenance supplies. When firing at Detected STO units, the two-third reduction in to-hit chance is not applied, as the STO units have given away their general location.

Ships using missiles for NBG have a 100% base chance to strike their targets, as nuclear warheads require considerably less precision than energy weapons, and may hit multiple targets. This is modified by the to-hit modifier of the planet’s dominant terrain and divided by both the fortification of the target formation elements and the fortification modifier of the planet’s dominant terrain. One attack is made with the missile’s full warhead damage. Two attacks are made with one half damage, four attacks with one quarter damage etc. This division continues while the damage is higher than 1 point of warhead strength. Each of these attacks can also hit multiple smaller targets, such as infantry. The number of sub-attacks is equal to 50 / target size.

This means that a single 8 point missile warhead targeted on infantry will make 15 attacks (1 + 2 + 4 + 8) and each attack will be directed against 10 units, for a total of 150 infantry attacked. However, bear in mind that if the infantry are fortified normally that will reduce the normal 100% chance to hit by a third. If they have help from construction units and are in difficult terrain such as mountains, the chance to hit could be much lower so many of them could survive the attack. Missiles also cause environmental damage so if you plan to use the planet afterwards, this may not be the best approach.

The ground combat damage for an naval weapon is equal to 20x the square root of the damage at the same range in ship-to-ship combat. Armour penetration is equal to half the that damage. Fractions are retained. For example, the AP/Damage ratings would be 10/20 for a 10cm railgun round or gauss cannon, 17.3/34.6 for a 10cm laser, 30/60 for a 9-point missile warhead, 40/80 for a 25cm laser. Weapons roll for failure in the same way as in naval combat.

Any weapon used for NBG has the same environmental impact as it would for planetary bombardment. Missile warheads cause radiation and dust levels to increase by an amount equal to their warhead size. Energy weapons increase the dust level by 5% of their damage amount and have no effect on radiation.

Each NBG shot has a one third chance to also strike the population itself, inflicting installation damage and population losses accordingly (see Planetary Bombardment link above for details). Conversely, each energy weapon or missile used for general Planetary Bombardment attack has a one third chance to also attack any ground forces on the planet (using the above rules), regardless of whether those ground forces have been detected. Note that all the to hit modifiers vs ground still apply so the chance of accidentally hitting any ground unit with an energy weapon for example is still very low.

  

**Planetary Bombardment**

In C# Aurora, populations can be attacked by missiles and energy weapons. However, because missile warheads are area-effect weapons, they are much more effective at destroying the civilian population and any installations.

Each installation type has a Target Size. The chance of each attack (either a missile or a single energy weapon) destroying an installation is equal to: Weapon Damage / Target Size. For example, a construction factory has a Target Size of 20, so a 10cm laser fired from orbit would have a 15% chance to destroy the target (3 / 20). For the purposes of this check, missile warheads are treated as equal to 20x warhead strength. Therefore, a single 1 point warhead has a 100% chance to destroy a construction factory.

A single energy weapon can destroy only one target per hit. A missile warhead is applied until all damage is used. For example, a 5-point missile warhead is counted as 100. If the first installation hit is a construction factory, that factory is destroyed and the remaining damage reduced to 80. That damage is then applied the next installation hit and so on.

Missile warheads cause radiation and dust levels to increase by an amount equal to their warhead size. Energy weapons increase the dust level by 5% of their damage amount.

Missile warheads inflict civilian casualties at the rate of 100,000 per point of damage. Energy weapons inflict civilian casualties at the rate of 2,000 per point of damage.

Populations will no longer surrender purely due to orbital bombardment. You have to land ground formations to force a surrender.

Energy weapons now provide a way to destroy the industry and infrastructure of a target population, without causing radiation or using up ordnance. However, this will require considerable effort for a large population and consume maintenance supplies due to weapon failures. It will also bring you within range of any ground-based energy weapons. Of course, it will usually be more beneficial to conquer the planet and gain the installations instead of destroying them.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/76849ec07c5571a054b2a102588db4838b552898.jpeg)

**Plasma Carronades**

1.  The development cost of Plasma Carronade focal size has been halved. For example, a 30cm Carronade is now 4000 RP.
2.  The building cost of Carronades has also been halved.

These two changes should make Carronades more viable. A powerful and inexpensive weapon but very short-ranged.

  

**Particle Lance**

The Particle Lance is a large, potentially devastating weapon that is variant of the Particle Beam.

Once Particle Beam Range 200,000 km and Particle Beam Strength 6 have both been researched, the Particle Lance can be researched for 30,000 RP. The Lance is a modification of the normal Particle Beam and is an extra option in the design window.

The Particle Lance modification affects the Particle Beam in the following ways:

2x Damage  
2x Size  
2x HTK  
2x Crew  
2.5x Power Requirement  
3x Cost  
2x Development Cost

As well as the above modifications, which essentially creates a weapon twice as large, that recharges 2.5x more slowly and costs 3x as much, the damage template of the Particle Lance is a single column of armour, rather than the Particle Beam which has a template between that of missiles and lasers. The Particle Lance retains the constant damage of the Particle Beam, creating a weapon that can penetrate enemy armour at significant range.

Here are examples of similar tech level Particle Beam, Particle Lance and Laser.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/1c98766b3dad7e69e07eca964e5963a424f1280a.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/2670d6e8ee065703cd1a05858f2eb0a4480ffad7.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9d6947a0f7890b3e8fdfa67306f0a3d075d063d3.png)

**Comparison of Damage Templates at 240,000 km**

Particle Beam (6): 2, 3, 1  
Particle Lance (12): 12  
Laser (3): 3

Two Particle Beams or 25cm Lasers can be installed in the same hull space as the Particle Lance. The Lasers are devastating at close range, the Particle Beams inflict more damage at long range (in terms of DPS), while the Particle Lance penetrates much more armour at long range.

The Particle Lance is intended as a powerful anti-ship weapon that requires a large investment in a particular tech line, lacks the flexibility of lasers or railguns and provides a different armour penetrating option to mesons, although mesons are still superior against shields. Mainly though it is to boost the Particle Beam as a serious weapon choice.

  

**Meson Update**

Mesons have the following changes for C# Aurora:

1.  Their cost is based on the same principles as a laser, so mesons will cost the same as an equivalent laser of the same tech level.
2.  Mesons penetrate shields as before but their ability to penetrate armour is now limited.
3.  A new tech line exists, Meson Armour Retardation, which is the chance for each layer of armour to stop the meson. This starts at 50%, then 40%, 32%, etc. finishing at 7% for TL 12
4.  If armour does stop the meson, it scores 1 point of damage on the armour.
5.  If the meson hits a damaged armour location, it only has to penetrate the remaining armour in that location.
6.  Mesons will destroy missiles without penalty, as missiles are no longer armoured in C# Aurora.

  

**Gauss Cannon Research Changes**

I’ve lowered the research point requirements for Gauss Cannon.

The Rate of Fire tech starts at 2 shots with the following progression in RP from 2 to 6 shots: 1500, 5000, 15,000, 45,000, 135,000. Eight shots is 450,00 RP.  
The Launch Velocity still has six levels with the following progression in RP: 500, 1500, 5000, 15,000, 45,000, 135,000

  

**Power Plant Changes**

Power plants will no longer have linear power vs size. Additional power will be produced by larger reactors, using a similar formula to the increase in fuel efficiency for larger engines. This change will provide a reason to create larger power plants and will result in a small improvement in energy weapon capabilities. The table below shows power per HS and total power for a given size of reactor. This value is multiplied by the base technology of the power plant (Pressurised Water, Pebble Bed, etc).

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/ee8faa4be0517da7125114d3028887ed27ba8780.png)

The additional boost provided by the “Power Plant Boost” technology line provides double the previous bonus, with lower research costs and slightly higher explosion chances. This is intended for smaller ships that are short on space. The updated tech line provides between 10% and 100% additional boost with research costs between 500 RP and 30,000 RP.

  

**Beam Weapon Recharge**

In VB6, if a power plant is damaged, it slows down the recharge rate of all weapons by a proportionate amount.

In C# Aurora, power is allocated weapon by weapon until the available power is exhausted. This means that some weapons may not be recharged, but the others will be recharged at the maximum rate. Weapons are charged in order of ascending power requirement. Once a weapon is recharged, it will require no more power and other weapons can begin the recharge process.

This should allocate power in the most effective way to keep a ship in the fight.

  

**Turret Update**

A minor update. The benefits of multiple energy weapons in turrets have been doubled. A twin turret now has a 20% reduction in crew vs two solo weapons and has a 10% reduction in gear size. A quad turret has a 40% reduction in crew vs four solo weapons and has a 20% reduction in gear size.

In addition, I found an error in the VB6 code for turret design that meant a turret needed four times more armour than a ship of equivalent size. This has been corrected for C# Aurora, which means armoured turrets are now much more viable.

  

**Armour Damage Templates**

In VB6 Aurora, the damage templates for each weapon are held in a database table, with one row for each combination of weapon type and damage amount. While this is simple, it mean any new weapon or change to damage model has to be laboriously updated in the table.

For C#, the damage templates are generated in code as needed based on a ‘gradient’ system. All the damage starts at a single point and is distributed right and left according to the gradient setting. Any column which has damage greater than the gradient, checks left and right. If an adjacent column has a damage amount that is lower than the current column damage minus the gradient, a single point of damage is moved to that column. The adjacent column with lower damage is used first. The code cycles back and forth through the columns until no more adjustments are necessary

For example, missile damage has a ‘gradient’ of 1. Therefore, there cannot be a gap of 2 damage between adjacent columns. Laser damage has a gradient of 3, so any gap of 4 damage between columns is corrected. Here are some examples for 25 damage:

Gradient 1 (Missile, Carronade, Ramming): 1,2,3,4,5,4,3,2,1  
Gradient 2 (Railgun, Particle Torpedo): 1,3,5,7,5,3,1  
Gradient 3 (Laser): 3,6,8,5,3

Particle Lances cause damage in a single column, gauss cause only a single point of damage and meson ignore armour.

The template generation takes about a millisecond so there is no performance issue. This means that new weapons with higher gradients can be added very easily.

  

**Weapon Failure**

At the point when any weapon (energy-based or missile launcher) fires, there is a 1% chance the weapon will suffer a failure. If sufficient maintenance supplies are available, the weapon will be instantly repaired and will fire normally. If maintenance supplies are not available, the weapon will be damaged and unable to fire.

This is partially to simulate the stress of combat on weapon systems, but also as a balance to other rule changes.

  

**Atmosphere and Energy Weapons**

In C# Aurora, there is no penalty for energy weapons firing in or through an atmosphere.

  

**Shock Damage Update**

The recent debate on mesons highlighted some issues with Shock damage at higher levels. Therefore Shock Damage in C# Aurora will operate as follows:

1.  The chance of shock damage is equal to: Damage Caused to armour / Size of Ship in HS. For example a 9 point warhead vs a 6000 ton ship has a 7.5% chance of shock damage. A 16 point energy impact vs 10,000 ton ship has an 8% chance of shock damage.
2.  Any damage with less than a 5% chance is ignored as too small (i.e. any damage where the strength is less than 5% of the ship HS)
3.  If shock damage occurs, the shock damage is rolled randomly up to 20% of armour damage

Where the armour damage is easily divisible by 5, for example a 15 point warhead, there is a random roll from 1 to max shock damage (1-3 in this case). Where the armour damage is not divisible by 5, the max shock damage is the amount divisible by 5 (rounded) down plus a percentage chance of an extra 1 max shock damage equal to the percentage of 5 remaining. For example, a 12 point warhead would be assigned 2 max shock damage approximately 60% of the time and 3 max shock damage 40% of the time.

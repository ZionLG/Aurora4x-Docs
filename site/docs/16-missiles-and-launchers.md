**Missile Launcher Changes**

Missile Launchers have undergone significant changes in C# Aurora.

1.  Fractional-size launchers can be created. The minimum is still 1 HS but a launcher can now be 1.1 HS, 2.7 HS, etc.
    
2.  The reduced-size launcher techs are all available immediately and do not need to be researched. This means box launchers are available from the start. The progression for reduced size launchers has been altered slightly:  
    0.75 HS 2x Reload  
    0.6 HS 5x Reload  
    0.4 HS 20x Reload  
    0.3 HS 100x Reload  
    0.15 HS 100x Reload (Box Launcher) - note that reload for this was x15 in VB6.
    

If a box launcher containing a missile is damaged, the missile will explode. The chance of this happening can be reduced by a new tech line. The first step reduces the explosion chance to 70% for 1000 RP and the last step reduces to 5% for 120,000 RP. In addition, Box launchers can only be reloaded in a hangar, or at an Ordnance Transfer Point (a Spaceport, Ordnance Transfer Station or Ordnance Transfer Hub). Reloading at an Ordnance Transfer Point is 10x slower than in a hangar (similar to the penalty for maintenance facilities in VB6 Aurora).

The base reload rate for all missile launchers is now: (SQRT(missile size) \* 30 seconds \* Reduced Size Modifier) / Reload Rate Tech.

Assuming a race has reload rate tech of 3, a normal size 1 launcher will reload in 10 seconds, a size 4 will reload in 20 seconds and a size 9 will reload in 30 seconds. This change will dramatically reduce reload times for larger launchers.

The change for box launcher reload rate from x15 to x100 is not as dramatic as it seems for larger missiles due to the new reduced reload times for larger missiles. However, it is still an significant increase from VB6. A size 4 missile mounted on a box launcher will now take about 1h 40m to reload in a hangar and about 17 hours for an ordnance transfer point. A size 6 is about 2 hours and 20 hours respectively.

These changes are intended to:

1.  Reduce the disadvantage of larger missiles,
2.  Remove the realism issue of not having box launchers available at low tech yet make box launchers a more difficult decision vs standard-type launchers.

  

**Missile Updates**

The following changes will be made to missiles in C# Aurora:

1.  Missile Armour has been removed.
    
2.  Laser warheads have been removed (I may add these back at some point in the future).
    
3.  ECM is now a fixed 0.25 MSP for missiles. The ‘Missile ECM’ tech line has been removed and if a missile is equipped with ECM it will have the same ECM capability as the current racial ECM technology, The missile design will maintain that ECM capability and will not be upgraded if the racial tech improves. For each level of ECM, the missile will be 10% harder to hit with energy weapons and will reduce the lock of missile fire controls by 10%. This can be negated by linking a similar level of ECCM to the point defence fire controls.
    
4.  Missiles can be equipped with ECCM, which is a fixed 0.25 MSP. The missile ECCM level will be equal to the current racial ECCM tech. In C# Aurora, the ECCM of missile fire controls will only affect the range at which the fire control can lock on. The ECCM of the missile itself will affect the chance of the missile striking its target, if that target has active ECM.
    
5.  Any missile sensor (active, thermal, EM or Geo) has to be a minimum of 0.25 MSP or it will have no effect.
    
6.  Missile series have been removed. Instead, there will be more detailed class loadout options.
    

These changes will make electronic warfare much more important for missile combat. Missiles with ECM will become harder to shoot down and missiles without ECCM will have a reduced chance to hit targets equipped with ECM. Anti-missile missiles will either be less effective, or larger, vs ECM-protected missiles, while anti-ship missiles are likely to increase in size (and therefore reduce salvo sizes). Large volleys of size-1 missiles will be less effective in a heavy EW environment and no longer have a huge advantage in launching speed (due to the missile launcher changes).

  

**Missile Engines**

In C#, Missile Engines follow the same size-based fuel consumption rules as Ship Engines using the formula: SQRT (10 / Engine Size in HS)

The above increases the fuel consumption of missile engines based on size alone. However, VB6 also had a flat x5 multiplier for the overall fuel consumption for missile engines as they were treated as a different engine type than ship engines. As C# is aiming for consistency between ship and missile engines, this x5 multiplier cannot remain as it was before. Removing the x5 multiplier entirely would cancel out the fuel consumption increase resulting from the changes in the size-based fuel consumption calculation. As one of the objectives of C# is a reduction in missile ranges, a new rule is required that increases fuel consumption but that is still consistent with ship engines.

Therefore, the calculation for fuel consumption based on boosting engines will now include an additional multiplier if the boost being used is higher than the maximum racial boost tech. Only missile engines have the capability to use higher boosts than the racial maximum, so this still allows consistency between ship and missile engines in the spectrum where they both operate. Once you move outside of the boost range possible for ships, additional fuel consumption can be added without breaking consistency. This rule adds a linear multiplier from 1x to 5x depending on the level of boost beyond the racial maximum. The formula is as follows:

if Boost Used > Max Boost Multiplier Tech then  
High Boost Modifier = (((Boost Used - Max Boost Multiplier Tech ) / Max Boost Multiplier Tech) \* 4) + 1;

So if a race has Max Boost Tech of 2x, any missile with a Boost Level of 2x or less will use the standard boost fuel modifier calculation of Boost Level ^ 2.5.

Above a Boost Level of 2x, the linear High Boost Modifier will come into effect, reaching a maximum of 5x fuel consumption at 4x Boost Level.

Here is a comparison between VB6 and C# using MPD engines and an engine size of 1 MSP. The Max Boost Tech for this race is 2x:

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/966a4dfd00ce130403b92cb05f8abfe69055c8e3.png)

image380×279 7.57 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/966a4dfd00ce130403b92cb05f8abfe69055c8e3.png "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/3f2a4b5dfe908c6a838342606f36f687f286ca4c.png)

image385×275 7.73 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/3f2a4b5dfe908c6a838342606f36f687f286ca4c.png "image")

  

**Missile Engines Integrated into Missile Design**

In VB6, you research missile engines first and then use that engine within a missile design. This can be tedious, especially if you are not sure exactly what engine size you need. Therefore, for C# the missile engine design has been removed from the Create Research Project window and integrated directly into the Missile Design window.

The best engine and fuel efficiency tech will automatically be used, so the player decides on the engine size and power boost. The engine design takes place behind the scenes and is confirmed when you design the missile. This means you can play around with the engine design and missile design at the same time. See first screenshot below.

If no engine is required, just tick the No Engine option. See second screenshot.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/cc97b45347e61411b3c74f36bf01bfe9a9675373_2_690x423.png)

image940×577 161 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/cc97b45347e61411b3c74f36bf01bfe9a9675373.png "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/f003a8370fdc38ae0c13546d9d337dc0a07d7b9d_2_690x424.png)

image940×578 165 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/f003a8370fdc38ae0c13546d9d337dc0a07d7b9d.png "image")

  

**Missile Thermal Detection**

In VB6 Aurora, the thermal detection of missiles is based on the following formula:

(Missile Size / 20) \* (Speed / 1000)

I have no idea why I coded thermal detection for missiles to be based on size, although I am sure it seemed like a good idea at the time ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=15 ":slight_smile:") For C# Aurora, missiles will use the same formula as ships for thermal signature:

Max Engine Output \* (Current Speed / Max Speed) \* Thermal Reduction

As missiles (for now anyway), don’t have thermal reduction or an option to travel below maximum speed, their thermal signature is equal to the power of their engines. Combined with the changes to passive detection, this means that missiles in C# Aurora will probably be detected by thermal sensors at much greater distances than in VB6 Aurora.

  

**Commercial Magazines**

I’ve added a non-military magazine to C# Aurora. There are two versions; one with 100 capacity and one with 500 capacity.

In general terms they are cheaper but less efficient in terms of space then military magazines. Also, they have a 100% explosion chance if hit, so don’t apply for a job on a commercial ammunition transport ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=15 ":slight_smile:")

Commercial Magazine - Capacity 100, Size 12, Cost 25, Crew 5, HTK 1, RP 2000  
Commercial Magazine - Capacity 500, Size 50, Cost 100, Crew 20, HTK 1, RP 5000

Even if you armour the ship, one of the magazines could still explode due to shock damage. As the magazines are fairly large, if they are hit then the ship is probably gone, so it would be a Bad Idea to take a commercial ammunition transport along with the battle fleet.

  

**Box Launcher Reloading**

In VB6 Aurora, box launchers can be reloaded in a hangar or at maintenance facilities. For C# Aurora, box launchers can only be reloaded in a hangar, or at an Ordnance Transfer Point (a Spaceport, Ordnance Transfer Station or Ordnance Transfer Hub). Reloading at an Ordnance Transfer Point is 10x slower than in a hangar (similar to the penalty for maintenance facilities in VB6 Aurora).

Because of the changes to maintenance facilities in C# Aurora, it will be a lot easier to forward deploy facilities for full-size warships, both on planets and in space, which would increase the potential of box launchers if they could still use those facilities to reload, especially given they are immediately available in C#. The introduction of ordnance-specific facilities for C# provides a good alternative.

The existing changes post for Missile Launchers has been updated to take account of this new rule:

  

**Magazine Design**

There are several changes to magazine design for C# Aurora.

*   The ‘ejection’ tech line has been replaced by the Magazine Neutralisation System. It is functionally identical but in technobabble terms this is a system design to render missile warheads permanently inert in the event of damage to the magazine.
    
*   Magazines have a base HTK number equal to the square root of their size (rounded down). in VB6 Aurora, all magazines have a base HTK of 1, regardless of size. It is still possible to add extra HTK in C# by sacrificing internal space.
    
*   The explosion chance for a magazine is divided by the square root of its size. For example, if a size 1 magazine has a base explosion chance of 15%, the equivalent tech size 5 has an explosion chance of 6.71%, the size 10 is 4.74% and the size 20 is 3.35%.
    
*   If the ship has a Chief Engineer, any explosion chance (for magazines or engines) is reduced by his Engineering Bonus. So a 5% explosion chance would be reduced to 3.5% by a Chief Engineer with an Engineering bonus of 30%.
    
*   When a magazine is hit, a proportion of the remaining ordnance will be destroyed (based on destroyed magazine capacity / total ship magazine capacity). Any destroyed ordnance will explode with its full warhead strength. In VB6, only ordnance beyond the remaining magazine capacity explodes and only at 20% strength.
    

In summary, magazine explosions in C# Aurora will be much rarer, especially for larger ships, but far more devastating when they do occur.

  

**Ship Ordnance Templates**

In VB6, you can set an ordnance template for each class. When a ship loads ordnance it will load ordnance based on that parent class template.

For C#, you can create optional ship ordnance templates. If a template is created at the individual ship level, it will override the parent class template when the ship loads ordnance. If there is no template at the ship level, the parent class template will be used.

A new tab on the Ship section of the Naval Organization window shows the class and ship ordnance templates for each ship, plus the current actual loadout for the ship. This tab can be used to change the ship ordnance template in a similar way to setting the class ordnance template on the Class window. You can copy the existing class ordnance template into the ship template if you only want to make minor changes. You can rename and obsolete missiles from this tab.

The screenshot shows a recon-focused ship ordnance template.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/d5a3dece58d40938a8d4de8c34335ed286b2348e_2_690x430.jpeg)

image940×586 144 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/d5a3dece58d40938a8d4de8c34335ed286b2348e.jpeg "image")

  

**Tracking Time Bonus vs Missiles**

Energy weapons and beam fire controls engaging missiles can gain a bonus to their tracking speed based on how long the missile has been on active sensors. Similar functionality was added to VB6 but is not working. The benefit of this has been toned down a little from the planned functionality in VB6 as fuel considerations in C# will reduce the max boost used for anti-ship missiles and avoid the late game missile speed vs tracking speed disparity.

The gain in tracking speed is equal to one percent for every five seconds a missile is continually tracked by active sensors. This is subject to a maximum time based on the associated tracking time tech. The starting tech costs 1000 RP and adds tracking bonus for the first 30 seconds. The tech name format is: Max Tracking Time for Bonus vs Missiles: 30 Seconds (6%)

This time increases with subsequent tech to 45, 60, 80, 120, 160, 200, 250, 320 and 400. Each tech is approximately double the cost of the previous one.

Note this is a bonus to tracking speed, not the base to-hit chance. If the tracking speed is already higher than the missile speed, this bonus will not improve the chance to hit.

I considered adding this to all energy-weapon fire for consistency, but decided it was reasonable to keep it to missiles only, given their more predictable courses.

  

**Launch Ready Ordnance**

You can use the Launch Ready Ordnance order at any movement destination, including a waypoint. Any ordnance assigned to a missile launcher that is assigned to a fire control will be launched at that point. The fire control does not need to be set to ‘fire’. The missile will be launched without an assigned target.

This is useful for deploying buoys or mines or just launching missiles without a known target.

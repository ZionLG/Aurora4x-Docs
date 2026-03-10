**Ground Forces: Part 1 - Unit Design**

Ground Forces and Ground Combat are undergoing a huge expansion in C#. The VB6 Ground Unit becomes the Formation and the VB6 Ground Unit Type becomes the Formation Template. However, there are no longer any fixed unit types or unit values. Instead, there is endless scope for Formations and Formation Templates, based on a detailed design process at the Formation level and below. This will allow the simulation of ground forces from many science fiction genres. As this is a long topic, I am going to break it into several posts each covering a different topic.

The most granular level is the Ground Unit Class, which is an individual soldier or vehicle. One or more of the same Ground Unit Class are grouped into Formation Elements, which in turn are grouped into Formations. Formations remain intact for movement purposes, but combat involves each individual unit (each soldier or vehicle). As individual units are now tracked for casualty purposes, readiness no longer exists. Morale is tracked at the Formation Element level (which is a group of the same unit class), so the infantry in a Formation may have a different morale than the anti-tank guns or artillery.

The process of design starts with the Ground Unit Class. Two important factors in this design process are the Racial Armour Strength and Racial Weapon Strength, shown at the top of the Ground Forces window.

Racial Armour Strength is based on the strength of the highest racial armour technology. Conventional Armour is 3, Duranium Armour is 5, et cetera. For this screenshot, the Commonwealth has researched Ceramic Composite, which has a strength of 10.

Racial Weapon Strength is based on the highest tech level (TL) among Laser Focal Size, Railgun Type, Meson Focal Size, Particle Beam Strength and Carronade Calibre. For example, 15cm Laser Focal Size is TL3 as it is the third tech of that type. Racial Weapon Strength is the value of armour at the same tech level. In this case, the Commonwealth has researched 20cm Laser Focal Size, which is TL4. The fourth Armour Tech is Ceramic Composite, which has a strength of 10, so the Racial Weapon Strength is 10. The reason for using Armour as the basis of Weapon Strength is partly because that means Ground Armour and Ground Weaponry are aligned, and partly because it is straightforward way to assign value based on very different weapons.

The Ground Unit Design tab of the new ground Forces window is shown below. First, a ‘base type’ is chosen, which is infantry, several sizes of vehicle, or static. Static in this sense is a weapon that is not self-mobile, such as a towed anti-tank gun, towed artillery, et cetera. Static weapons remain in place when firing so they are easier to hit than infantry or vehicles. Each base type has six main characteristics:

1.  Size (in tons): Size is the basis for transport requirements and cost, although there are other modifiers to cost (discussed below)
2.  Hit Points: Unit hit points are compared to weapon damage during combat to determine the chance of destruction (the Damage Check). The chance of a weapon destroying a unit is (Weapon Damage / Hit Points) ^ 2.
3.  Slots: The number of component slots available for the base type
4.  To-Hit Modifier: Used to modify the chance of the unit being hit during combat (based on the mobility of the unit). This only applies if the unit is not fortified.
5.  Maximum Fortification: The maximum strength to which the unit can be fortified by construction factories or construction units. The Chance to Hit for a firing unit is divided by the Fortification Level of the target unit.
6.  Maximum Self-Fortification: The maximum strength to which the unit can be fortified without construction factories or construction units.

The next section is Armour Type. The Armour of a unit is compared to the Armour-Penetration (AP) value of a weapon. The chance to penetrate is equal to (AP / Armour) ^2. For example, a weapon with AP 4 attacking a unit with Armour 6 has a 45% chance to penetrate. The overall process for checking if a shot destroys a target is Chance To-Hit, followed by Armour Penetration Check, followed by Damage Check. All three must be successful to destroy the target. Each type of Armour has two values.

1.  Base AR: The Base Armour Rating is multiplied by Unit Size (including components below) to determine cost. So a unit with 6 armour would be 50% more expensive than the same unit with 4 armour.
2.  Racial AR: Racial Armour Rating is the Base Armour Rating multiplied by the Racial Armour Strength (shown at top of window).

Below the base type and armour is a large section showing Components. Infantry, static and light vehicles all have one ‘component slot’, vehicles and heavy vehicles have two slots, while super-heavy and ultra-heavy vehicles have three and four slots respectively. Each slot can hold one component from the list and the same component can be put into multiple slots. Certain components are only available with certain base types. For example, the Super-Heavy Anti-Vehicle component can only be used by super-heavy and ultra-heavy vehicles. The primary component is selected from the main table, while any additional components are selected from the dropdown(s) below the main table. Each component has a name and an abbreviation and is rated in nine different areas:

1.  Size: The size in tons is added to the size of the base unit type.
2.  Armour-Penetration (AP): If the component is a weapon, the chance to penetrate a target’s armour is (AP / Armour) ^2. The AP Rating is the underlying AP of the component (not shown), multiplied by the Racial Weapon Strength.
3.  Damage: If the component is a weapon, the chance to destroy a target after the armour has been penetrated is (Weapon Damage / Hit Points) ^2. The damage value is the underlying damage rating of the component (not shown), multiplied by the Racial Weapon Strength.
4.  Shots: The number of times a weapon will fire during each ground combat phase
5.  CIWS: ‘Y’ indicates this component is a Close-in-Weapon-System, capable of defending the planet (on which the unit is based) from missile attack. This CIWS will use the values in the CIWS section, which will become visible when a CIWS component is selected. More on this in a later rules post.
6.  STO: ‘Y’ indicates this component is a Surface-To-Orbit energy weapon, capable of engaging ships in space within weapon range of the planet on which the unit is based. The weapon type used for the STO component can be selected in the section to the centre right, which will become visible when an STO component is selected. More on this in a later rules post, although see the second screenshot.
7.  HQ: The headquarters capacity of the component in tons. This is the total size of the formation (or formation hierarchy) that can be effectively controlled by a commander based in a unit with this component. To assign a commander to a formation, one of the units within that formation requires a headquarters component. More details on command hierarchies will be provided in a future rules post.
8.  FFD: ‘Y’ indicates this component is a Forward Fire Direction (FFD) component. Forward Fire Direction allows a front-line unit (more on that later) to direct the fire of bombardment units from a formation in a support position, fighters on close air support missions, or ships in orbit. A later rules post will explain this function.
9.  Const. The construction value of the component in Construction Factory Equivalents (CFEs).

At the top-right of the window is the Capability section. One or more Capabilities can be selected for the Unit Class. The Boarding Combat capability is required for a Unit to be able to board another ship. For all other capabilities, the Chance to Hit is doubled in the environment specified. If a unit has multiple capabilities, such as Mountain Warfare and Jungle Warfare on a world with a dominant terrain of â€˜Jungle Mountainâ€™, the bonus is cumulative (i.e. 4x to-hit in this case). Each capability selected for a Unit will increase the cost by the multiple specified. Some capabilities are only available for infantry units.

In the bottom right section, a summary of the unit is shown in a similar style to the Class Summary for naval designs. When the sizes of all the units in a formation are aggregated, that is the transport requirement for that formation in tons. Cost is in BP. When the costs of all the units in a formation are aggregated, that is the build point requirement to construct the formation. Armour and Hit Points have been described previously. Below that is a list of components, followed by the materials required for construction and the research cost to develop the unit once designed.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/d589e7c2ff6c012a61a53f5f00c06736ac4838d9.png)

This screenshot shows a static unit with an STO component selected. The chosen weapon (which is any non-turreted weapon developed for shipboard use) is selected on the right. Spinal Weapons can be selected for ground use without penalty. The STO mount includes the weapon, a reactor of the exact size needed for the recharge rate, an active sensor with range greater than the weapon range and a built-in beam fire control with a 4x range modifier. The cost is equal to the static platform, the weapon, the reactor, the active sensor and half the fire control. STO weapons have a 25% bonus to fire control range. The damage shows two numbers, which is the damage at minimum and maximum range.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/8733470e6919c74adf7d2972b5cd62a252df0a5e.png)

  

**Ground Forces: Part 2 - Formation Templates**

The screenshot below shows the Formation Templates tab of the Ground Forces window. Formation Templates are the equivalent of VB6 Ground Unit Types, although it might be easier to think of them as serving the same function as Ship Classes. They are a detailed design that serves as a template for building Formations based on that same design, which is the same relationship as Ship Classes to Ships.

This tab is split into two halves. On the left is a list of available Ground Unit Classes created using the Unit Class Design tab (as explained in the previous rules post). All of these were created using TL4 technology, with three exceptions. For comparison purposes, the Challenger 2 Main Battle Tank and the Warrior AFV were created using Conventional, rather than Trans-Newtonian, technology, while the Challenger â€“ Base TN Upgrade was the Challenger design with TL1 technology. It should be possible to simulate most modern army units with the new C# Aurora ground combat, so you could theoretically be landing on an alien world with Abrams and Bradleys or T-14 and T-15 Armatas. The ten columns for the Unit Class List are as follows:

1.  Type: An abbreviation for the Base Type (infantry, Vehicle, Heavy Vehicle, etc.)
2.  Name: The name assigned during Unit Class Design. This can be changed using the Rename Unit button.
3.  Size: Transport size in tons.
4.  Cost: Cost in Build Points.
5.  Arm: The Armour Strength of the Unit. This is based on the armour available at the time of design and is not upgraded when newer technology becomes available (as with ship designs).
6.  HP: The Hit Points of the Unit. This is set at design time and does not change.
7.  Components A to D: Abbreviations for each of the components included in the Unit Class. These are the same abbreviations as used on the Components table in the Unit Class Design tab. As with armour and hit points, any components use the technology available at the time of unit design. To see the detailed view of the components, click on the Unit. The Unit Summary will be shown in the bottom section on the left hand side.

As an example, the Leman Russ Battle Tank is a Heavy Vehicle of 104 tons, with 60 Armour and 60 Hit points, costing 12.48 BP. The components are Heavy Anti-Vehicle (HAV) and Heavy Crew-Served Anti-Personnel (HCAP). Looking at the summary, the HAV has 1 shot per combat phase with Penetration 60 and Damage 60, while the HCAP has 6 shots with Penetration 20 and Damage 10.

The right-hand half of the tab shows Formation Templates. A new Formation Template is created by clicking the New button. In this case, four have already been created. Each Template comprises one or more Template Elements, shown in the bottom right section Each Template Element has a specific number of specific Ground Unit Class. For example, the Guard Armoured Regiment is currently selected, which has four template elements: 60x Leman Russ Battle Tank, 1x Macharius Command Tank, 12x Hydra Flak Tank and 24x Hellhound Anti-Infantry Tank.

Each template element has the following attributes:

1.  Name: The Unit Class for this element.
2.  Units: The number of units of that Unit Class in this element
3.  Size: The total size on tons of this element. For example, 60 Leman Russ Battle Tanks at 104 tons each is 6,240 tons.
4.  Cost: The total cost in Build Points for this element.
5.  HP: The total aggregate hit points for the element.
6.  HQ: The headquarters capacity of the elementâ€™s Unit Class in tons. If there are multiple units in a template element, only one is considered for the headquarters capacity. Any additional units are for redundancy. The headquarters capacity is the total size of the formation (or formation hierarchy) that can be effectively controlled by a commander based in a unit with this component. In the case of the Macharius Command Tank, it has an HQ capacity of 10,000 tons.
7.  FFD: The total number of Forward Fire Direction (FFD) components in the template element. Forward Fire Direction allows a front-line unit to direct the fire of bombardment units from a formation in a support position, fighters on close air support missions, or ships in orbit.
8.  Const. The construction value of the element in Construction Factory Equivalents (CFEs).
9.  CIWS: The number of Close-in-Weapon-System components in the template element, capable of defending the planet (on which the unit is based) from missile attack.
10.  STO: The number of Surface-To-Orbit energy weapon components in the template element. STOs are capable of engaging ships in space within weapon range of the planet on which the unit is based.

The totals for each Template Element are added together to create the total for the Formation Template as a whole, shown in the top right section. In the example shown, the Guard Armoured Regiment has a total size of 8,942 tons, which is the combination of all four template elements. The Formation Template list has an additional column for Rank. A default rank will be suggested by the program, although this can be overridden by the player. This rank will be used by Automated Assignment process for any Formations built using this Formation Template.

To add new Template Elements to a Formation Template, use the Add Units button in conjunction with the adjacent text field to specify the number of units in the new element. This number can be subsequently edited by selecting the element and clicking the Edit Amount button. Both Formation Templates and Element Templates can be deleted using the appropriate buttons.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/65a6f3dc4dbfab124539133a722d0d3f24e067fb.png)

This screenshot shows the Macharius Command Tank on the left and the Brigade Headquarters formation template on the right. The Macharius is a super-heavy vehicle, with two super-heavy anti-vehicle weapons and an HQ4 component, which provides a headquarters capacity of 10,000 tons. This is a large and expensive vehicle at 518 tons and 93.24 BP, but is well-protected as the loss of the HQ in a formation will result in the loss of any commander bonuses (and maybe the commander himself).

The Brigade Headquarters formation template includes two Guard Brigade Headquarters units, in case one is destroyed, plus thirty-six large artillery pieces, twelve flak tanks and a company of Guardsman. Combat involves three locations. Front-Line, Support or Rear-Echelon. Units in a Support position can only attack using bombardment weapons, or defend themselves against air attack. This formation is intended to serve in the Support location and is organising accordingly. However, it is possible for a Support Formation to temporarily find itself moved into a Front-Line position, so the Guardsman Element will provide additional protection in that case.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/c3d66de5a3263be01a461e19dcf247f70c0aa8dc.png)

  

**Ground Force Logistics**

Ground Units have two separate logistics requirements. The first is Maintenance, which applies to all units at all times and has a wealth cost equal to 12.5% of Ground Unit cost per annum. The second is Ground Supply Points (GSP), which applies only to combat units during ground combat.

The GSP requirement for a weapon component is equal to Penetration Value \* Damage Value \* Shots. For example, Personal Weapons is (1 x 1 x 1) = 1. Crew Served Anti-personnel is (1 x 1 x 6) = 6. Medium Anti-Vehicle is (4 x 6 x 1) = 24. Heavy Bombardment is (2 x 6 x 3) = 36.

The GSP requirement for a Ground Unit Class is the sum of its weapon components. For example, a tank with a Medium Anti-Vehicle component and a Crew Served Anti-personnel component would have a GSP requirement of 30. The GSP requirement for a Formation Element is the GSP for the Ground Unit Class in the element multiplied by the number of units. The GSP requirement for a Formation is the sum of the GSP for its constituent Formation Elements. In all these cases, that is the GSP cost to provide sufficient supply for ten combat rounds.

Two logistics module components are available for ground units. Here is an example of a light vehicle with the Logistics Module.

**Logistics Module Specifications**

The Logistics Module is Size 50 and provides 500 GSP. The Logistics Module - Small is Size 10 and provides 100 GSP. The standard module is available for light vehicle and infantry base types, while the small module is only available to infantry.

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

  

**Setting Ground Formation Support**

Here is a screenshot of the UI for setting support relationships between superior and subordinate formations. You drag the superior formation on to the subordinate formation. If the Support checkbox is checked, the supporting formation is shown in blue-grey with the name of the supported formation. Any supported formation in shown in orange. Support can only be provided when the supporting formation is a superior formation in the hierarchy of the supported formation, or is directly subordinate to a superior formation in the hierarchy of the supported formation and does not itself have any subordinate formations (an independent artillery formation for example). Supporting formations must be on the same system body as the supported formation. In combat, the support relationship will only function if the supporting unit has suitable bombardment units and is in a support or rear echelon position and the supported unit is in a front line position.

The drag-drop is intelligent and can distinguish between setting support relationships, reassigning formations to a new headquarters, removing headquarters assignments, moving formations from one population to another (on the same system body) and moving elements between formations (more on that last option in the next post).

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/ee0f44d36c6e0414f296986831e0aa363692dda6.jpeg)

  

**Ground Formation Element Transfer UI**

Below is the same screenshot as the previous post but with the Elements option selected. Now the formation elements for each Ground Formation are shown in the hierarchy. For formations with no subordinate formations, the formation elements are shown directly under the parent formation. For formations with subordinate formations, the formation elements are shown under their own node, to avoid cluttering the tree view.

To move elements between formations, you can drag and drop elements from one formation to another, although they must be on the same system body. Normally, the whole element is transferred. However, if the Amount checkbox is checked, a popup box will appear after the drag-drop, allowing you to transfer only a portion of the element. If the receiving formation already has an element with the same ground unit class, the additional units will be added to the existing element.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/c1f62cae9da6aef3890a3877ec84a92d9009b28f.jpeg)

  

**Ground-based Geological Survey**

Geological Survey Teams do not exist in C# Aurora.

Instead, a new ground unit component (100 tons) provides 0.1 survey points per day. Ground units with this component may be added to ground formations to provide a geological survey capability. All formations at the same population with a geological survey capability will combine their survey points to conduct a ground-based survey. This can only take place after the orbital survey is complete.

Once the orbital survey of a system body is completed, the potential for a further ground survey will be revealed. The ground survey requires the same survey points as the orbital survey, except they are generated by ground forces. Only system bodies with a diameter of at least 4000 km will be eligible for a ground-based survey (in Sol that is Mercury, Venus, Earth, Mars, Ganymede, Callisto and Titan).

Normal mineral generation (at system body creation) has three phases:

1.  An overall roll for the potential for minerals to be present, based on radius, density and system abundance. If this roll fails, the body has no minerals.
2.  A roll for each type of mineral to be present, based on density and abundance. Duranium has twice the chance of any other mineral.
3.  A roll for the accessibility of each mineral generated in step 2). This is based on radius.

Once the ground survey is completed, a new mineral generation roll will take place. The potential tier modifies step 2 and step 3 of the mineral generation.

If a deposit of a mineral that didn’t previously exist is generated by the ground survey, that deposit is added to the system body.
If a mineral deposit is generated by the ground survey and a deposit of that mineral already exists on the system body, the existing deposit is changed to match the amount or accessibility (or both) of the ground survey deposit if the latter is greater.

**Ground Survey Potential Tiers**

The ground survey potential tiers are: None, Minimal, Low, Good, High, Excellent.

Step 2 is modified by the potential. Minimal is 25% normal, Low is 33% normal (same as teams in VB6), Good is 50% normal, High is 100% normal and Excellent is 200% normal.
Step 3 is modified by High (+ 0.1) and Excellent (+ 0.2). All others are same as normal.

The chances that an eligible body (4000 km diameter) will have ground survey potential is equal to: None 60%, Minimal 20%, Low 10%, Good 6%, High 3%, Excellent 1%.

For reference, in the Colonial Wars campaign, there are 2145 eligible bodies in 495 systems, so in general about 1.7 worlds per system will have potential of at least Minimal. About 1 system in 23 would have an Excellent potential world.

Here is an example survey ground unit:

**Geosurvey Vehicle**  
Transport Size (tons) 218 Cost 8.72 Armour 20 Hit Points 40  
Geosurvey Equipment:  
Geosurvey Equipment:  
Vendarite 8.72  
Development Cost 436

  

**Ground-based Xenoarchaeology**

Xenology Teams do not exist in C# Aurora.

Instead, a new ground unit component (100 tons) provides 0.5 xenoarchaeology points. Ground units with this component may be added to ground formations to provide a xenoarchaeology capability. All formations at the same population with a xenoarchaeology capability will combine their xenoarchaeology points.

The annual chance for a race to successfully translate the alien language and symbology is equal to the xenoarchaeology points on the planet. For example, a Xenoarchaeology Vehicle is created with 2 components, giving it 1 xenoarchaeology point (cost about 9 BP). If a formation has forty such vehicles, the annual chance would be 40%. The chance in any given construction phase is equal to the annual chance \* (construction phase length / year).

  

**Ground Force Fortification**

Fortification happens at the element level. Formation elements can fortify to different levels, depending on the base type of the unit class. That level is also affected by whether the element is restricted to fortifying itself or if it has assistance from construction vehicles. The level of self-fortification and maximum fortification is as follows:

Infantry, Static: Self 3, Max 6.  
Light vehicle, Medium Vehicle, Heavy Vehicle: Self 2, Max 3.  
Super-Heavy Vehicle: Self 1.5, Max 2  
Ultra-Heavy Vehicle: Self 1.25, Max 1.5

All elements move from non-fortified to their maximum self-fortification level in 30 days without outside assistance. This progress is linear and happens automatically for all formation elements when their parent formation is not set to front line attack.

Construction elements will work on any element in their own formation or that formation’s subordinate hierarchy that has already reached its max self-fortification level. If the construction element’s formation has no subordinate, the Construction elements will work on any element in their own formation’s parent formation or in that parent formation’s subordinate hierarchy that has already reached its max self-fortification level. This means you can attach a construction-based formation directly to a formation you need fortified, or you can attach to a HQ and it will fortify every formation descending from that HQ. Construction elements can only assist elements that are on the same system body (they can be in different populations on the same body).

Given sufficient capacity (see below), a construction element can fortify any other element from its maximum self-fortification level to the maximum fortification level in 90 days.

The capacity of a construction element is equal to the construction rating of the elements unit class \* number of units \* race construction rating \* commander production bonus \* 100 tons. For example, a formation of 50 construction vehicles, each with 0.1 construction rating (2 const components at 0.05) for a race with 16 construction which is part of a formation with commander with 10% production bonus would be: 0.1 \* 50 \* 16 \* 1.1 \* 100 = 8800 tons. BTW a construction battalion of this type would cost 636 BP to build.

All construction elements are ordered by descending order of construction capacity. Each one determines the list of elements that they can assist (using the above criteria), excluding any that have been assisted by a previous construction element. The list of target element is ordered by Construction Rating (so construction units fortify themselves last), then descending tracking speed (so point defence STO and then normal STO), then by field position (so front line defence, then support, then rear echelon), then by descending max fortification (so infantry, static first), then by descending cost (elements with more expensive units first), then by descending morale.

The construction element cycles through the list of target elements using the following process.

1.  The total size of the target element is determined (element unit size \* number of units)
    
2.  This is compared to the remaining construction capacity of the construction element. If its is greater, then the remaining construction capacity of the construction element is reduced by the size of the target element. If it is less, remaining construction capacity is reduced the zero and a Size Vs Capacity Modifier equal to (remaining construction capacity / target element size) is applied below
    
3.  The amount of fortification that could be accomplished in ninety days is determined by deducting the target element self-fortification level from the target element max fortification level
    
4.  The amount of fortification that could be accomplished within the current period is determined by 90 Day Fortification Amount \* (Current Period / 90 Days) \* Size Vs Capacity Modifier
    
5.  The fortification for the current period is applied. If this would surpass the target element maximum fortification, then that value is set instead
    
6.  If the construction element has capacity remaining, it moves on to the next target element in its list
    

Note that because of the way this is applied, it will take the same amount of time to move infantry from fortification level 3 to level 6 as it does for armour from 2 to 3.

This process will allow the player to either directly manage construction elements by attaching their formation to the desired target formation, or to attach the formation to a high level HQ and have the process happen automatically. If a construction element is used to fortify other elements, it will not contribute its construction capacity to its parent population during the next construction phase.

In combat, if the fortification level of a formation element is greater than 1, it is multiplied by the fortification bonus of the dominant terrain.

  

**Genetically Enhanced Soldiers**

Infantry units can be given capabilities, known as Genetic Enhancement, which increase their hit points and make them more resistant to damage. So far there are three options:

Basic Genetic Enhancement: RP 5,000, HP x 1.25, Cost x 1.5  
Improved Genetic Enhancement: RP 10,000, HP x 1.6, Cost x 2.0  
Advanced Genetic Enhancement: RP 20,000, HP x 2, Cost x 2.5

Once researched, the new capabilities can by chosen from the available capabilities list during ground combat design. These are all Biology/Genetics techs and the first in the sequence can be researched following Genome Sequence Research

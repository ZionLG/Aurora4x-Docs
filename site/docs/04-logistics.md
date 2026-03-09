**Refuelling Changes**

In C# Aurora, refuelling is no longer instant and ships without specialised equipment cannot exchange fuel in space. A ship can only refuel at a Spaceport, a Refuelling Station, a ship with a Refuelling System or a base with a Refuelling Hub.

A new technology line - Refuelling Systems - provides the basis of the rate of refuelling and allows ships to mount systems to refuel other ships. The baseline system (Refuelling System: 50,000 LPH) sets the racial refuelling rate at 50,000 litres per hour and allows the use of the first ship-mounted Refuelling System. There are ten further steps in the tech progression with the highest tech system allowing refuelling at 500,000 litres per hour.

Spaceports, Refuelling Stations or Refuelling Hubs will always use the highest tech refuelling rate and can refuel an unlimited number of ships simultaneously. However, the ships being refuelled must be stationary.

Spaceports have doubled in cost to 2400 BP but can now be moved by freighters. They are equal to four research facilities for transport purposes (or 80 factories). They retain their existing bonuses to loading and unloading cargo.

Refuelling Stations are a new installation with a cost of 1200 BP. They do not require workers and can be moved by freighters. They have a transport size equal to 10 factories. Essentially, they are a cut-down version of a spaceport intended to facilitate refuelling in forward areas, transferring fuel from the surface of a planet to the waiting ships. They have no bonuses for loading or unloading cargo.

A Refuelling Hub can be mounted on a ship. It is a commercial system with a research cost of 10,000 RP, build cost of 2400 BP and a size of 100,000 tons. In practical terms, this is likely to form part of a large, deep-space station, due to the size and cost, rather than being deployed on tankers that will accompany fleets

A Refuelling System is 500 tons and has a cost ranging from 10 BP to 100 BP, depending on the tech level. A ship with a Refuelling System can refuel a single ship at once, so will take some time to refuel a whole fleet, although this will improve with higher technology. At the early tech levels, the Refuelling System can only be used if both ships (tanker and target ship) are both stationary. Another new tech line, Underway Replenishment, allow the refuelling to take place while both ships are in the same fleet and underway. Priorities can be set for the refuelling order when multiple ships are involved. The first Underway Replenishment tech allows refuelling at 20% of the normal rate (2500 RP), rising to 100% with the highest tech (40,000 RP).

Refuelling order types will be adjusted to deal with the new requirements. Fuel will be transferred during each movement increment as time passes until the target ship has full tanks. I may add some other options regarding partially filling as well.

I will be adding some rules along the same lines regarding ordnance transfer.

  

**Refuelling Orders**

With the new refuelling rules, I am changing how some of the refuelling orders work.

You can flag a tanker as being at one of three refuel statuses; None, Refuel Fleet or Refuel Sub-Fleet. When this flag is set to Refuel Fleet, the tanker will constantly refuel its own fleet as that fleet continues with normal orders (the refuel itself is not an order). Essentially, the tanker will keep the fleet’s fuel tanks topped up. The rate of refuel will be based on the refuelling system of the tanker multiplied by the parent race’s underway replenishment tech (unless the fleet is stationary). If the flag is set to Refuel Sub-Fleet, the tanker will follow the same rules as above but only for ships within the same sub-fleet (you can use this distinction to control which ships are refuelled within the fleet)

Each tanker class has a minimum fuel setting (in the class window) and will not refuel ships once it falls below that level. Each class & ship has a ‘refuel priority’, with higher numbers equalling higher priority. The tanker will refuel in descending order of ship priority, then by descending order of class priority. The tanker will automatically move to a second ship (or more) if there is sufficient time and fuel remaining in the sub-pulse.

The current ‘Refuel Fleet’ order has been replaced with ‘Join & Refuel Fleet’. The fleet containing the tanker will become part of the target fleet and switch to a ‘Refuel Fleet’ status (if not already set).

A new ‘Join & Refuel Sub-Fleet’ order has been added. The fleet containing the tanker will become part of the target sub-fleet and switch to a ‘Refuel Sub-Fleet’ status (if not already set). A Join Sub-Fleet order has also been added for more general use.

A new ‘Refuel from Refuelling Hub’ order has been added. This order requires a second fleet containing at least one refuelling hub as the destination. On arrival, the fleet will be refuelled until all its tanks are fuel, or the refuelling hub runs out of fuel. All ships in the fleet will be refuelled, including tankers. Once completed, the fleet will move on to its next order. If the fleet containing the refuelling hub has any movement orders, the refuelling will not take place and the refuelling order will be marked as completed. Multiple hubs in the target fleet will not increase the rate of refuelling (a ship can only refuel from one hub at once) but they can all contribute fuel.

The existing ‘Refuel from Colony’ will remain but can only be used at colonies that have either a Spaceport or a Refuelling Station. On arrival, the fleet will be refuelled until all its tanks are fuel, or the colony runs out of fuel. All ships in the fleet will be refuelled, including tankers. Once completed, the fleet will move on to its next order. Multiple spaceports or refuelling stations at the colony will not increase the rate of refuelling.

The ‘Unload 90% Fuel to Colony’ order now becomes ‘Transfer Fuel to Colony’. Any class designated as a tanker can transfer fuel to any colony with either a spaceport or a refuelling station. The transfer is done at the refuelling rate of the tanker. If multiple tankers are in the fleet, they can transfer fuel simultaneously. Note this means that more planning will be needed in this version of Aurora to ensure fleets can be refuelled at the frontier. It will no longer be possible to dump fuel on the nearest available rock. Colonies will require a spaceport or a refuelling station before they can support fleets. Alternatively, tankers can accompany fleets, or a deep space base with a refuelling hub can be established.

A new ‘Transfer Fuel to Refuelling Hub’ order has been added. Any class designated as a tanker can transfer fuel to any ship with a Refuelling Hub. The transfer is done at the refuelling rate of the tanker. If multiple tankers are in the fleet, they can transfer fuel simultaneously.

  

**Load & Unload Cargo**

In VB6 Aurora, ships load or unload cargo, colonists, etc. on arrival and then undergo a wait period before their next order (based on how long it takes for the load/unload process).

In C# Aurora, the wait period will take place first and then the cargo will be loaded or unloaded at the end. Because of this change, if the fleet abandons the order before it is complete, no transfer of cargo will have taken place.

  

**Logistics Bonus**

The cargo handling speed of any ship is modified by the ship commander’s logistics bonus and by any bonus from the parent admin command of the ship’s fleet (assuming the fleet is within he command radius). Setting up a network of Logistic-focused Admin Commands has the potential to boost cargo handling considerably.

  

**Ordnance Transfer Mechanics**

In C# Aurora, transferring ordnance is no longer instant and ships without specialised equipment cannot exchange ordnance in space. A ship can only receive ordnance at a Spaceport, an Ordnance Transfer Station, a ship with a Ordnance Transfer System, a base with a Ordnance Transfer Hub or in a military hangar bay.

A new technology line - Ordnance Transfer Systems - provides the basis of the rate of ordnance transfer and allows ships to mount systems to transfer ordnance to or from other ships. The baseline system (Ordnance Transfer System: 40 MSP per Hour) sets the racial ordnance transfer rate at 40 MSP per hour and allows the use of the first ship-mounted Ordnance Transfer System. There are ten further steps in the tech progression with the highest tech system allowing ordnance transfer at 400 MSP per hour.

Spaceports, Ordnance Transfer Stations or Ordnance Transfer Hubs will always use the highest tech ordnance transfer rate and can transfer ordnance to or from an unlimited number of ships simultaneously. However, the ships involved must be stationary. Hangar Bays also use the highest tech ordnance transfer rate (mainly to avoid multiple hangar bay types).

Spaceports have increased in cost to 3600 BP but can now be moved by freighters. They are equal to four research facilities for transport purposes (or 80 factories). They retain their existing bonuses to loading and unloading cargo.

Ordnance Transfer Stations are a new installation with a cost of 1200 BP. They do not require workers and can be moved by freighters. They have a transport size equal to 10 factories. Essentially, they are a cut-down version of a spaceport intended to facilitate ordnance transfer in forward areas, transferring ordnance between the surface of a planet and ships in orbit. They have no bonuses for loading or unloading cargo.

An Ordnance Transfer Hub can be mounted on a ship. It is a commercial system with a research cost of 10,000 RP, build cost of 2400 BP and a size of 100,000 tons. In practical terms, this is likely to form part of a large, deep-space station, due to the size and cost, rather than being deployed on ammunition colliers that will accompany fleets.

A Ordnance Transfer System is 500 tons and has a cost ranging from 20 BP to 200 BP, depending on the tech level. A ship with an Ordnance Transfer System can transfer ordnance to or from a single ship at once, so it will take some time to replenish a whole fleet, although this will improve with higher technology. At the early tech levels, the Ordnance Transfer System can only be used if both ships (collier and target ship) are both stationary. Underway Replenishment allows the transfer to take place while both ships are in the same fleet and underway. Priorities can be set for the ordnance transfer order when multiple ships are involved. The first Underway Replenishment tech allows ordnance transfer at 20% of the normal rate (2500 RP), rising to 100% with the highest tech (40,000 RP).

Ordnance transfer order types will be adjusted to deal with the new requirements (which I will list in a separate post). Ordnance will be transferred during each movement increment as time passes until the target ship has full magazines.

  

**Ordnance Transfer Orders**

With the new ordnance transfer rules, I am changing how some of the ordnance transfer orders work.

The first major change is that a collier within a fleet can be set to automatically transfer ordnance to or from other ships in the fleet. You can flag a collier as being at one of seven ordnance transfer statuses; None, Load Fleet, Replace Fleet, Remove Fleet, Load Sub-Fleet, Replace Sub-Fleet, Remove Sub-Fleet.

When this flag is set to Load Fleet or Load Sub-Fleet, each collier will load ordnance into the magazines of non-colliers within its own fleet (or sub-fleet) as that fleet continues with its normal orders (the transfer itself is not an order). Essentially, the collier will keep the fleet’s magazines topped up. The rate of ordnance transfer will be based on the ordnance transfer system of the collier multiplied by the parent race’s underway replenishment tech (unless the fleet is stationary). The missiles being loaded will be based on what is missing from the ship’s magazine when compared to the class loadout, starting with the largest missiles first (although smaller missiles will be loaded if there is insufficient time in the sub-pulse to load a larger one). However, missiles will only be added using this order and missiles that do not match the current class loadout will not be removed.

When this flag is set to Replace Fleet or Replace Sub-Fleet, each collier will remove any missiles that do not match the current class loadout and replace them with those from the class loadout (assuming the collier has a sufficient stockpile) for any non-colliers within its own fleet (or sub-fleet). The collier will remove non-loadout missiles from the target ship while it has magazine space remaining, then add class loadout missiles to create space. Essentially, the collier will alternate loading and unloading as necessary to create the correct loadout.

When this flag is set to Remove Fleet or Remove Sub-Fleet, the collier will unload all missiles from non-colliers within its own fleet (or sub-fleet), as long as it has space to store them.

The current ‘Provide Ordnance to Fleet’ order has been replaced with several new orders to facilitate the above. These include:

Join and Add Ordnance to Fleet  
Join and Add Ordnance to Sub-Fleet  
Join and Replace Ordnance in Fleet  
Join and Replace Ordnance in Sub-Fleet  
Join and Remove Ordnance from Fleet  
Join and Remove Ordnance from Sub-Fleet

The fleet containing the collier will become part of the target fleet and switch to an appropriate ordnance transfer status depending on the order. You can also use an ‘Absorb’ order to collect a collier with an existing status set. I may look at adding ship-level conditional orders (rather than fleet) so that colliers/tankers can detach when empty and return home without player supervision.

A new ‘Load from Ordnance Transfer Hub’ order has been added. This order requires a second fleet containing at least one ordnance transfer hub as the destination. On arrival, any ships in the fleet with magazines will receive ordnance according to their class loadouts until all magazines are full, or the ordnance transfer hub runs out of ordnance. No ordnance will be removed by the hubs. All ships in the fleet will receive ordnance, including colliers. Once completed, the fleet will move on to its next order. If the fleet containing the ordnance transfer hub has any movement orders, the ordnance transfer will not take place and the ordnance transfer order will be marked as completed. Multiple hubs in the target fleet will not increase the rate of ordnance transfer but they can all contribute ordnance.

A new ‘Replace at Ordnance Transfer Hub’ order has been added. This order functions in a similar way to above except that any ordnance not in the class loadout will be removed by the hubs. The mechanics of this process are the same as the ordnance transfer within fleets above.

A new ‘Unload to Ordnance Transfer Hub’ order allows colliers to deliver ordnance to the hubs.

The existing ‘Load Ordnance from Colony’ order will remain but can only be used at colonies that have either a Spaceport or an Ordnance Transfer Station. On arrival, the fleet will receive ordnance until all its magazines are full, or the colony runs out of appropriate ordnance. All ships in the fleet will be receive ordnance, including colliers. Once completed, the fleet will move on to its next order. Multiple spaceports or ordnance transfer stations at the colony will not increase the rate of ordnance transfer.

The ‘Unload Ordnance to Colony’ order also remains but can only be used at colonies that have either a Spaceport or an Ordnance Transfer Station.

Any order involving the transfer of ordnance to or from a colony or ordnance transfer hub will use the current racial ordnance transfer tech to determine the rate of transfer.

Note this means that significantly more planning will be required in this version of Aurora to ensure missile-armed ships can be reloaded at the frontier. It will no longer be possible to dump ordnance on the nearest available rock. Colonies will require a spaceport or an ordnance transfer station before they can support missile-armed fleets. Alternatively, colliers can accompany fleets, or a deep space base with an ordnance

  

**Logistics and Ground Combat Research**

Due to the increase in Logistics techs for C# Aurora and the planned revamp of ground combat design, the Logistics / Ground Combat research field will be split into two separate fields. There are now nine research fields in total.

  

**Cargo Shuttle Bays**

Part of the background in C# Aurora will be that large TN ships function only in space and cannot move any closer to planetary bodies than low orbit. Small craft below a limit of 500 tons, such as fighters and shuttles, are capable of landing on planets. Ship are built in orbit and habitats are assembled in orbit. Only fighters can be built on the ground.

As part of this change, Cargo Handling Systems have been replaced by Cargo Shuttle Bays. They function in a similar way, although they are larger (10 HS) and more expensive.

Because large ships cannot land on planets, a freighter or colony ship cannot load / unload unless it has at least one Cargo Shuttle Bay, or the target population has either a Spaceport or a Cargo Shuttle Station (new installation, 1200 BP). Spaceports and Cargo Shuttle Stations can service any number of ships simultaneously but they do not stack. In effect they count as a single Cargo Shuttle Bay for any ship at the population.

All races start with conventional shuttles available for their cargo shuttle bays and stations. Conventional shuttles do not reduce loading time but do enable cargo deliveries to planets without Spaceports or Cargo Shuttle Stations. Three levels of advancement in shuttle technology are available:

1.  TN Shuttles (5000 RP): This reduces loading time by 2 per bay (so two bays means speed reduced by 4, three bays means speed reduced by 6).
2.  Improved Shuttles (15,000 RP): Reduces loading time by 3 per bay.
3.  Advanced Shuttles (40,000 RP): Reduces loading time by 5 per bay.

All bays and stations use the new shuttles once they are available.

Base cargo load times have been reduced by about 45% for all situations (36s per cargo point to 20s per cargo point and 18s to 10s per colonist), which means a ship with a standard cargo bay and a single Cargo Shuttle Bay with TN Shuttle tech will take slightly longer than the same ship with a cargo handling system in VB6.

This will affect troop transport in a different way and that will be covered in a separate post.

  

**Resupply Changes**

In C# Aurora, resupply is no longer instant and ships without cargo shuttles cannot exchange maintenance supplies in space. A ship can only resupply at a population with a spaceport, a cargo shuttle station or at least one maintenance facility, or from a ship with cargo shuttles.

Maintenance supplies are transferred at the rate of 10 per hour, multiplied by the number of cargo shuttle bays and the racial shuttle technology. Spaceports, cargo shuttle stations and maintenance facilities can resupply an unlimited number of ships simultaneously. However, the ships being resupplied must be stationary.

Resupply order types will be adjusted to deal with the new requirements. Maintenance supplies can be transferred by supply ships during each movement increment as time passes until the target ship has reached capacity (in the same way as underway replenishment of fuel).

  

**Combination Orders**

Given the number of new logistics options, I am adding some combination orders to C# Aurora where functions can happen simultaneously. For example, “Refuel and Resupply from Colony” will carry out both activities simultaneously, assuming that the ships / colony are equipped with the necessary logistical facilities. The order will complete when the activity with the greater duration is complete.

Other combination orders so far (I will edit here as more are added):

Refuel, Resupply, Load Ordnance from Colony  
Join, Refuel and Resupply Target Fleet  
Join, Refuel, Resupply, Add Ordnance to Target Fleet

I will add more combination orders during play testing, depending on which are useful, although I can’t go overboard or I risk cluttering the orders list.

  

**Minimum Fuel and Supply**

Because of the new rules for transferring fuel and supplies, ship classes can be given a minimum maintenance supply level and a minimum fuel level. Ships will not unload or transfer fuel and supplies beyond these levels. These functions replace the VB6 rule where a tanker would only unload 90% of its fuel.

  

**Non-Player Race Fuel**

In C# Aurora, NPR ships consume fuel and therefore require refuelling. They also need to use the same refuelling infrastructure as players (fuel transfer stations, refuelling systems, etc.) and require the same time to refuel (allowing for technology differences). NPR Tankers will move fuel from harvesters and populations with excess fuel to populations with logistical infrastructure that require fuel. As NPR ships become low on fuel, they will return to the nearest population or tanker that has fuel.

NPR ships and fleets have a concept of Mission Capable Status, which is affected by a number of factors such as fuel status, damage status and ordnance status. When an NPR fleet is very low on fuel, it will be unable to do anything except search for refuelling options. However, to avoid the NPR getting into any logic issues, NPR ships will still be able to move with zero fuel while they move to a refuelling point.

This should add more constraints to NPR deployment, add an interesting layer to NPR operations and provide the player with a new way to attack NPRs (attacking their fuel supplies instead of their ships). While it isn’t completely the same as players due to the ‘search for fuel while empty’ concept, I think that is the best trade-off between realism and avoiding any unforeseen logic issues.

  

**Logistics Reports**

A new Logistics Report tab on the Fleet window lists all relevant ships for each of five categories. Fuel, Maintenance Supply Point, Ordnance, Deployment Time (for crew) and Time Since Overhaul. A dropdown is used to select each category and the ships are sorted by those most affected in the selected category. Screenshots below show examples for four of those categories. MSP is very similar to fuel.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/48d574140fc6251cba42af051b181d4435eb5309_2_690x430.jpeg)

image940×586 157 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/48d574140fc6251cba42af051b181d4435eb5309.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/24b927a47d73f095a97416ddae653389e35c01f2_2_690x430.jpeg)

image940×587 220 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/24b927a47d73f095a97416ddae653389e35c01f2.jpeg "image")

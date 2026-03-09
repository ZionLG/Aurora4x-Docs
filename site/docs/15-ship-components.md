**Ship Class Components View**

The components view has been expanded considerably for C# Aurora.

The tab still has the functionality from VB6, showing the component breakdown by Amount, Size, Cost, Crew and HTK. To that has been added ordnance loadout, fuel and maintenance supplies, plus a breakdown of minerals and wealth. The mineral and wealth breakdown takes into account the mineral requirement and/or cost for the full loadout of fuel, maintenance and ordnance, so you can see the full cost of the design

Two new columns have been added which replace the damage allocation chart from VB6. Instead, this is the percentage chance that a component of the specified type will be selected for internal damage. E-DAC is for weapons that only target electronics.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/27bb8942af84e87844aed68ffa076dbadbffa4ec_2_690x432.jpeg)

image940×589 147 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/27bb8942af84e87844aed68ffa076dbadbffa4ec.jpeg "image")

  

**Shield Generators**

Shield generators have been overhauled for C# Aurora to make them more interesting.

1.  Shields no longer require fuel.
2.  Shield generators can be created from 1 HS to 50 HS in size.
3.  A new tech line has been added for maximum shield generator size. The starting tech is 10 HS and there are seven further steps from 12 to 50 with RP costs between 2000 RP and 120,000 RP.
4.  The strength of the generator is modified by its size using the formula SQRT(HS/10). This means a 10 HS generator will have standard strength, a 1 HS generator will have 32% of normal strength and 50 HS generator will have 224% of normal strength
5.  Recharge rates remain as before so a 10 HS shield will recharge at the same rate as an equivalent tech VB6 shield generator. Larger generators will recharge more slowly. For example, a 40 HS generator has 200% strength so will take twice as long to fully recharge.
6.  HTK is the square root of the size, so it is easier to take out a single 50 HS generator than five 10 HS generators.
7.  Cost of shields has been doubled
8.  The only mineral involved in building shields is Corbomite.

In general, this means that shields become stronger than before and larger ships have an advantage when using shield generators. However, they also cost more, require more investment in research and are easier to destroy.

  

**Commercial Hangars**

Commercial hangars are available in C# Aurora. They are 50% larger than military hangar bays (size 32), have the same cost of 100 BP and the same crew requirement (15).

They are intended for transport of other commercial vessels, temporary transport of military vessels, reloading of box launchers and for repairing ships. With this in mind, a military ship still has normal maintenance requirements while in a civilian hangar.

However, as you can maintain ships in deep space in C# Aurora it will be possible to build a large ship that could provide both commercial hangar space and maintenance, or combine ships with commercial hangars and ships with maintenance modules to provide a logistics hub.

  

**Maintenance Storage Bays**

In C# Aurora, Maintenance Storage Bays are no longer a military system.

  

**Conventional Armour**

The new ground combat rules provide the opportunity to simulate current ground forces, such as tanks, artillery, etc. However, the single conventional armour tech does not provide any granularity to show the different between different generations of armour. Therefore the current Conventional Armour tech is replaced by three new techs. I have also slightly reduced the capability of Duranium Armour and increased the research cost to create a more graduated progression and give conventional forces some chance against the first generation of TN vehicles.

High Density Duranium and above remain the same. Duranium Armour becomes available, regardless of current armour tech, once Trans-Newtonian Technology is researched.

Here are the first six armour techs as they now stand:

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/6616e4de554d7329e7c3237d278b449fd6a3a16f.png)

image492×144 2.87 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/6616e4de554d7329e7c3237d278b449fd6a3a16f.png "image")

  

**Fuel Storage Costs**

I’ve realised that fuel storage is very expensive in Aurora compared to other ‘storage’ modules. In terms of cost per HS they are more expensive than hangars or magazines, three times as expensive as cryo, seven times as expensive as troop transport bays and sixty times more expensive than cargo bays. They are also about six times more expensive than most productive modules (Terraform, Salvage, Harvester, Jump Point Stabilisation, etc.). BTW I realised this by wondering why a tanker was taking so long to build. The reason was that because build time is based on cost but modified by size, high ‘cost density’ ships take a long time and that was greatly exacerbated by the fuel storage.

On that basis, I am reducing the cost of fuel storage considerably for C# Aurora, although it is staggered so the cost benefit of larger modules is improved.

Fuel Storage - Tiny: 5,000 litres, 0.5 BP  
Fuel Storage - Small: 10,000 litres, 0.8 BP  
Fuel Storage - Standard: 50,000 litres, 2 BP  
Fuel Storage - Large: 250,000 litres, 5 BP  
Fuel Storage - Very Large: 1,000,000 litres, 10 BP  
Fuel Storage - Ultra Large: 5,000,000 litres, 25 BP

  

**Maintenance Storage Bays**

VB6 has the Maintenance Storage Bay, which is 5 HS and carries 1000 MSP.

In C#, the new 1% weapon failure rate means that the ship design process will have to account for that additional MSP expenditure when considering engineering systems. This includes small craft such as fighters which may mount a single energy weapon or multiple box launchers. The issue for fighters is that adding sufficient engineering to cover that potential MSP cost may give them maintenance lives of many years, which is unnecessary and not very realistic.

Therefore, C# adds several new maintenance storage options. These create a reserve of maintenance supplies that can be used to repair weapons but do not affect failure rates or maintenance life. I’ve also doubled the storage capacity because the MSP capacity of normal engineering was not significantly lower in many cases.

**Maintenance Storage Bays in C#**  
Large: 2000 MSP, 5HS  
Standard: 400 MSP, 1 HS  
Small: 80 MSP: 0.2 HS  
Tiny: 40 MSP 0.1 HS  
Fighter: 20 MSP: 0.05 HS.

  

**Prototype Components**

When designing components in the Create Research Project window or the Turret window, you have the option of the Prototype button instead of the Create button. Prototype components are researched instantly and are available in the class design window, where they will appear with a (P) suffix. There is a display toggle on the class design window for prototype components.

Prototypes can be obsoleted to remove from the display. In this case, they will only appear if both the obsolete and prototype options are checked.

On the turret window, prototype energy weapons will be displayed with a (P) suffix. Any turret containing a prototype energy weapon can only be a prototype. The Create button will be unavailable.

If a class contains a prototype component, it will be displayed with a (P) suffix on the class tree and in the class summary on the Class Design window. A shipyard cannot be retooled for a class that contains prototype components.

Prototypes will allow you to try out different class designs without having to research all the potential components.

  

**Future Tech for Prototypes**

The Create Project now has a Show Next Tech checkbox. When this box is checked, you will see the the next tech that can be researched in the design options. For example, if you have researched 12cm and Visible Light for lasers, then checking the box will add 15cm and Near Ultraviolet to the design options.

When using the Next Tech option, only Prototype Components can be created.

Prototype Components created when the Show Next option is active will be classed as Future Prototypes and will have an (FP) suffix.

  

**Researching Prototypes**

If you select a prototype component on the Class Design window that can be created with current technology (i.e. not a future prototype), you will see a ‘Research Proto’ button appear. Clicking this turns the prototype into a Research Prototype. Research Prototypes have an (RP) suffix on the class window.

Research Prototypes will appear in the Research tab of the Economics window in their appropriate Research Field. They can now be researched like any other component, except they are still available in class design as a prototype until the research is complete. At that point, the prototype flag will disappear. If that was the last prototype in a class, that class can thereafter be tooled in a shipyard.

The combination of this and previous posts means that any component can in one of four states. A ‘normal’ component (no suffix), a ‘current’ prototype (P), a future prototype (FP) and a research prototype (RP).

The various prototype changes mean you can build a prototype class design using prototype components and then research all those components, making the class available for use.

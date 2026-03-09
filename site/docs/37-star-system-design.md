**Star System Design Part 1: Modifying Stars**

C# Aurora allows you to manipulate star systems in SM Mode. While it would be difficult to design a system during the original generation process, due to the complexities involved, you can now add or modify stars and system bodies. This post covers modifying stars.

You click on a star in the System View and then click Change Star. The dialog below pops up and allows you to select spectral class, orbital distance, bearing and parent star.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/3cfc0fa5d9087602e6f106f7e78b2d36d314f23e_2_690x317.png)

image772×355 60.8 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/3cfc0fa5d9087602e6f106f7e78b2d36d314f23e.png "image")

Here is an example from my current test campaign that changes the B component of Alpha Centauri from a K1-V star to an F0-V, which is much hotter. The star will orbit more quickly due to the increased mass, plus all the planets orbiting the star are affected by the increased mass and luminosity of the different star. Temperatures will change, along with potentially hydrosphere type and atmospheric composition (as gases freeze out or boil). Oceans or ice sheets may convert entirely to water vapour given a significant temperature rise. Planets may change their tide-locked status.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/1e241980b7874761c9b6693dd31ec75e6500532e_2_690x431.jpeg)

image940×588 216 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/1e241980b7874761c9b6693dd31ec75e6500532e.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/d1f6a1fae6ef03aeb5cde8de8e24f2867ab9d759_2_690x430.jpeg)

image940×587 215 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/d1f6a1fae6ef03aeb5cde8de8e24f2867ab9d759.jpeg "image")

These two screenshots show the effect of moving the star further from the primary.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/96ed8c8073be0e4339ecb6f6ab0b407aa8970010_2_690x466.png)

image940×635 64.5 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/96ed8c8073be0e4339ecb6f6ab0b407aa8970010.png "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/ab3d2a4ef3b5efefcd03941225d5873bed9fad6d_2_690x452.png)

image940×617 63.5 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/ab3d2a4ef3b5efefcd03941225d5873bed9fad6d.png "image")

  

**Star System Design Part 2: Adding Stars**

Adding a new star is straightforward. You click Add New Star. The dialog below pops up and allows you to select spectral class, orbital distance, bearing and parent star.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/c40790e0d763b87353bf6754499dfd5a3c8bba4c_2_690x315.png)

image767×351 65.5 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/c40790e0d763b87353bf6754499dfd5a3c8bba4c.png "image")

This screenshot shows the result of adding the above star to the Alpha Centauri system. New stars do not have any planets or other system bodies. These are added separately and will be covered in a future post.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/91fbe9a2f09266ba9d9905ad68fe5859b1c35b93_2_690x465.png)

image940×634 74.7 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/91fbe9a2f09266ba9d9905ad68fe5859b1c35b93.png "image")

  

**Star System Design Part 3: Modifying System Bodies**

Modifying system bodies is a more complex process than stars due to the number of factors involved. There are factors that are tied to each other, such as mass, radius, density and gravity, plus certain types of bodies have different rules (planets vs moons, gas giants vs rocky worlds).

Therefore, the following factors can be changed; distance to parent body, diameter, density, hydro extent, albedo, atmospheric composition and dominant terrain. The dominant terrain is restricted to those terrains permitted by the other factors. Factors such as colony cost, gravity, temperature, atmospheric pressure, length of year, maximum population, tidal lock status, atmospheric retention, time required to stabilise a Lagrange point, etc. will all be derived from the factors that can be changed. For example, if you change the diameter or density, the mass and gravity will automatically change. If you change the distance to parent, the temperature and year will change and perhaps the tidal lock status. Finally, factors such as escape velocity, magnetic field, etc. are not shown here because they have no current game play impact, even though escape velocity will change as a result of modifications to density or diameter.

The basic type of system body (terrestrial, dwarf, etc.) cannot be changed, but it will be possible to delete one system body and add a new one of the desired type. This is to ensure all system bodies follow the basic rules of their type, even if they are later modified.

Below is the System Body Modification popup window. You can change the green fields in the top left, the dominant terrain dropdown and can add and remove atmospheric gases by choosing a gas and the desired atm (0 to remove). As you make each change, everything else updates.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/bf505b0818dfb9809e28ddbb047da53c0979036e_2_690x466.jpeg)

image917×620 143 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/bf505b0818dfb9809e28ddbb047da53c0979036e.jpeg "image")

For example, here is what happens if the diameter is halved. Gravity, mass and max population all fall, while the terraform rate vs Earth and the time to stablise a Lagrange point both increase.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/9ffffaec6b3f5b282526eafc51c6dfb90fca6250_2_690x466.jpeg)

image911×616 139 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9ffffaec6b3f5b282526eafc51c6dfb90fca6250.jpeg "image")

  

**Star System Design Part 4: Deleting Stars and System Bodies**

Deletion of stars or system bodies is straightforward. Click on the target object and then click Delete Body or Delete Star. You will be given two popup warnings and then the object will be deleted. Deleting a star will remove any system bodies in orbit. Deleting a planet will remove any moons of that planet. Any populations on affected system bodies will be deleted. Deleting the primary star is not possible.

When a star is deleted, any remaining stars will be renamed accordingly. For example, if you delete the B component of a primary, the original C component will now become the B component. When a planet or moon is deleted, the orbit numbers of the planets or moons will be adjusted accordingly.

For example, here are the before and after views of the Alpha Centauri-A system when the fourth planet is deleted.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/94987eda6be854281a6744f7b2a7fffedfa596ca_2_690x432.jpeg)

image940×589 223 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/94987eda6be854281a6744f7b2a7fffedfa596ca.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/af9be8da4c79970b8328ad69c3507ac8faa4b17c_2_690x431.png)

image940×588 214 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/af9be8da4c79970b8328ad69c3507ac8faa4b17c.png "image")

  

**Star System Design Part 5: Adding Planets, Comets and Asteroid Belts**

Below is the form for adding all new system bodies except for additional moons. You choose a system body from the drop down, which includes Terrestrial, Dwarf Planet, Gas Giant, Superjovian, Comet and Asteroid. Each body type has a distance parameter plus one or more other additional options.

*   For terrestrial and dwarf planets you have a toggle for automatic moon generation and can choose a specific or random number of moons.
    
*   For gas giants and superjovians, you have the above moon options plus similar options for Trojan asteroids (on/off, random/specific)
    
*   For comets, you choose the starting distance and maximum distance
    
*   For asteroid belts, you can choose a random or specific number of asteroids and the specific or random width of the belt (how far an asteroid can be generated from the centre of the belt)
    

Once the planet parameters are selected, press OK and the new body or bodies will appear in the System View. You can select them and use Modify Body to customise if desired.

The various zones shown at the top affect how Aurora determines parameters such as atmosphere, hydrosphere, mineral deposits, albedo, density, number of moons, total mass of asteroid belts and a variety of other factors. There is far too much detail to list, but generally bodies in the life zone will have better conditions and mineral deposits, followed in decreasing order by Inner, Outer and Extreme. These zones also exist in VB6. Of course, those factors only affect initial generation so you can override that by directly modifying a body post-creation.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/39cd9a2b556de6528d8cbe8f343c11ae3e4853d4.png)

image527×458 84 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/39cd9a2b556de6528d8cbe8f343c11ae3e4853d4.png "image")

  

**Star System Design Part 6: Adding Moons and Lagrange Points**

Below is the form for adding moons to existing planets. During planet creation you can specify appropriate moons to be created at the same time using standard moon generation based on the type of planet and is orbital distance. This form, accessed via the Add Moons button, is for creating additional moons which do not have to obey normal size restrictions. The form allows the addition of up to five moons (the drop-downs all start with no moon) with type and distance specified. If more than five moons are needed, the form can be used multiple times for the same parent planet.

After initial generation you can use Modify Body to specify additional detail if required

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/e9240d6debc796f06e178ac2c39d1008ee90e4fd.png)

image402×377 48 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/e9240d6debc796f06e178ac2c39d1008ee90e4fd.png "image")

The Add Lagrange button adds a Lagrange point to the currently selected body, even if it would not normally qualify for one.

  

**Star System Design Part 7: Deleting Asteroids and Lagrange Points**

Deleting individual asteroids can be done by using the Delete Body button. To delete an entire asteroid belt or all the Trojan asteroids for a particular planet, click one of the asteroids in the belt or one of the Trojans and click Delete Asteroids. There will be two warnings before all the affected asteroids are deleted.

Lagrange Points can be removed by selecting the parent system body and clicking Remove Lagrange.

Below is the final version of the System View in SM mode with all system engineering buttons present.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/d8a8d4cc59b6cef976ac82c20b67b61a4729bca9_2_690x431.png)

image940×588 180 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/d8a8d4cc59b6cef976ac82c20b67b61a4729bca9.png "image")

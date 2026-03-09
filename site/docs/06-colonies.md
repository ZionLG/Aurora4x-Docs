**Colony Cost**

The colony cost algorithm has been updated for C# Aurora to include hydrosphere extent, low gravity and tide-locked worlds and to change the rules for dangerous gases and max pressure. The new calculation is as follows:

Gas Giants, Super Jovians and worlds with a gravity higher than species tolerance cannot be colonised and therefore have no colony cost. Every other body has a colony cost that is equal to the highest colony cost factor from the following list:

**Temperature:** If the temperature is outside of the species tolerance, the colony cost factor for temperature is equal to the number of degrees above or below the species tolerance divided by half the total species range. For example, if the species range is from 0C to 30C and the temperature is 75C, the colony cost factor would be 45 / 15 = 3.00. The colony cost factor for tide-locked planets is 20% of normal, so in the example given the colony cost factor would be reduced to 0.60.

**Atmospheric Pressure:** If the atmospheric pressure is above species tolerance, the colony cost factor for pressure is equal to pressure / species max pressure; with a minimum of 2.00. For example, if a species has a pressure tolerance of 4 atm and the pressure is 10 atm, the colony cost factor would be 2.50. If the pressure was 6 atm, the colony cost factor would be 2.00, as that is the minimum.

**Breathable Gas:** If the atmosphere does not have a sufficient amount of breathable gas, the colony cost factor for breathable gas is 2.00. If the gas is available in sufficient quantities but exceeds 30% of atmospheric pressure, the colony cost factor is also 2.00.

**Dangerous Gas:** If a dangerous gas is present in the atmosphere and the concentration is above the danger level, the colony cost factor for dangerous gases will either be 2.00 or 3.00, depending on the gas. Different gases require different concentrations before becoming ‘dangerous’. Halogens such as Chlorine, Bromine or Flourine are the most dangerous at 1 ppm, followed by Nitrogen Dioxide and Sulphur Dioxide at 5 ppm. Hydrogen Sulphide is 20 ppm, Carbon Monoxide and Ammonia are 50 ppm, Hydrogen, Methane (if an oxygen breather) and Oxygen (if a Methane breather) are at 500 ppm and Carbon Dioxide is at 5000 ppm (0.5% of atmosphere). Note that Carbon Dioxide was not classed as a dangerous gas in VB6 Aurora. These gases are not lethal at those concentrations but are dangerous enough that infrastructure would be required to avoid sustained exposure.

**Hydrosphere Extent:** If less than twenty percent of a body is covered with water (less than 20% Hydro Extent), the colony cost factor for hydro extent is (20 - Hydro Extent) / 10, which is a range from zero to 2.00.

**Low Gravity:** If the gravity of the body is lower than the species tolerance, the colony cost factor for gravity is 1.00. In addition, the overall colony cost for the body will be suffixed by ‘LG’, for example 2.00 LG, which indicates that low gravity infrastructure is required for any population on that body. Normal infrastructure will not count toward the supported population.

  

**Colony Cost of Comets**

In VB6 Aurora, the colony cost of comets was not a major concern as there was no low gravity infrastructure. For C#, comets could potentially contain populations, albeit small ones.

Therefore temperature and colony cost now update as comets move towards and away from the sun. This means the population supported by infrastructure will change as well over time. The distance displayed on the system view is the current, rather than maximum, distance. You can flip between current and max colony cost on the System View and it is displayed on Colony Summary of the Economics window and on the Body Info tab of the Tactical Map.

The Unload Colonists Standing Order will ignore comets, so civilian traffic will not attempt to place colonists on comets about to disappear into the void.

I may add some larger comets to make this more interesting. Longer-term, I may also add eccentric planetary orbits with a similar approach to the above. This is an experiment on a small scale to see what issues I encounter

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/80c55eee73a14616cfb55f9297e8d595267f874a_2_690x431.png)

image940×588 180 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/80c55eee73a14616cfb55f9297e8d595267f874a.png "image")

  

**Population Capacity**

A new concept, Population Capacity, has been added to C# Aurora. This represents the maximum population that can be maintained on a single body and is primarily determined by surface area. This is the total of all populations on the same body, not per population.

The Earth’s population is currently seven billion. However, the rate of population growth peaked at 2.1% at four billion, has been dropping since then (now 1.2%) and is projected to reach close to zero around eleven billion

[https://ourworldindata.org/world-population-growth/](https://web.archive.org/web/20250530232109/https:/ourworldindata.org/world-population-growth/)

Therefore, I am going to use twelve billion as the baseline max capacity for an Earth-sized planet and four billion as the point at which growth rates are affected. Growth will follow the normal rules for up to 1/3rd of max capacity and then will fall off at a linear rate, hitting zero growth at max capacity (replicating the situation on Earth). The max capacity of a body will be equal to: (Surface Area / Earth Surface Area) \* twelve billion. I will add some tech options to improve that capacity, particularly for smaller bodies. A planet can physically hold more people than the max capacity but this will result in unrest due to overcrowding in the same way as insufficient infrastructure.

While 70% of the Earth’s surface is water, that plentiful water also improves living conditions (the majority of the world’s population is less than 100 km from the nearest coastline). However, there does come a point when too much water will reduce the available living space. Therefore, once water covers more than 75% of the planet, capacity will drop at a linear rate, falling to 1% of normal capacity at 100% water. The 1% assumes a few, small, scattered islands or some form of colony floating on the surface.

Tide-locked worlds (one side always facing the star) have only 20% of normal capacity (after taking into account surface area and water). This is to simulate that the population will be living in a narrow band between the light and dark hemispheres of the planet. To compensate, these worlds also have an 80% reduction in the colony cost factor for temperature (as they are living in the temperate band).

Regardless of the result of the above calculations, a body with gravity at or below the species maximum that is not a gas giant or super-Jovian will always have a capacity of at least 50,000.

The above rules result in the following population capacities

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/b3d6c40ddc89d1a97b8c3642e8d30e7d43a387b5.jpeg)

image659×353 76.8 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/b3d6c40ddc89d1a97b8c3642e8d30e7d43a387b5.jpeg "image")

Each Species has a population density modifier. This is normally set to 1 but there a small chance it can be higher or lower for random species. Player-created species can specify this density.

  

**Delete Empty Colonies**

With the new ground survey rules, I find I am creating colonies for the purpose of the survey and then being left with empty colonies scattered throughout the Imperium. I also have colonies that were created for various purposes but are now abandoned or never exploited.

Therefore, I have added the ‘Delete Empty’ button to the Economics window. This button will remove any colonies where all the following conditions are true.

There are no colonists  
There are no installations  
There are no abandoned installations  
There are no ground forces at the colony  
There is no ordnance stored at the colony  
There are no components stored at the colony  
There are no fleets orbiting the colony  
There are no fleets with this colony as a destination  
There is no ground survey potential  
The colony is not exempt from deletion (see below)

A second button ‘Empty Exempt’ toggles a flag to prevent the colony from being deleted when the ‘Delete Empty’ button is pressed. The exempt status is noted on the colony summary. This is for those worlds that you do plan to exploit at some point, even though it currently meets the conditions for deletion.

  

**Potential Colony Locations**

VB6 Aurora has a window entitled Available Colony Analysis, which is used to search for new colony sites.

In C# Aurora, this function has been built into the System View window. If you click the ‘All System View’ button, the Stars section is replaced with search filters. Several areas that are not required in this mode, such as the jump point list, are hidden from view. The All System View button changes to the Normal View button, which will return you to the standard single system view.

While in the All System Mode, you can narrow the search for potential colony sites across all systems while retaining all the functionality of the system view window.

For example, here the Jovian Federation is looking for worlds with a colony cost of 4 or less that have minerals present. The results are sorted by Colony Cost and then Hydro Extent descending. The Federation has yet to develop jump tech so all the bodies are from the Sol system.

The second screen shot is from my previous campaign and shows a search for worlds with acceptable gravity, oxygen present, not in an alien-controlled system, below a colony cost of 4, with a pop capacity of at least one million and that have minerals present. This is sorted by colony cost and size of mineral deposits.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/5954d0e98127da5782431465760b2f62dcf34871_2_690x430.png)

image940×587 185 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/5954d0e98127da5782431465760b2f62dcf34871.png "image")

  

**Automatic Pop Selection from Galactic Map**

A minor but useful change. If you select a system on the galactic map and then click one of the buttons for the Economics window (Summary, Industry, Research, etc.), the Economics window will open with the most important population in that system (if one exists) already selected. Important in this context uses the same rules as the orders of populations in each system on the Economics tree view.

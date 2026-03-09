**Wealth Generation**

In VB6 wealth generation is based on total population. Therefore some real-world nations with large populations (which I use in multi-race starts), generate a lot of excess wealth, even though in reality their wealth output is more in line with their industrial output. India is a good example of this situation. VB6 tries to solve this by having an option to set lower starting wealth per capita for a nation. However, that penalises the race throughout the whole game. In addition, conventional starts generate huge wealth excess as the population is initially producing wealth with minimal industry to consume it.

For C# Aurora, wealth is produced only by workers in TN installations, simulating that wealth is more closely tied to industrial potential than total population. Each 1 million workers produces a baseline 100 wealth per annum, although this can be improved by a new Wealth Generation tech line that replaces the VB6 Civilian Economy tech. This wealth is generated regardless of whether the installation to which the workers are assigned is currently building or producing anything. Wealth Generation tech starts with 120 wealth per million workers for 3000 RP, then 140 for 5000 RP, etc.. Workers in Conventional Factories and Forced Labour Camps do not produce wealth.

Financial Centres generate additional wealth equal to the tax from 250,000 workers (I may adjust this based on play test). Financial Centres can be transported to other colonies (unlike VB6). In addition to their other output, Conventional Factories function as 1/10th of a Financial Centre. Conventional Factories can be converted to Financial Centres at a cost of 20 BP, using 10 Corbomite and 10 Uridium. It is also worth noting here that tax generation from shipping lines has been doubled for C# Aurora.

The C# method has a few advantages over the VB6 method:

1.  High population, low industry nations are now easy to handle as most of the population does not generate wealth (it is assumed that the wealth from agriculture and service is used to cover welfare, health, education, etc. with a net wealth of zero).
2.  Conventional starts do not generate huge excess wealth
3.  As a nation industrialises, its wealth generation capability grows naturally, which reflects historical trends.
4.  The planned wealth reserve cap can be removed.
5.  Financial centres grow in importance and have more of a wealth impact (in relative terms) compared to VB6.

\>br>

**Maximum Wealth Balance**

In Conventional Start games, races often build up a huge wealth reserve due to a lack of costs. This removes wealth as a consideration for many years and takes away meaningful decisions.

Therefore, in C# Aurora, a race’s wealth balance can never exceed double the annual wealth. Any excess beyond that is assumed to be spent on improving the lives of its citizens.

  

**Manufacturing Sector**

The maximum service sector size has been reduced from 75% to 70%. The effect of this is an increase in the manufacturing population by 5% of total population. For a population on a colony cost zero world with max service sector (a home world for example), the manufacturing sector will be 25% of population, rather than 20%.

This change is because of the increased worker requirements for shipyards, plus the increased need for financial centres and maintenance facilities. I considered lowering the starting numbers of factories, but decided to maintain the existing balance and free up more population instead. Otherwise, the standard start will generally have a manufacturing efficiency problem.

  

**Orbital Mining Modules**

Asteroid Mining Modules in VB6 are replaced with Orbital Mining Modules in C#.

Each race has a new tech line called Maximum Orbital Mining Diameter. The starting tech is 100 km and each additional tech increases the size of the body that can be mined (125 km, 160 km, etc.). The tech line finishes at 500 km. Any system body, including asteroids, comets, moons and small dwarf planets, that falls within this diameter can be mined using Orbital Mining Modules. This does mean that some asteroids will be too large for orbital mining.

The population summary shows parent body diameter and eligibility for orbital mining. On the system view, you can flag those bodies that are eligible for orbital mining. On the Mineral Search window you can choose to filter on eligible bodies.

  

**Mineral Search Window**

The new version of the Mineral Search window. This should be more flexible than the VB6 version as you can specify minimum amounts and accessibilities for every mineral, plus the amounts are now nicely lined up so it is easier to compare different bodies. The window will order by the mineral with the highest minimum amount. The filter apply in left to right order, so if you specify gas giants only, it doesn’t matter what you specify for asteroids.

For example, here are all bodies with at least 1000 tons of Duranium with 0.3 accessibility or higher.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/f90dca666fe4a0216acfea86933e182779dd5111.png)

Here is the same but with the added requirement of at least 1 ton of Sorium.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/8bf5f5f37618a1d3b21d631f958bedb6d2361601.png)

  

**Mineral Search Flag**

A new option on the galactic map allows you to mark individual systems with a “Mineral Search Flag”. There is a display option to show which systems have been flagged.

On the Mineral Search window, you can restrict the search to systems with the flag set, in conjunction with the existing filters.

This will allow you to search for mineral deposits within a subset of systems, in addition to the current options of a specific system or all systems.

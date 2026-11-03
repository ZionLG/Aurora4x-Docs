**v3.1.0 Bug Fixes**

[Source: Aurora forum, post 1](https://aurora4x.com/t/aurora-v3-1-0-3rd-november-2026/1268/1)

*   Fixed a problem where the Create Colony button on the System View window doesn’t work in new games without a restart.
*   Fixed a problem with temperature dampening for moons.
*   Fixed research cost of Research Rate 500 RP from 640k to 64k.
*   Stopped the sidebar flicking when the tactical and galactic maps are dragged or zoomed.
*   Fixed an error when changing the research field of a scientist.
*   Removed fighter pods bays from component design.
*   Corrected a very slight blur in the toolbar icons.
*   Fixed a bug that prevented light naval shipyards from refitting obsolete classes.
*   Fixed an error that left records of 0 components, installations or trade goods in destroyed cargo holds, rather than removing them.
*   Fixed a display bug in the Environment tab of the Economics window, which was incorrectly displaying perihelion and aphelion colony costs in some cases.
*   Removed a trailing space from a fieldname, which was causing a save bug in the life pods table

**Idle Civilian Shipping**

[Source: Aurora forum, post 3](https://aurora4x.com/t/aurora-v3-1-0-3rd-november-2026/1268/3)

In v3.0, if a civilian freighter or colony ship cannot find orders, it will cease checking until after the next construction phase.

For v3.0.1, any idle ships in this situation that are not already at a colony will move to any colony in the same system with a population greater than zero.

If there are no populated colonies in the same system, it will find the closest one and transit the first jump point on the route to that system, then check again for orders.

**Ground Unit Projects**

[Source: Aurora forum, post 4](https://aurora4x.com/t/aurora-v3-1-0-3rd-november-2026/1268/4)

Ground Unit Projects are an alternative way to develop race-designed ground unit classes, rather than using research facilities. They work in the same way as Engineering Projects (for components) and Ordnance Projects (for missiles).

On the Industry tab of the Economics window, a new project type called “Ground Unit Projects” has been added to the project type dropdown. Selecting this will display a list of race-designed ground unit classes that have yet to be researched.

These classes can be selected and developed in the same way as other projects, with the following characteristics:

*   The build cost of the project will be twice the development cost of the class
*   The mineral requirements of the unit will be scaled up accordingly to match the build cost
*   The project will be built by construction factories
*   Only one project is required to develop the class

Unlike Engineering Projects and Ordnance Projects, no physical unit is produced. Once the project is completed, the ground unit class becomes available to add to formation templates.

For example, for a newly-designed ground unit class with a development cost of 200 BP, the Ground Unit Project cost will be 400 BP, using 400 Vendarite or a mixture of minerals for STO.

Ground Unit Projects simulate an engineering-led, trial-and-error process to develop new ground unit designs, rather than using research facilities. As with Engineering Projects, any empire can use them, but they are particularly important for empires that have no normal research capability — giving ground forces the same development path as components and ordnance.

**Context Menu Waypoints**

[Source: Aurora forum, post 5](https://aurora4x.com/t/aurora-v3-1-0-3rd-november-2026/1268/5)

The context menu on the tactical map now includes an option to create a waypoint.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/a/a4a2afe67bea2bed377bb90301a908227b42f06c.png)

Selecting the waypoint option brings up a list of waypoint options

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/1/122cd2064254ccbb8824988e9df7bfb2aad38cb5.png)

You can also just click in empty space and create a waypoint.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/0/06a42a5031d472fadfc1dff325821ee50a0a35f3.png)

**Naval Organization OOB Charts**

[Source: Aurora forum, post 6](https://aurora4x.com/t/aurora-v3-1-0-3rd-november-2026/1268/6)

I have added Naval order of battle charts to v3.1. These function in a similar way to the ground OOB charts.

You select a fleet or a naval admin node on the Naval Organization window and click the OOB Chart button to view. The OOB will show naval admin nodes, fleet nodes and sub-fleet nodes, with an option to list the ships associated with each fleet or sub-fleet.

Ships can be shown individually, by class, or by hull type or not at all. Parasites can be toggled on and off in the list. There is also an option to show the system in which the node is located.

Here are some examples:

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/a/a44dd2f6bd2b41b9625c166f65c03df3896d493d.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/7/70897f5eee53eecc8241bcbda5d133fa7466177d.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/e/e94f8f6c82f7e4caf331c1781c91a99b383773fb.png)

_Note that this is a work in progress. I had hoped to have more time to work on it before the release of v3.1, but the life pod bug has speeded up that timeline. There is enough functionality to make it useful, but I plan to add icon types and squadrons in the future._

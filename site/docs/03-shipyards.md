**Shipbuilding Changes**

I’m using this post as a placeholder to post any shipbuilding changes. So far the changes are:

1.  You can’t refit a damaged ship.
2.  Scrapping/Deleting is much more intelligent about moving commanders, teams and ground units from a ship to the scrapping population (in case you accidentally scrap or delete a ship with them on board). Fuel, maintenance and ordnance are also automatically unloaded.
3.  When a ship undergoes refit, fuel, maintenance and ordnance are moved from (or to) the refitting population to account for the differences post-refit.

  

**Repair Task in Shipyards Window.**

When selecting the repair task in the shipyards window, only classes / ships needing repair and currently in orbit will be displayed. In VB6 Aurora, all classes / ships in orbit are displayed and you have to cycle through to find the damaged ships.

If no ships in orbit are in need of repair, the class and ship drop downs will be empty.

  

**Continual Capacity Upgrade Target**

In C#, you can set a target capacity when using the Continual Capacity Upgrade shipyard task. The upgrade will end when it reaches that target capacity.

  

**Shipyard Worker Requirements**

Shipyards in VB6 require one million workers as a base, plus 100 workers for each ton of capacity in naval shipyards and 10 workers for each ton of capacity in commercial shipyards.

For C#, the base requirement is removed. Instead, naval shipyards will require 250 workers for each ton of capacity and commercial shipyards will require 25 workers for each ton of capacity. This is intended to bring shipyards in line with other major industry sectors such as construction factories, mines and research facilities

As an example, here are the shipyards from my current test campaign with the old and new requirements:

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/4102ad17b2522710829b3c1c1aa43782c1de7c4d_2_690x253.png)

image940×346 126 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/4102ad17b2522710829b3c1c1aa43782c1de7c4d.png "image")

  

**Auto Refit Tasks**

A new shipyard task has been added for C# Aurora, the Auto-Refit.

This is exactly the same as a Refit Task except for one difference. When the task is finished, the shipyard will automatically start a new refit task using the same target class. For example, if you auto-refit Class A to Class B, when the task is finished the shipyard will check for another Class A in the same location to refit. If one is found, the shipyard will automatically create the task.

You can refit fighters in shipyards in C#, so this new task will remove a lot of micromanagement that would otherwise be necessary.

  

**Refit Size**

The ‘size difference’ element of refit cost has changed for C# Aurora. In C#, the size difference acts as a modifier to the refit cost, rather than as a standalone cost.

In VB6 the size element cost is: ABS(Current HS - Refit HS) \* 5.

For C# the size element cost is: (ABS(Current HS - Refit HS) / Current HS) \* Refit Cost.

While this change is more realistic in general, it can lead to some weird situations where the refit cost from a large ship to a small ship is relatively low because the small ship is a version of the large ship with systems removed and no other changes. Therefore, C# adds a new restriction that you cannot refit to a design that is more than 20% smaller or 20% larger than the existing design. This also avoids cluttering the ‘Refit from’ dropdown when you have a lot of classes.

This change affects what can be built in shipyards. As in VB6, you can build the class for which the shipyard is tooled, or any other class to which the build class can be refitted for less than 20% of its cost. The new size restriction will prevent some classes from being eligible in this situation.

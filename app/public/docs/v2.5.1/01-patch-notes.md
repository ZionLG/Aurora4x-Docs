**v2.5.1 Bug Fixes**
*   Fixed bug in follow code that could cause an endless short increments in rare circumstances if faster target has orders but is not moving.
    
*   Rounded max repair cost to 1 decimal place on class summary.
    
*   Follow orders will be cancelled if the target fleet is not in the same system.
    
*   Fixed a bug that caused fleets to use double the minimum distance when intercepting a contact.
    
*   Fixed a bug that causes deletion of parasites if a ship with parasites is detached from a fleet that is subsequently deleted, before the game is saved and restarted.
    
*   Class display for missile to-hit chance accounts for ATG.
    
*   Thermal signature corrected for tugs with a ship or shipyard under tow.
    
*   Multiple awards of the same medal displayed correctly and added to promotion score.
    
*   Fixed range label for beam fire controls displayed on tactical map.
    
*   Fixed popup bug for populations that have ground training tasks but no ground construction complexes.
    
*   Create button on the Create Project window will be disabled if any pre-requisite techs are unavailable.
    
*   Numbers of ships in each alien class (used for naming) retained on save and reload.
    
*   Load Previous on the Missile Design window remembers detonation range and laser warhead flag.
    
*   Detonation Range automatically set to zero for missiles without laser warheads.
    
*   Stabilisation ships will not enter alien-controlled systems when the avoid alien flag is set.
    
*   Population research bonus from ancient constructs will only apply once it has been surveyed by Xenoarchaeology units.
    
*   Fleets with the ‘Investigate Point of Interest’ standing order will only investigate POI created by their parent race.
    
*   Closing the Select Name window using the top right cross will be treated the same as using the Cancel button.
    
*   Shipping lines will not build harvesters until there is a surveyed gas giant with Sorium in a system with at least 10m population.
    
*   Wealth can be edited to a negative number.
    
*   Fixed display error that shows CIWS destroying too many missiles.
    
*   Fixed bug that prevents transit when a fleet relies on a commercial-engined ship with a military jump drive that doesn’t start the sub-pulse on the target jump point.
    
*   Ships with shuttle cargo bays can be assigned load/unload orders.
    
*   Fixed display bug reporting science officer killed by bridge hit.
    
*   State of Wrecks and Aether Rift checkboxes on Galactic Map retained on save.
    

**v2.5.1 Minor Changes**
*   ‘Matching Scientists Only’ checkbox on the Research tab of the Economics window defaults to checked.
    
*   Jump Drive HTK changed to the square root of the size in HS, rounded down. Anything below 1 HS will therefore be 0 HTK.
    
*   Minor redesign of Diplomacy window.
    

  

**Highlighted Research Field**

On the Research tab of the Economics window, when the ‘Matching Scientists’ only option is selected, any existing projects with that specialisation will be highlighted in blue.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/630dc60577fdf55c522673a0c4c0c3d29bc891f1.jpeg)

  

**Mineral Search Window Updates**

I have added a wide view option to the Mineral Search window. This adds information on atmosphere, gravity, diameter and terraforming speed.

Maximum Diameter and Minimum Gravity are also available as search parameters (at the top of their respective columns).

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/59c5886185ee5b5346e1c939a814b8ce225be3e3.jpeg)

I have also added an option to display system bodies using the same colours for colony cost as the System View.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/7ed3beac4d8601770caee5eb2268525d1a3ba93c.jpeg)

  

**New Waypoint Options**

A Move Waypoint button has been added to the Tactical Map sidebar. You can select an existing waypoint on the sidebar, click Move Waypoint and click on the map. The existing waypoint will be repositioned and any fleets heading for that waypoint will change their destination for the new location. Any missile salvos heading for the waypoint will lose their target (otherwise salvo stacking becomes a micromanagement option).

A new Temporary Waypoint type has been added. Temporary waypoints will vanish at the end of the sub-pulse in which a ship or missile arrives at that waypoint, or three months after it was created.

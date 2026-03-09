**Screen Resolution**

I’ve mentioned the minimum resolution a few times in different places, but I think it is worth including here, especially as it just came up on the Discord.

C# Aurora will launch with a minimum resolution of 1440 x 900. The windows will not be re-sizeable except for the Tactical Map and the Galactic Map and even in that case it is because those windows are intended to fill the whole screen. The Class design window has a ‘Wide’ option that takes it to about 1800 x 900.

  

**Tactical Map in Background**

C# does not have a starting menu bar in the same way as VB6. Instead, the Tactical Map is the main game window.

Once the Tactical Map is open however, both VB6 and C# have a similar issue. Assume you have the Tactical Map on maximised and you open the Economics window. That window is now on top of the Tactical Map. Now you click the button on the Tactical Map to open the Fleet Window. While that is on top of the Tactical Map, the existing Economics window is now behind the Tactical Map because clicking on the button gave the tactical map focus and therefore precedence over the existing Economics window. Which means if you want to see both Economics and Fleet at the same time you need to manually bring Fleet to the front (or move Economics to a second monitor before clicking the Fleet button).

Therefore C# now has an option called ‘Keep Tactical in Background’. While this is active, after pressing the toolbar button on the Tactical Map, the new window will open and then the Tactical Map will move to the background, leaving all other windows in front of it and the newly opened one on top.

  

**Linked Windows**

C# Aurora has a option to link all the open windows, so that when you change the current Race in one window, all the other windows change to the same race.

  

**Tactical Map Popup Menu**

When you right-click on the tactical map, any fleets, population or jump points within a few pixels of where you click will appear in a list. If you select a population, the Economics window will load with the population selected. If you select a fleet, the Naval Organization window will load with the fleet selected. If you select the jump point, which appears as the name of any destination system, the tactical map will change to that system.

  

**Save Button**

C# Aurora doesn’t continually update to disk in the same way as VB6 Aurora, which is one of the reasons why it is much faster. Instead, there is a Save Button.

When you click Save, the database prior to the save is copied to a new file called AuroraDBSaveBackup.db and then the AuroraDB file is updated with the current game. The previous AuroraDBSaveBackup.db is copied to a file called AuroraDBPreviousSaveBackup.db, so you have automatic backups of your last two saves. To restore a previous save, you need to delete AuroraDB.db rename the backup file to AuroraDB.db.

If you close without saving then your game will revert to the last save. Saving takes about thirty seconds.

  

**Multiple Window Instances**

In C# Aurora, you can open multiple instances of each window except for the tactical map. So you can have multiple class windows, galactic map windows, fleet windows, etc.. Each time you click the Fleet window button (for example) another Fleet window opens.

This is useful for comparing classes for example. However, you can also drag and drop between two windows of the same type. For example, you could drag a ship from a fleet on one window and drop it on a fleet on a second window, or drag a ground unit from one Ground Forces windows under the hierarchy of an HQ on the second Ground Forces window.

  

**Assigned Mothership Display**

In playing my BSG campaign, I found it difficult to keep track of which mothership was the parent of each survey FAC. Therefore, I have added Assigned Mothership as a field on the ship design display and also added assigned mothership name and fleet to the summary at the top of the Fleet tab of the Naval Organization window.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/660f3a3edfdfce871fd0320593bf5b48c900ab3c.jpeg)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9558823ef11898b1fe0ab593c1d7a8782e6aed91.jpeg)

  

**Race Comparison Window**

C# has a comparison window that allows you to see a high level comparison between different Races. It is simple and read-only, but useful for a high-level overview.

The window expands to the number of player races in the game. I may also add some additional comparison information over time.

  

**Race Comparison Window**

C# has a comparison window that allows you to see a high level comparison between different Races. It is simple and read-only, but useful for a high-level overview.

The window expands to the number of player races in the game. I may also add some additional comparison information over time.

  

**Survey Site List**

Given the number of potential ground survey sites, it could be difficult to keep track. Therefore I have added a new tab to the tactical map that contains a list of current known sites.

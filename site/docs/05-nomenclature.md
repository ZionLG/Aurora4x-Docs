**Naming Themes**

In VB6 Aurora, we have racial themes that include system names, class names and rank names, plus a variety of ship name themes.

For C# Aurora, they are all amalgamated into Naming Themes, which can be used individually for Classes, Systems and Ships. Ranks will be handled separately.

A race will select a Class Naming Theme, a System Naming Theme and a Rank Theme (so you can use current Ship name themes at the Race level). Each Ship Class can also have a Naming Theme.

The Naming Themes comprises everything previously used for Ships, plus the existing Racial Themes separated out into the System and Class elements (and named appropriately so you can replicate existing Race Themes if desired).

This should be a lot more flexible while allowing everything you can do now. It will also make it a lot easier for players to add customised themes.

  

**System Naming**

In C# Aurora, you can optionally assign one of the new Naming Themes to a system. Any future exploration beyond that point will use the selected naming theme. This allows you to have different naming themes for different warp chains.

The order of name selection for new systems will therefore be:

1.  Actual System Name (for known stars)
2.  Next name for Naming Theme associated with the system from which the exploring ship originated (if a theme is set)
3.  Next name for Racial System Theme
4.  “System #” + System Number

You can still rename systems directly and will be able to use text, or select any name from any name theme.

  

**Commander Name Themes**

C# Aurora allows a Race to have an unlimited number of Commander Name Themes. This is handled on the Race window.

When a Race is created, a single theme is selected as part of the creation process. Unless the player makes changes, 100% of commanders will use this initial theme. The player can choose additional themes, assigning each one a weight. When a new commander is generated, the name will be randomly assigned a theme based on the weight of each theme.

The first screenshot shows a race with a single commander name theme. The second shows the same race with multiple additional themes. The top left section of the Race window shows the main theme (the greatest weight) plus the number of additional themes.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/580aaf2c811000f6a6a9eab42939fe20ef7529bc_2_690x466.jpeg)

image940×636 217 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/580aaf2c811000f6a6a9eab42939fe20ef7529bc.jpeg "image")

  

**Mining Company Names**

This is only a ‘miner’ cosmetic change ![:)](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/30958a87cf55f4d9ce8060f11f5189deddc2f423.png)

When civilian mining companies are created, they will be given a company name which will become the population name. This is similar to shipyard naming using a family name from the racial naming theme plus a ‘company name’ such as Smith Minerals & Ores or Jones Resources Group. This is purely cosmetic and has no game play impact, but serves to differentiate the civilian mining outposts.

Note that this doesn’t rename the system body. Population and system body names are separate in C# Aurora, so you can still create your own population with a different name on the same system body. The Economics window already has an option to show both system body name and pop name if they are different so you can still see the locations if desired.

  

**Adding Your Own Naming Themes**

Adding your own naming themes is very simple in C# Aurora.

1.  Create a text file with one name per line.
2.  Click the button shown below
3.  Enter the theme name in an input field that pops up
4.  Select the file using a standard windows file dialog box.

The name theme is added to the database for the current game and all future games.

  

**Naming Options for Ships**

In C# you can choose a naming theme for all the ships of a certain class, just as you can in VB6. C# also adds some new options.

You can choose for each class whether you want the names from the theme to be selected in order or selected randomly.

Each class has Prefix and Suffix name options. I’ll steal Father Tim’s example from the suggestion he made: Wind-class destroyers could be auto-named Arctic Wind, Bitter Wind, Cold Wind, Desert Wind, or Dragon-class carriers could be auto-named Red Dragon, Night Dragon, Gold Dragon, Shadow Dragon, etc.. So if you create a Colours naming theme for example, you can apply it to many different classes but with a different prefix or suffix.

  

**Adding Your Own Commander Name Themes**

Adding your own commander name themes was not possible in VB6. I’ve added that option for C# where the theme follows the pattern of First Name - Surname, with the option for both male and female names.

1.  Create three text files with one name per line for Male First Names, Female First Names and Surnames. There is no naming convention for file names.
2.  Click the second button shown below
3.  Enter the theme name in an input field that pops up
4.  Select the male names file using a standard windows file dialog box. You are prompted which file to select.
5.  Select the female names file using a standard windows file dialog box. You are prompted which file to select.
6.  Select the surnames file using a standard windows file dialog box. You are prompted which file to select.

The new commander name theme is added to the database for the current game and all future games.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/a004486679bbca97c7415d79c5c38383e05337e3_2_233x500.png)

image527×1130 97.5 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/a004486679bbca97c7415d79c5c38383e05337e3.png "image")

<br

**‘Battlestar Greek’ Commander Name Theme**

I’ve added a new Naming Theme for my latest test campaign. It mixes names from Battlestar Galactica with names from Greek Mythology, so I’ve called it Battlestar Greek. It is a little weird ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=15 ":slight_smile:") but matches the theme for the campaign so I’m going to make it one of the standard themes. Here is a sample of some randomly generated names.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/b3a93627c5df2cfd3e40a376eab4080520aaf53e_2_117x499.jpeg)

image264×1128 115 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/b3a93627c5df2cfd3e40a376eab4080520aaf53e.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/2ec8082b3ea27e7fae5af3523cd42efe7df24c36_2_107x500.jpeg)

image248×1158 111 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/2ec8082b3ea27e7fae5af3523cd42efe7df24c36.jpeg "image")

  

**Shipping Line Names**

You can rename shipping lines in C# Aurora. Just click on the ‘Admin Command’ that represents the shipping line on the Naval Organization window and click Rename. You provide a full name for the shipping line and a short name for the ship naming.

# Qlik Sense Best List Box

We created this list box extension because we found the list boxes that come with Qlik Sense are bland and featureless and other list box extensions out there do not improve the look and feel of the listboxes. Hopefully this project will both look good and have a bunch of useful features!

## Getting Started

This project contains only three files. Open your Qlik Sense deployment's dev-hub ([qlik-sense-domain]/dev-hub/) and create a new visualization. Name it "best-list-box" and use the Listbox template. Then, copy the contents of the "best-list-box.qext" file in this project into the file that was generated with the new extension. Click "New File" (plus sign) on the right side of the dev-hub and name it "best-list-box.js" and another named "style.css". Copy the contents of their respective files in this project into the dev-hub. Now, when you are editing a sheet, you will see the "best-list-box" extension is available under Custom Objects and Extensions.

https://www.youtube.com/watch?v=MyTQ7Lu0yFI

## Features

#### Sort Criteria
Sort list values by Logical State, Numeric Value, Alphabetical Order, Load Order, and Expression

#### Highlight Color
Color of list item when selected as string like "RGB(XXX,XXX,XXX)"

#### Font Size
List item font size in pixels (which are converted to em's to account for page sizes a little bit)

#### Text Color
Inserted as HTML color attribute for item font

#### Label Align
Align label left, center, or right

#### Always One Selected Value
Choose whether multiple values can be selected, set a default value, and choose whether to grey out unselected values

#### Disable Charts
Provide a comma separated list of chart tid's to disable (user won't be able to click on them to select values)

## Compatibility and Testing

This project was built and tested with the following software versions:  
* Qlik Sense Enterprise 3.0
  
Tested on the following browsers:  
* Google Chrome  
* Mozilla Firefox

## Authors

<strong>Priority Thinking Team</strong>  
Tim Kendrick  

## License

	This extension is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	For a copy of the GNU General Public License, see 
	<http://www.gnu.org/licenses/>.

## Acknowledgements

http://bi-era.com/ (someone's old site where a similar list box extension could once be downloaded)
https://community.qlik.com/  
https://www.prioritythinking.com

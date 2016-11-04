# ADA-Orion
ADA project Orion of team Kepler:
* Kristian Aurlien
* Mateusz Paluchowski
* Christian Tresch

![Image of Orion constelation](http://www.richardgottardo.com/wp-content/uploads/2012/05/orion.jpg)

##### Table of Contents  
[Abstract](#Abstract)  
[Data description](#Data_description)  
[Feasibility and Risks](#Feasibility)
[Deliverables](#Deliverables)  
[Timeplan](#Timeplan)  

<a name="Abstract"/>
## Abstract
We are aiming to create [Happy food maps](http://goodcitylife.org/happymaps/ "Happy maps") for Switzerland based on geotagged images gathered from instagram/flickr/foursquare.  

<a name="Data_description"/>
## Data description

<a name="Feasibility"/>
## Feasibility and Risks

###1. Data acquisition Risks

+ Flickr dataset contains only 350k Swiss geolocated pictures and it mostly contains mountains/places/people not food.
	
+ By default both Instagram and Facebook strip off EXIF geolocation of image they store in database so this database might proove to be quite useless for our application (but maybe there is some other way of obtaining geolocation of pictures from Instagram? Maybe its directly in schema of dataset?) 
 
###2. Data acquisition feasibility
 
+ The most promissing dataset is owned by Foursquare which is somewhat focused on restaurants and food - it contains various locations with users pictures taken in it. So called venues are geolocated and so are the pictures taken in those venues. It seems that we could 'crawl' [Foursquare's API](https://developer.foursquare.com/docs/venues/search "Foursquare's API") in order to obtain large dataset of restaurants in Switzerland and pictures taken in those restaurants.

<a name="Deliverables"/>
## Deliverables
* unordered element 1
* unordered element 2
* unordered element 3

<a name="Timeplan"/>
## Timeplan
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

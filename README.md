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
Inspired by the talk of Mohammed Kafsi we have picked up their idea of finding neighborhood descriptors in cities. In our project our goal is to find other descriptive attributes of neighborhoods in a city using location enriched data. For this undertaking we attempt to scrape places and venue information of a suitable API and store the data for further processing. In a further processing step we target to create a descriptive fingerprint for a neighborhood in order to be able to possibly compare it to a similar neighborhood in a different city.

<a name="Data_description"/>
## Data description

Scraped places data from either or a combination of the following APIs:

* Google Maps Places API
* Factual Places API
* Foursquare API


<a name="Feasibility"/>
## Feasibility and Risks

###1. Data acquisition Risks

+ Flickr dataset contains only 350k Swiss geolocated pictures and it mostly contains mountains/places/people not food.
	
+ By default both Instagram and Facebook strip off EXIF geolocation of image they store in database so this database might proove to be quite useless for our application (but maybe there is some other way of obtaining geolocation of pictures from Instagram? Maybe its directly in schema of dataset?) 
 
###2. Data acquisition feasibility
 
+ The most promissing dataset is owned by Foursquare which is somewhat focused on restaurants and food - it contains various locations with users pictures taken in it. So called venues are geolocated and so are the pictures taken in those venues. It seems that we could 'crawl' [Foursquare's API](https://developer.foursquare.com/docs/venues/search "Foursquare's API") in order to obtain large dataset of restaurants in Switzerland and pictures taken in those restaurants.


###3. Data processing risks

###4. Data processing feasibility

###5. Data visualization risks

###6. Data visualization feasibility

<a name="Deliverables"/>
## Deliverables

* Scraped places data
* Processed neighborhood descriptors
* Visualized neighborhood mappings

<a name="Timeplan"/>
## Timeplan
1. Data scraping from APIs

	- Accessing APIs
	- Parsing data
	- Storing data for future use	

2. Processing of data to extract descriptive neighborhood characteristics

	- Find representative descriptors
	- Extract descriptors
	- Proccess data	

3. Visualization of aggregated data

	- Heatmaps
	- Aggregation of weighted variables
	- Mapping of one city to another city
	- Display on in HTML

4. Presentation and report of the project

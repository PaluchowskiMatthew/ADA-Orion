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
Inspired by the talk of Mohamed Kafsi we have picked up their idea of finding neighborhood descriptors in cities. In our project our goal is to find other descriptive attributes of neighborhoods in a city using location enriched data. For this undertaking we attempt to scrape places and venue information of a suitable API and store the data for further processing. In a further processing step we target to create a descriptive fingerprint for a neighborhood in order to be able to possibly compare it to a similar neighborhood in a different city.

<a name="Data_description"/>
## Data description

Scraped places data from either or a combination of the following APIs:

- [Factual Places API](http://developer.factual.com/api-docs/)

	We want to use the Factual API to gather information on the location of restaurants, cafees, theatres etc. These will be our main descriptives for an area.

- [Foursquare API](https://developer.foursquare.com/)

	If we descide to use user recomendations of the restaurants etc., we have concidered Foursquare as a source.
	
- [Google Maps/Places API](https://developers.google.com/places/)

	As a backup plan, we have the Google Places API that does much the same as the factual API. Because of strong regulations on usage, we will try to base our solution on the Factual API.
	


<a name="Feasibility"/>
## Feasibility and Risks

### 1. Data acquisition Risks

- For Google's APIs, there are quite strict regulations on how you are allowed to use the data. Our plant might 

+ Flickr dataset contains only 350k Swiss geolocated pictures and it mostly contains mountains/places/people not food.
	
+ By default both Instagram and Facebook strip off EXIF geolocation of image they store in database so this database might proove to be quite useless for our application (but maybe there is some other way of obtaining geolocation of pictures from Instagram? Maybe its directly in schema of dataset?) 
 
### 2. Data acquisition feasibility
 
+ The most promissing dataset is owned by Foursquare which is somewhat focused on restaurants and food - it contains various locations with users pictures taken in it. So called venues are geolocated and so are the pictures taken in those venues. It seems that we could 'crawl' [Foursquare's API](https://developer.foursquare.com/docs/venues/search "Foursquare's API") in order to obtain large dataset of restaurants in Switzerland and pictures taken in those restaurants.

### 3. Data processing risks

+ One possible data processing risk is related to combining multiple data sources into one dataset. It might be challenging in terms of general logistics as well as processing power (datasets might be larger then what we can easily manipulate on one machine).

+ Creating meaningful metrics in order to accurately describe and compare neighborhoods might prove to be challenging and there is no real baseline model for verification. We can only do it by ourselves based on our neighborhood knowledge. 

### 4. Data processing feasibility

+ We are hoping to obtain large enough dataset in order to present valuable insight but small eoungh to manipulate it on single machine.

### 5. Data visualization risks

### 6. Data visualization feasibility

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
	- Display findings in HTML

4. Presentation and report of the project

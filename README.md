# Mississauga OpenData Hackathon🥈
This is a quick leaflet project demo made for the [**Mississauga OpenData Hackathon**](https://www.mississauga.ca/events-and-attractions/events-calendar/mississauga-open-data-hackathon-2024/?eventdate=2024-11-26T09%3A00%3A00&schedule=20130 "City of Mississauga OpenData Hackathon page") for our team (Me, Areeba, Athar)[^1], in which we won second place. This quick demo uses data from the OpenData project in order to map out areas that would benefit from certain types of sustainable roofing better than others (namely white roofs, blue roofs, and green roofs). Although the demo does not use all the data, it does use data taken from the data analysis done by Athar in order to properly demonstrate the idea.

## OpenData
The date we used is part of the [OpenData](https://data.mississauga.ca/ "City of Mississauga OpenData Homepage") project.
> Open Data is public information that can be freely used by anyone and is available for public research, analysis, reporting and mobile app development. (City of Mississauga)

## Issue
The hackathon was focused on creating greener roofs for the City of Mississauga. We decided to attack this problem using a systematic approach in which we developed a tool for potential policy makers and climate change groups which gives insight into where each type of sustainable roof is best used in the city (white, blue, or green). We then used the data sets provided by the OpenData project to get the coordinates used in the technical demonstration.

## Usage
There are no dependencies besides leaflet for this project. It is very simple, and the leaflet CSS and Javascript links are in the index.html file.
```html
<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
crossorigin=""/>
<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
crossorigin=""></script>
```
You can find the link to the running site [here](https://n8lc.github.io/Mississauga_Hackathon/index.html).
[^1]: Thank you to the City of Mississauga as well as my teammates for the chance to attend this wonderful hackathon!

# DubsDot
A website that is the portal to all of COSI's web services

## Adding links to the Homepage
to add a page as a card on the homepage. open the links.json file. the schema
for a page is as such

```json
{
	"name": "The name of the site",
	"url": "The website's url",
	"desc": "A short description of the website"
}
```

Add it to either the main section or misc section by putting it in the
respective arrays in the file. Once it is done, run `gulp generate` to generate
the pug file and process it into HTML as usual afterwards. 

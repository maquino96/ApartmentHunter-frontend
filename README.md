# Apartment//Hunter-frontend #

___For my latest work, please visit my [personal website](https://www.mattaquino.dev/)___

Apartment//Hunter was built with a React frontend, Rails backend, and the Semantic UI CSS Framework.

The app takes in a zipcode and pulls listings from the Realtor API and uses (Google) Maps JS API to plot them on a map. 

Features include:
* Users can add listings to their favorites.
* Users can sort and filter through the listings based off price, rooms available, bathrooms, available, and square footage. 
* Users can add listings to favorites and input notes for each listing that they add.
* A listing card can be clicked on for more information.
* Any of the markers can be clicked on to open a new window where the user will be taken to the listing on Realtor.com
* Lightmode + Darkmode 

<!-- This was my first project with React and I gained a lot of comfortability with using Semantic UI from this experience. Previously I had used Bulma, another css framework where you would update class names and connect to the framework via a CDN link in the html file. Semantic brought a slew of prestyled components that sped up the development process. This was also the first time using an API from the Google Cloud Platform. It was everything you expected from Google and more, they have hundreds of API Libraries and other services under that platform. I would need a few days to sift through all the functionality. I pretty happy about the outcome of the app but like with most first time projects there were challenges and some bugs that still need to be fixed.

Some challenges included the non-uniform information returned by the Realtor API. Depending on the region the zipcode was the returned object had differing key:value pairs. It was a nightmare to deal with, we created a workaround using nexted conditional renders but that was a band aid and the real problem was with the API and it's database. These challenges lead to the discovery og GraphQL which could have possibly remedied this problem but that's another new tech to explore in the near future. Then there's also some filtering and css issues that plague every new developer. Overall, great learning experience creating this app.  -->
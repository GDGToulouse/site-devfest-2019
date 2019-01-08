# Proto Site DevFest 2019

## Requirement

* [Install Hugo](https://gohugo.io/getting-started/installing/)
  Note: you need to install the extended version.

* If you need to use tools, or deploy, you also need [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/lang/en/docs/install).


## Run Local site


Just run 

```
hugo server -D
```

Notice that the `-D` flag is used to rendrer draft elements.

More information [here](https://gohugo.io/commands/hugo_server/)

## Build

Just run 

```
hugo
```


More information [here](https://gohugo.io/commands/hugo/)

## Edit data

You can edit 

- general information about the site into the `config.toml` file.
- some data into `data/*.yml` files, like header or footer information
- some content into `content/**` files.
- some static assets like images into the `static/*` folder

### Create a new blog entry

You can use `hugo new blog/i-create-a-new-entry.md` command and then edit it.
Or just copy an already existing blog entry, and update the content.


## Tooling

First you need to install dependencies with `yarn`.


### Publish

To publish the site on firebase, just run `firebase deploy`. 
Note that you need to authenticate once with `firebase login` 


### Extract data from CFP

TODO...


## TODO

* [] i18n
* [] a11y
* [] optimizations
* [] more tooling
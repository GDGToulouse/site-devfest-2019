# Site DevFest Toulouse 2019

> This site is archived. The DevFest Toulouse 2019 took place on October 3rd, 2019. The content is frozen and hosted as a static site on OVH.

## Requirement

* [Install Hugo](https://gohugo.io/getting-started/installing/)
  Note: you need to install the extended version.

## Install Theme

```bash
git submodule init
git submodule update themes/devfest-theme-hugo
```

## Run Local site

Just run

```bash
hugo server -D
```

Notice that the `-D` flag is used to render draft elements.

More information [here](https://gohugo.io/commands/hugo_server/)

## Build

Just run

```bash
hugo
```

More information [here](https://gohugo.io/commands/hugo/)

## Deploy to OVH

1. Build the site: `hugo`
2. Upload the content of the `public/` folder to OVH via FTP/SFTP
3. Make sure the `.htaccess` file is present at the root

## Edit data

You can edit

* general information about the site into the `config.toml` file.
* some data into `data/*.yml` files, like header or footer information
* some content into `content/**` files.
* some static assets like images into the `static/*` folder

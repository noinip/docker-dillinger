# docker-dillinger

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

## quickstart

    docker run -d --name dillinger -p 8080:8080 mkodockx/docker-dillinger:classic

Uses the original Dockerfile from [base repo](https://github.com/joemccann/dillinger)

## third-party store

### info

Dillinger is currently extendedable via several storage plugins.

* [Dropbox](https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md)
* [Github](https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md)
* [Google Drive](https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md)
* [OneDrive](https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md)

### configuration

You may provide a plugin configuration file (<pluginname>-config.json) via [VOLUME](https://docs.docker.com/reference/builder/#volume) to the container's plugin folder ('/app/plugins/<pluginname>/').
    
**Recommended**

Use the configuration alternative via environment variables. See the links at [info](info)

### Todo's

 - More Tests
 - Add Night Mode

### Techstack

**Free Software, Hell Yeah!**

[john gruber]:http://daringfireball.net/
[@thomasfuchs]:http://twitter.com/thomasfuchs
[1]:http://daringfireball.net/projects/markdown/
[marked]:https://github.com/chjj/marked
[Ace Editor]:http://ace.ajax.org
[node.js]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[keymaster.js]:https://github.com/madrobby/keymaster
[jQuery]:http://jquery.com
[@tjholowaychuk]:http://twitter.com/tjholowaychuk
[express]:http://expressjs.com
[AngularJS]:http://angularjs.org
[Gulp]:http://gulpjs.com

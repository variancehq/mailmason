<h1 align="center">
  <img src="./media/header@2x.png" width="100%" style="max-width:1230px;" alt="MailMason">
</h1>
<p align="center">A complete toolset to streamline building and updating a set of consistent transactional emails.</p>

<p align="center">Brought to you by <a href="http://postmarkapp.com"><img src="http://assets.wildbit.com/postmark/misc/postmark.svg" alt="Postmark"></a>
</p>

_Few tasks are more tedious than building a consistent set of well-tested and beautiful transactional email templates for your application._ Not any longer.

With MailMason, you can use Grunt tasks, Handlebars, and SASS to streamline building a consistent set of transactional email templates using layouts and partials to reduce redundancy and create both the HTML and plain text versions of your transactional emails in one fell swoop.

By default, the generated templates use [Mustachio](https://github.com/wildbit/mustachio) for the variable placeholders so that you can easily use them as [Postmark](https://postmarkapp.com) templates. However, the Mustachio pieces are only placeholders, and the generated templates could easily be adapted to work with any email provider.

## What does it do for you?

- [x] Gives you a thoroughly tested and reliable starting point for building consistent email templates
- [x] Uses Handlebars to enable layouts and partials in templates and avoid redundancy
- [x] Enables the use of SCSS for generating the styles
- [x] Automatically inlines the resulting CSS for testing email client compatibility
- [x] Automatically generates text versions of emails with the same content as the HTML versions
- [x] Enables easy sending of test emails through your Postmark account
- [x] Enables easy batch testing against the [Postmark Spamcheck API](http://spamcheck.postmarkapp.com)
- [x] Enables easy batch testing through [Litmus](http://litmus.com)
- [x] Enables easy uploading of image assets to your CDN so you can include images in your templates (but you don't have to)
- [x] Enables easy template pushing to your Postmark account

## Interested in contributing?

Read through our [guidelines for contributing](https://github.com/wildbit/mailmason/blob/template_updates/CONTRIBUTING.MD) to help make contributions quick and easy.

## Visit the wiki for documentation and usage

If you need help getting started or using MailMason, make sure to check out the [MailMason wiki](https://github.com/wildbit/mailmason/wiki).

- [About](https://github.com/wildbit/mailmason/wiki/About)
  - [What can it do?](https://github.com/wildbit/mailmason/wiki/About#what-can-it-do)
  - [What templates are included?](https://github.com/wildbit/mailmason/wiki/About#what-templates-are-included)
- [Getting Started](https://github.com/wildbit/mailmason/wiki/Getting-Started)
  - [Setup](https://github.com/wildbit/mailmason/wiki/Getting-Started#setup)
  - [Configuration](https://github.com/wildbit/mailmason/wiki/Getting-Started#configuration)
    - [Secrets.json](https://github.com/wildbit/mailmason/wiki/Getting-Started#secretsjson)
    - [Config.json](https://github.com/wildbit/mailmason/wiki/Getting-Started#secretsjson)
    - [Images & Assets](https://github.com/wildbit/mailmason/wiki/Getting-Started#images--assets)
    - [Social Images](https://github.com/wildbit/mailmason/wiki/Getting-Started#social-images)
- [Project Structure](https://github.com/wildbit/mailmason/wiki/Project-Structure)
  - [Templates](https://github.com/wildbit/mailmason/wiki/Project-Structure#templates)
  - [Images](https://github.com/wildbit/mailmason/wiki/Project-Structure#images)
  - [Layouts](https://github.com/wildbit/mailmason/wiki/Project-Structure#layouts)
  - [Partials](https://github.com/wildbit/mailmason/wiki/Project-Structure#partials)
  - [Stylesheets](https://github.com/wildbit/mailmason/wiki/Project-Structure#stylesheets)
- [Usage](https://github.com/wildbit/mailmason/wiki/Usage)
  - [Building](https://github.com/wildbit/mailmason/wiki/Usage#building)
  - [Testing](https://github.com/wildbit/mailmason/wiki/Usage#testing)
  - [Pushing templates to Postmark](https://github.com/wildbit/mailmason/wiki/Usage#pushing-templates-to-postmark)
- [Development](https://github.com/wildbit/mailmason/wiki/Development)
- [Templates](https://github.com/wildbit/mailmason/wiki/Templates)

## License

MailMason is licensed under the **MIT** license. Please refer to the [LICENSE](https://github.com/wildbit/mailmason/blob/master/LICENSE) for more information.

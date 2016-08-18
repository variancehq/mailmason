module.exports = function(grunt) {

  // Include modules
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});
  require('time-grunt')(grunt);

  var path = {
    cssSrc: 'src/stylesheets/global.scss',
    cssDest: 'src/stylesheets/global.css',
    emailSrc: 'src/emails/*.hbs',
    dist: 'dist/',
    distGlob: 'dist/*.html',
    layouts: 'src/layouts',
    partials: 'src/partials/*',
    images: 'src/images',
  };

  /* Configuration
  ================================================= */

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    /* SASS
    ------------------------------------------------- */

    sass: {
      options: {
        sourceMap: false
      },
      styles: {
        src: path.cssSrc,
        dest: path.cssDest
      }
    },


    /* Autoprefixer
    ------------------------------------------------- */

    autoprefixer: {
      options: {
        map: false,
        browsers: ['last 6 versions', 'ie >= 9']
      },
      styles: {
        src: path.cssDest,
        dest: path.cssDest
      }
    },


    /* Assemble
       Assembles our handlebars templates. Documentation might be incompatible since the latest version uses an entirely different build system.
       See: https://github.com/assemble/assemble/
    ------------------------------------------------- */

    assemble: {
      options: {
        layoutdir: path.layouts,
        partials: path.partials,
        flatten: true
      },
      pages: {
        src: [path.emailSrc],
        dest: path.dist
      }
    },


    /* Inline
       Brings external resources in the HTML files. Basically just takes our CSS file and inserts it as a style block.
       See: https://github.com/chyingp/grunt-inline
    ------------------------------------------------- */

    inline: {
      html: {
        expand: true,
        cwd: path.dist,
        ext: '.html',
        src: ['*.html'],
        dest: path.dist
      }
    },


    /* Prettify
       Formats our template HTML files.
       See: https://github.com/jonschlinkert/grunt-prettify
    ------------------------------------------------- */

    prettify: {
      options: {
        indent: '2'
      },
      html: {
        expand: true,
        cwd: path.dist,
        ext: '.html',
        src: ['*.html'],
        dest: path.dist
      }
    },


    /* Premailer
       Adds all sorts of email magic. Adds inline styles to each element based off class. Also generates plain text versions and allows us to control commonly used table attributes via CSS.
       See: https://github.com/dwightjack/grunt-premailer
    ------------------------------------------------- */

    premailer: {
      options: {
        warnLevel: 'none'
      },
      html: {
        options: {
          removeComments: true
        },
        files: [{
          expand: true,
          src: [path.distGlob],
          dest: ''
        }]
      },
      txt: {
        options: {
          mode: 'txt'
        },
        files: [{
          expand: true,
          src: [path.distGlob],
          dest: '',
          ext: '.txt'
        }]
      }
    },


    /* Watch
       Watches all files in the src directory for changes.
    ------------------------------------------------- */

    watch: {
      options: {
        livereload: true
      },
      files: ['src/**/*'],
      tasks: ['default']
    },


    /* Replace
    ------------------------------------------------- */

    replace: {
      // We encode our mustachio variables so that our assemble(handlebars) task won’t get confused.
      variableSyntax: {
        src: [path.distGlob],
        overwrite: true,
        replacements: [
          { from: '&#123;&#123;', to: '{{' },
          { from: '&#125;&#125;', to: '}}' }
        ]
      },
      // Add some additional attributes that grunt inline removed
      styleBlock: {
        src: [path.distGlob],
        overwrite: true,
        replacements: [
          {
            from: '<style type="text/css">',
            to: '<style type="text/css" rel="stylesheet" media="all">'
          }
        ]
      }
    },


    /* Spamcheck
       Sends all of our HTML files through Postmark’s spamcheck API.
       See: https://github.com/derekrushforth/grunt-spamcheck
    ------------------------------------------------- */

    spamcheck: {
      emails: {
        src: [path.distGlob]
      }
    },


    /* Postmark
       Sends test emails through Postmark. Add and remove template targets as needed.
       See: https://github.com/derekrushforth/grunt-postmark
    ------------------------------------------------- */

    postmark: {
      options: {
        serverToken: 'SERVER_TOKEN', // Add your server token
        from: 'FROM_ADDRESS', // Add your from address. Must be a valid sender signature.
        to: 'TO_ADDRESS',
        subject: 'PM TEMPLATE TEST'
      },
      // grunt postmark:welcome - Sends just the welcome email
      welcome: {
        src: 'dist/welcome.html'
      },
      // grunt postmark:emails - Sends all of the emails. Be careful not to spam PM if you have a bunch of emails.
      emails: {
        src: [path.distGlob]
      },
      // grunt postmark:litmus - Add a litmus test address here.
      litmus: {
        to: '',
        src: [path.distGlob]
      }
    }

  });


  /* Tasks
  ================================================= */

  grunt.registerTask('default', ['css', 'html']);

  // Assets
  grunt.registerTask('html', ['assemble', 'inline', 'premailer', 'replace', 'prettify']);
  grunt.registerTask('css', ['sass', 'autoprefixer']);

  // Testing
  grunt.registerTask('send', ['postmark:emails']);
  grunt.registerTask('spam', ['spamcheck']);
  grunt.registerTask('litmus', ['postmark:litmus']);
};
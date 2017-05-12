/*
 * grunt-phantomas
 * https://github.com/stefanjudis/grunt-phantomas
 *
 * Copyright (c) 2013 stefan judis
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function( grunt ) {
  var devIndexPath = './phantomas/';

  grunt.initConfig( {

    clean : {
      /* https://github.com/gruntjs/grunt-contrib-clean */
      tests : [ 'tmp' ],
    },


    compass : {
      /* https://github.com/gruntjs/grunt-contrib-compass */
      dist : {
        options : {
          sassDir     : 'tasks/assets/sass',
          cssDir      : 'tasks/public/styles',
          environment : 'production'
        }
      }
    },


    copy : {
      /* https://github.com/gruntjs/grunt-contrib-copy */
      scripts : {
        files : [
          {
            cwd    : 'tasks/public/scripts/',
            expand : true,
            src    : [ '**' ],
            dest   : devIndexPath + 'public/scripts/',
            filter : 'isFile'
          },
        ]
      },
      styles : {
        files : [
          {
            cwd    : 'tasks/public/styles/',
            expand : true,
            src    : [ '**' ],
            dest   : devIndexPath + 'public/styles/',
            filter : 'isFile'
          },
        ]
      }
    },


    jscs : {
      /* https://www.npmjs.org/package/grunt-jscs-checker */
      src     : [
        'Gruntfile.js',
        'tasks/assets/**/*.js',
        '!tasks/assets/scripts/d3.min.js',
        'tasks/lib/phantomas.js',
        '<%= nodeunit.tests %>',
      ],
      options : {
        config : '.jscs.json'
      }
    },


    jshint : {
      /* https://github.com/gruntjs/grunt-contrib-jshint */
      all : [
        'Gruntfile.js',
        'tasks/assets/**/*.js',
        '!tasks/assets/scripts/d3.min.js',
        'tasks/lib/**/phantomas.js',
        '<%= nodeunit.tests %>',
      ],
      options : {
        jshintrc : '.jshintrc',
      },
    },


    phantomas : {
      /* Home Page */
      zumiezHome : {
        options : {
          assertions : {
            'assetsWithQueryString' : 3,
            'biggestLatency'        : 1400,
            'bodyHTMLSize'          : 10500,
            'commentsSize'          : 55,
            'consoleMessages'       : 0,
            'hiddenContentSize'     : 65,
            'jsErrors'              : 0,
            'gzipRequests'          : {
              'type'  : '<',
              'value' : 8
            },
            'medianResponse'        : 400,
            'nodesWithInlineCSS'    : 0,
            'requests'              : 30,
            'timeToFirstImage'      : 1100,
            'DOMelementsCount'      : 200,
            'DOMqueries'            : 10
          },
          // additionalStylesheet : '/Users/stefan/Desktop/custom2.css',
          // buildUi              : false,
          // output               : 'json',
          // limitIncludedRuns    : false,
          indexPath            : './zumiez-home/',
          options              : {
            'timeout'        : 30
          },
          url                  : 'http://www.zumiez.com/'
        }
      },
      zumiezCat : {
        options : {
          assertions : {
            'assetsWithQueryString' : 3,
            'biggestLatency'        : 1400,
            'bodyHTMLSize'          : 10500,
            'commentsSize'          : 55,
            'consoleMessages'       : 0,
            'hiddenContentSize'     : 65,
            'jsErrors'              : 0,
            'gzipRequests'          : {
              'type'  : '<',
              'value' : 8
            },
            'medianResponse'        : 400,
            'nodesWithInlineCSS'    : 0,
            'requests'              : 30,
            'timeToFirstImage'      : 1100,
            'DOMelementsCount'      : 200,
            'DOMqueries'            : 10
          },
          // additionalStylesheet : '/Users/stefan/Desktop/custom2.css',
          // buildUi              : false,
          // output               : 'json',
          // limitIncludedRuns    : false,
          indexPath            : './zumiez-cat/',
          options              : {
            'timeout'        : 30
          },
          url                  : 'http://www.zumiez.com/shoes/shoes/skate.html'
        }
      },
      zumiezPdp : {
        options : {
          assertions : {
            'assetsWithQueryString' : 3,
            'biggestLatency'        : 1400,
            'bodyHTMLSize'          : 10500,
            'commentsSize'          : 55,
            'consoleMessages'       : 0,
            'hiddenContentSize'     : 65,
            'jsErrors'              : 0,
            'gzipRequests'          : {
              'type'  : '<',
              'value' : 8
            },
            'medianResponse'        : 400,
            'nodesWithInlineCSS'    : 0,
            'requests'              : 30,
            'timeToFirstImage'      : 1100,
            'DOMelementsCount'      : 200,
            'DOMqueries'            : 10
          },
          // additionalStylesheet : '/Users/stefan/Desktop/custom2.css',
          // buildUi              : false,
          // output               : 'json',
          // limitIncludedRuns    : false,
          indexPath            : './zumiez-pdp/',
          options              : {
            'timeout'        : 30
          },
          url                  : 'http://www.zumiez.com/shortys-lil-1-skateboard-hardware.html'
        }
      },
      zumiezCheckout : {
        options : {
          assertions : {
            'assetsWithQueryString' : 3,
            'biggestLatency'        : 1400,
            'bodyHTMLSize'          : 10500,
            'commentsSize'          : 55,
            'consoleMessages'       : 0,
            'hiddenContentSize'     : 65,
            'jsErrors'              : 0,
            'gzipRequests'          : {
              'type'  : '<',
              'value' : 8
            },
            'medianResponse'        : 400,
            'nodesWithInlineCSS'    : 0,
            'requests'              : 30,
            'timeToFirstImage'      : 1100,
            'DOMelementsCount'      : 200,
            'DOMqueries'            : 10
          },
          // additionalStylesheet : '/Users/stefan/Desktop/custom2.css',
          // buildUi              : false,
          // output               : 'json',
          // limitIncludedRuns    : false,
          indexPath            : './zumiez-checkout/',
          options              : {
            'timeout'        : 30
          },
          url                  : 'https://www.zumiez.com/checkout/onepage/index/',
          customHeaders        : {
            "x-devtools-emulate-network-conditions-client-id": "37e50016-70c6-40c8-a669-1e8c7c50f5d5",
  "upgrade-insecure-requests": "1",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "referer": "http://www.zumiez.com/checkout/cart/",
  "accept-encoding": "gzip, deflate, sdch, br",
  "accept-language": "en-US,en;q=0.8",
  "cookie": "xchk; _vuid=a926679c-c93f-4c1a-9b05-60f62535f2f4; CACHED_FRONT_FORM_KEY=sCIzkiLYWObuI1zy; auto_modal=true; r8d=35474480-506f-9d74-68b9-5d93bd8ddb91; GSIDLdjguKL1TdvI=e49d4df8-8c7d-409e-ae73-a65842fca653; __cfduid=d98daa6a6b621c75daedd3553b951022c1491003680; selected-store=%7B%22storeId%22%3A%22726%22%2C%22title%22%3A%22Alderwood+Mall%22%2C%22zip%22%3A%2298037%22%2C%22radius%22%3A25%2C%22snowLab%22%3A%221%22%2C%22lat%22%3A%2247.829048%22%2C%22lng%22%3A%22-122.274498%22%2C%22filter%22%3A%5B%7B%22storeId%22%3A%22726%22%2C%22title%22%3A%22Alderwood+Mall%22%2C%22snowLab%22%3A%221%22%7D%5D%7D; COMPARE=280%2C1224%2C19967%2C39702%2C43579%2C99084%2C121680%2C122930%2C143744%2C159096%2C165185%2C188192%2C189867%2C192661%2C206474%2C211699%2C213814%2C214512%2C215185%2C217292%2C217518%2C217999%2C218304%2C219278%2C223842%2C223943%2C226190%2C230462%2C230783%2C233716%2C238397%2C239202%2C242826%2C242882%2C246882%2C246901%2C247292%2C247575%2C247604%2C248659%2C249808%2C250498%2C251753%2C251825%2C253959%2C255219%2C255391%2C257847%2C258650%2C259116%2C259126%2C259153%2C260071%2C260962%2C263150%2C266863%2C269722%2C270187%2C270355%2C271154%2C271164%2C271356%2C271565%2C271721%2C271732%2C272852%2C273309%2C273314%2C273888%2C274294%2C275141%2C275195%2C276442%2C276711%2C278401%2C279608%2C280495%2C280554%2C284036%2C285990%2C286183%2C286999%2C287073%2C287130%2C289440%2C292067%2C292440%2C292960%2C293259%2C293595%2C294587%2C294629%2C299158%2C299503%2C299524%2C299562%2C299596%2C299634%2C301033%2C302387%2C302683%2C303380%2C304757%2C305274%2C305286%2C305304%2C305388%2C307357%2C307369%2C311081%2C311247%2C311414%2C316099%2C316163%2C316247%2C316500%2C317279%2C318249%2C318840%2C318841%2C321002%2C324468%2C391551%2C417828%2C475619%2C485220%2C485753%2C487743%2C494082%2C496538%2C528168%2C529668%2C530141%2C553336%2C554092%2C557589%2C560598%2C575350%2C599556%2C606229%2C627356; CACHED_FRONT_FORM_KEY=i3kwvVMoLuSgy4pZ; LAST_CATEGORY=2956; VIEWED_PRODUCT_IDS=779473%2C767719%2C778823%2C117%2C793201; configurable-attributes=%5B%5D; r8cntgp_gi=eyJwb3N0YWxfY29kZSI6Ijk4MTE1In0=; CUSTOMER=839110a5eb23daaf6a42eeb6dc0092d7; CUSTOMER_INFO=c840874ca3203e52a49468b421390b82; CUSTOMER_AUTH=a142bea0e16c6b19492322d164061a9f; xchk; _vuid=a926679c-c93f-4c1a-9b05-60f62535f2f4; cartItems=3; _at_id.zumiez.qatest.2a5f=034dd1d1864cf6a0.1491002736.17.1491346060.1491342099.907.16072.; STSD894207=0; STSID894207=9447970f-5b2b-4dd5-961f-6b53dc696143; _at_id.zumiez.engage.2a5f=d8641c9b299d2b29.1491003681.12.1491345754.1491342033.1277.6655.03x; _gat_UA-3301608-1=1; _dc_gtm_UA-3301608-1=1; _ga=GA1.2.890210453.1491002726; frontend=8kbkdlt1ul0g26sj2fnuin13a3; CART=8303a19d3b9d653d3329fe5b6e348559",
  "cache-control": "no-cache",
  "postman-token": "3805299b-ef45-68ad-cf39-9e83bf231fb1"
          }
        }
      }
    },



    nodeunit : {
      /* https://github.com/gruntjs/grunt-contrib-nodeunit */
      tests : [ 'test/**/*Test.js' ],
    },


    uglify : {
      /* https://github.com/gruntjs/grunt-contrib-uglify */
      options : {
        mangle : false
      },
      phantomas : {
        files : {
          'tasks/public/scripts/phantomas.min.js' : [ 'tasks/assets/scripts/phantomas.js' ]
        }
      }
    },


    watch : {
      /* https://github.com/gruntjs/grunt-contrib-watch */
      js : {
        files   : [ 'tasks/assets/scripts/**/*.js' ],
        flatten : true,
        options : {
          spawn : false,
        },
        tasks   : [ 'uglify', 'copy:scripts' ]
      },
      sass : {
        files   : [ 'tasks/assets/sass/**/*.scss' ],
        flatten : true,
        options : {
          spawn : false,
        },
        tasks   : [ 'compass', 'copy:styles' ]
      }
    },


    yellowlabtools: {
      production: {
        urls: [
          'http://www.zumiez.com/',
          'http://www.zumiez.com/shoes/shoes/skate.html',
          'http://www.zumiez.com/shortys-lil-1-skateboard-hardware.html'
        ],
        failConditions: [
          // The global score is the one calculated by Yellow Lab Tools
          'fail if at least one url has a global score < 80/100',

          // Every single rule has its own score
          'fail if at least one url has a rule score < 50/100',

          // You can be more demanding on a scpecific rule
          'fail if at least one url has a domElementsCount score < 100/100',

          // Or you can decide to be cooler on a specific rule
          'fail if at least one url has a domMaxDepth score < 20/100',

          // ... coolest
          'ignore iframesCount',

          // For each rule, you can check directly the metric instead of the score by omitting '/100'
          'fail if at least one url has a domElementsCount > 2000'
        ],
        options: {
          device: 'phone'
        }
      }
    }

  } );

  // Actually load this plugin's task(s).
  grunt.loadTasks( 'tasks' );

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-contrib-compass' );
  grunt.loadNpmTasks( 'grunt-contrib-copy' );
  grunt.loadNpmTasks( 'grunt-jscs' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-yellowlabtools' );

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask( 'test', [ 'clean', 'nodeunit', 'jshint', 'jscs' ] );

  // By default, lint and run all tests.
  grunt.registerTask( 'default', [ 'test' ] );

  // Set up development environment
  grunt.registerTask( 'build', [ 'compass', 'uglify', 'phantomas' ] );

  // Set up development environment
  grunt.registerTask( 'speedTest', [ 'phantomas', 'yellowlabtools' ] );

};

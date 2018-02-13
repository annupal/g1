$(function () {

  'use strict';

  var console = window.console || { log: function () {} };
  var $image = $('#image');
  var $download = $('#download');
  var $dataX = $('#dataX');
  var $dataY = $('#dataY');
  var $dataHeight = $('#dataHeight');
  var $dataWidth = $('#dataWidth');
  var $dataRotate = $('#dataRotate');
  var $dataScaleX = $('#dataScaleX');
  var $dataScaleY = $('#dataScaleY');
  var options = {
        aspectRatio: NaN,
		 viewMode: 3, 
		 zoomable: false,      
        crop: function (e) {
          $dataX.val(Math.round(e.x));
          $dataY.val(Math.round(e.y));
          $dataHeight.val(Math.round(e.height));
          $dataWidth.val(Math.round(e.width));
          $dataRotate.val(e.rotate);
          $dataScaleX.val(e.scaleX);
          $dataScaleY.val(e.scaleY);
        }
      };


  // Cropper
  $image.on({
    'build.cropper': function (e) {
      console.log(e.type);
    },
    'built.cropper': function (e) {
      console.log(e.type);
    },
    'cropstart.cropper': function (e) {
      console.log(e.type, e.action);
    },
    'cropmove.cropper': function (e) {
      console.log(e.type, e.action);
    },
    'cropend.cropper': function (e) {
      console.log(e.type, e.action);
    },
    'crop.cropper': function (e) {
      console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
    },
    'zoom.cropper': function (e) {
      console.log(e.type, e.ratio);
    }
  }).cropper(options);


  // Buttons
  if (!$.isFunction(document.createElement('canvas').getContext)) {
    $('a[data-method="getCroppedCanvas"]').prop('disabled', true);
  }

  if (typeof document.createElement('cropper').style.transition === 'undefined') {
    $('button[data-method="rotate"]').prop('disabled', true);
    $('button[data-method="scale"]').prop('disabled', true);
  }


  // Download
  if (typeof $download[0].download === 'undefined') {
    $download.addClass('disabled');
  }


  // Options
  $('.docs-toggles').on('change', 'input', function () {
    var $this = $(this);
    var name = $this.attr('name');
    var type = $this.prop('type');
    var cropBoxData;
    var canvasData;

    if (!$image.data('cropper')) {
      return;
    }

    if (type === 'checkbox') {
      options[name] = $this.prop('checked');
      cropBoxData = $image.cropper('getCropBoxData');
      canvasData = $image.cropper('getCanvasData');

      options.built = function () {
        $image.cropper('setCropBoxData', cropBoxData);
        $image.cropper('setCanvasData', canvasData);
      };
    } else if (type === 'radio') {
      options[name] = $this.val();
    }

    $image.cropper('destroy').cropper(options);
  });


$("#1").click(function () {$image.cropper('setAspectRatio', 3840 / 2400);});
$("#2").click(function () {$image.cropper('setAspectRatio', 3840 / 2160);});
$("#3").click(function () {$image.cropper('setAspectRatio', 2560 / 1080);});
$("#4").click(function () {$image.cropper('setAspectRatio', 2048 / 1152);});
$("#5").click(function () {$image.cropper('setAspectRatio', 1920 / 1080);});
$("#6").click(function () {$image.cropper('setAspectRatio', 1280 / 720);});
$("#7").click(function () {$image.cropper('setAspectRatio', 1400 / 1050);});
$("#8").click(function () {$image.cropper('setAspectRatio', 1280 / 1024);});
$("#9").click(function () {$image.cropper('setAspectRatio', 1024 / 768);});
$("#10").click(function () {$image.cropper('setAspectRatio', 1600 / 1200);});
$("#11").click(function () {$image.cropper('setAspectRatio', 2560 / 1024);});
$("#12").click(function () {$image.cropper('setAspectRatio', 1600 / 900);});
$("#13").click(function () {$image.cropper('setAspectRatio', 2560 / 1440);});
$("#14").click(function () {$image.cropper('setAspectRatio', 1280 / 800);});
$("#15").click(function () {$image.cropper('setAspectRatio', 1440 / 900);});
$("#16").click(function () {$image.cropper('setAspectRatio', 1680 / 1050);});
$("#17").click(function () {$image.cropper('setAspectRatio', 1920 / 1200);});
$("#18").click(function () {$image.cropper('setAspectRatio', 2560 / 1600);});
$("#19").click(function () {$image.cropper('setAspectRatio', 320 / 480);});
$("#20").click(function () {$image.cropper('setAspectRatio', 320 / 568);});
$("#21").click(function () {$image.cropper('setAspectRatio', 375 / 667);});
$("#22").click(function () {$image.cropper('setAspectRatio', 414 / 736);});
$("#23").click(function () {$image.cropper('setAspectRatio', 375 / 667);});
$("#24").click(function () {$image.cropper('setAspectRatio', 414 / 736);});
$("#25").click(function () {$image.cropper('setAspectRatio', 360 / 640);});
$("#26").click(function () {$image.cropper('setAspectRatio', 320 / 480);});
$("#27").click(function () {$image.cropper('setAspectRatio', 360 / 640);});
$("#28").click(function () {$image.cropper('setAspectRatio', 360 / 640);});
$("#29").click(function () {$image.cropper('setAspectRatio', 360 / 640);});
$("#30").click(function () {$image.cropper('setAspectRatio', 360 / 640);});
$("#31").click(function () {$image.cropper('setAspectRatio', 360 / 640);});
$("#32").click(function () {$image.cropper('setAspectRatio', 360 / 640);});
$("#33").click(function () {$image.cropper('setAspectRatio', 397 / 706);});
$("#34").click(function () {$image.cropper('setAspectRatio', 360 / 640);});
$("#35").click(function () {$image.cropper('setAspectRatio', 360 / 640);});
$("#36").click(function () {$image.cropper('setAspectRatio', 768 / 1024);});
$("#37").click(function () {$image.cropper('setAspectRatio', 768 / 1024);});
$("#38").click(function () {$image.cropper('setAspectRatio', 1024 / 768);});
$("#39").click(function () {$image.cropper('setAspectRatio', 1024 / 1366);});
$("#40").click(function () {$image.cropper('setAspectRatio', 800 / 1280);});
$("#41").click(function () {$image.cropper('setAspectRatio', 768 / 1024);});
$("#42").click(function () {$image.cropper('setAspectRatio', 800 / 1280);});
$("#43").click(function () {$image.cropper('setAspectRatio', 1024 / 1440);});
$("#44").click(function () {$image.cropper('setAspectRatio', 1024 / 380);});
$("#45").click(function () {$image.cropper('setAspectRatio', 1280 / 425);});
$("#46").click(function () {$image.cropper('setAspectRatio', 1125 / 2436);});
$("#47").click(function () {$image.cropper('setAspectRatio', 540 / 960);});
$("#48").click(function () {$image.cropper('setAspectRatio', 720 / 1280);});
$("#49").click(function () {$image.cropper('setAspectRatio', 1080 / 1920);});
  // Methods
  $('.docs-buttons').on('click', '[data-method]', function () {
    var $this = $(this);
    var data = $this.data();
    var $target;
    var result;

    if ($this.prop('disabled') || $this.hasClass('disabled')) {
      return;
    }

    if ($image.data('cropper') && data.method) {
      data = $.extend({}, data); // Clone a new one

      if (typeof data.target !== 'undefined') {
        $target = $(data.target);

        if (typeof data.option === 'undefined') {
          try {
            data.option = JSON.parse($target.val());
          } catch (e) {
            console.log(e.message);
          }
        }
      }

      if (data.method === 'rotate') {
        $image.cropper('clear');
      }

      result = $image.cropper(data.method, data.option, data.secondOption);

      if (data.method === 'rotate') {
        $image.cropper('crop');
      }

      switch (data.method) {
        case 'scaleX':
        case 'scaleY':
          $(this).data('option', -data.option);
          break;

        case 'getCroppedCanvas':
          if (result) {

            // Bootstrap's Modal
            $('#getCroppedCanvasModal')

            if (!$download.hasClass('disabled')) {
              $download.attr('href', result.toDataURL('image/jpeg'));
            }
          }

          break;
      }

      if ($.isPlainObject(result) && $target) {
        try {
          $target.val(JSON.stringify(result));
        } catch (e) {
          console.log(e.message);
        }
      }

    }
  });


  // Keyboard
  $(document.body).on('keydown', function (e) {

    if (!$image.data('cropper') || this.scrollTop > 300) {
      return;
    }

    switch (e.which) {
      case 37:
        e.preventDefault();
        $image.cropper('move', -1, 0);
        break;

      case 38:
        e.preventDefault();
        $image.cropper('move', 0, -1);
        break;

      case 39:
        e.preventDefault();
        $image.cropper('move', 1, 0);
        break;

      case 40:
        e.preventDefault();
        $image.cropper('move', 0, 1);
        break;
    }

  });


});

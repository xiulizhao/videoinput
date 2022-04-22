(function (root, factory) {
  /* CommonJS */
  if (typeof exports == "object") module.exports = factory();
  /* AMD module */
  else if (typeof define == "function" && define.amd) define(factory);

  /*第一处修改，将wwtemplate改为元素名(data-wwclass的值)*/
  else root.videoinput = factory();
}(this, function () {
  "use strict";

  /*第二处修改，将wwtemplate改为元素名(data-wwclass的值)*/
  var wwclassName = /*INSBEGIN:WWCLSNAME*/
    "videoinput"
    /*INSEND:WWCLSNAME*/
    ;

  //默认没有依赖资源
  function loadDependence(fncallback) {
    if (typeof fncallback === "function") {
      fncallback();
    }
  }

  // 本函数处理元素初始化动作
  var init = function () {
    init = function () {
      return true;
    };

    $.wwclass.addEvtinHandler(wwclassName, evtInHandler);

    // 如有其他初始化动作, 请继续在下方添加
  };

  function valueFuc($ele) {
    var input = $ele.find("input")[0];
    if (input.files && input.files[0]) {
      return input.files[0];
    } else {
      return false;
    }
  }

  // 元素初始化——每个wwclass元素只会被初始化一次。, 传入了元素对象($前缀表明是一个jquery对象).
  function processElement($ele) {
    $ele.data("valueFuc", valueFuc);
    // 对 $ele 元素做对应处理
    $ele.find("input").on("change", function (e) {
      var input = e.currentTarget;
      if (input.files && input.files[0]) {
        var fileSize = input.files[0].size;
        // $ele.attr("data-x-filesize", fileSize);
        $.wwclass.helper.updateProp($ele, "data-x-filesize", fileSize);
        var fileUrl = window.URL.createObjectURL(input.files[0]);
        // $ele.attr("data-x-videosrc", fileUrl);
        // $ele.attr("data-x-videoname", input.files[0].name);
        $.wwclass.helper.updateProp($ele, "data-x-videosrc", fileUrl);
        $.wwclass.helper.updateProp($ele, "data-x-videoname", input.files[0].name);
        setTimeout(function () {
          $.wwclass.helper.anijsTrigger($ele, "getvideo");
        });
        // input.value = '';
      }
    });
  };

  // 元素析构——每个wwclass元素只会被析构一次。, 传入了元素对象($前缀表明是一个jquery对象).
  function finalizeElement($ele) {
    // 对 $ele 元素做对应处理
  };

  // 监听属性相关处理
  var evtInHandler = function ($ele, attribute, value) {
    // 处理代码
    switch (attribute) {
      /*case "data--show":
        // 添加处理动作
        break;*/
      case "finalize":
        finalizeElement($ele);
        break;
      default:
        console.info("监听到 " + attribute + " 属性值改变为 " + value + ", 但是没找到对应处理动作.");
    }
  };

  // 以下部分不需要修改
  if (!$.wwclass) {
    console.error("Can not use without wwclass.js");
    return false;
  }

  var ret = /*INSBEGIN:WWCLSHANDLER*/
    function (set) {
      if (set.length > 0) {
        loadDependence(function () {
          init();
          $(set).each(function (index, targetDom) {
            processElement($(targetDom));
          });
        });
      }
    }
    /*INSEND:WWCLSHANDLER*/
    ;

  return ret;

}));

﻿;
//mustacheViewEngine is a deferred content managment library with single page and mobile applications in mind
(function (window, undefined) {

    "use strict";

    var mustacheViewEngine = function (settings) {

        var that = new mustacheViewEngine.fn.init();


        if (!that.templateService) {
            console.error("must define a template service provider");
        }

        return that;
    };

    mustacheViewEngine.fn = mustacheViewEngine.prototype = {

        constructor: mustacheViewEngine,

        init: function () {

            return this;
        },

        version: "0.0.1",

        bp: undefined,
        eventPrefix: "spa-",
        $rootScope: undefined,
        templateService: undefined,
        templateType: "text/x-mustache-template",

        views: [],

        parseViews: function (remove) {

            var that = this,
                i, temp,
                views = {},
                t = document.querySelectorAll("script[type='" + this.settings.templateType + "']");

            that.setTemplates($.parseLocalStorage("templates"));

            for (i = 0; i < t.length; i++) {

                temp = t[i];

                that.setTemplate(temp.id,
                                    temp.innerHTML.replace(/(\r\n|\n|\r)/gm, ""));

                if (remove) {

                    if (temp.parentNode) {
                        temp.parentNode.removeChild(temp);
                    }
                }

            }

            views = that.getViews();

            if (!typeof views === "string") {
                views = JSON.stringify(views);
            }

            localStorage.setItem("templates", views);

        },

        getView: function (viewId) {
            return this.views[viewId];
        },

        getViews: function () {
            return this.views
        },

        setView: function (viewId, view) {

            if (typeof view === "function") {
                this.views[viewId] = view;
            } else {
                this.views[viewId] = Mustache.compile(view);
            }

        },

        setViews: function (views) {

            var that = this;

            for (view in views) {
                that.setTemplate(view, views[view]);
            }

        },

        compileViews: function (views) {

            var that = this,
                i;

            for (i in views) {
                if (typeof views[i] === "function") {
                    that.views[i] = views[i];
                } else {
                    that.views[i] = Mustache.compile(views[i]);
                }
            }


        },

        storeView: function (view) { },

        storeViews: function () { },

        removeView: function (key) {

            delete this.views[key];

        },

        compileTemplates: function (templates) {

            var that = this,
                i;

            for (i in templates) {
                if (typeof templates[i] === "function") {
                    that.templates[i] = templates[i];
                } else {
                    that.templates[i] = Mustache.compile(templates[i]);
                }
            }

        },

        mergeData: function (targetSelector, templateName, data) {

            if ((typeof targetSelector !== "string") ||
               (typeof templateName !== "string") ||
                data === undefined) {

                throw {
                    Name: "mustacheViewEngine Error",
                    Description: "missing argument in mergeData"
                }

                return;
            }

            var that = this,
                t = document.querySelector(targetSelector);

            //verify it is a single node.
            if (t.length && t.length > 0) {
                t = t[0];
            }

            if (that.templates[templateName]) {

                requestAnimationFrame(function () {

                    t.innerHTML = that.templates[templateName](data);

                });

            }

        }

    };

    // Give the init function the mustacheViewEngine prototype for later instantiation
    mustacheViewEngine.fn.init.prototype = mustacheViewEngine.fn;

    return (window.mustacheViewEngine = mustacheViewEngine);

})(window);
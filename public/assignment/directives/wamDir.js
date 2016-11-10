
"use strict";

(function() {
    angular
        .module("jgaDirectives", []) // top level module, not depend on somebody else
        .directive("jgaSortable", jgaSortable);

    // function jgaSortable () {
    //     var widgets = $(".jga-sortable")
    //         .sortable ({
    //             axis: 'y'
    //         });
    // }

    function jgaSortable() {

        console.log("test");

        function linker(scope, element, attr) {
            var start = -1;
            var end = -1;
            $(element).sortable({
                start: function(event, ui) {
                    start = $(ui.item).index();
                },
                stop: function(event, ui) {
                    end = $(ui.item).index();
                    scope.sortableController.sort(start, end);
                }
            });
        }

        return {
            scope: {},
            restrict: 'C',
            link: linker,
            controller: sortableController,
            controllerAs: 'sortableController'
        }

        function sortableController(WidgetService) {
            var vm = this;
            vm.sort = sort;

            function sort (start, end) {

            }
        }
    }
})();



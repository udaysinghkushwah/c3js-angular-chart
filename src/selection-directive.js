angular.module('c3js.angular.chart')
    .directive('selection', Selection);
/**
 * @ngdoc directive
 * @name selection
 * @description
 *  `selection` is used to to configure whether it is possible to select elements and interact with the chart to find selected elements.
 *
 * Restrict To:
 *   Element
 *
 * Parent Element:
 *   c3jschart
 *
 * @param {String} enabled Specify whether the selection should be enabled or not, default is true.
 *
 *   {@link http://c3js.org/reference.html#data-selection-enabled}
 *
 * @param {String} grouped Enables the grouped selection.
 *
 *   {@link http://c3js.org/reference.html#data-selection-grouped}
 *
 * @param {String} multiple Enables possibility to select multiple items.
 *
 *   {@link http://c3js.org/reference.html#data-selection-multiple}
 *
 * @example
 * Usage:
 *   <selection enabled="true"/>
 * Example:
 *   
 */
function Selection() {
    var selectionLinker = function(scope, element, attrs, chartCtrl) {
        var enabled = attrs.enabled;
        var grouped = attrs.grouped;
        var multiple = attrs.multiple;

        if (enabled && enabled === 'true') {
            var selection = { "enabled": true };
            if (grouped && grouped === 'true') {
                selection.grouped = true;
            }
            if (multiple && multiple === 'true') {
                selection.multiple = true;
            }
            chartCtrl.addSelection(selection);
        }
    };

    return {
        "require": "^c3jschart",
        "restrict": "E",
        "scope": {},
        "replace": true,
        "link": selectionLinker
    };
}
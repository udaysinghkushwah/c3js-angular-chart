angular.module('c3js.angular.chart')
    .directive('chartGridOptional', ChartGridOptional);
/**
 * @ngdoc directive
 * @name chartGridOptional
 * @description
 *  `chart-grid-optional` is used to add optional grid lines to the chart. All attributes are mandatory
 *
 * Restrict To:
 *   Element
 *
 * Parent Element:
 *   gridDirective
 *
 * @param {String} axisId x, y or y2.
 *   
 *   {@link http://c3js.org/reference.html#grid-x-lines| c3js docs}
 *
 * @param {Number} value Value where to print the additional grid line.
 *
 *   {@link http://c3js.org/reference.html#grid-x-lines| c3js docs}
 *
 * @param {String} text Label to print at the grid line.
 *
 *   {@link http://c3js.org/reference.html#grid-x-lines| c3js docs}
 *
 * @param {String} gridClass Class to add to the grid line to be able to style them separately.
 *
 *   {@link http://c3js.org/reference.html#grid-x-lines| c3js docs}
 *
 * @param {String} position Sets the position for the label, values are: start, middle, end.
 *
 *   {@link http://c3js.org/reference.html#grid-x-lines| c3js docs}
 *
 * @example
 * Usage:
 *   <chart-grid-optional axis-id="..." value="..." text="..."/>
 * 
 * Example:
 *   
 * 
 * <chart-grid show-x="false" show-y="true">
 *   <chart-grid-optional axis-id="x" grid-value="1" grid-text="Start"/>
 *   <chart-grid-optional axis-id="y" grid-value="20" grid-text="Minimum"/>
 *   <chart-grid-optional axis-id="y" grid-value="200" grid-text="Maximum"/>
 * </chart-grid>  
 */
function ChartGridOptional() {
    var gridLinker = function(scope, element, attrs, chartCtrl) {
        var axisId = attrs.axisId;
        var value = attrs.gridValue;
        var text = attrs.gridText;
        var gridClass = attrs.gridClass;
        var position = attrs.position;

        chartCtrl.addGridLine(axisId, value, text, gridClass, position);
    };

    return {
        "require": "^c3jschart",
        "restrict": "E",
        "scope": {},
        "replace": true,
        "link": gridLinker
    };
}
angular.module('c3js.angular.chart')
    .directive('chartLine', ChartLine);
/**
 * @ngdoc directive
 * @name chartLine
 * @description
 *  `chart-line` is used to customize the line chart properties..
 *
 * Restrict To:
 *   Element
 *
 * Parent Element:
 *   c3jschart
 *
 * @param {String} stepType Step types for step chart: step, step-before and step-after.
 *
 *   {@link http://c3js.org/reference.html#line-step_type| c3js doc}
 *
 * @param {Boolean} connectNull Should null data point be connected or not.
 *
 *   {@link http://c3js.org/reference.html#bar-width-ratio| c3js doc}
 *
 * @example
 * Usage:
 *   <chart-line step-type="..." connect-null="..."/>
 * Example:
 *  
 *
 */

function ChartLine() {
    var lineLinker = function(scope, element, attrs, chartCtrl) {
        var line = {};
        if (attrs.stepType) {
            line.step = line.step || {};
            line.step.type = attrs.stepType;
        }
        if (attrs.connectNull) {
            line.connectNull = (attrs.connectNull === 'true');
        }
        chartCtrl.addLine(line);
    };

    return {
        require: '^c3jschart',
        restrict: 'E',
        scope: {},
        replace: true,
        link: lineLinker
    };
}
angular.module('c3js.angular.chart')
    .directive('chartPie', ChartPie);

/**
 * @ngdoc directive
 * @name chartPie
 * @description
 *  `chart-pie` is used configure additional properties for a pie chart.
 *
 * Restrict To:
 *   Element
 *
 * Parent Element:
 *   c3jschart
 *
 * @param {Boolean} showLabel Whether to show a label for each pie part.
 *   
 *   {@link http://c3js.org/reference.html#pie-label-show| c3js docs}
 *
 * @param {Boolean} expand Whether to expand on mouse over.
 *   
 *   {@link http://c3js.org/reference.html#pie-expand| c3js docs}
 *
 * @param {Number} thresholdLabel Show label if value is higher than the provided value.
 *
 *   {@link http://c3js.org/reference.html#pie-label-threshold| c3js docs}
 *
 * @param {Function} labelFormatFunction Present a function to format the label.
 *
 *   {@link http://c3js.org/reference.html#pie-label-format| c3js docs}
 *
 * @example
 * Usage:
 *   <chart-pie show-label="..." expand="..."/>
 * 
 * Example:
 *   
 * 
 * <c3jschart bindto-id="pie-plot1-chart">
 *   <chart-column column-id="Data 1" column-values="70" column-type="pie"/>
 *   <chart-column column-id="Data 2" column-values="35" column-type="pie"/>
 *   <chart-column column-id="Data 3" column-values="60" column-type="pie"/>
 *   <chart-pie expand="true"/>
 * </c3jschart>
 */
function ChartPie() {
    var pieLinker = function(scope, element, attrs, chartCtrl) {
        var pie = {};
        if (attrs.showLabel) {
            pie.label = { "show": (attrs.showLabel === 'true') };
        }
        if (attrs.thresholdLabel) {
            if (!pie.label) {
                pie.label = {};
            }
            pie.label.threshold = parseFloat(attrs.thresholdLabel);
        }
        if (attrs.expand) {
            pie.expand = (attrs.expand === 'true');
        }
        chartCtrl.addPie(pie);
        if (attrs.labelFormatFunction) {
            chartCtrl.addPieLabelFormatFunction(scope.labelFormatFunction());
        }
    };

    return {
        require: '^c3jschart',
        restrict: 'E',
        scope: {
            "labelFormatFunction": "&"
        },
        replace: true,
        link: pieLinker
    };
}
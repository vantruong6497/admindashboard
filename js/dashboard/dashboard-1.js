(function($) {
    /* "use strict" */


    var dzChartlist = function() {
        let draw = Chart.controllers.line.__super__.draw; //draw shadow
        var screenWidth = $(window).width();

        var donutChart1 = function() {
            $("span.donut-1").peity("donut", {
                width: "86",
                height: "86"
            });
        }
        var donutChart2 = function() {
            $("span.donut-2").peity("donut", {
                width: "232",
                height: "232"
            });
        }
        var lineChart = function() {
            //dual line chart
            if (jQuery('#lineChart').length > 0) {
                const lineChart = document.getElementById("lineChart").getContext('2d');



                Chart.controllers.line = Chart.controllers.line.extend({
                    draw: function() {
                        draw.apply(this, arguments);
                        let nk = this.chart.chart.ctx;
                        let _stroke = nk.stroke;
                        nk.stroke = function() {
                            nk.save();
                            // nk.shadowColor = 'rgba(78, 54, 226, .5)';
                            nk.shadowBlur = 10;
                            nk.shadowOffsetX = 0;
                            nk.shadowOffsetY = 0;
                            _stroke.apply(this, arguments)
                            nk.restore();
                        }
                    }
                });

                lineChart.height = 20;

                new Chart(lineChart, {
                    type: 'line',
                    data: {
                        defaultFontFamily: 'Poppins',
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        datasets: [{
                            label: "My First dataset",
                            data: [120, 125, 220, 440, 430, 310, 350, 490, 505, 500, 560, 580],
                            borderColor: 'rgb(60,33,247)',
                            borderWidth: "5",
                            pointHoverRadius: 10,
                            backgroundColor: 'transparent',
                            pointBackgroundColor: 'rgba(78, 54, 226, 1)',
                        }, {
                            label: "My First dataset",
                            data: [200, 180, 50, 50, 330, 430, 380, 390, 480, 390, 350, 500],
                            borderColor: 'rgb(255,202,31)',
                            borderWidth: "5",
                            backgroundColor: 'transparent',
                            pointHoverRadius: 10,
                            pointBorderWidth: 5,
                            pointBorderColor: 'rgba(255, 255, 255, 1)',
                            pointBackgroundColor: 'rgba(27, 208, 132, 1)'
                        }]
                    },
                    options: {
                        legend: false,
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    max: 700,
                                    min: 0,
                                    stepSize: 100,
                                    padding: 10
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    padding: 5
                                }
                            }]
                        },
                        elements: {
                            point: {
                                radius: 0
                            }
                        }
                    }
                });
            }
        }


        var chartBar2 = function() {

            var options = {
                series: [{
                        name: 'Income',
                        data: [50, 18, 70, 40, 90, 50],
                        //radius: 12,	
                    },
                    {
                        name: 'Outcome',
                        data: [80, 40, 55, 20, 50, 70]
                    },

                ],
                chart: {
                    type: 'bar',
                    height: 400,

                    toolbar: {
                        show: false,
                    },

                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '70%',
                        borderRadius: 10
                    },

                },
                states: {
                    hover: {
                        filter: 'none',
                    }
                },
                colors: ['#80ec67', '#fe7d65'],
                dataLabels: {
                    enabled: false,
                },
                markers: {
                    shape: "circle",
                },


                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    show: false,
                    fontSize: '12px',
                    labels: {
                        colors: '#000000',

                    },
                    markers: {
                        width: 18,
                        height: 18,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                    }
                },
                stroke: {
                    show: true,
                    width: 5,
                    colors: ['transparent']
                },
                grid: {
                    borderColor: '#eee',
                },
                xaxis: {

                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    labels: {
                        style: {
                            colors: '#3e4954',
                            fontSize: '13px',
                            fontFamily: 'poppins',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                    crosshairs: {
                        show: false,
                    }
                },
                yaxis: {
                    labels: {
                        offsetX: -16,
                        style: {
                            colors: '#3e4954',
                            fontSize: '13px',
                            fontFamily: 'poppins',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                },
                fill: {
                    opacity: 1,
                    colors: ['#00BC8B', '#FFCA1F'],
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return "$ " + val + " thousands"
                        }
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            height: 250,
                        }
                    },
                }]
            };

            var chartBar2 = new ApexCharts(document.querySelector("#chartBar2"), options);
            chartBar2.render();
        }
        var chartBar3 = function() {

            var options = {
                series: [{
                        name: 'Income',
                        data: [50, 18, 70, 40, 90, 50],
                        //radius: 12,	
                    },
                    {
                        name: 'Outcome',
                        data: [80, 40, 55, 20, 50, 70]
                    },

                ],
                chart: {
                    type: 'bar',
                    height: 400,

                    toolbar: {
                        show: false,
                    },

                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '70%',
                        borderRadius: 10
                    },

                },
                states: {
                    hover: {
                        filter: 'none',
                    }
                },
                colors: ['#80ec67', '#fe7d65'],
                dataLabels: {
                    enabled: false,
                },
                markers: {
                    shape: "circle",
                },


                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    show: false,
                    fontSize: '12px',
                    labels: {
                        colors: '#000000',

                    },
                    markers: {
                        width: 18,
                        height: 18,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                    }
                },
                stroke: {
                    show: true,
                    width: 5,
                    colors: ['transparent']
                },
                grid: {
                    borderColor: '#eee',
                },
                xaxis: {

                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    labels: {
                        style: {
                            colors: '#3e4954',
                            fontSize: '13px',
                            fontFamily: 'poppins',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                    crosshairs: {
                        show: false,
                    }
                },
                yaxis: {
                    labels: {
                        offsetX: -16,
                        style: {
                            colors: '#3e4954',
                            fontSize: '13px',
                            fontFamily: 'poppins',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                },
                fill: {
                    opacity: 1,
                    colors: ['#3C21F7', '#FFBB00'],
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return "$ " + val + " thousands"
                        }
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            height: 250,
                        }
                    },
                }]
            };

            var chartBar3 = new ApexCharts(document.querySelector("#chartBar3"), options);
            chartBar3.render();
        }

        var chartBar4 = function() {
            var options1 = {
                    series: [{ data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54] }],
                    fill: { colors: ["#3C21F7"] },
                    chart: { type: "line", width: 70, height: 40, sparkline: { enabled: !0 } },
                    plotOptions: { bar: { columnWidth: "50%" } },
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    xaxis: { crosshairs: { width: 1 } },
                    tooltip: {
                        fixed: { enabled: !1 },
                        x: { show: !1 },
                        y: {
                            title: {
                                formatter: function(e) {
                                    return "";
                                },
                            },
                        },
                        marker: { show: !1 },
                    },
                },
                chart1 = new ApexCharts(document.querySelector("#total-revenue-chart"), options1);
            chart1.render();
        }

        var chartBar5 = function() {
            var options1 = {
                    series: [{ data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54] }],
                    fill: { colors: ["#3C21F7"] },
                    chart: { type: "line", width: 70, height: 40, sparkline: { enabled: !0 } },
                    plotOptions: { bar: { columnWidth: "50%" } },
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    xaxis: { crosshairs: { width: 1 } },
                    tooltip: {
                        fixed: { enabled: !1 },
                        x: { show: !1 },
                        y: {
                            title: {
                                formatter: function(e) {
                                    return "";
                                },
                            },
                        },
                        marker: { show: !1 },
                    },
                },
                chart1 = new ApexCharts(document.querySelector("#total-revenue-chart-1"), options1);
            chart1.render();
        }


        var flatOwl = function() {
            if ($().owlCarousel) {
                $('.themesflat-carousel-box').each(function() {
                    var
                        $this = $(this),
                        auto = $this.data("auto"),
                        item = $this.data("column"),
                        item2 = $this.data("column2"),
                        item3 = $this.data("column3"),
                        gap = Number($this.data("gap"));

                    $this.find('.owl-carousel').owlCarousel({
                        margin: gap,
                        nav: true,
                        navigation: true,
                        pagination: true,
                        autoplay: false,
                        autoplayTimeout: 5000,
                        responsive: {
                            0: {
                                items: item3
                            },
                            600: {
                                items: item2
                            },
                            1000: {
                                items: item
                            }
                        }
                    });
                });
            }
        };

        /* Function ============ */
        return {
            init: function() {},


            load: function() {
                donutChart1();
                donutChart2();
                lineChart();
                chartBar2();
                chartBar3();
                chartBar4();
                chartBar5();
                flatOwl();
            },

            resize: function() {

            }
        }

    }();

    jQuery(document).ready(function() {});

    jQuery(window).on('load', function() {
        setTimeout(function() {
            dzChartlist.load();
        }, 1000);

    });

    jQuery(window).on('resize', function() {


    });

})(jQuery);
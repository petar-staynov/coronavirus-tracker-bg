import React, {useEffect, useState} from "react";
import Chart from 'react-apexcharts'

const ApexChart = (props) => {
    const [componentState, setComponentState] = useState({
        totalCasesChart: {
            series: [{
                data: []
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: [],
                }
            },
        },
        totalDeathCasesChart: {

            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                }
            },
        },
        totalRecoveredCasesChart: {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                }
            },
        },
        totalActiveCasesChart: {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                }
            },
        },
        newCasesChart: {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                }
            },
        },


    });

    const formatDate = (dateString) => {
        //Format date from "1/23/2020" to "23/01"
        const dateParams = dateString.split('/');
        const dateFormated = `${dateParams[1]}/${dateParams[0]}`;
        return dateFormated;
    };

    const sortObject = (o) => {
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    };

    useEffect(() => {
        const apiData = props.chartData;
        if (Object.keys(apiData).length <= 0) return undefined;

        const timelineDates = apiData.timeline;

        //###Extract data for chart###
        let skipEmptyDays = true;
        let old_total_cases = null;

        let datesArr = [];
        let totalCasesArr = [];
        let newCasesArr = [];
        let totalActiveCasesArr = [];


        const timelineDatesSorted = sortObject(timelineDates);
        const numberOfDates = Object.keys(timelineDatesSorted).length;
        let lastIndex = 0;
        let lastTotalCases = 0;
        Object.keys(timelineDatesSorted).forEach((date, index) => {
            //date = key
            const dayInfo = timelineDates[date];

            const totalCases = Math.abs(dayInfo.total_cases);
            //calculate new daily cases since API is unreliable
            let newDailyCases = 0;
            if (index > lastIndex) {
                newDailyCases = Math.abs(lastTotalCases - totalCases);

                lastIndex = index;
                lastTotalCases = totalCases;
            }
            const recoveredCases = Math.abs(dayInfo.total_recoveries);
            const deathCases = Math.abs(dayInfo.total_deaths);
            const activeCases = totalCases - (recoveredCases + deathCases);


            if (totalCases > 0) skipEmptyDays = false;
            //Skip days with no data and the last two entries
            if (!skipEmptyDays && index < numberOfDates) {
                datesArr.push(date);
                totalCasesArr.push(totalCases);
                totalActiveCasesArr.push(activeCases);
                newCasesArr.push(newDailyCases);
            }
        });


        //Update components
        const {
            totalCasesChart,
            totalDeathCasesChart,
            totalRecoveredCasesChart,
            totalActiveCasesChart,
            newCasesChart
        } = componentState;

        setComponentState({
            totalCasesChart: {
                ...totalCasesChart,
                series: [{
                    ...totalCasesChart.series,
                    data: totalCasesArr,
                }],
                options: {
                    ...totalCasesChart.options,
                    xaxis: {
                        categories: datesArr,
                    }
                }
            },
            totalActiveCasesChart: {
                ...totalActiveCasesChart,
                series: [{
                    ...totalActiveCasesChart.series,
                    data: totalActiveCasesArr,
                }],
                options: {
                    ...totalActiveCasesChart.options,
                    xaxis: {
                        categories: datesArr,
                    }
                }
            },
            newCasesChart: {
                ...newCasesChart,
                series: [{
                    ...newCasesChart.series,
                    data: newCasesArr,
                }],
                options: {
                    ...newCasesChart.options,
                    xaxis: {
                        categories: datesArr,
                    }
                }
            },
        });
    }, [props]);

    const calculateElementHeight = () => {
        const datesNumber = componentState.totalCasesChart.series[0].data.length;
        return datesNumber * 20;
    };

    return (
        <div className="text-center">
            <span><strong>Общ брой случаи по дата:</strong></span>
            <Chart options={componentState.totalCasesChart.options}
                   series={componentState.totalCasesChart.series}
                   type="bar"
                   width={"100%"}
                   height={calculateElementHeight()}
            />
            <span><strong>Активни случаи по дата:</strong></span>
            <Chart options={componentState.totalActiveCasesChart.options}
                   series={componentState.totalActiveCasesChart.series}
                   type="bar"
                   width={"100%"}
                   height={calculateElementHeight()}
            />
            <span><strong>Нови случаи по дата:</strong></span>
            <Chart options={componentState.newCasesChart.options}
                   series={componentState.newCasesChart.series}
                   type="bar"
                   width={"100%"}
                   height={calculateElementHeight()}
            />
        </div>
    );
};

export default ApexChart;
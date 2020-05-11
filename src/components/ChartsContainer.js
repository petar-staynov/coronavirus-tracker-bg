import React, {useContext, useEffect, useState} from "react";
import Chart from 'react-apexcharts'
import {AppContext} from "../contexts/AppContext";

const ChartsContainer = () => {
    const [countryData,
        setCountryData,
        timelineData,
        setTimelineData,
        country,
        setCountry,
        status,
        setStatus] = useContext(AppContext);

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
        totalRecoveredCasesChart: {
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
        totalActiveCasesChart: {
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
        newCasesChart: {
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


    });

    const formatDate = (dateString) => {
        //Format date from "1/23/2020" to "23/01"
        const dateParams = dateString.split('/');
        return `${dateParams[1]}/${dateParams[0]}`;
    };

    const sortObject = (o) => {
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    };

    useEffect(() => {
        if (Object.keys(timelineData).length <= 0) return undefined;

        const timelineItems = timelineData.timeline;
        /* ***********Extract data for chart ********** */
        let skipEmptyDays = true;
        let old_total_cases = null;

        let datesArr = [];
        let totalCasesArr = [];
        let newCasesArr = [];
        let totalActiveCasesArr = [];

        const timelineItemsSorted = sortObject(timelineItems);
        const numberOfDates = Object.keys(timelineItemsSorted).length;

        let lastIndex = 0;
        let lastTotalCases = 0;
        Object.keys(timelineItemsSorted).forEach((date, index) => {
            //date = key
            const dayInfo = timelineItemsSorted[date];

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
    }, [timelineData]);

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

export default ChartsContainer;
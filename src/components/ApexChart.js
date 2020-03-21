import React, {useEffect, useState} from "react";
import Chart from 'react-apexcharts'

const ApexChart = (props) => {
    const [componentState, setComponentState] = useState(
        {
            series: [{
                name: "Coronavirus cases",
                data: [],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: `Общ брой случаи по дата:`,
                    align: 'center'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: [],
                }
            },
        });

    useEffect(() => {
        const {chartData} = props;
        if (Object.keys(chartData).length <= 0) return undefined;

        const timeline = chartData.timeline;

        //Extract data for chart
        let skipUntilNow = true;
        let old_total_cases = null;

        let timelineShort = [];
        let timelineDates = []; //IMP
        let timelineDateCases = []; //IMP
        Object.keys(timeline).forEach((key) => {
            const dayInfo = timeline[key];
            const {
                new_daily_cases,
                new_daily_deaths,
                total_cases,
                total_recoveries,
                total_deaths
            } = dayInfo;

            const activeCases = total_cases - (total_recoveries + total_deaths);

            //Skip INITIAL dates without reported numbers
            if (new_daily_cases > 0) skipUntilNow = false;
            if (!skipUntilNow) {
                if (total_cases !== old_total_cases) {
                    timelineShort.push(dayInfo);

                    //turn date key "1/23/2020" to "23/1" format
                    const dateParams = key.split('/');
                    const dateFormated = `${dateParams[1]}/${dateParams[0]}`;
                    timelineDates.push(dateFormated);

                    timelineDateCases.push(total_cases);
                    old_total_cases = total_cases;
                }
            }
        });

        //Remove last "stat" element from array which come from api
        timelineDates.pop();
        timelineDateCases.pop();

        setComponentState({
            ...componentState,
            series: [{
                ...componentState.series,
                data: timelineDateCases,
            }],
            options: {
                ...componentState.options,
                xaxis: {
                    categories: timelineDates,
                }
            }
        });
    }, [props]);

    const calculateElementHeight = () => {
        let width = Math.max(window.screen.width, window.innerWidth);

        if (width >= 1200) {
            return 640;
        } else if (width >= 992) {
            return 640;
        } else if (width >= 768) {
            return 576;
        } else if (width >= 576) {
            return 480;
        } else {
            return 360;
        }
    };

    return (
        <Chart options={componentState.options}
               series={componentState.series}
               type="bar"
               width={"100%"}
               height={calculateElementHeight()}
        />
    );
};

export default ApexChart;
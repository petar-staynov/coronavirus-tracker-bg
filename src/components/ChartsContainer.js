import React, {useContext, useEffect, useState} from "react";
import Chart from 'react-apexcharts'

const ChartsContainer = (props) => {
    const {dates, totalCasesStats, activeCasesStats, newCasesStats} = props.data;

    const [totalCasesChartData, setTotalCasesChartData] = useState({
        series: [{
            name: "Total cases",
            data: [...totalCasesStats]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: true,
            },
            xaxis: {
                categories: [...dates],
            }
        },
    },);
    const [activeCasesChartData, setActiveCasesChartData] = useState({
        series: [{
            name: "Active cases",
            data: [...activeCasesStats]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                },
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
                categories: [...dates],
            }
        },
    },);
    const [newCasesChartData, setNewCasesChartData] = useState({
        series: [{
            name: "New cases",
            data: [...newCasesStats]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                },
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
                categories: [...dates],
            }
        },
    },);

    return (
        <div className="text-center">
            <span><strong>Общ брой случаи:</strong></span>
            <Chart options={totalCasesChartData.options}
                   series={totalCasesChartData.series}
                   type="line"
                   width={"100%"}
            />
            <span><strong>Активни случаи</strong></span>
            <Chart options={activeCasesChartData.options}
                   series={activeCasesChartData.series}
                   type="line"
                   width={"100%"}
            />
            <span><strong>Нови случаи</strong></span>
            <Chart options={newCasesChartData.options}
                   series={newCasesChartData.series}
                   type="line"
                   width={"100%"}
            />
        </div>
    );
};

export default ChartsContainer;
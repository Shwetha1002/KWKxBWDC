<script>
    import * as Highcharts from "highcharts";
    import "highcharts/modules/exporting";
    import { Chart } from "@highcharts/svelte";
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";

    let options = {
        chart: {
            type: "line",
        },
        title: {
            text: " ",
        },
           xAxis: {
        title: {
            text: "Years"   // X-axis label
        }
    },
    yAxis: {
        title: {
            text: "Amount in Thousands ($)"   // Y-axis label
        }
    },
    tooltip: {
        valueSuffix: "K $",    // Optional: shows unit in tooltip (e.g., 45 m)
        shared: true
    },
        plotOptions: {
           line: {
            dataLabels: {
                enabled: true,   
            },
            enableMouseTracking: true,  
        }
        },
        series: [
        {
            name: "White",         
            data: [[2010, 177], [2013, 181], [2016, 211] , [2019, 219], [2022, 284]]
        },
        {
            name: "Other",         // Second dataset
            data: [[2010, 58], [2013, 52], [2016, 80] , [2019, 86], [2022, 132]]
        },
        {
            name: "Hispanic",         // Third dataset
            data: [[2010, 23], [2013, 18], [2016, 26] , [2019, 42], [2022, 62]]
        },
         {
            name: "Black",         // Third dataset
            data: [[2010, 22], [2013, 17], [2016, 28] , [2019, 21], [2022, 44]]
        }
    ]
    };

let networth_degree = {
        chart: {
            type: "line",
        },
        title: {
            text: " ",
        },
           xAxis: {
        title: {
            text: "Years"   // X-axis label
        }
    },
    yAxis: {
        title: {
            text: "Amount in Thousands ($)"   // Y-axis label
        }
    },
    tooltip: {
        valueSuffix: "K $",    // Optional: shows unit in tooltip (e.g., 45 m)
        shared: true
    },
        plotOptions: {
           line: {
            dataLabels: {
                enabled: true,   
            },
            enableMouseTracking: true,  
        }
        },
        series: [
        {
            name: "White",         
            data: [[2010, 455], [2013, 463], [2016, 492] , [2019, 460], [2022, 579]]
        },
        {
            name: "Other",         // Second dataset
            data: [[2010, 143], [2013, 265], [2016, 260] , [2019, 312], [2022, 513]]
        },
        {
            name: "Hispanic",         // Third dataset
            data: [[2010, 87], [2013, 71], [2016, 94] , [2019, 131], [2022, 206]]
        },
         {
            name: "Black",         // Third dataset
            data: [[2010, 144], [2013, 45], [2016, 84] , [2019, 84], [2022, 129]]
        }
    ]
    };

    
</script>

<div>
    <Scroller layout="right">
        {#snippet sticky()}
        <h2>Median Networth of Different Ethnicities</h2>
            <div class="chart">
                <Chart {options} highcharts={Highcharts} />
            </div>
           
          
           
        {/snippet}

        {#snippet scrolly()}
            <ArticleText>
                <strong>This data really stood out to me</strong
                >
            </ArticleText>

            <ArticleText>
                <strong>
                Even through recent years, the median networth of the black population
                is consistently lower than other ethnicities.
                </strong>
            </ArticleText>

            <ArticleText>
                <strong>
                $44,000 wouldn't even cover half of a medical bill for a serious surgery in the U.S.
                </strong>
            </ArticleText>

            <ArticleText>
                <strong>
               $44,000 is less than the down payment required for a small home in many cities.
                </strong>
            </ArticleText>

            <ArticleText>
                <strong>
               Now let's only consider people who have obtained a degree to see if the same pattern follows:
                </strong>
            </ArticleText>
        {/snippet}
    
    </Scroller>
    </div>
    


<style>
    .chart {
        width: 90%;
        margin: 0px auto;
    }
</style>

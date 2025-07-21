<script>
    import * as Highcharts from "highcharts";
    import "highcharts/modules/exporting";
    import { Chart } from "@highcharts/svelte";
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
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

<Scroller layout="right">
        {#snippet sticky()}
        <h2>Median Income of Different Ethnicities (with atleast one degree)</h2>
            <div class="chart">
                <Chart options={networth_degree} highcharts={Highcharts} />

            </div>
          
           
        {/snippet}

        {#snippet scrolly()}
            <ArticleText>
                <strong>Although the values increase when we only consider
                    people with a degree, it's still relatively lower in comparison to other ethnicities.</strong
                >
            </ArticleText>

            
        {/snippet}
    
    </Scroller>

    <style>
    .chart {
        width: 90%;
        margin: 0px auto;
    }
</style>


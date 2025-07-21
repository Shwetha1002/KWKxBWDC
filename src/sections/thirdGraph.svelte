<script>
    import * as Highcharts from "highcharts";
    import "highcharts/modules/exporting";
    import { Chart } from "@highcharts/svelte";
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
    let poverty_rates = {
        chart: {
            type: "line",
        },
        title: {
            text: " ",
        },
           xAxis: {
            type: "datetime",
        title: {
            text: "Dates"   // X-axis label
        }
    },
    yAxis: {
        title: {
            text: "Poverty Percentage (%)"   // Y-axis label
        }
    },
    tooltip: {
        valueSuffix: " % ",    // Optional: shows unit in tooltip (e.g., 45 m)
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
            data: [[Date.UTC(2023,2,1), 9], [Date.UTC(2023,4,1), 12], [Date.UTC(2024,1,1), 13] , [Date.UTC(2024,2,1), 10], [Date.UTC(2024,11,1), 13]]
        },
        {
            name: "Asian",         // Second dataset
            data: [[Date.UTC(2023,2,1), 11], [Date.UTC(2023,4,1), 16], [Date.UTC(2023,7,1), 16] , [Date.UTC(2024,0,1), 18], [Date.UTC(2024,2,1), 13], [Date.UTC(2024,11,1), 17]]
        },
        {
            name: "Hispanic",         // Third dataset
            data: [[Date.UTC(2023,2,1), 15], [Date.UTC(2023,7,1), 38], [Date.UTC(2024,2,1), 18] , [Date.UTC(2024,7,1), 30], [Date.UTC(2024,11,1), 29]]
        },
         {
            name: "Black",         // Third dataset
            data: [[Date.UTC(2023,2,1), 16], [Date.UTC(2023,5,1), 27], [Date.UTC(2024,1,1), 25] , [Date.UTC(2024,2,1), 18], [Date.UTC(2024,5,1), 27], [Date.UTC(2024,11,1), 25]]
        }
    ]
    };

    
</script>

<Scroller layout="right">
        {#snippet sticky()}
        <h3>Poverty Rates </h3>
            <div class="chart">
                <Chart options={poverty_rates} highcharts={Highcharts} />

            </div>
          
           
        {/snippet}

        {#snippet scrolly()}
            <ArticleText>
                <strong>25% of the black population is considered poor. That's 1 in 4 people.</strong
                >
            </ArticleText>

            
        {/snippet}
    
    </Scroller>
    <div class = "another">
<h2>This can potentially be </h2>

<h2> attributed to some other data:</h2>
</div>
    
    

    <style>
    .chart {
        width: 90%;
        margin: 0px auto;
    }
    h2{
        
        color: green; 
    
    text-shadow: 
       
        -1px -1px 0 black,
         1px -1px 0 black,
        -1px  1px 0 black,
         1px  1px 0 black;

        
        /* 2px 2px 0 yellow,
         3px 3px 0 yellow,
         4px 4px 0 yellow,
         5px 5px 0 yellow; */
    font-weight: bold;
        
    }
    .another{
        text-align: center;
        font-size: 2em;

    }

    h3{
        font-size: 1.5em;
    }
</style>


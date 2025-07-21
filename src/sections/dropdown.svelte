<script>
    // State to track open/closed panels
    let activePanel = null;
    import * as Highcharts from "highcharts";
    import myImage from './map.png';
    import "highcharts/modules/exporting";
    import { Chart } from "@highcharts/svelte";
    // Function to toggle a panel
    function togglePanel(panelName) {
        activePanel = activePanel === panelName ? null : panelName;
    
    
    

    }
    let stocks = {
        chart: {
            type: "bar",
        },
        title: {
            text: " ",
        },
           xAxis: {
                categories: ["White", "Other", "Hispanic", "Black"],
                title: {
                    text: "Ethnicity"   // X-axis label
        }
    },
    yAxis: {
        title: {
            text: "Amount in Thousands ($)"   // Y-axis label
        }
    },
    tooltip: {
        valueSuffix: " $ ",    // Optional: shows unit in tooltip (e.g., 45 m)
        shared: true
    },
        plotOptions: {
           bar: {
            dataLabels: {
                enabled: true,   
            },
            enableMouseTracking: true,  
        }
        },
        series: [{
        name: "Amount",
        data: [67.8, 34, 24, 16.5]   
    }]
    };

let stem = {
        chart: {
            type: "bar",
        },
        title: {
            text: " ",
        },
           xAxis: {
                categories: ["White - Male", "White - Female",
        "Asian - Male", "Asian - Female",
        "Hispanic - Male", "Hispanic - Female",
        "Black - Male", "Black - Female"],
                title: {
                    text: "Ethnicity & gender"   // X-axis label
        }
    },
    yAxis: {
        title: {
            text: "Percentage"   // Y-axis label
        }
    },
    tooltip: {
        valueSuffix: " % ",    // Optional: shows unit in tooltip (e.g., 45 m)
        shared: true
    },
        plotOptions: {
           bar: {
            dataLabels: {
                enabled: true,   
            },
            enableMouseTracking: true,  
        }
        },
        series: [{
        
        data: [{ y:51.2, color: '#1f77b4'}, {y:28.8 ,color: '#1f77b4'}, {y:62.8, color: '#ff7f0e'},{y:48.2, color: '#ff7f0e'}, {y: 46.4, color: 'yellow'}, {y:26.4, color: 'yellow'}, {y:41.5, color: 'green'}, {y:20.7, color: 'green'} ]   
    }]
    };


    let loans = {
        chart: {
            type: "bar",
        },
        title: {
            text: " ",
        },
           xAxis: {
                categories: ["White", "Other", "Hispanic", "Black"],
                title: {
                    text: "Ethnicity"   // X-axis label
        }
    },
    yAxis: {
        title: {
            text: "Actions taken per 100 people"   // Y-axis label
        }
    },
    tooltip: {
        valueSuffix: "  ",    // Optional: shows unit in tooltip (e.g., 45 m)
        shared: true
    },
        plotOptions: {
           bar: {
            dataLabels: {
                enabled: true,   
            },
            enableMouseTracking: true,  
        }
        },
        series: [{
        
        data: [0.51, 0.65, 0.47, 0.49]   
    }]
    };

    let inherit = {
        chart: {
            type: "bar",
        },
        title: {
            text: " ",
        },
           xAxis: {
                categories: ["White",  "Hispanic", "Black"],
                title: {
                    text: "Ethnicity"   // X-axis label
        }
    },
    yAxis: {
        title: {
            text: "Percentage of population"   // Y-axis label
        }
    },
    tooltip: {
        valueSuffix: " % ",    // Optional: shows unit in tooltip (e.g., 45 m)
        shared: true
    },
        plotOptions: {
           bar: {
            dataLabels: {
                enabled: true,   
            },
            enableMouseTracking: true,  
        }
        },
        series: [{
        name: "Amount",
        data: [16, 6.7, 7.2]   
    }]
    };

</script>

<div class="dashboard">
    {#each [
        { name: "stocks", label: "Stocks & Assets      ▼" },
        { name: "loans", label:  "Loans                ▼   " },
        { name: "stem",   label: "STEM Degree Holders  ▼" },
       

        
        { name: "inheritance",label:"Generational Wealth & Inheritance  ▼" },
        
    ] as panel}
        <div class="panel" on:click={() => togglePanel(panel.name)}>
            <h2>{panel.label}</h2>

            {#if activePanel === panel.name}
                <div class="dropdown-content">
                    {#if panel.name === "stocks"}
                        <h3>Investment in Stocks</h3>
                        <div class="chart">
                            <Chart options={stocks} highcharts={Highcharts} />
                        </div>
                        <p>Stocks historically offer higher long-term returns compared 
                            to savings accounts, bonds, or fixed deposits.</p>
                        <p>In the data above, we see that among all ethnicities, the black population as a whole
                            invests lesser in stocks which prevents potential compound growth.
                        </p>
                    {:else if panel.name === "loans"}
                        <h3>Loans Denied</h3>
                        <div class="chart">
                            <Chart options={loans} highcharts={Highcharts} />
                        </div>
                        <p>Loans provide immediate access to resources you might not
                             have upfront-like buying a home, funding education, or
                              starting a business-allowing you to invest in 
                              long-term growth or stability.</p>
                            <p>Being denied loans can make it difficult to achieve long term growth.</p>
                    {:else if panel.name === "stem"}
                        <h3>Jobs Data</h3>
                        <div class="chart">
                            <Chart options={stem} highcharts={Highcharts} />
                        </div>
                        <p>STEM jobs combine high paying salaries, security, and advancement with skills that support long-term financial growth.</p>
                        <p>The above data is of those who have obtained a STEM degree and have
                            continued to work in STEM fields. 
                        </p>
                        <p>There is a sharp decline in these retention numbers when it comes to women in general.
                        </p>
                        
                        
                    
                    {:else if panel.name === "inheritance"}
                        <h3>Inheritance</h3>
                        <div class="chart">
                            <Chart options={inherit} highcharts={Highcharts} />
                        </div>
                        <p>Inheritance provides a direct financial boost—cash, 
                            property, investments—that recipients didn’t have to
                             earn themselves. It plays an extremely significant role in accumulation of generational wealth.</p>
                    {/if}
                </div>
            {/if}

        </div>
    {/each}
</div>

<style>
    .dashboard {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 900px;
        margin: 20px auto;
    }

    .panel {
        background-color: #f0f0f0;
        padding: 1rem;
        border-radius: 8px;
        cursor: pointer;
        border: 2px solid #ccc;
        transition: background-color 0.3s;
    }

    .panel:hover {
        background-color: #e0e0e0;
    }
    h3{
        text-align: center;
        font-size: 1.5em;
    }
    .dropdown-content {
        margin-top: 0.5rem;
        padding: 0.5rem;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        animation: slideDown 0.3s ease;
    }

    @keyframes slideDown {
        from {
            max-height: 0;
            opacity: 0;
        }
        to {
            max-height: 500px;
            opacity: 1;
        }
    }
</style>
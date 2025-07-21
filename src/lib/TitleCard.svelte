<script>
    let { intro, title, subtitle } = $props();
     import Scroller from "./Scroller.svelte";
</script>

<div class="title-card">
    <div class="content">
        <p>{intro}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
    </div>
    <div class = "secondBG">
        <div class = "sticky-line">
        <h2>After going through loads and loads of data...</h2>
       </div>
        <h3> One fact really stood out to me.</h3>
     

    </div>


<style>
    .title-card {
        background-color: #d985f5;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1rem;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    .content {
        max-width: 700px;
        background-color: #460654;
        padding: 2rem;
        border: 6px solid #fafafa;
        border-radius: 2rem;
        box-shadow: 16px 16px #0e0f0f;
    }
    .secondBG{
        background-color: white;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .sticky-line {
        position: sticky;
        top: 50vh;           
        background: white;  
        z-index: 10;        
    }
    h2 {
        color: black;
        font-size: 2.5rem;
        margin-bottom: 4800px; 
    }

     h3 {
        color: black;
        font-size: 2rem;
        
    }

    h1 {
        font-size: 4rem;
        margin: 0;
        color: #e3ff00;
        text-shadow: 1px 1px 0 #007052;
    }

    p {
        font-size: 2.5rem;
        color: #f7f5eb;
        margin-top: 1rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 2.2rem;
        }

        p {
            font-size: 1.1rem;
        }
    }
</style>
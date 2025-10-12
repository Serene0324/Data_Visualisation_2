var vg_1 = "population_choropleth.vg.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {

}).catch(console.error);

var vg_2 = "education_stackedbar.vg.json";
vegaEmbed("#stacked_bar_chart", vg_2).then(function(result) {
    
}).catch(console.error);

var vg_3 = "bubble_plot.vg.json";
vegaEmbed("#bubble_plot", vg_3).then(function(result) {
    
}).catch(console.error);

var vg_4 = "gender_divergingbar.vg.json";
vegaEmbed("#diverging_bar_chart", vg_4).then(function(result) {
    
}).catch(console.error);

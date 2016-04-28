(function($) {
  "use strict";


})($);


function map ( ){
  var width = 700,
      height = 580;

  var svg = d3.select( "body" )
    .append( "svg" )
    .attr( "width", width )
    .attr( "height", height );

  var neighborhoods = svg.append( "g" );
  var g = svg.append( "g" );

  var albersProjection = d3.geo.albers()
    .scale( 190000 )
    .rotate( [71.057,0] )
    .center( [0, 42.313] )
    .translate( [width/2,height/2] );

  var geoPath = d3.geo.path()
      .projection( albersProjection );

  g.selectAll( "path" )
    .data( neighborhoods_json.features )
    .enter()
    .append( "path" )
    .attr( "fill", "#ccc" )
    .attr( "d", geoPath );

};

$('#divNewNotifications').on('click',"li", function(event ) {
    event.preventDefault();

    var location = $(this).find('a').html()+"▼";
    $('#dropdown_title').html(location);
    $('.info').html($(this).find('a').html());
    console.log( $(this).find('a').data('veh') + " " + $(this).find('a').data('total') );
    $('.data1').empty().append($(this).find('a').data('veh'));
    $('.data2').empty().append($(this).find('a').data('total'));
    
});


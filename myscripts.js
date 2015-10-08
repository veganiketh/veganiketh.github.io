var chart = new Chartist.Line('.ct-chart', {
  labels: ['1990', '1991', '1992', '1993', '1994', '1995' ,'1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007' ,'2008', '2009', '2010', '2011', '2012', '2013' , '2014' , '2015'],
  series: [
    [7, 7, 2, 7, 4, 4, 11, 9, 10, 11, 13 , 8 , 9 , 9 , 8 , 13 , 7 , 17 , 18 , 20 , 9 , 15 , 7 , 13 , 13 , 11 , 2 ],
    
  ]
}, {
  low: 0,
  showArea: true,
  showPoint: false,
  fullWidth: true,
  onlyInteger: true,
});

chart.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});

var chart = new Chartist.Line('.ct-chart2', {
  labels: ['1990', '1991', '1992', '1993', '1994', '1995' ,'1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007' ,'2008', '2009', '2010', '2011', '2012', '2013' , '2014' , '2015'],
  series: [
    [7, 7, 2, 7, 4, 4, 11, 9, 10, 11, 13 , 8 , 9 , 9 , 8 , 13 , 7 , 17 , 18 , 20 , 9 , 15 , 7 , 13 , 13 , 11 , 2 ],
    [1, 1, 0, 2, 3, 2 , 2 , 2 , 0 , 1 , 1 , 0 , 0 , 1 , 2 , 0 , 1 , 3 , 3 , 2 , 3 , 3 , 0 , 0 , 3 , 1 ],
  ]
}, {
  low: 0,
  showArea: true,
  showPoint: false,
  fullWidth: true,
  onlyInteger: true,
});

chart.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});

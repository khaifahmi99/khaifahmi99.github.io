function init() {
  var country = "";

  var h = 600;
  var w = 1000;


  var title1 = document.getElementById('title-1');
  var title2 = document.getElementById('title-2');
  title1.innerHTML = "Average Alcohol Consumption Since 1990";

  var allBtn = document.getElementById('all');
  var europeBtn = document.getElementById('europe');
  var asiaBtn = document.getElementById('asia');
  var americaBtn = document.getElementById('america');
  var africaBtn = document.getElementById('africa');

  var allBtn10 = document.getElementById('all_06');
  var europeBtn10 = document.getElementById('europe_06');
  var asiaBtn10 = document.getElementById('asia_06');
  var americaBtn10 = document.getElementById('america_06');
  var africaBtn10 = document.getElementById('africa_06');

  var allBtn20 = document.getElementById('all_96');
  var europeBtn20 = document.getElementById('europe_96');
  var asiaBtn20 = document.getElementById('asia_96');
  var americaBtn20 = document.getElementById('america_96');
  var africaBtn20 = document.getElementById('africa_96');

  var worldAverage = 0;

  var bottomPadding = 80;
  var topPadding = 30;
  var paddingLeft = 40;

  var svg = d3.select('#chart')
  .append('svg')
  .attr("id", "svg")
  .attr('height', h)
  .attr('width', w)

  allBtn.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption Since 1990";
    initial('processed_dataset/average_alcohol_consumption_total.csv');
  });

  europeBtn.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in Europe Since 1990";
    initial('processed_dataset/europe_alcohol.csv');
  });

  asiaBtn.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in Asia Since 1990";
    initial('processed_dataset/asia_alcohol.csv');
  });

  americaBtn.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in America Since 1990";
    initial('processed_dataset/america_alcohol.csv');
  });

  africaBtn.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in Africa Since 1990";
    initial('processed_dataset/africa_alcohol.csv');
  });

  allBtn10.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption Since 2006";
    initial('processed_dataset/average_alcohol_consumption_0615.csv');
  });

  europeBtn10.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in Europe Since 2006";
    initial('processed_dataset/europe_alcohol_0615.csv');
  });

  asiaBtn10.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in Asia Since 2006";
    initial('processed_dataset/asia_alcohol_0615.csv');
  });

  americaBtn10.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in America Since 2006";
    initial('processed_dataset/america_alcohol_0615.csv');
  });

  africaBtn10.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in Africa Since 2006";
    initial('processed_dataset/africa_alcohol_0615.csv');
  });

  allBtn20.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption Since 1996";
    initial('processed_dataset/average_alcohol_consumption_9615.csv');
  });

  europeBtn20.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in Europe Since 1996";
    initial('processed_dataset/europe_alcohol_9615.csv');
  });

  asiaBtn20.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in Asia Since 1996";
    initial('processed_dataset/asia_alcohol_9615.csv');
  });

  americaBtn20.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in America Since 1996";
    initial('processed_dataset/america_alcohol_9615.csv');
  });

  africaBtn20.addEventListener('click', function(e) {
    document.getElementById('svg').innerHTML = '';
    title1.innerHTML = "Average Alcohol Consumption in Africa Since 1996";
    initial('processed_dataset/africa_alcohol_9615.csv');
  });

  initial('processed_dataset/average_alcohol_consumption_total.csv');

  function initial(mainLink) {
    svg.append("text")
    .attr("class", "x-label")
    .attr("text-anchor", "end")
    .attr("x", (w / 2 ) + 40)
    .attr("y", h - 6)
    .text("Country name");

    svg.append("text")
    .attr("class", "y-label")
    .attr("text-anchor", "end")
    .attr("x", -70)
    .attr("y", 6)
    .attr("dy", ".5em")
    .attr("transform", "rotate(-90)")
    .text("Alcohol consumption per capita for citizens aged 15 and above (l)");

    d3.csv(mainLink, function(d) {
      return {
        Country: d.Country,
        Continent: d.Continent,
        Average: +d.Average
      }
    }).then(function (data) {
      var dataset = data;
      barChart(dataset);
    }, function(err) {
      alert(err);
    })
  }

  function setupChart(country, tag) {
    if (tag == 1990) {
      d3.csv('processed_dataset/' + country + ".csv", function(d) {
        return {
          year: new Date(+d.Year, 0, 1),
          value: parseFloat(d.Value)
        }
      })
      .then(function(data) {
        var dataset = data;
        lineChart(dataset);
      });
    } else if (tag == 2006) {
      d3.csv('processed_dataset/' + country + "_0615.csv", function(d) {
        return {
          year: new Date(+d.Year, 0, 1),
          value: parseFloat(d.Value)
        }
      })
      .then(function(data) {
        var dataset = data;
        lineChart(dataset);
      });
    } else if (tag == 1996) {
      d3.csv('processed_dataset/' + country + "_9615.csv", function(d) {
        return {
          year: new Date(+d.Year, 0, 1),
          value: parseFloat(d.Value)
        }
      })
      .then(function(data) {
        var dataset = data;
        lineChart(dataset);
      });
    }
  };

  function barChart(dataset) {
    value_dataset = dataset.map(function(d) {
      return d.Average;
    });

    var avg = 0;
    for (var i = 0; i < value_dataset.length; i++) {
      avg += value_dataset[i];
    }
    avg = avg / value_dataset.length;

    var yScale = d3.scaleLinear()
    .domain([0, d3.max(value_dataset)])
    .rangeRound([h - bottomPadding, topPadding]);

    var yAxis = d3.axisLeft()
    .ticks(10)
    .scale(yScale);

    var xScale = d3.scaleBand()
    .domain(d3.range(dataset.length))
    .rangeRound([paddingLeft, w])
    .paddingInner(0.05);

    var xAxis = d3.scaleBand()
    .rangeRound([paddingLeft, w])
    .paddingInner(0.05);

    xAxis.domain(dataset.map(function(d) {
      if(d.Country.length > 9) {
        return d.Country.substring(0,9) + '...';
      } else {
        return d.Country;
      }
    }));

    svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("id", function (d) {
      return d.Country;
    })
    .attr("y", h - bottomPadding)
    .attr("height", 0)
    .attr("x", function(d, i) {
      return xScale(i);
    })
    .attr("width", xScale.bandwidth())
    .on("mouseover", function(d) {
      var xPosition = parseFloat(d3.select(this).attr("x"));
      var yPosition = parseFloat(d3.select(this).attr("y"));
      var wd = parseFloat(d3.select(this).attr("width"));

      svg.append("text")
      .attr("id", "tooltip")
      .attr("x", xPosition - 2)
      .attr("y", yPosition - 5)
      .style("color","black")
      .text(d.Average);

      d3.select(this)
      .transition()
      .delay(100)
      .attr("stroke", "black")
      .style("stroke-width", .3);
    })
    .on("mouseout", function(d) {
      d3.select(this)
      .transition()
      .delay(100)
      .attr("stroke", "none")

      d3.select("#tooltip").remove();
    })
    .on("click", function(d) {
      var id = d.Country;
      country = id;
      var range = title1.innerHTML.substr(title1.innerHTML.length-4,title1.innerHTML.length-1);
      d3.select("#svg2").remove();
      setupChart(country, range);
      title2.innerHTML = "Alcohol Consumption in " + country + " from " + range;
      scrollTo();
    })
    .transition()
    .duration(1000)
    .delay(function(d, i) {
      return i * 200;
    })
    .attr("y", function(d) {
      return yScale(d.Average);
    })
    .attr("height", function(d) {
      return (h - bottomPadding) - yScale(d.Average);
    })
    .style("fill", function(d) {
      switch (d.Continent) {
        case "Europe":
          return "#386cb0";
          break;
        case "Asia/Oceania":
          return "#d95f02";
          break;
        case "Africa":
          return "#1b9e77";
          break;
        case "America":
          return "#e7298a";
          break;
        default:
          return "black";
      }
    });

    svg.append("g")
    .attr("transform", "translate(" + (paddingLeft) + ",0)")
    .call(yAxis);

    svg.append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(0," + (h - bottomPadding) + ")")
    .call(d3.axisBottom(xAxis))
    .selectAll("text")
    .attr("dx", "-3em")
    .attr("dy", "0.4em")
    .attr("transform", "rotate(-70)");

    svg.append("line")
    .attr("class", "line-average")
    .attr("x1", paddingLeft)
    .attr("y1", yScale(avg))
    .attr("x2", w)
    .attr("y2", yScale(avg))
    .style("stroke", "white");

    svg.append("text")
    .attr("class", "text-average")
    .attr("x", w - 200)
    .attr("y", yScale(avg) - 5)
    .text("Average alcohol consumption");

    var axis = document.getElementById('x-axis');
    axis.parentNode.removeChild(axis);

    var sorted = dataset.sort(function(a, b) {
      return d3.descending(a.Average, b.Average);
    });

    xAxis.domain(sorted.map(function(d) {
      if(d.Country.length > 9) {
        return d.Country.substring(0,9) + '...';
      } else {
        return d.Country;
      }
    }));

    svg.selectAll("rect")
    .sort(function(a, b) {
      return d3.descending(a.Average, b.Average);
    })
    .attr("x", function(d, i) {
      return xScale(i);
    });

    svg.append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(0," + (h - bottomPadding) + ")")
    .call(d3.axisBottom(xAxis))
    .selectAll("text")
    .attr("dx", "-3em")
    .attr("dy", "0.4em")
    .attr("transform", "rotate(-70)");
  }

  function lineChart(dataset) {
    var svg2 = d3.select("#chart2")
    .style("height", "100vh")
    .append('svg')
    .attr('height', h)
    .attr('width', w)
    .attr('id', 'svg2');

    svg2.append("text")
    .attr("class", "x-label")
    .attr("text-anchor", "end")
    .attr("x", (w / 2 ) + 40)
    .attr("y", h - 20)
    .text("Year");

    svg2.append("text")
    .attr("class", "y-label")
    .attr("text-anchor", "end")
    .attr("x", -70)
    .attr("y", 6)
    .attr("dy", ".5em")
    .attr("transform", "rotate(-90)")
    .text("Alcohol consumption per capita for citizens aged 15 and above (l)");

    var total = 0;
    for (var i = 0; i < dataset.length; i++) {
      total += dataset[i].value;
    }
    var avg = total/dataset.length;
    console.log(avg);

    var xScale = d3.scaleTime()
    .domain([
      d3.min(dataset, function(d) {return d.year; }),
      d3.max(dataset, function(d) {return d.year; })
    ])
    .rangeRound([paddingLeft, w - paddingLeft]);

    var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) {return d.value; })])
    .rangeRound([h - bottomPadding, topPadding]);

    var line = d3.line()
    .x(function(d, i) {return xScale(d.year); })
    .y(function(d) {return yScale(d.value); })

    var area = d3.area()
    .defined(function(d) {return d.value; })
    .x(function(d) {return xScale(d.year); })
    .y0(function(d) {return yScale.range()[0]; })
    .y1(function(d) {return yScale(d.value); })

    var dangerArea = d3.area()
    .defined(function(d) {return d.value >= avg; })
    .x(function(d) {return xScale(d.year); })
    .y0(function() {return yScale(avg); })
    .y1(function(d) {return yScale(d.value); })

    var xAxis = d3.axisBottom()
    .ticks(10)
    .scale(xScale);

    var yAxis = d3.axisLeft()
    .ticks(15)
    .scale(yScale);

    svg2.append("path")
    .datum(dataset)
    .attr("class", "line")
    .transition()
    .duration(2500)
    .attr("d",  line);

    svg2.append("path")
    .datum(dataset)
    .attr("class", "area")
    .transition()
    .duration(2500)
    .attr("d", area);

    svg2.append("path")
    .datum(dataset)
    .attr("class", "danger-area")
    .transition()
    .duration(2500)
    .attr("d", dangerArea);

    svg2.append("g")
    .attr("transform", "translate(0, " + (h - bottomPadding) + ")")
    .call(xAxis);

    svg2.append("g")
    .attr("transform", "translate(" + (paddingLeft) + ", 0)")
    .call(yAxis);

    svg2.append("line")
    .attr("class", "line-average")
    .attr("x1", paddingLeft)
    .attr("y1", yScale(avg))
    .attr("x2", w - paddingLeft)
    .attr("y2", yScale(avg));

    svg2.append("text")
    .attr("class", "text-average")
    .attr("x", paddingLeft + 25)
    .attr("y", yScale(avg) - 5)
    .text(country + " average alcohol consumption over the years");
  }

  function scrollTo() {
    $('html, body').animate({ scrollTop: $('#insight2').offset().top }, 'slow');
    return false;
  }

}

window.onload = init;

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// create chart
var chart = am4core.create("chartdiv", am4plugins_sunburst.Sunburst);
chart.padding(0, 0, 0, 0);
chart.radius = am4core.percent(85);

chart.data = [

  {
    name: "Who Is",
    children: [


      {
        name: "America",
        children: [
          { name: "Who is winning?", value: 71 },
          { name: "Who is winning the election?", value: 21 },
          { name: "Who is the president?", value: 19 },
          { name: "Who is this?", value: 12 },
          { name: "Who is God?", value: 5 }
        ]
      },
      {
        name: "Brazil",
        children: [
          { name: "Who is she?", value: 35 },
          { name: "Who is that?", value: 7 },
          { name: "Who the fuck is?", value: 12 },
          { name: "Who is the father?", value: 10 },
          { name: "Who is happy?", value: 21 }
        ]
      },
      {
        name: "United Kingdom",
        children: [
          { name: "Who is the President?", value: 19 },
          { name: "Who is the Masked Singer?", value: 10 },
          { name: "Who is winning the election?", value: 12 },
          { name: "Who is this number?", value: 9 },
          { name: "Who is Banksy?", value: 6 }
        ]
      },
      {
        name: "Vietnam",
        children: [
          { name: "Who is that?", value: 34 },
          { name: "Who is IP?", value: 10 },
          { name: "Who is Grim Reeps?", value: 6 },
          { name: "Who is domain?", value: 3 },
          { name: "Who is socrative?", value: 3 }
        ]
      },
      {
        name: "South Africa",
        children: [
          { name: "Who is God?", value: 26 },
          { name: "Who is Jesus?", value: 14 },
          { name: "ho is the President of South Africa?", value: 7 },
          { name: "Who is the richest man in the world?", value: 8 },
          { name: "Who is George Floyd?", value: 7 }
        ]
      }


    ]
  },

  {
    name: "What Is",
    children: [


      {
        name: "America",
        children: [
          { name: "It is what it is?", value: 190 },
          { name: "What time is it?", value: 58 },
          { name: "What is today?", value: 36 },
          { name: "What is Coronavirus?", value: 26 },
          { name: "What is the weather?", value: 13 }
        ]
      },
      {
        name: "Brazil",
        children: [
          { name: "What is it?", value: 135 },
          { name: "What is love?", value: 89 },
          { name: "What time is it?", value: 37 },
          { name: "What is love?", value: 22 },
          { name: "What is my IP?", value: 25 }
        ]
      },
      {
        name: "United Kingdom",
        children: [
          { name: "It is what it is?", value: 172 },
          { name: "What is the time?", value: 68 },
          { name: "What is Coronavirus?", value: 36 },
          { name: "What is me?", value: 36 },
          { name: "What is love?", value: 13 }
        ]
      },
      {
        name: "Vietnam",
        children: [
          { name: "What is IP?", value: 197 },
          { name: "What time is it?", value: 58 },
          { name: "What is business?", value: 34 },
          { name: "What is marketing?", value: 31 },
          { name: "What is SEO?", value: 20 }
        ]
      },
      {
        name: "South Africa",
        children: [
          { name: "What is the time?", value: 123 },
          { name: "What is Coronavirus?", value: 81 },
          { name: "What is love?", value: 65 },
          { name: "What is computer?", value: 32 },
          { name: "What is science?", value: 23 }
        ]
      }


    ]
  },


  {
    name: "Where Is",
    children: [


      {
        name: "America",
        children: [
          { name: "Where is Coronavirus?", value: 18 },
          { name: "Where is my refund?", value: 15 },
          { name: "Where is my stimulus?", value: 14 },
          { name: "Where is trump?", value: 10 },
          { name: "Where is the heart?", value: 6 }
        ]
      },
      {
        name: "Brazil",
        children: [
          { name: "Where is the love?", value: 43 },
          { name: "Where is my mind?", value: 13 },
          { name: "Where is the heart?", value: 12 },
          { name: "Where is my flowers?", value: 3 },
          { name: "Where is the light?", value: 5 }
        ]
      },
      {
        name: "United Kingdom",
        children: [
          { name: "Where is Coronavirus?", value: 33 },
          { name: "Where is the heart", value: 13 },
          { name: "Where is the love?", value: 12 },
          { name: "Where is my love?", value: 9 },
          { name: "Where am I?", value: 8 }
        ]
      },
      {
        name: "Vietnam",
        children: [
          { name: "Where is the love?", value: 24 },
          { name: "Where is my IP?", value: 17 },
          { name: "Where is my phone?", value: 6 },
          { name: "Where is Xur?", value: 3 },
          { name: "Where is signal?", value: 3 }
        ]
      },
      {
        name: "South Africa",
        children: [
          { name: "Where is Cape Town?", value: 37 },
          { name: "Where is London?", value: 8 },
          { name: "Where is the love??", value: 8 },
          { name: "Where is Bloemfontein?", value: 6 },
          { name: "Where is my phone?", value: 4 }
        ]
      }


    ]
  },

  {
    name: "Why Is",
    children: [


      {
        name: "America",
        children: [
          { name: "Why is poop green?", value: 22 },
          { name: "Why is the sky blue?", value: 19 },
          { name: "Why is there a coin shortage?", value: 14 },
          { name: "Why is it called Coronavirus?", value: 9 },
          { name: "Why is Max mute in Max & Ruby?", value: 7 }
        ]
      },
      {
        name: "Brazil",
        children: [
          { name: "Why is everything chrome?", value: 37 },
          { name: "Why is my pee red?", value: 10 },
          { name: "Why is Kat so weird in Victorious?", value: 6 }
        ]
      },
      {
        name: "United Kingdom",
        children: [
          { name: "Why is the sky blue?", value: 20 },
          { name: "Why is COVID-19 called COVID-19?", value: 12 },
          { name: "Why is communication important?", value: 17 },
          { name: "Why is boxing day called boxing day?", value: 15 },
          { name: "Why is tik-tok getting banned?", value: 9 }
        ]
      },
      {
        name: "Vietnam",
        children: [
          { name: "hy is it that many teenager have the energy to play computer?", value: 29 },
          { name: "Why is it important to calibrate?", value: 18 },
          { name: "Why is calibration important in chemistry?", value: 13 }
        ]
      },
      {
        name: "South Africa",
        children: [
          { name: "Why is education important?", value: 25 },
          { name: "Why is water important?", value: 18 },
          { name: "Why is the sky blue?", value: 17 },
          { name: "Why is social distancing important?", value: 13 }
        ]
      }


    ]
  },

  {
    name: "When Is",
    children: [


      {
        name: "America",
        children: [
          { name: "When is Easter?", value: 24 },
          { name: "When is Fall?", value: 16 },
          { name: "When is Fathers Day?", value: 16 },
          { name: "When is Spring?", value: 15 },
          { name: "When is the Election?", value: 13 }
        ]
      },
      {
        name: "Brazil",
        children: [
          { name: "When is the weather fine?", value: 23 },
          { name: "When is Thanksgiving?", value: 18 },
          { name: "When is your birthday?", value: 16 },
          { name: "When is the party over?", value: 12 },
          { name: "When is Black Friday?", value: 10 }
        ]
      },
      {
        name: "United Kingdom",
        children: [
          { name: "When is Easter?", value: 20 },
          { name: "When is Black Friday", value: 20 },
          { name: "When is Lockdown?", value: 15 },
          { name: "When is Fathers Day?", value: 14 },
          { name: "When is Christmas?", value: 10 }
        ]
      },
      {
        name: "Vietnam",
        children: [
          { name: "When is Black Friday?", value: 19 },
          { name: "When is your birthday?", value: 18 },
          { name: "When is the weather fine?", value: 14 },
          { name: "When is Christmas?", value: 13 },
          { name: "When is Halloween?", value: 6 }
        ]
      },
      {
        name: "South Africa",
        children: [
          { name: "When is Black Friday?", value: 21 },
          { name: "When is Fathers Day?", value: 17 },
          { name: "When is the President Address?", value: 15 },
          { name: "When is Easter?", value: 13 },
          { name: "When is Africa Day?", value: 12 }
        ]
      }


    ]
  }

];

chart.colors.step = 2;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(20);

// define data fields
chart.dataFields.value = "value";
chart.dataFields.name = "name";
chart.dataFields.children = "children";


var level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
chart.seriesTemplates.setKey("0", level0SeriesTemplate)

// this makes labels to be hidden if they don't fit
level0SeriesTemplate.labels.template.truncate = true;
level0SeriesTemplate.labels.template.hideOversized = true;
level0SeriesTemplate.showOnInit = false;
level0SeriesTemplate.usePercentHack = false;

level0SeriesTemplate.radius = am4core.percent(100);
level0SeriesTemplate.innerRadius = am4core.percent(0);

let selectedState = level0SeriesTemplate.states.create("selected");
selectedState.properties.opacity = 0.7;
level0SeriesTemplate.defaultState.properties.radius = am4core.percent(100);

var currentlySelected;

level0SeriesTemplate.slices.template.events.on("over", function(event) {
  if(event.target.dataItem.sunburstDataItem.children){
   event.target.cursorOverStyle = am4core.MouseCursorStyle.pointer;
  }
})

level0SeriesTemplate.slices.template.events.on("hit", function(event) {
  zoomOutButton.show();
  var hitSlice = event.target;

  if (hitSlice.dataItem.sunburstDataItem.children) {

    var series = event.target.dataItem.component;

    if (!series.dummyData) {
      series.tooltip.disabled = true;
      hitSlice.dataItem.label.radius = (hitSlice.radius - hitSlice.pixelInnerRadius) - 7;
      hitSlice.dataItem.label.bent = true;
      hitSlice.dataItem.label.rotation = -180;

      currentlySelected = hitSlice;
      series.dummyData = true;
      series.setState("selected");
      hitSlice.dataItem.sunburstDataItem.series.show();
      series.slices.each(function(slice) {
        if (slice != event.target) {
          slice.dataItem.hide();
        }
      })
    }
    else {
      drillUp(hitSlice);
    }
  }
})


level0SeriesTemplate.labels.template.adapter.add("rotation", function(rotation, target) {
  target.maxWidth = target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
  target.maxHeight = Math.abs(target.dataItem.slice.arc * (target.dataItem.slice.innerRadius + target.dataItem.slice.radius) / 2 * am4core.math.RADIANS);
  return rotation;
})

var level1SeriesTemplate = level0SeriesTemplate.clone();
level1SeriesTemplate.hidden = true;
level1SeriesTemplate.innerRadius = am4core.percent(10);
chart.seriesTemplates.setKey("1", level1SeriesTemplate)
level1SeriesTemplate.fillOpacity = 0.75;

var level2SeriesTemplate = level0SeriesTemplate.clone();
level2SeriesTemplate.hidden = true;
level2SeriesTemplate.innerRadius = am4core.percent(20);
chart.seriesTemplates.setKey("2", level2SeriesTemplate)

var zoomOutButton = chart.seriesContainer.createChild(am4core.ZoomOutButton);
zoomOutButton.visible = false;
zoomOutButton.horizontalCenter = "middle";
zoomOutButton.verticalCenter = "middle";
zoomOutButton.events.on("hit", function() {
  drillUp(currentlySelected)
})


function drillUp(slice) {
  collapse(slice);
  var series = slice.dataItem.component;
  series.tooltip.disabled = false;
  series.dummyData = false;
  series.setState("default");

  series.slices.each(function(slice) {
    if (slice != event.target) {
      slice.dataItem.show();
    }
  })

  if (series.parentDataItem.seriesDataItem) {
    currentlySelected = series.parentDataItem.seriesDataItem.slice;
  }
  else {
    zoomOutButton.hide();
  }
}


function collapse(slice) {

  slice.dataItem.label.bent = false;
  slice.dataItem.label.radius = 10;


  if (slice.dataItem.sunburstDataItem.children) {
    slice.dataItem.sunburstDataItem.children.each(function(child) {
      child.seriesDataItem.component.setState("hidden");
      collapse(child.seriesDataItem.slice);
    })
  }
}

table = $('<table/>');
table_head = $("<thead><tr><th>Country</th><th>Gold</th><th>Silver</th><th>Bronze</th><th>Total</th><th>Empire</th></tr></thead>");
table_body = $('<tbody/>');
table.append(table_head);
table.append(table_body);
table.css('float','left');
$(function() {
  $('body').html(table);
  $('body').append("<div style='margin-left: 30px; width: 400px; float: left'><p>Which modern countries are in what empires was hasterly constructed from some questionable sources. If you notice any that are wrong, poke me on twitter <a href='http://twitter.com/msaspence'>@msaspence</a>.</p><p>If you find this offensive because empires are opresive, sorry but its just a bit of fun and a chance to play with node.js. I'm sure you'll get over it.</p><p>If there are empires you wish to see added its <a href='http://github.com/msaspence/empiremedals'>open source</a>, knock your self out.</p></div>")
});

$.ajax({
  url: "/javascripts/codes.json",
  complete: function(codes) {
    eval("codes="+codes.responseText);
    socket = io.connect('/');
    socket.on('standings',function(data) {
      table_body.html("");
      var medals = [];

      $.each(codes,function(key,value) {
        if (codes[key].empire) {
          codes[key].total = 0;
          codes[key].gold = 0;
          codes[key].silver = 0;
          codes[key].bronze = 0;
        }
      });

      $.each(data["medals"],function(key,value) {
        value = value[0];
        medals.push({
          code: key,
          total: parseInt(value.total),
          gold: parseInt(value.gold),
          silver: parseInt(value.silver),
          bronze: parseInt(value.bronze)
        });
        if (codes[key].empires && codes[key].empires.length) {
          $.each(codes[key].empires,function(key,empire) {
            codes[empire].total += parseInt(value.total);
            codes[empire].gold += parseInt(value.gold);
            codes[empire].silver += parseInt(value.silver);
            codes[empire].bronze += parseInt(value.bronze);
          });
        }
      });



      $.each(codes,function(key,value) {
        if (value.empire) {
          medals.push({
            code: key,
            total: value.total,
            gold: value.gold,
            silver: value.silver,
            bronze: value.bronze
          })
        }
      });

      medals.sort(function(a,b) {
        return b.gold - a.gold;
      });

      if (medals !== null) {
        $.each(medals,function(key,value) {
          row = $('<tr/>');
          if (codes[value.code] !== undefined) {
            row.append("<td>"+codes[value.code].name+"</td>");
            if (codes[value.code].background) {
              row.css("background",codes[value.code].background);
            }
            if (codes[value.code].color) {
              row.css("color",codes[value.code].color);
            }
          } else {
            row.append("<td>"+value.code+"</td>");
          }
          row.append("<td>"+value.gold+"</td>");
          row.append("<td>"+value.silver+"</td>");
          row.append("<td>"+value.bronze+"</td>");
          row.append("<td>"+value.total+"</td>");
          var empire_cell = $("<td/>");
          if (codes[value.code].empires.length) {
            $.each(codes[value.code].empires,function(key,value) {
              var empire_icon = $("<div/>");
              empire_icon.css({'height': '15px', 'width': '15px', 'float': 'left'});
              if (codes[value].background) {
                empire_icon.css('background',codes[value].background);
              }
              empire_cell.append(empire_icon);
            });
          }
          row.append(empire_cell);
          table_body.append(row);
        });
      }
    });
  }
});